import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware";
import {
  createContent,
  getContent,
  deleteContent,
} from "../controllers/content.controller";

const contentRouter = Router();

contentRouter.route("/").get(verifyJWT, getContent);
contentRouter.route("/create").post(verifyJWT, createContent);
contentRouter.route("/delete").delete(verifyJWT, deleteContent);

export default contentRouter;
