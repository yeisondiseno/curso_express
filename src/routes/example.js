import { Router } from "express";

export const baseRouter = Router();

baseRouter.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

baseRouter.get("/health", (req, res) => {
  res.send("<h1>OK</h1>");
});
