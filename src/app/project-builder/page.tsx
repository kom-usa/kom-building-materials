import type { Metadata } from "next";
import ProjectEstimator from "@/components/ProjectEstimator";
import { KITCHEN_DESIGNER } from "@/data/designer";
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

      {/*
        The 3D designer, offered as the other way in — for a customer who does
        not yet know what they want. Deliberately ABOVE the estimator and
        deliberately secondary to it: the estimator is the faster path for
        someone who does, and it is the one that delivers a quote today.

        ⚠️ It renders whether or not the designer is reachable. With no URL set
        the button leads to our own /kitchen-designer coming-soon page, which
        points back at the estimator below. See `data/designer.ts`.
      */}
      <section className="bg-[var(--color-background)] px-4 pt-10">
          <div className="mx-auto max-w-4xl rounded border-2 border-[var(--color-brand-dark)] bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              {KITCHEN_DESIGNER.heading}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed opacity-80">
              {KITCHEN_DESIGNER.body}
            </p>
            {/*
              Points at OUR address, not the designer's, so the day it moves to
              a Business-workspace Site nothing published here has to change.
            */}
            <a
              href="/kitchen-designer"
              target="_blank"
              // noreferrer as well as noopener: the hop lands on a third-party
              // host with no business knowing which page of ours sent them.
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded bg-[var(--color-brand-green)] px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-[var(--color-brand-green-dark)]"
            >
              {KITCHEN_DESIGNER.button}
              {/*
                The icon-free way to say "this leaves the site". Sighted users
                get the new tab itself as the signal; without this a
                screen-reader user gets no warning before their context changes.
              */}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <p className="mt-3 text-sm opacity-70">{KITCHEN_DESIGNER.note}</p>
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
