import Link from "next/link";

const categories = [
  { label: "Cabinets", href: "/cabinets" },
  { label: "Countertops", href: "/countertops" },
  { label: "LVP Flooring", href: "/lvp-flooring" },
  { label: "Hardwood Flooring", href: "/hardwood-flooring" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Financing", href: "/financing" },
  { label: "Contact", href: "/contact" },
  { label: "Build Your Project", href: "/project-builder" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-navy)] text-white/80 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-white font-bold text-lg tracking-tight">
              <span className="text-[var(--color-brand-gold)]">KOM</span> Building Materials
            </p>
            <p className="mt-3 text-sm leading-relaxed max-w-xs">
              An online showroom backed by a physical location in Redford Township.
              Professional guidance, premium products, competitive prices.
            </p>
            <p className="mt-3 text-xs font-medium text-[var(--color-brand-gold)]">
              Service-Disabled Veteran-Owned Small Business (SDVOSB)
            </p>
          </div>

          {/* Products */}
          <div>
            <p className="text-white text-sm font-semibold tracking-wide uppercase mb-4">Products</p>
            <ul className="space-y-2">
              {categories.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Contact */}
          <div>
            <p className="text-white text-sm font-semibold tracking-wide uppercase mb-4">Company</p>
            <ul className="space-y-2 mb-6">
              {company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <address className="not-italic text-sm space-y-1">
              <p>15497 Beech Daly Road</p>
              <p>Redford Township, MI 48239</p>
              <a href="tel:+13135591888" className="block hover:text-white transition-colors mt-2">
                (313) 559-1888
              </a>
              <a href="mailto:Jordan@KOM-USA.com" className="block hover:text-white transition-colors">
                Jordan@KOM-USA.com
              </a>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} KOM Building Materials. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
