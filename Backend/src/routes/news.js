import express from "express";
import NewsController from "../controllers/NewsController.js";
import FileServiceMiddleware from "../middleware/FileServiceMiddleware.js";

const newsRouter = express.Router();
const Ninstance = new NewsController();
const up = new FileServiceMiddleware();
const file = up.fileUpload("news");

newsRouter.get("/", Ninstance.index);
newsRouter.post("/", file.single("image"), Ninstance.store);
newsRouter.get("/:id", Ninstance.show);
newsRouter.put("/:id", file.single("image"), Ninstance.update);
newsRouter.delete("/:id", Ninstance.destroy);
export default newsRouter;
