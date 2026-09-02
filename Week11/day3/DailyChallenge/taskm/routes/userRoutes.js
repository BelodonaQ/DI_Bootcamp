const express = require("express");
const bcrypt = require("bcrypt");
const { readUsers, updateUsers } = require("../services/userStore");

const router = express.Router();
const SALT_ROUNDS = 12;
const PROFILE_FIELDS = ["first_name", "last_name", "email", "username"];

function createHttpError(status, message) {
  const error = new Error(message);
  error.status = status;
  return error;
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function normalizeText(value, fieldName, maximumLength) {
  if (typeof value !== "string" || value.trim() === "") {
    throw createHttpError(400, `${fieldName} is required`);
  }

  const normalized = value.trim();

  if (normalized.length > maximumLength) {
    throw createHttpError(
      400,
      `${fieldName} must contain at most ${maximumLength} characters`,
    );
  }

  return normalized;
}

function normalizeEmail(value) {
  const email = normalizeText(value, "email", 254).toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createHttpError(400, "email must be a valid email address");
  }

  return email;
}

function validatePassword(value) {
  if (typeof value !== "string" || value.trim() === "") {
    throw createHttpError(400, "password is required");
  }

  const byteLength = Buffer.byteLength(value, "utf8");

  if (byteLength < 8 || byteLength > 72) {
    throw createHttpError(400, "password must be between 8 and 72 bytes");
  }

  return value;
}

function validateLoginPassword(value) {
  if (typeof value !== "string" || value.trim() === "") {
    throw createHttpError(400, "password is required");
  }

  if (Buffer.byteLength(value, "utf8") > 72) {
    throw createHttpError(401, "Invalid username or password");
  }

  return value;
}

function normalizeProfile(body) {
  if (!isPlainObject(body)) {
    throw createHttpError(400, "Request body must be a JSON object");
  }

  return {
    first_name: normalizeText(body.first_name, "first_name", 100),
    last_name: normalizeText(body.last_name, "last_name", 100),
    email: normalizeEmail(body.email),
    username: normalizeText(body.username, "username", 50),
  };
}

function normalizeUpdates(body) {
  if (!isPlainObject(body)) {
    throw createHttpError(400, "Request body must be a JSON object");
  }

  const allowedFields = new Set([...PROFILE_FIELDS, "password"]);
  const suppliedFields = Object.keys(body);
  const unsupportedField = suppliedFields.find((field) => !allowedFields.has(field));

  if (unsupportedField) {
    throw createHttpError(400, `Cannot update field: ${unsupportedField}`);
  }

  if (suppliedFields.length === 0) {
    throw createHttpError(400, "Provide at least one user field to update");
  }

  const updates = {};

  if (Object.hasOwn(body, "first_name")) {
    updates.first_name = normalizeText(body.first_name, "first_name", 100);
  }
  if (Object.hasOwn(body, "last_name")) {
    updates.last_name = normalizeText(body.last_name, "last_name", 100);
  }
  if (Object.hasOwn(body, "email")) {
    updates.email = normalizeEmail(body.email);
  }
  if (Object.hasOwn(body, "username")) {
    updates.username = normalizeText(body.username, "username", 50);
  }
  if (Object.hasOwn(body, "password")) {
    updates.password = validatePassword(body.password);
  }

  return updates;
}

function parseUserId(value) {
  if (!/^[1-9]\d*$/.test(value)) {
    throw createHttpError(400, "User ID must be a positive integer");
  }

  const id = Number(value);

  if (!Number.isSafeInteger(id)) {
    throw createHttpError(400, "User ID must be a positive integer");
  }

  return id;
}

function publicUser(user) {
  const { password, ...safeUser } = user;
  return safeUser;
}

function usernamesMatch(first, second) {
  return first.localeCompare(second, undefined, { sensitivity: "accent" }) === 0;
}

async function passwordExists(users, candidatePassword, excludedUserId = null) {
  for (const user of users) {
    if (user.id !== excludedUserId && (await bcrypt.compare(candidatePassword, user.password))) {
      return true;
    }
  }

  return false;
}

router.post("/register", async (req, res, next) => {
  try {
    const profile = normalizeProfile(req.body);
    const password = validatePassword(req.body.password);
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await updateUsers(async (users) => {
      const usernameIsTaken = users.some((existingUser) =>
        usernamesMatch(existingUser.username, profile.username),
      );
      const passwordIsTaken = await passwordExists(users, password);

      if (usernameIsTaken || passwordIsTaken) {
        throw createHttpError(409, "Username or password is already registered");
      }

      const id = users.reduce((largestId, currentUser) => {
        return Math.max(largestId, Number(currentUser.id) || 0);
      }, 0) + 1;

      const newUser = {
        id,
        ...profile,
        password: passwordHash,
      };

      users.push(newUser);
      return publicUser(newUser);
    });

    return res.status(201).json({
      message: "Registration successful",
      user,
    });
  } catch (error) {
    return next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    if (!isPlainObject(req.body)) {
      throw createHttpError(400, "Request body must be a JSON object");
    }

    const username = normalizeText(req.body.username, "username", 50);
    const password = validateLoginPassword(req.body.password);
    const users = await readUsers();
    const user = users.find((existingUser) =>
      usernamesMatch(existingUser.username, username),
    );

    const passwordMatches = user ? await bcrypt.compare(password, user.password) : false;

    if (!user || !passwordMatches) {
      throw createHttpError(401, "Invalid username or password");
    }

    return res.status(200).json({
      message: "Login successful",
      user: publicUser(user),
    });
  } catch (error) {
    return next(error);
  }
});

router.get("/users", async (req, res, next) => {
  try {
    const users = await readUsers();
    return res.status(200).json(users.map(publicUser));
  } catch (error) {
    return next(error);
  }
});

router.get("/users/:id", async (req, res, next) => {
  try {
    const id = parseUserId(req.params.id);
    const users = await readUsers();
    const user = users.find((existingUser) => existingUser.id === id);

    if (!user) {
      throw createHttpError(404, "User not found");
    }

    return res.status(200).json(publicUser(user));
  } catch (error) {
    return next(error);
  }
});

router.put("/users/:id", async (req, res, next) => {
  try {
    const id = parseUserId(req.params.id);
    const updates = normalizeUpdates(req.body);
    const plainTextPassword = updates.password;
    const passwordHash = plainTextPassword
      ? await bcrypt.hash(plainTextPassword, SALT_ROUNDS)
      : null;

    const user = await updateUsers(async (users) => {
      const userToUpdate = users.find((existingUser) => existingUser.id === id);

      if (!userToUpdate) {
        throw createHttpError(404, "User not found");
      }

      if (
        updates.username &&
        users.some(
          (existingUser) =>
            existingUser.id !== id &&
            usernamesMatch(existingUser.username, updates.username),
        )
      ) {
        throw createHttpError(409, "Username is already registered");
      }

      if (plainTextPassword && (await passwordExists(users, plainTextPassword, id))) {
        throw createHttpError(409, "Password is already registered");
      }

      Object.assign(userToUpdate, updates);

      if (passwordHash) {
        userToUpdate.password = passwordHash;
      }

      return publicUser(userToUpdate);
    });

    return res.status(200).json({
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
