import { Request, Response } from "express";
import { ApiError, asyncErrorHandler, ApiResponse } from "../utils";
import { Content } from "../models/content.model";

export const getContent = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const allContents = await Content.find({ userId: req.user?._id }).populate(
      "userId",
      "username"
    );
    if (!allContents) {
      throw new ApiError(409, "Content not found");
    }

    return res
      .status(201)
      .json(new ApiResponse(200, allContents, "Contents fetched Successfully"));
  }
);

export const createContent = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const { link, type, title } = req.body;

    if ([link, type, title].some((field) => field?.trim() === "")) {
      throw new ApiError(400, "All fields are required");
    }

    const existedContent = await Content.findOne({
      title: title.toLowerCase(),
      link,
    });

    if (existedContent) {
      throw new ApiError(
        409,
        `Content with title: ${title} and link: ${link} already exists`
      );
    }

    const cratedContent = await Content.create({
      link,
      type,
      title: title.toLowerCase(),
      tags: [],
      userId: req.user?._id,
    });

    if (!cratedContent) {
      throw new ApiError(
        500,
        "Something went wrong while creating the Content"
      );
    }

    return res
      .status(201)
      .json(
        new ApiResponse(200, cratedContent, "Content created Successfully")
      );
  }
);

export const deleteContent = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const { contentId } = req.body;

    if (contentId === "") {
      throw new ApiError(400, "contentId fields is required");
    }

    await Content.findByIdAndDelete({ _id: contentId, userId: req.user?._id });

    return res
      .status(201)
      .json(new ApiResponse(200, [], "Contents Deleted Successfully"));
  }
);
