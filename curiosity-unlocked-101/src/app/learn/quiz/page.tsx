
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLessonBySlug } from "@/lib/api";
import QuizClient from "./QuizClient";

interface QuizPageProps {
  searchParams: Promise<{
    lesson?: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function QuizPage({
  searchParams,
}: QuizPageProps) {
  const params = await searchParams;
  const lessonSlug = params.lesson ?? "what-is-a-black-hole";

  let lesson;

  try {
    lesson = await getLessonBySlug(lessonSlug);
  } catch {
    return (
      <main className="min-h-[70vh] bg-[#101312] px-5 py-24 text-[#f0efe7]">
        <div className="mx-auto max-w-xl">
          <p className="editorial-label text-[#a8f2ed]">
            Learning / Connection issue
          </p>

          <h1 className="mt-5 text-3xl font-black tracking-tight">
            The quiz couldn&apos;t load.
          </h1>

          <p className="mt-4 text-sm leading-7 text-white/55">
            The lesson service may be temporarily unavailable. Try again
            shortly.
          </p>

          <Link href="/learn" className="editorial-button mt-7">
            Back to learning <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </main>
    );
  }

  if (!lesson || lesson.status !== "published") {
    notFound();
  }

  if (!lesson.quiz || lesson.quiz.questions.length === 0) {
    return (
      <main className="min-h-[70vh] bg-[#101312] px-5 py-24 text-[#f0efe7]">
        <div className="mx-auto max-w-xl">
          <p className="editorial-label text-[#a8f2ed]">
            Knowledge check
          </p>

          <h1 className="mt-5 text-3xl font-black tracking-tight">
            This quiz isn&apos;t ready yet.
          </h1>

          <p className="mt-4 text-sm leading-7 text-white/55">
            The lesson is available, but its quiz has not been prepared.
            You can revisit the lesson or explore another topic.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`/learn/lesson?lesson=${encodeURIComponent(lesson.slug)}`}
              className="editorial-button"
            >
              Review lesson <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/learn"
              className="inline-flex min-h-12 items-center justify-center border border-white/20 px-5 text-xs font-bold transition hover:border-[#a8f2ed] hover:text-[#a8f2ed]"
            >
              All lessons
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return <QuizClient lesson={lesson} />;
}
