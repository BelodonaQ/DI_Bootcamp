# User Management API

An Express.js API with registration, login, bcrypt password hashing, and JSON file storage.

## Run it

```bash
npm install
npm start
```

Open `http://localhost:5000/registration.html` or `http://localhost:5000/login.html`.

The registration request uses these field names:

```json
{
  "first_name": "Ada",
  "last_name": "Lovelace",
  "email": "ada@example.com",
  "username": "ada",
  "password": "Analytical1!"
}
```

Passwords must be 8–72 bytes. The stored `password` value is a bcrypt hash, and API responses never include it.

> This exercise rejects a password already used by another user because the challenge explicitly asks for it. A real application normally does not require passwords to be globally unique.

## Routes

| Method | Route | Description |
| --- | --- | --- |
| `POST` | `/register` | Register a user |
| `POST` | `/login` | Verify a username and password |
| `GET` | `/users` | List public user data |
| `GET` | `/users/:id` | Get one user's public data |
| `PUT` | `/users/:id` | Update one or more user fields |

`PUT /users/:id` accepts any non-empty selection of `first_name`, `last_name`, `email`, `username`, and `password`. A new password is hashed before it is saved.

## Test with curl

```bash
curl -i -X POST http://localhost:5000/register \
  -H 'Content-Type: application/json' \
  -d '{"first_name":"Ada","last_name":"Lovelace","email":"ada@example.com","username":"ada","password":"Analytical1!"}'

curl -i -X POST http://localhost:5000/login \
  -H 'Content-Type: application/json' \
  -d '{"username":"ada","password":"Analytical1!"}'

curl -i http://localhost:5000/users

curl -i http://localhost:5000/users/1

curl -i -X PUT http://localhost:5000/users/1 \
  -H 'Content-Type: application/json' \
  -d '{"last_name":"Byron"}'
```

Run the automated API checks with:

```bash
npm test
```
