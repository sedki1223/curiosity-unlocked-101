export interface LessonBlock {
  type: "text" | "visual" | "callout";
  title: string;
  content: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
}

export interface LessonQuiz {
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export interface Lesson {
  _id: string;
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
  blocks: LessonBlock[];
  quiz?: LessonQuiz;
  createdAt: string;
  updatedAt: string;
}

export type ReviewType =
  | "website"
  | "lesson"
  | "short"
  | "curio"
  | "general";

export interface CreateReviewData {
  type: ReviewType;
  message: string;
  rating?: number;
  lessonSlug?: string;
}

export interface QuizAnswerResult {
  questionId: string;
  correct: boolean;
  correctAnswer: string;
  explanation: string;
}

export interface LessonProgress {
  _id: string;
  lessonSlug: string;
  completedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface LessonsResponse {
  success: boolean;
  count: number;
  data: Lesson[];
}

interface LessonResponse {
  success: boolean;
  data: Lesson;
}

interface ReviewResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    type: ReviewType;
    message: string;
    rating?: number;
    lessonSlug?: string;
    createdAt: string;
  };
}

interface QuizAnswerResponse {
  success: boolean;
  data: QuizAnswerResult;
}

interface ProgressResponse {
  success: boolean;
  message: string;
  data: LessonProgress;
}

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api";

export async function getLessonsByTopic(
  topicSlug: string,
): Promise<Lesson[]> {
  const response = await fetch(
    `${API_URL}/lessons?topic=${encodeURIComponent(topicSlug)}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch lessons: ${response.status}`);
  }

  const result: LessonsResponse = await response.json();

  return result.data;
}

export async function getLessonBySlug(
  slug: string,
): Promise<Lesson | null> {
  const response = await fetch(
    `${API_URL}/lessons/${encodeURIComponent(slug)}`,
    {
      cache: "no-store",
    },
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch lesson: ${response.status}`);
  }

  const result: LessonResponse = await response.json();

  return result.data;
}

export async function checkQuizAnswer(
  slug: string,
  questionId: string,
  answer: string,
): Promise<QuizAnswerResult> {
  const response = await fetch(
    `${API_URL}/lessons/${encodeURIComponent(slug)}/quiz/check`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        questionId,
        answer,
      }),
    },
  );

  const result: QuizAnswerResponse = await response.json();

  if (!response.ok) {
    throw new Error(
      result.success
        ? "Failed to check answer."
        : "Quiz answer check failed.",
    );
  }

  return result.data;
}

export async function completeLesson(
  token: string,
  lessonSlug: string,
): Promise<LessonProgress> {
  const response = await fetch(
    `${API_URL}/progress/${encodeURIComponent(lessonSlug)}/complete`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const result: ProgressResponse = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ?? `Failed to save progress: ${response.status}`,
    );
  }

  return result.data;
}

export async function getMyProgress(
  token: string,
): Promise<LessonProgress[]> {
  const response = await fetch(`${API_URL}/progress/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ?? `Failed to fetch progress: ${response.status}`,
    );
  }

  return result.data;
}

export async function submitReview(
  token: string,
  data: CreateReviewData,
): Promise<ReviewResponse["data"]> {
  const response = await fetch(`${API_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ?? `Failed to submit feedback: ${response.status}`,
    );
  }

  return result.data;
}