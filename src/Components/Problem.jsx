import { AlertTriangle, UserRound, BriefcaseBusiness } from "lucide-react";

const Problem = () => {
  return (
    <section className="bg-white py-20 sm:py-24" id="problem">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">


        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--color-primary)]">
            The problem
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Finding the right opportunity shouldn't be a guessing game.
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Professionals and companies face the same challenge from different
            sides: knowing who and what they can actually trust.
          </p>
        </div>

      
        <div className="mt-12 grid gap-6 md:grid-cols-3">


          <div className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-background)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-light)]">
              <UserRound
                size={24}
                className="text-[var(--color-primary)]"
              />
            </div>

            <h3 className="mt-5 text-xl font-bold text-[var(--color-text)]">
              Uncertain opportunities
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Professionals often can't tell if a job, recruiter, or company
              is legitimate or whether an opportunity is actually right for
              their skills.
            </p>
          </div>

    
          <div className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-background)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-light)]">
              <AlertTriangle
                size={24}
                className="text-[var(--color-primary)]"
              />
            </div>

            <h3 className="mt-5 text-xl font-bold text-[var(--color-text)]">
              Claims without proof
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Skills, experience, and credentials don't always tell the full
              story. It's difficult to know what is backed by real evidence.
            </p>
          </div>

     
          <div className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-background)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-light)]">
              <BriefcaseBusiness
                size={24}
                className="text-[var(--color-primary)]"
              />
            </div>

            <h3 className="mt-5 text-xl font-bold text-[var(--color-text)]">
              Difficult hiring decisions
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Companies spend time sorting through applications without always
              knowing which candidates can actually deliver what they claim.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Problem;