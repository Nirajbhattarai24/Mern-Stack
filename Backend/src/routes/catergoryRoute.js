import express from "express";
import categoryController from "../controllers/categoryController.js";

const categoryRouter = express.Router();
const Cinstance = new categoryController();

categoryRouter.get("/", Cinstance.index);
categoryRouter.post("/", Cinstance.store);
categoryRouter.get("/:id", Cinstance.show);
categoryRouter.put("/:id", Cinstance.update);
categoryRouter.delete("/:id", Cinstance.destroy);

export default categoryRouter;
