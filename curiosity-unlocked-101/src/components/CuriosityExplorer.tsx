
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type AvailableQuestion = {
  q: string;
  tag: string;
  description: string;
  slug: string;
  live: true;
};

type UpcomingQuestion = {
  q: string;
  tag: string;
  description: string;
  live: false;
};

type Question = AvailableQuestion | UpcomingQuestion;

const questions: Question[] = [
  {
    q: "What is a black hole?",
    tag: "Space",
    description:
      "Start with the basics and discover what a black hole really is.",
    slug: "what-is-a-black-hole",
    live: true,
  },
  {
    q: "Why does gravity become extreme?",
    tag: "Space",
    description:
      "Explore what happens when an enormous amount of mass occupies a tiny region.",
    slug: "gravity-turned-extreme",
    live: true,
  },
  {
    q: "What happens inside a black hole?",
    tag: "Space",
    description:
      "Explore one of the most mysterious regions in the universe.",
    slug: "what-happens-inside",
    live: true,
  },
  {
    q: "What is the event horizon?",
    tag: "Space",
    description:
      "Understand the boundary beyond which escape becomes impossible.",
    slug: "the-event-horizon",
    live: true,
  },
  {
    q: "Why does metal feel colder than wood?",
    tag: "Everyday science",
    description:
      "A question about temperature, touch, and how heat moves.",
    live: false,
  },
  {
    q: "Why does soap remove grease?",
    tag: "Everyday science",
    description:
      "Discover how chemistry helps water wash away oily substances.",
    live: false,
  },
  {
    q: "Why does a thermostat click?",
    tag: "How things work",
    description:
      "Explore the mechanisms that help regulate temperature.",
    live: false,
  },
  {
    q: "How does an elevator detect a doorway obstruction?",
    tag: "How things work",
    description:
      "Discover the sensors and safety systems behind elevator doors.",
    live: false,
  },
  {
    q: "How do birds sense Earth's magnetic field?",
    tag: "Animals",
    description:
      "Explore how some animals navigate using Earth's magnetic field.",
    live: false,
  },
  {
    q: "Why do stars shine?",
    tag: "Space",
    description:
      "Explore the processes that make stars release light and energy.",
    live: false,
  },
  {
    q: "How does a barcode scanner read stripes?",
    tag: "How things work",
    description:
      "Follow the path from reflected light to a readable code.",
    live: false,
  },
  {
    q: "Why does a bus lower itself at a stop?",
    tag: "How things work",
    description:
      "Explore the engineering behind accessible public transport.",
    live: false,
  },
];

const filters = [
  "All",
  "Space",
  "Everyday science",
  "How things work",
  "Animals",
] as const;

export default function CuriosityExplorer() {
  const [filter, setFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return questions.filter((item) => {
      const matchesFilter = filter === "All" || item.tag === filter;

      const matchesQuery =
        !normalized ||
        item.q.toLowerCase().includes(normalized) ||
        item.tag.toLowerCase().includes(normalized) ||
        item.description.toLowerCase().includes(normalized);

      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  const availableCount = visible.filter((item) => item.live).length;

  return (
    <div>
      <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Curiosity deck
            </p>

            <h3 className="mt-2 text-lg font-semibold text-white">
              What do you want to understand?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Search a question or choose a subject to explore.
            </p>
          </div>

          <div className="relative w-full lg:max-w-sm">
            <label htmlFor="curiosity-search" className="sr-only">
              Search curiosity questions
            </label>

            <input
              id="curiosity-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try gravity, stars, or how..."
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/40 focus:bg-black/30"
            />
          </div>
        </div>
      </div>

      <div
        className="mt-5 flex gap-2 overflow-x-auto pb-2"
        role="group"
        aria-label="Filter questions by subject"
      >
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
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

      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="text-xs text-slate-500" aria-live="polite">
          {visible.length}{" "}
          {visible.length === 1 ? "question" : "questions"}
          {" · "}
          {availableCount} available to explore
        </p>

        {(query || filter !== "All") && (
          <button
            type="button"
            onClick={() => {
              setFilter("All");
              setQuery("");
            }}
            className="text-xs font-semibold text-cyan-200 transition hover:text-white"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => {
          const content = (
            <div
              className={`group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border bg-slate-950/65 p-5 transition duration-300 ${
                item.live
                  ? "border-white/[0.08] hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-slate-950/90"
                  : "border-white/[0.06] opacity-75"
              }`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/[0.04] blur-2xl transition duration-500 group-hover:scale-150" />

              <div className="relative flex items-center justify-between gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-500">
                  {item.tag}
                </span>

                <span
                  className={`rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] ${
                    item.live
                      ? "border-cyan-300/20 bg-cyan-300/[0.06] text-cyan-200"
                      : "border-white/10 bg-white/[0.03] text-slate-500"
                  }`}
                >
                  {item.live ? "Available" : "Coming later"}
                </span>
              </div>

              <h4 className="relative mt-7 text-lg font-semibold leading-7 tracking-[-0.02em] text-white">
                {item.q}
              </h4>

              <p className="relative mt-3 text-sm leading-6 text-slate-500">
                {item.description}
              </p>

              <div
                className={`relative mt-auto pt-7 text-sm font-semibold ${
                  item.live
                    ? "text-cyan-200 transition group-hover:text-white"
                    : "text-slate-600"
                }`}
              >
                {item.live ? (
                  <>
                    Start exploring{" "}
                    <span aria-hidden="true">↗</span>
                  </>
                ) : (
                  "This learning path is not available yet"
                )}
              </div>
            </div>
          );

          if (item.live) {
            return (
              <Link
                key={item.slug}
                href={`/learn/lesson-overview?lesson=${encodeURIComponent(item.slug)}`}
                className="block h-full rounded-[1.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101312]"
                aria-label={`Explore ${item.q}`}
              >
                {content}
              </Link>
            );
          }

          return (
            <div key={item.q} className="h-full">
              {content}
            </div>
          );
        })}
      </div>

      {visible.length === 0 && (
        <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-10 text-center">
          <p className="text-lg font-semibold text-white">
            No matching questions yet.
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Try another search or clear your filters to explore the full deck.
          </p>

          <button
            type="button"
            onClick={() => {
              setFilter("All");
              setQuery("");
            }}
            className="mt-5 text-sm font-semibold text-cyan-200 transition hover:text-white"
          >
            Reset the deck →
          </button>
        </div>
      )}
    </div>
  );
}
