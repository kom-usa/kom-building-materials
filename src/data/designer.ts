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
 * ✅ **Michael approved publication on 11 Sep.**
 * ⚠️ **Jordan has not made the Site public yet.** He said he would do it that
 * evening. A signed-out request returned **401, `Sign in required`**, on 11 Sep.
 * Approval is not publication, and only the Site's owner can publish it.
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
 * **The block renders whether or not the designer is reachable.** With no URL
 * set it leads to our own `/kitchen-designer` coming-soon page, which says what
 * is coming and points at the estimator that works today. Hiding it would mean
 * nobody learns the tool exists, and would make publication a code change
 * rather than a value change.
 */
export const KITCHEN_DESIGNER = {
  /**
   * Public URL of the designer, or null while it is unavailable.
   *
   * ⚠️ **Null is a supported state, not a broken one.** The block still renders
   * and `/kitchen-designer` serves the coming-soon page instead of redirecting.
   * Replacing null with the verified public URL is the whole change: the same
   * route then issues a 307 and nothing else moves.
   *
   * ⚠️ **Only ever a URL that has been checked signed-out.** A private Site
   * returns an OpenAI "Sign in required" page, and sending a customer there is
   * strictly worse than telling them it is coming.
   */
  url: null as string | null,

  heading: "Plan your kitchen in 3D",
  body: "Build a kitchen layout, choose materials, and see an estimated material cost before you request a full project quote.",
  button: "Start the 3D kitchen estimator",

  /*
   * ⚠️ **Nothing here may claim a design is sent to us.** Where the designer's
   * quote requests land is unresolved — they are written to its own database
   * and only forwarded if a webhook is configured. The Project Estimator below
   * it does deliver; the designer's path is KOM's to finish first.
   */
  note: "Material estimate only. Labor and installation are quoted separately.",
} as const;
