
import type { Request, Response } from "express";
import mongoose from "mongoose";
import { Lesson } from "../models/Lesson.js";

const difficulties = ["Beginner", "Intermediate", "Advanced"];
const statuses = ["draft", "published"];
const blockTypes = ["text", "visual", "callout"];

type Payload = Record<string, unknown>;

function validateLessonPayload(body: Payload): string | null {
  const requiredStrings = [
    "title",
    "slug",
    "topic",
    "topicSlug",
    "category",
    "summary",
    "description",
  ];

  for (const field of requiredStrings) {
    if (
      typeof body[field] !== "string" ||
      !(body[field] as string).trim()
    ) {
      return `${field} must be a non-empty string.`;
    }
  }

  for (const field of ["durationMinutes", "order"]) {
    if (
      typeof body[field] !== "number" ||
      !Number.isInteger(body[field]) ||
      (body[field] as number) < 1
    ) {
      return `${field} must be a positive integer.`;
    }
  }

  if (
    body.difficulty !== undefined &&
    !difficulties.includes(String(body.difficulty))
  ) {
    return "Invalid difficulty.";
  }

  if (
    body.status !== undefined &&
    !statuses.includes(String(body.status))
  ) {
    return "Invalid status.";
  }

  if (body.blocks !== undefined) {
    if (!Array.isArray(body.blocks)) {
      return "blocks must be an array.";
    }

    for (const block of body.blocks) {
      if (
        !block ||
        typeof block !== "object" ||
        !blockTypes.includes(String(block.type)) ||
        typeof block.title !== "string" ||
        !block.title.trim() ||
        typeof block.content !== "string" ||
        !block.content.trim()
      ) {
        return "Each block needs a valid type, title, and content.";
      }
    }
  }

  if (body.quiz !== undefined && body.quiz !== null) {
    const quiz = body.quiz as Record<string, unknown>;

    if (
      typeof quiz !== "object" ||
      typeof quiz.title !== "string" ||
      !quiz.title.trim() ||
      typeof quiz.description !== "string" ||
      !quiz.description.trim() ||
      !Array.isArray(quiz.questions)
    ) {
      return "Quiz needs a title, description, and questions array.";
    }

    for (const question of quiz.questions) {
      if (!question || typeof question !== "object") {
        return "Invalid quiz question.";
      }

      const q = question as Record<string, unknown>;

      if (
        typeof q.id !== "string" || !q.id.trim() ||
        typeof q.question !== "string" || !q.question.trim() ||
        !Array.isArray(q.options) ||
        q.options.length < 2 ||
        !q.options.every(
          (option: unknown) =>
            typeof option === "string" && option.trim().length > 0,
        ) ||
        typeof q.correctAnswer !== "string" ||
        !q.options.includes(q.correctAnswer) ||
        typeof q.explanation !== "string" ||
        !q.explanation.trim()
      ) {
        return "Each quiz question needs an ID, question, at least two options, a valid correct answer, and an explanation.";
      }
    }
  }

  return null;
}

function buildLessonPayload(body: Payload) {
  return {
    title: (body.title as string).trim(),
    slug: (body.slug as string).trim().toLowerCase(),
    topic: (body.topic as string).trim(),
    topicSlug: (body.topicSlug as string).trim().toLowerCase(),
    category: (body.category as string).trim(),
    summary: (body.summary as string).trim(),
    description: (body.description as string).trim(),
    durationMinutes: body.durationMinutes as number,
    difficulty: body.difficulty ?? "Beginner",
    order: body.order as number,
    status: body.status ?? "draft",
    blocks: body.blocks ?? [],
    quiz: body.quiz ?? undefined,
  };
}

function handleWriteError(
  error: unknown,
  res: Response,
  action: string,
): void {
  if (
    error instanceof mongoose.Error.ValidationError ||
    error instanceof mongoose.Error.CastError
  ) {
    res.status(400).json({
      success: false,
      message: "Invalid lesson data.",
    });
    return;
  }

  if (
    error &&
    typeof error === "object" &&
    "code" in error &&
    error.code === 11000
  ) {
    res.status(409).json({
      success: false,
      message: "A lesson with this slug already exists.",
    });
    return;
  }

  console.error(`Admin failed to ${action} lesson:`, error);
  res.status(500).json({
    success: false,
    message: `Failed to ${action} lesson.`,
  });
}

export async function adminGetLessons(
  _req: Request,
  res: Response,
): Promise<void> {
  try {
    const lessons = await Lesson.find({})
      .sort({ updatedAt: -1 })
      .lean();

    res.status(200).json({
      success: true,
      count: lessons.length,
      data: lessons,
    });
  } catch (error) {
    console.error("Admin failed to fetch lessons:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch lessons.",
    });
  }
}

export async function adminCreateLesson(
  req: Request,
  res: Response,
): Promise<void> {
  const body = req.body as Payload;
  const validationError = validateLessonPayload(body);

  if (validationError) {
    res.status(400).json({
      success: false,
      message: validationError,
    });
    return;
  }

  try {
    const lesson = await Lesson.create(buildLessonPayload(body));

    res.status(201).json({
      success: true,
      data: lesson,
    });
  } catch (error) {
    handleWriteError(error, res, "create");
  }
}

export async function adminUpdateLesson(
  req: Request,
  res: Response,
): Promise<void> {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).json({
      success: false,
      message: "Invalid lesson ID.",
    });
    return;
  }

  const body = req.body as Payload;
  const validationError = validateLessonPayload(body);

  if (validationError) {
    res.status(400).json({
      success: false,
      message: validationError,
    });
    return;
  }

  try {
    const lesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      buildLessonPayload(body),
      { new: true, runValidators: true },
    );

    if (!lesson) {
      res.status(404).json({
        success: false,
        message: "Lesson not found.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: lesson,
    });
  } catch (error) {
    handleWriteError(error, res, "update");
  }
}

export async function adminDeleteLesson(
  req: Request,
  res: Response,
): Promise<void> {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).json({
      success: false,
      message: "Invalid lesson ID.",
    });
    return;
  }

  try {
    const lesson = await Lesson.findByIdAndDelete(req.params.id);

    if (!lesson) {
      res.status(404).json({
        success: false,
        message: "Lesson not found.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Lesson deleted.",
    });
  } catch (error) {
    handleWriteError(error, res, "delete");
  }
}
