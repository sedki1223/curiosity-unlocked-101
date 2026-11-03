
import Image from "next/image";
import Link from "next/link";
import FeedbackForm from "@/components/FeedbackForm";

export default function FeedbackPage() {
  return (
    <main className="overflow-hidden">
      <section className="border-b border-white/15">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1fr_.65fr] lg:items-center lg:px-14 lg:py-24">
          <div>
            <p className="editorial-label">
              <span className="mr-3 text-[#a8f2ed]">01 /</span>
              Help shape CU101
            </p>

            <h1 className="mt-8 text-[clamp(3.5rem,8vw,7.5rem)] font-black leading-[.8] tracking-[-0.085em] text-[#f0efe7]">
              TELL US
              <br />
              WHAT
              <br />
              <span className="text-[#a8f2ed]">YOU THINK.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              What works? What's confusing? What would you love to learn
              next? Honest feedback helps turn CU101 into a more useful
              learning experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/explore" className="editorial-button">
                Explore first <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-12 items-center border border-white/20 px-5 py-3 text-xs font-bold text-[#f0efe7] transition hover:border-[#a8f2ed] hover:text-[#a8f2ed]"
              >
                About CU101
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 border-y border-white/15 py-5">
              <div>
                <p className="text-sm font-black text-[#f0efe7]">HONEST</p>
                <p className="mt-2 text-[10px] leading-4 text-white/40">
                  Say what you mean.
                </p>
              </div>
              <div className="border-l border-white/15 pl-4">
                <p className="text-sm font-black text-[#f0efe7]">SPECIFIC</p>
                <p className="mt-2 text-[10px] leading-4 text-white/40">
                  Tell us what happened.
                </p>
              </div>
              <div className="border-l border-white/15 pl-4">
                <p className="text-sm font-black text-[#f0efe7]">USEFUL</p>
                <p className="mt-2 text-[10px] leading-4 text-white/40">
                  Help guide the next step.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden border border-white/15 bg-[#151a17] sm:min-h-[420px]">
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a8f2ed]/20" />
            <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a8f2ed]/15" />

            <Image
              src="/curio/curio.png"
              alt="Curio is listening to your feedback"
              width={440}
              height={560}
              priority
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="relative z-10 h-auto max-h-[360px] w-auto max-w-[88%] object-contain sm:max-h-[420px]"
            />

            <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-[#101312]/90 p-5 backdrop-blur-sm">
              <p className="editorial-label text-[#d8ff70]">
                A note from Curio
              </p>
              <p className="mt-2 text-lg font-black tracking-[-0.035em] text-[#f0efe7]">
                Good ideas get better when people speak up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-8">
          <p className="editorial-label">
            <span className="mr-3 text-[#a8f2ed]">02 /</span>
            Your feedback
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] text-[#f0efe7] sm:text-5xl">
            MAKE YOURSELF HEARD.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            Whether it's a content idea, a confusing interaction, a bug, or
            something you genuinely enjoyed, this is the place to tell us.
          </p>
        </div>

        <div className="border border-white/15 p-5 sm:p-8 lg:p-10">
          <FeedbackForm />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
          <p className="max-w-lg text-xs leading-6 text-white/35">
            Thanks for helping the project improve. Feedback is most useful
            when it tells us what you experienced and what you'd change.
          </p>
          <Link
            href="/"
            className="text-xs font-bold text-[#a8f2ed] transition hover:text-[#d8ff70]"
          >
            Back to CU101 ↑
          </Link>
        </div>
      </section>
    </main>
  );
}
