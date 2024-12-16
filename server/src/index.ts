import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

// Use type assertion to let TypeScript know process.env.PORT is a string
const port = process.env.PORT as string;

app.get("/", (req, res) => {
  res.send("Hello from JOBQUEST!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
