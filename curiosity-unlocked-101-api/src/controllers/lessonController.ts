import type { Request, Response } from "express";
import { Lesson } from "../models/Lesson.js";
import type { IQuizQuestion } from "../models/Lesson.js";

function toPublicLesson(lesson: {
  quiz?: {
    title: string;
    description: string;
    questions: IQuizQuestion[];
  };
  [key: string]: unknown;
}) {
  return {
    ...lesson,
    quiz: lesson.quiz
      ? {
          title: lesson.quiz.title,
          description: lesson.quiz.description,
          questions: lesson.quiz.questions.map(
            (question: IQuizQuestion) => ({
              id: question.id,
              question: question.question,
              options: question.options,
            }),
          ),
      }
      : undefined,
  };
}

export async function getLessons(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const { topic, category } = req.query;

    const filter: Record<string, unknown> = {
      status: "published",
    };

    if (typeof topic === "string" && topic.trim()) {
      filter.topicSlug = topic.toLowerCase().trim();
    }

    if (typeof category === "string" && category.trim()) {
      filter.category = category.trim();
    }

    const lessons = await Lesson.find(filter)
      .sort({ topicSlug: 1, order: 1 })
      .lean();

    const safeLessons = lessons.map((lesson) =>
      toPublicLesson(lesson),
    );

    res.status(200).json({
      success: true,
      count: safeLessons.length,
      data: safeLessons,
    });
  } catch (error) {
    console.error("Failed to fetch lessons:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch lessons.",
    });
  }
}

export async function getLessonBySlug(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const lesson = await Lesson.findOne({
      slug: req.params.slug,
      status: "published",
    }).lean();

    if (!lesson) {
      res.status(404).json({
        success: false,
        message: "Lesson not found.",
      });

      return;
    }

    const safeLesson = toPublicLesson(lesson);

    res.status(200).json({
      success: true,
      data: safeLesson,
    });
  } catch (error) {
    console.error("Failed to fetch lesson:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch lesson.",
    });
  }
}

export async function checkQuizAnswer(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const { questionId, answer } = req.body;

    if (
      typeof questionId !== "string" ||
      typeof answer !== "string"
    ) {
      res.status(400).json({
        success: false,
        message: "questionId and answer are required.",
      });

      return;
    }

    const lesson = await Lesson.findOne({
      slug: req.params.slug,
      status: "published",
    }).lean();

    if (!lesson || !lesson.quiz) {
      res.status(404).json({
        success: false,
        message: "Quiz not found.",
      });

      return;
    }

    const question = lesson.quiz.questions.find(
      (item: IQuizQuestion) => item.id === questionId,
    );

    if (!question) {
      res.status(404).json({
        success: false,
        message: "Question not found.",
      });

      return;
    }

    const correct = answer === question.correctAnswer;

    res.status(200).json({
      success: true,
      data: {
        questionId: question.id,
        correct,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation,
      },
    });
  } catch (error) {
    console.error("Failed to check quiz answer:", error);

    res.status(500).json({
      success: false,
      message: "Failed to check quiz answer.",
    });
  }
}