// libraries
import express from "express";
// Config
import { env } from "./config/index.js";

// Configurations
const app = express();
app.disable("x-powered-by");

// Middleware
app.use((req, res, next) => {
  console.log("Middleware executed: ---->");
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
