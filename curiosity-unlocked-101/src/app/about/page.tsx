import Image from "next/image";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Curiosity first",
    text: "Every lesson starts with a question worth asking.",
  },
  {
    number: "02",
    title: "Understand, don't memorize",
    text: "We care about the why behind a fact, not just the answer.",
  },
  {
    number: "03",
    title: "Keep exploring",
    text: "One answer should make you curious about the next question.",
  },
];

const ecosystem = [
  {
    label: "SHORTS",
    title: "The spark",
    text: "Short-form curiosity content designed to make you stop and think.",
  },
  {
    label: "LEARNING",
    title: "The deeper dive",
    text: "Interactive lessons that take interesting ideas further.",
  },
  {
    label: "BOOKS",
    title: "The knowledge shelf",
    text: "Longer-form educational material built around the same curiosity.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* HERO / MEET CURIO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.10),transparent_25%),radial-gradient(circle_at_50%_72%,rgba(139,92,246,0.13),transparent_38%)]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-14 text-center sm:px-8 lg:pb-10 lg:pt-16">
          {/* INTRO */}
          <div className="relative z-20 mx-auto max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
              About CU101
            </p>

            <h1 className="mx-auto mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
              Curiosity is a
              <span className="block text-slate-500">way of learning.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Curiosity Unlocked 101 is an educational project built around a
              simple idea: take the questions that make you stop and ask
              “wait, how does that work?” and actually follow them somewhere.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/explore"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Explore CU101 →
              </Link>

              <Link
                href="/learn"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                Start learning
              </Link>
            </div>
          </div>

          {/* CURIO */}
          <div className="relative mx-auto mt-3 max-w-3xl sm:mt-5">
            <div className="pointer-events-none absolute left-1/2 top-[45%] h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.055] blur-3xl" />

            <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[28rem] -translate-x-1/2 rounded-full bg-violet-400/[0.10] blur-3xl" />

            <div className="relative flex items-end justify-center">
              <Image
                src="/curio/curio.png"
                alt="Curio, the face of Curiosity Unlocked 101"
                width={700}
                height={900}
                priority
                className="relative z-10 h-auto max-h-[660px] w-auto max-w-[94%] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,.7)]"
              />

              <div className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-slate-950/85 px-5 py-2.5 shadow-2xl backdrop-blur-xl">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Meet Curio
                </span>
              </div>
            </div>

            <p className="relative z-20 mx-auto mt-0 max-w-md text-sm leading-6 text-slate-500">
              The curious guide behind the questions, discoveries, and rabbit
              holes of CU101.
            </p>
          </div>
        </div>
      </section>

      {/* WHO IS CURIO */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 lg:py-20">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
          Who is Curio?
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
          The character behind the curiosity.
        </h2>

        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base leading-8 text-slate-400 sm:text-lg">
          <p>
            Curio is the recognizable face of CU101 — a curious guide who
            discovers, questions, investigates, and explains the interesting
            things hiding around us.
          </p>

          <p>
            He isn't here to act like a lecturer standing behind a
            presentation. Curio is part of the experience. He gets involved in
            the question, explores the idea, and helps turn something
            complicated into something you can understand.
          </p>

          <p>
            Across CU101, the same character can appear in short videos,
            interactive lessons, and future educational material.
          </p>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              What we believe
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Three rules keep CU101 simple.
            </h2>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {principles.map((item) => (
              <div
                key={item.number}
                className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <span className="text-xs font-semibold text-cyan-300">
                  {item.number}
                </span>

                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.025em] text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
            The CU101 ecosystem
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            One curiosity. Different ways to follow it.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            CU101 isn't limited to one format. Different experiences can take
            the same idea to different levels of depth.
          </p>
        </div>

        <div className="mx-auto mt-9 max-w-4xl space-y-4">
          {ecosystem.map((item, index) => (
            <div
              key={item.label}
              className="group grid gap-5 rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:grid-cols-[90px_1fr] sm:items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-950 text-xs font-bold text-slate-400">
                0{index + 1}
              </div>

              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-cyan-300">
                  {item.label}
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-2xl leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEEDBACK */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 sm:p-10 lg:p-12">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                The platform evolves
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                CU101 isn't finished because V1 is finished.
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
                The people using the platform should have a say in what comes
                next. Feedback helps us discover what works, what doesn't, and
                what deserves another iteration.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
                Build it. Release it. Listen. Improve it.
              </p>

              <Link
                href="/social"
                className="mt-7 inline-flex items-center justify-center rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Connect with CU101 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

