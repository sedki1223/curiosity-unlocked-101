"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const questions = [
  {
    question: "What is the event horizon?",
    options: [
      "A solid surface surrounding the black hole.",
      "A boundary in spacetime beyond which escape to the outside universe is impossible.",
      "The hottest part of the black hole.",
    ],
    correct: 1,
    explanation:
      "The event horizon is a boundary in spacetime. It is not a physical wall or surface.",
  },
  {
    question: "Why can tidal forces become dangerous near a small black hole?",
    options: [
      "Because gravity can differ enormously across the size of an object.",
      "Because black holes create a second type of gravity.",
      "Because light stops existing near the black hole.",
    ],
    correct: 0,
    explanation:
      "The gravitational difference between nearby parts of your body can become enormous, producing extreme tidal forces.",
  },
  {
    question: "What is still unknown at the deepest level?",
    options: [
      "Whether black holes have gravity.",
      "Whether an event horizon exists.",
      "How physics should fully describe the interior where quantum gravity becomes important.",
    ],
    correct: 2,
    explanation:
      "General relativity describes black holes extremely well on large scales, but we still lack a complete theory combining gravity and quantum mechanics.",
  },
];

export default function LessonFourCheckpointPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);

  const question = questions[current];

  useEffect(() => {
    const saved = localStorage.getItem("cu101-progress");

    if (saved) {
      try {
        const parsed = JSON.parse(saved);

        if (parsed?.blackHoles?.lesson4Completed) {
          setComplete(true);
          setScore(questions.length);
        }
      } catch {
        // Ignore invalid local progress.
      }
    }
  }, []);

  function handleCheck() {
    if (selected === null || checked) {
      return;
    }

    setChecked(true);

    if (selected === question.correct) {
      setScore((value) => value + 1);
    }
  }

  function handleNext() {
    if (current < questions.length - 1) {
      setCurrent((value) => value + 1);
      setSelected(null);
      setChecked(false);
      return;
    }

    const finalScore =
      score + (selected === question.correct ? 1 : 0);

    if (finalScore === questions.length) {
      const existing = localStorage.getItem("cu101-progress");

      let progress = {
        blackHoles: {
          lesson4Completed: true,
        },
      };

      if (existing) {
        try {
          const parsed = JSON.parse(existing);

          progress = {
            ...parsed,
            blackHoles: {
              ...(parsed?.blackHoles ?? {}),
              lesson4Completed: true,
            },
          };
        } catch {
          // Start fresh if saved progress is invalid.
        }
      }

      localStorage.setItem(
        "cu101-progress",
        JSON.stringify(progress)
      );

      setScore(questions.length);
      setComplete(true);
    } else {
      setCurrent(0);
      setSelected(null);
      setChecked(false);
      setScore(0);
    }
  }

  function handleReset() {
    setCurrent(0);
    setSelected(null);
    setChecked(false);
    setScore(0);
    setComplete(false);

    localStorage.removeItem("cu101-progress");
  }

  if (complete) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute right-[-12rem] top-[38rem] h-[30rem] w-[30rem] rounded-full bg-cyan-400/5 blur-3xl" />
        </div>

        <main className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-20 sm:px-8">
          <section className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 text-center shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 text-2xl">
                ✓
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Checkpoint complete
              </p>

              <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
                You made it to the edge.
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                You finished the black-hole learning path and demonstrated the
                core ideas behind it.
              </p>

              <div className="mx-auto mt-8 max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Result
                </p>

                <p className="mt-3 text-3xl font-black text-white">
                  {score} / {questions.length}
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Black Holes · Topic complete
                </p>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/learn/topic"
                  className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Back to topic
                </Link>

                <Link
                  href="/explore"
                  className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Explore more →
                </Link>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="mt-6 text-sm text-slate-500 transition hover:text-slate-300"
              >
                Reset this checkpoint
              </button>
            </div>
          </section>
        </main>
      </div>
    );
  }

  const progress = ((current + 1) / questions.length) * 100;
  const isCorrect = selected === question.correct;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-[-12rem] top-[38rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      <main className="mx-auto max-w-5xl px-6 pb-24 pt-10 sm:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/learn" className="transition hover:text-white">
            Learn
          </Link>

          <span className="text-slate-600">/</span>

          <Link
            href="/learn/topic"
            className="transition hover:text-white"
          >
            Black Holes
          </Link>

          <span className="text-slate-600">/</span>

          <span className="text-slate-500">Checkpoint</span>
        </div>

        {/* Header */}
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.16),transparent_32%)]" />

          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
                  Final checkpoint
                </p>

                <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Show me what clicked.
                </h1>
              </div>

              <div className="text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Question
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  {current + 1} / {questions.length}
                </p>
              </div>
            </div>

            <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-indigo-400 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </section>

        {/* Question */}
        <section className="mt-10 rounded-[2rem] border border-white/10 bg-slate-900/60 p-7 shadow-xl shadow-black/10 backdrop-blur-xl sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Question {current + 1}
          </p>

          <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
            {question.question}
          </h2>

          <div className="mt-8 space-y-3">
            {question.options.map((option, index) => {
              const selectedOption = selected === index;

              let optionClass =
                "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]";

              if (selectedOption && !checked) {
                optionClass =
                  "border-indigo-300/30 bg-indigo-400/[0.08]";
              }

              if (checked && index === question.correct) {
                optionClass =
                  "border-emerald-300/20 bg-emerald-400/[0.05]";
              }

              if (
                checked &&
                selectedOption &&
                index !== question.correct
              ) {
                optionClass =
                  "border-red-300/20 bg-red-400/[0.04]";
              }

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    if (!checked) {
                      setSelected(index);
                    }
                  }}
                  className={`w-full rounded-2xl border p-5 text-left transition ${optionClass}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-black text-slate-300">
                      {String.fromCharCode(65 + index)}
                    </div>

                    <p className="leading-7 text-slate-300">
                      {option}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {checked && (
            <div
              className={`mt-6 rounded-2xl border p-5 ${
                isCorrect
                  ? "border-emerald-300/20 bg-emerald-400/[0.04]"
                  : "border-red-300/20 bg-red-400/[0.04]"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                  isCorrect ? "text-emerald-300" : "text-red-300"
                }`}
              >
                {isCorrect ? "Correct" : "Not quite"}
              </p>

              <p className="mt-3 leading-7 text-slate-300">
                {question.explanation}
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/learn/lesson/4"
              className="text-sm font-semibold text-slate-500 transition hover:text-white"
            >
              ← Back to lesson
            </Link>

            {!checked ? (
              <button
                type="button"
                onClick={handleCheck}
                disabled={selected === null}
                className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Check answer
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                {current === questions.length - 1
                  ? "Finish checkpoint"
                  : "Next question →"}
              </button>
            )}
          </div>
        </section>

        {/* Footer note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            No pressure. The goal is understanding, not memorization.
          </p>
        </div>
      </main>
    </div>
  );
}