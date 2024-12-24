import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes";
import tpoicRouter from "./routes/topic.routes";
import tagRouter from "./routes/tag.routes";
import qnaRouter from "./routes/qna.routes";
import contentRouter from "./routes/content.routes";

//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/topics", tpoicRouter);
app.use("/api/v1/tags", tagRouter);
app.use("/api/v1/qna", qnaRouter);
app.use("/api/v1/content", contentRouter);

// http://localhost:8000/api/v1/users
export { app };
