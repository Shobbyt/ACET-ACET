import {
  ShieldCheck,
  BadgeCheck,
  Target,
  ArrowRight} from "lucide-react";

const ForProfessionals = () => {
  return (
    <section
      id="professionals"
      className="bg-[var(--color-background)] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">


        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--color-primary)]">
            For professionals
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Build a career people can trust.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            ACET helps you discover trustworthy opportunities, showcase what
            you can actually do, and find roles that fit your skills and goals.
          </p>

     
          <div className="mt-8 space-y-5">

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-light)]">
                <ShieldCheck
                  size={20}
                  className="text-[var(--color-primary)]"
                />
              </div>

              <div>
                <h3 className="font-bold text-[var(--color-text)]">
                  Discover trusted opportunities
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Understand the trust signals behind opportunities before you
                  decide to pursue them.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-light)]">
                <BadgeCheck
                  size={20}
                  className="text-[var(--color-primary)]"
                />
              </div>

              <div>
                <h3 className="font-bold text-[var(--color-text)]">
                  Prove your abilities
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Build your professional profile around real evidence,
                  experience, portfolios, and assessments.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-light)]">
                <Target
                  size={20}
                  className="text-[var(--color-primary)]"
                />
              </div>

              <div>
                <h3 className="font-bold text-[var(--color-text)]">
                  Find your fit
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Get intelligent recommendations based on your skills,
                  experience, and career direction.
                </p>
              </div>
            </div>

          </div>

          <a
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-dark)]"
          >
            Start building your profile
            <ArrowRight size={18} />
          </a>
        </div>


        <div className="space-y-5">

          <div className="rounded-2xl border border-[var(--color-primary)]/20 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                01
              </span>

              <div>
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  Create your professional identity
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Build a profile that goes beyond a traditional CV. Highlight your
                  skills, experience, projects, certifications, and what you can
                  actually bring to an opportunity.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--color-primary)]/20 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                02
              </span>

              <div>
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  Show what you can actually do
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Strengthen your profile with evidence of your abilities. Let your
                  work, experience, and achievements speak for you instead of relying
                  only on claims.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--color-primary)]/20 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                03
              </span>

              <div>
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  Connect with the right opportunities
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  ACET helps surface opportunities that align with your skills,
                  experience, and career direction, so you can spend less time searching
                  and more time pursuing the right fit.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ForProfessionals;