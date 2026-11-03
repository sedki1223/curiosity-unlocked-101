import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "The boundary",
    description:
      "The event horizon is the boundary that marks the point of no return.",
  },
  {
    number: "02",
    title: "Not a wall",
    description:
      "There is no solid surface waiting there. The boundary is a feature of spacetime.",
  },
  {
    number: "03",
    title: "Light cannot escape",
    description:
      "Inside the horizon, every future-directed path leads deeper inward, so light cannot get back outside.",
  },
  {
    number: "04",
    title: "What you see",
    description:
      "For a distant observer, the region around the horizon produces some of the strangest visual effects in physics.",
  },
];

const takeaways = [
  "The event horizon is a boundary, not a physical shell.",
  "Crossing the horizon means that returning to the outside universe is no longer possible.",
  "Light cannot escape from inside the event horizon.",
  "The horizon marks where the geometry of spacetime becomes fundamentally different from our everyday experience.",
];

export default function LessonThreePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#a8f2ed]/[0.06] blur-3xl" />
        <div className="absolute right-[-12rem] top-[34rem] h-[30rem] w-[30rem] rounded-full bg-cyan-400/5 blur-3xl" />
        <div className="absolute left-[-12rem] top-[78rem] h-[28rem] w-[28rem] rounded-full bg-[#d8ff70]/[0.06] blur-3xl" />
      </div>

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:px-8 lg:px-10">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/55">
          <Link href="/learn" className="transition hover:text-white">
            Learn
          </Link>

          <span className="text-white/35">/</span>

          <Link href="/learn/topic" className="transition hover:text-white">
            Black Holes
          </Link>

          <span className="text-white/35">/</span>

          <Link
            href="/learn/lesson-overview"
            className="transition hover:text-white"
          >
            Lesson 03
          </Link>

          <span className="text-white/35">/</span>

          <span className="text-white/40">The event horizon</span>
        </div>

        {/* Header */}
        <section className="relative overflow-hidden rounded-none border border-white/10 bg-[#151a17] shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(168,242,237,0.18),transparent_30%),radial-gradient(circle_at_12%_85%,rgba(34,211,238,0.06),transparent_26%)]" />

          <div className="relative px-7 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[#a8f2ed]/20 bg-[#a8f2ed]/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a8f2ed]">
                    Lesson 03
                  </span>

                  <span className="text-sm text-white/40">•</span>

                  <span className="text-sm font-medium text-white/55">
                    8 min
                  </span>

                  <span className="text-sm text-white/40">•</span>

                  <span className="text-sm font-medium text-white/55">
                    Beginner
                  </span>
                </div>

                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  The event
                  <span className="block text-white/55">
                    horizon.
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
                  We&apos;ve reached the line that defines the black hole.
                  There is no wall, no surface, and no cosmic trapdoor. Just a
                  boundary in spacetime with a very important consequence.
                </p>
              </div>

              <div className="shrink-0 rounded-none border border-white/10 bg-white/[0.03] px-5 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                  Progress
                </div>

                <div className="mt-2 flex items-center gap-3">
                  <div className="h-2 w-28 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-[#a8f2ed]/[0.06]" />
                  </div>

                  <span className="text-sm font-semibold text-white">
                    3 / 4
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          {/* Side rail */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 rounded-none border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                In this lesson
              </p>

              <div className="mt-5 space-y-4">
                {sections.map((section, index) => (
                  <div key={section.number} className="flex gap-3">
                    <div
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-[11px] font-black ${
                        index === 0
                          ? "border-[#a8f2ed]/20 bg-[#a8f2ed]/[0.06] text-[#a8f2ed]"
                          : "border-white/10 bg-white/5 text-white/40"
                      }`}
                    >
                      {section.number}
                    </div>

                    <p
                      className={`text-sm font-semibold ${
                        index === 0 ? "text-white" : "text-white/55"
                      }`}
                    >
                      {section.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <article className="min-w-0 max-w-4xl">
            {/* Section 1 */}
            <section>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-none border border-[#a8f2ed]/20 bg-[#a8f2ed]/[0.06] text-sm font-black text-[#a8f2ed]">
                  01
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a8f2ed]">
                  The boundary
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                This is the line that changes everything.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                The event horizon is the boundary surrounding a black hole
                beyond which an object or signal cannot escape to the distant
                outside universe.
              </p>

              {/* Central visual */}
              <div className="relative mt-10 overflow-hidden rounded-none border border-white/10 bg-[#101312] p-7 sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,242,237,0.09),transparent_48%)]" />

                <div className="relative flex min-h-[360px] items-center justify-center">
                  {/* Outer gravitational region */}
                  <div className="absolute h-72 w-72 rounded-full border border-[#a8f2ed]/20" />

                  <div className="absolute h-60 w-60 rounded-full border border-cyan-300/10 bg-[#a8f2ed]/[0.06]" />

                  {/* Event horizon glow */}
                  <div className="absolute h-48 w-48 rounded-full border-[5px] border-orange-300/50 shadow-[0_0_60px_rgba(251,191,36,0.12)]" />

                  {/* Black hole */}
                  <div className="absolute h-32 w-32 rounded-full bg-black shadow-[0_0_90px_rgba(168,242,237,0.38)]" />

                  {/* Orbiting light */}
                  <div className="absolute h-48 w-48 rotate-12 rounded-full border-[5px] border-transparent border-t-orange-300/80 border-r-[#a8f2ed]/20" />

                  <div className="absolute left-1/2 top-1/2 mt-[-12rem] ml-[7rem] flex h-8 w-8 items-center justify-center rounded-full bg-cyan-200 shadow-[0_0_22px_rgba(165,243,252,0.9)]" />

                  {/* Label */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-none border border-white/10 bg-[#151a17] px-4 py-3 backdrop-blur-md">
                    <p className="text-center text-xs font-semibold text-white/65">
                      Event horizon — the point of no return
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="my-16 h-px bg-white/10" />

            {/* Section 2 */}
            <section>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-none border border-cyan-300/20 bg-cyan-400/10 text-sm font-black text-cyan-200">
                  02
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Not a wall
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                You would not crash into it.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                One of the strangest things about an event horizon is that it
                is not a physical surface like the ground beneath your feet.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-none border border-white/10 bg-[#151a17] p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                    Not solid
                  </div>

                  <p className="mt-3 text-xl font-bold text-white">
                    No wall exists.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    There is no physical shell surrounding the black hole.
                  </p>
                </div>

                <div className="rounded-none border border-white/10 bg-[#151a17] p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                    Not a force field
                  </div>

                  <p className="mt-3 text-xl font-bold text-white">
                    Nothing suddenly hits you.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    For a sufficiently large black hole, crossing the horizon
                    can locally feel quite ordinary.
                  </p>
                </div>

                <div className="rounded-none border border-[#a8f2ed]/20 bg-[#a8f2ed]/[0.06] p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a8f2ed]">
                    Spacetime
                  </div>

                  <p className="mt-3 text-xl font-bold text-white">
                    The geometry changed.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    The horizon is a geometric boundary in spacetime.
                  </p>
                </div>
              </div>
            </section>

            <div className="my-16 h-px bg-white/10" />

            {/* Section 3 */}
            <section>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-none border border-[#d8ff70]/20 bg-[#d8ff70]/[0.06] text-sm font-black text-[#d8ff70]">
                  03
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8ff70]">
                  Light cannot escape
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Even light has no route back out.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Light normally moves at the fastest possible speed through
                spacetime. But inside an event horizon, every possible future
                direction leads farther inward.
              </p>

              <div className="mt-8 overflow-hidden rounded-none border border-white/10 bg-[#151a17]">
                <div className="grid md:grid-cols-[1fr_auto_1fr] md:items-stretch">
                  <div className="p-7 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                      Outside
                    </p>

                    <p className="mt-3 text-xl font-bold text-white">
                      Paths can still lead outward.
                    </p>

                    <p className="mt-4 leading-7 text-white/55">
                      A light signal sent outward can continue toward distant
                      space.
                    </p>
                  </div>

                  <div className="flex items-center justify-center border-y border-white/10 bg-white/[0.02] px-7 py-6 md:border-x md:border-y-0">
                    <div className="text-center">
                      <div className="mx-auto h-20 w-20 rounded-full border-[5px] border-orange-300/60 bg-black shadow-[0_0_35px_rgba(251,191,36,0.2)]" />

                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-orange-300">
                        Horizon
                      </p>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d8ff70]">
                      Inside
                    </p>

                    <p className="mt-3 text-xl font-bold text-white">
                      Every future path leads inward.
                    </p>

                    <p className="mt-4 leading-7 text-white/55">
                      There is no future-directed route that takes a signal
                      back to the outside universe.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-none border border-[#a8f2ed]/20 bg-[#a8f2ed]/[0.06] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a8f2ed]">
                  The core idea
                </p>

                <p className="mt-3 text-lg font-bold leading-8 text-white">
                  The black hole does not need to “pull harder than light.”
                  The structure of spacetime itself prevents escape.
                </p>
              </div>
            </section>

            <div className="my-16 h-px bg-white/10" />

            {/* Section 4 */}
            <section>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-none border border-orange-300/20 bg-orange-400/10 text-sm font-black text-orange-200">
                  04
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                  What you see
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                The horizon makes black holes visually strange.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Things become especially interesting when we think about light
                traveling near the horizon. Gravity can strongly bend the
                paths of light, producing dramatic visual effects around a
                black hole.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-none border border-white/10 bg-[#151a17] p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    Light bends
                  </p>

                  <p className="mt-3 text-xl font-bold text-white">
                    Space around the hole acts like a strange optical maze.
                  </p>

                  <p className="mt-4 leading-7 text-white/55">
                    Strong gravity curves spacetime, and light follows that
                    curved geometry.
                  </p>
                </div>

                <div className="rounded-none border border-white/10 bg-[#151a17] p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a8f2ed]">
                    Time behaves differently
                  </p>

                  <p className="mt-3 text-xl font-bold text-white">
                    Distant observers describe the approach differently.
                  </p>

                  <p className="mt-4 leading-7 text-white/55">
                    What different observers measure near a horizon is one of
                    the places where relativity clashes hardest with everyday
                    intuition.
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-none border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-7 sm:p-9">
                <p className="text-2xl font-black leading-relaxed text-white sm:text-3xl">
                  The event horizon is simple to define.
                  <span className="block text-white/40">
                    Understanding what surrounds it is where things get weird.
                  </span>
                </p>
              </div>
            </section>

            {/* Quick check */}
            <section className="mt-16 rounded-none border border-[#a8f2ed]/20 bg-[#a8f2ed]/[0.06] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a8f2ed]">
                Quick check
              </p>

              <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                What is the event horizon?
              </h2>

              <div className="mt-7 space-y-3">
                <div className="rounded-none border border-white/10 bg-[#101312] p-5">
                  <p className="text-white/65">
                    A. A solid surface surrounding the black hole.
                  </p>
                </div>

                <div className="rounded-none border border-emerald-400/20 bg-emerald-400/[0.04] p-5">
                  <p className="font-semibold text-white">
                    B. A boundary in spacetime beyond which escape to the
                    outside universe is impossible.
                  </p>
                </div>

                <div className="rounded-none border border-white/10 bg-[#101312] p-5">
                  <p className="text-white/65">
                    C. The hottest part of the black hole.
                  </p>
                </div>
              </div>
            </section>

            {/* Takeaways */}
            <section className="mt-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Take it with you
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Four things to remember.
              </h2>

              <div className="mt-8 space-y-3">
                {takeaways.map((takeaway, index) => (
                  <div
                    key={takeaway}
                    className="flex gap-4 rounded-none border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none border border-white/10 bg-white/5 text-xs font-black text-white/65">
                      {index + 1}
                    </div>

                    <p className="leading-7 text-white/65">{takeaway}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Navigation */}
            <section className="relative mt-16 overflow-hidden rounded-none border border-white/10 bg-[#151a17] p-7 sm:p-10">
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#a8f2ed]/[0.06] blur-3xl" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a8f2ed]">
                  Lesson 03 complete
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  One question remains.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-white/55">
                  We know what a black hole is, why it becomes extreme, and
                  where its horizon lies. Now comes the part where the answers
                  become much harder.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/learn/lesson/2"
                    className="inline-flex items-center rounded-none border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    ← Previous lesson
                  </Link>

                  <Link
                    href="/learn/lesson-overview"
                    className="inline-flex items-center rounded-none border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Lesson overview
                  </Link>

                  <Link
                    href="/learn/lesson/4"
                    className="inline-flex items-center rounded-none bg-white px-5 py-3 text-sm font-bold text-[#101312] transition hover:-translate-y-0.5 hover:bg-[#a8f2ed]"
                  >
                    Next lesson →
                  </Link>
                </div>
              </div>
            </section>

            {/* Curio-style ending */}
            <div className="mt-16 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Curio&apos;s rule
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-2xl font-black leading-relaxed text-white sm:text-3xl">
                The weirdest part
                <span className="block text-white/40">
                  is still ahead.
                </span>
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}