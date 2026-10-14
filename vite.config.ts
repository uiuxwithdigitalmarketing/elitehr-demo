// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GITHUB_PAGES=true (set by .github/workflows/deploy.yml) produces a fully static,
// prerendered build in dist/client for GitHub Pages, served under /elitehr-demo/.
// Lovable builds are unaffected.
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const BASE_PATH = "/elitehr-demo";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isGitHubPages && {
      router: { basepath: BASE_PATH },
      prerender: { enabled: true, crawlLinks: true, failOnError: false },
      pages: [{ path: "/sitemap.xml" }],
    }),
  },
  ...(isGitHubPages && {
    nitro: false as const,
    vite: { base: `${BASE_PATH}/`, preview: { host: "127.0.0.1" } },
  }),
});
