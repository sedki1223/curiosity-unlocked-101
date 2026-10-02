import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Mass matters",
    description:
      "The amount of mass packed into a region determines how strongly spacetime is curved around it.",
  },
  {
    number: "02",
    title: "Make it compact",
    description:
      "The strange part begins when a huge amount of mass is compressed into a sufficiently small region.",
  },
  {
    number: "03",
    title: "The escape problem",
    description:
      "As you move closer to a compact object, escaping requires more energy. Eventually, a point of no return appears.",
  },
  {
    number: "04",
    title: "The important insight",
    description:
      "A black hole is not special because it has magical gravity. It is special because its mass is packed into an extreme enough configuration.",
  },
];

const takeaways = [
  "More mass means stronger gravity, but distance matters too.",
  "Compressing mass into a smaller region makes the gravitational environment increasingly extreme.",
  "The event horizon appears once the object becomes compact enough that escape to the outside becomes impossible.",
  "Black-hole physics is about extreme spacetime geometry, not a mysterious sucking force.",
];

export default function LessonTwoPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-[-12rem] top-[38rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/5 blur-3xl" />
        <div className="absolute left-[-12rem] top-[80rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:px-8 lg:px-10">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/learn" className="transition hover:text-white">
            Learn
          </Link>

          <span className="text-slate-600">/</span>

          <Link href="/learn/topic" className="transition hover:text-white">
            Black Holes
          </Link>

          <span className="text-slate-600">/</span>

          <Link
            href="/learn/lesson-overview"
            className="transition hover:text-white"
          >
            Lesson 02
          </Link>

          <span className="text-slate-600">/</span>

          <span className="text-slate-500">Gravity turned extreme</span>
        </div>

        {/* Header */}
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(99,102,241,0.17),transparent_30%),radial-gradient(circle_at_20%_100%,rgba(34,211,238,0.05),transparent_28%)]" />

          <div className="relative px-7 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
                    Lesson 02
                  </span>

                  <span className="text-sm text-slate-500">•</span>

                  <span className="text-sm font-medium text-slate-400">
                    7 min
                  </span>

                  <span className="text-sm text-slate-500">•</span>

                  <span className="text-sm font-medium text-slate-400">
                    Beginner
                  </span>
                </div>

                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Gravity turned
                  <span className="block text-slate-400">extreme.</span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                  We know that black holes have enormous gravitational effects.
                  But why does gravity become so extreme? The answer starts
                  with a simple combination: mass and compactness.
                </p>
              </div>

              <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Progress
                </div>

                <div className="mt-2 flex items-center gap-3">
                  <div className="h-2 w-28 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/4 rounded-full bg-indigo-400" />
                  </div>

                  <span className="text-sm font-semibold text-white">
                    2 / 4
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
            <div className="sticky top-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                In this lesson
              </p>

              <div className="mt-5 space-y-4">
                {sections.map((section, index) => (
                  <div key={section.number} className="flex gap-3">
                    <div
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-[11px] font-black ${
                        index === 0
                          ? "border-indigo-300/20 bg-indigo-400/10 text-indigo-200"
                          : "border-white/10 bg-white/5 text-slate-500"
                      }`}
                    >
                      {section.number}
                    </div>

                    <p
                      className={`text-sm font-semibold ${
                        index === 0 ? "text-white" : "text-slate-400"
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
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-300/20 bg-indigo-400/10 text-sm font-black text-indigo-200">
                  01
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
                  Mass matters
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Gravity gets stronger when mass gets bigger.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                At a basic level, gravity depends on two things we can picture
                intuitively: how much mass there is and how far away you are
                from it.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    More mass
                  </p>

                  <p className="mt-3 text-xl font-bold text-white">
                    Stronger gravity
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    More mass means a stronger gravitational field.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Less distance
                  </p>

                  <p className="mt-3 text-xl font-bold text-white">
                    Stronger effect
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Getting closer makes the gravitational effect much more
                    intense.
                  </p>
                </div>

                <div className="rounded-3xl border border-indigo-300/15 bg-indigo-500/[0.05] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
                    Both together
                  </p>

                  <p className="mt-3 text-xl font-bold text-white">
                    Things get extreme
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Huge mass packed into a tiny region creates an extreme
                    environment.
                  </p>
                </div>
              </div>
            </section>

            <div className="my-16 h-px bg-white/10" />

            {/* Section 2 */}
            <section>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-sm font-black text-cyan-200">
                  02
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Make it compact
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                The same mass can create very different conditions.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Imagine keeping the amount of mass the same while squeezing it
                into a smaller and smaller region.
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/60 p-7 sm:p-9">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="flex-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Spread out
                    </p>

                    <div className="mt-4 h-24 rounded-2xl border border-white/10 bg-white/[0.03]">
                      <div className="flex h-full items-center justify-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-slate-700/70" />
                        <div className="h-8 w-8 rounded-full bg-slate-700/50" />
                        <div className="h-10 w-10 rounded-full bg-slate-700/60" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-2xl font-black text-slate-500">
                    →
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-300">
                      Extremely compact
                    </p>

                    <div className="mt-4 flex h-24 items-center justify-center rounded-2xl border border-indigo-300/15 bg-indigo-500/[0.05]">
                      <div className="h-16 w-16 rounded-full bg-black shadow-[0_0_40px_rgba(99,102,241,0.35)]" />
                    </div>
                  </div>
                </div>

                <p className="mt-7 leading-7 text-slate-400">
                  The important thing is not simply “more stuff.” It is how
                  much mass is packed into a given region of space.
                </p>
              </div>
            </section>

            <div className="my-16 h-px bg-white/10" />

            {/* Section 3 */}
            <section>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-300/20 bg-purple-400/10 text-sm font-black text-purple-200">
                  03
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                  The escape problem
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Now imagine trying to escape.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Leaving a massive object means getting away from its
                gravitational pull. The closer you are to a compact massive
                object, the more difficult escape becomes.
              </p>

              <div className="mt-8 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-start gap-4">
                    <span className="text-xl">01</span>

                    <div>
                      <p className="font-semibold text-white">
                        Weak enough gravity
                      </p>

                      <p className="mt-1 leading-7 text-slate-400">
                        You can escape by moving fast enough.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-start gap-4">
                    <span className="text-xl">02</span>

                    <div>
                      <p className="font-semibold text-white">
                        Stronger gravity
                      </p>

                      <p className="mt-1 leading-7 text-slate-400">
                        The required escape speed gets higher.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-indigo-300/20 bg-indigo-500/[0.06] p-5">
                  <div className="flex items-start gap-4">
                    <span className="text-xl">03</span>

                    <div>
                      <p className="font-semibold text-white">
                        Extreme compactness
                      </p>

                      <p className="mt-1 leading-7 text-slate-400">
                        The point of no return appears. That is the event
                        horizon we met in Lesson 01.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="my-16 h-px bg-white/10" />

            {/* Section 4 */}
            <section>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-orange-300/20 bg-orange-400/10 text-sm font-black text-orange-200">
                  04
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                  The important insight
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Black holes are extreme because of their geometry.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                It is tempting to imagine a black hole as an object with a
                special kind of “super gravity.” That is not the best mental
                model.
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-7 sm:p-9">
                <p className="text-2xl font-black leading-relaxed text-white sm:text-3xl">
                  The key is that enough mass has been compressed into a small
                  enough region to create an event horizon.
                </p>

                <p className="mt-5 leading-7 text-slate-400">
                  From there, the geometry of spacetime becomes the central
                  story. That is what we will explore next.
                </p>
              </div>
            </section>

            {/* Quick check */}
            <section className="mt-16 rounded-[2rem] border border-indigo-300/15 bg-indigo-500/[0.05] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
                Quick check
              </p>

              <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                What makes a black hole extreme?
              </h2>

              <div className="mt-7 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                  <p className="text-slate-300">
                    A. It has magical gravity that automatically pulls in
                    everything.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-5">
                  <p className="font-semibold text-white">
                    B. A huge amount of mass is compressed into an extremely
                    compact region, producing an event horizon.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                  <p className="text-slate-300">
                    C. It contains no mass at all.
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
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-black text-slate-300">
                      {index + 1}
                    </div>

                    <p className="leading-7 text-slate-300">{takeaway}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Navigation */}
            <section className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-7 sm:p-10">
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
                  Lesson 02 complete
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Next stop: the event horizon.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                  You now know why compactness matters. Next we can finally
                  zoom in on the boundary that defines a black hole.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/learn/lesson"
                    className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    ← Previous lesson
                  </Link>

                  <Link
                    href="/learn/lesson-overview"
                    className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Lesson overview
                  </Link>

                  <button
                    type="button"
                    className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                  >
                    Next lesson →
                  </button>
                </div>
              </div>
            </section>

            <div className="mt-16 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Curio&apos;s rule
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-2xl font-black leading-relaxed text-white sm:text-3xl">
                Make it simple first.
                <span className="block text-slate-500">
                  Then make it deep.
                </span>
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}