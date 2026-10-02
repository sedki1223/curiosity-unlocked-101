import { Schema, model, models } from "mongoose";

export interface IProgress {
  clerkUserId: string;
  lessonSlug: string;
  completedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const progressSchema = new Schema<IProgress>(
  {
    clerkUserId: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },

    lessonSlug: {
      type: String,
      required: true,
      index: true,
      trim: true,
      lowercase: true,
    },

    completedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

progressSchema.index(
  { clerkUserId: 1, lessonSlug: 1 },
  { unique: true },
);

export const Progress =
  models.Progress || model<IProgress>("Progress", progressSchema);
