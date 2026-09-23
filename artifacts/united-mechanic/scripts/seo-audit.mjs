import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "out");
const siteUrl = "https://myrideservicecenter.com";

const requiredRoutes = [
  { path: "/", titleIncludes: "My Ride Service Center", canonical: `${siteUrl}/` },
  { path: "/auto-repair/", titleIncludes: "Auto Repair in Fredericksburg, VA", canonical: `${siteUrl}/auto-repair/` },
  { path: "/body-shop/", titleIncludes: "Body Shop in Fredericksburg, VA", canonical: `${siteUrl}/body-shop/` },
  { path: "/collision-repair-fredericksburg-va/", titleIncludes: "Collision Repair Fredericksburg VA", canonical: `${siteUrl}/collision-repair-fredericksburg-va/` },
  { path: "/dealership-service-program/", titleIncludes: "Dealership Service Program", canonical: `${siteUrl}/dealership-service-program/` },
  { path: "/about/", titleIncludes: "About My Ride Service Center", canonical: `${siteUrl}/about/` },
  { path: "/contact/", titleIncludes: "Contact My Ride Service Center", canonical: `${siteUrl}/contact/` },
  { path: "/appointment/", titleIncludes: "Book an Appointment", canonical: `${siteUrl}/appointment/` },
  { path: "/privacy-policy/", titleIncludes: "Privacy Policy", canonical: `${siteUrl}/privacy-policy/` },
];

const failures = [];

function routeFile(routePath) {
  if (routePath === "/") return path.join(outDir, "index.html");
  return path.join(outDir, routePath.replace(/^\/|\/$/g, ""), "index.html");
}

function readText(file) {
  return readFileSync(file, "utf8");
}

function match(html, pattern) {
  return pattern.test(html);
}

for (const route of requiredRoutes) {
  const file = routeFile(route.path);
  if (!existsSync(file)) {
    failures.push(`${route.path} is missing from static export`);
    continue;
  }

  const html = readText(file);
  if (!html.includes(`<title>${route.titleIncludes}`) && !html.includes(`<title>${route.titleIncludes.replaceAll("&", "&amp;")}`)) {
    failures.push(`${route.path} title does not include "${route.titleIncludes}"`);
  }
  if (!match(html, /<meta name="description" content="[^"]{80,180}"/)) {
    failures.push(`${route.path} is missing a useful meta description`);
  }
  if (!html.includes(`<link rel="canonical" href="${route.canonical}"`)) {
    failures.push(`${route.path} canonical does not point to ${route.canonical}`);
  }
  if (html.includes("static-mobile-panel")) {
    failures.push(`${route.path} contains stale static mobile navigation markup`);
  }
  if (!html.includes("/_next/static/chunks/")) {
    failures.push(`${route.path} is missing Next.js client script references`);
  }
  if (html.includes("myrideserivcecenter.com")) {
    failures.push(`${route.path} contains misspelled domain myrideserivcecenter.com`);
  }
  if (route.path.includes("fredericksburg-va") && !html.includes('"@type":"Service"')) {
    failures.push(`${route.path} is missing Service structured data`);
  }
}

const homeFile = routeFile("/");
if (existsSync(homeFile)) {
  const home = readText(homeFile);
  if (!home.includes('"@type":["LocalBusiness","AutoRepair","AutoBodyShop"]')) {
    failures.push("homepage is missing LocalBusiness/AutoRepair/AutoBodyShop structured data");
  }
  if (!home.includes('"@type":"WebSite"')) {
    failures.push("homepage is missing WebSite structured data");
  }
}

const sitemapFile = path.join(outDir, "sitemap.xml");
if (!existsSync(sitemapFile)) {
  failures.push("sitemap.xml is missing");
} else {
  const sitemap = readText(sitemapFile);
  for (const route of requiredRoutes) {
    const url = route.canonical;
    if (!sitemap.includes(`<loc>${url}</loc>`)) {
      failures.push(`sitemap.xml is missing ${url}`);
    }
  }
  if (sitemap.includes("myrideserivcecenter.com")) {
    failures.push("sitemap.xml contains misspelled domain myrideserivcecenter.com");
  }
}

const robotsFile = path.join(outDir, "robots.txt");
if (!existsSync(robotsFile)) {
  failures.push("robots.txt is missing");
} else {
  const robots = readText(robotsFile);
  if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) {
    failures.push("robots.txt does not reference the canonical sitemap");
  }
}

if (failures.length > 0) {
  console.error("SEO audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO audit passed for ${requiredRoutes.length} routes.`);
