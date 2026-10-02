import { notFound } from "next/navigation";
import { getLessonBySlug } from "@/lib/api";
import LessonClient from "./LessonClient";

interface LessonPageProps {
  searchParams: Promise<{
    lesson?: string;
  }>;
}

export default async function LessonPage({
  searchParams,
}: LessonPageProps) {
  const params = await searchParams;

  const lessonSlug = params.lesson ?? "what-is-a-black-hole";

  const lesson = await getLessonBySlug(lessonSlug);

  if (!lesson) {
    notFound();
  }

  return <LessonClient lesson={lesson} />;
}