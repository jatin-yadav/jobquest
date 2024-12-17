import { Router } from "express";
import { registerUser, getUser } from "../controllers/users.controller";

const userRouter = Router();

userRouter.route("/").get(getUser);
userRouter.route("/register").post(registerUser);

export default userRouter;
