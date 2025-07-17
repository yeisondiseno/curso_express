// libraries
const express = require("express");
// Config
const { PORT } = require("./config/env");

// Configurations
const app = express();
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.use((req, res, next) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
