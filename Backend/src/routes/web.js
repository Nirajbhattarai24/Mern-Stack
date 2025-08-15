//common file of all router

import express from "express";
import userRouter from "./user.js";
import categoryRouter from "./catergoryRoute.js";
import newsRouter from "./news.js";
import authRouter from "./auth.js";
import AuthMiddleware from "../middleware/AuthMiddleware.js";
const webRoute = express.Router();

webRoute.get("/", (req, res) => {
  return res.send("welcome to the web route");
});
webRoute.use("/auth", authRouter);
webRoute.use("/category", categoryRouter);
webRoute.use("/news", newsRouter);

webRoute.use("/users", AuthMiddleware.check, userRouter);

export default webRoute;
