
import Image from "next/image";
import Link from "next/link";

const platforms = [
  {
    name: "Instagram",
    handle: "@curiosityunlocked101",
    description:
      "Short-form curiosity, visual discoveries, and Curio exploring something new.",
    format: "Short-form",
    symbol: "◎",
  },
  {
    name: "YouTube",
    handle: "Curiosity Unlocked 101",
    description:
      "Follow a question beyond the feed and explore the growing CU101 video library.",
    format: "Video",
    symbol: "▶",
  },
  {
    name: "TikTok",
    handle: "@curiosityunlocked101",
    description:
      "Fast discoveries, strange facts, and those moments that make you ask, wait—what?",
    format: "Short-form",
    symbol: "♪",
  },
  {
    name: "Facebook",
    handle: "Curiosity Unlocked 101",
    description:
      "Another place to discover Curio and follow the CU101 project.",
    format: "Community",
    symbol: "f",
  },
];

const journey = [
  {
    number: "01",
    title: "Discover something.",
    text: "A short video introduces an idea you might never have thought to question.",
  },
  {
    number: "02",
    title: "Follow the idea.",
    text: "Explore the learning platform and give that curiosity room to develop.",
  },
  {
    number: "03",
    title: "Help shape what comes next.",
    text: "Share feedback about the content, lessons, and experience.",
  },
];

export default function SocialPage() {
  return (
    <main className="overflow-hidden">
      <section className="border-b border-white/15">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-14 lg:py-24">
          <div>
            <p className="editorial-label">
              <span className="mr-3 text-[#a8f2ed]">01 /</span>
              The CU101 community
            </p>

            <h1 className="mt-8 text-[clamp(3.5rem,7.5vw,7.5rem)] font-black leading-[.8] tracking-[-0.085em] text-[#f0efe7]">
              CURIOSITY
              <br />
              DOESN'T
              <br />
              <span className="text-[#a8f2ed]">STOP HERE.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              CU101 connects short discoveries with deeper learning. Follow
              the project, explore a subject, and help shape what gets built
              next.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/learn" className="editorial-button">
                Go deeper <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/explore"
                className="inline-flex min-h-12 items-center border border-white/20 px-5 py-3 text-xs font-bold text-[#f0efe7] transition hover:border-[#a8f2ed] hover:text-[#a8f2ed]"
              >
                Explore CU101
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden border border-white/15 bg-[#151a17] sm:min-h-[540px]">
            <div className="absolute left-1/2 top-[42%] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a8f2ed]/20" />
            <div className="absolute left-1/2 top-[42%] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a8f2ed]/15" />

            <div className="absolute left-5 top-5 z-10 sm:left-7 sm:top-7">
              <p className="editorial-label text-[#a8f2ed]">Follow the questions</p>
              <p className="mt-2 text-xs text-white/40">
                One idea can travel further.
              </p>
            </div>

            <Image
              src="/curio/curio.png"
              alt="Curio, the guide to the CU101 universe"
              width={600}
              height={800}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="relative z-10 mt-6 h-auto max-h-[470px] w-auto max-w-[92%] object-contain sm:max-h-[540px]"
            />

            <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-[#101312]/90 p-5 backdrop-blur-sm sm:p-7">
              <p className="editorial-label text-[#d8ff70]">The CU101 idea</p>
              <p className="mt-2 text-xl font-black tracking-[-0.04em] text-[#f0efe7] sm:text-2xl">
                A spark is good. Following it is better.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="editorial-label">
              <span className="mr-3 text-[#a8f2ed]">02 /</span>
              Find CU101
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.065em] text-[#f0efe7] sm:text-6xl">
              DIFFERENT PLATFORMS.
              <br />
              <span className="text-[#a8f2ed]">SAME CURIOSITY.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/45">
            Each platform offers a different way to encounter the project.
          </p>
        </div>

        <div className="mt-10 grid border-l border-t border-white/15 sm:grid-cols-2">
          {platforms.map((platform, index) => (
            <article
              key={platform.name}
              className="group border-b border-r border-white/15 p-6 transition-colors hover:bg-white/[0.035] sm:p-8 lg:p-10"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="text-xs font-bold tracking-[0.15em] text-[#a8f2ed]">
                  0{index + 1} / {platform.format.toUpperCase()}
                </span>
                <span className="text-3xl text-white/50 transition-colors group-hover:text-[#a8f2ed]">
                  {platform.symbol}
                </span>
              </div>

              <h3 className="mt-10 text-3xl font-black tracking-[-0.05em] text-[#f0efe7] sm:text-4xl">
                {platform.name}
              </h3>
              <p className="mt-2 text-sm font-bold text-[#a8f2ed]">
                {platform.handle}
              </p>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
                {platform.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-5 text-xs leading-5 text-white/35">
          Platform names and handles are shown for reference. Add each
          account's verified URL when you're ready to make these cards
          clickable.
        </p>
      </section>

      <section className="border-y border-white/15 bg-[#111513]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="editorial-label">
                <span className="mr-3 text-[#a8f2ed]">03 /</span>
                How it connects
              </p>
              <h2 className="mt-5 text-4xl font-black leading-[.9] tracking-[-0.065em] text-[#f0efe7] sm:text-6xl">
                FROM
                <br />
                <span className="text-[#a8f2ed]">SCROLLING</span>
                <br />
                TO KNOWING.
              </h2>
            </div>

            <div className="border-l border-t border-white/15">
              {journey.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-4 border-b border-r border-white/15 p-5 sm:grid-cols-[50px_1fr] sm:gap-6 sm:p-7"
                >
                  <span className="text-xs font-bold text-[#a8f2ed]">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-black tracking-[-0.04em] text-[#f0efe7] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/45">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="grid gap-8 border border-white/15 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="editorial-label text-[#d8ff70]">
              Help shape the next iteration
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-[.95] tracking-[-0.06em] text-[#f0efe7] sm:text-5xl">
              WHAT SHOULD CU101 EXPLORE NEXT?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
              Share what you want to learn, what could work better, or what
              you'd like to see from Curio next.
            </p>
          </div>

          <Link href="/feedback" className="editorial-button">
            Share your feedback <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
