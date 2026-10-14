import { createFileRoute } from "@tanstack/react-router";
import LandingTemplate from "@/components/landing-template";
import { manufacturingConfig } from "@/components/landing-configs";

const title = "Manufacturing Recruitment Agency in India | Elite HR Services";
const description =
  "Boutique manufacturing recruitment across India — plant heads, quality, supply chain and engineering leadership. Senior-led mandates, fast shortlists, low back-outs.";

export const Route = createFileRoute("/industries/manufacturing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "manufacturing recruitment India, plant head hiring, quality engineer recruitment, supply chain hiring, industrial recruitment agency, factory hiring",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries/manufacturing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/industries/manufacturing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Manufacturing Recruitment",
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
            { "@type": "ListItem", position: 2, name: "Industries", item: "/industries/manufacturing" },
            { "@type": "ListItem", position: 3, name: "Manufacturing", item: "/industries/manufacturing" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: manufacturingConfig.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: () => <LandingTemplate config={manufacturingConfig} />,
});
