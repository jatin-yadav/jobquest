import { Router } from "express";
import { getTags, createTag } from "../controllers/tags.controller";
import { verifyJWT } from "../middlewares/auth.middleware";

const tagRouter = Router();

tagRouter.route("/").get(verifyJWT, getTags);
tagRouter.route("/create").post(verifyJWT, createTag);

export default tagRouter;
