"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Show, UserButton } from "@clerk/nextjs";

const navItems = [
  { href: "/explore", label: "Explore" },
  { href: "/learn", label: "Learn" },
  { href: "/about", label: "Curio" },
  { href: "/social", label: "Socials" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-white/[0.07]">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <div className="brand-mark relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[14px] border border-white/10 bg-white/[0.045] text-[11px] font-black tracking-[-0.04em] text-white shadow-lg shadow-black/20">
            <span className="relative z-10">CU</span>
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(103,232,249,0.18),transparent_42%),radial-gradient(circle_at_85%_80%,rgba(167,139,250,0.15),transparent_45%)] opacity-80 transition duration-300 group-hover:opacity-100" />
          </div>

          <div className="hidden sm:block">
            <div className="text-sm font-black tracking-[-0.025em] text-white">
              Curiosity Unlocked 101
            </div>
            <div className="text-[10px] font-medium uppercase tracking-[0.17em] text-slate-600">
              Discover · Understand · Explore
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.025] p-1 md:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  active
                    ? "bg-white/[0.08] text-white shadow-sm"
                    : "text-slate-500 hover:bg-white/[0.04] hover:text-slate-200"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Show when="signed-out">
            <Link
              href="/sign-in"
              className="rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-500 transition hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="header-join"
            >
              Join CU101 <span>↗</span>
            </Link>
          </Show>

          <Show when="signed-in">
            <UserButton />
          </Show>

          <Link href="/learn" className="header-learn">
            Start learning <span>→</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Show when="signed-in">
            <UserButton />
          </Show>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
          >
            <span className="text-base">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/[0.07] bg-slate-950/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-white/[0.06] text-white"
                      : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/[0.07] pt-4">
            <Show when="signed-out">
              <Link
                href="/sign-in"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm font-semibold text-slate-300"
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-slate-950"
              >
                Join CU101
              </Link>
            </Show>
          </div>
        </div>
      )}
    </header>
  );
}
