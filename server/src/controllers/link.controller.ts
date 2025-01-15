import { Request, Response } from "express";
import {
  ApiError,
  asyncErrorHandler,
  ApiResponse,
  generateRandomHash,
} from "../utils";
import { Link } from "../models/link.model";
import { Content } from "../models/content.model";

export const createShareAbleLink = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const { share } = req.body;

    if (share === "") {
      throw new ApiError(400, "share fields is required");
    }
    if (share) {
      const link = await Link.findOne({ userId: req.user?._id });
      if (link) {
        return res
          .status(201)
          .json(
            new ApiResponse(200, `${link.hash}`, "Here is your Shareable hash")
          );
      }
      const hashstring: string = generateRandomHash(10);
      const cratedHash = await Link.create({
        hash: hashstring,
        userId: req.user?._id,
      });
      return res
        .status(201)
        .json(
          new ApiResponse(
            200,
            `${hashstring}`,
            "Updated Shareable hash Successfully"
          )
        );
    } else {
      Link.findOneAndDelete({ userId: req.user?._id });
      return res
        .status(201)
        .json(new ApiResponse(200, [], "Removed Shareable link Successfully"));
    }
  }
);

export const getShareAbleContent = asyncErrorHandler(
  async (req: Request, res: Response) => {
    const { sharelink } = req.params;
    const link = await Link.findOne({ hash: sharelink }).populate(
      "userId",
      "username"
    );
    if (!link) {
      throw new ApiError(409, "Link not found");
    }

    const contentData = await Content.find({ userId: link.userId._id });
    if (!contentData) {
      throw new ApiError(409, "Content not found");
    }

    return res
      .status(201)
      .json(
        new ApiResponse(200, { link, contentData }, "Link fetched Successfully")
      );
  }
);
