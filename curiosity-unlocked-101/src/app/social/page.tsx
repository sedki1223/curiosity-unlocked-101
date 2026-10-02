import Link from "next/link";

const platforms = [
  {
    name: "Instagram",
    handle: "@curiosityunlocked101",
    description:
      "Short-form curiosity, visual facts, and Curio discovering something new.",
    format: "Short-form",
    accent: "from-pink-400/20 via-purple-400/10 to-transparent",
    icon: "◎",
  },
  {
    name: "YouTube",
    handle: "Curiosity Unlocked 101",
    description:
      "Follow the curiosity beyond the feed and discover the longer side of CU101.",
    format: "Video",
    accent: "from-red-400/20 via-orange-400/5 to-transparent",
    icon: "▶",
  },
  {
    name: "TikTok",
    handle: "@curiosityunlocked101",
    description:
      "Fast discoveries, strange facts, and the occasional “wait… what?” moment.",
    format: "Short-form",
    accent: "from-cyan-300/20 via-white/5 to-transparent",
    icon: "♪",
  },
  {
    name: "Facebook",
    handle: "Curiosity Unlocked 101",
    description:
      "Another place to discover Curio and follow the growing CU101 universe.",
    format: "Community",
    accent: "from-blue-400/20 via-cyan-400/5 to-transparent",
    icon: "f",
  },
];

const journey = [
  {
    number: "01",
    title: "You discover something",
    text: "A short video gives you a question you didn't know you wanted answered.",
  },
  {
    number: "02",
    title: "You go deeper",
    text: "The CU101 learning platform gives that curiosity somewhere to go.",
  },
  {
    number: "03",
    title: "You tell us what you think",
    text: "Your feedback helps decide what CU101 should improve next.",
  },
];

export default function SocialPage() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_34%_42%,rgba(34,211,238,0.08),transparent_26%),radial-gradient(circle_at_72%_58%,rgba(139,92,246,0.13),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
            {/* HERO COPY */}
            <div className="relative z-20 mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                The CU101 ecosystem
              </p>

              <h1 className="mx-auto mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:mx-0 lg:text-8xl">
                Curiosity doesn't
                <span className="block text-slate-500">
                  stop at one platform.
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0">
                Follow Curio wherever you discover CU101. Short-form content
                is the spark, while the learning platform is where you can
                keep going.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Link
                  href="/learn"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Go deeper →
                </Link>

                <Link
                  href="/explore"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Explore CU101
                </Link>
              </div>
            </div>

            {/* CURIO */}
            <div className="relative mx-auto flex w-full max-w-xl items-center justify-center lg:max-w-none">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.055] blur-3xl" />

              <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[28rem] -translate-x-1/2 rounded-full bg-violet-400/[0.09] blur-3xl" />

              <div className="relative flex w-full items-end justify-center">
                <img
                  src="/curio/curio.png"
                  alt="Curio, the CU101 educational character"
                  className="relative z-10 h-auto max-h-[530px] w-auto max-w-[94%] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,.7)]"
                />

                <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-slate-950/85 px-5 py-2.5 shadow-2xl backdrop-blur-xl">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Find Curio
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
            Find Curio
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Wherever you like to discover things.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            The format changes. The curiosity doesn't.
          </p>
        </div>

        <div className="mx-auto mt-9 grid max-w-5xl gap-4 md:grid-cols-2">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${platform.accent} p-6 transition duration-500 hover:-translate-y-1 hover:border-white/20`}
            >
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/[0.03] blur-2xl transition duration-700 group-hover:scale-125" />

              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-lg font-semibold text-white">
                    {platform.icon}
                  </div>

                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 backdrop-blur">
                    {platform.format}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {platform.name}
                </h3>

                <p className="mt-1.5 text-sm font-medium text-slate-500">
                  {platform.handle}
                </p>

                <p className="mt-4 max-w-xl leading-7 text-slate-400">
                  {platform.description}
                </p>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                >
                  Visit platform
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              How it connects
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              One idea can travel a lot further.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
              CU101 is designed as one ecosystem rather than a collection of
              disconnected accounts.
            </p>
          </div>

          <div className="mx-auto mt-9 max-w-4xl space-y-4">
            {journey.map((item) => (
              <div
                key={item.number}
                className="grid gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5 sm:grid-cols-[64px_1fr] sm:items-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-xs font-semibold text-cyan-200">
                  {item.number}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 leading-7 text-slate-400">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEEDBACK */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-400/[0.08] via-white/[0.025] to-cyan-300/[0.06] p-8 sm:p-10 lg:p-12">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />
          <div className="absolute -bottom-32 left-16 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Your voice matters
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
              Tell us what we should build next.
            </h2>

            <p className="mt-4 leading-8 text-slate-400 sm:text-lg">
              Something confusing? Something missing? Love a lesson? Hate the
              layout? CU101 should evolve with the people actually using it.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Feedback collection will become part of the platform as the
              project grows.
            </p>

            <Link
              href="/explore"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Explore first →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 lg:py-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
            Keep wondering
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            There's always another question.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Follow Curio, explore a subject, and see where the next question
            takes you.
          </p>

          <Link
            href="/learn"
            className="mt-7 inline-flex items-center justify-center rounded-2xl bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Start exploring →
          </Link>
        </div>
      </section>
    </div>
  );
}

