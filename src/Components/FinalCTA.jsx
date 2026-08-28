import { ArrowRight, BriefcaseBusiness, UserRound } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="bg-[var(--color-primary-dark)] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">


        <p className="text-sm font-bold uppercase tracking-wider text-emerald-200">
          Get started with ACET
        </p>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to find what fits?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-emerald-50/80 sm:text-lg">
          Whether you're building your career or building your team, ACET
          helps you make better decisions with trust, evidence, and intelligent
          matching.
        </p>

    
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="/signup"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[var(--color-primary-dark)] transition hover:bg-[var(--color-primary-light)] sm:w-auto">
            <UserRound size={18} />
            I'm a Professional
            <ArrowRight size={17} />
          </a>

          <a
            href="/signup"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10 sm:w-auto">
            <BriefcaseBusiness size={18} />
            I'm a Company
            <ArrowRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;