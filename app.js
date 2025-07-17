// libraries
import express from "express";
// Config
import { env } from "./config/index.js";

// Configurations
const app = express();
app.disable("x-powered-by");

// Constants
const ACCEPTED_ORIGINS = [
  "http://localhost:5500",
  "http://localhost:8080",
  "http://127.0.0.1:5500",
];

// Middleware
app.use((req, res, next) => {
  // CORS Example
  // res.header("Access-Control-Allow-Origin", "*"); // This is an example, adjust as needed
  // Validate the origin against the accepted origins
  const origin = req.headers.origin;
  if (ACCEPTED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/health", (req, res) => {
  res.send("<h1>OK</h1>");
});

app.use((req, res, next) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(env.PORT, () => {
  console.log(`Example app listening on port ${env.PORT}`);
});
