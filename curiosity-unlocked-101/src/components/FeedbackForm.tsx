"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { FormEvent, useState } from "react";
import {
  ReviewType,
  submitReview,
} from "@/lib/api";

const reviewTypes: { value: ReviewType; label: string }[] = [
  { value: "website", label: "Website" },
  { value: "lesson", label: "Lesson" },
  { value: "short", label: "Shorts" },
  { value: "curio", label: "Curio" },
  { value: "general", label: "General" },
];

export default function FeedbackForm() {
  const { isLoaded, isSignedIn, getToken } = useAuth();

  const [type, setType] = useState<ReviewType>("website");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess(false);

    if (!message.trim()) {
      setError("Tell us what you think before submitting.");
      return;
    }

    setSubmitting(true);

    try {
      const token = await getToken();

      if (!token) {
        throw new Error("Your session could not be verified.");
      }

      await submitReview(token, {
        type,
        message: message.trim(),
        rating,
      });

      setMessage("");
      setRating(undefined);
      setSuccess(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong while submitting your feedback.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (!isLoaded) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center text-slate-400">
        Loading...
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-400/10 text-lg">
          ✦
        </div>

        <h2 className="mt-5 text-2xl font-black text-white">
          Your voice matters here.
        </h2>

        <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-400">
          Sign in to tell us what you think about CU101, the lessons, the
          shorts, or Curio himself.
        </p>

        <Link
          href="/sign-in"
          className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
        >
          Sign in to leave feedback
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-slate-900/60 p-7 sm:p-8"
    >
      <div className="grid gap-6">
        <div>
          <label
            htmlFor="feedback-type"
            className="text-sm font-semibold text-white"
          >
            What are you giving feedback about?
          </label>

          <select
            id="feedback-type"
            value={type}
            onChange={(event) =>
              setType(event.target.value as ReviewType)
            }
            className="mt-3 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-400/40"
          >
            {reviewTypes.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="feedback-rating"
            className="text-sm font-semibold text-white"
          >
            Rating <span className="text-slate-600">(optional)</span>
          </label>

          <div className="mt-3 flex gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() =>
                  setRating(rating === value ? undefined : value)
                }
                aria-label={`Rate ${value} out of 5`}
                className={`flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-bold transition ${
                  rating !== undefined && value <= rating
                    ? "border-indigo-300/20 bg-indigo-400/10 text-indigo-200"
                    : "border-white/10 bg-white/5 text-slate-500 hover:bg-white/10 hover:text-white"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="feedback-message"
            className="text-sm font-semibold text-white"
          >
            Your feedback
          </label>

          <textarea
            id="feedback-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            maxLength={1000}
            rows={6}
            placeholder="Tell us what you liked, what felt confusing, or what you'd like to see next..."
            className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-slate-950 px-4 py-4 text-sm leading-7 text-white outline-none placeholder:text-slate-600 transition focus:border-indigo-400/40"
          />

          <div className="mt-2 text-right text-xs text-slate-600">
            {message.length}/1000
          </div>
        </div>

        {error && (
          <div className="rounded-xl border border-red-400/10 bg-red-400/[0.05] px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-xl border border-emerald-400/10 bg-emerald-400/[0.05] px-4 py-3 text-sm text-emerald-200">
            Feedback submitted. Thanks for helping shape CU101.
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={submitting || message.trim().length < 5}
            className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
          >
            {submitting ? "Sending..." : "Send feedback"}
          </button>
        </div>
      </div>
    </form>
  );
}