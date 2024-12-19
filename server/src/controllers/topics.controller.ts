import { Request, Response } from "express";
import { ApiError, asyncErrorHandler, ApiResponse } from "../utils";
import { Topic } from "../models/topic.model";

export const getTopics = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const allTopics = await Topic.find({ userId: req.user?._id });
    if (!allTopics) {
      throw new ApiError(409, "Topic not found");
    }

    return res
      .status(201)
      .json(new ApiResponse(200, allTopics, "Topic fetched Successfully"));
  }
);

export const createTopic = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const { topic } = req.body;

    if (topic === "") {
      throw new ApiError(400, "topic fields is required");
    }

    const existedTopic = await Topic.findOne({ topic, userId: req.user?._id });

    if (existedTopic) {
      throw new ApiError(409, "Topic already exists");
    }

    const cratedTopic = await Topic.create({
      topic: topic.toLowerCase(),
      userId: req.user?._id,
    });

    if (!cratedTopic) {
      throw new ApiError(500, "Something went wrong while creating the topic");
    }

    return res
      .status(201)
      .json(new ApiResponse(200, cratedTopic, "Topic created Successfully"));
  }
);
