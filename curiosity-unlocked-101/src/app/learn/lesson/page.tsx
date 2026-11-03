
import { notFound } from "next/navigation";
import { getLessonBySlug } from "@/lib/api";
import LessonClient from "./LessonClient";

interface LessonPageProps {
  searchParams: Promise<{
    lesson?: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function LessonPage({
  searchParams,
}: LessonPageProps) {
  const params = await searchParams;
  const lessonSlug = params.lesson ?? "what-is-a-black-hole";

  let lesson;

  try {
    lesson = await getLessonBySlug(lessonSlug);
  } catch {
    return (
      <main className="mx-auto max-w-3xl px-5 py-24 text-[#f0efe7]">
        <p className="editorial-label text-[#a8f2ed]">
          Learning / Connection issue
        </p>

        <h1 className="mt-5 text-3xl font-black tracking-tight">
          The lesson couldn&apos;t load.
        </h1>

        <p className="mt-4 text-sm leading-7 text-white/55">
          The lesson service may be temporarily unavailable. Try again shortly.
        </p>

        <a href="/learn" className="editorial-button mt-7">
          Back to learning <span aria-hidden="true">↗</span>
        </a>
      </main>
    );
  }

  if (!lesson || lesson.status !== "published") {
    notFound();
  }

  return <LessonClient lesson={lesson} />;
}
