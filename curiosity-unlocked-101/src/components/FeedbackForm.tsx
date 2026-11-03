
"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { FormEvent, useState } from "react";
import { ReviewType, submitReview } from "@/lib/api";

const reviewTypes: { value: ReviewType; label: string }[] = [
  { value: "website", label: "The website" },
  { value: "lesson", label: "A lesson" },
  { value: "short", label: "A short video" },
  { value: "curio", label: "Curio" },
  { value: "general", label: "Something else" },
];

const fieldClass =
  "mt-3 w-full border border-white/15 bg-[#111613] px-4 py-3.5 text-sm text-[#f0efe7] outline-none transition placeholder:text-white/30 focus:border-[#a8f2ed]";

export default function FeedbackForm() {
  const { isLoaded, isSignedIn, getToken } = useAuth();

  const [type, setType] = useState<ReviewType>("website");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState<number | undefined>();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (message.trim().length < 5) {
      setError("Please write at least five characters so we know what you mean.");
      return;
    }

    setSubmitting(true);

    try {
      const token = await getToken();

      if (!token) {
        throw new Error("Your session could not be verified. Please sign in again.");
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
          : "Your feedback couldn't be sent. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (!isLoaded) {
    return (
      <div className="border border-white/15 p-8 text-sm text-white/60">
        Preparing your feedback form…
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <section className="border border-white/15 bg-[#151a17] p-6 sm:p-9">
        <p className="editorial-label">A note from you</p>

        <h2 className="mt-5 max-w-lg text-3xl font-black leading-tight tracking-tight text-[#f0efe7] sm:text-4xl">
          Curiosity works better when it goes both ways.
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
          Tell us what made you think, what confused you, or what you want
          CU101 to explore next. Sign in to send your feedback.
        </p>

        <Link
          href="/sign-in"
          className="editorial-button mt-7"
        >
          Sign in to share your thoughts <span aria-hidden="true">↗</span>
        </Link>
      </section>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/15 bg-[#151a17] p-5 sm:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/15 pb-6">
        <div>
          <p className="editorial-label">Your field notes</p>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#f0efe7] sm:text-3xl">
            Tell us what you think.
          </h2>
        </div>

        <span className="border border-[#a8f2ed]/30 px-3 py-2 text-xs font-bold tracking-wide text-[#a8f2ed]">
          CU101 / FEEDBACK
        </span>
      </div>

      <div className="mt-7 grid gap-7">
        <div>
          <label
            htmlFor="feedback-type"
            className="text-sm font-bold text-[#f0efe7]"
          >
            01 — What is this about?
          </label>

          <select
            id="feedback-type"
            value={type}
            onChange={(event) => setType(event.target.value as ReviewType)}
            className={fieldClass}
          >
            {reviewTypes.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <fieldset>
          <legend className="text-sm font-bold text-[#f0efe7]">
            02 — How was the experience?
            <span className="ml-2 font-normal text-white/40">
              Optional
            </span>
          </legend>

          <div className="mt-3 flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((value) => {
              const selected = rating === value;

              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={selected}
                  aria-label={`Rate ${value} out of 5`}
                  onClick={() =>
                    setRating((current) =>
                      current === value ? undefined : value,
                    )
                  }
                  className={`flex h-12 w-12 items-center justify-center border text-sm font-bold transition ${
                    selected
                      ? "border-[#a8f2ed] bg-[#a8f2ed] text-[#101312]"
                      : "border-white/15 bg-transparent text-white/60 hover:border-[#a8f2ed]/60 hover:text-[#a8f2ed]"
                  }`}
                >
                  {value}
                </button>
              );
            })}

            <span className="self-center pl-2 text-xs text-white/40">
              {rating ? `${rating} out of 5` : "Choose a rating"}
            </span>
          </div>
        </fieldset>

        <div>
          <label
            htmlFor="feedback-message"
            className="text-sm font-bold text-[#f0efe7]"
          >
            03 — What should we know?
          </label>

          <textarea
            id="feedback-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            maxLength={1000}
            minLength={5}
            required
            rows={7}
            placeholder="Be honest. What worked, what didn't, or what would you love to see next?"
            className={`${fieldClass} resize-y leading-7`}
          />

          <div
            className="mt-2 flex justify-between gap-4 text-xs text-white/40"
            aria-live="polite"
          >
            <span>Specific feedback helps us improve.</span>
            <span className="tabular-nums">{message.length}/1000</span>
          </div>
        </div>

        {error && (
          <p
            role="alert"
            className="border border-red-300/30 bg-red-300/5 p-4 text-sm leading-6 text-red-200"
          >
            {error}
          </p>
        )}

        {success && (
          <p
            role="status"
            className="border border-[#a8f2ed]/30 bg-[#a8f2ed]/5 p-4 text-sm leading-6 text-[#a8f2ed]"
          >
            Feedback received. Thanks for helping shape CU101.
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
          <p className="max-w-xs text-xs leading-5 text-white/40">
            Your feedback helps us make the next explanation clearer.
          </p>

          <button
            type="submit"
            disabled={submitting || message.trim().length < 5}
            className="editorial-button disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:transform-none"
          >
            {submitting ? "Sending…" : "Send feedback"}
            {!submitting && <span aria-hidden="true">↗</span>}
          </button>
        </div>
      </div>
    </form>
  );
}
