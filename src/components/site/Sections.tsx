import { useState, type ReactNode } from "react";
import {
  BarChart3,
  Brain,
  ChevronDown,
  Compass,
  Users,
  Gauge,
  Layers,
  LineChart,
  Rocket,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Counter, Reveal } from "./Reveal";
import { experience, journey } from "./data";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] font-semibold">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className,
  label,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        "section-fade scroll-mt-24 border-t border-border py-20 sm:py-24 lg:py-28",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

const capabilities = [
  {
    icon: Brain,
    title: "AI & Generative AI",
    body: "Building AI-powered products, LLM applications and automation systems.",
  },
  {
    icon: Compass,
    title: "Product Strategy",
    body: "Discovery, roadmaps, PRDs and prioritization grounded in user needs.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    body: "Product analytics, experimentation and measurable business impact.",
  },
  {
    icon: Users,
    title: "Cross-functional Leadership",
    body: "Leading 48-member teams across product, engineering, operations and business functions.",
  },
];

export function About() {
  return (
    <Section id="about" label="About Abhijit Jadhav">
      <SectionHeading
        eyebrow="About"
        title="About Me"
        subtitle="I'm a Product Manager who operates at the intersection of product, data and AI. I identify problems, understand users, apply AI and technology, ship products and measure outcomes — turning complex business challenges into scalable, user-centric solutions."
      />
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c, i) => (
          <Reveal as="li" key={c.title} delay={i * 90} className="surface-card p-6">
            <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground">
              <c.icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-base font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function Journey() {
  return (
    <Section id="journey" label="Career journey" className="bg-secondary/40">
      <SectionHeading
        eyebrow="Timeline"
        title="Career Journey"
        subtitle="From aerospace and defence engineering to leading AI-powered product at scale."
      />
      <ol className="relative mt-14 grid gap-8 lg:grid-cols-5 lg:gap-5">
        <span
          aria-hidden="true"
          className="absolute top-[7px] left-0 hidden h-px w-full bg-gradient-to-r from-border via-primary/40 to-border lg:block"
        />
        {journey.map((j, i) => (
          <Reveal
            as="li"
            key={j.org}
            delay={i * 110}
            className="group relative pl-8 lg:pt-9 lg:pl-0"
          >
            <span
              aria-hidden="true"
              className="absolute top-1.5 left-0 size-3.5 rounded-full border-2 border-background bg-[image:var(--gradient-accent)] shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_14%,transparent)] transition-transform duration-300 group-hover:scale-125 lg:top-0"
            />
            <span
              aria-hidden="true"
              className="absolute top-5 bottom-[-1.5rem] left-[6px] w-px bg-border last:hidden lg:hidden"
            />
            <div className="surface-card h-full p-5">
              <p className="font-display text-lg font-semibold">{j.org}</p>
              <p className="mt-1 text-sm font-medium text-primary">{j.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{j.note}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

const metrics = [
  { value: 5, label: "LMS Initiatives Led" },
  { value: 48, label: "Team Members Managed" },
  { value: 6, prefix: "₹", suffix: " Cr", label: "Revenue Contribution" },
  { value: 4, suffix: "+", label: "Industries" },
];

export function Metrics() {
  return (
    <section aria-label="Impact metrics" className="border-t border-border bg-foreground py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 90} className="text-center lg:text-left">
            <p className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-none font-semibold text-background">
              <Counter value={m.value} prefix={m.prefix ?? ""} suffix={m.suffix ?? ""} />
            </p>
            <p className="mt-3 text-[13px] tracking-wide text-background/70">{m.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="experience" label="Professional experience">
      <SectionHeading eyebrow="Experience" title="Professional Experience" />
      <ul className="mt-14 space-y-4">
        {experience.map((e, i) => {
          const isOpen = open === i;
          return (
            <Reveal as="li" key={e.role} delay={i * 60} className="surface-card overflow-hidden">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-5 p-6 text-left sm:p-7"
                >
                  <span>
                    <span className="flex flex-wrap items-center gap-3">
                      <span className="font-display text-lg font-semibold sm:text-xl">{e.role}</span>
                      {e.current ? (
                        <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
                          Current Role
                        </span>
                      ) : null}
                    </span>
                    <span className="mt-1.5 block text-sm text-muted-foreground">
                      {e.company} — {e.location}
                    </span>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180 text-primary",
                    )}
                  />
                </button>
              </h3>
              <div
                className={cn(
                  "grid transition-all duration-400 ease-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-3 border-t border-border px-6 py-6 sm:px-7">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}

const philosophy = [
  {
    no: "01",
    title: "Discover",
    icon: Search,
    body: "Understand the user and business problem through research, data and discovery workshops.",
  },
  {
    no: "02",
    title: "Design",
    icon: Layers,
    body: "Create PRDs, user flows and measurable product requirements.",
  },
  {
    no: "03",
    title: "Build",
    icon: Rocket,
    body: "Apply AI, automation and technology to create scalable and reliable solutions.",
  },
  {
    no: "04",
    title: "Measure",
    icon: LineChart,
    body: "Use data and experimentation to improve products and prove business outcomes.",
  },
];

export function Philosophy() {
  return (
    <Section id="philosophy" label="AI product philosophy" className="bg-secondary/40">
      <SectionHeading
        eyebrow="Philosophy"
        title="How I Think About AI Products"
        subtitle="I'm an AI Product Manager — I identify problems, understand users, apply AI and technology, ship products and measure outcomes."
      />
      <ol className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <span aria-hidden="true" className="absolute top-16 left-0 hidden h-px w-full bg-border lg:block" />
        {philosophy.map((p, i) => (
          <Reveal as="li" key={p.no} delay={i * 100} className="surface-card relative p-6">
            <div className="flex items-center justify-between">
              <span className="grid size-10 place-items-center rounded-xl bg-foreground text-background">
                <p.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-2xl font-semibold text-border">{p.no}</span>
            </div>
            <h3 className="mt-5 text-base font-semibold">
              {p.no} — {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
        <Gauge className="size-4 text-primary" aria-hidden="true" />
        Product Management → AI → Data → Technology → Business Impact
      </Reveal>
    </Section>
  );
}
