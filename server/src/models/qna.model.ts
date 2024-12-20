import mongoose, { Types, Schema } from "mongoose";
import { User } from "./user.model";
import { Topic } from "./topic.model";

const questionTypes = [
  "dropdown", // Selection-based questions with a dropdown
  "image", // Image-based questions
  "video", // Video-based questions
  "audio", // Audio-based questions
  "clarifying", // Clarifying follow-up questions
  "multipleChoice", // Standard multiple-choice questions
  "checkbox", // Questions with multiple correct answers (checkbox style)
  "rating", // Rating-based (e.g., stars, scales) questions
  "shortAnswer", // Text-based short answers
  "longAnswer", // Text-based long answers
  "date", // Date-picker questions
  "time", // Time-picker questions
  "fileUpload", // Questions requiring file uploads
  "signature", // Questions requiring a digital signature
  "slider", // Slider-based scale or range questions
  "matrix", // Grid or matrix-based questions (e.g., Likert scale)
  "code", // Questions requiring code input or completion
  "poll", // Questions for polls or voting
  "ranking", // Rank-based questions (drag-and-drop ordering)
  "boolean", // True/False or Yes/No questions
  "likertScale", // Likert scale-based questions
  "geolocation", // Questions that capture location input
  "drawing", // Questions that involve freehand drawing
  "qrScan", // Questions involving QR code scanning
  "speech", // Voice-to-text or spoken input questions
  "game", // Gamified questions (e.g., mini-games for quizzes)
];

const qnaSchema = new Schema(
  {
    question: { type: String, required: true },
    answer: { type: Schema.Types.Mixed, required: false },
    link: { type: String },
    options: { type: [{ type: String }] },
    type: { type: String, enum: questionTypes, required: true },
    tags: [{ type: Types.ObjectId, ref: "Tag" }],
    topicId: {
      type: Types.ObjectId,
      ref: "Topic",
      required: true,
      validate: async function (value: Types.ObjectId) {
        const toipic = await Topic.findById(value);
        if (!toipic) {
          throw new Error("Topic does not exist");
        }
      },
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
    media: {
      image: { type: String },
      video: { type: String },
      audio: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

// Add indexes
qnaSchema.index({ userId: 1 });
qnaSchema.index({ topicId: 1 });

export const QNA = mongoose.model("QNA", qnaSchema);
