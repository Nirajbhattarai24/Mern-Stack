import express from "express";
import AuthController from "../controllers/AuthController.js";

const authRouter = express.Router();
const Ainstance = new AuthController();

authRouter.post("/login", Ainstance.login);
authRouter.post("/register", Ainstance.register);
// authRouter.post("/", Ainstance.store);
// authRouter.get("/:id", Ainstance.show);
// authRouter.put("/:id", Ainstance.update);
// authRouter.delete("/:id", Ainstance.destroy);

export default authRouter;
