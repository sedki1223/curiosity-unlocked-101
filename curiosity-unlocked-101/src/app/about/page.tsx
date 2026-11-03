
import Image from "next/image";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Curiosity first.",
    text: "Every lesson starts with a question worth asking.",
  },
  {
    number: "02",
    title: "Understand, don't memorize.",
    text: "We care about the why behind a fact, not just the answer.",
  },
  {
    number: "03",
    title: "Keep exploring.",
    text: "One answer should make you curious about the next question.",
  },
];

const ecosystem = [
  {
    number: "01",
    label: "SHORT-FORM CONTENT",
    title: "The spark.",
    text: "Short discoveries that make you pause, wonder, and ask another question.",
  },
  {
    number: "02",
    label: "INTERACTIVE LEARNING",
    title: "The deeper dive.",
    text: "Lessons that help turn a fascinating question into real understanding.",
  },
  {
    number: "03",
    label: "EDUCATIONAL BOOKS",
    title: "The bigger picture.",
    text: "Longer-form material built around the same spirit of curiosity.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative border-b border-white/15">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-14 lg:py-24">
          <div className="relative z-10">
            <p className="editorial-label">
              <span className="mr-3 text-[#a8f2ed]">01 /</span>
              The idea behind CU101
            </p>

            <h1 className="mt-8 text-[clamp(3.6rem,8vw,8rem)] font-black leading-[.8] tracking-[-0.085em] text-[#f0efe7]">
              CURIOSITY
              <br />
              IS A
              <br />
              <span className="text-[#a8f2ed]">WAY OF</span>
              <br />
              LEARNING.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              Curiosity Unlocked 101 began with a simple idea: take the
              questions that make you stop and think, "Wait, how does that
              work?" and actually follow them somewhere.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/explore" className="editorial-button">
                Explore CU101 <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/learn"
                className="inline-flex min-h-12 items-center border border-white/20 px-5 py-3 text-xs font-bold text-[#f0efe7] transition hover:border-[#a8f2ed] hover:text-[#a8f2ed]"
              >
                Start learning
              </Link>
            </div>

            <div className="mt-12 border-t border-white/15 pt-5">
              <p className="editorial-label">The guiding principle</p>
              <p className="mt-3 max-w-lg text-xl font-bold leading-snug tracking-[-0.035em] text-[#f0efe7] sm:text-2xl">
                Don't stop at knowing the answer. Understand why it makes
                sense.
              </p>
            </div>
          </div>

          <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden border border-white/15 bg-[#151a17] sm:min-h-[540px] lg:min-h-[660px]">
            <div className="absolute left-1/2 top-[43%] h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a8f2ed]/20" />
            <div className="absolute left-1/2 top-[43%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a8f2ed]/15" />
            <div className="absolute left-1/2 top-[43%] h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ffb68b]/20" />

            <div className="absolute left-5 top-5 z-10 sm:left-7 sm:top-7">
              <p className="editorial-label text-[#a8f2ed]">Your guide</p>
              <p className="mt-2 text-xs text-white/40">
                Question everything.
              </p>
            </div>

            <Image
              src="/curio/curio.png"
              alt="Curio, the curious guide behind CU101"
              width={700}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="relative z-10 mt-5 h-auto max-h-[540px] w-auto max-w-[92%] object-contain sm:max-h-[620px]"
            />

            <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/15 bg-[#101312]/90 p-5 backdrop-blur-sm sm:p-7">
              <p className="editorial-label text-[#d8ff70]">
                Meet Curio
              </p>
              <p className="mt-2 text-xl font-black tracking-[-0.04em] text-[#f0efe7] sm:text-2xl">
                The character behind the questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-14 lg:py-24">
        <div>
          <p className="editorial-label">
            <span className="mr-3 text-[#a8f2ed]">02 /</span>
            Who is Curio?
          </p>
          <h2 className="mt-5 text-4xl font-black leading-[.9] tracking-[-0.065em] text-[#f0efe7] sm:text-6xl">
            NOT JUST A MASCOT.
            <span className="block text-[#a8f2ed]">A WAY IN.</span>
          </h2>
        </div>

        <div className="border-l-2 border-[#a8f2ed] pl-6 sm:pl-8">
          <p className="text-lg leading-8 text-[#f0efe7] sm:text-2xl sm:leading-9">
            Curio is the recognizable face of CU101: a curious guide who
            investigates interesting things, questions assumptions, and helps
            make complicated ideas easier to understand.
          </p>
          <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
            He's not simply standing beside a presentation. Curio is part of
            the experience—discovering the idea, exploring what makes it
            interesting, and helping the audience follow along.
          </p>
          <p className="mt-4 text-sm leading-7 text-white/50 sm:text-base">
            Across short videos, interactive lessons, and future educational
            material, Curio gives CU101 a recognizable character and a
            consistent voice.
          </p>
        </div>
      </section>

      <section className="border-y border-white/15 bg-[#111513]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <p className="editorial-label">
            <span className="mr-3 text-[#a8f2ed]">03 /</span>
            What we believe
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <h2 className="text-4xl font-black leading-[.9] tracking-[-0.065em] text-[#f0efe7] sm:text-6xl">
              THREE RULES.
              <br />
              <span className="text-[#a8f2ed]">ONE MINDSET.</span>
            </h2>
            <p className="max-w-xl text-base leading-7 text-white/50 sm:text-lg">
              Education doesn't have to drain the wonder out of a subject.
              The explanation should make the world more interesting, not less.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-white/15 md:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.number}
                className="flex min-h-[270px] flex-col border-b border-r border-white/15 p-6 sm:p-8"
              >
                <span className="text-xs font-bold tracking-[0.15em] text-[#a8f2ed]">
                  {item.number}
                </span>
                <h3 className="mt-auto pt-12 text-2xl font-black leading-tight tracking-[-0.045em] text-[#f0efe7] sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/45">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="editorial-label">
              <span className="mr-3 text-[#a8f2ed]">04 /</span>
              The CU101 ecosystem
            </p>
            <h2 className="mt-5 text-4xl font-black leading-[.9] tracking-[-0.065em] text-[#f0efe7] sm:text-6xl">
              ONE CURIOSITY.
              <br />
              <span className="text-[#a8f2ed]">MORE THAN ONE WAY.</span>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-white/50 sm:text-base">
            Different formats serve different moments. A short video can
            spark an idea. A lesson can develop it. A book can give it room
            to breathe.
          </p>
        </div>

        <div className="mt-12 border-l border-t border-white/15">
          {ecosystem.map((item) => (
            <article
              key={item.number}
              className="grid gap-5 border-b border-r border-white/15 p-6 sm:grid-cols-[100px_1fr] sm:items-center sm:p-8"
            >
              <span className="text-4xl font-black tracking-[-0.07em] text-[#a8f2ed]">
                {item.number}
              </span>
              <div>
                <p className="editorial-label">{item.label}</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.045em] text-[#f0efe7] sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45 sm:text-base">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/15 bg-[#0b0e0d]">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:px-14 lg:py-24">
          <div>
            <p className="editorial-label text-[#d8ff70]">
              Still a work in progress
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[.9] tracking-[-0.065em] text-[#f0efe7] sm:text-6xl">
              BUILD. LISTEN.
              <span className="block text-[#a8f2ed]">IMPROVE.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
              CU101 should grow through the questions people ask, the lessons
              they want, and the feedback they share.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:flex-col">
            <Link href="/feedback" className="editorial-button">
              Share feedback <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href="/social"
              className="inline-flex min-h-12 items-center border border-white/20 px-5 py-3 text-xs font-bold text-[#f0efe7] transition hover:border-[#a8f2ed] hover:text-[#a8f2ed]"
            >
              Find the community
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
