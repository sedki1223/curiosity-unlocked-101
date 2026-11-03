
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import {
  getLessonBySlug,
  type Lesson,
  type LessonProgress,
} from "@/lib/api";
import { getCurrentUserProgress } from "@/lib/server-api";

interface CompletionPageProps {
  searchParams: Promise<{
    lesson?: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function CompletionPage({
  searchParams,
}: CompletionPageProps) {
  const params = await searchParams;
  const lessonSlug = params.lesson ?? "what-is-a-black-hole";

  let lesson: Lesson | null = null;
  let progress: LessonProgress[] = [];
  let progressUnavailable = false;

  try {
    lesson = await getLessonBySlug(lessonSlug);
  } catch {
    return (
      <main className="min-h-screen bg-[#101312] px-5 py-24 text-[#f0efe7]">
        <div className="mx-auto max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8f2ed]">
            CU101 / Learning
          </p>
          <h1 className="mt-5 text-3xl font-black">
            We couldn&apos;t load this lesson.
          </h1>
          <p className="mt-4 text-sm leading-7 text-white/55">
            The lesson service may be temporarily unavailable. Try again
            shortly.
          </p>
          <Link
            href="/learn"
            className="mt-7 inline-flex min-h-12 items-center bg-[#f0efe7] px-5 text-sm font-bold text-[#101312] transition hover:bg-[#a8f2ed]"
          >
            Back to learning <span className="ml-2">↗</span>
          </Link>
        </div>
      </main>
    );
  }

  if (!lesson || lesson.status !== "published") {
    return (
      <main className="min-h-screen bg-[#101312] px-5 py-24 text-[#f0efe7]">
        <div className="mx-auto max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8f2ed]">
            CU101 / Learning
          </p>
          <h1 className="mt-5 text-3xl font-black">Lesson not found.</h1>
          <p className="mt-4 text-sm leading-7 text-white/55">
            This lesson may have moved or may no longer be published.
          </p>
          <Link
            href="/learn"
            className="mt-7 inline-flex min-h-12 items-center bg-[#f0efe7] px-5 text-sm font-bold text-[#101312] transition hover:bg-[#a8f2ed]"
          >
            Explore lessons <span className="ml-2">↗</span>
          </Link>
        </div>
      </main>
    );
  }

  const { isAuthenticated } = await auth();

  if (isAuthenticated) {
    try {
      progress = await getCurrentUserProgress();
    } catch {
      progressUnavailable = true;
    }
  }

  const completedLesson = progress.find(
    (item) => item.lessonSlug === lesson.slug,
  );

  const blocks = lesson.blocks ?? [];

  return (
    <main className="min-h-screen bg-[#101312] text-[#f0efe7]">
<div className="mx-auto max-w-5xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
        <section className="grid gap-10 md:grid-cols-[1fr_220px] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8f2ed]">
              {completedLesson ? "Progress saved" : "Lesson finished"}
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              One more idea
              <br />
              <span className="text-white/45">understood.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              You made it through{" "}
              <span className="font-semibold text-[#f0efe7]">
                {lesson.title}
              </span>
              . The goal isn&apos;t to memorize a few words. It&apos;s to
              leave understanding something you didn&apos;t understand before.
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-44 overflow-hidden rounded-full border border-[#a8f2ed]/20 bg-[#151a17] md:w-52">
            <Image
              src="/curio/curio.png"
              alt="Curio, your CU101 learning companion"
              fill
              priority
              sizes="(max-width: 768px) 176px, 208px"
              className="object-cover"
            />
          </div>
        </section>

        <section className="mt-14 border-y border-white/10 py-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                Lesson
              </p>
              <p className="mt-2 font-semibold">{lesson.title}</p>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                Progress
              </p>
              <p className="mt-2 font-semibold">
                {progressUnavailable
                  ? "Could not verify"
                  : completedLesson
                    ? "Completion saved"
                    : isAuthenticated
                      ? "Not confirmed"
                      : "Guest session"}
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                Your next step
              </p>
              <p className="mt-2 font-semibold">Keep asking questions.</p>
            </div>
          </div>

          {progressUnavailable && (
            <p className="mt-5 text-sm leading-6 text-amber-200/80">
              Your lesson recap is available, but we couldn&apos;t verify
              saved progress. This doesn&apos;t change what you learned.
            </p>
          )}

          {!isAuthenticated && (
            <p className="mt-5 text-sm leading-6 text-white/45">
              You&apos;re browsing as a guest. Sign in to use your CU101
              account for saved learning progress.
            </p>
          )}
        </section>

        <section className="mt-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8f2ed]">
            The recap
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            What you explored.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
            Revisit the main sections whenever you need a refresher.
          </p>

          {blocks.length > 0 ? (
            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {blocks.map((block, index) => (
                <article
                  key={`${lesson.slug}-${index}`}
                  className="grid gap-3 py-6 sm:grid-cols-[56px_1fr] sm:gap-5"
                >
                  <span className="text-sm font-bold tabular-nums text-[#a8f2ed]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{block.title}</h3>
                    <p className="mt-2 max-w-3xl whitespace-pre-line text-sm leading-7 text-white/55">
                      {block.content}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm leading-7 text-white/50">
              The lesson recap is not available yet. You can reopen the
              lesson to review its content.
            </p>
          )}
        </section>

        <section className="mt-14 border border-white/10 bg-[#151a17] p-6 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8f2ed]">
            A note from Curio
          </p>

          <blockquote className="mt-4 max-w-3xl text-2xl font-bold leading-relaxed sm:text-3xl">
            “Knowing the answer is good. Understanding why it&apos;s the
            answer is what makes it stick.”
          </blockquote>

          <p className="mt-4 text-sm leading-7 text-white/45">
            Stay curious. Question what you know, and keep exploring what
            you don&apos;t.
          </p>
        </section>

        <section className="mt-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Where to next?
          </p>

          <div className="mt-5 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            <Link
              href={`/learn/lesson?lesson=${encodeURIComponent(lesson.slug)}`}
              className="group bg-[#101312] p-6 transition hover:bg-[#151a17] sm:p-8"
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                Revisit
              </span>
              <h3 className="mt-3 text-xl font-black">
                Read the lesson again
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/50">
                Return to the explanations and take your time with the ideas.
              </p>
              <span className="mt-6 inline-block text-sm font-bold text-[#a8f2ed]">
                Review lesson ↗
              </span>
            </Link>

            <Link
              href="/learn/topic"
              className="group bg-[#101312] p-6 transition hover:bg-[#151a17] sm:p-8"
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                Explore
              </span>
              <h3 className="mt-3 text-xl font-black">
                Go deeper into black holes
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/50">
                Continue exploring the topic and connect the ideas together.
              </p>
              <span className="mt-6 inline-block text-sm font-bold text-[#a8f2ed]">
                Explore topic ↗
              </span>
            </Link>
          </div>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/learn"
            className="inline-flex min-h-12 items-center bg-[#f0efe7] px-5 text-sm font-bold text-[#101312] transition hover:bg-[#a8f2ed]"
          >
            All learning paths <span className="ml-2">↗</span>
          </Link>

          <Link
            href="/feedback"
            className="inline-flex min-h-12 items-center border border-white/15 px-5 text-sm font-bold transition hover:border-[#a8f2ed] hover:text-[#a8f2ed]"
          >
            Share feedback <span className="ml-2">↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
