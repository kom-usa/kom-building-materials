"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Cabinets", href: "/cabinets" },
  { label: "Countertops", href: "/countertops" },
  { label: "LVP Flooring", href: "/lvp-flooring" },
  { label: "Hardwood Flooring", href: "/hardwood-flooring" },
  { label: "Financing", href: "/financing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-brand-navy)] shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-bold text-lg tracking-tight shrink-0"
          >
            <span className="text-[var(--color-brand-gold)]">KOM</span>
            <span>Building Materials</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[var(--color-brand-gold)]"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/project-builder"
              className="hidden sm:inline-flex items-center rounded bg-[var(--color-brand-gold)] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[var(--color-brand-gold-dark)] transition-colors"
            >
              Build Your Project
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[var(--color-brand-navy-dark)] px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2.5 text-sm font-medium rounded transition-colors ${
                pathname === link.href
                  ? "text-[var(--color-brand-gold)]"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/project-builder"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block text-center rounded bg-[var(--color-brand-gold)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-brand-gold-dark)] transition-colors"
          >
            Build Your Project
          </Link>
        </div>
      )}
    </header>
  );
}
