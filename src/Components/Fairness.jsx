import {
  Scale,
  Eye,
  UsersRound,
  CheckCircle2,
} from "lucide-react";

const Fairness = () => {
  const principles = [
    {
      icon: Scale,
      title: "Focus on capability",
      text: "Give people a chance to be considered for what they can demonstrate, not simply where they come from or how they present themselves.",
    },
    {
      icon: Eye,
      title: "Make decisions clearer",
      text: "Surface relevant information and evidence so professionals and companies can make more informed decisions.",
    },
    {
      icon: UsersRound,
      title: "Create equal opportunity",
      text: "Help qualified professionals discover opportunities where their skills and experience can genuinely be considered.",
    },
    {
      icon: CheckCircle2,
      title: "Use meaningful signals",
      text: "Prioritize information that is relevant to the opportunity instead of relying on assumptions or superficial indicators.",
    },
  ];

  return (
    <section
      id="fairness"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

   
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--color-primary)]">
            Fairness
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Give people a fairer chance to be seen for what they can do.
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            ACET is built around relevant skills, evidence, and opportunity fit
            to help reduce the uncertainty and bias that can come with
            traditional hiring and opportunity discovery.
          </p>
        </div>


        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <div
                key={principle.title}
                className="flex gap-5 rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-background)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-light)]">
                  <Icon
                    size={23}
                    className="text-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text)]">
                    {principle.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {principle.text}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

    
        <div className="mt-10 mx-auto max-w-3xl text-center">
          <p className="text-lg font-semibold leading-8 text-[var(--color-primary-dark)]">
            Your background shouldn't define your opportunity.
            <br />
            What you can bring should matter.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Fairness;