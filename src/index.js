// libraries
import express from "express";
// Models
import { MovieModel } from "./models/mysql/movie.js";
// Middleware
import { corsMiddleware } from "./middleware/index.js";
// Routes
import { baseRouter, createMovieRoutes } from "./routes/index.js";

// Configurations
const app = express();
app.disable("x-powered-by");

// Middleware
app.use(express.json());
app.use(corsMiddleware());

// Routes
app.use("/", baseRouter); // Simplify the route registration
app.use("/movies", createMovieRoutes({ movieModel: MovieModel })); // Register movies routes

app.use((req, res, next) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

export default app;
