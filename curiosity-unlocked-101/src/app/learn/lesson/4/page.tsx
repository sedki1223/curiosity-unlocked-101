import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Crossing the horizon",
    description:
      "What the event horizon means for someone actually falling toward a black hole.",
  },
  {
    number: "02",
    title: "Getting pulled apart",
    description:
      "How the difference in gravity between your head and feet can become enormous.",
  },
  {
    number: "03",
    title: "The deepest mystery",
    description:
      "What general relativity predicts at the center, and why that answer is incomplete.",
  },
  {
    number: "04",
    title: "What we still don't know",
    description:
      "The boundary between established physics and the questions researchers are still trying to solve.",
  },
];

const known = [
  "General relativity provides a very successful description of black holes and their large-scale behavior.",
  "The event horizon marks a boundary from which no signal can return to the outside universe.",
  "Matter falling toward a sufficiently small black hole can experience enormous differences in gravitational strength across its body.",
];

const unknown = [
  "What the ultimate interior of a black hole is actually like at the deepest level.",
  "How gravity behaves where quantum effects can no longer be ignored.",
  "What a complete theory combining general relativity and quantum mechanics would say about the black-hole interior.",
];

const takeaways = [
  "Crossing an event horizon is not the same thing as hitting a physical surface.",
  "Near a small black hole, tidal forces can stretch and compress falling matter dramatically.",
  "Classical general relativity predicts a singularity in the simplest black-hole solutions.",
  "That prediction also signals that our current description is incomplete at the deepest level.",
];

export default function LessonFourPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-[-12rem] top-[38rem] h-[30rem] w-[30rem] rounded-full bg-cyan-400/5 blur-3xl" />
        <div className="absolute left-[-12rem] top-[82rem] h-[28rem] w-[28rem] rounded-full bg-purple-500/5 blur-3xl" />
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
            Lesson 04
          </Link>

          <span className="text-slate-600">/</span>

          <span className="text-slate-500">What happens inside?</span>
        </div>

        {/* Header */}
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(99,102,241,0.18),transparent_30%),radial-gradient(circle_at_15%_90%,rgba(34,211,238,0.05),transparent_27%)]" />

          <div className="relative px-7 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
                    Lesson 04
                  </span>

                  <span className="text-sm text-slate-500">•</span>

                  <span className="text-sm font-medium text-slate-400">
                    9 min
                  </span>

                  <span className="text-sm text-slate-500">•</span>

                  <span className="text-sm font-medium text-slate-400">
                    Beginner+
                  </span>
                </div>

                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  What happens
                  <span className="block text-slate-400">
                    inside?
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                  We&apos;ve reached the part where science becomes less certain.
                  There are things we understand remarkably well — and there
                  are questions where our current theories stop giving us a
                  complete answer.
                </p>
              </div>

              <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Progress
                </div>

                <div className="mt-2 flex items-center gap-3">
                  <div className="h-2 w-28 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-full rounded-full bg-indigo-400" />
                  </div>

                  <span className="text-sm font-semibold text-white">
                    4 / 4
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
                  Crossing the horizon
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                What would it actually feel like?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                The event horizon is not a solid barrier. An observer falling
                freely toward a sufficiently large black hole would not
                necessarily notice a sudden physical boundary at the moment of
                crossing.
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/60 p-7 sm:p-9">
                <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
                  <div className="relative mx-auto h-52 w-52 shrink-0">
                    <div className="absolute inset-3 rounded-full border border-indigo-400/10" />
                    <div className="absolute inset-7 rounded-full border border-cyan-300/10" />

                    <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-[0_0_70px_rgba(99,102,241,0.35)]" />

                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full border-[5px] border-transparent border-t-orange-300/80 border-r-indigo-300/60" />

                    <div className="absolute left-[18%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_15px_rgba(165,243,252,0.9)]" />

                    <div className="absolute left-[4%] top-1/2 -translate-y-1/2 text-[11px] font-semibold text-slate-500">
                      falling in
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                      The surprising part
                    </p>

                    <p className="mt-3 text-xl font-black leading-8 text-white">
                      The horizon is not where the black hole suddenly “grabs”
                      you.
                    </p>

                    <p className="mt-4 leading-7 text-slate-400">
                      The effects you experience depend strongly on the black
                      hole&apos;s size and your location within its gravitational
                      field.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="my-16 h-px bg-white/10" />

            {/* Section 2 */}
            <section>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-orange-300/20 bg-orange-400/10 text-sm font-black text-orange-200">
                  02
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                  Getting pulled apart
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                The real danger can be the difference in gravity.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Gravity is not necessarily the same strength across your entire
                body. Your feet and head can experience different gravitational
                pulls, and near a sufficiently small black hole that difference
                can become enormous.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Head
                  </p>

                  <p className="mt-3 text-xl font-bold text-white">
                    Slightly weaker pull
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    A point farther from the black hole feels less gravitational
                    acceleration.
                  </p>
                </div>

                <div className="rounded-3xl border border-orange-300/15 bg-orange-400/[0.04] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-300">
                    Difference
                  </p>

                  <p className="mt-3 text-xl font-bold text-white">
                    Tidal forces
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    The difference in gravitational strength across an object
                    can become huge.
                  </p>
                </div>

                <div className="rounded-3xl border border-red-300/10 bg-red-400/[0.03] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-300/80">
                    Extreme case
                  </p>

                  <p className="mt-3 text-xl font-bold text-white">
                    Stretching
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    The resulting tidal forces can stretch and compress matter
                    dramatically.
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-300">
                  The famous nickname
                </p>

                <p className="mt-3 text-xl font-black text-white">
                  “Spaghettification.”
                </p>

                <p className="mt-3 leading-7 text-slate-400">
                  Physicists sometimes use this memorable word for the extreme
                  stretching caused by tidal forces near a compact object.
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
                  The deepest mystery
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                And then we reach the part where our answer breaks down.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                In the simplest classical description, general relativity
                predicts that matter collapsing into a black hole can lead to a
                singularity — a region where the theory predicts extreme,
                potentially unbounded curvature.
              </p>

              <div className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-7 sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_48%)]" />

                <div className="relative flex min-h-[300px] items-center justify-center">
                  <div className="absolute h-64 w-64 rounded-full border border-indigo-300/10" />

                  <div className="absolute h-48 w-48 rounded-full border border-purple-300/10" />

                  <div className="absolute h-32 w-32 rounded-full bg-black shadow-[0_0_100px_rgba(99,102,241,0.38)]" />

                  <div className="absolute h-44 w-44 rotate-12 rounded-full border-[5px] border-transparent border-t-orange-300/70 border-r-indigo-300/60" />

                  <div className="relative z-10 max-w-xs text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                      Our current theory
                    </p>

                    <p className="mt-3 text-xl font-black text-white">
                      predicts something extreme here.
                    </p>
                  </div>
                </div>

                <div className="relative mt-2 rounded-2xl border border-yellow-300/10 bg-yellow-300/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yellow-200/80">
                    But there is a problem
                  </p>

                  <p className="mt-3 leading-7 text-slate-300">
                    A mathematical singularity is often interpreted as a sign
                    that the classical theory has been pushed beyond the
                    regime where it can provide a complete physical
                    description.
                  </p>
                </div>
              </div>
            </section>

            <div className="my-16 h-px bg-white/10" />

            {/* Section 4 */}
            <section>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-sm font-black text-cyan-200">
                  04
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  What we still don&apos;t know
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                This is where the frontier begins.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                General relativity is extraordinarily successful at describing
                gravity on large scales. Quantum mechanics is extraordinarily
                successful at describing the microscopic world. A complete
                theory of quantum gravity would need to bring those descriptions
                together.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-emerald-300/15 bg-emerald-400/[0.03] p-7">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.7)]" />

                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                      We understand
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    {known.map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/70" />

                        <p className="leading-7 text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-purple-300/15 bg-purple-400/[0.03] p-7">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-purple-300 shadow-[0_0_12px_rgba(216,180,254,0.7)]" />

                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                      Still open
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    {unknown.map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-300/70" />

                        <p className="leading-7 text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-indigo-300/15 bg-indigo-500/[0.05] p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
                  The honest answer
                </p>

                <p className="mt-4 text-2xl font-black leading-relaxed text-white sm:text-3xl">
                  We know a lot about black holes.
                  <span className="block text-slate-500">
                    We do not know everything about them.
                  </span>
                </p>

                <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                  And that is not a failure of science. It is exactly where
                  good questions lead: right up to the edge of what our current
                  theories can explain.
                </p>
              </div>
            </section>

            {/* Final quick check */}
            <section className="mt-16 rounded-[2rem] border border-indigo-300/15 bg-indigo-500/[0.05] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
                Final check
              </p>

              <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                Which statement best captures the lesson?
              </h2>

              <div className="mt-7 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                  <p className="text-slate-300">
                    A. Scientists completely understand everything happening
                    inside a black hole.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-5">
                  <p className="font-semibold text-white">
                    B. We understand a great deal about black holes, but the
                    deepest interior is where our current theories become
                    incomplete.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                  <p className="text-slate-300">
                    C. Black holes are purely hypothetical and have never had
                    observational evidence.
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

            {/* Topic complete */}
            <section className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-7 sm:p-10">
              <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
                  Topic complete
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  You made it to the edge.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  You started with “What is a black hole?” and ended at one of
                  the biggest unanswered questions in modern physics.
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                  That is the whole point of CU101: start with something that
                  feels simple, understand it properly, then follow the
                  question as far as science can take you.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/learn/topic"
                    className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Back to topic
                  </Link>

                  <Link
                    href="/explore"
                    className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Explore more
                  </Link>

                  <Link
                    href="/learn"
                    className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                  >
                    Back to Learn →
                  </Link>
                </div>
              </div>
            </section>

            {/* Final thought */}
            <div className="mt-16 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Curio&apos;s rule
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-2xl font-black leading-relaxed text-white sm:text-3xl">
                The best questions
                <span className="block text-slate-500">
                  don't always have easy answers.
                </span>
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}