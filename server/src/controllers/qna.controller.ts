import { Tag } from "./../models/tags.model";
import { QNA } from "../models/qna.model";
import { User } from "../models/user.model";
import { Topic } from "../models/topic.model";
import { Request, Response } from "express";
import { ApiError, asyncErrorHandler, ApiResponse } from "../utils";

export const getQNA = asyncErrorHandler(async (req: Request, res: Response) => {
  const allQNA = await QNA.find();
  if (!allQNA) {
    throw new ApiError(409, "Questions not found");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, allQNA, "Questions fetched Successfully"));
});

export const createQNA = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const { question, answer, type, topic } = req.body;

    if ([question, answer, type, topic].some((field) => field?.trim() === "")) {
      throw new ApiError(
        400,
        "question, answer, type, topic fields are required"
      );
    }
    console.log({ question, answer, type, topic });

    return res
      .status(201)
      .json(new ApiResponse(200, "cratedTag", "QNA added Successfully"));
  }
);
