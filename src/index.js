// libraries
import express from "express";
// Middleware
import { corsMiddleware } from "./middleware/index.js";
// Routes
import { baseRouter } from "./routes/index.js";

// Configurations
const app = express();
app.disable("x-powered-by");

// Middleware
app.use(express.json());
app.use(corsMiddleware());

// Routes
app.use("/", baseRouter); // Simplify the route registration

app.use((req, res, next) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

export default app;
