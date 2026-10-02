import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#04050a]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.04] text-[11px] font-black text-white">
                CU
              </div>
              <span className="text-sm font-black tracking-tight text-white">
                Curiosity Unlocked 101
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
              Simple questions. Real explanations. A place to keep following the question after the short answer is over.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">Explore</p>
              <div className="mt-4 space-y-3">
                <Link href="/explore" className="footer-link">Question deck</Link>
                <Link href="/about" className="footer-link">Meet Curio</Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">Learn</p>
              <div className="mt-4 space-y-3">
                <Link href="/learn" className="footer-link">Learning hub</Link>
                <Link href="/learn/topic" className="footer-link">Black holes</Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">CU101</p>
              <div className="mt-4 space-y-3">
                <Link href="/social" className="footer-link">Socials</Link>
                <Link href="/feedback" className="footer-link">Feedback</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.07] pt-6 text-xs text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Curiosity Unlocked 101</p>
          <p>Keep asking better questions.</p>
        </div>
      </div>
    </footer>
  );
}
