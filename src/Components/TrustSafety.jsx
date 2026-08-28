import {
  ShieldCheck,
  BadgeCheck,
  LockKeyhole,
  Flag,
} from "lucide-react";

const TrustSafety = () => {
  const principles = [
    {
      icon: ShieldCheck,
      title: "Verification",
      text: "Important identities, credentials, and information can be checked before they are trusted.",
    },
    {
      icon: BadgeCheck,
      title: "Evidence",
      text: "Professionals can demonstrate their abilities through meaningful work, experience, and supporting evidence.",
    },
    {
      icon: LockKeyhole,
      title: "Privacy",
      text: "Personal and professional information should be handled responsibly and shared with appropriate control.",
    },
    {
      icon: Flag,
      title: "Report & protect",
      text: "Users can flag suspicious activity and help maintain a safer, more trustworthy community.",
    },
  ];

  return (
    <section
      id="trust-safety"
      className="bg-[var(--color-background)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--color-primary)]">
            Trust & safety
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Trust shouldn't be something you just take for granted.
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            ACET is designed to make trust more visible by giving professionals
            and companies better signals to work with.
          </p>
        </div>


        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <div
                key={principle.title}
                className="rounded-2xl border border-[var(--color-primary)]/20 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-lg" >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary-light)]">
                  <Icon
                    size={22}
                    className="text-[var(--color-primary)]"
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[var(--color-text)]">
                  {principle.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {principle.text}
                </p>
              </div>
            );
          })}

        </div>

    
        <div className="mt-10 rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary-light)] p-6 text-center sm:p-8">
          <p className="mx-auto max-w-3xl text-base font-medium leading-7 text-[var(--color-primary-dark)] sm:text-lg">
            Better opportunities start with better information. ACET helps
            people make decisions with more clarity, confidence, and context.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TrustSafety;