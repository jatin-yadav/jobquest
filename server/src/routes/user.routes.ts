import { Router } from "express";
import {
  registerUser,
  getUser,
  loginUser,
  logoutUser,
} from "../controllers/users.controller";
import { verifyJWT } from "../middlewares/auth.middleware";

const userRouter = Router();

userRouter.route("/").get(getUser);
userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/logout").post(verifyJWT, logoutUser);

export default userRouter;
