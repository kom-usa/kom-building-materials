import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "KOM Building Materials is a Service-Disabled Veteran-Owned showroom in Redford Township, MI. Professional guidance, premium products, no middleman markup.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-brand-green)] text-white py-14 px-4">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm text-[var(--color-brand-dark)] font-semibold mb-2">About</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Built on Honest Business</h1>
          <p className="mt-4 text-white/80 text-base leading-relaxed max-w-2xl">
            KOM Building Materials is a Service-Disabled Veteran-Owned Small Business (SDVOSB) based in
            Redford Township, Michigan. We sell cabinets, countertops, and flooring — and we do it without
            the layers of markup that drive up prices at big-box stores.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 px-4 bg-white">
        <div className="mx-auto max-w-3xl prose prose-sm text-[var(--color-muted)] leading-relaxed">
          <h2 className="text-xl font-bold text-[var(--color-text)] not-prose mb-4">Our Mission</h2>
          <p>
            Most homeowners don&apos;t know what materials actually cost. They walk into a big-box store, pay
            retail, and assume that&apos;s the market price. It&apos;s not. KOM was built to close that gap —
            to bring manufacturer-direct pricing and real product knowledge to homeowners, remodelers,
            contractors, and investors in Metro Detroit.
          </p>
          <p className="mt-4">
            We run a physical showroom in Redford Township so you can see and touch the products before you
            buy. No guessing from photos. No surprises when the order arrives. And because we work directly
            with manufacturers, we can answer questions about construction, installation, and long-term
            performance that a big-box associate can&apos;t.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 px-4 bg-[var(--color-background)]">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-8">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { heading: "Transparency", body: "We tell you what things cost and why. No hidden fees, no inflated MSRP to discount from." },
              { heading: "Education First", body: "We explain the difference between plywood and particle board, quartz and granite, LVP thicknesses — because an informed customer makes better decisions." },
              { heading: "Personal Guidance", body: "You talk to the same person from first visit through delivery. No call centers, no ticket systems." },
              { heading: "Veteran Values", body: "Founded on the same principles we carried in uniform: integrity, accountability, and taking care of the people in front of us." },
              { heading: "No Pressure", body: "We&apos;re here to help you make a good decision for your project, not to hit a sales number. Take your time." },
              { heading: "Quality Products", body: "We only carry products we&apos;d put in our own homes — from manufacturers with real warranties and real quality control." },
            ].map((v) => (
              <div key={v.heading}>
                <h3 className="font-semibold text-[var(--color-brand-green)]">{v.heading}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-bold text-[var(--color-text)]">Come See Us</h2>
          <address className="not-italic mt-3 text-sm text-[var(--color-muted)] space-y-1">
            <p>15497 Beech Daly Road, Redford Township, MI 48239</p>
            <p>
              <a href="tel:+13135591888" className="hover:text-[var(--color-brand-green)] transition-colors">(313) 559-1888</a>
            </p>
            <p>
              <a href="mailto:Jordan@KOM-USA.com" className="hover:text-[var(--color-brand-green)] transition-colors">Jordan@KOM-USA.com</a>
            </p>
          </address>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="rounded bg-[var(--color-brand-green)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-brand-green-dark)] transition-colors">
              Get in Touch
            </Link>
            <Link href="/project-builder" className="rounded border border-gray-200 px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:bg-gray-50 transition-colors">
              Build Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
