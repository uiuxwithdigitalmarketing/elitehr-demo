import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  MapPin,
  Zap,
  Users,
  Building2,
  ArrowRight,
  Clock,
  UserSearch,
  Cloud,
  ClipboardList,
  Search,
  UserCheck,
  ListChecks,
  PartyPopper,
  ShieldCheck,
  Briefcase,
  Globe2,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Code2,
  ServerCog,
  Bug,
  Database,
  Lock,
  Palette,
  Brain,
  Boxes,
  Network,
  KanbanSquare,
  LineChart,
  Headphones,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Wrench,
  Truck,
  HardHat,
  Pill,
  GraduationCap,
  Package,
  PhoneCall,
  Cpu,
  Handshake,
} from "lucide-react";


import heroImg from "@/assets/ahmedabad-hero.jpg";
import localImg from "@/assets/ahmedabad-local.jpg";
import challengeImg from "@/assets/ahmedabad-challenge.jpg";
import indIt from "@/assets/industry-it.jpg";
import indMfg from "@/assets/industry-manufacturing.jpg";
import indHealth from "@/assets/industry-healthcare.jpg";
import indBfsi from "@/assets/industry-bfsi.jpg";
import indRetail from "@/assets/industry-retail.jpg";
import indEng from "@/assets/industry-engineering.jpg";

/* -------- Reveal on scroll -------- */
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

/* -------- Animated counter -------- */
function Counter({ end, suffix = "", duration = 1600 }: { end: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const { ref, shown } = useReveal<HTMLSpanElement>();
  useEffect(() => {
    if (!shown) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(end * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, end, duration]);
  return (
    <span ref={ref} className="font-display font-bold text-5xl md:text-6xl text-white">
      {val}
      {suffix}
    </span>
  );
}

/* -------- NAVBAR -------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { label: "Local Advantage", href: "#local" },
    { label: "Process", href: "#process" },
    { label: "Industries", href: "#industries" },
    { label: "Why Us", href: "#why" },
    { label: "FAQs", href: "#faqs" },
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_-10px_rgba(0,0,0,0.15)]" : "bg-transparent"
      }`}
    >
      <div className="container-elite flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid place-items-center h-10 w-10 rounded-xl bg-brand text-white font-display font-bold text-lg shadow-brand">
            E
          </span>
          <span className={`font-display font-bold text-lg tracking-tight ${scrolled ? "text-brand" : "text-white"}`}>
            Elite HR<span className="text-brand-accent">.</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition-colors ${
                scrolled ? "text-ink hover:text-brand" : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className={scrolled ? "btn-ghost-brand !py-2 !px-4 text-sm" : "btn-secondary !py-2 !px-4 text-sm"}>
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
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink font-semibold py-2">
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

/* -------- HERO -------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100vh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Ahmedabad skyline with corporate recruitment professionals"
        width={1920}
        height={1200}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,20,45,0.55) 55%, rgba(0,20,45,0.70) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, rgba(0,30,66,0.85) 0%, rgba(0,30,66,0.5) 45%, transparent 75%)",
        }}
      />
      <div className="relative container-elite pt-32 pb-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 text-white animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wider uppercase">
            <MapPin className="h-3.5 w-3.5 text-brand-accent" /> Ahmedabad · Gujarat
          </div>
          <h1 className="mt-5 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white">
            Recruitment Agency in <span className="text-brand-accent">Ahmedabad</span>, Built Around Local Speed and Fit
          </h1>
          <p className="mt-6 text-white/85 text-lg max-w-2xl">
            If you're hiring in Ahmedabad, Elite HR Services works from right here in the city — not through a regional manager who covers Gujarat from a Mumbai or Delhi office, but a team based locally, with day-to-day familiarity with how hiring actually plays out on the ground. Faster response when a role opens, a candidate network that's already built, and the option of an in-person conversation when it genuinely helps.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Hire Talent <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Talk to a Recruitment Expert
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80">
            {[
              "Ahmedabad-based team",
              "Pan-India delivery",
              "Boutique, senior-led mandates",
            ].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-accent" /> {t}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 hidden lg:block">
          <div className="relative rounded-[24px] overflow-hidden shadow-brand animate-scale-in">
            <img src={localImg} alt="Recruitment team meeting" width={1400} height={1050} className="w-full h-[520px] object-cover" loading="lazy" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur px-5 py-4 flex items-center gap-4">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-brand-accent/15 text-brand-accent">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-accent">Fast Local Turnaround</div>
                <div className="text-sm font-semibold text-ink">Shortlists in days, not weeks.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- LOCAL ADVANTAGE -------- */
function LocalAdvantage() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const cards = [
    { icon: Users, title: "Local Candidate Network", body: "Deep bench of Ahmedabad and Gujarat talent, built over years of active mandates." },
    { icon: Zap, title: "Faster Response", body: "Same-time-zone team, no long approval chains — briefs move quickly from call to shortlist." },
    { icon: Building2, title: "In-person Meetings", body: "Client and candidate meetings on the ground when it matters, not just over calls." },
    { icon: MapPin, title: "Ahmedabad Based Team", body: "Local presence means local context — salary bands, commute, employer perception." },
  ];
  return (
    <section id="local" className="py-24 bg-white">
      <div ref={ref} className={`container-elite grid lg:grid-cols-2 gap-14 items-stretch transition-all duration-700 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="relative h-full min-h-[420px] lg:min-h-full">
          <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-tr from-brand/10 to-brand-accent/10 -z-10" />
          <img src={localImg} alt="Local recruitment team screening candidates" width={1400} height={1050} className="rounded-[22px] shadow-card w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col h-full">
          <span className="eyebrow">How We Support Hiring in Ahmedabad</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-brand">Being Based Here Changes the Practical Mechanics</h2>
          <p className="mt-4 text-ink-soft text-lg leading-relaxed">
            A query raised in the morning tends to get a response the same day — not the next one — because there's no hand-off between a regional office and a central team elsewhere. If a client wants to sit down and talk through a role in person, that's genuinely possible, not a theoretical offer that never actually happens. Sourcing draws first on an existing local network before widening pan-India if the role needs it.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 flex-1">
            {cards.map((c) => (
              <div key={c.title} className="card-elite p-5 flex gap-4 h-full">
                <div className="shrink-0 grid place-items-center h-11 w-11 rounded-xl bg-brand/10 text-brand">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-ink">{c.title}</div>
                  <div className="text-sm text-ink-soft mt-1">{c.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- HIRING CHALLENGES -------- */
function Challenges() {
  const cards = [
    { icon: Clock, title: "Great Candidates Move Fast", body: "A strong applicant is usually fielding two or three other conversations at the same time. A slow internal process — not a better offer — is often what loses them." },
    { icon: UserSearch, title: "Informal Networks Have Limits", body: "A lot of hiring in Ahmedabad still runs on referrals and familiar consultancies. It works until you need a role that doesn't sit within someone's existing contacts — then the search stretches out." },
    { icon: Cloud, title: "Remote Agencies Slow Things Down", body: "Coordinating with an agency hundreds of kilometres away — odd time zones, days-long follow-ups because you're not a priority account — none of that speeds anything up." },
  ];
  return (
    <section className="py-24" style={{ background: "var(--color-surface)" }}>
      <div className="container-elite grid lg:grid-cols-12 gap-12 items-stretch">
        <div className="lg:col-span-5 relative order-2 lg:order-1 h-full min-h-[420px] lg:min-h-full">
          <img src={challengeImg} alt="Reviewing candidate resumes and hiring analytics" width={1400} height={1050} className="rounded-[22px] shadow-card w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col h-full">
          <span className="eyebrow">The Reality</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-brand">The Hiring Challenge Ahmedabad Businesses Run Into</h2>
          <p className="mt-4 text-ink-soft text-lg leading-relaxed">
            Ahmedabad has grown fast, and hiring has grown competitive along with it. By the time a role gets properly advertised, screened, shortlisted and interviewed through a generic process, weeks have gone by — and the best names from the original pool have already accepted something else.
          </p>
          <div className="mt-8 grid gap-4 flex-1">
            {cards.map((c) => (
              <div key={c.title} className="card-elite p-6 flex gap-5 group h-full">
                <div className="shrink-0 grid place-items-center h-12 w-12 rounded-xl bg-brand-accent/15 text-brand-accent transition-transform group-hover:scale-110">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-ink text-lg">{c.title}</div>
                  <div className="text-sm text-ink-soft mt-1.5 leading-relaxed">{c.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- PROCESS TIMELINE -------- */
function Process() {
  const steps = [
    { icon: ClipboardList, title: "A Proper Role Conversation", body: "Not just a job title and a salary band — the team it sits in, what's gone wrong with past hires, and what a good outcome looks like six months in." },
    { icon: Search, title: "Local-First Sourcing", body: "Start from an existing Ahmedabad candidate network, then widen the search pan-India only if the role genuinely needs it." },
    { icon: UserCheck, title: "Screening Beyond the Resume", body: "Checking that compensation, growth and working-style expectations line up — so an accepted offer doesn't quietly fall apart during the notice period." },
    { icon: ListChecks, title: "A Shortlist With Context", body: "A focused shortlist that comes with context on each candidate — not just names and CVs attached to an email." },
    { icon: PartyPopper, title: "Offer & Joining Support", body: "Ongoing support through offer negotiation and the notice period itself — often where a promising hire firms up or slips away." },
  ];
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container-elite">
        <div className="max-w-3xl">
          <span className="eyebrow">Recruitment Process</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-brand">How the Screening Actually Runs</h2>
          <p className="mt-4 text-ink-soft text-lg">Five deliberate steps. No black-box handoffs. Same screening discipline wherever Elite HR operates — with faster response and a deeper local network here in Ahmedabad.</p>
        </div>
        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-brand/20 via-brand-accent/40 to-brand/20" />
          <div className="grid lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <StepCard key={s.title} step={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function StepCard({ step, index }: { step: { icon: any; title: string; body: string }; index: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative z-10 grid place-items-center h-16 w-16 rounded-2xl bg-brand text-white shadow-brand mx-auto">
        <step.icon className="h-6 w-6" />
        <span className="absolute -top-2 -right-2 grid place-items-center h-6 w-6 rounded-full bg-brand-accent text-white text-xs font-bold">
          {index + 1}
        </span>
      </div>
      <div className="card-elite mt-6 p-5 text-center">
        <div className="font-semibold text-ink">{step.title}</div>
        <div className="text-sm text-ink-soft mt-1.5 leading-relaxed">{step.body}</div>
      </div>
    </div>
  );
}

/* -------- WHY ELITE HR AHMEDABAD (Dark) -------- */
function WhyElite() {
  const cards = [
    { icon: Zap, title: "Speed That's Actually Speed", body: "Not a marketing claim — the practical result of a local team with active pipelines for common role types, instead of starting from a blank page." },
    { icon: ShieldCheck, title: "Low Back-out Rate", body: "Candidates are properly screened for fit before they're shared, so an accepted offer is considerably more likely to still be standing on someone's first day." },
    { icon: Briefcase, title: "Flexible By Design", body: "One carefully filled role or a department scaling in parallel — neither feels over-engineered for a small ask nor under-resourced for a bigger one." },
    { icon: UserCheck, title: "Genuine Senior Attention", body: "A deliberate cap on active mandates means your Ahmedabad role gets real attention, not a slice split across dozens of unrelated searches elsewhere." },
    { icon: Globe2, title: "One Point of Contact, Pan-India", body: "When a role can't be filled locally, the same team widens the search pan-India — no handoff partway through the mandate." },
    { icon: MapPin, title: "Actually Based in Ahmedabad", body: "Not a regional office covering Gujarat from elsewhere. In-person meetings with clients and candidates when it's useful — not a theoretical offer." },
  ];
  return (
    <section id="why" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, var(--color-brand) 0%, var(--color-brand-deep) 100%)" }}>
      <div className="container-elite relative">
        <div className="max-w-3xl">
          <span className="eyebrow !text-brand-accent">Why Choose Elite HR in Ahmedabad</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Local Speed, Boutique Attention, Pan-India Reach</h2>
          <p className="mt-4 text-white/80 text-lg">The most immediate advantage is speed. The most durable one is that every role gets real attention.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div key={c.title} className="group rounded-[18px] p-6 bg-white/[0.06] border border-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.10] hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.5)]">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-brand-accent text-white transition-transform group-hover:scale-110 group-hover:rotate-3">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 font-semibold text-white text-lg">{c.title}</div>
              <div className="text-sm text-white/75 mt-2 leading-relaxed">{c.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- INDUSTRIES (expanded) -------- */
function Industries() {
  const items = [
    { icon: Cpu, img: indIt, title: "Information Technology", desc: "Developers, architects, DevOps, data & AI talent.", slug: "information-technology" },
    { icon: Factory, img: indMfg, title: "Manufacturing", desc: "Plant, production, quality and supply-chain roles.", slug: "manufacturing" },
    { icon: HeartPulse, img: indHealth, title: "Healthcare", desc: "Clinical, diagnostic and hospital administration.", slug: "healthcare" },
    { icon: Landmark, img: indBfsi, title: "BFSI", desc: "Banking, insurance, NBFC and fintech mandates.", slug: "bfsi" },
    { icon: ShoppingBag, img: indRetail, title: "Retail & E-commerce", desc: "Category, store ops, D2C and marketplace teams.", slug: "retail-ecommerce" },
    { icon: Wrench, img: indEng, title: "Engineering", desc: "Design, mechanical, electrical and civil engineering.", slug: "engineering" },
    { icon: Truck, img: indMfg, title: "Logistics & Supply Chain", desc: "Warehousing, distribution, planning and last-mile.", slug: "logistics" },
    { icon: HardHat, img: indEng, title: "Construction", desc: "Site, project and infrastructure leadership hires.", slug: "construction" },
    { icon: Pill, img: indHealth, title: "Pharmaceutical", desc: "R&D, QA/QC, formulation and regulatory affairs.", slug: "pharmaceutical" },
    { icon: GraduationCap, img: indBfsi, title: "Education", desc: "Academic, EdTech product and operations roles.", slug: "education" },
    { icon: Package, img: indRetail, title: "FMCG", desc: "Sales, trade marketing and category leadership.", slug: "fmcg" },
    { icon: PhoneCall, img: indIt, title: "BPO / KPO", desc: "Volume hiring for voice, non-voice and analytics.", slug: "bpo-kpo" },
  ];
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="container-elite">
        <div className="max-w-3xl">
          <span className="eyebrow">Industries</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-brand">Delivering Recruitment Solutions Across Diverse Industries</h2>
          <p className="mt-4 text-ink-soft text-lg">Every industry hires differently. Our consultants understand the skills, hiring cycles and candidate expectations unique to each sector — for better hiring outcomes.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <a
              key={it.title}
              href={`/industries/${it.slug}/`}
              className="group relative rounded-[18px] overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1.5 block"
            >
              <img src={it.img} alt={it.title} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/70" />
              <div className="absolute top-5 left-5 grid place-items-center h-11 w-11 rounded-xl bg-white/15 backdrop-blur text-white border border-white/25">
                <it.icon className="h-5 w-5" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="text-white font-display font-bold text-xl">{it.title}</div>
                <div className="text-white/80 text-sm mt-1.5">{it.desc}</div>
                <div className="mt-4 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-1.5 text-brand-accent font-semibold text-sm">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="/industries/" className="btn-ghost-brand">
            Explore All Industries <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------- CITIES (Section 1) — Typographic Index -------- */
function Cities() {
  const cities = [
    { name: "Ahmedabad", specialty: "Corporate HQ · Strategic Hiring", slug: "ahmedabad", hq: true },
    { name: "Mumbai", specialty: "BFSI · Fintech · Media", slug: "mumbai" },
    { name: "Pune", specialty: "Auto · Manufacturing · IT", slug: "pune" },
    { name: "Bangalore", specialty: "Tech · Startups · R&D", slug: "bangalore" },
    { name: "Hyderabad", specialty: "Pharma · Biotech · IT", slug: "hyderabad" },
    { name: "Chennai", specialty: "SaaS · Auto · Logistics", slug: "chennai" },
    { name: "Delhi NCR", specialty: "E-comm · Retail · FMCG", slug: "delhi-ncr" },
    { name: "Kolkata", specialty: "Industrial · FMCG · Infra", slug: "kolkata" },
    { name: "Noida", specialty: "IT · BPO · Real Estate", slug: "noida" },
    { name: "Gurgaon", specialty: "Consulting · Tech · GCC", slug: "gurgaon" },
    { name: "Surat", specialty: "Textiles · Diamond · Energy", slug: "surat" },
    { name: "Vadodara", specialty: "Chemicals · Power · EPC", slug: "vadodara" },
  ];
  return (
    <section id="cities" className="py-24" style={{ background: "var(--color-surface)" }}>
      <div className="container-elite">
        <div className="max-w-2xl">
          <span className="eyebrow">Pan-India Reach</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
            Delivering Recruitment Services Across{" "}
            <span style={{ color: "var(--color-brand-accent)" }}>India's Leading Cities</span>
          </h2>
          <p className="mt-4 text-ink-soft text-lg">
            Strategic talent acquisition powered by local market expertise and a pan-India network — hire in one city or scale across many with the same senior-led team.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 border-t border-border">
          {cities.map((c) => {
            const accent = c.hq ? "var(--color-brand-accent)" : "var(--color-secondary)";
            return (
              <a
                key={c.slug}
                href={`/recruitment-agency-${c.slug}/`}
                className="group block py-7 border-b border-border relative"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-semibold text-xl text-brand transition-colors group-hover:text-secondary truncate">
                        {c.name}
                      </h3>
                      {c.hq && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-brand-accent text-white">
                          HQ
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-ink-soft">{c.specialty}</p>
                  </div>
                  <span
                    className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: accent }}
                    aria-hidden
                  >
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-brand" style={{ background: "var(--color-brand)" }}>
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-xl md:text-2xl text-white">
              Looking for recruitment support in another city?
            </div>
            <p className="text-white/75 mt-1">We offer remote hiring and executive search pan-India.</p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            Talk to Our Experts <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}



/* -------- IT & TECH RECRUITMENT (Section 3) -------- */
function ITRecruitment() {
  const cards = [
    { icon: Code2, title: "Software Development" },
    { icon: ServerCog, title: "DevOps & Cloud" },
    { icon: Bug, title: "QA & Testing" },
    { icon: Database, title: "Data Engineering" },
    { icon: Lock, title: "Cyber Security" },
    { icon: Palette, title: "UI / UX Design" },
    { icon: Brain, title: "Artificial Intelligence" },
    { icon: Boxes, title: "ERP & SAP" },
    { icon: Network, title: "Infrastructure" },
    { icon: KanbanSquare, title: "Project Management" },
    { icon: LineChart, title: "Business Analysis" },
    { icon: Headphones, title: "Technical Support" },
  ];
  return (
    <section id="it-recruitment" className="py-24 bg-white">
      <div className="container-elite">
        <div className="max-w-3xl">
          <span className="eyebrow">IT & Technology</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-brand">Delivering IT & Technology Recruitment Across India's Major Cities</h2>
          <p className="mt-4 text-ink-soft text-lg">
            Technology hiring moves quickly. Elite HR connects businesses with experienced developers, engineers, architects, analysts, DevOps specialists, cybersecurity professionals and IT leaders across India's largest technology hubs.
          </p>
        </div>
        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[28px] bg-gradient-to-tr from-brand/10 to-brand-accent/15 -z-10" />
              <img
                src={indIt}
                alt="Developers collaborating on a technology hiring engagement"
                className="rounded-[22px] shadow-card w-full h-[520px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-white shadow-card-hover px-5 py-4 flex items-center gap-4">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-brand text-white">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-accent">Tech Hiring</div>
                  <div className="text-sm font-semibold text-ink">Junior to Leadership · Pan-India</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {cards.map((c) => (
                <a
                  key={c.title}
                  href="/services/it-staffing/"
                  className="group card-elite p-5 flex flex-col gap-3"
                >
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-brand/10 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-110">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="font-semibold text-ink">{c.title}</div>
                  <div className="inline-flex items-center gap-1.5 text-brand-accent text-sm font-semibold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 rounded-[22px] p-8 md:p-10 relative overflow-hidden" style={{ background: "linear-gradient(120deg, var(--color-brand-deep) 0%, var(--color-brand) 55%, #0056A4 100%)" }}>
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, #fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-brand-accent">
                <Sparkles className="h-3.5 w-3.5" /> Need IT Talent Quickly?
              </div>
              <h3 className="mt-3 font-display font-bold text-white text-2xl md:text-3xl">Permanent, IT Staffing, Contract & Remote Hiring</h3>
              <p className="mt-3 text-white/80 max-w-2xl">
                We provide Permanent Hiring, IT Staffing, IT Contract Staffing and Remote Hiring solutions across India — with senior consultants owning every mandate end-to-end.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/services/it-staffing/" className="btn-primary">Hire IT Talent <ArrowRight className="h-4 w-4" /></a>
              <a href="#contact" className="btn-secondary"><Handshake className="h-4 w-4" /> Talk to a Recruiter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* -------- LOCAL + PAN INDIA -------- */
function PanIndia() {
  return (
    <section className="py-24" style={{ background: "var(--color-surface)" }}>
      <div className="container-elite grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="aspect-square max-w-md mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand/10 to-brand-accent/10 blur-2xl" />
            <svg viewBox="0 0 400 400" className="relative w-full h-full">
              <defs>
                <radialGradient id="mapGrad" cx="50%" cy="50%" r="55%">
                  <stop offset="0%" stopColor="#0056A4" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#003366" stopOpacity="0.95" />
                </radialGradient>
              </defs>
              {/* Stylised India silhouette */}
              <path
                d="M170 40 L215 55 L245 85 L260 120 L285 150 L305 185 L315 225 L295 265 L260 295 L235 330 L200 355 L170 345 L155 315 L140 285 L120 260 L100 230 L95 195 L110 165 L125 130 L140 95 L155 65 Z"
                fill="url(#mapGrad)"
                opacity="0.9"
              />
              {/* Pulsing pin for Ahmedabad */}
              <g>
                <circle cx="150" cy="150" r="24" fill="#F7941D" opacity="0.25">
                  <animate attributeName="r" values="20;36;20" dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.35;0;0.35" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="150" cy="150" r="8" fill="#F7941D" />
                <circle cx="150" cy="150" r="3" fill="#fff" />
              </g>
              {/* Reach lines */}
              {[
                [220, 200],
                [250, 260],
                [200, 300],
                [270, 130],
                [180, 90],
              ].map(([x, y], i) => (
                <line key={i} x1="150" y1="150" x2={x} y2={y} stroke="#F7941D" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              ))}
              <text x="170" y="145" fill="#fff" fontFamily="Poppins" fontSize="14" fontWeight="700">Ahmedabad</text>
            </svg>
          </div>
        </div>
        <div>
          <span className="eyebrow">Local + Pan-India</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-brand">Hiring That Starts Local, Expands Nationally When You Need It</h2>
          <p className="mt-4 text-ink-soft text-lg leading-relaxed">
            Every mandate begins with Ahmedabad-first sourcing — because local hires join faster and stay longer. When a role calls for skills the local market doesn't hold in depth, the same team expands search pan-India: Mumbai, Pune, Bangalore, Hyderabad, Chennai, Delhi and beyond, with the same senior-led rigour.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {[
              "Ahmedabad-first sourcing by default",
              "Pan-India headhunt when the role needs it",
              "Single senior consultant end-to-end",
              "No handoff between city teams",
            ].map((t) => (
              <div key={t} className="flex items-start gap-2.5 text-sm text-ink">
                <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" /> {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- STATS -------- */
function Stats() {
  const items = [
    { n: 1000, s: "+", label: "Successful Placements" },
    { n: 500, s: "+", label: "Hiring Partners" },
    { n: 95, s: "%", label: "Offer Acceptance" },
    { n: 0, s: "", label: "Pan-India Coverage", text: "PAN India" },
  ];
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--color-brand-deep) 0%, var(--color-brand) 60%, #0056A4 100%)" }}>
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="container-elite relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {items.map((it) => (
            <div key={it.label}>
              {it.text ? (
                <span className="font-display font-bold text-5xl md:text-6xl text-white">{it.text}</span>
              ) : (
                <Counter end={it.n} suffix={it.s} />
              )}
              <div className="mt-3 text-white/80 font-medium">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- FAQ -------- */
const faqs = [
  {
    q: "Do you have an office in Ahmedabad?",
    a: "Yes — Elite HR Services is headquartered in Ahmedabad, which is also where the core team operates from day to day, rather than covering the city remotely from another location.",
  },
  {
    q: "How quickly can you source candidates locally in Ahmedabad?",
    a: "It depends on the specific role, but because there's already an active local candidate network in place, shortlists for common role types tend to come together considerably faster than a fully cold search would allow.",
  },
  {
    q: "Can you help if the right candidate isn't available locally?",
    a: "Yes — while sourcing typically starts with the local market, the same team can widen the search pan-India if a role genuinely needs it, without handing the mandate to a different point of contact partway through.",
  },
  {
    q: "Is this service limited to certain industries in Ahmedabad?",
    a: "No — hiring support is offered across functions and sectors, regardless of the industry your business operates in.",
  },
  {
    q: "Do you only handle large hiring drives, or single roles too?",
    a: "Single-role mandates are handled with the same screening depth as larger hiring drives — there's no minimum requirement to work with Elite HR.",
  },
  {
    q: "Can we meet in person to discuss a role?",
    a: "Yes — being based in Ahmedabad means an in-person conversation is genuinely possible if that's useful for a particular hire, rather than everything being restricted to calls or email.",
  },
];
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="container-elite max-w-4xl">
        <div className="text-center">
          <span className="eyebrow justify-center">FAQs</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-brand">Frequently Asked Questions</h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-[18px] border border-border bg-white shadow-card overflow-hidden">
              <button
                className="w-full flex items-center justify-between text-left p-6 gap-6"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-ink text-base md:text-lg">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-brand shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div
                className="grid transition-all duration-500 ease-out"
                style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-ink-soft leading-relaxed">{f.a}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- FINAL CTA + CONTACT + FOOTER -------- */
function FinalCTA() {
  return (
    <section className="py-20" style={{ background: "linear-gradient(120deg, var(--color-brand-deep) 0%, var(--color-brand) 100%)" }}>
      <div className="container-elite text-center">
        <span className="eyebrow !text-brand-accent justify-center">Hiring in Ahmedabad Right Now?</span>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto">What's the Role You're Currently Trying to Fill?</h2>
        <p className="mt-5 text-white/85 text-lg max-w-2xl mx-auto">
          Share the details and it'll be much easier to give you a realistic sense of timeline, given what's actually happening in the local market for that kind of position right now.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#contact" className="btn-primary">Hire Talent <ArrowRight className="h-4 w-4" /></a>
          <a href="https://wa.me/919999999999" className="btn-secondary"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container-elite grid lg:grid-cols-2 gap-12">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-brand">Let's Talk About Your Next Hire</h2>
          <p className="mt-4 text-ink-soft text-lg">Reach the Ahmedabad team directly — no forms sitting in an inbox for days.</p>
          <div className="mt-8 space-y-4">
            {[
              { icon: Phone, label: "Phone", value: "+91 99999 99999" },
              { icon: Mail, label: "Email", value: "hello@elitehr.co.in" },
              { icon: MapPin, label: "Office", value: "Ahmedabad, Gujarat, India" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4 p-5 rounded-[18px] bg-surface border border-border">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-brand/10 text-brand">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-ink-soft font-semibold">{c.label}</div>
                  <div className="text-ink font-semibold">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-[18px] bg-gradient-to-br from-brand to-brand-deep text-white">
            <div className="flex items-center gap-2 text-brand-accent font-semibold text-sm uppercase tracking-wider">
              <Sparkles className="h-4 w-4" /> Response SLA
            </div>
            <div className="mt-2 text-lg font-semibold">Same-day response on all enquiries.</div>
            <div className="text-white/80 text-sm mt-1">Weekdays, Ahmedabad business hours.</div>
          </div>
        </div>
        <form className="rounded-[22px] bg-surface border border-border p-8 shadow-card" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full Name" placeholder="Your name" />
            <Field label="Company" placeholder="Company name" />
            <Field label="Work Email" type="email" placeholder="you@company.com" />
            <Field label="Phone" placeholder="+91" />
          </div>
          <Field label="Role You're Hiring For" placeholder="e.g. Senior React Developer" />
          <div>
            <label className="text-sm font-semibold text-ink">Brief</label>
            <textarea rows={4} placeholder="Tell us about the role, seniority and timeline." className="mt-2 w-full rounded-[12px] border border-border bg-white px-4 py-3 text-ink placeholder:text-ink-soft/70 focus:outline-none focus:ring-2 focus:ring-brand" />
          </div>
          <button className="btn-primary w-full mt-6">Send Enquiry <ArrowRight className="h-4 w-4" /></button>
          <p className="text-xs text-ink-soft mt-3 text-center">We respond within a few business hours.</p>
        </form>
      </div>
    </section>
  );
}
function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div className="mb-4">
      <label className="text-sm font-semibold text-ink">{label}</label>
      <input type={type} placeholder={placeholder} className="mt-2 w-full rounded-[12px] border border-border bg-white px-4 py-3 text-ink placeholder:text-ink-soft/70 focus:outline-none focus:ring-2 focus:ring-brand" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-14" style={{ background: "var(--color-brand-deep)" }}>
      <div className="container-elite">
        <div className="rounded-[22px] p-10 md:p-14 bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-white">Let's Build Your Team in Ahmedabad</h3>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">Boutique, senior-led recruitment — locally rooted, nationally capable.</p>
          <a href="#contact" className="btn-primary mt-8 inline-flex">Talk to Our Recruitment Experts <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-brand-accent text-white font-display font-bold text-sm">E</span>
            <span className="text-white font-semibold">Elite HR Services</span>
          </div>
          <div>© {new Date().getFullYear()} Elite HR Services · Ahmedabad, India</div>
        </div>
      </div>
    </footer>
  );
}

export default function AhmedabadLanding() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LocalAdvantage />
        <Challenges />
        <Process />
        <WhyElite />
        <Industries />
        <ITRecruitment />
        <Cities />
        <PanIndia />
        <Stats />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

