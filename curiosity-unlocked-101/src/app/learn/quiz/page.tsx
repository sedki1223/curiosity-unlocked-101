import { notFound } from "next/navigation";
import { getLessonBySlug } from "@/lib/api";
import QuizClient from "./QuizClient";

interface QuizPageProps {
  searchParams: Promise<{
    lesson?: string;
  }>;
}

export default async function QuizPage({
  searchParams,
}: QuizPageProps) {
  const params = await searchParams;

  const lessonSlug = params.lesson ?? "what-is-a-black-hole";

  const lesson = await getLessonBySlug(lessonSlug);

  if (!lesson || !lesson.quiz) {
    notFound();
  }

  return <QuizClient lesson={lesson} />;
}