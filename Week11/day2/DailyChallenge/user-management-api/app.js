require("dotenv").config();

const express = require("express");
const userRoutes = require("./server/routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/", userRoutes);

app.use((req, res) => {
  return res.status(404).json({
    error: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  console.error(error);

  const status = error.status || 500;
  const message =
    status === 500 ? "Internal server error" : error.message;

  return res.status(status).json({
    error: message,
  });
});

app.listen(PORT, () => {
  console.log(
    `User Management API is running at http://localhost:${PORT}`
  );
});