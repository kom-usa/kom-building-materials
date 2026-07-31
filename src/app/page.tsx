import Link from "next/link";

const categories = [
  {
    label: "Cabinets",
    href: "/cabinets",
    description: "Shaker, raised-panel, and modern styles. Soft-close hinges and dovetail drawers standard.",
    icon: "🪵",
  },
  {
    label: "Countertops",
    href: "/countertops",
    description: "Quartz, granite, and butcher block. Fabricated and installed to your exact measurements.",
    icon: "◻️",
  },
  {
    label: "LVP Flooring",
    href: "/lvp-flooring",
    description: "100% waterproof luxury vinyl plank. Pet-friendly, kid-friendly, and budget-friendly.",
    icon: "🏠",
  },
  {
    label: "Hardwood Flooring",
    href: "/hardwood-flooring",
    description: "Solid and engineered hardwood. Can be refinished for decades of use.",
    icon: "🌲",
  },
];

const valuePillars = [
  { heading: "No Middleman Markup", body: "We buy direct from manufacturers and pass the savings to you. Same quality, lower price." },
  { heading: "Expert Guidance", body: "Real advice from people who work in the showroom. Bring your measurements and photos — we'll help you plan." },
  { heading: "Veteran-Owned", body: "KOM is a Service-Disabled Veteran-Owned Small Business. We run a tight, honest operation." },
  { heading: "See It In Person", body: "Touch the samples, compare colors side by side. Our Redford Township showroom is open six days a week." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-brand-green)] text-white py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Kitchen &amp; Floor Materials,{" "}
            <span className="text-[var(--color-brand-green)]">Without the Middleman</span>
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Cabinets, countertops, LVP, and hardwood flooring — displayed in our Redford Township showroom.
            Browse, plan, and request a quote online or in person.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/project-builder"
              className="rounded bg-[var(--color-brand-green)] px-7 py-3.5 text-base font-semibold text-white shadow hover:bg-[var(--color-brand-green-dark)] transition-colors"
            >
              Build Your Project
            </Link>
            <Link
              href="/contact"
              className="rounded border border-white/30 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Visit the Showroom
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-[var(--color-background)]">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-center text-[var(--color-text)] mb-10">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group block bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[var(--color-brand-green)] transition-all"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-semibold text-[var(--color-text)] text-lg group-hover:text-[var(--color-brand-green)] transition-colors">
                  {cat.label}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">
                  {cat.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-[var(--color-brand-green)]">
                  Browse {cat.label} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why KOM */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-center text-[var(--color-text)] mb-10">
            Why Customers Choose KOM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePillars.map((pillar) => (
              <div key={pillar.heading}>
                <h3 className="font-semibold text-[var(--color-brand-green)] mb-2">{pillar.heading}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing teaser */}
      <section className="py-14 px-4 bg-[var(--color-brand-green)] text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Financing Available</h2>
          <p className="mt-3 text-white/80 text-base leading-relaxed">
            Don&apos;t let budget slow down your project. We offer flexible financing options so you can
            start your kitchen or flooring project now and pay over time.
          </p>
          <Link
            href="/financing"
            className="mt-6 inline-block rounded border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Learn About Financing
          </Link>
        </div>
      </section>

      {/* Project Builder CTA */}
      <section className="py-16 px-4 bg-[var(--color-background)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[var(--color-text)]">Ready to Plan Your Project?</h2>
          <p className="mt-3 text-[var(--color-muted)] text-base leading-relaxed">
            Use our Project Builder to combine cabinets, countertops, and flooring in one estimate.
            See a running total, then request an official quote — no checkout, no pressure.
          </p>
          <Link
            href="/project-builder"
            className="mt-6 inline-block rounded bg-[var(--color-brand-green)] px-7 py-3.5 text-base font-semibold text-white shadow hover:bg-[var(--color-brand-green-dark)] transition-colors"
          >
            Build Your Project
          </Link>
        </div>
      </section>

      {/* Showroom info */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-2">Visit Our Showroom</h2>
          <p className="text-[var(--color-muted)] text-sm">
            15497 Beech Daly Road, Redford Township, MI 48239
          </p>
          <p className="text-[var(--color-muted)] text-sm mt-1">
            <a href="tel:+13135591888" className="hover:text-[var(--color-brand-green)] transition-colors">
              (313) 559-1888
            </a>
            {" · "}
            <a href="mailto:Jordan@KOM-USA.com" className="hover:text-[var(--color-brand-green)] transition-colors">
              Jordan@KOM-USA.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
