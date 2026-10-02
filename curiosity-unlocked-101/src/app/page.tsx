import Image from "next/image";
import Link from "next/link";
import CuriosityExplorer from "@/components/CuriosityExplorer";

const paths = [
  {
    label: "SPACE",
    title: "Follow the impossible.",
    text: "Black holes, stars, planets, and the strange rules that run the universe.",
    tone: "violet",
  },
  {
    label: "EVERYDAY SCIENCE",
    title: "Look closer.",
    text: "The hidden science inside the objects and habits you barely notice.",
    tone: "cyan",
  },
  {
    label: "HOW THINGS WORK",
    title: "Nothing is really simple.",
    text: "Machines, systems, technology, and the mechanisms behind familiar things.",
    tone: "amber",
  },
];

const trail = [
  { number: "01", title: "Start with a question", text: "Something in the world bothers your brain just enough to ask why." },
  { number: "02", title: "Build the picture", text: "We turn the invisible mechanism into something you can actually imagine." },
  { number: "03", title: "Understand the why", text: "The real science arrives after the mental picture already makes sense." },
  { number: "04", title: "Keep the question alive", text: "One answer should leave you with another thing worth noticing." },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="grid-fade pointer-events-none absolute inset-x-0 top-0 h-[760px]" />
      <div className="ambient-orb absolute -left-44 top-40 h-[28rem] w-[28rem] rounded-full bg-cyan-300/[0.07]" />
      <div className="ambient-orb absolute -right-44 top-8 h-[34rem] w-[34rem] rounded-full bg-violet-400/[0.07]" />

      <main>
        <section className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:px-10 lg:py-16">
          <div className="hero-copy relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-cyan-300" />
              Curiosity, unlocked.
            </div>

            <h1 className="mt-7 text-[3.4rem] font-semibold leading-[.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-[6.2rem]">
              The world is stranger
              <span className="block bg-gradient-to-r from-cyan-100 via-white to-violet-200 bg-clip-text text-transparent">
                when you look closer.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              CU101 turns the little “wait… how?” moments hiding in everyday life and science into things you can actually picture.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/explore"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Enter the question deck <span className="ml-2">→</span>
              </Link>

              <Link
                href="/learn"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 py-4 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                Go deeper
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-slate-600">
              <span>
                <strong className="text-slate-300">Questions</strong> first
              </span>
              <span>
                <strong className="text-slate-300">Pictures</strong> before jargon
              </span>
              <span>
                <strong className="text-slate-300">One rabbit hole</strong> at a time
              </span>
            </div>
          </div>

          <div className="hero-art relative min-h-[560px] lg:min-h-[680px]">
            <div className="absolute left-1/2 top-1/2 h-[31rem] w-[31rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.035] blur-3xl" />
            <div className="orbit-spin absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />
            <div className="orbit-spin-reverse absolute left-1/2 top-1/2 h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/[0.07]" />

            <div className="absolute left-[3%] top-[14%] glass-card rounded-2xl px-4 py-3">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-300">
                Space
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                What happens past the edge?
              </p>
            </div>

            <div className="absolute right-[2%] top-[27%] glass-card rounded-2xl px-4 py-3">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Everyday
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Why does that click?
              </p>
            </div>

            <div className="absolute bottom-[16%] left-[8%] glass-card rounded-2xl px-4 py-3">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-amber-300">
                How things work
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                What is moving underneath?
              </p>
            </div>

            <div className="absolute left-1/2 top-1/2 flex h-[31rem] w-[31rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full border border-white/[0.05]" />
              <div className="absolute h-56 w-56 rounded-full border border-violet-300/[0.07]" />

              <div className="curio-float relative flex h-[24rem] w-[20rem] items-end justify-center">
                <Image
                  src="/curio/curio.png"
                  alt="Curio"
                  width={420}
                  height={560}
                  priority
                  className="relative z-10 h-full w-full object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,.6)]"
                />
              </div>
            </div>

            <div className="absolute bottom-[7%] right-[6%] max-w-[220px] rounded-2xl border border-white/[0.07] bg-slate-950/80 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                CU101
              </p>
              <p className="mt-1 text-sm font-semibold leading-6 text-slate-200">
                You do not need a textbook before you can be curious.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/[0.07] bg-white/[0.012]">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                The CU101 loop
              </p>
              <p className="text-xs text-slate-600">
                Notice something. Ask why. Keep going.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.76fr_1.24fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                How CU101 feels
              </p>
              <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                A question is only the beginning.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                We want the answer to keep pulling you forward instead of closing the tab.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {trail.map((item) => (
                <div
                  key={item.number}
                  className="glass-card group rounded-[1.6rem] p-5 transition hover:-translate-y-1 hover:border-white/15"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.16em] text-cyan-300">
                      {item.number}
                    </span>
                    <span className="text-slate-700 transition group-hover:text-slate-400">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-9 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/[0.07] bg-white/[0.012]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                  Choose a direction
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Where is your curiosity pulling you?
                </h2>
              </div>

              <Link
                href="/explore"
                className="text-sm font-semibold text-slate-500 transition hover:text-white"
              >
                See the whole deck →
              </Link>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {paths.map((path) => (
                <Link
                  key={path.title}
                  href="/explore"
                  className="glass-card group relative overflow-hidden rounded-[1.8rem] p-6 transition duration-400 hover:-translate-y-1.5 hover:border-white/15"
                >
                  <div
                    className={`absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl ${
                      path.tone === "violet"
                        ? "bg-violet-400/[0.12]"
                        : path.tone === "cyan"
                          ? "bg-cyan-300/[0.11]"
                          : "bg-amber-300/[0.1]"
                    }`}
                  />

                  <div className="relative">
                    <p
                      className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                        path.tone === "violet"
                          ? "text-violet-300"
                          : path.tone === "cyan"
                            ? "text-cyan-300"
                            : "text-amber-300"
                      }`}
                    >
                      {path.label}
                    </p>

                    <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-white">
                      {path.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                      {path.text}
                    </p>

                    <div className="mt-8 text-sm font-semibold text-slate-400 transition group-hover:text-white">
                      Explore questions{" "}
                      <span className="ml-1 transition group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Pick a rabbit hole
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                What are you wondering about?
              </h2>

              <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-500">
                Search. Filter. Jump into the question that refuses to leave your head.
              </p>
            </div>

            <div className="mt-12">
              <CuriosityExplorer />
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.07]">
          <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:py-28">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
              Keep wondering
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
              There is always another question.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Start with one thing you noticed today. We will take it from there.
            </p>

            <Link
              href="/learn"
              className="mt-8 inline-flex items-center rounded-2xl bg-white px-7 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Start learning <span className="ml-2">→</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

