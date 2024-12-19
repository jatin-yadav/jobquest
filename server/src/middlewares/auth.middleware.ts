import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../models/user.model";
import { ApiError, asyncErrorHandler } from "../utils";

interface DecodedToken extends JwtPayload {
  _id: string;
}

export const verifyJWT = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "");

      if (!token) {
        throw new ApiError(401, "Unauthorized request: No token provided");
      }

      let decodedToken: DecodedToken;
      try {
        decodedToken = jwt.verify(
          token,
          process.env.ACCESS_TOKEN_SECRET as string
        ) as DecodedToken;
      } catch (error: any) {
        if (error.name === "TokenExpiredError") {
          throw new ApiError(401, "Access token expired");
        } else if (error.name === "JsonWebTokenError") {
          throw new ApiError(401, "Invalid access token");
        }
        throw new ApiError(401, "Token verification failed");
      }

      const user = await User.findById(decodedToken._id).select(
        "-password -refreshToken"
      );
      if (!user) {
        throw new ApiError(401, "Invalid Access Token: User not found");
      }

      req.user = { _id: user._id };

      next(); // This should be recognized as defined now
    } catch (error) {
      throw new ApiError(
        401,
        (error as Error)?.message || "Unauthorized request"
      );
    }
  }
);
