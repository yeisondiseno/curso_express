import { Router } from "express";
// Controllers
import { MovieController } from "../controllers/movies.js";

export const createMovieRoutes = ({ movieModel }) => {
  const moviesRouter = Router();

  const movieController = new MovieController({ movieModel });

  // Routes
  moviesRouter.get("/", movieController.getAll);
  moviesRouter.post("/", movieController.create);

  moviesRouter.get("/:id", movieController.getById);
  moviesRouter.delete("/:id", movieController.delete);
  moviesRouter.patch("/:id", movieController.update);

  return moviesRouter;
};
