# KOM Building Materials — Master Website Blueprint

> This document is the product requirements document (PRD) and business blueprint for the custom KOM website. It explains not only what to build, but why each feature exists, how it supports sales, and how it should evolve over time.

---

## 1. Business Mission

KOM is an online showroom backed by a physical showroom. The website is not an e-commerce store. Its purpose is to educate visitors, build trust, help them explore products, generate rough project estimates, and convert them into qualified quote requests.

## 2. Primary Success Metric

The primary KPI is **qualified quote requests**. Secondary KPIs include Project Builder completions, contact form submissions, phone calls, showroom appointments, and Google reviews.

## 3. Target Customers

Homeowners, remodelers, contractors, builders, investors, property managers, and DIY customers. Design every experience to work for someone who has little product knowledge.

## 4. Brand Positioning

Professional, transparent, educational, veteran-owned, premium products at competitive prices, personal guidance, no high-pressure sales.

## 5. Homepage

Within five seconds the visitor should understand: what KOM sells, why KOM is different, and what action to take.

Required homepage sections:
- Hero image
- Value proposition
- Four product categories
- Financing
- Reviews
- About preview
- Prominent "Build Your Project" button

## 6. Navigation

Keep navigation simple: **Home, Cabinets, Countertops, LVP Flooring, Hardwood Flooring, Financing, About, Contact.**

Sticky header and persistent quote button.

## 7. Project Builder

One universal project builder. Customers combine cabinets, countertops, flooring, trim and accessories in one estimate. Running totals update live. No checkout. Final action is **"Request Official Quote"**. Save every selected product with the lead.

## 8. Lead Capture

- **Required:** Name, phone, email, project address
- **Optional:** Company, timeline, measurements, uploads, notes, preferred contact method
- Phase 1: email leads
- Phase 2: push to Housecall Pro

## 9. Product Data

Use a dedicated product database instead of QuickBooks. Fields: SKU, category, name, manufacturer, description, dimensions, image, price, status, lead time, notes.

## 10. Mobile First

Assume most visitors arrive from Facebook or Google on a phone. Every feature should be usable with one hand and minimal scrolling.

## 11. Copywriting

Use plain English. Focus on benefits rather than technical jargon. Explain soft-close hinges, dovetail drawers, plywood construction, waterproof flooring, and quartz advantages.

## 12. SEO

Each category receives its own optimized landing page. Create educational content answering common questions customers ask before buying.

## 13. Technology

Recommended stack: Next.js + React frontend, PostgreSQL database, cloud object storage, Google Maps API, Google Analytics, Housecall Pro integration.

## 14. Tool Recommendations

| Feature | #1 (Best) | #2 | #3 |
|---|---|---|---|
| Project Builder | Custom React Builder | FormKit | Builder.io |
| 3D Kitchen | Custom planner | Planner5D | Floorplanner |
| Flooring Visualizer | Manufacturer visualizers + QR links (Phase 1) | — | — |

## 15. Phase 2 Vision

- Customer project saving
- AI kitchen assistant
- Upload room photos for cabinet suggestions
- Countertop estimator
- Advanced visualizers
- Analytics dashboard
- Customer portal
- Commercial portal

## 16. Business Information

| | |
|---|---|
| **Company** | KOM Building Materials |
| **Showroom** | 15497 Beech Daly Road, Redford Township, MI 48239 |
| **Phone** | (313) 559-1888 |
| **Email** | Jordan@KOM-USA.com |
| **Positioning** | Service-Disabled Veteran-Owned Small Business (SDVOSB) |

## 17. Editable Content (No-Code Updates)

Developer should build editable sections for: About Us, financing partner, showroom hours, testimonials, gallery, and FAQs — so content can be updated without code changes.

## 18. Acceptance Criteria

- Loads quickly
- Intuitive with minimal clicks
- Fully responsive
- Supports future AI features
- Pricing updates require no developer involvement

---

## Final Guidance

Build this as the **digital foundation of KOM**, not simply a marketing website. Every design decision should reduce friction, build trust, educate the customer, and move them toward requesting an official quote. Architecture should anticipate future AI features, commercial expansion, and additional product categories without requiring a rebuild.
