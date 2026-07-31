import type { Metadata } from "next";
import Link from "next/link";
import type { Product } from "@/types/product";
import cabinetsData from "@/data/cabinets.json";

export const metadata: Metadata = {
  title: "Kitchen Cabinets",
  description:
    "Shaker, raised-panel, and modern cabinet styles. Soft-close hinges and dovetail drawers standard. Browse in our Redford Township showroom or request a quote online.",
};

const cabinets = cabinetsData as Product[];

const features = [
  { heading: "Soft-Close Hinges", body: "Standard on every cabinet — doors close quietly every time." },
  { heading: "Dovetail Drawers", body: "The strongest drawer joint available. Built to outlast the kitchen." },
  { heading: "¾\" Plywood Box", body: "Solid plywood construction — not particle board — handles heavy cookware without bowing." },
  { heading: "Full-Extension Glides", body: "Access every inch of the drawer, even items stored at the back." },
];

export default function CabinetsPage() {
  const featured = cabinets.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-brand-navy)] text-white py-14 px-4">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm text-[var(--color-brand-gold)] font-medium mb-2">Products</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Kitchen Cabinets</h1>
          <p className="mt-4 text-white/80 text-base leading-relaxed max-w-2xl">
            Our cabinet collection covers the most popular styles — shaker, raised-panel, and modern flat-front.
            Every cabinet includes soft-close hinges, dovetail drawers, and ¾&quot; plywood box construction as standard.
            No upgrades needed to get quality.
          </p>
          <Link
            href="/project-builder"
            className="mt-6 inline-block rounded bg-[var(--color-brand-gold)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-brand-gold-dark)] transition-colors"
          >
            Add to Project Builder →
          </Link>
        </div>
      </section>

      {/* Quality callouts */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.heading}>
              <h3 className="font-semibold text-[var(--color-brand-navy)] text-sm">{f.heading}</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section className="py-14 px-4 bg-[var(--color-background)]">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-8">Featured Cabinets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <div key={product.sku} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-300 text-sm">
                  Photo coming soon
                </div>
                <div className="p-5">
                  <p className="text-xs text-[var(--color-muted)] font-mono mb-1">{product.sku}</p>
                  <h3 className="font-semibold text-[var(--color-text)]">{product.name}</h3>
                  <p className="text-xs text-[var(--color-muted)] mt-0.5">{product.manufacturer}</p>
                  <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-[var(--color-brand-navy)]">
                      ${product.price.toLocaleString()}
                      <span className="text-xs font-normal text-[var(--color-muted)] ml-1">{product.priceUnit.replace("-", " ")}</span>
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      product.status === "in-stock"
                        ? "bg-green-50 text-green-700"
                        : "bg-yellow-50 text-yellow-700"
                    }`}>
                      {product.status === "in-stock" ? "In Stock" : "Special Order"}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-[var(--color-muted)]">{product.leadTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-bold text-[var(--color-text)]">Not sure which cabinet is right for you?</h2>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            Visit our Redford Township showroom to see samples in person, or contact us and we&apos;ll walk you through the options.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/project-builder" className="rounded bg-[var(--color-brand-gold)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-brand-gold-dark)] transition-colors">
              Build Your Project
            </Link>
            <Link href="/contact" className="rounded border border-gray-200 px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:bg-gray-50 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
