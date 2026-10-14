// Prefixes root-relative links with the site's base path (e.g. "/elitehr-demo"
// on GitHub Pages). Returns other links (#hash, https://, tel:, mailto:) unchanged.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBase(href: string): string;
export function withBase(href: string | undefined): string | undefined;
export function withBase(href: string | undefined) {
  if (!href || !href.startsWith("/") || href.startsWith("//")) return href;
  if (BASE && (href === BASE || href.startsWith(BASE + "/"))) return href;
  return BASE + href;
}
