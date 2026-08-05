import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";
import cabinetsData from "@/data/cabinets.json";

export const metadata: Metadata = {
  title: "Kitchen Cabinets",
  description:
    "Shaker, raised-panel, and modern cabinet styles. Soft-close hinges and dovetail drawers standard. Browse in our Redford Township showroom or request a quote online.",
};

const cabinets = cabinetsData as Product[];
const catalog = cabinets[0];

const features = [
  { heading: "Soft-Close Hinges", body: "Standard on every cabinet — doors close quietly every time." },
  { heading: "Dovetail Drawers", body: "The strongest drawer joint available. Built to outlast the kitchen." },
  { heading: "¾\" Plywood Box", body: "Solid plywood construction — not particle board — handles heavy cookware without bowing." },
  { heading: "Full-Extension Glides", body: "Access every inch of the drawer, even items stored at the back." },
];

export default function CabinetsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-brand-green)] text-white py-14 px-4">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm text-[var(--color-brand-dark)] font-semibold mb-2">Products</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Kitchen Cabinets</h1>
          <p className="mt-4 text-white/80 text-base leading-relaxed max-w-2xl">
            {catalog.description}
          </p>
          <Link
            href="/project-builder"
            className="mt-6 inline-block rounded bg-[var(--color-brand-dark)] px-6 py-3 text-sm font-semibold text-white hover:bg-black transition-colors"
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
              <h3 className="font-semibold text-[var(--color-brand-green)] text-sm">{f.heading}</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cabinet groups */}
      {catalog.cabinetGroups?.map((group, i) => (
        <section
          key={group.group}
          className={`py-14 px-4 border-t border-gray-100 ${i % 2 === 0 ? "bg-[var(--color-background)]" : "bg-white"}`}
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-2">{group.group}</h2>
            <p className="text-sm text-[var(--color-muted)] mb-8">Mercury White · Full Overlay Shaker · In Stock</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {group.items.map((item) => (
                <div key={item.sku} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="relative aspect-[4/3] bg-gray-50">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={`${item.sku} – ${item.name}`}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center text-gray-300 text-sm">
                        Photo coming soon
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[var(--color-muted)] font-mono mb-0.5">{item.sku}</p>
                    <h3 className="font-semibold text-[var(--color-text)] text-sm leading-snug">{item.name}</h3>
                    <p className="mt-1 text-xs text-[var(--color-muted)]">{item.dimensions}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-12 px-4 bg-[var(--color-brand-green)] text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-bold">Not sure which cabinet is right for you?</h2>
          <p className="mt-2 text-sm text-white/80">
            Visit our Redford Township showroom to see samples in person, or contact us and we&apos;ll walk you through the options.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/project-builder" className="rounded bg-[var(--color-brand-dark)] px-6 py-3 text-sm font-semibold text-white hover:bg-black transition-colors">
              Build Your Project
            </Link>
            <Link href="/contact" className="rounded border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
