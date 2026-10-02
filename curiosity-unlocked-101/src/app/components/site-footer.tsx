import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-300/20 bg-indigo-400/10 text-sm font-black text-indigo-200">
                CU
              </div>

              <span className="text-sm font-black text-white">
                Curiosity Unlocked 101
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Simple questions. Real science. Better mental pictures.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Learn
              </p>

              <div className="mt-4 space-y-3">
                <Link
                  href="/learn"
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  Learn
                </Link>

                <Link
                  href="/learn/topic"
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  Topics
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Explore
              </p>

              <div className="mt-4 space-y-3">
                <Link
                  href="/explore"
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  Explore
                </Link>

                <Link
                  href="/"
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  Home
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                CU101
              </p>

              <div className="mt-4 space-y-3">
                <Link
                  href="/learn"
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  Start learning
                </Link>

                <Link
                  href="/explore"
                  className="block text-sm text-slate-400 transition hover:text-white"
                >
                  Get curious
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Curiosity Unlocked 101
          </p>

          <p>Built around curiosity.</p>
        </div>
      </div>
    </footer>
  );
}