const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const SALT_ROUNDS = 12;

function parseUserId(value) {
  const id = Number(value);

  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return id;
}

function isValidText(value, maximumLength) {
  return (
    typeof value === "string" &&
    value.trim() !== "" &&
    value.trim().length <= maximumLength
  );
}

function validateProfile(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return null;
  }

  const { email, username, first_name, last_name } = body;

  if (
    !isValidText(email, 255) ||
    !isValidText(username, 50) ||
    !isValidText(first_name, 100) ||
    !isValidText(last_name, 100)
  ) {
    return null;
  }

  const normalizedEmail = email.trim().toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return null;
  }

  return {
    email: normalizedEmail,
    username: username.trim(),
    first_name: first_name.trim(),
    last_name: last_name.trim(),
  };
}

function isValidPassword(password) {
  if (typeof password !== "string") {
    return false;
  }

  const byteLength = Buffer.byteLength(password, "utf8");
  return byteLength >= 8 && byteLength <= 72;
}

function isUniqueViolation(error) {
  return error.code === "23505";
}

async function register(req, res, next) {
  try {
    const profile = validateProfile(req.body);
    const password = req.body?.password;

    if (!profile || !isValidPassword(password)) {
      return res.status(400).json({
        error:
          "Valid email, username, first_name, last_name, and password are required",
      });
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await userModel.registerUser({
      ...profile,
      passwordHash,
    });

    return res.status(201).json({
      message: "Registration successful",
      user,
    });
  } catch (error) {
    if (isUniqueViolation(error)) {
      return res.status(409).json({
        error: "Email or username is already registered",
      });
    }

    return next(error);
  }
}

async function login(req, res, next) {
  try {
    const { username, password } = req.body || {};

    if (
      typeof username !== "string" ||
      username.trim() === "" ||
      typeof password !== "string"
    ) {
      return res.status(400).json({
        error: "Username and password are required",
      });
    }

    const loginData = await userModel.findLoginByUsername(
      username.trim()
    );

    if (!loginData) {
      return res.status(401).json({
        error: "Invalid username or password",
      });
    }

    const passwordMatches = await bcrypt.compare(
      password,
      loginData.passwordHash
    );

    if (!passwordMatches) {
      return res.status(401).json({
        error: "Invalid username or password",
      });
    }

    return res.status(200).json({
      message: "Login successful",
      user: loginData.user,
    });
  } catch (error) {
    return next(error);
  }
}

async function getAllUsers(req, res, next) {
  try {
    const users = await userModel.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
}

async function getUserById(req, res, next) {
  try {
    const id = parseUserId(req.params.id);

    if (id === null) {
      return res.status(400).json({
        error: "User ID must be a positive integer",
      });
    }

    const user = await userModel.getUserById(id);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const id = parseUserId(req.params.id);

    if (id === null) {
      return res.status(400).json({
        error: "User ID must be a positive integer",
      });
    }

    const profile = validateProfile(req.body);

    if (!profile) {
      return res.status(400).json({
        error:
          "Valid email, username, first_name, and last_name are required",
      });
    }

    const user = await userModel.updateUser(id, profile);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    if (isUniqueViolation(error)) {
      return res.status(409).json({
        error: "Email or username is already in use",
      });
    }

    return next(error);
  }
}

module.exports = {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
};