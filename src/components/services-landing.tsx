import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  X,
  Users,
  Crown,
  Cpu,
  FileCode2,
  Globe2,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  ShieldCheck,
  Zap,
  MapPin,
  Sparkles,
  Handshake,
  UserCheck,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  Quote,
  Search,
  ClipboardList,
  UsersRound,
  Video,
  PartyPopper,
} from "lucide-react";

import heroImg from "@/assets/hero-hr.jpg";
import challengeImg from "@/assets/hiring-challenge.jpg";
import svcPermanent from "@/assets/service-permanent.jpg";
import svcExecutive from "@/assets/service-executive.jpg";
import svcIt from "@/assets/service-it.jpg";
import svcContract from "@/assets/service-contract.jpg";
import svcRemote from "@/assets/service-remote.jpg";
import indIt from "@/assets/industry-it.jpg";
import indMfg from "@/assets/industry-manufacturing.jpg";
import indHealth from "@/assets/industry-healthcare.jpg";
import indBfsi from "@/assets/industry-bfsi.jpg";
import indRetail from "@/assets/industry-retail.jpg";
import indEng from "@/assets/industry-engineering.jpg";

/* ------------------------------------------------------------------ */
/* Reveal on scroll                                                    */
/* ------------------------------------------------------------------ */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

/* ------------------------------------------------------------------ */
/* NAVBAR                                                              */
/* ------------------------------------------------------------------ */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Process", href: "#process" },
    { label: "Why Elite HR", href: "#why" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_-10px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-elite flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid place-items-center h-10 w-10 rounded-xl bg-brand text-white font-display font-bold text-lg shadow-brand">
            E
          </span>
          <span
            className={`font-display font-bold text-lg tracking-tight ${
              scrolled ? "text-brand" : "text-white"
            }`}
          >
            Elite HR<span className="text-brand-accent">.</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition-colors ${
                scrolled
                  ? "text-ink hover:text-brand"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className={
              scrolled
                ? "btn-ghost-brand !py-2 !px-4 text-sm"
                : "btn-secondary !py-2 !px-4 text-sm"
            }
          >
            Talk to an Expert
          </a>
          <a href="#contact" className="btn-primary !py-2 !px-4 text-sm">
            Hire Talent
          </a>
        </div>
        <button
          className={`lg:hidden p-2 ${scrolled ? "text-brand" : "text-white"}`}
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="container-elite flex flex-col py-4 gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-ink font-semibold py-2"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-2">
              Hire Talent
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100vh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="HR professionals discussing recruitment strategy"
        width={1920}
        height={1200}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,20,45,0.55) 55%, rgba(0,20,45,0.85) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,30,66,0.85) 0%, rgba(0,30,66,0.5) 45%, transparent 75%)",
        }}
      />
      <div className="container-elite relative z-10 pt-32 pb-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 text-white animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent">
            <Sparkles className="h-4 w-4" /> Staffing &amp; Recruitment Services
          </span>
          <h1
            className="mt-5 font-display font-bold text-white leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 3.5rem)" }}
          >
            Staffing and Recruitment Services
            <br />
            <span className="text-brand-accent">Built Around How You Actually Hire</span>
          </h1>
          <p className="mt-6 text-white/85 max-w-2xl text-lg leading-relaxed">
            Hiring rarely fits into one neat box. Some roles need a long-term employee who'll
            grow with the business. Others need a specialist for six months. Sometimes it's a
            leadership seat that has to be filled quietly and correctly, first time. Elite HR
            works across all of these — through five distinct services, each built around a
            specific hiring need.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Hire Talent <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Talk to an Expert
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {[
              ["1000+", "Placements"],
              ["500+", "Clients"],
              ["95%", "Retention"],
              ["PAN India", "Coverage"],
            ].map(([n, l]) => (
              <div key={l} className="border-l border-white/20 pl-4">
                <div className="font-display font-bold text-2xl text-brand-accent">{n}</div>
                <div className="text-white/70 text-xs uppercase tracking-wider mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* QUICK SERVICES OVERVIEW                                             */
/* ------------------------------------------------------------------ */
const services = [
  {
    icon: Users,
    name: "Permanent Staffing",
    tag: "Long-term hires that stick",
    blurb:
      "Full-time hires across any function, screened for culture-fit and long-term retention.",
    image: svcPermanent,
    href: "#svc-permanent",
    benefits: [
      "Culture-fit screening depth",
      "Reduced early attrition",
      "Entry-level to senior IC roles",
    ],
    body: "For full-time, long-term hires across any function or department, from entry-level through senior individual contributor roles. Built around culture-fit screening and reducing early attrition, so the person you hire is still a good fit for the team well into their second year, not just their first few months.",
  },
  {
    icon: Crown,
    name: "Executive Search",
    tag: "Discretion at leadership level",
    blurb:
      "Senior leadership and CXO searches — precision, confidentiality, curated shortlists.",
    image: svcExecutive,
    href: "#svc-executive",
    benefits: [
      "Confidential, curated shortlists",
      "CXO & senior leadership focus",
      "Precision over volume",
    ],
    body: "For senior leadership and CXO-level positions, where confidentiality and precision matter considerably more than speed. This is a smaller, curated shortlist approach rather than a wide net, built for situations where a wrong hire would be expensive in ways that go well beyond salary.",
  },
  {
    icon: Cpu,
    name: "IT Staffing",
    tag: "Permanent tech hires",
    blurb:
      "Developers, DevOps, QA and infra specialists — hired full-time onto your payroll.",
    image: svcIt,
    href: "#svc-it",
    benefits: [
      "Developers, DevOps, QA, Infra",
      "Full-time, on your payroll",
      "Indefinite, long-term hires",
    ],
    body: "For permanent IT hires — developers, DevOps engineers, QA specialists, infrastructure and support roles — brought on as full-time employees directly on your payroll, for an indefinite, long-term position.",
  },
  {
    icon: FileCode2,
    name: "IT Contract Staffing",
    tag: "Project-based specialists",
    blurb:
      "Technical talent for a defined project — 3, 6 or 12 months, engaged on contract.",
    image: svcContract,
    href: "#svc-contract",
    benefits: [
      "3, 6 or 12-month engagements",
      "Fast start, clean exit",
      "Scope-focused specialists",
    ],
    body: "For project-based IT hiring, where you need technical talent for a fixed period — three months, six months, or the length of a specific project — engaged on contract rather than as a permanent employee.",
  },
  {
    icon: Globe2,
    name: "Remote Staffing",
    tag: "Distributed talent, pan-India",
    blurb:
      "Hire distributed talent across India without needing a local office in every city.",
    image: svcRemote,
    href: "#svc-remote",
    benefits: [
      "Pan-India talent pool",
      "No local office required",
      "Vetted remote-ready hires",
    ],
    body: "For businesses hiring distributed talent across India, without needing a local office in every city where a good candidate happens to be based.",
  },
];

function QuickServices() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="py-24 md:py-32 bg-surface">
      <div className="container-elite">
        <div ref={ref} className={`max-w-3xl mb-16 ${shown ? "animate-fade-up" : "opacity-0"}`}>
          <span className="eyebrow">Our Services</span>
          <h2 className="mt-4 font-bold text-brand" style={{ fontSize: "clamp(2rem, 4vw, 2.625rem)" }}>
            Five distinct offerings — each built for a specific hiring situation
          </h2>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed">
            Not a single generic recruitment service stretched thin. Pick the one that
            actually matches what you're solving for right now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.href}
                className="card-elite group p-8 flex flex-col relative overflow-hidden"
                style={{ animation: shown ? `fade-up .8s ${i * 0.08}s both ease-out` : "none" }}
              >
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-brand/5 group-hover:bg-brand-accent/10 transition-colors" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand to-secondary text-white grid place-items-center shadow-brand group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="mt-6 text-xs font-semibold uppercase tracking-wider text-brand-accent">
                    {s.tag}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-brand">{s.name}</h3>
                  <p className="mt-3 text-ink-soft leading-relaxed">{s.blurb}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-brand font-semibold group-hover:text-brand-accent transition-colors">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* HIRING CHALLENGE                                                    */
/* ------------------------------------------------------------------ */
function HiringChallenge() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-elite grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-brand/10 to-brand-accent/10 blur-2xl" />
          <img
            src={challengeImg}
            alt="Illustration of matching the right hire"
            loading="lazy"
            width={1200}
            height={1000}
            className="relative rounded-[24px] shadow-card w-full"
          />
        </div>
        <div>
          <span className="eyebrow">The Real Problem</span>
          <h2 className="mt-4 font-bold text-brand" style={{ fontSize: "clamp(2rem, 4vw, 2.625rem)" }}>
            The Hiring Challenge Behind Most Bad Hires
          </h2>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed">
            Most hiring mistakes don't happen because a company picked the wrong candidate
            from a shortlist. More often, they happen because the company picked the wrong
            <em> type </em> of hiring approach for the situation in the first place.
          </p>
          <div className="mt-6 relative pl-6 border-l-4 border-brand-accent bg-surface rounded-r-xl py-5 pr-6">
            <Quote className="absolute -left-3 -top-3 h-6 w-6 text-brand-accent bg-white rounded-full p-1" />
            <p className="text-ink font-medium leading-relaxed">
              A growing business trying to fill a senior leadership role through a standard job
              posting will usually struggle — not because good candidates don't exist, but
              because the right person is rarely browsing job boards.
            </p>
          </div>
          <p className="mt-6 text-ink-soft text-lg leading-relaxed">
            Similarly, a business scaling a technical team for a defined six-month project
            doesn't necessarily need permanent employees added to its payroll. It needs
            contract specialists who can start quickly, work within a clear scope, and exit
            cleanly once the project wraps up.
          </p>
          <p className="mt-4 text-brand font-semibold text-lg">
            Match the service to the situation, and a surprising amount of the difficulty in
            hiring simply falls away.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* DETAILED SERVICE CARDS                                              */
/* ------------------------------------------------------------------ */
function ServiceCards() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-elite">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow">How Elite HR Structures Its Services</span>
          <h2 className="mt-4 font-bold text-brand" style={{ fontSize: "clamp(2rem, 4vw, 2.625rem)" }}>
            Each service — its own process, timelines, and definition of success
          </h2>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed">
            Not a single generic template stretched thin across every kind of role.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.name}
                id={s.href.replace("#", "")}
                className="card-elite group overflow-hidden grid lg:grid-cols-2"
              >
                <div
                  className={`relative overflow-hidden min-h-[320px] lg:min-h-[440px] ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand/40 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6 h-14 w-14 rounded-2xl bg-white/95 backdrop-blur grid place-items-center shadow-card">
                    <Icon className="h-7 w-7 text-brand" />
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                    0{i + 1} — {s.tag}
                  </span>
                  <h3 className="mt-3 text-3xl md:text-[28px] font-bold text-brand">{s.name}</h3>
                  <p className="mt-4 text-ink-soft leading-relaxed">{s.body}</p>
                  <ul className="mt-6 space-y-3">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                        <span className="text-ink">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a href="#contact" className="inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-accent group/btn">
                      Learn more about {s.name}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* WHY BUSINESSES CHOOSE ELITE HR — dark section                        */
/* ------------------------------------------------------------------ */
const whyCards = [
  {
    icon: UserCheck,
    title: "Pre-screened Candidates",
    text: "Every candidate is vetted before they reach your inbox — no dumping shortlists on you.",
  },
  {
    icon: ShieldCheck,
    title: "Low Back-out Rate",
    text: "People who accept an offer through Elite HR tend to actually show up on day one.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    text: "Pipelines are pre-built for common roles, so shortlists land faster than starting from scratch.",
  },
  {
    icon: MapPin,
    title: "Pan India Hiring",
    text: "Geography rarely limits who you're able to consider — sourcing runs nationwide.",
  },
  {
    icon: Handshake,
    title: "Flexible Engagement",
    text: "Adapt the model to a single role, a hiring drive, or a full team build-out.",
  },
  {
    icon: Sparkles,
    title: "Boutique Attention",
    text: "A limited number of active mandates means someone is genuinely paying attention to yours.",
  },
];

function WhyChoose() {
  return (
    <section id="why" className="py-24 md:py-32 bg-brand text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-brand-accent/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/40 blur-3xl" />
      </div>
      <div className="container-elite relative">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent before:content-[''] before:w-7 before:h-0.5 before:bg-brand-accent">
            Why Elite HR
          </span>
          <h2 className="mt-4 font-bold text-white" style={{ fontSize: "clamp(2rem, 4vw, 2.625rem)" }}>
            Why businesses work with Elite HR across these services
          </h2>
          <p className="mt-5 text-white/75 text-lg leading-relaxed">
            A few things stay consistent no matter which of the five services applies to your
            current hiring need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyCards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group rounded-[18px] p-8 bg-white/5 backdrop-blur border border-white/10 hover:border-brand-accent/60 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-2xl bg-brand-accent grid place-items-center shadow-accent group-hover:rotate-6 transition-transform">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{c.title}</h3>
                <p className="mt-3 text-white/75 leading-relaxed">{c.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* HIRING DECISION GUIDE                                               */
/* ------------------------------------------------------------------ */
const decisionTree = [
  {
    q: "Do you need a permanent hire?",
    yes: "Permanent Staffing",
    icon: Users,
  },
  {
    q: "Is it for a temporary project?",
    yes: "IT Contract Staffing",
    icon: FileCode2,
  },
  {
    q: "Is it a leadership position?",
    yes: "Executive Search",
    icon: Crown,
  },
  {
    q: "Is it a technical role?",
    yes: "IT Staffing",
    icon: Cpu,
  },
  {
    q: "Is the talent remote / distributed?",
    yes: "Remote Staffing",
    icon: Globe2,
  },
];

function DecisionGuide() {
  const [active, setActive] = useState(0);
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-elite">
        <div className="max-w-3xl mb-14 mx-auto text-center">
          <span className="eyebrow mx-auto">Not sure where to start?</span>
          <h2 className="mt-4 font-bold text-brand" style={{ fontSize: "clamp(2rem, 4vw, 2.625rem)" }}>
            Choosing the Right Service
          </h2>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed">
            Most hiring needs sort themselves fairly quickly once framed the right way. Tap a
            question to see the service that matches.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          {decisionTree.map((n, i) => {
            const Icon = n.icon;
            const isActive = active === i;
            return (
              <button
                key={n.q}
                onClick={() => setActive(i)}
                className={`text-left card-elite p-6 relative overflow-hidden transition-all ${
                  isActive
                    ? "!bg-brand text-white !-translate-y-2 shadow-brand"
                    : ""
                }`}
              >
                <div
                  className={`h-11 w-11 rounded-xl grid place-items-center mb-4 transition-colors ${
                    isActive ? "bg-brand-accent text-white" : "bg-brand/10 text-brand"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div
                  className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                    isActive ? "text-brand-accent" : "text-brand-accent"
                  }`}
                >
                  Step {i + 1}
                </div>
                <div className={`font-semibold ${isActive ? "text-white" : "text-brand"}`}>
                  {n.q}
                </div>
                <div
                  className={`mt-4 pt-4 border-t ${
                    isActive ? "border-white/20" : "border-border"
                  } flex items-center justify-between text-sm font-semibold`}
                >
                  <span className={isActive ? "text-white/70" : "text-ink-soft"}>Match</span>
                  <span className={isActive ? "text-white" : "text-brand"}>{n.yes}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="btn-primary inline-flex">
            Get matched with the right service
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* INDUSTRIES                                                          */
/* ------------------------------------------------------------------ */
const industries = [
  { name: "IT", image: indIt },
  { name: "Manufacturing", image: indMfg },
  { name: "Healthcare", image: indHealth },
  { name: "BFSI", image: indBfsi },
  { name: "Retail", image: indRetail },
  { name: "Engineering", image: indEng },
];

function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-white">
      <div className="container-elite">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow">Industries We Serve</span>
          <h2 className="mt-4 font-bold text-brand" style={{ fontSize: "clamp(2rem, 4vw, 2.625rem)" }}>
            Deep experience across sectors — not squeezed into one generic process
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <a
              key={ind.name}
              href="#contact"
              className="group relative rounded-[18px] overflow-hidden aspect-[4/5] block shadow-card hover:shadow-card-hover transition-all"
            >
              <img
                src={ind.image}
                alt={ind.name}
                loading="lazy"
                width={900}
                height={700}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/40 to-transparent transition-opacity group-hover:from-brand-deep group-hover:via-brand-deep/70" />
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-white text-2xl font-bold">{ind.name}</h3>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-brand-accent text-sm font-semibold">
                  Explore hiring in {ind.name}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PROCESS TIMELINE                                                    */
/* ------------------------------------------------------------------ */
const process = [
  { icon: ClipboardList, title: "Requirement Discussion", desc: "Deep dive into the role, team context and non-negotiables." },
  { icon: Search, title: "Screening", desc: "Sourced candidates are pre-vetted on skill and culture-fit." },
  { icon: UsersRound, title: "Shortlisting", desc: "A tight, relevant shortlist lands in your inbox — not a data dump." },
  { icon: Video, title: "Interviews", desc: "Coordinated end-to-end. We keep momentum and candidates warm." },
  { icon: PartyPopper, title: "Hiring", desc: "Offer, negotiation, onboarding hand-off — and low back-out rates." },
];

function Process() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section id="process" className="py-24 md:py-32 bg-surface">
      <div className="container-elite">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow">Our Process</span>
          <h2 className="mt-4 font-bold text-brand" style={{ fontSize: "clamp(2rem, 4vw, 2.625rem)" }}>
            A five-step process, run the same way every time
          </h2>
        </div>

        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute top-11 left-[6%] right-[6%] h-0.5 bg-border">
            <div
              className="h-full bg-gradient-to-r from-brand via-secondary to-brand-accent transition-all duration-[1600ms] ease-out"
              style={{ width: shown ? "100%" : "0%" }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative">
            {process.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="text-center"
                  style={{ animation: shown ? `fade-up .7s ${0.15 * i}s both ease-out` : "none" }}
                >
                  <div className="relative mx-auto h-22 w-22">
                    <div className="mx-auto h-[88px] w-[88px] rounded-full bg-white shadow-card grid place-items-center border-4 border-surface">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-brand to-secondary grid place-items-center text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 lg:right-8 h-8 w-8 rounded-full bg-brand-accent text-white font-bold text-sm grid place-items-center shadow-accent">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand">{s.title}</h3>
                  <p className="mt-2 text-ink-soft text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* STATS COUNTER                                                       */
/* ------------------------------------------------------------------ */
function Counter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [val, setVal] = useState(0);
  const { ref, shown } = useReveal<HTMLDivElement>();
  useEffect(() => {
    if (!shown) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setVal(Math.floor(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [shown, end]);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-brand text-5xl md:text-6xl">
        {val}
        <span className="text-brand-accent">{suffix}</span>
      </div>
      <div className="mt-2 text-ink-soft font-medium uppercase tracking-wider text-sm">
        {label}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container-elite grid grid-cols-2 md:grid-cols-4 gap-10">
        <Counter end={1000} suffix="+" label="Successful Placements" />
        <Counter end={500} suffix="+" label="Clients Served" />
        <Counter end={95} suffix="%" label="Retention Rate" />
        <div className="text-center">
          <div className="font-display font-bold text-brand text-5xl md:text-6xl">
            PAN <span className="text-brand-accent">India</span>
          </div>
          <div className="mt-2 text-ink-soft font-medium uppercase tracking-wider text-sm">
            Coverage
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
const faqs = [
  {
    q: "Which industries does Elite HR serve?",
    a: "Elite HR works across a broad range of sectors, from IT and BFSI to manufacturing, BPO/KPO, healthcare and several others. Staffing needs differ considerably across each of these, which is part of why the services are structured by hiring type rather than squeezed into a single generic process.",
  },
  {
    q: "What is your average turnaround time?",
    a: "Turnaround varies by role complexity, seniority, and how niche the requirement is, but Elite HR maintains active candidate pipelines for most common role types, which keeps time-to-shortlist considerably faster than starting sourcing entirely from scratch each time.",
  },
  {
    q: "Do you offer both permanent and contract staffing?",
    a: "Yes. Permanent Staffing and IT Staffing both cover full-time hiring, while IT Contract Staffing covers project-based, fixed-term hiring. Each is run as a distinct process with its own screening approach, rather than one process applied loosely to both situations.",
  },
  {
    q: "Can you help if we only have one role to fill, not a large hiring drive?",
    a: "Yes — single-role mandates are handled with the same screening rigour as larger hiring drives. There's no minimum volume requirement to work with Elite HR.",
  },
  {
    q: "How is Elite HR different from a large recruitment firm?",
    a: "Elite HR deliberately takes on a limited number of active mandates at any given time, which allows for meaningfully more attention per role. It's built as a boutique, relationship-driven operation rather than a high-volume one.",
  },
  {
    q: "Do you work with companies outside Ahmedabad?",
    a: "Yes, Elite HR sources and delivers candidates pan-India, not limited to Gujarat. Location isn't typically a constraint on who can be considered or where a client is based.",
  },
];

function FAQs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="py-24 md:py-32 bg-surface">
      <div className="container-elite grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">FAQs</span>
          <h2 className="mt-4 font-bold text-brand" style={{ fontSize: "clamp(2rem, 4vw, 2.625rem)" }}>
            Answers to what most clients ask first
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed">
            Can't find what you're looking for? Talk to us — we'll happily walk you through
            the specifics for your situation.
          </p>
          <a href="#contact" className="btn-ghost-brand mt-6 inline-flex">
            Ask a question <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="lg:col-span-8 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-[18px] bg-white border transition-all ${
                  isOpen ? "border-brand-accent/40 shadow-card" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-lg text-brand">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-ink-soft leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CTA BANNER                                                          */
/* ------------------------------------------------------------------ */
function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-brand relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, oklch(0.72 0.18 55 / 0.35), transparent 45%), radial-gradient(circle at 80% 70%, oklch(0.45 0.13 255 / 0.5), transparent 50%)",
        }}
      />
      <div className="container-elite relative flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="font-bold text-white" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.375rem)" }}>
            Still Unsure Which Service Fits Your Hiring Need?
          </h2>
          <p className="mt-4 text-white/80 text-lg leading-relaxed">
            That's a perfectly reasonable place to start from. Tell us what you're trying to
            hire for, and we'll point you toward the right service — or the right combination
            of them.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary">
            Hire Talent <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CONTACT                                                             */
/* ------------------------------------------------------------------ */
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="container-elite grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">Get in touch</span>
          <h2 className="mt-4 font-bold text-brand" style={{ fontSize: "clamp(2rem, 4vw, 2.625rem)" }}>
            Tell us who you're hiring for
          </h2>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed">
            We'll get back within one working day with the service that fits, expected
            timelines, and next steps.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: Phone, label: "Phone", val: "+91 79 4890 0000" },
              { icon: Mail, label: "Email", val: "hello@elitehr.co.in" },
              { icon: MapPin, label: "Office", val: "Ahmedabad, Gujarat — serving Pan India" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand grid place-items-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-ink-soft font-semibold">
                      {c.label}
                    </div>
                    <div className="mt-1 font-semibold text-brand">{c.val}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            className="rounded-[18px] bg-surface p-8 md:p-10 shadow-card"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full name" name="name" required />
              <Field label="Company" name="company" required />
              <Field label="Work email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-brand mb-2">
                  Which service fits best?
                </label>
                <select
                  name="service"
                  className="w-full rounded-[10px] border border-border bg-white px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-brand/40"
                >
                  <option>Not sure — help me choose</option>
                  {services.map((s) => (
                    <option key={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-brand mb-2">
                  Tell us about the role
                </label>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Role title, seniority, location, timeline, anything unusual..."
                  className="w-full rounded-[10px] border border-border bg-white px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-brand/40"
                />
              </div>
            </div>
            <button type="submit" className="btn-primary mt-6 w-full md:w-auto">
              {submitted ? "Thanks — we'll be in touch" : "Send enquiry"}
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-4 text-xs text-ink-soft">
              By submitting, you agree to be contacted by Elite HR Services regarding your
              enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-brand mb-2">
        {label} {required && <span className="text-brand-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-[10px] border border-border bg-white px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-brand/40"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FOOTER CTA + FOOTER                                                 */
/* ------------------------------------------------------------------ */
function FooterCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-brand-deep">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, oklch(0.45 0.13 255 / 0.6), transparent), radial-gradient(50% 80% at 80% 100%, oklch(0.72 0.18 55 / 0.35), transparent)",
        }}
      />
      <div className="container-elite relative text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent">
          <Sparkles className="h-4 w-4" /> Let's Get Started
        </span>
        <h2
          className="mt-5 font-display font-bold text-white leading-[1.05]"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
        >
          Let's Build Your Team Together
        </h2>
        <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
          Whether it's one senior seat or a full team build-out, we'll match the right service
          to the actual situation — and move quickly from there.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#contact" className="btn-primary">
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-deep text-white/70 py-12 border-t border-white/10">
      <div className="container-elite grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-brand-accent text-white font-display font-bold text-lg">
              E
            </span>
            <span className="font-display font-bold text-lg text-white">
              Elite HR<span className="text-brand-accent">.</span>
            </span>
          </div>
          <p className="mt-4 text-sm max-w-md leading-relaxed">
            Boutique staffing and recruitment services across India — built around how you
            actually hire, not a generic template stretched thin.
          </p>
        </div>
        <div>
          <div className="font-semibold text-white mb-3">Services</div>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.name}>
                <a href={s.href} className="hover:text-brand-accent transition-colors">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white mb-3">Contact</div>
          <ul className="space-y-2 text-sm">
            <li>+91 79 4890 0000</li>
            <li>hello@elitehr.co.in</li>
            <li>Ahmedabad, Gujarat</li>
          </ul>
        </div>
      </div>
      <div className="container-elite mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div>© {new Date().getFullYear()} Elite HR Services. All rights reserved.</div>
        <div>Pan-India recruitment · Boutique attention</div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* EXPORT                                                              */
/* ------------------------------------------------------------------ */
export default function ServicesLanding() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickServices />
        <HiringChallenge />
        <ServiceCards />
        <WhyChoose />
        <DecisionGuide />
        <Industries />
        <Process />
        <Stats />
        <FAQs />
        <CTABanner />
        <Contact />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
