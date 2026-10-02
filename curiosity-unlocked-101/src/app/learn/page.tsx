import Image from "next/image";
import Link from "next/link";
import { getCurrentUserProgress } from "@/lib/server-api";

const blackHoleTrail = [
  { order: "01", title: "What is a black hole?", slug: "what-is-a-black-hole", duration: "6 min", text: "Start with the mental picture. What is actually sitting behind the name?" },
  { order: "02", title: "Gravity turned extreme", slug: "gravity-turned-extreme", duration: "7 min", text: "See why concentrating enormous mass changes the geometry around it." },
  { order: "03", title: "The event horizon", slug: "the-event-horizon", duration: "8 min", text: "Find the boundary that changes what can still get back out." },
  { order: "04", title: "What happens inside?", slug: "what-happens-inside-a-black-hole", duration: "9 min", text: "Push to the edge of what current physics can actually describe." },
];

const subjects = [
  { title: "Space", text: "Black holes, stars, planets, and the strange scale of the universe.", color: "violet" },
  { title: "Everyday Science", text: "The hidden science inside ordinary things you see and use every day.", color: "cyan" },
  { title: "How Things Work", text: "Machines, systems, technology, and mechanisms without the headache.", color: "amber" },
];

export default async function LearnPage() {
  const progress = await getCurrentUserProgress();
  const completed = new Set(progress.map((item) => item.lessonSlug));
  const completedCount = blackHoleTrail.filter((item) => completed.has(item.slug)).length;
  const nextLesson = blackHoleTrail.find((item) => !completed.has(item.slug)) ?? blackHoleTrail[blackHoleTrail.length - 1];

  return (
    <div className="relative overflow-hidden">
      <div className="grid-fade pointer-events-none absolute inset-x-0 top-0 h-[680px]" />
      <div className="ambient-orb absolute -left-44 top-20 h-[30rem] w-[30rem] rounded-full bg-violet-400/[0.07]" />
      <div className="ambient-orb absolute -right-40 top-[34rem] h-[28rem] w-[28rem] rounded-full bg-cyan-300/[0.05]" />

      <main className="mx-auto max-w-7xl px-5 pb-28 pt-10 sm:px-8 lg:px-10">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-violet-400/[0.09] via-white/[0.025] to-cyan-300/[0.055] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10 lg:p-14">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-violet-400/[0.08] blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_340px]">
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">Learning hub</p>
              <h1 className="mt-5 text-[3.4rem] font-semibold leading-[.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.8rem]">
                Stay with the
                <span className="block text-slate-600">question longer.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Quick facts start the spark. Learning is where you slow down enough to build the picture and understand why it works.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`/learn/lesson-overview?lesson=${nextLesson.slug}`} className="inline-flex items-center rounded-2xl bg-white px-6 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100">
                  {progress.length ? "Continue learning" : "Start a rabbit hole"}
                  <span className="ml-2">→</span>
                </Link>
                <Link href="/explore" className="inline-flex items-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 py-4 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]">
                  Find a question
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-6 text-xs text-slate-600">
                <span><strong className="text-slate-300">{completedCount}/4</strong> black-hole lessons completed</span>
                <span><strong className="text-slate-300">30 min</strong> full trail</span>
                <span><strong className="text-slate-300">Beginner</strong> friendly</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[320px]">
              <div className="absolute inset-0 rounded-[2rem] bg-cyan-300/[0.06] blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-slate-950/70 p-3">
                <div className="relative min-h-[380px] overflow-hidden rounded-[1.5rem] border border-white/[0.06] bg-[#07090f]">
                  <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.07]" />
                  <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/[0.1]" />
                  <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-[0_0_65px_rgba(99,102,241,.45)]" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 backdrop-blur-xl">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-300">Current trail</p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white">Black holes. One question at a time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">Your current rabbit hole</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Black holes.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-right">A four-step beginner trail that moves from the basic picture to the edge of what we know.</p>
          </div>

          <div className="mt-9 grid gap-3 lg:grid-cols-2">
            {blackHoleTrail.map((item) => {
              const done = completed.has(item.slug);
              return (
                <Link key={item.slug} href={`/learn/lesson-overview?lesson=${item.slug}`} className="glass-card group relative overflow-hidden rounded-[1.7rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/15">
                  <div className="relative flex gap-5">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-xs font-black ${done ? "border-emerald-300/15 bg-emerald-300/[0.05] text-emerald-200" : "border-white/10 bg-white/[0.035] text-slate-400"}`}>
                      {done ? "✓" : item.order}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-600">{item.duration}</span>
                        {done && <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-300/80">Completed</span>}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p>
                      <div className="mt-6 text-sm font-semibold text-slate-500 transition group-hover:text-white">Open lesson overview <span className="ml-1 transition group-hover:translate-x-1">→</span></div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-20 grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
          <div className="glass-card rounded-[1.8rem] p-7 sm:p-9">
            <div className="relative h-28 w-20">
              <Image src="/curio/curio.png" alt="Curio" fill className="object-contain object-bottom" sizes="80px" />
            </div>
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">Curio&apos;s approach</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">Do not memorize the picture. Make it click.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-500">Each lesson moves from question to mental model to explanation. The goal is a useful picture you can carry outside the page.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {subjects.map((subject) => (
              <Link key={subject.title} href="/explore" className="glass-card group rounded-[1.7rem] p-6 transition hover:-translate-y-1 hover:border-white/15">
                <div className={`h-2 w-10 rounded-full ${subject.color === "violet" ? "bg-violet-300/60" : subject.color === "cyan" ? "bg-cyan-300/60" : "bg-amber-300/60"}`} />
                <h3 className="mt-9 text-xl font-semibold text-white">{subject.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{subject.text}</p>
                <div className="mt-7 text-sm font-semibold text-slate-500 transition group-hover:text-white">Browse questions →</div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
