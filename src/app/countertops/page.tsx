import type { Metadata } from "next";
import Link from "next/link";
import type { Product } from "@/types/product";
import countertopsData from "@/data/countertops.json";

export const metadata: Metadata = {
  title: "Countertops",
  description:
    "Quartz, granite, and butcher block countertops. Fabricated and installed to your exact measurements. Browse options in our Redford Township showroom.",
};

const countertops = countertopsData as Product[];

const materialGuide = [
  {
    material: "Quartz",
    summary: "Non-porous, never needs sealing. Consistent appearance, extremely durable. Best for busy kitchens.",
    best: "Best for: Kitchens, heavy daily use",
  },
  {
    material: "Granite",
    summary: "Natural stone — every slab is unique. Needs sealing once a year. Adds real value to a home.",
    best: "Best for: Buyers who want a one-of-a-kind look",
  },
  {
    material: "Butcher Block",
    summary: "Warm, natural, refinishable. Not waterproof without treatment — keep away from sinks or seal carefully.",
    best: "Best for: Islands, baking areas, farmhouse kitchens",
  },
];

export default function CountertopsPage() {
  const featured = countertops.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-brand-navy)] text-white py-14 px-4">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm text-[var(--color-brand-gold)] font-medium mb-2">Products</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Countertops</h1>
          <p className="mt-4 text-white/80 text-base leading-relaxed max-w-2xl">
            Quartz, granite, and butcher block — fabricated to your exact kitchen dimensions.
            Pricing is per square foot and includes standard edge profiles. Come in to see the slabs in person
            before making a final decision on natural stone.
          </p>
          <Link
            href="/project-builder"
            className="mt-6 inline-block rounded bg-[var(--color-brand-gold)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-brand-gold-dark)] transition-colors"
          >
            Add to Project Builder →
          </Link>
        </div>
      </section>

      {/* Material guide */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-6">Which material is right for you?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {materialGuide.map((m) => (
              <div key={m.material} className="border border-gray-100 rounded-lg p-5">
                <h3 className="font-semibold text-[var(--color-brand-navy)]">{m.material}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{m.summary}</p>
                <p className="mt-2 text-xs font-medium text-[var(--color-brand-gold)]">{m.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-14 px-4 bg-[var(--color-background)]">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-8">Featured Countertops</h2>
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
                      ${product.price}
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
          <h2 className="text-xl font-bold text-[var(--color-text)]">Ready to measure and order?</h2>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            Bring your kitchen measurements and we&apos;ll give you an accurate quote. Natural stone slabs are available to view in person.
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
