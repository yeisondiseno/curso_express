// libraries
const express = require("express");
// Config
const { PORT } = require("./config/env");

// Configurations
const app = express();
const port = PORT;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
