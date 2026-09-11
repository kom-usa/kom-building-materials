import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { KITCHEN_DESIGNER } from "@/data/designer";

export const metadata: Metadata = {
  title: "Kitchen Designer",
  description:
    "Lay out a kitchen in 3D, price the materials, and send it to KOM Building Materials for a quote.",
  // Nothing to index: this page either forwards elsewhere or says "not yet".
  robots: { index: false, follow: false },
};

/**
 * The one KOM-owned address for Jordan's 3D kitchen designer.
 *
 * **Why a hop rather than linking at the planner directly.** It lives on a
 * ChatGPT Site, on a host this repo does not control, and it has already moved
 * once — from a personal account to the KOM workspace, within a day. Every link
 * this site publishes points here, and this file is the single place the real
 * destination is named, so the next move costs one line.
 *
 * ⚠️ **A temporary redirect, never a permanent one.** `redirect()` issues 307.
 * A 301 would be cached by browsers indefinitely and would strand customers on
 * a personal account's URL long after it had been replaced.
 *
 * ✅ **Live since 11 Sep**, on the **KOM workspace** Site rather than the
 * personal account everyone planned around — `kom-usa-0158.chatgpt.site`.
 * Verified by three signed-out requests returning 200.
 *
 * ⚠️ **This page cannot tell whether the planner is reachable**, only whether a
 * URL is configured. The personal Site was returning 401 minutes before the
 * workspace one went live, and a URL filled in at that moment would have failed
 * on the far side of this hop, on an OpenAI "Sign in required" page, where the
 * customer has already committed to the click. **Check any new URL signed out
 * before putting it in `data/designer.ts`.**
 *
 * The twin of this page lives in `kom-usa-platform`. Two sites, same pattern,
 * because the same designer serves both.
 */
export default function Page() {
  if (KITCHEN_DESIGNER.url) redirect(KITCHEN_DESIGNER.url);

  /*
   * "Not yet" as a real page rather than a 404. People reach this from a link
   * somebody sent them, so it has to say what the thing is and hand them the
   * route that works today — which here is the estimator that already exists.
   */
  return (
    <>
      <section className="bg-[var(--color-brand-green)] text-white py-14 px-4">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm text-[var(--color-brand-dark)] font-semibold mb-2">
            Tools
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            3D Kitchen Designer
          </h1>
          <p className="mt-4 text-white/80 text-base leading-relaxed max-w-2xl">
            Our 3D designer is still in testing and is not open to the public
            yet. The Project Estimator does the pricing today.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-background)] px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight">Not open yet</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed opacity-80">
            It lets you lay out cabinets, counters and appliances and see the
            materials priced as you go. Until it opens, build your estimate from
            the product list and send it to us for an official quote.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/project-builder"
              className="rounded bg-[var(--color-brand-green)] px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-[var(--color-brand-green-dark)]"
            >
              Use the Project Estimator
            </Link>
            <Link
              href="/contact"
              className="rounded border-2 border-[var(--color-brand-dark)] px-6 py-3 text-center font-semibold transition-colors hover:bg-[var(--color-brand-dark)] hover:text-white"
            >
              Ask us about your kitchen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
