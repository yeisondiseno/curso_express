import { Router } from "express";
// Models
import { MovieModel } from "../models/mysql/movie.js";
// Controllers
import { MovieController } from "../controllers/movies.js";

export const moviesRouter = Router();

const movieController = new MovieController({ movieModel: MovieModel });

// Routes
moviesRouter.get("/", movieController.getAll);
moviesRouter.post("/", movieController.create);

moviesRouter.get("/:id", movieController.getById);
moviesRouter.delete("/:id", movieController.delete);
moviesRouter.patch("/:id", movieController.update);
