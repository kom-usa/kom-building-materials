import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center py-24 px-4">
      <div className="text-center max-w-md">
        <p className="text-6xl font-black text-[var(--color-brand-green)]">404</p>
        <h1 className="mt-4 text-2xl font-bold text-[var(--color-text)]">Page not found</h1>
        <p className="mt-3 text-sm text-[var(--color-muted)]">
          This page doesn&apos;t exist. Try browsing our products or heading back home.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="rounded bg-[var(--color-brand-green)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-brand-green-dark)] transition-colors">
            Back to Home
          </Link>
          <Link href="/contact" className="rounded border border-gray-200 px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:bg-gray-50 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
