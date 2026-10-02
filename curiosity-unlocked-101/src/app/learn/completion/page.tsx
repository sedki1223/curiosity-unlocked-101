import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { getLessonBySlug } from "@/lib/api";
import { getCurrentUserProgress } from "@/lib/server-api";

interface CompletionPageProps {
  searchParams: Promise<{
    lesson?: string;
  }>;
}

export default async function CompletionPage({
  searchParams,
}: CompletionPageProps) {
  const params = await searchParams;

  const lessonSlug = params.lesson ?? "what-is-a-black-hole";

  const [lesson, progress] = await Promise.all([
    getLessonBySlug(lessonSlug),
    getCurrentUserProgress(),
  ]);

  const { isAuthenticated } = await auth();

  if (!lesson) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-3xl font-black text-white">
          Lesson not found.
        </h1>

        <Link
          href="/learn"
          className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950"
        >
          Back to learning
        </Link>
      </main>
    );
  }

  const completedLesson = progress.find(
    (item) => item.lessonSlug === lesson.slug,
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-[-10rem] top-[30rem] h-[26rem] w-[26rem] rounded-full bg-cyan-400/5 blur-3xl" />
        <div className="absolute left-[-12rem] bottom-0 h-[24rem] w-[24rem] rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <main className="mx-auto max-w-5xl px-6 pb-24 pt-14 sm:px-8">
        {/* Hero */}
        <section className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-400/10 text-2xl text-white">
            ✓
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {completedLesson ? "Progress saved" : "Lesson complete"}
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Knowledge unlocked.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            You made it through{" "}
            <span className="font-semibold text-slate-200">
              {lesson.title}
            </span>
            .
          </p>
        </section>

        {/* Curio */}
        <section className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-7 sm:p-10">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-[150px_1fr]">
            <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <Image
                src="/curio/curio.png"
                alt="Curio"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Curio says
              </div>

              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                “Nice. Now you actually know what&apos;s going on.”
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Finishing a lesson is only the beginning. Understanding the
                idea well enough to recognize it in the real world is the
                useful part.
              </p>
            </div>
          </div>
        </section>

        {/* Completion state */}
        <section className="mt-10 grid gap-5 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-[0.16em] text-slate-500">
              Lesson
            </div>

            <div className="mt-3 text-lg font-black text-white">
              {lesson.title}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-[0.16em] text-slate-500">
              Status
            </div>

            <div className="mt-3 text-lg font-black text-white">
              {completedLesson ? "Completed" : "Finished"}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-[0.16em] text-slate-500">
              Account
            </div>

            <div className="mt-3 text-lg font-black text-white">
              {isAuthenticated ? "Saved" : "Guest"}
            </div>
          </div>
        </section>

        {/* What you covered */}
        <section className="mt-10 rounded-[2rem] border border-white/10 bg-slate-900/60 p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
            What you covered
          </p>

          <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
            The main ideas.
          </h2>

          <div className="mt-7 space-y-4">
            {lesson.blocks.map((block, index) => (
              <div
                key={`${lesson.slug}-${index}`}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-black text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    {block.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {block.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Next steps */}
        <section className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/learn/topic"
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:bg-white/[0.05]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
                Keep learning
              </div>

              <h3 className="mt-3 text-xl font-black text-white">
                Explore the Black Holes topic
              </h3>

              <p className="mt-2 leading-7 text-slate-400">
                See what comes next and continue down the rabbit hole.
              </p>

              <div className="mt-5 text-sm font-semibold text-slate-300">
                Continue <span>→</span>
              </div>
            </Link>

            <Link
              href="/feedback"
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:bg-white/[0.05]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                Your voice
              </div>

              <h3 className="mt-3 text-xl font-black text-white">
                Tell us what you thought
              </h3>

              <p className="mt-2 leading-7 text-slate-400">
                Help shape the next version of CU101.
              </p>

              <div className="mt-5 text-sm font-semibold text-slate-300">
                Leave feedback <span>→</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-16 text-center">
          <Link
            href="/learn"
            className="inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Back to learning
            <span className="ml-2">→</span>
          </Link>
        </section>
      </main>
    </div>
  );
}