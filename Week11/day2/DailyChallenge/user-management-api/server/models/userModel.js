const db = require("../config/db");

const publicUserColumns = [
  "id",
  "email",
  "username",
  "first_name",
  "last_name",
];

async function registerUser({
  email,
  username,
  first_name,
  last_name,
  passwordHash,
}) {
  return db.transaction(async (trx) => {
    const [user] = await trx("users")
      .insert({
        email,
        username,
        first_name,
        last_name,
      })
      .returning(publicUserColumns);

    await trx("hashpwd").insert({
      username,
      password: passwordHash,
    });

    return user;
  });
}

async function findLoginByUsername(username) {
  const row = await db("users")
    .join("hashpwd", "users.username", "hashpwd.username")
    .select(
      "users.id",
      "users.email",
      "users.username",
      "users.first_name",
      "users.last_name",
      "hashpwd.password as password_hash"
    )
    .where("users.username", username)
    .first();

  if (!row) {
    return null;
  }

  return {
    user: {
      id: row.id,
      email: row.email,
      username: row.username,
      first_name: row.first_name,
      last_name: row.last_name,
    },
    passwordHash: row.password_hash,
  };
}

async function getAllUsers() {
  return db("users")
    .select(publicUserColumns)
    .orderBy("id", "asc");
}

async function getUserById(id) {
  return db("users")
    .select(publicUserColumns)
    .where({ id })
    .first();
}

async function updateUser(
  id,
  { email, username, first_name, last_name }
) {
  const [user] = await db("users")
    .where({ id })
    .update({
      email,
      username,
      first_name,
      last_name,
    })
    .returning(publicUserColumns);

  return user;
}

module.exports = {
  registerUser,
  findLoginByUsername,
  getAllUsers,
  getUserById,
  updateUser,
};