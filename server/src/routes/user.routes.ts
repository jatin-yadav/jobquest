import { Router } from "express";
import {
  registerUser,
  getUser,
  loginUser,
} from "../controllers/users.controller";

const userRouter = Router();

userRouter.route("/").get(getUser);
userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);

export default userRouter;
