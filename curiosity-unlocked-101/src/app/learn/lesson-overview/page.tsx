
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLessonBySlug, getLessonsByTopic } from "@/lib/api";

interface LessonOverviewPageProps {
  searchParams: Promise<{
    lesson?: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function LessonOverviewPage({
  searchParams,
}: LessonOverviewPageProps) {
  const params = await searchParams;
  const lessonSlug = params.lesson ?? "what-is-a-black-hole";

  let lesson;

  try {
    lesson = await getLessonBySlug(lessonSlug);
  } catch {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-[#f0efe7]">
        <p className="editorial-label text-[#a8f2ed]">
          Learning / Connection issue
        </p>
        <h1 className="mt-5 text-3xl font-black tracking-tight">
          We couldn&apos;t load this lesson.
        </h1>
        <p className="mt-4 text-sm leading-7 text-white/55">
          The lesson service may be temporarily unavailable. Try again shortly.
        </p>
        <Link href="/learn" className="editorial-button mt-7">
          Back to learning <span aria-hidden="true">↗</span>
        </Link>
      </div>
    );
  }

  if (!lesson || lesson.status !== "published") {
    notFound();
  }

  let topicLessons: typeof lesson[] = [];

  try {
    const result = await getLessonsByTopic(lesson.topicSlug);
    topicLessons = result
      .filter((item) => item.status === "published")
      .sort((a, b) => a.order - b.order);
  } catch {
    topicLessons = [lesson];
  }

  const totalDuration = topicLessons.reduce(
    (total, item) => total + item.durationMinutes,
    0,
  );

  const currentIndex = topicLessons.findIndex(
    (item) => item.slug === lesson.slug,
  );

  const nextLesson =
    currentIndex >= 0 ? topicLessons[currentIndex + 1] : undefined;

  const topicHref =
    lesson.topicSlug === "black-holes"
      ? "/learn/topic"
      : `/learn/topic?topic=${encodeURIComponent(lesson.topicSlug)}`;

  const readerHref = `/learn/lesson?lesson=${encodeURIComponent(lesson.slug)}`;

  return (
    <div className="overflow-hidden bg-[#101312] text-[#f0efe7]">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 sm:pb-24 lg:px-12">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-3 text-xs text-white/45"
        >
          <Link href="/" className="transition hover:text-[#a8f2ed]">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/learn" className="transition hover:text-[#a8f2ed]">
            Learn
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href={topicHref}
            className="transition hover:text-[#a8f2ed]"
          >
            {lesson.topic}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-white/75">Overview</span>
        </nav>

        <section className="relative overflow-hidden border border-white/10 bg-[#151a17]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#a8f2ed]/[0.07] blur-3xl"
          />

          <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_260px] lg:gap-14 lg:p-14">
            <div>
              <p className="editorial-label text-[#a8f2ed]">
                {lesson.topic} / Lesson {String(lesson.order).padStart(2, "0")}
              </p>

              <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                {lesson.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
                {lesson.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/45">
                <span>{lesson.durationMinutes} min</span>
                <span aria-hidden="true">·</span>
                <span>{lesson.difficulty}</span>
                <span aria-hidden="true">·</span>
                <span>{lesson.blocks.length} sections</span>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href={readerHref} className="editorial-button">
                  Start lesson <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  href={topicHref}
                  className="inline-flex min-h-12 items-center justify-center border border-white/20 px-5 text-xs font-bold transition hover:border-[#a8f2ed] hover:text-[#a8f2ed]"
                >
                  Back to topic
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[230px] self-center">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-[#a8f2ed]/10 blur-3xl"
              />
              <div className="relative aspect-[4/5]">
                <Image
                  src="/curio/curio.png"
                  alt="Curio, your guide to exploring science"
                  fill
                  priority
                  sizes="230px"
                  className="object-contain"
                />
              </div>
              <p className="text-center text-xs leading-5 text-white/45">
                One question at a time. One idea at a time.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="editorial-label text-[#a8f2ed]">
              Before you begin
            </p>
            <h2 className="mt-4 max-w-lg text-3xl font-black leading-tight tracking-[-0.05em] sm:text-4xl">
              Build understanding, not a list to memorize.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/50">
              Take your time. Focus on the central idea, then connect the
              details as you move through the lesson.
            </p>
          </div>

          <div className="border border-white/10 bg-[#151a17] p-6 sm:p-8">
            <p className="text-base leading-8 text-white/65">
              {lesson.description}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="border-t border-white/10 pt-4">
                <p className="editorial-label">Topic</p>
                <p className="mt-2 text-sm font-bold">{lesson.topic}</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="editorial-label">Duration</p>
                <p className="mt-2 text-sm font-bold">
                  {lesson.durationMinutes} minutes
                </p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="editorial-label">Level</p>
                <p className="mt-2 text-sm font-bold">{lesson.difficulty}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-2xl">
            <p className="editorial-label text-[#a8f2ed]">
              Inside this lesson
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
              The path ahead.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/50">
              Preview the lesson sections before you dive in.
            </p>
          </div>

          {lesson.blocks.length === 0 ? (
            <p className="mt-7 border border-white/10 p-6 text-sm leading-7 text-white/50">
              The lesson structure is still being prepared. Open the lesson to
              see whether its content is available.
            </p>
          ) : (
            <div className="mt-7 border-t border-white/10">
              {lesson.blocks.map((block, index) => (
                <article
                  key={`${lesson.slug}-${index}`}
                  className="grid gap-4 border-b border-white/10 py-6 sm:grid-cols-[3rem_1fr] sm:gap-6"
                >
                  <span className="font-mono text-xs text-[#a8f2ed]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-bold">{block.title}</h3>
                      <span className="border border-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-white/40">
                        {block.type}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/50">
                      {block.content}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="mt-16 border border-white/10 bg-[#151a17] p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="editorial-label text-[#a8f2ed]">
                Continue exploring
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight">
                {nextLesson ? "Ready for the next idea?" : "Ready to begin?"}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
                {nextLesson
                  ? `Next in this collection: ${nextLesson.title}. Finish this lesson first, then keep following the questions.`
                  : `This collection has ${topicLessons.length} published ${topicLessons.length === 1 ? "lesson" : "lessons"}, with about ${totalDuration} minutes of learning content.`}
              </p>
            </div>

            <Link href={readerHref} className="editorial-button shrink-0">
              Start lesson <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
