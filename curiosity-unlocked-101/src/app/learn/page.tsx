
import Link from "next/link";
import { getLessonsByTopic, type Lesson } from "@/lib/api";

export const dynamic = "force-dynamic";

async function loadLessons() {
  try {
    const lessons = await getLessonsByTopic("black-holes");

    return {
      lessons: lessons
        .filter((lesson) => lesson.status === "published")
        .sort((a, b) => a.order - b.order),
      error: false,
    };
  } catch {
    return {
      lessons: [] as Lesson[],
      error: true,
    };
  }
}

export default async function BlackHoleTopicPage() {
  const { lessons, error } = await loadLessons();
  const totalMinutes = lessons.reduce(
    (total, lesson) => total + lesson.durationMinutes,
    0
  );

  return (
    <div className="min-h-screen bg-[#101312] text-[#f0efe7]">
      <section className="relative overflow-hidden border-b border-white/10 px-5 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#a8f2ed]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-xs font-bold text-white/50 transition hover:text-[#a8f2ed]"
          >
            <span aria-hidden="true">←</span> Learning room
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <p className="editorial-label">
                <span className="text-[#a8f2ed]">FIELD NOTE 001</span>
                <span>/</span>
                Space and astrophysics
              </p>

              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
                Black holes.
                <br />
                <span className="text-[#a8f2ed]">No escape.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                What happens when gravity becomes so intense that even light
                cannot escape? Follow the evidence from the basic idea to the
                boundary beyond which our view of the universe changes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10">
              <div className="bg-[#101312] p-5 sm:p-6">
                <p className="editorial-label">Published lessons</p>
                <p className="mt-3 text-4xl font-black tracking-tight">
                  {lessons.length.toString().padStart(2, "0")}
                </p>
              </div>

              <div className="bg-[#101312] p-5 sm:p-6">
                <p className="editorial-label">Estimated time</p>
                <p className="mt-3 text-4xl font-black tracking-tight">
                  {totalMinutes}
                  <span className="ml-1 text-base font-medium text-white/40">
                    min
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="editorial-label">The investigation</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] sm:text-4xl">
              Follow the evidence.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/50">
            Read in sequence or revisit an idea whenever you need to. Each
            lesson comes from the published CU101 content.
          </p>
        </div>

        {error ? (
          <div className="mt-8 border border-white/10 p-6 sm:p-8">
            <p className="text-lg font-bold">
              We couldn&apos;t load this topic.
            </p>
            <p className="mt-2 text-sm leading-6 text-white/55">
              The lesson API may be unavailable. Try again when the connection
              is restored.
            </p>
            <Link
              href="/learn"
              className="mt-5 inline-flex text-sm font-bold text-[#a8f2ed] hover:underline"
            >
              Return to learning room ↗
            </Link>
          </div>
        ) : lessons.length === 0 ? (
          <div className="mt-8 border border-white/10 p-6 sm:p-8">
            <p className="text-lg font-bold">No published lessons yet.</p>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Published lessons for this topic will appear here automatically.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {lessons.map((lesson, index) => (
              <article
                key={lesson._id || lesson.slug}
                className="group flex min-h-64 flex-col border border-white/10 bg-white/[0.02] p-6 transition duration-200 hover:border-[#a8f2ed]/50 hover:bg-white/[0.04] sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-[#a8f2ed]/70">
                    CHAPTER {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xs text-white/40">
                    {lesson.durationMinutes} min
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-black leading-tight tracking-[-0.04em] transition-colors group-hover:text-[#a8f2ed] sm:text-3xl">
                  {lesson.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {lesson.summary || lesson.description}
                </p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
                  <span className="text-xs text-white/40">
                    {lesson.difficulty}
                  </span>

                  <Link
                    href={`/learn/lesson-overview?lesson=${encodeURIComponent(lesson.slug)}`}
                    className="inline-flex min-h-10 items-center gap-2 border border-white/15 px-4 text-xs font-bold transition hover:border-[#a8f2ed] hover:text-[#a8f2ed]"
                  >
                    Explore lesson <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-lg text-sm leading-6 text-white/45">
            Understanding the universe starts with asking better questions.
            Keep following the ones that challenge your assumptions.
          </p>

          <Link
            href="/explore"
            className="editorial-button self-start"
          >
            Discover more <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
