import { Request, Response } from "express";
import { User } from "../models/user.model";
import { RegisterUserDto, LoginUserDto } from "../dtos/User.dto";
import mongoose from "mongoose";
import { ApiError, asyncErrorHandler, ApiResponse } from "../utils";

const generateAccessAndRefreshTokens = async (
  userId: mongoose.Types.ObjectId
): Promise<{
  accessToken: string;
  refreshToken: string;
}> => {
  try {
    // Fetch the user by ID
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(404, "User not found");
    }

    // Generate tokens
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // Save the refresh token to the database
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    // Return tokens
    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Error generating tokens:", error);
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and access tokens"
    );
  }
};

export const getUser = asyncErrorHandler(
  async (req: Request, res: Response) => {
    return res
      .status(201)
      .json(
        new ApiResponse(200, "createdUser", "User registered Successfully")
      );
  }
);

export const registerUser = asyncErrorHandler(
  async (req: Request<{}, {}, RegisterUserDto>, res: Response) => {
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

export const loginUser = asyncErrorHandler(
  async (req: Request<{}, {}, LoginUserDto>, res: Response) => {
    const { email, username, password } = req.body;

    if (!username && !email) {
      throw new ApiError(400, "username or email is required");
    }

    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (!user) {
      throw new ApiError(404, "User does not exist");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid user credentials");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );

    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            user: loggedInUser,
            accessToken,
            refreshToken,
          },
          "User logged In Successfully"
        )
      );
  }
);

export const logoutUser = asyncErrorHandler(
  async (req: Request, res: Response) => {
    await User.findByIdAndUpdate(
      req.user?._id,
      {
        $unset: {
          refreshToken: 1, // this removes the field from document
        },
      },
      {
        new: true,
      }
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(200, {}, "User logged Out"));
  }
);
