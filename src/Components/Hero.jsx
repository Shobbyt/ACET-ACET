import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[var(--color-background)]">

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-18">

     
        <div className="text-center lg:text-left">

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            Trust what you can verify.
            <br />
            <span className="text-[var(--color-primary)]">
              Find what fits.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
            ACET helps professionals discover trustworthy opportunities and
            helps companies find capable people through evidence, verification,
            and AI-powered matching.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">

            <a
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3.5 font-semibold text-white transition duration-200 hover:bg-[var(--color-primary-dark)]" >
              Get Started
              <ArrowRight size={18} />
            </a>

            <a
              href="#how-it-works"
              className="rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700 transition duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
              Explore ACET
            </a>

          </div>

        </div>

   
        <div className="lg:pl-12">

          <p className="text-sm font-bold uppercase tracking-wider text-[var(--color-primary)]">
            About ACET
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-[var(--color-text)] sm:text-3xl">
            A better way to connect people with the right opportunities.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600">
            ACET brings professionals and companies together through a more
            informed approach to opportunity discovery and hiring.
          </p>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Instead of relying only on profiles, applications, or claims,
            ACET considers relevant evidence, skills, experience, and fit to
            help both sides make better decisions.
          </p>

          <div className="mt-7">
            <p className="font-semibold leading-7 text-[var(--color-primary-dark)]">
              Less guessing. Better information. More confident decisions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;