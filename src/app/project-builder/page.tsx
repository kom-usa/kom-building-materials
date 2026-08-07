import type { Metadata } from "next";
import ProjectEstimator from "@/components/ProjectEstimator";
import type { Product } from "@/types/product";
import lvpData from "@/data/lvp-flooring.json";
import hardwoodData from "@/data/hardwood-flooring.json";
import cabinetsData from "@/data/cabinets.json";
import countertopsData from "@/data/countertops.json";

export const metadata: Metadata = {
  title: "Project Estimator",
  description:
    "Build your project estimate — cabinets, countertops, LVP, and hardwood flooring in one place. See a running total and request an official quote. No checkout, no pressure.",
};

export default function ProjectBuilderPage() {
  const lvp = lvpData as Product[];
  const hardwood = hardwoodData as Product[];
  const cabinets = cabinetsData as Product[];
  const countertops = countertopsData as Product[];

  return (
    <>
      <section className="bg-[var(--color-brand-green)] text-white py-14 px-4">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm text-[var(--color-brand-dark)] font-semibold mb-2">Tools</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Project Estimator</h1>
          <p className="mt-4 text-white/80 text-base leading-relaxed max-w-2xl">
            Select cabinets, flooring, and countertops — see a live running total as you build your project.
            When you&apos;re ready, request an official quote and we&apos;ll confirm pricing with our vendors.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-background)] min-h-screen">
        <ProjectEstimator
          lvpProducts={lvp.filter((p) => p.price > 0)}
          hardwoodProducts={hardwood}
          cabinetCatalog={cabinets[0]}
          countertopProducts={countertops}
        />
      </section>
    </>
  );
}
