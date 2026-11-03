
import Link from "next/link";

const footerGroups = [
  {
    title: "DISCOVER",
    links: [
      { href: "/explore", label: "Explore questions" },
      { href: "/learn", label: "Learning library" },
      { href: "/learn/topic", label: "Black holes" },
    ],
  },
  {
    title: "THE PROJECT",
    links: [
      { href: "/about", label: "Meet Curio" },
      { href: "/social", label: "Find us online" },
      { href: "/feedback", label: "Give feedback" },
    ],
  },
  {
    title: "YOUR SPACE",
    links: [
      { href: "/sign-in", label: "Sign in" },
      { href: "/sign-up", label: "Join CU101" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/15 bg-[#0b0e0d]">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <div className="grid gap-14 py-16 md:grid-cols-[1.2fr_.8fr] lg:gap-20 lg:py-20">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Curiosity Unlocked 101 home"
            >
              <span className="flex h-10 w-10 items-center justify-center bg-[#a8f2ed] text-sm font-black tracking-[-0.08em] text-[#101312]">
                CU
              </span>
              <span className="text-xs font-black tracking-[0.08em] text-[#f0efe7]">
                CURIOSITY UNLOCKED 101
              </span>
            </Link>

            <h2 className="mt-10 max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.07em] text-[#f0efe7] sm:text-6xl">
              NEVER LOSE
              <span className="block text-[#a8f2ed]">THE QUESTION.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
              Simple questions. Real explanations. Keep following the idea
              until the world makes a little more sense.
            </p>

            <Link
              href="/explore"
              className="editorial-button mt-7"
            >
              Find your next question <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="editorial-label">{group.title}</h3>
                <nav
                  aria-label={group.title.toLowerCase()}
                  className="mt-5 space-y-4"
                >
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="footer-link"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 py-6 text-[10px] font-medium uppercase tracking-[0.12em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Curiosity Unlocked 101</p>
          <p>Made for minds that keep asking why.</p>
          <Link
            href="/"
            className="transition-colors hover:text-[#a8f2ed]"
          >
            Back to the beginning ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
