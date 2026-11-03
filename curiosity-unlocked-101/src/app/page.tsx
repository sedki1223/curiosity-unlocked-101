
import Image from "next/image";
import Link from "next/link";
import { getLessonsByTopic } from "@/lib/api";

export const dynamic = "force-dynamic";

const principles = [
  {
    number: "01",
    title: "Start with a question.",
    description:
      "Begin with something you genuinely want to understand, not a list of facts to memorize.",
  },
  {
    number: "02",
    title: "Picture what is happening.",
    description:
      "Build a mental model of the mechanism before getting buried in technical language.",
  },
  {
    number: "03",
    title: "Follow the explanation.",
    description:
      "Connect the pieces, understand the science, and leave ready to ask another question.",
  },
];

export default async function HomePage() {
  let lessons: Awaited<ReturnType<typeof getLessonsByTopic>> = [];
  let lessonsAvailable = false;

  try {
    const result = await getLessonsByTopic("black-holes");
    lessons = result.filter((lesson) => lesson.status === "published");
    lessonsAvailable = true;
  } catch {
    lessons = [];
  }

  const featuredLessons = lessons.slice(0, 3);

  return (
    <div className="overflow-hidden bg-[#101312] text-[#f0efe7]">
      <section className="relative border-b border-white/10 px-5 sm:px-8 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-[#a8f2ed]/[0.07] blur-3xl"
        />

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-8 py-14 sm:py-20 lg:min-h-[740px] lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
          <div className="relative z-10">
            <p className="editorial-label">
              <span className="text-[#a8f2ed]">Curiosity Unlocked 101</span>
              <span>/</span>
              Science, explained
            </p>

            <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.065em] sm:text-7xl lg:text-[5.8rem]">
              The world is stranger
              <span className="block text-[#a8f2ed]">
                when you look closer.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              Ever had a little &quot;wait, how does that work?&quot; moment?
              CU101 turns those questions into visual, understandable
              explanations of the science behind our world.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/explore" className="editorial-button">
                Explore your curiosity <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/learn"
                className="inline-flex min-h-12 items-center justify-center border border-white/20 px-5 text-xs font-bold transition hover:border-[#a8f2ed] hover:text-[#a8f2ed]"
              >
                Enter the learning hub
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/45">
              <span>Questions before jargon</span>
              <span aria-hidden="true">·</span>
              <span>Visual explanations</span>
              <span aria-hidden="true">·</span>
              <span>Science worth exploring</span>
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[390px] w-full max-w-lg items-center justify-center sm:min-h-[500px] lg:min-h-[580px]">
            <div
              aria-hidden="true"
              className="absolute h-[19rem] w-[19rem] rounded-full border border-white/[0.08] sm:h-[25rem] sm:w-[25rem]"
            />

            <div
              aria-hidden="true"
              className="absolute h-[15rem] w-[15rem] rounded-full border border-[#a8f2ed]/15 sm:h-[20rem] sm:w-[20rem]"
            />

            <div
              aria-hidden="true"
              className="absolute h-64 w-64 rounded-full bg-[#a8f2ed]/[0.06] blur-3xl sm:h-80 sm:w-80"
            />

            <div className="relative z-10 h-[20rem] w-[17rem] sm:h-[27rem] sm:w-[22rem]">
              <Image
                src="/curio/curio.png"
                alt="Curio, your guide to exploring science with CU101"
                fill
                priority
                sizes="(max-width: 640px) 272px, 352px"
                className="object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.4)]"
              />
            </div>

            <div className="absolute left-0 top-[12%] z-20 max-w-[190px] border border-white/10 bg-[#151a17]/95 p-4 sm:left-[-2%]">
              <p className="editorial-label text-[#a8f2ed]">The big question</p>
              <p className="mt-2 text-sm font-bold leading-5">
                What happens beyond a black hole&apos;s edge?
              </p>
            </div>

            <div className="absolute bottom-[10%] right-0 z-20 max-w-[195px] border border-white/10 bg-[#151a17]/95 p-4 sm:right-[-2%]">
              <p className="editorial-label">Curio&apos;s reminder</p>
              <p className="mt-2 text-sm font-bold leading-5">
                Understanding starts with asking why.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#151a17] px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="editorial-label">The CU101 approach</p>
          <p className="text-sm text-white/50">
            Notice something. Ask why. Understand how it works.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="editorial-label text-[#a8f2ed]">
              Learning without the fog
            </p>

            <h2 className="mt-5 max-w-lg text-4xl font-black leading-[1.02] tracking-[-0.055em] sm:text-5xl">
              First, make it make sense.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/55 sm:text-base">
              The goal isn&apos;t to throw more information at you. It&apos;s
              to help you build a picture of what is happening and why.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#a8f2ed] hover:text-white"
            >
              Get to know CU101 <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="border-t border-white/10">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="grid gap-3 border-b border-white/10 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-7"
              >
                <span className="font-mono text-xs text-[#a8f2ed]">
                  {principle.number}
                </span>

                <div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {principle.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">
                    {principle.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#151a17] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="editorial-label text-[#a8f2ed]">
                Start exploring
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] sm:text-5xl">
                Into the unknown.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
                Begin with one of the published lessons, or browse the
                question deck to find something that grabs you.
              </p>
            </div>

            <Link
              href="/explore"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#a8f2ed] hover:text-white"
            >
              Browse questions <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {!lessonsAvailable ? (
            <div className="mt-9 border border-white/10 p-6 sm:p-8">
              <p className="text-sm leading-7 text-white/60">
                The lesson collection is temporarily unavailable. You can
                still explore CU101 and visit the learning hub.
              </p>

              <Link href="/learn" className="editorial-button mt-5">
                Open learning hub <span aria-hidden="true">↗</span>
              </Link>
            </div>
          ) : featuredLessons.length === 0 ? (
            <div className="mt-9 border border-white/10 p-6 sm:p-8">
              <p className="text-sm leading-7 text-white/60">
                New lessons are being prepared for this collection. Explore
                the question deck to see what is available.
              </p>

              <Link href="/explore" className="editorial-button mt-5">
                Explore CU101 <span aria-hidden="true">↗</span>
              </Link>
            </div>
          ) : (
            <div className="mt-9 grid gap-3 md:grid-cols-3">
              {featuredLessons.map((lesson, index) => (
                <Link
                  key={lesson._id}
                  href={`/learn/lesson-overview?lesson=${encodeURIComponent(lesson.slug)}`}
                  className="group flex min-h-64 flex-col border border-white/10 bg-[#101312] p-6 transition hover:-translate-y-1 hover:border-[#a8f2ed]/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#a8f2ed]">
                      0{index + 1}
                    </span>

                    <span className="text-white/35 transition group-hover:text-[#a8f2ed]">
                      ↗
                    </span>
                  </div>

                  <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                    {lesson.topic}
                  </p>

                  <h3 className="mt-3 text-xl font-black leading-snug tracking-tight transition group-hover:text-[#a8f2ed]">
                    {lesson.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/50">
                    {lesson.summary}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-6 text-xs text-white/40">
                    <span>{lesson.durationMinutes} min</span>
                    <span aria-hidden="true">·</span>
                    <span>{lesson.difficulty}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="editorial-label justify-center text-[#a8f2ed]">
            One question changes everything
          </p>

          <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.06em] sm:text-6xl">
            Stay curious.
            <span className="block text-[#a8f2ed]">Follow the why.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            You don&apos;t need to know everything. You only need a question
            worth following.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/explore" className="editorial-button">
              Find your next question <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/learn"
              className="inline-flex min-h-12 items-center justify-center border border-white/20 px-5 text-xs font-bold transition hover:border-[#a8f2ed] hover:text-[#a8f2ed]"
            >
              Start learning
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
