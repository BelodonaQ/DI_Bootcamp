const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");

test("User Management API", async (t) => {
  const temporaryDirectory = await fs.mkdtemp(path.join(os.tmpdir(), "user-api-test-"));
  const temporaryUsersFile = path.join(temporaryDirectory, "users.json");
  await fs.writeFile(temporaryUsersFile, "[]\n", "utf8");
  process.env.USERS_FILE = temporaryUsersFile;

  let server;

  t.after(async () => {
    if (server?.listening) {
      await new Promise((resolve, reject) => {
        server.close((error) => (error ? reject(error) : resolve()));
      });
    }

    await fs.chmod(temporaryDirectory, 0o700).catch(() => {});
    await fs.rm(temporaryDirectory, { recursive: true, force: true });
    delete process.env.USERS_FILE;
  });

  const bcrypt = require("bcrypt");
  const app = require("../app");
  server = app.listen(0, "127.0.0.1");
  await new Promise((resolve, reject) => {
    server.once("listening", resolve);
    server.once("error", reject);
  });
  const baseUrl = `http://127.0.0.1:${server.address().port}`;

  async function request(url, { method = "GET", body } = {}) {
    const response = await fetch(`${baseUrl}${url}`, {
      method,
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
    const payload = await response.json();
    return { response, payload };
  }

  const ada = {
    first_name: "Ada",
    last_name: "Lovelace",
    email: "ADA@example.com",
    username: "ada",
    password: "Analytical1!",
  };

  await t.test("validates registration and stores a bcrypt hash", async () => {
    const missing = await request("/register", {
      method: "POST",
      body: { username: "incomplete" },
    });
    assert.equal(missing.response.status, 400);

    const shortPassword = await request("/register", {
      method: "POST",
      body: { ...ada, password: "Short1!" },
    });
    assert.equal(shortPassword.response.status, 400);

    const longPassword = await request("/register", {
      method: "POST",
      body: { ...ada, password: "x".repeat(73) },
    });
    assert.equal(longPassword.response.status, 400);

    const registered = await request("/register", { method: "POST", body: ada });
    assert.equal(registered.response.status, 201);
    assert.equal(registered.payload.message, "Registration successful");
    assert.equal(registered.payload.user.id, 1);
    assert.equal(registered.payload.user.email, "ada@example.com");
    assert.equal(Object.hasOwn(registered.payload.user, "password"), false);

    const storedUsers = JSON.parse(await fs.readFile(temporaryUsersFile, "utf8"));
    assert.notEqual(storedUsers[0].password, ada.password);
    assert.equal(await bcrypt.compare(ada.password, storedUsers[0].password), true);
  });

  await t.test("does not store duplicate usernames or plaintext passwords", async () => {
    const duplicateUsername = await request("/register", {
      method: "POST",
      body: { ...ada, email: "other@example.com", password: "Different2!" },
    });
    assert.equal(duplicateUsername.response.status, 409);

    const duplicatePassword = await request("/register", {
      method: "POST",
      body: { ...ada, email: "grace@example.com", username: "grace" },
    });
    assert.equal(duplicatePassword.response.status, 409);

    const storedUsers = JSON.parse(await fs.readFile(temporaryUsersFile, "utf8"));
    assert.equal(storedUsers.length, 1);
  });

  await t.test("logs in with correct credentials and rejects incorrect credentials", async () => {
    const login = await request("/login", {
      method: "POST",
      body: { username: "Ada", password: ada.password },
    });
    assert.equal(login.response.status, 200);
    assert.equal(login.payload.message, "Login successful");
    assert.equal(Object.hasOwn(login.payload.user, "password"), false);

    const wrongPassword = await request("/login", {
      method: "POST",
      body: { username: "ada", password: "WrongPass9!" },
    });
    assert.equal(wrongPassword.response.status, 401);

    const unknownUser = await request("/login", {
      method: "POST",
      body: { username: "unknown", password: "WrongPass9!" },
    });
    assert.equal(unknownUser.response.status, 401);
    assert.equal(unknownUser.payload.error, wrongPassword.payload.error);
  });

  await t.test("lists, retrieves, and updates users without exposing hashes", async () => {
    const users = await request("/users");
    assert.equal(users.response.status, 200);
    assert.equal(users.payload.length, 1);
    assert.equal(Object.hasOwn(users.payload[0], "password"), false);

    const user = await request("/users/1");
    assert.equal(user.response.status, 200);
    assert.equal(user.payload.first_name, "Ada");
    assert.equal(Object.hasOwn(user.payload, "password"), false);

    const updated = await request("/users/1", {
      method: "PUT",
      body: { last_name: "Byron", password: "NewPassword2!" },
    });
    assert.equal(updated.response.status, 200);
    assert.equal(updated.payload.user.last_name, "Byron");
    assert.equal(Object.hasOwn(updated.payload.user, "password"), false);

    const oldPassword = await request("/login", {
      method: "POST",
      body: { username: "ada", password: ada.password },
    });
    assert.equal(oldPassword.response.status, 401);

    const newPassword = await request("/login", {
      method: "POST",
      body: { username: "ada", password: "NewPassword2!" },
    });
    assert.equal(newPassword.response.status, 200);
  });

  await t.test("returns useful ID, not-found, and storage errors", async () => {
    assert.equal((await request("/users/not-a-number")).response.status, 400);
    assert.equal((await request("/users/999")).response.status, 404);
    assert.equal(
      (await request("/users/999", { method: "PUT", body: { first_name: "Nobody" } }))
        .response.status,
      404,
    );

    const originalConsoleError = console.error;
    console.error = () => {};

    try {
      const backupFile = `${temporaryUsersFile}.backup`;
      await fs.rename(temporaryUsersFile, backupFile);

      try {
        assert.equal((await request("/users")).response.status, 500);
      } finally {
        await fs.rename(backupFile, temporaryUsersFile);
      }

      const validContents = await fs.readFile(temporaryUsersFile, "utf8");
      await fs.writeFile(temporaryUsersFile, "not JSON", "utf8");

      try {
        assert.equal((await request("/users")).response.status, 500);
      } finally {
        await fs.writeFile(temporaryUsersFile, validContents, "utf8");
      }

      if (process.platform !== "win32") {
        await fs.chmod(temporaryDirectory, 0o500);

        try {
          const failedWrite = await request("/users/1", {
            method: "PUT",
            body: { first_name: "Augusta" },
          });
          assert.equal(failedWrite.response.status, 500);
        } finally {
          await fs.chmod(temporaryDirectory, 0o700);
        }

        const recoveredWrite = await request("/users/1", {
          method: "PUT",
          body: { first_name: "Augusta" },
        });
        assert.equal(recoveredWrite.response.status, 200);
        assert.equal(recoveredWrite.payload.user.first_name, "Augusta");
      }
    } finally {
      console.error = originalConsoleError;
    }
  });

  await t.test("rejects bcrypt-truncated login candidates", async () => {
    const password = "x".repeat(72);
    const registered = await request("/register", {
      method: "POST",
      body: {
        first_name: "Grace",
        last_name: "Hopper",
        email: "grace@example.com",
        username: "grace",
        password,
      },
    });
    assert.equal(registered.response.status, 201);

    const login = await request("/login", {
      method: "POST",
      body: { username: "grace", password: `${password}suffix` },
    });
    assert.equal(login.response.status, 401);
  });

  await t.test("serializes concurrent registrations without losing users", async () => {
    const [charles, katherine] = await Promise.all([
      request("/register", {
        method: "POST",
        body: {
          first_name: "Charles",
          last_name: "Babbage",
          email: "charles@example.com",
          username: "charles",
          password: "Engine42!",
        },
      }),
      request("/register", {
        method: "POST",
        body: {
          first_name: "Katherine",
          last_name: "Johnson",
          email: "katherine@example.com",
          username: "katherine",
          password: "Orbital43!",
        },
      }),
    ]);

    assert.equal(charles.response.status, 201);
    assert.equal(katherine.response.status, 201);
    assert.notEqual(charles.payload.user.id, katherine.payload.user.id);

    const users = await request("/users");
    assert.equal(users.response.status, 200);
    assert.equal(users.payload.some((user) => user.username === "charles"), true);
    assert.equal(users.payload.some((user) => user.username === "katherine"), true);
  });
});
