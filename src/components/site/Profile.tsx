import { Award, GraduationCap, Leaf, Cpu, Radio, Users2, Sprout } from "lucide-react";
import { Reveal } from "./Reveal";
import { Tilt } from "./Effects";
import { Section, SectionHeading } from "./Sections";
import { awards, education, skillGroups } from "./data";


export function Skills() {
  return (
    <Section id="skills" label="Skills">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills"
        subtitle="A product toolkit spanning strategy, delivery, analysis and hands-on technology."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 80} className="h-full">
            <Tilt max={4} className="surface-card group h-full p-6">
              <h3 className="text-base font-semibold transition-colors group-hover:text-primary">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s, k) => (
                  <li
                    key={s}
                    style={{ transitionDelay: `${k * 18}ms` }}
                    className="rounded-full border border-border bg-secondary/70 px-3 py-1.5 text-[12px] font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-accent hover:text-accent-foreground group-hover:border-primary/25"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Tilt>
          </Reveal>
        ))}
      </div>

    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" label="Education, certifications and awards" className="bg-secondary/40">
      <SectionHeading eyebrow="Background" title="Education & Certifications" />
      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <ul className="space-y-4">
          {education.map((e, i) => (
            <Reveal as="li" key={e.title} delay={i * 70} className="surface-card flex gap-4 p-6">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold">{e.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <div>
          <h3 className="font-display text-xl font-semibold">Awards</h3>
          <ul className="mt-5 space-y-4">
            {awards.map((a, i) => (
              <Reveal as="li" key={a.year} delay={i * 90} className="surface-card flex items-center gap-4 p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-foreground text-background">
                  <Award className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                    {a.year}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold">{a.title}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

const features = [
  { icon: Cpu, label: "AI-Powered Insights" },
  { icon: Radio, label: "IoT Monitoring" },
  { icon: Leaf, label: "Data-Driven Farming" },
  { icon: Users2, label: "Community Support" },
  { icon: Sprout, label: "Modern Agri Practices" },
];

const model = ["Farm-to-Table", "Subscription Model", "Community Driven", "Sustainability"];

export function Vision() {
  return (
    <section
      id="vision"
      aria-label="Startup vision"
      className="scroll-mt-24 border-t border-border bg-foreground py-20 text-background sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="inline-flex rounded-full border border-background/25 px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase">
              Startup Vision
            </p>
            <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.03] font-semibold">
              Modern Farming Platform
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-background/75">
              A B2C AgriTech platform designed to connect urban consumers with sustainable farming
              while helping farmers and landowners use technology, AI, automation and data-driven
              practices.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-background/75">
              <span className="font-semibold text-background">Vision: </span>
              Build a technology-driven modern farming ecosystem that assists farmers and landowners
              through online and offline guidance, sustainable agriculture practices and new revenue
              opportunities.
            </p>
            <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2 text-sm">
              <span aria-hidden="true" className="size-2 animate-pulse rounded-full bg-background" />
              Currently in Product Discovery &amp; Planning Phase
            </p>
          </Reveal>

          <Reveal delay={120} className="space-y-8">
            <div>
              <h3 className="text-[11px] font-semibold tracking-[0.2em] text-background/60 uppercase">
                Features
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center gap-3 rounded-xl border border-background/15 bg-background/5 px-4 py-3.5 text-sm backdrop-blur-sm transition-colors hover:border-background/40"
                  >
                    <f.icon className="size-4 shrink-0" aria-hidden="true" />
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-semibold tracking-[0.2em] text-background/60 uppercase">
                Business Model &amp; Positioning
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {model.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-background/20 px-3.5 py-1.5 text-[12px] font-medium"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
