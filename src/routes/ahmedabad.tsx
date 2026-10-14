import { createFileRoute } from "@tanstack/react-router";
import AhmedabadLanding from "@/components/ahmedabad-landing";

const title = "Recruitment Agency in Ahmedabad | Elite HR Services";
const description =
  "Based in Ahmedabad, hiring pan-India. Pre-screened candidates, fast turnaround, low back-out rates. Talk to Elite HR Services today.";

export const Route = createFileRoute("/ahmedabad")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "recruitment agency Ahmedabad, hiring agency Ahmedabad, staffing services Ahmedabad, HR consultancy Ahmedabad, executive search Ahmedabad, IT recruitment Ahmedabad, manufacturing hiring Gujarat",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ahmedabad" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/ahmedabad" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "/ahmedabad" },
            { "@type": "ListItem", position: 3, name: "Ahmedabad", item: "/ahmedabad" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do you only recruit for companies based in Ahmedabad?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Elite HR is Ahmedabad-based but works with clients across Gujarat and pan-India.",
              },
            },
            {
              "@type": "Question",
              name: "Which roles do you typically hire for in Ahmedabad?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Mid-management to senior and leadership hires across IT, manufacturing, BFSI, healthcare, engineering, retail and BPO/KPO.",
              },
            },
            {
              "@type": "Question",
              name: "How quickly can you send shortlisted candidates?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "For common role types, first shortlists usually go out within a few working days because we maintain live pipelines.",
              },
            },
            {
              "@type": "Question",
              name: "Do you handle notice period and joining follow-up?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — post-offer engagement, notice-period navigation and joining-day follow-up are part of every mandate.",
              },
            },
            {
              "@type": "Question",
              name: "Can you support hiring outside Gujarat once we start with you?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The same team expands to pan-India sourcing when a role needs it.",
              },
            },
            {
              "@type": "Question",
              name: "What makes Elite HR different from a large recruitment agency?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Boutique, senior-led mandates. We deliberately cap active mandates so every role gets senior attention.",
              },
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Elite HR Services — Ahmedabad",
          description,
          areaServed: ["Ahmedabad", "Gujarat", "India"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },
          url: "/ahmedabad",
        }),
      },
    ],
  }),
  component: AhmedabadLanding,
});
