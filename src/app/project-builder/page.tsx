import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Builder",
  description:
    "Combine cabinets, countertops, and flooring into one estimate. See a running total and request an official quote — no checkout, no pressure.",
};

export default function ProjectBuilderPage() {
  return (
    <>
      <section className="bg-[var(--color-brand-navy)] text-white py-14 px-4">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm text-[var(--color-brand-gold)] font-medium mb-2">Project Builder</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Build Your Project Estimate</h1>
          <p className="mt-4 text-white/80 text-base leading-relaxed max-w-2xl">
            Select cabinets, countertops, and flooring in one place. See a running total as you add items,
            then request an official quote when you&apos;re ready. No checkout. No pressure.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-[var(--color-background)]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)]/10 mb-6">
            <svg className="w-8 h-8 text-[var(--color-brand-navy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-[var(--color-text)]">Project Builder Coming Soon</h2>
          <p className="mt-3 text-sm text-[var(--color-muted)] leading-relaxed max-w-md mx-auto">
            We&apos;re building the interactive project estimator. In the meantime, browse our product categories
            and contact us to put together an estimate.
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Cabinets", href: "/cabinets" },
              { label: "Countertops", href: "/countertops" },
              { label: "LVP Flooring", href: "/lvp-flooring" },
              { label: "Hardwood", href: "/hardwood-flooring" },
            ].map((cat) => (
              <a
                key={cat.href}
                href={cat.href}
                className="block rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-[var(--color-text)] text-center hover:border-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)]/5 transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </div>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block rounded bg-[var(--color-brand-gold)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-brand-gold-dark)] transition-colors"
            >
              Request a Quote Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
