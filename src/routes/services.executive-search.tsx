import { createFileRoute } from "@tanstack/react-router";
import LandingTemplate from "@/components/landing-template";
import { executiveSearchConfig } from "@/components/landing-configs";

const title = "Executive Search Firm in India | Elite HR Services";
const description =
  "Retained, confidential executive search for CXO, VP and board-level mandates across India. Senior-partner-led delivery, referenced shortlists, boutique attention.";

export const Route = createFileRoute("/services/executive-search")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "executive search India, CXO hiring, leadership recruitment, retained search firm, board level hiring, senior executive hiring India",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/executive-search" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/executive-search" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Executive Search",
          provider: { "@type": "Organization", name: "Elite HR Services" },
          areaServed: "IN",
          description,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
            { "@type": "ListItem", position: 3, name: "Executive Search", item: "/services/executive-search" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: executiveSearchConfig.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: () => <LandingTemplate config={executiveSearchConfig} />,
});
