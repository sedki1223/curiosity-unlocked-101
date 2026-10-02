import mongoose, { Schema, model } from "mongoose";

export type LessonBlockType = "text" | "visual" | "callout";

export interface ILessonBlock {
  type: LessonBlockType;
  title: string;
  content: string;
}

export interface IQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface ILessonQuiz {
  title: string;
  description: string;
  questions: IQuizQuestion[];
}

export interface ILesson {
  title: string;
  slug: string;
  topic: string;
  topicSlug: string;
  category: string;
  summary: string;
  description: string;
  durationMinutes: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  order: number;
  status: "draft" | "published";
  blocks: ILessonBlock[];
  quiz?: ILessonQuiz;
  createdAt: Date;
  updatedAt: Date;
}

const lessonBlockSchema = new Schema<ILessonBlock>(
  {
    type: {
      type: String,
      enum: ["text", "visual", "callout"],
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const quizQuestionSchema = new Schema<IQuizQuestion>(
  {
    id: {
      type: String,
      required: true,
      trim: true,
    },
    question: {
      type: String,
      required: true,
      trim: true,
    },
    options: {
      type: [String],
      required: true,
      validate: {
        validator: (options: string[]) => options.length >= 2,
        message: "A quiz question must have at least two options.",
      },
    },
    correctAnswer: {
      type: String,
      required: true,
      trim: true,
    },
    explanation: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const lessonQuizSchema = new Schema<ILessonQuiz>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    questions: {
      type: [quizQuestionSchema],
      default: [],
    },
  },
  { _id: false },
);

const lessonSchema = new Schema<ILesson>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    topic: {
      type: String,
      required: true,
      trim: true,
    },
    topicSlug: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    summary: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    durationMinutes: {
      type: Number,
      required: true,
      min: 1,
    },
    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
      required: true,
    },
    order: {
      type: Number,
      required: true,
      min: 1,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
      required: true,
      index: true,
    },
    blocks: {
      type: [lessonBlockSchema],
      default: [],
    },
    quiz: {
      type: lessonQuizSchema,
    },
  },
  {
    timestamps: true,
  },
);

export const Lesson =
  mongoose.models.Lesson || model<ILesson>("Lesson", lessonSchema);
