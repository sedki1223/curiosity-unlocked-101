
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Lesson } from "@/lib/api";

interface LessonClientProps {
  lesson: Lesson;
}

export default function LessonClient({ lesson }: LessonClientProps) {
  const [currentBlock, setCurrentBlock] = useState(0);

  const blocks = lesson.blocks ?? [];
  const totalBlocks = blocks.length;
  const block = blocks[currentBlock];
  const isLastBlock = currentBlock === totalBlocks - 1;
  const progress =
    totalBlocks > 0
      ? Math.round(((currentBlock + 1) / totalBlocks) * 100)
      : 0;

  function handlePrevious() {
    setCurrentBlock((previous) => Math.max(0, previous - 1));
  }

  function handleNext() {
    setCurrentBlock((previous) =>
      Math.min(totalBlocks - 1, previous + 1),
    );
  }

  if (!block) {
    return (
      <main className="min-h-screen bg-[#101312] px-5 py-24 text-center text-[#f0efe7]">
        <div className="mx-auto max-w-xl">
          <p className="editorial-label justify-center text-[#a8f2ed]">
            Learning / Coming together
          </p>
          <h1 className="mt-5 text-3xl font-black tracking-tight">
            This lesson is still being prepared.
          </h1>
          <p className="mt-4 text-sm leading-7 text-white/55">
            There is no published learning content in this lesson yet. Explore
            another lesson and come back later.
          </p>
          <Link href="/learn" className="editorial-button mt-7">
            Explore lessons <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#101312] text-[#f0efe7]">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#101312]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-5 px-5 py-4 sm:px-8 lg:px-12">
          <Link
            href={`/learn/lesson-overview?lesson=${encodeURIComponent(lesson.slug)}`}
            className="shrink-0 text-xs font-bold text-white/50 transition hover:text-[#a8f2ed]"
          >
            <span aria-hidden="true">←</span> Overview
          </Link>

          <div className="h-7 w-px bg-white/10" />

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-4">
              <p className="truncate text-xs font-bold sm:text-sm">
                {lesson.title}
              </p>
              <span className="shrink-0 font-mono text-xs text-[#a8f2ed]">
                {currentBlock + 1}/{totalBlocks}
              </span>
            </div>

            <div
              className="mt-3 h-1 overflow-hidden bg-white/10"
              role="progressbar"
              aria-label="Lesson progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <div
                className="h-full bg-[#a8f2ed] transition-[width] duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-12">
        <div className="mb-10">
          <p className="editorial-label text-[#a8f2ed]">
            {lesson.topic} / Lesson {String(lesson.order).padStart(2, "0")}
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
            {lesson.title}
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/50 sm:text-base">
            {lesson.summary}
          </p>
        </div>

        <section
          aria-live="polite"
          aria-atomic="true"
          className="border border-white/10 bg-[#151a17]"
        >
          <div className="border-b border-white/10 px-6 py-5 sm:px-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="editorial-label text-[#a8f2ed]">
                Section {String(currentBlock + 1).padStart(2, "0")}
              </span>
              <span className="border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white/45">
                {block.type}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-9 lg:p-12">
            <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
              {block.title}
            </h2>

            <p className="mt-7 max-w-3xl whitespace-pre-line text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
              {block.content}
            </p>

            {block.type === "visual" && (
              <div
                className="mt-9 flex min-h-64 items-center justify-center overflow-hidden border border-[#a8f2ed]/15 bg-[#101312] p-8"
                role="img"
                aria-label="Illustration representing the visual section"
              >
                <div className="relative flex h-48 w-48 items-center justify-center">
                  <div className="absolute h-48 w-48 rounded-full border border-white/10" />
                  <div className="absolute h-36 w-36 rounded-full border border-[#a8f2ed]/25" />
                  <div className="absolute h-28 w-28 rounded-full border-[3px] border-transparent border-r-[#a8f2ed] border-t-white/60" />
                  <div className="h-16 w-16 rounded-full bg-black shadow-[0_0_45px_rgba(168,242,237,0.18)]" />
                </div>
              </div>
            )}

            {block.type === "callout" && (
              <aside className="mt-9 border-l-2 border-[#a8f2ed] bg-[#a8f2ed]/[0.05] p-5 sm:p-6">
                <p className="editorial-label text-[#a8f2ed]">Key idea</p>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Take a moment to connect this idea with what you have learned
                  so far.
                </p>
              </aside>
            )}

            <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold">
                  {isLastBlock ? "You reached the final section." : "Keep going."}
                </p>
                <p className="mt-2 text-xs leading-6 text-white/45">
                  {isLastBlock
                    ? "Check your understanding with the lesson quiz."
                    : `${totalBlocks - currentBlock - 1} ${
                        totalBlocks - currentBlock - 1 === 1
                          ? "section"
                          : "sections"
                      } remaining in this lesson.`}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {currentBlock > 0 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="inline-flex min-h-12 items-center justify-center border border-white/20 px-5 text-xs font-bold transition hover:border-[#a8f2ed] hover:text-[#a8f2ed]"
                  >
                    <span aria-hidden="true">←</span>
                    <span className="ml-2">Previous</span>
                  </button>
                )}

                {!isLastBlock ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="editorial-button"
                  >
                    Continue <span aria-hidden="true">→</span>
                  </button>
                ) : (
                  <Link
                    href={`/learn/quiz?lesson=${encodeURIComponent(lesson.slug)}`}
                    className="editorial-button"
                  >
                    Take the quiz <span aria-hidden="true">↗</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 flex flex-col gap-5 border border-white/10 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-7">
          <div className="relative mx-auto h-24 w-24 shrink-0 sm:mx-0">
            <Image
              src="/curio/curio.png"
              alt="Curio, your CU101 guide"
              fill
              sizes="96px"
              className="object-contain"
            />
          </div>

          <div>
            <p className="editorial-label text-[#a8f2ed]">A thought from Curio</p>
            <p className="mt-3 text-base font-bold leading-7">
              Understanding is not about racing through the material. It is
              about making the idea click.
            </p>
          </div>
        </section>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs">
          <Link
            href={`/learn/lesson-overview?lesson=${encodeURIComponent(lesson.slug)}`}
            className="text-white/45 transition hover:text-[#a8f2ed]"
          >
            ← Back to lesson overview
          </Link>

          <span className="text-white/35">
            {progress}% of sections viewed
          </span>
        </div>
      </main>
    </div>
  );
}
