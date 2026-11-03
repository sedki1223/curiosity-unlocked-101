
import Image from "next/image";
import Link from "next/link";
import { getLessonsByTopic, type Lesson } from "@/lib/api";

const discoveries = [
  "Why black holes are not actually cosmic vacuum cleaners",
  "How an event horizon changes what we can observe",
  "Why light itself cannot escape",
  "What scientists still do not fully understand",
];

export default async function BlackHolesTopicPage() {
  let lessons: Lesson[] = [];

  try {
    lessons = await getLessonsByTopic("black-holes");
  } catch (error) {
    console.error("Failed to load black hole lessons:", error);
  }

  const totalMinutes = lessons.reduce(
    (total, lesson) => total + lesson.durationMinutes,
    0,
  );

  const firstLesson = lessons[0];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#a8f2ed]/[0.06] blur-3xl" />
        <div className="absolute right-[-10rem] top-[28rem] h-[24rem] w-[24rem] rounded-full bg-cyan-400/5 blur-3xl" />
        <div className="absolute left-[-10rem] top-[55rem] h-[22rem] w-[22rem] rounded-full bg-[#d8ff70]/[0.06] blur-3xl" />
      </div>

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/55">
          <Link href="/learn" className="transition hover:text-white">
            Learn
          </Link>
          <span className="text-white/35">/</span>
          <span className="text-[#f0efe7]">Space</span>
          <span className="text-white/35">/</span>
          <span className="text-white/40">Black Holes</span>
        </div>

        <section className="relative overflow-hidden rounded-none border border-white/10 bg-[#151a17] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(168,242,237,0.18),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(34,211,238,0.08),transparent_30%)]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#a8f2ed]/20 bg-[#a8f2ed]/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a8f2ed]">
                Space · Topic
              </div>

              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Black holes
                <span className="block text-white/55">
                  are stranger than you think.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                They are not giant cosmic vacuums. They are regions of space
                where gravity becomes so extreme that our normal ideas about
                space and time start to break down.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {firstLesson ? (
                  <Link
                    href={`/learn/lesson-overview?lesson=${encodeURIComponent(firstLesson.slug)}`}
                    className="inline-flex items-center justify-center rounded-none bg-white px-5 py-3 text-sm font-bold text-[#101312] transition hover:-translate-y-0.5 hover:bg-[#a8f2ed]"
                  >
                    Start learning <span className="ml-2">→</span>
                  </Link>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center justify-center rounded-none bg-white/10 px-5 py-3 text-sm font-bold text-white/40">
                    Lessons temporarily unavailable
                  </span>
                )}

                <Link
                  href="/explore"
                  className="inline-flex items-center justify-center rounded-none border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore more
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/55">
                <div>
                  <span className="font-semibold text-white">
                    {lessons.length}
                  </span>{" "}
                  lessons
                </div>

                <div>
                  <span className="font-semibold text-white">
                    ~{totalMinutes} min
                  </span>{" "}
                  total
                </div>

                <div>
                  <span className="font-semibold text-white">Beginner</span>{" "}
                  friendly
                </div>
              </div>
            </div>

            <div className="relative mx-auto h-[330px] w-full max-w-[420px]">
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a8f2ed]/20 bg-[#a8f2ed]/[0.06] blur-[1px]" />
              <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />
              <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-[0_0_70px_rgba(168,242,237,0.35)]" />
              <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full border-[5px] border-transparent border-t-orange-300/80 border-r-[#a8f2ed]/20 blur-[0.3px]" />
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-full border border-white/10" />

              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-none border border-white/10 bg-[#101312] px-4 py-3 shadow-xl backdrop-blur-md">
                <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                <span className="text-xs font-semibold text-white/65">
                  Gravity gets weird here.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a8f2ed]">
              Why this topic?
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Start with the question.
            </h2>
          </div>

          <div className="rounded-none border border-white/10 bg-white/[0.03] p-7 sm:p-8">
            <p className="text-lg leading-8 text-white/65">
              What happens when you squeeze an enormous amount of matter into
              an incredibly small region of space?
            </p>
            <p className="mt-5 leading-7 text-white/55">
              Black holes are one of the best places to explore that question.
              We will keep the physics understandable while still giving you
              the real idea behind the phenomenon.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              What you&apos;ll discover
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Four questions. One journey.
            </h2>
            <p className="mt-4 leading-7 text-white/55">
              Each lesson answers one piece of the puzzle before moving to the
              next.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {discoveries.map((discovery, index) => (
              <div
                key={discovery}
                className="group rounded-none border border-white/10 bg-[#151a17] p-5 transition hover:-translate-y-1 hover:border-white/15 hover:bg-[#151a17]"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-none border border-white/10 bg-white/5 text-sm font-bold text-[#f0efe7]">
                  0{index + 1}
                </div>
                <p className="leading-7 text-white/65">{discovery}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mt-20 overflow-hidden rounded-none border border-white/10 bg-[#151a17] p-7 sm:p-10">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#a8f2ed]/[0.06] blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-[180px_1fr]">
            <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-none border border-white/10 bg-white/5">
              <Image
                src="/curio/curio.png"
                alt="Curio"
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>

            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#a8f2ed]">
                Curio says
              </div>
              <h2 className="text-2xl font-black text-white sm:text-3xl">
                “Don&apos;t memorize it. Understand it.”
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/55">
                CU101 is built around curiosity first. You start with a
                question, build an intuitive picture, then connect it to the
                science.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a8f2ed]">
                Learning path
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Follow the trail.
              </h2>
            </div>
            <div className="text-sm text-white/40">
              {lessons.length} lessons from the CU101 database
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {lessons.map((lesson) => {
              const isFirst = lesson.order === 1;

              return (
                <div
                  key={lesson._id}
                  className={`group rounded-none border p-5 transition sm:p-6 ${
                    isFirst
                      ? "border-[#a8f2ed]/20 bg-[#a8f2ed]/[0.06] hover:border-[#a8f2ed]/20"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-none border text-sm font-black ${
                        isFirst
                          ? "border-[#a8f2ed]/20 bg-[#a8f2ed]/[0.06] text-[#a8f2ed]"
                          : "border-white/10 bg-white/5 text-white/40"
                      }`}
                    >
                      {String(lesson.order).padStart(2, "0")}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3
                          className={`text-lg font-bold ${
                            isFirst ? "text-white" : "text-white/65"
                          }`}
                        >
                          {lesson.title}
                        </h3>

                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            isFirst
                              ? "bg-[#a8f2ed]/[0.06] text-[#a8f2ed]"
                              : "bg-white/5 text-white/40"
                          }`}
                        >
                          {isFirst ? "Start here" : "Coming next"}
                        </span>
                      </div>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
                        {lesson.description}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-4 text-sm text-white/40">
                      <span>{lesson.durationMinutes} min</span>

                      {isFirst ? (
                        <Link
                          href={`/learn/lesson-overview?lesson=${encodeURIComponent(lesson.slug)}`}
                          className="rounded-none border border-white/10 bg-white/5 px-4 py-2 font-semibold text-white transition hover:bg-white/10"
                        >
                          Open
                        </Link>
                      ) : (
                        <span className="rounded-none border border-white/5 bg-white/[0.02] px-4 py-2">
                          Locked
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {lessons.length === 0 && (
              <div className="rounded-none border border-white/10 bg-white/[0.02] p-6 text-sm leading-6 text-white/55">
                No lessons are available right now. Please try again later.
              </div>
            )}
          </div>
        </section>

        <section className="mt-20 text-center">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Ready?
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Let&apos;s turn “how?” into “ohhh.”
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-white/55">
              Your first black hole lesson is waiting.
            </p>

            {firstLesson && (
              <Link
                href={`/learn/lesson-overview?lesson=${encodeURIComponent(firstLesson.slug)}`}
                className="mt-7 inline-flex items-center rounded-none bg-white px-6 py-3.5 text-sm font-bold text-[#101312] transition hover:-translate-y-0.5 hover:bg-[#a8f2ed]"
              >
                Start the topic <span className="ml-2">→</span>
              </Link>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
