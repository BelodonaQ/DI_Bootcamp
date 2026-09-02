const path = require("node:path");
const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.disable("x-powered-by");
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false, limit: "10kb" }));

app.get("/", (req, res) => {
  return res.redirect("/registration.html");
});

app.get("/registration.html", (req, res, next) => {
  res.sendFile(path.join(__dirname, "registration.html"), (error) => {
    if (error) next(error);
  });
});

app.get("/resgistration.html", (req, res) => {
  return res.redirect(301, "/registration.html");
});

app.get("/login.html", (req, res, next) => {
  res.sendFile(path.join(__dirname, "login.html"), (error) => {
    if (error) next(error);
  });
});

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

  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return res.status(400).json({
      error: "Request body must contain valid JSON",
    });
  }

  const status = Number.isInteger(error.status) ? error.status : 500;
  const message = status >= 500 ? "Internal server error" : error.message;

  if (status >= 500) {
    console.error(error);
  }

  return res.status(status).json({ error: message });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`User Management API is running at http://localhost:${PORT}`);
  });
}

module.exports = app;
