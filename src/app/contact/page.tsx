"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fields, setFields] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/netlify-forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "contact", ...fields }).toString(),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-brand-green)] text-white py-14 px-4">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm text-[var(--color-brand-dark)] font-semibold mb-2">Contact</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Get in Touch</h1>
          <p className="mt-4 text-white/80 text-base leading-relaxed max-w-2xl">
            Reach us by phone, email, or stop by the showroom. Bring your measurements, photos, and
            questions — we&apos;ll help you figure out the right products and put together an estimate.
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
                <dt className="font-semibold text-[var(--color-brand-green)]">Address</dt>
                <dd className="mt-1 text-[var(--color-muted)]">
                  15497 Beech Daly Road<br />
                  Redford Township, MI 48239
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-brand-green)]">Phone</dt>
                <dd className="mt-1">
                  <a href="tel:+13135591888" className="text-[var(--color-muted)] hover:text-[var(--color-brand-green)] transition-colors">
                    (313) 559-1888
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-brand-green)]">Email</dt>
                <dd className="mt-1">
                  <a href="mailto:Jordan@KOM-USA.com" className="text-[var(--color-muted)] hover:text-[var(--color-brand-green)] transition-colors">
                    Jordan@KOM-USA.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-brand-green)]">Showroom Hours</dt>
                <dd className="mt-1 text-[var(--color-muted)]">
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

            {status === "success" ? (
              <div className="rounded-lg bg-green-50 border border-green-100 p-6 text-center">
                <p className="font-semibold text-green-800">Message sent!</p>
                <p className="mt-1 text-sm text-green-700">We&apos;ll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                      value={fields.name}
                      onChange={handleChange}
                      className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-brand-green)] focus:ring-1 focus:ring-[var(--color-brand-green)]"
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
                      value={fields.phone}
                      onChange={handleChange}
                      className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-brand-green)] focus:ring-1 focus:ring-[var(--color-brand-green)]"
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
                    value={fields.email}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-brand-green)] focus:ring-1 focus:ring-[var(--color-brand-green)]"
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
                    value={fields.interest}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-brand-green)] focus:ring-1 focus:ring-[var(--color-brand-green)] bg-white"
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
                    value={fields.message}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-brand-green)] focus:ring-1 focus:ring-[var(--color-brand-green)] resize-none"
                    placeholder="Room size, timeline, questions, anything helpful..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">Something went wrong — please try again or call us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded bg-[var(--color-brand-green)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-brand-green-dark)] transition-colors disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
