import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";
import hardwoodData from "@/data/hardwood-flooring.json";

export const metadata: Metadata = {
  title: "Hardwood Flooring",
  description:
    "Solid and engineered hardwood flooring. Can be refinished for decades of use. Browse domestic and exotic species at our Redford Township showroom.",
};

const hardwood = hardwoodData as Product[];

const widthGuide = [
  { width: "2 1/4\"", best: "Smaller rooms, traditional look", detail: "Classic narrow plank adds subtle charm without overwhelming the space." },
  { width: "3 1/4\"", best: "Most popular — any room", detail: "Versatile and balanced. Works with any home style from traditional to modern." },
  { width: "4\"", best: "Modern and transitional spaces", detail: "Wider plank makes rooms feel larger and shows more natural grain." },
  { width: "5\"", best: "Open concept, high-end finish", detail: "Bold wide-plank look that delivers a premium feel in large spaces." },
];

export default function HardwoodFlooringPage() {
  const featured = hardwood;

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-brand-green)] text-white py-14 px-4">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm text-[var(--color-brand-dark)] font-semibold mb-2">Products</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Hardwood Flooring</h1>
          <p className="mt-4 text-white/80 text-base leading-relaxed max-w-2xl">
            Nothing adds warmth and resale value like real hardwood. We carry solid and engineered options
            in domestic species like oak, and exotic options like Brazilian cherry.
            Properly maintained, hardwood floors last the life of the home.
          </p>
          <Link
            href="/project-builder"
            className="mt-6 inline-block rounded bg-[var(--color-brand-dark)] px-6 py-3 text-sm font-semibold text-white hover:bg-black transition-colors"
          >
            Add to Project Builder →
          </Link>
        </div>
      </section>


      {/* Width guide */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-6">Which width is right for your project?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {widthGuide.map((w) => (
              <div key={w.width} className="border border-gray-100 rounded-lg p-5">
                <h3 className="font-semibold text-[var(--color-brand-green)] text-lg">{w.width}</h3>
                <p className="mt-1 text-sm font-medium text-[var(--color-text)]">{w.best}</p>
                <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{w.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-14 px-4 bg-[var(--color-background)]">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-8">Hardwood Flooring — All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <div key={product.sku} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-48 relative bg-gray-100">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center text-xs text-gray-400 font-medium">Photo coming soon</div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs text-[var(--color-muted)] font-mono mb-1">{product.sku}</p>
                  <h3 className="font-semibold text-[var(--color-text)]">{product.name}</h3>
                  <p className="text-xs text-[var(--color-muted)] mt-0.5">{product.manufacturer}</p>
                  <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <p className="mt-2 text-xs text-[var(--color-muted)] font-medium">{product.dimensions}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-[var(--color-brand-green)]">
                      ${product.price.toFixed(2)}
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
          <h2 className="text-xl font-bold text-[var(--color-text)]">Need help choosing a species or finish?</h2>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            Bring photos of your space and we&apos;ll help you match the right hardwood. We can also discuss
            installation requirements for your specific subfloor.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/project-builder" className="rounded bg-[var(--color-brand-green)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-brand-green-dark)] transition-colors">
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
