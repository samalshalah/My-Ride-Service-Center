import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "out");
const origin = "https://myrideservicecenter.com";
const hosted = process.argv[2];
const sitemap = readFileSync(path.join(out, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const rules = readFileSync(path.join(out, "_redirects"), "utf8")
  .split(/\r?\n/).filter((line) => line.trim() && !line.startsWith("#"))
  .map((line) => line.trim().split(/\s+/));
assert.equal(urls.length, 25, "Expected 25 retained sitemap pages");
assert.equal(rules.length, 12, "Expected both URL forms for six redirects");
assert.equal(new Set(urls).size, urls.length, "Duplicate sitemap URLs");

for (const url of urls) {
  const route = new URL(url).pathname;
  const html = readFileSync(path.join(out, route, "index.html"), "utf8");
  assert.ok(html.includes(`<link rel="canonical" href="${url}"`), `Canonical: ${route}`);
  for (const [source] of rules) {
    assert.ok(!html.includes(`href="${source}"`), `Stale link ${source} on ${route}`);
  }
}

for (const [source, target, status] of rules) {
  assert.equal(status, "301");
  assert.ok(urls.includes(origin + target), `Target missing from sitemap: ${target}`);
  assert.ok(!urls.includes(origin + source), `Retired URL in sitemap: ${source}`);
  assert.ok(!existsSync(path.join(out, source, "index.html")), `Retired HTML still exported: ${source}`);
  if (hosted) {
    const url = new URL(source + "?utm_source=redirect-check", hosted);
    const response = await fetch(url, { redirect: "manual" });
    assert.equal(response.status, 301, `Redirect status: ${source}`);
    const location = new URL(response.headers.get("location"), url);
    assert.equal(location.pathname, target, `Redirect target: ${source}`);
    assert.equal(location.searchParams.get("utm_source"), "redirect-check", `Lost query: ${source}`);
    const destination = await fetch(location, { redirect: "manual" });
    assert.equal(destination.status, 200, `Destination or redirect chain: ${source}`);
    assert.ok(!(destination.headers.get("x-robots-tag") ?? "").includes("noindex") || !hosted.includes("myrideservicecenter.com"));
    const html = await destination.text();
    assert.ok(html.includes(`<link rel="canonical" href="${origin + target}"`));
  }
}
console.log(`Consolidation checks passed: ${urls.length} pages, ${rules.length} redirect forms${hosted ? ` on ${hosted}` : " in static export"}.`);
