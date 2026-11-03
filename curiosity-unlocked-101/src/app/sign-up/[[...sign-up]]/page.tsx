
import Link from "next/link";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101312] px-5 py-16 text-[#f0efe7] sm:px-8 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full border border-[#a8f2ed]/15 sm:h-[30rem] sm:w-[30rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-40 -z-10 h-48 w-48 rounded-full border border-[#a8f2ed]/20 sm:h-72 sm:w-72"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[420px_1fr] lg:gap-20">
        <div className="order-2 border border-white/15 bg-[#151a17] p-5 sm:p-8 lg:order-1">
          <p className="editorial-label">Start your journey</p>

          <h2 className="mt-3 text-2xl font-black tracking-tight">
            Create your account
          </h2>

          <p className="mt-2 mb-7 text-sm leading-6 text-white/50">
            One question can lead somewhere unexpected.
          </p>

          <div className="flex justify-center">
            <SignUp
              appearance={{
                elements: {
                  rootBox: "w-full",
                  cardBox: "w-full shadow-none",
                  card: "w-full border-0 bg-transparent shadow-none",
                  headerTitle: "text-[#f0efe7]",
                  headerSubtitle: "text-white/50",
                  socialButtonsBlockButton:
                    "border border-white/15 bg-[#101312] text-[#f0efe7] hover:bg-white/5",
                  formFieldLabel: "text-[#f0efe7]",
                  formFieldInput:
                    "border-white/15 bg-[#101312] text-[#f0efe7]",
                  formButtonPrimary:
                    "bg-[#a8f2ed] text-[#101312] hover:bg-[#d8ff70]",
                  footerActionLink: "text-[#a8f2ed] hover:text-[#d8ff70]",
                  dividerLine: "bg-white/15",
                  dividerText: "text-white/40",
                },
              }}
            />
          </div>

          <div className="mt-6 border-t border-white/10 pt-5 text-center text-sm text-white/50">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-bold text-[#a8f2ed] transition hover:text-[#d8ff70]"
            >
              Sign in ↗
            </Link>
          </div>
        </div>

        <div className="order-1 max-w-2xl lg:order-2">
          <p className="editorial-label">
            CURIOSITY UNLOCKED 101 / BEGIN HERE
          </p>

          <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-7xl">
            The world
            <br />
            is stranger
            <br />
            <span className="text-[#a8f2ed]">than you think.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-white/60 sm:text-lg">
            Explore the questions hiding behind everyday reality.
            Learn at your own pace, follow your curiosity, and discover
            how much there is still to understand.
          </p>

          <div className="mt-10 grid max-w-lg grid-cols-2 gap-4">
            <div className="border-t border-white/20 pt-4">
              <p className="text-2xl font-black text-[#a8f2ed]">01</p>
              <p className="mt-2 text-sm font-bold">Ask better questions</p>
            </div>
            <div className="border-t border-white/20 pt-4">
              <p className="text-2xl font-black text-[#d8ff70]">02</p>
              <p className="mt-2 text-sm font-bold">Follow the evidence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
