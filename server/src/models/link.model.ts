import { model, Schema } from "mongoose";

const linkSchema = new Schema({
  hash: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export const Link = model("Link", linkSchema);