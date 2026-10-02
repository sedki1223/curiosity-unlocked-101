import Image from "next/image";
import Link from "next/link";
import CuriosityExplorer from "@/components/CuriosityExplorer";

const subjects = [
  {
    title: "Space",
    eyebrow: "The universe is weird.",
    description:
      "Black holes, stars, planets, and the ridiculous scale of everything beyond Earth.",
    symbol: "✦",
    color: "text-violet-300",
    glow: "bg-violet-400/[0.11]",
  },
  {
    title: "Everyday Science",
    eyebrow: "Look closer.",
    description:
      "The hidden science inside ordinary things you see, touch, use, and probably never question.",
    symbol: "◉",
    color: "text-cyan-300",
    glow: "bg-cyan-300/[0.10]",
  },
  {
    title: "How Things Work",
    eyebrow: "Nothing is really simple.",
    description:
      "Machines, systems, energy, and mechanisms explained without the headache.",
    symbol: "⌁",
    color: "text-amber-300",
    glow: "bg-amber-300/[0.09]",
  },
];

export default function ExplorePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="grid-fade pointer-events-none absolute inset-x-0 top-0 h-[720px]" />
      <div className="ambient-orb absolute -right-48 top-20 h-[34rem] w-[34rem] rounded-full bg-violet-400/[0.08]" />
      <div className="ambient-orb absolute -left-44 top-[30rem] h-[28rem] w-[28rem] rounded-full bg-cyan-300/[0.055]" />

      <main className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 lg:px-10">
        <section className="grid items-end gap-10 py-12 lg:grid-cols-[1fr_auto] lg:py-20">
          <div className="max-w-4xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Explore CU101
            </p>

            <h1 className="mt-5 text-[3.5rem] font-semibold leading-[.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-[6.3rem]">
              Start with the
              <span className="block text-slate-600">
                question that wins.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              You do not need a subject first. Start with the thing you noticed.
              Then follow it wherever the explanation takes you.
            </p>
          </div>

          <div className="glass-card relative hidden w-64 overflow-hidden rounded-[1.7rem] p-5 sm:block">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-300/[0.08] blur-2xl" />

            <div className="relative flex items-center gap-4">
              <div className="relative h-16 w-14 shrink-0">
                <Image
                  src="/curio/curio.png"
                  alt="Curio"
                  fill
                  className="object-contain object-bottom"
                  sizes="56px"
                />
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                  Curio&apos;s rule
                </p>

                <p className="mt-1 text-sm font-semibold leading-6 text-white">
                  If it makes you ask why. Follow it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          {subjects.map((subject) => (
            <Link
              key={subject.title}
              href="#questions"
              className="glass-card group relative overflow-hidden rounded-[1.8rem] p-6 transition duration-400 hover:-translate-y-1.5 hover:border-white/15"
            >
              <div
                className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl ${subject.glow}`}
              />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] text-lg ${subject.color}`}
                  >
                    {subject.symbol}
                  </div>

                  <span className="text-slate-700 transition group-hover:text-slate-400">
                    ↗
                  </span>
                </div>

                <p
                  className={`mt-12 text-[10px] font-semibold uppercase tracking-[0.18em] ${subject.color}`}
                >
                  {subject.eyebrow}
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {subject.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {subject.description}
                </p>
              </div>
            </Link>
          ))}
        </section>

        <section id="questions" className="mt-20 scroll-mt-24">
          <div>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                Question deck
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Do not browse. Get curious.
              </h2>

              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500">
                Search a question. Filter by the kind of curiosity it belongs
                to. Follow the ones that already have a path.
              </p>
            </div>

            <div className="mt-12">
              <CuriosityExplorer />
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-violet-400/[0.09] via-white/[0.02] to-cyan-300/[0.06] p-7 sm:p-9">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-400/[0.07] blur-3xl" />

            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                A deeper path
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                The short answer is not always the interesting one.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                When a question keeps pulling at you, move from a quick idea
                into a full learning trail.
              </p>

              <Link
                href="/learn"
                className="mt-7 inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Open the learning hub <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-7 sm:p-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Coming alive
            </p>

            <div className="mt-5 space-y-4">
              {[
                "More everyday science",
                "More mechanisms",
                "More space rabbit holes",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/[0.06] pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="text-[10px] font-semibold text-slate-700">
                    0{index + 1}
                  </span>

                  <span className="text-sm font-semibold text-slate-300">
                    {item}
                  </span>

                  <span className="ml-auto rounded-full border border-white/10 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-600">
                    Next
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

