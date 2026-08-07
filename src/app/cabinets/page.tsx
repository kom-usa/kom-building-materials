import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";
import cabinetsData from "@/data/cabinets.json";

export const metadata: Metadata = {
  title: "Kitchen Cabinets",
  description:
    "Mercury White Full Overlay Shaker cabinets — in stock. Wall, base, pantry, and specialty cabinets available in a full range of sizes. Contact us for pricing.",
};

const cabinets = cabinetsData as Product[];
const catalog = cabinets[0];

const features = [
  { heading: "Soft-Close Hinges", body: "6-way adjustable soft-close hinges standard on every door — closes quietly every time." },
  { heading: "Plywood Box", body: "¾\" plywood construction — not particle board — handles heavy cookware without sagging." },
  { heading: "Solid Wood Frame", body: "Solid wood face frame with HDF center panel doors for a clean, durable finish." },
  { heading: "Full Overlay Shaker", body: "Modern full overlay Shaker style covers the face frame for a sleek, seamless look." },
];

const sections = ["Wall Cabinets", "Base Cabinets", "Pantry Cabinets", "Accessories"];

export default function CabinetsPage() {
  const groupsBySection = sections.map((section) => ({
    section,
    groups: catalog.cabinetGroups?.filter((g) => g.section === section) ?? [],
  }));

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
            href="/contact"
            className="mt-6 inline-block rounded bg-[var(--color-brand-dark)] px-6 py-3 text-sm font-semibold text-white hover:bg-black transition-colors"
          >
            Request Pricing →
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

      {/* Cabinet sections */}
      {groupsBySection.map(({ section, groups }, si) => (
        groups.length === 0 ? null : (
          <section
            key={section}
            className={`py-14 px-4 border-t border-gray-100 ${si % 2 === 0 ? "bg-[var(--color-background)]" : "bg-white"}`}
          >
            <div className="mx-auto max-w-7xl">
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-1">{section}</h2>
              <p className="text-sm text-[var(--color-muted)] mb-8">Mercury White · Full Overlay Shaker · In Stock</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {groups.map((group) => (
                  <div key={group.group} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                    {/* Group image */}
                    <div className="relative aspect-[4/3] bg-gray-50">
                      {group.image ? (
                        <Image
                          src={group.image}
                          alt={`${section} – ${group.group}`}
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="h-full flex items-center justify-center text-gray-300 text-sm">
                          Photo coming soon
                        </div>
                      )}
                    </div>

                    {/* Group info + size table */}
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-semibold text-[var(--color-text)] text-base mb-3">{group.group}</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b border-gray-100">
                              <th className="text-left py-1.5 pr-4 font-semibold text-[var(--color-muted)] uppercase tracking-wide">SKU</th>
                              <th className="text-left py-1.5 font-semibold text-[var(--color-muted)] uppercase tracking-wide">Dimensions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {group.items.map((item, idx) => (
                              <tr
                                key={item.sku}
                                className={`border-b border-gray-50 ${idx % 2 === 0 ? "" : "bg-gray-50/50"}`}
                              >
                                <td className="py-1.5 pr-4 font-mono text-[var(--color-text)] whitespace-nowrap">{item.sku}</td>
                                <td className="py-1.5 text-[var(--color-muted)]">{item.dimensions}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      ))}

      {/* CTA */}
      <section className="py-12 px-4 bg-[var(--color-brand-green)] text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-bold">Ready to get started?</h2>
          <p className="mt-2 text-sm text-white/80">
            Visit our Redford Township showroom to see the Mercury White finish in person, or contact us for pricing on individual units.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="rounded bg-[var(--color-brand-dark)] px-6 py-3 text-sm font-semibold text-white hover:bg-black transition-colors">
              Request Pricing
            </Link>
            <Link href="/project-builder" className="rounded border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              Project Builder
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
