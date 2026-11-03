
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101312] px-5 py-16 text-[#f0efe7] sm:px-8 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-16 -z-10 h-80 w-80 rounded-full border border-[#a8f2ed]/15 sm:h-[30rem] sm:w-[30rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-32 -z-10 h-48 w-48 rounded-full border border-[#a8f2ed]/20 sm:h-72 sm:w-72"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-20">
        <div className="max-w-2xl">
          <p className="editorial-label">
            CURIOSITY UNLOCKED 101 / YOUR SPACE
          </p>

          <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-7xl">
            Come back
            <br />
            <span className="text-[#a8f2ed]">curious.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-white/60 sm:text-lg">
            Pick up where you left off, explore another big question,
            and keep building your understanding of the world.
          </p>

          <div className="mt-10 border-l-2 border-[#a8f2ed] pl-5">
            <p className="text-sm font-bold text-[#f0efe7]">
              No one knows everything.
            </p>
            <p className="mt-1 text-sm leading-6 text-white/50">
              That's the whole point of being curious.
            </p>
          </div>
        </div>

        <div className="border border-white/15 bg-[#151a17] p-5 sm:p-8">
          <p className="editorial-label">Your account</p>

          <h2 className="mt-3 text-2xl font-black tracking-tight">
            Sign in to CU101
          </h2>

          <p className="mt-2 mb-7 text-sm leading-6 text-white/50">
            Your next discovery is waiting.
          </p>

          <div className="flex justify-center">
            <SignIn
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
            New to the journey?{" "}
            <Link
              href="/sign-up"
              className="font-bold text-[#a8f2ed] transition hover:text-[#d8ff70]"
            >
              Create an account ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
