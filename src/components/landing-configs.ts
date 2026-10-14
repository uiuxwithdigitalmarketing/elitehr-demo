import type { LandingConfig } from "@/components/landing-template";
import {
  Factory,
  HeartPulse,
  Cpu,
  Landmark,
  ShoppingBag,
  Wrench,
  Pill,
  Truck,
  Building2,
  MapPin,
  Users,
  Clock,
  Zap,
  ShieldCheck,
  Handshake,
  Globe2,
  UserSearch,
  ClipboardList,
  Search,
  UserCheck,
  ListChecks,
  PartyPopper,
  Briefcase,
  TrendingUp,
  AlertTriangle,
  Target,
  Layers,
  Award,
  Sparkles,
  Network,
  Code2,
} from "lucide-react";

import indIt from "@/assets/industry-it.jpg";
import indMfg from "@/assets/industry-manufacturing.jpg";
import indHealth from "@/assets/industry-healthcare.jpg";
import indBfsi from "@/assets/industry-bfsi.jpg";
import indRetail from "@/assets/industry-retail.jpg";
import indEng from "@/assets/industry-engineering.jpg";
import ahmHero from "@/assets/ahmedabad-hero.jpg";
import ahmLocal from "@/assets/ahmedabad-local.jpg";
import ahmChal from "@/assets/ahmedabad-challenge.jpg";
import heroImg from "@/assets/hero-hr.jpg";
import svcExec from "@/assets/service-executive.jpg";
import svcPerm from "@/assets/service-permanent.jpg";
import svcIt from "@/assets/service-it.jpg";
import svcContract from "@/assets/service-contract.jpg";
import svcRemote from "@/assets/service-remote.jpg";
import hiringChal from "@/assets/hiring-challenge.jpg";

const commonProcess = {
  heading: "How we deliver, from brief to joining day",
  steps: [
    { icon: ClipboardList, title: "Discovery", body: "Deep-brief with the hiring manager." },
    { icon: Search, title: "Market Mapping", body: "Live pipeline + targeted outreach." },
    { icon: UserSearch, title: "Sourcing", body: "Referrals, network, direct approach." },
    { icon: UserCheck, title: "Screening", body: "Skill, culture, intent, notice check." },
    { icon: ListChecks, title: "Shortlist", body: "3–5 sharp profiles per role." },
    { icon: Handshake, title: "Interviews", body: "Coordination, feedback loops." },
    { icon: Award, title: "Offer", body: "Negotiation + counter-offer defence." },
    { icon: PartyPopper, title: "Joining", body: "Notice-period + Day-1 follow-up." },
  ],
};

const commonWhy = {
  heading: "Boutique attention, pan-India reach",
  items: [
    { icon: MapPin, title: "Local expertise", body: "Ahmedabad-headquartered with strong regional networks." },
    { icon: Globe2, title: "Pan-India hiring", body: "Delivery across 15+ cities on the same mandate." },
    { icon: Zap, title: "Fast turnaround", body: "First shortlist in days, not weeks." },
    { icon: ShieldCheck, title: "Low back-out", body: "Post-offer engagement lowers joining risk." },
    { icon: UserCheck, title: "Pre-screened talent", body: "Every profile is vetted before it reaches you." },
    { icon: Users, title: "Dedicated consultant", body: "One senior owner per mandate — no handoffs." },
    { icon: Award, title: "High retention", body: "Fit-first shortlisting means candidates stay." },
    { icon: Network, title: "Strong network", body: "Deep referral chains across industries." },
  ],
};

const commonStats = [
  { value: 1000, suffix: "+", label: "Placements" },
  { value: 500, suffix: "+", label: "Clients" },
  { value: 95, suffix: "%", label: "Retention" },
  { value: 15, suffix: "+", label: "Cities" },
];

const commonTestimonials = [
  {
    quote: "Elite HR closed two leadership hires that had been open with three other firms for months.",
    name: "Head of HR",
    role: "Manufacturing group, Gujarat",
  },
  {
    quote: "Senior consultants who actually know the market. First shortlist landed in four working days.",
    name: "VP Engineering",
    role: "Fintech, Bengaluru",
  },
  {
    quote: "Zero back-outs across our last eight offers. That alone changed how we plan hiring.",
    name: "Talent Director",
    role: "Healthcare chain, Pan-India",
  },
];

const commonFaqs = [
  {
    q: "How quickly can you send shortlists?",
    a: "For common mandates, first shortlists usually go out within 3–5 working days because we maintain live pipelines by function.",
  },
  {
    q: "Do you handle notice-period and joining follow-up?",
    a: "Yes — post-offer engagement, notice-period navigation and joining-day follow-up are part of every mandate at no extra cost.",
  },
  {
    q: "What is your typical fee structure?",
    a: "Standard success-based fee, invoiced only on joining. Retained models are available for confidential or senior mandates.",
  },
  {
    q: "How many mandates does one consultant handle?",
    a: "We deliberately cap active mandates per consultant so every role receives senior, hands-on attention.",
  },
];

const relatedCities = {
  title: "Locations",
  links: [
    { title: "Ahmedabad", href: "/locations/ahmedabad" },
    { title: "Mumbai", href: "/locations/mumbai" },
    { title: "Bangalore", href: "/locations/bangalore" },
    { title: "Pune", href: "/locations/pune" },
    { title: "Hyderabad", href: "/locations/hyderabad" },
  ],
};
const relatedServices = {
  title: "Services",
  links: [
    { title: "Permanent Staffing", href: "/services" },
    { title: "Executive Search", href: "/services/executive-search" },
    { title: "IT Staffing", href: "/services" },
    { title: "Remote Hiring", href: "/services" },
  ],
};
const relatedIndustries = {
  title: "Industries",
  links: [
    { title: "Manufacturing", href: "/industries/manufacturing" },
    { title: "Healthcare", href: "/industries/healthcare" },
    { title: "IT & Technology", href: "/industries/it" },
    { title: "BFSI", href: "/industries/bfsi" },
    { title: "Retail", href: "/industries/retail" },
  ],
};

const cityCards = [
  { title: "Ahmedabad", meta: "Gujarat", image: ahmHero, href: "/locations/ahmedabad" },
  { title: "Mumbai", meta: "Maharashtra", image: indBfsi, href: "/locations/mumbai" },
  { title: "Bangalore", meta: "Karnataka", image: indIt, href: "/locations/bangalore" },
  { title: "Pune", meta: "Maharashtra", image: indEng, href: "/locations/pune" },
  { title: "Hyderabad", meta: "Telangana", image: svcIt, href: "/locations/hyderabad" },
  { title: "Chennai", meta: "Tamil Nadu", image: indMfg, href: "/locations/chennai" },
];

const industryCards = [
  { title: "Manufacturing", meta: "Plant, quality, supply chain", image: indMfg, href: "/industries/manufacturing" },
  { title: "Healthcare", meta: "Clinical & administrative", image: indHealth, href: "/industries/healthcare" },
  { title: "IT & Technology", meta: "Engineering & product", image: indIt, href: "/industries/it" },
  { title: "BFSI", meta: "Banking, insurance, capital markets", image: indBfsi, href: "/industries/bfsi" },
  { title: "Retail & E-commerce", meta: "Store ops to category leads", image: indRetail, href: "/industries/retail" },
  { title: "Engineering", meta: "Design, projects, EPC", image: indEng, href: "/industries/engineering" },
];

/* ================== Manufacturing Industry Page ================== */

export const manufacturingConfig: LandingConfig = {
  kind: "industry",
  eyebrow: "Manufacturing Recruitment",
  h1: "Manufacturing Recruitment That Understands the Shop Floor",
  intro:
    "From plant heads and quality engineers to supply chain leaders — Elite HR places senior manufacturing talent that stays. Boutique, senior-led mandates with deep regional networks across Gujarat, Maharashtra and Tamil Nadu.",
  primaryCta: { label: "Hire Manufacturing Talent", href: "#contact" },
  secondaryCta: { label: "Talk to a Consultant", href: "#contact" },
  heroImage: indMfg,
  quickStats: [
    { icon: Factory, label: "Focus", value: "Plant, Quality, SCM" },
    { icon: Briefcase, label: "Roles", value: "Mid to Leadership" },
    { icon: Users, label: "Model", value: "Retained & success" },
    { icon: Clock, label: "First shortlist", value: "3–5 working days" },
  ],
  about: {
    eyebrow: "Sector expertise",
    heading: "We speak the language of the factory, not just HR jargon.",
    body: [
      "Manufacturing hiring is different. A CV that reads well rarely tells you whether a candidate can hold a takt time, defend a quality audit, or run a mixed-model line under pressure.",
      "Elite HR's manufacturing practice is built around consultants who have spent years mapping plants, tier-1 vendors and captive units across western and southern India — so shortlists reflect operational reality, not keyword matches.",
    ],
    highlights: [
      "Plant leadership & operations",
      "Quality, EHS and compliance",
      "Supply chain & procurement",
      "R&D and product engineering",
    ],
    image: indMfg,
  },
  challenges: {
    heading: "Hiring Challenges in Manufacturing",
    subheading:
      "The talent equation on the shop floor has shifted. Here's where mandates most often stall — and how our process is built to move them.",
    items: [
      { icon: AlertTriangle, title: "Skill gap on new-age lines", body: "Automation, IIoT and Industry 4.0 have created roles the traditional pipeline was never built for." },
      { icon: TrendingUp, title: "Salary bench inflation", body: "Compensation benchmarks have moved faster than internal bands, driving offer rejects." },
      { icon: MapPin, title: "Relocation resistance", body: "Senior talent hesitates to move to tier-2/3 plant locations without a strong pitch." },
      { icon: Target, title: "Retention risk", body: "Candidates hopping every 18 months hurt line stability and successor planning." },
      { icon: Users, title: "Successor pipelines", body: "Few plants have visible bench strength for HODs and functional leaders." },
      { icon: ShieldCheck, title: "Compliance-aware hiring", body: "EHS, ISO and statutory functions need vetted, audit-ready profiles." },
    ],
  },
  process: commonProcess,
  services: {
    heading: "Recruitment services for manufacturing companies",
    items: [
      { icon: Users, title: "Permanent Staffing", body: "Line, supervisory and mid-management hires with rigorous fitment filters.", href: "/services" },
      { icon: Award, title: "Executive Search", body: "Confidential search for Plant Heads, VP Operations, CTO and functional CXOs.", href: "/services/executive-search" },
      { icon: Clock, title: "Contract Staffing", body: "Ramp-up teams for greenfield projects, capex phases and seasonal cycles.", href: "/services" },
      { icon: Layers, title: "Project Hiring", body: "Complete function build-outs for new plants and expansion sites.", href: "/services" },
    ],
  },
  roles: {
    heading: "Most-hired manufacturing roles",
    subheading: "A sample of active mandates across the practice.",
    items: [
      { title: "Plant Head", meta: "15+ yrs · Operations", demand: "High" },
      { title: "Production Manager", meta: "8–14 yrs", demand: "High" },
      { title: "Quality Head", meta: "10+ yrs · QA/QC", demand: "High" },
      { title: "Maintenance Engineer", meta: "5–10 yrs", demand: "Steady" },
      { title: "Supply Chain Manager", meta: "10+ yrs · SCM", demand: "High" },
      { title: "EHS Manager", meta: "8+ yrs · Compliance", demand: "Medium" },
      { title: "R&D Engineer", meta: "5–12 yrs · Product", demand: "Medium" },
      { title: "Production Planner", meta: "4–8 yrs", demand: "Steady" },
    ],
  },
  cities: {
    heading: "Manufacturing recruitment across India's industrial hubs",
    subheading: "Delivering the same senior-led attention across every location.",
    items: cityCards,
  },
  whyUs: commonWhy,
  stats: commonStats,
  testimonials: commonTestimonials,
  faqs: [
    ...commonFaqs,
    {
      q: "Do you support greenfield plant hiring?",
      a: "Yes — we build entire functional stacks (operations, quality, SCM, maintenance, HR) for greenfield and expansion projects on a milestone plan.",
    },
  ],
  related: {
    heading: "Related pages",
    groups: [relatedCities, relatedServices, relatedIndustries],
  },
};

/* ================== Bangalore City Page ================== */

export const bangaloreConfig: LandingConfig = {
  kind: "city",
  eyebrow: "Recruitment Agency in Bangalore",
  h1: "Recruitment Agency in Bangalore for Senior Tech and Business Hires",
  intro:
    "India's tech capital demands a different kind of hiring firm — one that understands product engineering, GCCs and scale-stage startups equally. Elite HR delivers senior-led mandates across Bengaluru with sharp shortlists and a boutique feel.",
  primaryCta: { label: "Hire in Bangalore", href: "#contact" },
  secondaryCta: { label: "Talk to an Expert", href: "#contact" },
  heroImage: indIt,
  quickStats: [
    { icon: MapPin, label: "City", value: "Bengaluru, Karnataka" },
    { icon: Users, label: "Candidate pool", value: "Deep, tech-heavy" },
    { icon: Building2, label: "Industries", value: "IT, GCC, Fintech, D2C" },
    { icon: Clock, label: "Response", value: "Within 24 hours" },
  ],
  about: {
    eyebrow: "Local + national",
    heading: "Bangalore-specific expertise, delivered by senior consultants.",
    body: [
      "Bangalore's hiring market moves faster than most. Multiple offers per candidate, hyper-specialised roles and a mixed pool of product startups, GCCs and enterprise players make generic pitches fall flat.",
      "Elite HR operates in Bangalore with dedicated consultants who track compensation bands, engineering ladders and market movements weekly — so every shortlist reflects the real market, not last quarter's data.",
    ],
    highlights: [
      "Product engineering & platform",
      "Data, AI/ML and cloud leadership",
      "Fintech, D2C and SaaS growth roles",
      "GCC leadership and function heads",
    ],
    image: indIt,
  },
  challenges: {
    heading: "Hiring Challenges in Bangalore",
    subheading:
      "Bangalore isn't hard because there's no talent — it's hard because every candidate has options. Here's what typically breaks a mandate.",
    items: [
      { icon: TrendingUp, title: "Multi-offer candidates", body: "Senior tech talent routinely sits on 3–4 offers. Speed + storytelling wins." },
      { icon: AlertTriangle, title: "Salary drift", body: "Compensation bands reset every 2 quarters. Yesterday's numbers no longer close today." },
      { icon: Target, title: "Culture & intent fit", body: "Startups vs GCC vs enterprise — same title, very different expectations." },
      { icon: Users, title: "Counter-offers", body: "Post-resignation counters are the norm; without a defence playbook, offers drop." },
      { icon: Layers, title: "Deep specialisation", body: "Niche stacks (ML infra, distributed systems, security) need real network access." },
      { icon: Clock, title: "Notice period", body: "60–90 day notices require active engagement to survive to Day 1." },
    ],
  },
  process: commonProcess,
  services: {
    heading: "Recruitment services in Bangalore",
    items: [
      { icon: Code2, title: "IT Staffing", body: "Product, platform, data and infra hires across seniorities.", href: "/services" },
      { icon: Award, title: "Executive Search", body: "VP, Director, CTO and GCC leadership — confidential and retained.", href: "/services/executive-search" },
      { icon: Users, title: "Permanent Staffing", body: "GTM, sales, product and operations across scale-ups and enterprises.", href: "/services" },
      { icon: Globe2, title: "Remote Hiring", body: "Distributed teams with candidates sourced Bangalore-first.", href: "/services" },
    ],
  },
  roles: {
    heading: "Most-hired roles in Bangalore",
    items: [
      { title: "Engineering Manager", meta: "10+ yrs · Product", demand: "High" },
      { title: "Staff / Principal Engineer", meta: "12+ yrs · Backend/Platform", demand: "High" },
      { title: "Data Engineer", meta: "5–10 yrs", demand: "High" },
      { title: "ML Engineer", meta: "5–10 yrs · AI", demand: "High" },
      { title: "DevOps / SRE", meta: "5–10 yrs · Cloud", demand: "High" },
      { title: "Product Manager", meta: "6–12 yrs · SaaS/D2C", demand: "High" },
      { title: "VP Engineering", meta: "15+ yrs · CXO track", demand: "Medium" },
      { title: "Head of Sales", meta: "12+ yrs · B2B SaaS", demand: "Medium" },
    ],
  },
  industries: {
    heading: "Industries hiring in Bangalore",
    items: industryCards,
  },
  cities: {
    heading: "Recruitment services across India's major cities",
    items: cityCards,
  },
  whyUs: commonWhy,
  stats: commonStats,
  testimonials: commonTestimonials,
  faqs: [
    ...commonFaqs,
    {
      q: "Do you cover early-stage startups in Bangalore?",
      a: "Yes — we work with seed-to-Series-C startups, typically on retained founding-team and leadership mandates.",
    },
  ],
  related: {
    heading: "Continue exploring",
    groups: [relatedCities, relatedServices, relatedIndustries],
  },
};

/* ================== Executive Search Service Page ================== */

export const executiveSearchConfig: LandingConfig = {
  kind: "service",
  eyebrow: "Executive Search",
  h1: "Executive Search for CXO, VP and Board-Level Mandates",
  intro:
    "Confidential, retained search for leadership roles that can't be filled by a job post. Elite HR's executive search practice pairs deep industry mapping with senior-led delivery for CXO, functional head and board mandates.",
  primaryCta: { label: "Start a Search", href: "#contact" },
  secondaryCta: { label: "Speak in Confidence", href: "#contact" },
  heroImage: svcExec,
  quickStats: [
    { icon: Award, label: "Focus", value: "CXO & Functional Heads" },
    { icon: ShieldCheck, label: "Model", value: "Retained, confidential" },
    { icon: Users, label: "Consultants", value: "Senior partners only" },
    { icon: Clock, label: "Timeline", value: "8–12 weeks typical" },
  ],
  about: {
    eyebrow: "Leadership hiring",
    heading: "Search that goes beyond active job seekers.",
    body: [
      "Great leadership hires rarely apply — they are found, courted and won. Our executive search practice is built for exactly that: mapping the market, approaching passive candidates and shepherding them through a rigorous, respectful process.",
      "Every mandate is owned by a senior partner. No handoffs to associates, no volume-driven shortcuts. You get four to six sharply-argued profiles, backed by referenced insight, not resume dumps.",
    ],
    highlights: [
      "Confidential mapping & approach",
      "Referenced, insight-led shortlists",
      "Board and investor alignment",
      "Compensation & offer structuring",
    ],
    image: svcExec,
  },
  challenges: {
    heading: "Why leadership hiring is different",
    subheading:
      "The rules that work for mid-management fail at the top. Our practice is engineered for the leadership market's specific frictions.",
    items: [
      { icon: ShieldCheck, title: "Confidentiality", body: "Sitting CXOs cannot afford exposure. The search must be quiet and clean." },
      { icon: Users, title: "Passive candidates", body: "The best leaders aren't looking. Reaching them takes network, not job ads." },
      { icon: Target, title: "Fit over resume", body: "Trajectory, values and board dynamics matter more than functional titles." },
      { icon: TrendingUp, title: "Compensation complexity", body: "ESOP, RSU, deferred comp and clawbacks need careful structuring." },
      { icon: Handshake, title: "Board alignment", body: "Multiple stakeholders — CEO, CHRO, board — need to converge on the profile." },
      { icon: Sparkles, title: "Storytelling", body: "The company narrative must be sharp enough to move leaders across sectors." },
    ],
  },
  process: {
    heading: "The retained search process",
    steps: [
      { icon: ClipboardList, title: "Position Brief", body: "Deep discovery with CEO/board." },
      { icon: Search, title: "Market Map", body: "Long list of the target universe." },
      { icon: UserSearch, title: "Approach", body: "Confidential outreach to passives." },
      { icon: UserCheck, title: "Assess", body: "Structured interviews + references." },
      { icon: ListChecks, title: "Shortlist", body: "4–6 referenced profiles." },
      { icon: Handshake, title: "Interviews", body: "Board panels & alignment." },
      { icon: Award, title: "Offer", body: "Comp structuring & closure." },
      { icon: PartyPopper, title: "Onboarding", body: "First-90-day support." },
    ],
  },
  industries: {
    heading: "Sectors we search across",
    items: industryCards,
  },
  cities: {
    heading: "Executive search across India's major cities",
    items: cityCards,
  },
  whyUs: commonWhy,
  stats: commonStats,
  testimonials: commonTestimonials,
  faqs: [
    ...commonFaqs,
    {
      q: "Is the search truly confidential?",
      a: "Yes. Company name is disclosed only after candidate qualification and a signed NDA when required. Our consultants are trained on discreet outreach.",
    },
    {
      q: "What is the fee model for executive search?",
      a: "Retained fee, typically structured in three milestones — engagement, shortlist and joining — as a percentage of first-year fixed CTC.",
    },
  ],
  related: {
    heading: "Continue exploring",
    groups: [relatedServices, relatedIndustries, relatedCities],
  },
};
