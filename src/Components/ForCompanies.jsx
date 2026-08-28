import {
  Search,
  Users,
  UserCheck,
  ArrowRight,
} from "lucide-react";

const ForCompanies = () => {
  return (
    <section
      id="companies"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">

     
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--color-primary)]">
            For companies
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Hire people for what they can actually do.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            ACET helps companies discover capable professionals, understand
            their experience, and make hiring decisions with greater confidence.
          </p>

          <div className="mt-8 space-y-5">

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-light)]">
                <Search
                  size={20}
                  className="text-[var(--color-primary)]"
                />
              </div>

              <div>
                <h3 className="font-bold text-[var(--color-text)]">
                  Discover capable professionals
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Find professionals whose skills and experience align with
                  what your company actually needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-light)]">
                <Users
                  size={20}
                  className="text-[var(--color-primary)]"
                />
              </div>

              <div>
                <h3 className="font-bold text-[var(--color-text)]">
                  See beyond the CV
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Get a clearer picture of a candidate through their work,
                  evidence, experience, and professional profile.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-light)]">
                <UserCheck
                  size={20}
                  className="text-[var(--color-primary)]"
                />
              </div>

              <div>
                <h3 className="font-bold text-[var(--color-text)]">
                  Make better hiring decisions
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Use meaningful signals and intelligent matching to focus your
                  attention on candidates who are a strong fit.
                </p>
              </div>
            </div>

          </div>

          <a
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-dark)]"
          >
            Find the right talent
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Right Content */}
        <div className="space-y-5">

          <div className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-background)] p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                01
              </span>

              <div>
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  Define what you need
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Describe the skills, experience, and capabilities required
                  for the role you're trying to fill.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-background)] p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                02
              </span>

              <div>
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  Discover relevant talent
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Explore professionals whose profiles and demonstrated
                  capabilities align with your requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-background)] p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                03
              </span>

              <div>
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  Hire with confidence
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Compare meaningful information and make decisions based on
                  more than resumes and unverified claims.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ForCompanies;