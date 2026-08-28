const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-primary)]/10 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">

        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">


          <div className="max-w-md">
            <a href="/" className="inline-flex items-center">
              <img
                src="/acet.png"
                alt="ACET Logo"
                className="h-9 w-auto object-contain"
              />
            </a>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              ACET helps professionals and companies make better decisions
              through trust, evidence, and intelligent matching.
            </p>
          </div>



        </div>


        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-6 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ACET. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Website Developed by{" "}
            <a href="mailto:shobbydigital0" className="font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-dark)]">Shobby Digital</a>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;