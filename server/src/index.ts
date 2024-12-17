import dotenv from "dotenv";
import express from "express";
import { userRouter } from "./routes/user.router";

dotenv.config();

const app = express();

// Use type assertion to let TypeScript know process.env.PORT is a string
const port = process.env.PORT as string;

app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello from JOBQUEST!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
