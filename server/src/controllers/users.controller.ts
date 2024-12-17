import { Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import { User } from "../models/user.model";
import { ApiResponse } from "../utils/ApiResponse";

export const getUser = asyncHandler(async (req: Request, res: Response) => {
  return res
    .status(201)
    .json(new ApiResponse(200, "createdUser", "User registered Successfully"));
});

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { firstName, lastName, email, username, password } = req.body;

    if (
      [firstName, lastName, email, username, password].some(
        (field) => field?.trim() === ""
      )
    ) {
      throw new ApiError(400, "All fields are required");
    }

    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existedUser) {
      throw new ApiError(409, "User with email or username already exists");
    }

    const user = await User.create({
      firstName,
      lastName,
      avatar: "",
      email,
      password,
      username: username.toLowerCase(),
    });

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      throw new ApiError(
        500,
        "Something went wrong while registering the user"
      );
    }

    return res
      .status(201)
      .json(new ApiResponse(200, createdUser, "User registered Successfully"));
  }
);
