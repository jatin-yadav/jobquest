import { Router } from "express";
import { getUser } from "../controllers/users.controller";

const userRouter = Router();

userRouter.get("/", getUser);

export { userRouter };
