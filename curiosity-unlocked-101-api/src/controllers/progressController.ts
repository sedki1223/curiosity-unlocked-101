import type { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import { Lesson } from "../models/Lesson.js";
import { Progress } from "../models/Progress.js";

export async function completeLesson(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const { isAuthenticated, userId } = getAuth(req);

    if (!isAuthenticated || !userId) {
      res.status(401).json({
        success: false,
        message: "Authentication required.",
      });

      return;
    }

    const rawLessonSlug = req.params.lessonSlug;

    const lessonSlug =
      typeof rawLessonSlug === "string"
        ? rawLessonSlug.trim().toLowerCase()
        : undefined;

    if (!lessonSlug) {
      res.status(400).json({
        success: false,
        message: "Lesson slug is required.",
      });

      return;
    }

    const lessonExists = await Lesson.exists({
      slug: lessonSlug,
      status: "published",
    });

    if (!lessonExists) {
      res.status(404).json({
        success: false,
        message: "Lesson not found.",
      });

      return;
    }

    const progress = await Progress.findOneAndUpdate(
      {
        clerkUserId: userId,
        lessonSlug,
      },
      {
        $set: {
          completedAt: new Date(),
        },
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      },
    ).lean();

    res.status(200).json({
      success: true,
      message: "Lesson marked as completed.",
      data: progress,
    });
  } catch (error) {
    console.error("Failed to complete lesson:", error);

    res.status(500).json({
      success: false,
      message: "Failed to save lesson progress.",
    });
  }
}

export async function getMyProgress(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const { isAuthenticated, userId } = getAuth(req);

    if (!isAuthenticated || !userId) {
      res.status(401).json({
        success: false,
        message: "Authentication required.",
      });

      return;
    }

    const progress = await Progress.find({
      clerkUserId: userId,
    })
      .select("-clerkUserId")
      .sort({ updatedAt: -1 })
      .lean();

    res.status(200).json({
      success: true,
      count: progress.length,
      data: progress,
    });
  } catch (error) {
    console.error("Failed to fetch progress:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch progress.",
    });
  }
}