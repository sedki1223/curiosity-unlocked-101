import type { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import { Review, type ReviewType } from "../models/Review.js";

const validReviewTypes: ReviewType[] = [
  "website",
  "lesson",
  "short",
  "curio",
  "general",
];

export async function createReview(
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

    const { type, message, rating, lessonSlug } = req.body;

    if (!validReviewTypes.includes(type)) {
      res.status(400).json({
        success: false,
        message: "Invalid feedback type.",
      });

      return;
    }

    if (typeof message !== "string" || message.trim().length < 5) {
      res.status(400).json({
        success: false,
        message: "Feedback message must contain at least 5 characters.",
      });

      return;
    }

    if (message.trim().length > 1000) {
      res.status(400).json({
        success: false,
        message: "Feedback message cannot exceed 1000 characters.",
      });

      return;
    }

    if (
      rating !== undefined &&
      (
        typeof rating !== "number" ||
        !Number.isInteger(rating) ||
        rating < 1 ||
        rating > 5
      )
    ) {
      res.status(400).json({
        success: false,
        message: "Rating must be an integer between 1 and 5.",
      });

      return;
    }

    if (
      lessonSlug !== undefined &&
      (typeof lessonSlug !== "string" || lessonSlug.trim().length === 0)
    ) {
      res.status(400).json({
        success: false,
        message: "lessonSlug must be a non-empty string.",
      });

      return;
    }

    const review = await Review.create({
      clerkUserId: userId,
      type,
      message: message.trim(),
      rating,
      lessonSlug:
        typeof lessonSlug === "string"
          ? lessonSlug.trim().toLowerCase()
          : undefined,
    });

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully.",
      data: {
        id: review._id,
        type: review.type,
        message: review.message,
        rating: review.rating,
        lessonSlug: review.lessonSlug,
        createdAt: review.createdAt,
      },
    });
  } catch (error) {
    console.error("Failed to create review:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit feedback.",
    });
  }
}

export async function getReviews(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const { type } = req.query;

    const filter: Record<string, unknown> = {};

    if (typeof type === "string" && type.trim()) {
      if (!validReviewTypes.includes(type as ReviewType)) {
        res.status(400).json({
          success: false,
          message: "Invalid feedback type.",
        });

        return;
      }

      filter.type = type;
    }

    const reviews = await Review.find(filter)
      .select("-clerkUserId")
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    console.error("Failed to fetch reviews:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch feedback.",
    });
  }
}