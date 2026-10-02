import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLessonBySlug, getLessonsByTopic } from "@/lib/api";

interface LessonOverviewPageProps {
  searchParams: Promise<{
    lesson?: string;
  }>;
}

export default async function LessonOverviewPage({
  searchParams,
}: LessonOverviewPageProps) {
  const params = await searchParams;

  const lessonSlug = params.lesson ?? "what-is-a-black-hole";

  const lesson = await getLessonBySlug(lessonSlug);

  if (!lesson) {
    notFound();
  }

  const topicLessons = await getLessonsByTopic(lesson.topicSlug);

  const totalDuration = topicLessons.reduce(
    (total, item) => total + item.durationMinutes,
    0,
  );

  return (
    <div className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-[-12rem] top-[30rem] h-[26rem] w-[26rem] rounded-full bg-cyan-400/5 blur-3xl" />
        <div className="absolute left-[-12rem] bottom-[10rem] h-[24rem] w-[24rem] rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:px-8 lg:px-10">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/learn" className="transition hover:text-white">
            Learn
          </Link>

          <span className="text-slate-600">/</span>

          <Link
            href="/learn/topic"
            className="transition hover:text-white"
          >
            {lesson.topic}
          </Link>

          <span className="text-slate-600">/</span>

          <span className="text-slate-500">Lesson overview</span>
        </div>

        {/* Main intro */}
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_90%_90%,rgba(34,211,238,0.08),transparent_32%)]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.42fr] lg:items-start">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
                  Lesson {String(lesson.order).padStart(2, "0")}
                </span>

                <span className="text-sm text-slate-500">
                  {lesson.category} · {lesson.difficulty}
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {lesson.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {lesson.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
                <div>
                  <span className="font-semibold text-white">
                    {lesson.durationMinutes} min
                  </span>{" "}
                  lesson
                </div>

                <div>
                  <span className="font-semibold text-white">
                    {lesson.blocks.length}
                  </span>{" "}
                  learning sections
                </div>

                <div>
                  <span className="font-semibold text-white">
                    {lesson.difficulty}
                  </span>{" "}
                  level
                </div>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href={`/learn/lesson?lesson=${lesson.slug}`}
                  className="inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Start lesson
                  <span className="ml-2">→</span>
                </Link>

                <Link
                  href="/learn/topic"
                  className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Back to topic
                </Link>
              </div>
            </div>

            {/* Curio */}
            <div className="relative mx-auto w-full max-w-[230px]">
              <div className="absolute inset-0 rounded-[2rem] bg-indigo-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/curio/curio.png"
                    alt="Curio"
                    fill
                    className="object-cover"
                    sizes="230px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the lesson */}
        <section className="mt-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Before you begin
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Know what you&apos;re getting into.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              This lesson is designed to build the idea gradually. You do not
              need to know advanced physics before starting.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
            <p className="text-lg leading-8 text-slate-300">
              {lesson.description}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs uppercase tracking-wider text-slate-500">
                  Topic
                </div>
                <div className="mt-2 font-bold text-white">
                  {lesson.topic}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs uppercase tracking-wider text-slate-500">
                  Duration
                </div>
                <div className="mt-2 font-bold text-white">
                  {lesson.durationMinutes} min
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs uppercase tracking-wider text-slate-500">
                  Level
                </div>
                <div className="mt-2 font-bold text-white">
                  {lesson.difficulty}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lesson structure */}
        <section className="mt-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Inside this lesson
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Here&apos;s the path.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              We&apos;ll move through these sections one idea at a time.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {lesson.blocks.map((block, index) => (
              <div
                key={`${lesson.slug}-${index}`}
                className="rounded-2xl border border-white/10 bg-slate-900/50 p-5 sm:p-6"
              >
                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-black text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-bold text-white">
                        {block.title}
                      </h3>

                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        {block.type}
                      </span>
                    </div>

                    <p className="mt-2 leading-7 text-slate-400">
                      {block.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Topic progress */}
        <section className="relative mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 p-7 sm:p-10">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Your bigger picture
              </p>

              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                {topicLessons.length} lessons make up this topic.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Complete this lesson and keep moving through the topic at your
                own pace. The complete path takes roughly {totalDuration}{" "}
                minutes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center">
              <div className="text-3xl font-black text-white">
                {lesson.order}/{topicLessons.length}
              </div>

              <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                Current lesson
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
            Ready?
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Let&apos;s see what&apos;s actually going on.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
            Start the lesson and let&apos;s turn the question into something
            you can actually picture.
          </p>

          <Link
            href={`/learn/lesson?lesson=${lesson.slug}`}
            className="mt-7 inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Start learning
            <span className="ml-2">→</span>
          </Link>
        </section>
      </main>
    </div>
  );
}