import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach KOM Building Materials by phone, email, or visit our Redford Township showroom. (313) 559-1888 · Jordan@KOM-USA.com.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-brand-navy)] text-white py-14 px-4">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm text-[var(--color-brand-gold)] font-medium mb-2">Contact</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Get in Touch</h1>
          <p className="mt-4 text-white/80 text-base leading-relaxed max-w-2xl">
            Reach us by phone, email, or stop by the showroom. Bring your measurements, photos, and questions —
            we&apos;ll help you figure out the right products and put together an estimate.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-6">Showroom &amp; Contact</h2>
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-[var(--color-brand-navy)]">Address</dt>
                <dd className="mt-1 text-[var(--color-muted)]">
                  15497 Beech Daly Road<br />
                  Redford Township, MI 48239
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-brand-navy)]">Phone</dt>
                <dd className="mt-1">
                  <a href="tel:+13135591888" className="text-[var(--color-muted)] hover:text-[var(--color-brand-navy)] transition-colors">
                    (313) 559-1888
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-brand-navy)]">Email</dt>
                <dd className="mt-1">
                  <a href="mailto:Jordan@KOM-USA.com" className="text-[var(--color-muted)] hover:text-[var(--color-brand-navy)] transition-colors">
                    Jordan@KOM-USA.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-brand-navy)]">Showroom Hours</dt>
                <dd className="mt-1 text-[var(--color-muted)]">
                  {/* Update when hours are confirmed */}
                  Mon–Fri: 9am – 6pm<br />
                  Saturday: 10am – 4pm<br />
                  Sunday: Closed
                </dd>
              </div>
            </dl>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-6">Send Us a Message</h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[var(--color-text)] mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-brand-navy)] focus:ring-1 focus:ring-[var(--color-brand-navy)]"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-[var(--color-text)] mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-brand-navy)] focus:ring-1 focus:ring-[var(--color-brand-navy)]"
                    placeholder="(313) 555-0100"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-[var(--color-text)] mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-brand-navy)] focus:ring-1 focus:ring-[var(--color-brand-navy)]"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-xs font-medium text-[var(--color-text)] mb-1">
                  I&apos;m interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-brand-navy)] focus:ring-1 focus:ring-[var(--color-brand-navy)] bg-white"
                >
                  <option value="">Select a category</option>
                  <option>Cabinets</option>
                  <option>Countertops</option>
                  <option>LVP Flooring</option>
                  <option>Hardwood Flooring</option>
                  <option>Full Kitchen Package</option>
                  <option>Multiple / Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-[var(--color-text)] mb-1">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-brand-navy)] focus:ring-1 focus:ring-[var(--color-brand-navy)] resize-none"
                  placeholder="Room size, timeline, questions, anything helpful..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded bg-[var(--color-brand-gold)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-brand-gold-dark)] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
