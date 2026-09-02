const fs = require("node:fs/promises");
const path = require("node:path");

const usersFile = process.env.USERS_FILE
  ? path.resolve(process.env.USERS_FILE)
  : path.join(__dirname, "..", "users.json");

let writeQueue = Promise.resolve();
let temporaryFileSequence = 0;

class UserStoreError extends Error {
  constructor(message, cause) {
    super(message, { cause });
    this.name = "UserStoreError";
    this.status = 500;
  }
}

async function readUsers() {
  let contents;

  try {
    contents = await fs.readFile(usersFile, "utf8");
  } catch (error) {
    throw new UserStoreError("Unable to read users.json", error);
  }

  try {
    const users = JSON.parse(contents);

    if (!Array.isArray(users)) {
      throw new TypeError("The root JSON value must be an array");
    }

    return users;
  } catch (error) {
    throw new UserStoreError("users.json contains invalid data", error);
  }
}

async function writeUsers(users) {
  const directory = path.dirname(usersFile);
  const sequence = (temporaryFileSequence += 1);
  const temporaryFile = `${usersFile}.${process.pid}.${Date.now()}.${sequence}.tmp`;

  try {
    await fs.mkdir(directory, { recursive: true });
    await fs.writeFile(temporaryFile, `${JSON.stringify(users, null, 2)}\n`, {
      encoding: "utf8",
      flag: "wx",
    });
    await fs.rename(temporaryFile, usersFile);
  } catch (error) {
    await fs.rm(temporaryFile, { force: true }).catch(() => {});
    throw new UserStoreError("Unable to write users.json", error);
  }
}

function updateUsers(changeUsers) {
  const operation = writeQueue.then(async () => {
    const users = await readUsers();
    const result = await changeUsers(users);
    await writeUsers(users);
    return result;
  });

  writeQueue = operation.catch(() => {});
  return operation;
}

module.exports = {
  readUsers,
  updateUsers,
};
