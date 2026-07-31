import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://screwthemiddleman.com";
  const routes = [
    { url: "/", priority: 1.0 },
    { url: "/cabinets", priority: 0.9 },
    { url: "/countertops", priority: 0.9 },
    { url: "/lvp-flooring", priority: 0.9 },
    { url: "/hardwood-flooring", priority: 0.9 },
    { url: "/financing", priority: 0.7 },
    { url: "/about", priority: 0.6 },
    { url: "/contact", priority: 0.8 },
    { url: "/project-builder", priority: 0.8 },
  ];

  return routes.map(({ url, priority }) => ({
    url: `${base}${url}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));
}
