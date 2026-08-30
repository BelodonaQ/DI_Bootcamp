require("dotenv").config();

const express = require("express");
const postRoutes = require("./server/routes/postRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON request bodies
app.use(express.json());

// Mount the posts router
app.use("/posts", postRoutes);

// Handle requests that did not match any route
app.use((req, res) => {
  return res.status(404).json({
    error: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

// Handle unexpected errors
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
  console.log(`Blog API is running at http://localhost:${PORT}`);
});