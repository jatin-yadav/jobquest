import mongoose, { Types, Schema } from "mongoose";
import { User } from "./user.model";

const topicSchema = new Schema(
  {
    topic: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
      validate: async function (value: Types.ObjectId) {
        const user = await User.findById(value);
        if (!user) {
          throw new Error("User does not exist");
        }
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Topic = mongoose.model("Topic", topicSchema);
