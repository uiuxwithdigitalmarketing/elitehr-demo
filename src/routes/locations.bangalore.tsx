import { createFileRoute } from "@tanstack/react-router";
import LandingTemplate from "@/components/landing-template";
import { bangaloreConfig } from "@/components/landing-configs";

const title = "Recruitment Agency in Bangalore | Elite HR Services";
const description =
  "Senior-led recruitment agency in Bangalore for tech, product, GCC and leadership hires. Sharp shortlists, low back-outs, boutique attention across India's tech capital.";

export const Route = createFileRoute("/locations/bangalore")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "recruitment agency Bangalore, hiring agency Bengaluru, IT recruitment Bangalore, executive search Bangalore, GCC hiring Bangalore, tech recruitment Karnataka",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/locations/bangalore" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/locations/bangalore" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Elite HR Services — Bangalore",
          description,
          areaServed: ["Bangalore", "Bengaluru", "Karnataka", "India"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },
          url: "/locations/bangalore",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "/locations/bangalore" },
            { "@type": "ListItem", position: 3, name: "Bangalore", item: "/locations/bangalore" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: bangaloreConfig.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: () => <LandingTemplate config={bangaloreConfig} />,
});
