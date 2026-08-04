"use client";

import Link from "next/link";
import Image from "next/image";
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

export default function Header({ announcement }: { announcement?: string }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const announcementText = announcement || "Flat-Rate Delivery • Local Pickup Available • Pallet Pricing Available";

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-white text-center text-xs py-2 px-4 text-[var(--color-text)] border-b border-gray-100">
        {announcementText}
      </div>

      {/* Main nav */}
      <div className="bg-[var(--color-brand-green)] shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logo.png"
                alt="KOM Building Materials"
                width={160}
                height={64}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[var(--color-brand-dark)] underline underline-offset-4"
                      : "text-[#2c2c2c] hover:bg-black/10"
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
                className="hidden sm:inline-flex items-center rounded bg-[var(--color-brand-dark)] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-black transition-colors"
              >
                Build Your Project
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 text-[#2c2c2c] hover:bg-black/10 rounded"
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
          <div className="lg:hidden bg-[var(--color-brand-green-dark)] px-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2.5 text-sm font-medium rounded transition-colors ${
                  pathname === link.href
                    ? "text-white font-semibold"
                    : "text-[#2c2c2c] hover:bg-black/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/project-builder"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block text-center rounded bg-[var(--color-brand-dark)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-black transition-colors"
            >
              Build Your Project
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
