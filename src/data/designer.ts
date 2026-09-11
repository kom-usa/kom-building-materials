/**
 * The 3D kitchen designer, and how screwthemiddleman.com points at it.
 *
 * Jordan built it — `kom-usa/KOM-3D-Kitchen-Designer`. It is **not** a Next app
 * this repo can host: the toolchain is `vinext` with an `.openai/hosting.json`
 * binding a D1 `DB`, so it runs as a ChatGPT Site. Porting it onto this stack
 * is a rebuild, not a deploy, and that is a later decision.
 *
 * **This site keeps BOTH tools** (Ovidiu, 11 Sep). The list estimator at
 * `/project-builder` is for a customer who knows what they want; the 3D
 * designer is for one who does not. The designer does not replace it.
 *
 * ⚠️ **`BLUEPRINT.md` §7 says "One universal project builder."** Offering a
 * second way in is a deliberate departure from that line, not an oversight.
 * The risk it creates is two quote paths and two catalogs — the designer
 * carries its own 208 SKUs in D1, priced from `Jordan Cabinet Prices.xlsx`,
 * which is the same source as this site's product JSON. **Quote intake is the
 * thing to keep an eye on**: a lead that arrives through the designer does not
 * currently land where a `/project-builder` lead lands.
 *
 * ⚠️ **`url` is null because the Site is not public yet.** Michael approved
 * public access on 11 Sep, but approval is not publication — a request from
 * outside returned **401** on 11 Sep, so only its owner can open it. Jordan has
 * to publish it.
 *
 * The destination once he does:
 * `https://screw-middleman-kitchen-designer.jpetrovich290.chatgpt.site`
 *
 * ⚠️ **That is a PERSONAL account** — `jpetrovich290@gmail.com`, not a KOM one.
 * `READ_ME_FIRST.md` in that repo says the intended home is a Site owned by the
 * KOM Business workspace, which will be a different URL again. That is why
 * every published link points at `/kitchen-designer` on our own domain rather
 * than at the Site: when it moves, one line changes and every link already in
 * the wild keeps working.
 *
 * **Nothing renders while this is null.** A button that fails after the click,
 * where the customer has already committed, is worse than no button.
 */
export const KITCHEN_DESIGNER = {
  /** Public URL of the designer. Null until the Site is actually public. */
  url: null as string | null,

  heading: "Prefer to see it in 3D?",
  body: "Lay out your kitchen — cabinets, counters and appliances — and see the materials priced as you go. The estimator below is faster if you already know what you want.",
  button: "Open the 3D kitchen designer",
  note: "An estimate for materials, not a quote for the finished job.",
} as const;

/** Whether the designer is ready to be offered to customers. */
export function designerIsLive(): boolean {
  return KITCHEN_DESIGNER.url !== null;
}
