import express from "express";
import UserController from "../controllers/UsersController.js";
import FileServiceMiddleware from "../middleware/FileServiceMiddleware.js";


const userRouter = express.Router();
const Uinstance = new UserController();
const up = new FileServiceMiddleware();
const file = up.fileUpload("users");

userRouter.get("/", Uinstance.index);
userRouter.post("/", file.single("image"), Uinstance.store);
userRouter.get("/:id", Uinstance.show);
userRouter.put("/:id", file.single("image"), Uinstance.update);
userRouter.delete("/:id", Uinstance.destroy);
export default userRouter;
