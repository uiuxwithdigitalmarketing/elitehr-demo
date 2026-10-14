import { useEffect, useRef, useState, type ComponentType } from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Building2,
  MapPin,
  Users,
  Clock,
  Zap,
  ShieldCheck,
  Handshake,
  Globe2,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

/* ================== Types ================== */

export type PageKind = "industry" | "city" | "service" | "industry-city" | "location";

export interface QuickStat {
  icon: LucideIcon;
  label: string;
  value: string;
}
export interface Challenge {
  icon: LucideIcon;
  title: string;
  body: string;
}
export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  body: string;
}
export interface ServiceCard {
  icon: LucideIcon;
  title: string;
  body: string;
  href: string;
}
export interface Role {
  title: string;
  meta?: string;
  demand?: "High" | "Medium" | "Steady";
}
export interface ImageCard {
  title: string;
  image: string;
  href: string;
  meta?: string;
}
export interface FAQItem {
  q: string;
  a: string;
}
export interface Counter {
  value: number;
  suffix?: string;
  label: string;
}
export interface RelatedLink {
  title: string;
  href: string;
}

export interface LandingConfig {
  kind: PageKind;
  eyebrow: string;
  h1: string;
  intro: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  heroImage: string;

  quickStats: QuickStat[];

  about: {
    eyebrow: string;
    heading: string;
    body: string[];
    highlights?: string[];
    image: string;
  };

  challenges: {
    heading: string;
    subheading?: string;
    items: Challenge[];
  };

  process?: {
    heading: string;
    steps: ProcessStep[];
  };

  services?: {
    heading: string;
    subheading?: string;
    items: ServiceCard[];
  };

  roles?: {
    heading: string;
    subheading?: string;
    items: Role[];
  };

  industries?: {
    heading: string;
    subheading?: string;
    items: ImageCard[];
  };

  cities?: {
    heading: string;
    subheading?: string;
    items: ImageCard[];
  };

  whyUs?: {
    heading: string;
    items: { icon: LucideIcon; title: string; body: string }[];
  };

  stats?: Counter[];

  testimonials?: { quote: string; name: string; role: string }[];

  faqs: FAQItem[];

  related?: {
    heading: string;
    groups: { title: string; links: RelatedLink[] }[];
  };
}

/* ================== Helpers ================== */

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

function Reveal({
  children,
  delay = 0,
  as: As = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const Cmp = As as unknown as ComponentType<Record<string, unknown>>;
  return (
    <Cmp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </Cmp>
  );
}

function Counter({ value, suffix = "", label }: Counter) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!shown) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, value]);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-6xl font-bold text-white tabular-nums">
        {n.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-white/70 text-sm uppercase tracking-widest">{label}</div>
    </div>
  );
}

/* ================== Header ================== */

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-white/95 backdrop-blur shadow-[0_4px_24px_-16px_rgba(0,51,102,0.35)]" : "bg-transparent"
      }`}
    >
      <div className="container-elite flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-[color:var(--color-brand)] grid place-items-center">
            <span className="text-white font-display font-bold">E</span>
          </div>
          <div className="leading-tight">
            <div className={`font-display font-bold ${scrolled ? "text-[color:var(--color-brand)]" : "text-white"}`}>
              Elite HR
            </div>
            <div className={`text-[11px] uppercase tracking-widest ${scrolled ? "text-[color:var(--color-ink-soft)]" : "text-white/70"}`}>
              Services
            </div>
          </div>
        </Link>
        <nav className={`hidden lg:flex items-center gap-8 text-sm font-medium ${scrolled ? "text-[color:var(--color-ink)]" : "text-white"}`}>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <a href="#industries">Industries</a>
          <a href="#cities">Locations</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="btn-primary !py-2.5 !px-5 text-sm">Talk to Us</a>
        </nav>
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className={scrolled ? "text-[color:var(--color-brand)]" : ""} /> : <Menu className={scrolled ? "text-[color:var(--color-brand)]" : ""} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-[color:var(--color-border)]">
          <div className="container-elite py-4 flex flex-col gap-3 text-[color:var(--color-ink)]">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <a href="#industries" onClick={() => setOpen(false)}>Industries</a>
            <a href="#cities" onClick={() => setOpen(false)}>Locations</a>
            <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
            <a href="#contact" className="btn-primary !py-2.5 text-sm" onClick={() => setOpen(false)}>Talk to Us</a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ================== Sticky CTA + Floating WhatsApp ================== */

function StickyCta() {
  return (
    <>
      <a
        href="https://wa.me/919999999999"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-lg hover:scale-110 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}

/* ================== The Template ================== */

export default function LandingTemplate({ config }: { config: LandingConfig }) {
  return (
    <div className="min-h-screen bg-[color:var(--color-surface)]">
      <Header />
      <StickyCta />
      <main>
        <Hero c={config} />
        <QuickStats c={config} />
        <About c={config} />
        <Challenges c={config} />
        {config.process && <Process c={config} />}
        {config.services && <Services c={config} />}
        {config.roles && <Roles c={config} />}
        {config.industries && <Industries c={config} />}
        {config.cities && <Cities c={config} />}
        {config.whyUs && <WhyUs c={config} />}
        {config.stats && <Stats c={config} />}
        {config.testimonials && <Testimonials c={config} />}
        <FAQ c={config} />
        {config.related && <Related c={config} />}
        <Contact c={config} />
      </main>
      <Footer />
    </div>
  );
}

/* ================== Sections ================== */

function Hero({ c }: { c: LandingConfig }) {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={c.heroImage} alt="" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,20,40,0.10) 0%, rgba(0,20,40,0.55) 55%, rgba(0,20,40,0.75) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-brand-deep)]/70 via-[color:var(--color-brand)]/30 to-transparent" />
      </div>
      <div className="relative container-elite pt-32 pb-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 text-white">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="h-3.5 w-3.5 text-[color:var(--color-brand-accent)]" />
              {c.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-display font-bold text-white text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight max-w-3xl">
              {c.h1}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-white/85 max-w-2xl leading-relaxed">{c.intro}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={c.primaryCta?.href ?? "#contact"} className="btn-primary">
                {c.primaryCta?.label ?? "Hire Talent"}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={c.secondaryCta?.href ?? "#contact"} className="btn-secondary">
                {c.secondaryCta?.label ?? "Talk to an Expert"}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest uppercase animate-bounce">
        Scroll
      </div>
    </section>
  );
}

function QuickStats({ c }: { c: LandingConfig }) {
  return (
    <section className="relative -mt-16 z-10">
      <div className="container-elite">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-[18px] shadow-[0_24px_60px_-30px_rgba(0,51,102,0.35)] p-6 md:p-8">
          {c.quickStats.map((s, i) => (
            <Reveal key={i} delay={i * 80} className="flex items-start gap-4">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-[color:var(--color-brand)]/8 grid place-items-center">
                <s.icon className="h-5 w-5 text-[color:var(--color-brand)]" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-[color:var(--color-ink-soft)]">{s.label}</div>
                <div className="font-display font-semibold text-[color:var(--color-brand)] mt-0.5">{s.value}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ c }: { c: LandingConfig }) {
  return (
    <section className="py-24 md:py-32">
      <div className="container-elite grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[24px] bg-gradient-to-br from-[color:var(--color-brand)]/10 to-[color:var(--color-brand-accent)]/10 -z-10" />
            <img src={c.about.image} alt="" className="rounded-[18px] shadow-xl w-full aspect-[4/5] object-cover" />
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">{c.about.eyebrow}</span>
            <h2 className="mt-4 font-display text-3xl md:text-[42px] leading-[1.1] tracking-tight text-[color:var(--color-brand)]">
              {c.about.heading}
            </h2>
          </Reveal>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-[color:var(--color-ink-soft)] max-w-2xl">
            {c.about.body.map((p, i) => (
              <Reveal key={i} delay={80 * i}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          {c.about.highlights && (
            <Reveal delay={200} className="mt-8 grid sm:grid-cols-2 gap-3">
              {c.about.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-[color:var(--color-brand-accent)] shrink-0 mt-0.5" />
                  <span className="text-[color:var(--color-ink)] font-medium">{h}</span>
                </div>
              ))}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

function Challenges({ c }: { c: LandingConfig }) {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-elite">
        <div className="max-w-2xl">
          <span className="eyebrow">Hiring Realities</span>
          <h2 className="mt-4 font-display text-3xl md:text-[42px] leading-[1.1] tracking-tight text-[color:var(--color-brand)]">
            {c.challenges.heading}
          </h2>
          {c.challenges.subheading && (
            <p className="mt-4 text-lg text-[color:var(--color-ink-soft)]">{c.challenges.subheading}</p>
          )}
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.challenges.items.map((ch, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="group card-elite p-8 h-full border border-[color:var(--color-border)]">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[color:var(--color-brand)] to-[color:var(--color-brand-deep)] grid place-items-center shadow-[0_10px_24px_-10px_rgba(0,51,102,0.5)] group-hover:scale-110 transition">
                  <ch.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 font-display text-xl text-[color:var(--color-brand)]">{ch.title}</h3>
                <p className="mt-3 text-[color:var(--color-ink-soft)] leading-relaxed">{ch.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process({ c }: { c: LandingConfig }) {
  const steps = c.process!.steps;
  return (
    <section className="py-24 md:py-32">
      <div className="container-elite">
        <div className="max-w-2xl">
          <span className="eyebrow">The Elite HR Process</span>
          <h2 className="mt-4 font-display text-3xl md:text-[42px] leading-[1.1] tracking-tight text-[color:var(--color-brand)]">
            {c.process!.heading}
          </h2>
        </div>
        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[color:var(--color-brand)]/25 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="text-center">
                  <div className="relative mx-auto h-16 w-16 rounded-full bg-white border-2 border-[color:var(--color-brand)]/10 grid place-items-center shadow-md">
                    <s.icon className="h-6 w-6 text-[color:var(--color-brand)]" />
                    <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-[color:var(--color-brand-accent)] text-white text-xs font-bold grid place-items-center">
                      {i + 1}
                    </div>
                  </div>
                  <div className="mt-4 font-semibold text-[color:var(--color-brand)] text-sm">{s.title}</div>
                  <div className="mt-1.5 text-xs text-[color:var(--color-ink-soft)] leading-relaxed">{s.body}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ c }: { c: LandingConfig }) {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-elite">
        <div className="max-w-2xl">
          <span className="eyebrow">What we deliver</span>
          <h2 className="mt-4 font-display text-3xl md:text-[42px] leading-[1.1] tracking-tight text-[color:var(--color-brand)]">
            {c.services!.heading}
          </h2>
          {c.services!.subheading && (
            <p className="mt-4 text-lg text-[color:var(--color-ink-soft)]">{c.services!.subheading}</p>
          )}
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.services!.items.map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <a href={s.href} className="group card-elite p-8 h-full block border border-transparent hover:border-[color:var(--color-brand)]/20">
                <div className="h-14 w-14 rounded-2xl bg-[color:var(--color-brand-accent)]/10 grid place-items-center">
                  <s.icon className="h-6 w-6 text-[color:var(--color-brand-accent)]" />
                </div>
                <h3 className="mt-6 font-display text-xl text-[color:var(--color-brand)]">{s.title}</h3>
                <p className="mt-3 text-[color:var(--color-ink-soft)] leading-relaxed">{s.body}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-[color:var(--color-brand)] font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roles({ c }: { c: LandingConfig }) {
  return (
    <section className="py-24 md:py-32">
      <div className="container-elite">
        <div className="max-w-2xl">
          <span className="eyebrow">Featured Roles</span>
          <h2 className="mt-4 font-display text-3xl md:text-[42px] leading-[1.1] tracking-tight text-[color:var(--color-brand)]">
            {c.roles!.heading}
          </h2>
          {c.roles!.subheading && (
            <p className="mt-4 text-lg text-[color:var(--color-ink-soft)]">{c.roles!.subheading}</p>
          )}
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {c.roles!.items.map((r, i) => (
            <Reveal key={i} delay={i * 40}>
              <div className="group bg-white rounded-[18px] p-6 border border-[color:var(--color-border)] hover:border-[color:var(--color-brand)]/30 hover:-translate-y-1 transition-all">
                <div className="flex items-start justify-between gap-3">
                  <Briefcase className="h-5 w-5 text-[color:var(--color-brand)]/60 shrink-0" />
                  {r.demand && (
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      r.demand === "High"
                        ? "bg-[color:var(--color-brand-accent)]/15 text-[color:var(--color-brand-accent)]"
                        : "bg-[color:var(--color-brand)]/10 text-[color:var(--color-brand)]"
                    }`}>
                      {r.demand} demand
                    </span>
                  )}
                </div>
                <div className="mt-4 font-display font-semibold text-[color:var(--color-brand)]">{r.title}</div>
                {r.meta && <div className="mt-1 text-sm text-[color:var(--color-ink-soft)]">{r.meta}</div>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageCardGrid({
  id,
  heading,
  subheading,
  items,
  eyebrow,
}: {
  id?: string;
  heading: string;
  subheading?: string;
  items: ImageCard[];
  eyebrow: string;
}) {
  return (
    <section id={id} className="py-24 md:py-32 bg-white">
      <div className="container-elite">
        <div className="max-w-2xl">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl md:text-[42px] leading-[1.1] tracking-tight text-[color:var(--color-brand)]">
            {heading}
          </h2>
          {subheading && <p className="mt-4 text-lg text-[color:var(--color-ink-soft)]">{subheading}</p>}
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 60}>
              <a
                href={it.href}
                className="group relative block overflow-hidden rounded-[18px] aspect-[4/5] shadow-lg"
              >
                <img
                  src={it.image}
                  alt={it.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-brand-deep)]/95 via-[color:var(--color-brand-deep)]/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-display text-2xl font-semibold">{it.title}</h3>
                    {it.meta && <div className="text-white/75 text-sm mt-1">{it.meta}</div>}
                    <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries({ c }: { c: LandingConfig }) {
  return (
    <ImageCardGrid
      id="industries"
      eyebrow="Industry Coverage"
      heading={c.industries!.heading}
      subheading={c.industries!.subheading}
      items={c.industries!.items}
    />
  );
}

function Cities({ c }: { c: LandingConfig }) {
  return (
    <ImageCardGrid
      id="cities"
      eyebrow="City Coverage"
      heading={c.cities!.heading}
      subheading={c.cities!.subheading}
      items={c.cities!.items}
    />
  );
}

function WhyUs({ c }: { c: LandingConfig }) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[color:var(--color-brand-deep)]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 30%, rgba(247,148,29,0.25), transparent 55%), radial-gradient(circle at 85% 70%, rgba(0,86,164,0.5), transparent 60%)",
        }}
      />
      <div className="relative container-elite">
        <div className="max-w-2xl">
          <span className="eyebrow !text-[color:var(--color-brand-accent)]">Why Elite HR</span>
          <h2 className="mt-4 font-display text-3xl md:text-[42px] leading-[1.1] tracking-tight text-white">
            {c.whyUs!.heading}
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {c.whyUs!.items.map((w, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="rounded-[18px] bg-white/[0.06] backdrop-blur border border-white/10 p-6 h-full hover:bg-white/[0.1] transition">
                <div className="h-11 w-11 rounded-xl bg-[color:var(--color-brand-accent)]/20 grid place-items-center">
                  <w.icon className="h-5 w-5 text-[color:var(--color-brand-accent)]" />
                </div>
                <div className="mt-5 font-display font-semibold text-white">{w.title}</div>
                <div className="mt-2 text-sm text-white/70 leading-relaxed">{w.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats({ c }: { c: LandingConfig }) {
  return (
    <section className="py-20 bg-[color:var(--color-brand)]">
      <div className="container-elite grid grid-cols-2 md:grid-cols-4 gap-8">
        {c.stats!.map((s, i) => (
          <Counter key={i} {...s} />
        ))}
      </div>
    </section>
  );
}

function Testimonials({ c }: { c: LandingConfig }) {
  const items = c.testimonials!;
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [items.length]);
  const t = items[i];
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-elite max-w-4xl text-center">
        <span className="eyebrow">Client Voices</span>
        <h2 className="mt-4 font-display text-3xl md:text-[42px] leading-[1.1] tracking-tight text-[color:var(--color-brand)]">
          Trusted by hiring leaders across India
        </h2>
        <div key={i} className="mt-12 animate-fade-up">
          <div className="font-display text-2xl md:text-3xl leading-snug text-[color:var(--color-ink)]">
            "{t.quote}"
          </div>
          <div className="mt-6 text-[color:var(--color-brand)] font-semibold">{t.name}</div>
          <div className="text-sm text-[color:var(--color-ink-soft)]">{t.role}</div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Go to testimonial ${k + 1}`}
              className={`h-2 rounded-full transition-all ${
                k === i ? "w-8 bg-[color:var(--color-brand-accent)]" : "w-2 bg-[color:var(--color-border)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ({ c }: { c: LandingConfig }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-elite grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 font-display text-3xl md:text-[42px] leading-[1.05] tracking-tight text-[color:var(--color-brand)]">
            Common questions from hiring leaders
          </h2>
          <p className="mt-5 text-[color:var(--color-ink-soft)]">
            Can't find the answer you need? Talk to a consultant — no gatekeeping, no long forms.
          </p>
          <a href="#contact" className="mt-6 btn-ghost-brand inline-flex">
            Contact us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="lg:col-span-8 space-y-3">
          {c.faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-white rounded-[18px] border border-[color:var(--color-border)] overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left p-6 flex items-center justify-between gap-6"
                >
                  <span className="font-display font-semibold text-[color:var(--color-brand)] text-lg">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[color:var(--color-brand)] shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[color:var(--color-ink-soft)] leading-relaxed">{f.a}</p>
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

function Related({ c }: { c: LandingConfig }) {
  return (
    <section className="py-24 bg-white border-t border-[color:var(--color-border)]">
      <div className="container-elite">
        <span className="eyebrow">Continue exploring</span>
        <h2 className="mt-4 font-display text-2xl md:text-3xl text-[color:var(--color-brand)]">
          {c.related!.heading}
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {c.related!.groups.map((g) => (
            <div key={g.title}>
              <div className="text-xs uppercase tracking-widest text-[color:var(--color-brand-accent)] font-bold">
                {g.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 text-[color:var(--color-ink)] hover:text-[color:var(--color-brand)] font-medium"
                    >
                      {l.title}
                      <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ c }: { c: LandingConfig }) {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-[color:var(--color-brand)] to-[color:var(--color-brand-deep)] text-white">
        <div className="container-elite grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow !text-[color:var(--color-brand-accent)]">Ready to hire?</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">Let's build your team.</h2>
            <p className="mt-5 text-white/80 text-lg max-w-xl">
              Share your requirement. A senior consultant will get back within one business day with a plan and initial shortlist timeline.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href="#contact-form" className="btn-primary">Hire Talent <ArrowRight className="h-4 w-4" /></a>
            <a href="https://wa.me/919999999999" className="btn-secondary"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </div>
        </div>
      </section>
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="container-elite grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2 className="mt-4 font-display text-3xl md:text-[42px] leading-[1.1] tracking-tight text-[color:var(--color-brand)]">
              Talk to an Elite HR consultant
            </h2>
            <div className="mt-10 space-y-6">
              {[
                { icon: Building2, label: "Office", value: "Ahmedabad, Gujarat, India" },
                { icon: Phone, label: "Phone", value: "+91 99999 99999" },
                { icon: Mail, label: "Email", value: "hello@elitehr.co.in" },
                { icon: Clock, label: "Working Hours", value: "Mon–Sat, 9:30 AM – 7:00 PM IST" },
              ].map((it) => (
                <div key={it.label} className="flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-[color:var(--color-brand)]/8 grid place-items-center">
                    <it.icon className="h-5 w-5 text-[color:var(--color-brand)]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[color:var(--color-ink-soft)]">{it.label}</div>
                    <div className="font-display font-semibold text-[color:var(--color-brand)] mt-0.5">{it.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form
            id="contact-form"
            onSubmit={(e) => e.preventDefault()}
            className="rounded-[18px] bg-[color:var(--color-surface)] border border-[color:var(--color-border)] p-6 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-semibold text-[color:var(--color-brand)]">Full name</span>
                <input type="text" required className="mt-1.5 w-full rounded-lg bg-white border border-[color:var(--color-border)] px-4 py-3 focus:outline-none focus:border-[color:var(--color-brand)]" />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-[color:var(--color-brand)]">Company</span>
                <input type="text" required className="mt-1.5 w-full rounded-lg bg-white border border-[color:var(--color-border)] px-4 py-3 focus:outline-none focus:border-[color:var(--color-brand)]" />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-[color:var(--color-brand)]">Work email</span>
                <input type="email" required className="mt-1.5 w-full rounded-lg bg-white border border-[color:var(--color-border)] px-4 py-3 focus:outline-none focus:border-[color:var(--color-brand)]" />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-[color:var(--color-brand)]">Phone</span>
                <input type="tel" className="mt-1.5 w-full rounded-lg bg-white border border-[color:var(--color-border)] px-4 py-3 focus:outline-none focus:border-[color:var(--color-brand)]" />
              </label>
            </div>
            <label className="block mt-4">
              <span className="text-sm font-semibold text-[color:var(--color-brand)]">Tell us about the role(s)</span>
              <textarea
                rows={4}
                className="mt-1.5 w-full rounded-lg bg-white border border-[color:var(--color-border)] px-4 py-3 focus:outline-none focus:border-[color:var(--color-brand)]"
                placeholder="Role title, location, seniority, timeline…"
              />
            </label>
            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              Send enquiry <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-4 text-xs text-[color:var(--color-ink-soft)]">
              By submitting, you agree to be contacted by Elite HR Services about your enquiry.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--color-brand-deep)] text-white/80">
      <div className="container-elite py-16 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-[color:var(--color-brand-accent)] grid place-items-center">
              <span className="text-white font-display font-bold">E</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-white">Elite HR</div>
              <div className="text-[11px] uppercase tracking-widest text-white/60">Services</div>
            </div>
          </div>
          <p className="mt-4 text-sm">Boutique, senior-led recruitment consulting across India.</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-[color:var(--color-brand-accent)] font-bold">Services</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/services">Permanent Staffing</a></li>
            <li><a href="/services">Executive Search</a></li>
            <li><a href="/services">IT Staffing</a></li>
            <li><a href="/services">Remote Hiring</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-[color:var(--color-brand-accent)] font-bold">Locations</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/locations/ahmedabad">Ahmedabad</a></li>
            <li><a href="/locations/mumbai">Mumbai</a></li>
            <li><a href="/locations/bangalore">Bangalore</a></li>
            <li><a href="/locations/pune">Pune</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-[color:var(--color-brand-accent)] font-bold">Contact</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>hello@elitehr.co.in</li>
            <li>+91 99999 99999</li>
            <li>Ahmedabad, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-elite py-6 text-xs text-white/60 flex flex-wrap gap-3 justify-between">
          <div>© {new Date().getFullYear()} Elite HR Services. All rights reserved.</div>
          <div>Boutique recruitment consulting · Pan-India</div>
        </div>
      </div>
    </footer>
  );
}
