import FeedbackForm from "@/components/FeedbackForm";

export default function FeedbackPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-[-10rem] top-[20rem] h-[24rem] w-[24rem] rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-24 pt-16 sm:px-8">
        <section className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Your Voice
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Help shape CU101.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Tell us what works, what doesn&apos;t, and what you want to see
            next. This is how the platform gets better.
          </p>
        </section>

        <FeedbackForm />
      </div>
    </main>
  );
}