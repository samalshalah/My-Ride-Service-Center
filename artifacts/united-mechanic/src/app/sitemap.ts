import type { MetadataRoute } from "next";
import { ALL_SERVICES } from "@/data/services";
import { SEO_LANDING_PAGES } from "@/data/seoLandingPages";

export const dynamic = "force-static";

const BASE = "https://myrideservicecenter.com";
const LAST_MODIFIED = new Date("2026-07-07T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/auto-repair/`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/body-shop/`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/dealership-service-program/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/about/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/appointment/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/privacy-policy/`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = ALL_SERVICES.map((service) => ({
    url: `${BASE}/${service.category}/${service.slug}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const seoLandingRoutes: MetadataRoute.Sitemap = SEO_LANDING_PAGES.map((page) => ({
    url: `${BASE}/${page.slug}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...seoLandingRoutes, ...serviceRoutes];
}
