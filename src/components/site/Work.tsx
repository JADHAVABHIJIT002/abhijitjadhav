import { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Sections";
import { caseStudies, projects } from "./data";

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
      {children}
    </span>
  );
}

export function Projects() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <Section id="projects" label="Featured projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Featured Projects"
        subtitle="Products built around a clear problem, an explainable solution and a measurable outcome."
      />
      <ul className="mt-14 grid gap-5 lg:grid-cols-2">
        {projects.map((p, i) => {
          const isOpen = open === p.no;
          return (
            <Reveal as="li" key={p.no} delay={(i % 2) * 80} className="surface-card group flex flex-col p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Project {p.no} · {p.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold transition-colors group-hover:text-primary sm:text-2xl">
                    {p.name}
                  </h3>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </div>

              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
                    Problem
                  </dt>
                  <dd className="mt-1 leading-relaxed text-muted-foreground">{p.problem}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
                    Solution
                  </dt>
                  <dd className="mt-1 leading-relaxed text-muted-foreground">{p.solution}</dd>
                </div>
              </dl>

              <div
                className={cn(
                  "grid transition-all duration-400 ease-out",
                  isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <dl className="space-y-4 border-t border-border pt-4 text-sm">
                    <div>
                      <dt className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
                        {p.techLabel}
                      </dt>
                      <dd>
                        <ul className="mt-2 space-y-1.5 text-muted-foreground">
                          {p.tech.map((t) => (
                            <li key={t} className="flex gap-2.5">
                              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
                        {p.impactLabel}
                      </dt>
                      <dd>
                        <ul className="mt-2 space-y-1.5 text-muted-foreground">
                          {p.impact.map((t) => (
                            <li key={t} className="flex gap-2.5">
                              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : p.no)}
                aria-expanded={isOpen}
                className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {isOpen ? <Minus className="size-4" aria-hidden="true" /> : <Plus className="size-4" aria-hidden="true" />}
                {isOpen ? "Hide details" : `Show ${p.techLabel.toLowerCase()} & ${p.impactLabel.toLowerCase()}`}
              </button>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}

export function CaseStudies() {
  return (
    <Section id="case-studies" label="Case studies" className="bg-secondary/40">
      <SectionHeading
        eyebrow="Deep Dives"
        title="Case Studies"
        subtitle="How I think through a problem end-to-end — from discovery to measurable outcome."
      />
      <div className="mt-14 space-y-6">
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.no} delay={i * 90} className="surface-card p-6 sm:p-9">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
              Case Study {cs.no}
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{cs.title}</h3>
            <dl className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {cs.blocks.map((b) => (
                <div key={b.label}>
                  <dt className="border-b border-border pb-2 text-[11px] font-semibold tracking-[0.16em] text-foreground uppercase">
                    {b.label}
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {"intro" in b && b.intro ? <p className="mb-2">{b.intro}</p> : null}
                    <ul className="space-y-1.5">
                      {b.items.map((it) => (
                        <li key={it} className="flex gap-2.5">
                          <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
