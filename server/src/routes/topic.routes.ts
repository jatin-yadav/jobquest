import { Router } from "express";
import { getTopics, createTopic } from "../controllers/topics.controller";
import { verifyJWT } from "../middlewares/auth.middleware";

const tpoicRouter = Router();

tpoicRouter.route("/").get(verifyJWT, getTopics);
tpoicRouter.route("/create").post(verifyJWT, createTopic);

export default tpoicRouter;
