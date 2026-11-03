
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Show, UserButton } from "@clerk/nextjs";

const navItems = [
  { href: "/explore", label: "Explore", number: "01" },
  { href: "/learn", label: "Learn", number: "02" },
  { href: "/about", label: "Meet Curio", number: "03" },
  { href: "/social", label: "Socials", number: "04" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101312]/95 text-[#f0efe7] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Curiosity Unlocked 101 home"
          className="group flex shrink-0 items-center gap-3"
        >
          <span className="relative flex h-11 w-11 items-center justify-center border border-[#a8f2ed]/50 bg-[#a8f2ed] text-sm font-black tracking-tight text-[#101312] transition group-hover:bg-[#d8ff70]">
            CU
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#d8ff70]" />
          </span>

          <span className="hidden sm:block">
            <span className="block text-sm font-black tracking-tight">
              Curiosity Unlocked 101
            </span>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
              Discover · Understand · Explore
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-11 items-center gap-2 border-b-2 px-3 text-xs font-bold transition ${
                  active
                    ? "border-[#a8f2ed] text-[#a8f2ed]"
                    : "border-transparent text-white/55 hover:border-white/30 hover:text-[#f0efe7]"
                }`}
              >
                <span className="text-[9px] text-white/30">{item.number}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Show when="signed-out">
            <Link
              href="/sign-in"
              className="text-xs font-bold text-white/60 transition hover:text-white"
            >
              Sign in
            </Link>
            <Link href="/sign-up" className="editorial-button min-h-10 px-4 py-2">
              Join CU101 <span aria-hidden="true">↗</span>
            </Link>
          </Show>

          <Show when="signed-in">
            <UserButton />
          </Show>

          <Link
            href="/learn"
            className="text-xs font-bold text-[#a8f2ed] transition hover:text-[#d8ff70]"
          >
            Start learning →
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Show when="signed-in">
            <UserButton />
          </Show>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="flex h-11 w-11 items-center justify-center border border-white/15 text-xl text-[#f0efe7] transition hover:border-[#a8f2ed] hover:text-[#a8f2ed]"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#101312] px-5 py-5 sm:px-8 lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-4 border-b border-white/10 px-2 py-4 text-sm font-bold transition ${
                    active
                      ? "text-[#a8f2ed]"
                      : "text-white/65 hover:text-[#f0efe7]"
                  }`}
                >
                  <span className="text-xs text-white/30">{item.number}</span>
                  <span>{item.label}</span>
                  <span className="ml-auto" aria-hidden="true">↗</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <Show when="signed-out">
              <Link
                href="/sign-in"
                onClick={closeMenu}
                className="border border-white/20 px-4 py-3 text-center text-sm font-bold text-[#f0efe7] transition hover:border-[#a8f2ed]"
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                onClick={closeMenu}
                className="bg-[#a8f2ed] px-4 py-3 text-center text-sm font-black text-[#101312] transition hover:bg-[#d8ff70]"
              >
                Join CU101 ↗
              </Link>
            </Show>

            <Link
              href="/learn"
              onClick={closeMenu}
              className="col-span-2 border border-white/10 px-4 py-3 text-center text-sm font-bold text-[#a8f2ed] transition hover:border-[#a8f2ed]"
            >
              Start learning →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
