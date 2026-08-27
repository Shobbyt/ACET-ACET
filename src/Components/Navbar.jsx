import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">

        <img src="/acet.png" alt="ACET Logo" className="h-9 w-auto object-contain" />


        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#how-it-works"
            className="text-sm font-semibold text-gray-700 transition-colors hover:text-[var(--color-primary)]">
            How It Works
          </a>

          <a
            href="#professionals"
            className="text-sm font-semibold text-gray-700 transition-colors hover:text-[var(--color-primary)]">
            Professionals
          </a>

          <a
            href="#companies"
            className="text-sm font-semibold text-gray-700 transition-colors hover:text-[var(--color-primary)]">
            Companies
          </a>

          <a
            href="#trust-safety"
            className="text-sm font-semibold text-gray-700 transition-colors hover:text-[var(--color-primary)]">
            Trust & Safety
          </a>
        </div>


        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/signin"
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:text-[var(--color-primary)]" >
            Sign In
          </a>

          <a
            href="/signup"
            className="rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[var(--color-primary-dark)] hover:shadow-md" >
            Get Started
          </a>
        </div>


        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl p-2 text-gray-700 transition-colors hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>


      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-sm md:hidden">
          <div className="flex flex-col gap-2">

            <a
              href="#how-it-works"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]" >
              How It Works
            </a>

            <a
              href="#professionals"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]">
              Professionals
            </a>

            <a
              href="#companies"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]">
              Companies
            </a>

            <a
              href="#trust-safety"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]">
              Trust & Safety
            </a>

            <div className="mt-3 flex flex-col gap-2 border-t border-gray-100 pt-4">
              <a
                href="/signin"
                className="rounded-xl px-4 py-3 text-center text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
                Sign In
              </a>

              <a
                href="/signup"
                className="rounded-xl bg-[var(--color-primary)] px-5 py-3 text-center text-sm font-bold text-white transition-all hover:bg-[var(--color-primary-dark)]">
                Get Started
              </a>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;