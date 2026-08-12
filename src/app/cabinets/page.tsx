import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { Product, CabinetItem } from "@/types/product";
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

const sections = ["Wall Cabinets", "Base Cabinets", "Pantry Cabinets", "Accessories", "Specialty Cabinets", "Vanity Cabinets"];

const GROUP_LABELS: Record<string, string> = {
  "Wall Cabinets:1 Door":            "One-Door Wall Cabinet",
  "Wall Cabinets:2 Door":            "Two-Door Wall Cabinet",
  "Wall Cabinets:Bridge":            "Bridge Cabinet",
  "Base Cabinets:1 Door":            "One-Door Base Cabinet",
  "Base Cabinets:2 Door":            "Two-Door Base Cabinet",
  "Base Cabinets:Drawer Base":       "3-Drawer Base Cabinet",
  "Base Cabinets:Sink Base":         "Sink Base Cabinet",
  "Base Cabinets:Drawer + Door":     "Drawer & Door Base Cabinet",
  "Base Cabinets:Blind Corner":      "Blind Corner Base Cabinet",
  "Pantry Cabinets:Pantry":          "Full-Height Pantry Cabinet",
  "Accessories:Trash Pull-Out":      "Trash Pull-Out Cabinet",
  "Accessories:Fillers":             "Cabinet Fillers",
  "Accessories:Toe Kick":            "Toe Kick Strip",
  "Accessories:Refrigerator Panel":  "Refrigerator Panel",
  "Accessories:End Panels":          "End Panels",
  "Specialty Cabinets:Oven Cabinets":        "Oven Tower Cabinet",
  "Specialty Cabinets:Microwave Cabinet":    "Microwave Wall Cabinet",
  "Specialty Cabinets:Lazy Susan":           "Corner Lazy Susan",
  "Specialty Cabinets:Diagonal Sink Base":   "Diagonal Corner Sink Base",
  "Specialty Cabinets:Wall Blind Corner":    "Wall Blind Corner Cabinet",
  "Vanity Cabinets:Vanity Base":       "Vanity Base Cabinet",
  "Vanity Cabinets:Vanity Combination":"Vanity Combination Cabinet",
};

const GROUP_DESCRIPTIONS: Record<string, string> = {
  "Wall Cabinets:1 Door":            "Single-door upper cabinet, 12\" deep. Great for corners and narrow spaces.",
  "Wall Cabinets:2 Door":            "Two-door upper cabinet, 12\" deep. The standard choice for open runs above countertops.",
  "Wall Cabinets:Bridge":            "Shallow 18\" tall cabinet, 12\" deep. Fits above windows, range hoods, and appliances.",
  "Base Cabinets:1 Door":            "Single-door base with one adjustable shelf. 24\" deep, 34.5\" tall.",
  "Base Cabinets:2 Door":            "Two-door base with one adjustable shelf. 24\" deep, 34.5\" tall.",
  "Base Cabinets:Drawer Base":       "Three full-extension drawers. 24\" deep, 34.5\" tall. Ideal for pots, utensils, and tools.",
  "Base Cabinets:Sink Base":         "Open interior — no center shelf — designed for undermount or drop-in sink installation. 24\" deep, 34.5\" tall.",
  "Base Cabinets:Drawer + Door":     "One full-extension drawer above, one door below. 24\" deep, 34.5\" tall.",
  "Base Cabinets:Blind Corner":      "Corner base cabinet that maximizes awkward corner storage. 24\" deep, 34.5\" tall.",
  "Pantry Cabinets:Pantry":          "Full-height pantry with multiple adjustable shelves. 24\" deep. Great for bulk storage.",
  "Accessories:Trash Pull-Out":      "Base cabinet with an integrated pull-out trash bin system. 24\" deep, 34.5\" tall.",
  "Accessories:Fillers":             "Straight and fluted filler strips to close gaps between cabinets, walls, and appliances.",
  "Accessories:Toe Kick":            "Painted toe kick board, 8' long × 4.5\" tall. Finishes the base of any cabinet run.",
  "Accessories:Refrigerator Panel":  "Finished decorative panel for built-in refrigerator surround. 24\" deep × 96\" tall.",
  "Accessories:End Panels":          "Decorative finished panels for exposed cabinet sides — available in wall and base sizes.",
  "Specialty Cabinets:Oven Cabinets":        "Full-height tower designed for wall oven installation. 24\" deep. Available in 30\" and 33\" widths.",
  "Specialty Cabinets:Microwave Cabinet":    "Wall cabinet sized specifically for above-counter microwave installation. 30\"W × 18\"H × 18\"D.",
  "Specialty Cabinets:Lazy Susan":           "Corner base cabinet with rotating shelves for effortless corner access. Cabinet and hardware kit sold separately.",
  "Specialty Cabinets:Diagonal Sink Base":   "Angled corner base cabinet for diagonal sink placement in island or angled kitchen layouts.",
  "Specialty Cabinets:Wall Blind Corner":    "Upper corner cabinet spanning both walls to maximize corner storage.",
  "Vanity Cabinets:Vanity Base":       "Bathroom vanity base, 21\" deep × 34.5\" tall. Sized for standard bathroom sink installation.",
  "Vanity Cabinets:Vanity Combination":"Full-width bathroom vanity, 21\" deep × 34.5\" tall. Suitable for double-sink configurations.",
};

function getSizeDisplay(items: CabinetItem[]): { widths: string[]; heights: string[]; fullDims: string[] } {
  const firstHasStandardW = /^\d+"W/.test(items[0]?.dimensions ?? "");
  if (firstHasStandardW) {
    const widths = [...new Set(items.map((i) => {
      const m = i.dimensions.match(/^(\d+)"W/);
      return m ? `${m[1]}"` : "";
    }).filter(Boolean))];
    const heights = [...new Set(items.map((i) => {
      const m = i.dimensions.match(/× (\d+(?:\.\d+)?)"H/);
      return m ? `${m[1]}"` : "";
    }).filter(Boolean))];
    return { widths, heights, fullDims: [] };
  }
  return {
    widths: [],
    heights: [],
    fullDims: items.map((i) => i.dimensions.split(" — ")[0]),
  };
}

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
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/project-builder"
              className="inline-block rounded bg-[var(--color-brand-dark)] px-6 py-3 text-sm font-semibold text-white hover:bg-black transition-colors"
            >
              Build Your Estimate →
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded bg-white px-6 py-3 text-sm font-semibold text-[var(--color-brand-green)] hover:bg-gray-100 transition-colors"
            >
              Request Pricing
            </Link>
          </div>
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
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-[var(--color-text)]">{section}</h2>
                  <p className="text-sm text-[var(--color-muted)] mt-1">Mercury White · Full Overlay Shaker</p>
                </div>
                <Link
                  href="/project-builder"
                  className="shrink-0 rounded bg-[var(--color-brand-green)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-brand-dark)] transition-colors"
                >
                  Price in Estimator →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {groups.map((group) => {
                  const key = `${section}:${group.group}`;
                  const label = GROUP_LABELS[key] ?? group.group;
                  const description = GROUP_DESCRIPTIONS[key] ?? "";
                  const { widths, heights, fullDims } = getSizeDisplay(group.items);

                  return (
                    <div key={group.group} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                      {/* Group image */}
                      <div className="relative aspect-[4/3] bg-gray-50">
                        {group.image ? (
                          <Image
                            src={group.image}
                            alt={label}
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

                      {/* Info */}
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="font-semibold text-[var(--color-text)] text-base">{label}</h3>
                        {description && (
                          <p className="mt-1 text-xs text-[var(--color-muted)] leading-relaxed">{description}</p>
                        )}

                        {/* Available sizes */}
                        <div className="mt-3 flex-1">
                          {widths.length > 0 && (
                            <>
                              <p className="text-xs font-medium text-[var(--color-muted)] mb-1.5">Available widths:</p>
                              <div className="flex flex-wrap gap-1.5">
                                {widths.map((w) => (
                                  <span key={w} className="text-xs bg-gray-100 text-[var(--color-text)] px-2 py-1 rounded font-mono">{w}</span>
                                ))}
                              </div>
                              {heights.length > 1 && (
                                <p className="mt-1.5 text-xs text-[var(--color-muted)]">
                                  Heights: {heights.join(", ")}
                                </p>
                              )}
                            </>
                          )}
                          {fullDims.length > 0 && (
                            <>
                              <p className="text-xs font-medium text-[var(--color-muted)] mb-1.5">Available sizes:</p>
                              <div className="flex flex-wrap gap-1.5">
                                {fullDims.map((d, i) => (
                                  <span key={i} className="text-xs bg-gray-100 text-[var(--color-text)] px-2 py-1 rounded">{d}</span>
                                ))}
                              </div>
                            </>
                          )}
                        </div>

                        <Link
                          href="/project-builder"
                          className="mt-4 block text-center text-xs font-semibold text-[var(--color-brand-green)] border border-[var(--color-brand-green)] rounded py-2 hover:bg-[var(--color-brand-green)] hover:text-white transition-colors"
                        >
                          Select Size & Price →
                        </Link>
                      </div>
                    </div>
                  );
                })}
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
            Use the Project Estimator to pick your sizes and see pricing. Or visit our Redford Township showroom to see the Mercury White finish in person.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/project-builder" className="rounded bg-[var(--color-brand-dark)] px-6 py-3 text-sm font-semibold text-white hover:bg-black transition-colors">
              Build Your Estimate
            </Link>
            <Link href="/contact" className="rounded border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              Request Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
