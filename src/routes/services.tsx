import { createFileRoute } from "@tanstack/react-router";
import ServicesLanding from "@/components/services-landing";

const title = "HR & Staffing Services India | Elite HR Services";
const description =
  "Permanent staffing, executive search, IT staffing and remote hiring — pan-India recruitment solutions built around speed and fit.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesLanding,
});
