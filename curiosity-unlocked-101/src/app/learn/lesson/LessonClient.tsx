"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Lesson } from "@/lib/api";

interface LessonClientProps {
  lesson: Lesson;
}

export default function LessonClient({ lesson }: LessonClientProps) {
  const [currentBlock, setCurrentBlock] = useState(0);

  const totalBlocks = lesson.blocks.length;

  const progress = useMemo(() => {
    if (totalBlocks === 0) {
      return 0;
    }

    return Math.round(((currentBlock + 1) / totalBlocks) * 100);
  }, [currentBlock, totalBlocks]);

  const block = lesson.blocks[currentBlock];

  const isLastBlock = currentBlock === totalBlocks - 1;

  function handleNext() {
    if (!isLastBlock) {
      setCurrentBlock((previous) => previous + 1);
    }
  }

  if (!block) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-3xl font-black text-white">
          This lesson has no content yet.
        </h1>

        <Link
          href="/learn"
          className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950"
        >
          Back to learning
        </Link>
      </main>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-[-12rem] top-[35rem] h-[26rem] w-[26rem] rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      {/* Progress header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-4">
            <Link
              href="/learn"
              className="shrink-0 text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              ← Learn
            </Link>

            <div className="hidden h-5 w-px bg-white/10 sm:block" />

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-4">
                <div className="truncate text-sm font-semibold text-white">
                  {lesson.title}
                </div>

                <div className="shrink-0 text-xs font-semibold text-slate-500">
                  {currentBlock + 1}/{totalBlocks}
                </div>
              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-indigo-400 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-24 pt-10 sm:px-8 lg:px-10">
        {/* Breadcrumb */}
        <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link
            href="/learn"
            className="transition hover:text-white"
          >
            Learn
          </Link>

          <span>/</span>

          <span>{lesson.topic}</span>

          <span>/</span>

          <span className="text-slate-300">{lesson.title}</span>
        </div>

        {/* Lesson intro */}
        <section className="mb-12">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
              Lesson {String(lesson.order).padStart(2, "0")}
            </span>

            <span className="text-sm text-slate-500">
              {lesson.durationMinutes} min · {lesson.difficulty}
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            {lesson.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            {lesson.summary}
          </p>
        </section>

        {/* Current learning block */}
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(99,102,241,0.12),transparent_35%)]" />

          <div className="relative p-7 sm:p-10 lg:p-12">
            {/* Block type */}
            <div className="mb-8 flex items-center justify-between gap-4">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                {block.type}
              </span>

              <span className="text-xs font-semibold text-slate-600">
                Section {currentBlock + 1}
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">
              {block.title}
            </h2>

            <div className="mt-7 max-w-3xl">
              <p className="text-lg leading-9 text-slate-300">
                {block.content}
              </p>
            </div>

            {/* Visual treatment */}
            {block.type === "visual" && (
              <div className="mt-10 flex min-h-[220px] items-center justify-center overflow-hidden rounded-3xl border border-indigo-400/10 bg-gradient-to-br from-indigo-500/[0.08] via-slate-950/40 to-cyan-500/[0.05]">
                <div className="relative h-40 w-40">
                  <div className="absolute inset-0 rounded-full border border-indigo-300/20" />
                  <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-[0_0_60px_rgba(99,102,241,0.35)]" />
                  <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-[4px] border-transparent border-r-cyan-300/60 border-t-indigo-300/70" />
                </div>
              </div>
            )}

            {block.type === "callout" && (
              <div className="mt-10 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.05] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  Key idea
                </div>

                <p className="mt-3 text-base leading-7 text-slate-300">
                  Keep this idea in mind as you continue through the lesson.
                </p>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-white">
                  {isLastBlock
                    ? "You reached the end of this lesson."
                    : "Ready for the next piece?"}
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  {isLastBlock
                    ? "Check what you remember with a quick quiz."
                    : "One idea at a time. That’s the CU101 way."}
                </div>
              </div>

              {!isLastBlock ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Continue
                  <span className="ml-2">→</span>
                </button>
              ) : (
                <Link
                  href={`/learn/quiz?lesson=${lesson.slug}`}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Take the quiz
                  <span className="ml-2">→</span>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Curio */}
        <section className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/50 p-6 sm:p-8">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:mx-0">
              <Image
                src="/curio/curio.png"
                alt="Curio"
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Curio
              </div>

              <p className="mt-2 text-lg font-semibold leading-8 text-white">
                “Don&apos;t rush it. Once the picture clicks, the science
                gets much easier.”
              </p>
            </div>
          </div>
        </section>

        {/* Back */}
        <div className="mt-10 text-center">
          <Link
            href={`/learn/lesson-overview?lesson=${lesson.slug}`}
            className="text-sm font-semibold text-slate-500 transition hover:text-white"
          >
            ← Back to lesson overview
          </Link>
        </div>
      </main>
    </div>
  );
}