import { createFileRoute } from "@tanstack/react-router";
import ServicesLanding from "@/components/services-landing";

const title = "HR & Staffing Services India | Elite HR Services";
const description =
  "Permanent staffing, executive search, IT staffing and remote hiring — pan-India recruitment solutions built around speed and fit. Get in touch.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "staffing services India, recruitment services India, HR services India, hiring partner India, staffing agency India, executive search, IT staffing, contract staffing, remote staffing",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
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
              name: "Which industries does Elite HR serve?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Elite HR works across a broad range of sectors, from IT and BFSI to manufacturing, BPO/KPO, healthcare and several others.",
              },
            },
            {
              "@type": "Question",
              name: "What is your average turnaround time?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Turnaround varies by role complexity and seniority, but Elite HR maintains active candidate pipelines for most common role types, which keeps time-to-shortlist considerably faster.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer both permanent and contract staffing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Permanent Staffing and IT Staffing cover full-time hiring, while IT Contract Staffing covers project-based, fixed-term hiring.",
              },
            },
            {
              "@type": "Question",
              name: "Can you help with a single role, not a large hiring drive?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — single-role mandates are handled with the same screening rigour as larger hiring drives. No minimum volume requirement.",
              },
            },
            {
              "@type": "Question",
              name: "How is Elite HR different from a large recruitment firm?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Elite HR deliberately takes on a limited number of active mandates, allowing meaningfully more attention per role. It's a boutique, relationship-driven operation.",
              },
            },
            {
              "@type": "Question",
              name: "Do you work with companies outside Ahmedabad?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Elite HR sources and delivers candidates pan-India, not limited to Gujarat.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: ServicesLanding,
});
