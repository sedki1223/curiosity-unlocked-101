import { Schema, model, models } from "mongoose";

export type ReviewType =
  | "website"
  | "lesson"
  | "short"
  | "curio"
  | "general";

export interface IReview {
  clerkUserId: string;
  type: ReviewType;
  message: string;
  rating?: number;
  lessonSlug?: string;
  createdAt: Date;
  updatedAt: Date;
}

const reviewSchema = new Schema<IReview>(
  {
    clerkUserId: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ["website", "lesson", "short", "curio", "general"],
      required: true,
      index: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 1000,
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
    },

    lessonSlug: {
      type: String,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Review =
  models.Review || model<IReview>("Review", reviewSchema);