import { Types } from "mongoose";
import * as express from "express-serve-static-core";

declare global {
  namespace Express {
    interface Request {
      user?: { _id: Types.ObjectId };
    }
  }
}
