import { Tag } from "./../models/tags.model";
import { Request, Response } from "express";
import { ApiError, asyncErrorHandler, ApiResponse } from "../utils";

export const getTags = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const allTags = await Tag.find();
    if (!allTags) {
      throw new ApiError(409, "Tags not found");
    }

    return res
      .status(201)
      .json(new ApiResponse(200, allTags, "Tags fetched Successfully"));
  }
);

export const createTag = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const { title } = req.body;

    if (title === "") {
      throw new ApiError(400, "title fields is required");
    }

    const existedTag = await Tag.findOne({ title });

    if (existedTag) {
      throw new ApiError(409, `Tag with ${title} already exists`);
    }

    const cratedTag = await Tag.create({ title: title.toLowerCase() });

    if (!cratedTag) {
      throw new ApiError(500, "Something went wrong while creating the tag");
    }

    return res
      .status(201)
      .json(new ApiResponse(200, cratedTag, "Tag created Successfully"));
  }
);
