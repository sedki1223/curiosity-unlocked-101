"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { useMemo, useState } from "react";
import {
  checkQuizAnswer,
  completeLesson,
  type Lesson,
  type QuizAnswerResult,
  type QuizQuestion,
} from "@/lib/api";

interface QuizClientProps {
  lesson: Lesson;
}

export default function QuizClient({ lesson }: QuizClientProps) {
  const { isLoaded, isSignedIn, getToken } = useAuth();

  const quiz = lesson.quiz;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerResult, setAnswerResult] =
    useState<QuizAnswerResult | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [checking, setChecking] = useState(false);
  const [savingProgress, setSavingProgress] = useState(false);
  const [error, setError] = useState("");
  const [progressError, setProgressError] = useState("");

  if (!quiz || quiz.questions.length === 0) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-3xl font-black text-white">
          This quiz is not available yet.
        </h1>

        <Link
          href={`/learn/lesson?lesson=${lesson.slug}`}
          className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950"
        >
          Back to lesson
        </Link>
      </main>
    );
  }

  const questions: QuizQuestion[] = quiz.questions;
  const question: QuizQuestion = questions[currentQuestion];

  const progress = useMemo(
    () =>
      Math.round(
        ((currentQuestion + 1) / questions.length) * 100,
      ),
    [currentQuestion, questions.length],
  );

  function getOptionClasses(option: string): string {
    if (!answerResult) {
      return "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.06]";
    }

    if (option === answerResult.correctAnswer) {
      return "border-emerald-400/20 bg-emerald-400/10 text-emerald-200";
    }

    if (option === selectedAnswer) {
      return "border-red-400/20 bg-red-400/10 text-red-200";
    }

    return "border-white/5 bg-white/[0.02] text-slate-500";
  }

  async function handleAnswer(answer: string) {
    if (selectedAnswer !== null || checking) {
      return;
    }

    setSelectedAnswer(answer);
    setChecking(true);
    setError("");

    try {
      const result = await checkQuizAnswer(
        lesson.slug,
        question.id,
        answer,
      );

      setAnswerResult(result);

      if (result.correct) {
        setScore((previous) => previous + 1);
      }
    } catch (checkError) {
      setSelectedAnswer(null);

      setError(
        checkError instanceof Error
          ? checkError.message
          : "Something went wrong while checking your answer.",
      );
    } finally {
      setChecking(false);
    }
  }

  async function handleNext() {
    if (!answerResult || savingProgress) {
      return;
    }

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer(null);
      setAnswerResult(null);
      setError("");

      return;
    }

    setSavingProgress(true);
    setProgressError("");

    try {
      if (isSignedIn && isLoaded) {
        const token = await getToken();

        if (token) {
          await completeLesson(token, lesson.slug);
        }
      }

      setFinished(true);
    } catch (completionError) {
      setProgressError(
        completionError instanceof Error
          ? completionError.message
          : "We couldn't save your progress.",
      );

      setFinished(true);
    } finally {
      setSavingProgress(false);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswerResult(null);
    setScore(0);
    setFinished(false);
    setError("");
    setProgressError("");
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute right-[-10rem] top-[35rem] h-[26rem] w-[26rem] rounded-full bg-cyan-400/5 blur-3xl" />
        </div>

        <main className="mx-auto max-w-4xl px-6 pb-24 pt-14 sm:px-8">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-400/10 text-2xl">
              ✓
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Knowledge check complete
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              {score}/{questions.length}
            </h1>

            <p className="mt-3 text-lg text-slate-400">
              You got {percentage}% of the questions right.
            </p>

            {progressError && (
              <p className="mx-auto mt-4 max-w-lg text-sm text-amber-300">
                Your quiz is complete, but we couldn't save your progress.
                {isSignedIn ? " You can still continue." : ""}
              </p>
            )}

            {!isSignedIn && (
              <p className="mx-auto mt-4 max-w-lg text-sm text-slate-500">
                Sign in to save your completed lessons to your CU101 account.
              </p>
            )}
          </div>

          <section className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-7 sm:p-10">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

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
                  Curio says
                </div>

                <p className="mt-2 text-lg font-semibold leading-8 text-white">
                  {score === questions.length
                    ? "Perfect. You understood the core ideas."
                    : score >= Math.ceil(questions.length / 2)
                      ? "Nice. You’ve got the main idea. Keep exploring."
                      : "That’s what learning is for. Go back, revisit the ideas, and try again."}
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Lesson completed
            </p>

            <h2 className="mt-3 text-2xl font-black text-white">
              {lesson.title}
            </h2>

            <p className="mt-3 leading-7 text-slate-400">
              You made it through the lesson and its knowledge check.
            </p>
          </section>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={restartQuiz}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Retake quiz
            </button>

            <Link
              href={`/learn/completion?lesson=${lesson.slug}`}
              className="rounded-xl bg-white px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Continue
              <span className="ml-2">→</span>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-[-10rem] top-[35rem] h-[26rem] w-[26rem] rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-4">
            <Link
              href={`/learn/lesson?lesson=${lesson.slug}`}
              className="shrink-0 text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              ← Lesson
            </Link>

            <div className="hidden h-5 w-px bg-white/10 sm:block" />

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-4">
                <div className="truncate text-sm font-semibold text-white">
                  {quiz.title}
                </div>

                <div className="shrink-0 text-xs font-semibold text-slate-500">
                  {currentQuestion + 1}/{questions.length}
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

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-12 sm:px-8">
        {currentQuestion === 0 && (
          <section className="mb-12">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Knowledge check
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              {quiz.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              {quiz.description}
            </p>
          </section>
        )}

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.12),transparent_35%)]" />

          <div className="relative p-7 sm:p-10 lg:p-12">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Question {currentQuestion + 1}
              </span>

              <span className="text-xs text-slate-600">
                {question.options.length} choices
              </span>
            </div>

            <h2 className="mt-8 max-w-3xl text-2xl font-black leading-tight text-white sm:text-3xl">
              {question.question}
            </h2>

            <div className="mt-8 space-y-3">
              {question.options.map(
                (option: string, index: number) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleAnswer(option)}
                    disabled={selectedAnswer !== null || checking}
                    className={`group flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition sm:p-5 ${getOptionClasses(option)}`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/10 text-xs font-black text-slate-500">
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="pt-1 text-sm leading-6 sm:text-base">
                      {option}
                    </span>
                  </button>
                ),
              )}
            </div>

            {checking && (
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-400">
                Checking your answer...
              </div>
            )}

            {answerResult && (
              <div
                className={`mt-8 rounded-2xl border p-5 ${
                  answerResult.correct
                    ? "border-emerald-400/10 bg-emerald-400/[0.05]"
                    : "border-red-400/10 bg-red-400/[0.05]"
                }`}
              >
                <div
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                    answerResult.correct
                      ? "text-emerald-300"
                      : "text-red-300"
                  }`}
                >
                  {answerResult.correct ? "Correct" : "Not quite"}
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {answerResult.explanation}
                </p>
              </div>
            )}

            {error && (
              <div className="mt-8 rounded-2xl border border-red-400/10 bg-red-400/[0.05] p-4 text-sm text-red-200">
                {error}
              </div>
            )}

            <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-slate-500">
                {!answerResult
                  ? "Choose the answer you think is correct."
                  : "Answer checked by CU101."}
              </div>

              <button
                type="button"
                onClick={handleNext}
                disabled={!answerResult || checking || savingProgress}
                className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
              >
                {savingProgress
                  ? "Saving..."
                  : currentQuestion === questions.length - 1
                    ? "Finish quiz"
                    : "Next question"}
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </section>

        <section className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/50 p-6 sm:p-8">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative mx-auto h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:mx-0">
              <Image
                src="/curio/curio.png"
                alt="Curio"
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Curio
              </div>

              <p className="mt-2 font-semibold leading-7 text-white">
                Think first. Then choose. There’s no rush.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}