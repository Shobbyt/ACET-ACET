import { Search, ShieldCheck, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      text: "Find opportunities and professionals that match what you're looking for.",
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: "Verify",
      text: "Review trust signals and evidence to understand what can actually be trusted.",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Match",
      text: "Let ACET's intelligence connect the right people with the right opportunities.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">


        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--color-primary)]">
            How it works
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">
            From uncertainty to confident decisions.
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            ACET brings trust, evidence, and intelligent matching into one
            simple experience.
          </p>
        </div>

  
        <div className="relative mt-14 grid gap-8 md:grid-cols-3">


          <div className="absolute left-[16.5%] right-[16.5%] top-12 hidden h-px bg-[var(--color-primary)]/20 md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-background)] p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-lg">
              
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white shadow-lg shadow-emerald-900/10">
                  <Icon size={27} />
                </div>

                <span className="mt-5 block text-xs font-bold tracking-widest text-[var(--color-primary)]">
                  STEP {step.number}
                </span>

                <h3 className="mt-2 text-xl font-bold text-[var(--color-text)]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {step.text}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;