import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware";
import {
  createShareAbleLink,
  getShareAbleContent,
} from "../controllers/link.controller";

const linkRouter = Router();

linkRouter.route("/create").post(verifyJWT, createShareAbleLink);
linkRouter.route("/:sharelink").get(getShareAbleContent);

export default linkRouter;
