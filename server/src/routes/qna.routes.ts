import { Router } from "express";
import { getQNA, createQNA } from "../controllers/qna.controller";
import { verifyJWT } from "../middlewares/auth.middleware";

const qnaRouter = Router();

qnaRouter.route("/").get(verifyJWT, getQNA);
qnaRouter.route("/create").post(verifyJWT, createQNA);

export default qnaRouter;
