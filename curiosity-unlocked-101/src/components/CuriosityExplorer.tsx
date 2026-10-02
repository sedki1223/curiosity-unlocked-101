"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const questions = [
  { q: "Why do black holes look black?", tag: "Space", live: true },
  { q: "What actually is an event horizon?", tag: "Space", live: true },
  { q: "What happens inside a black hole?", tag: "Space", live: true },
  { q: "Why is gravity so strong around a black hole?", tag: "Space", live: true },
  { q: "Why does a thermostat click?", tag: "Everyday science", live: false },
  { q: "Why does a bus lower itself at a stop?", tag: "How things work", live: false },
  { q: "How does an elevator know something is in the doorway?", tag: "How things work", live: false },
  { q: "Why does metal feel colder than wood?", tag: "Everyday science", live: false },
  { q: "How do birds sense Earth’s magnetic field?", tag: "Animals", live: false },
  { q: "Why does soap remove grease?", tag: "Everyday science", live: false },
  { q: "Why do stars shine?", tag: "Space", live: false },
  { q: "How does a barcode scanner read stripes?", tag: "How things work", live: false },
];

const filters = ["All", "Space", "Everyday science", "How things work", "Animals"];

export default function CuriosityExplorer() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return questions.filter((item) => {
      const matchesFilter = filter === "All" || item.tag === filter;
      const matchesQuery =
        !normalized ||
        item.q.toLowerCase().includes(normalized) ||
        item.tag.toLowerCase().includes(normalized);

      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-5 rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Curiosity deck
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Search the questions that are already pulling at you.
          </p>
        </div>

        <div className="relative w-full lg:max-w-sm">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “gravity”, “how”, “why”..."
            aria-label="Search curiosity questions"
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-300/30 focus:bg-black/30"
          />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600">
            ⌕
          </span>
        </div>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
              filter === item
                ? "border-cyan-300/25 bg-cyan-300/10 text-cyan-100"
                : "border-white/10 bg-white/[0.025] text-slate-500 hover:border-white/20 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, index) => {
          const card = (
            <div className="question-card group relative h-full overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-slate-950/65 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-slate-950/90">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/[0.04] blur-2xl transition duration-500 group-hover:scale-150" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-500">
                    {item.tag}
                  </span>

                  <span
                    className={`rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] ${
                      item.live
                        ? "border-emerald-300/15 bg-emerald-300/5 text-emerald-200"
                        : "border-white/10 bg-white/[0.03] text-slate-600"
                    }`}
                  >
                    {item.live ? "Explore" : "Soon"}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-semibold leading-7 tracking-[-0.02em] text-white">
                  {item.q}
                </h3>

                <div className="mt-auto pt-7 text-sm font-semibold text-slate-400 transition group-hover:text-cyan-200">
                  {item.live ? "Follow the rabbit hole →" : "More like this is coming →"}
                </div>
              </div>
            </div>
          );

          return item.live ? (
            <Link key={`${item.q}-${index}`} href="/learn/topic" className="block h-full">
              {card}
            </Link>
          ) : (
            <div key={`${item.q}-${index}`} className="h-full">
              {card}
            </div>
          );
        })}
      </div>

      {visible.length === 0 && (
        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-10 text-center">
          <p className="text-sm text-slate-500">Nothing here yet.</p>
          <button
            type="button"
            onClick={() => {
              setFilter("All");
              setQuery("");
            }}
            className="mt-3 text-sm font-semibold text-cyan-200 transition hover:text-white"
          >
            Reset the deck →
          </button>
        </div>
      )}
    </div>
  );
}
