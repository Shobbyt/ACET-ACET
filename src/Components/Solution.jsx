import { ShieldCheck, FileCheck2, Sparkles } from "lucide-react";

const Solution = () => {
  const solutions = [
    {
      icon: ShieldCheck,
      title: "Verify what matters",
      text: "Assess opportunities, companies, and professional identities using meaningful trust signals and verification.",
    },
    {
      icon: FileCheck2,
      title: "Prove with evidence",
      text: "Turn skills and experience into credible evidence so people can make decisions based on more than claims.",
    },
    {
      icon: Sparkles,
      title: "Match with intelligence",
      text: "Use AI to connect professionals with opportunities that align with their skills, experience, and goals.",
    },
  ];

  return (
    <section
      id="solution"
      className="bg-[var(--color-background)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">


        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--color-primary)]">
            The ACET approach
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">
            A smarter way to build trust and find the right fit.
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            ACET brings verification, evidence, and intelligent matching
            together to help professionals and companies make better decisions.
          </p>
        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="rounded-2xl border border-[var(--color-primary)]/20 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-light)]">
                  <Icon
                    size={24}
                    className="text-[var(--color-primary)]"
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[var(--color-text)]">
                  {solution.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {solution.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Solution;