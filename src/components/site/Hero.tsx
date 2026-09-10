import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { LINKS, RESUME_URL } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden hero-glow pt-28 pb-20 sm:pt-36 lg:pt-44 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.35] [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-[12px] font-medium tracking-wide text-accent-foreground">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Product Management × AI × Generative AI
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[clamp(2.75rem,7vw,5rem)] leading-[0.98] font-semibold">
              Abhijit <span className="text-gradient">Jadhav</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 text-lg font-medium text-foreground sm:text-xl">
              Product Manager | AI/ML &amp; Generative AI Specialist
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              I build AI-powered products, automation systems and data-driven solutions that solve
              real business problems.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-[var(--shadow-soft)] transition-all hover:bg-primary hover:shadow-[var(--shadow-lift)]"
              >
                Explore My Work
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition-all hover:border-primary hover:text-primary"
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-6">
              <span className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Connect
              </span>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="size-4" aria-hidden="true" /> LinkedIn
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="size-4" aria-hidden="true" /> GitHub
              </a>
              <a
                href={`mailto:${LINKS.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4" aria-hidden="true" /> {LINKS.email}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-lift)]">
            <div className="absolute inset-0 bg-[image:var(--gradient-accent)] opacity-[0.9]" aria-hidden="true" />
            <div className="absolute inset-0 grid-lines opacity-20" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-between p-7 text-primary-foreground">
              <div className="flex items-center justify-between text-[11px] font-medium tracking-[0.18em] uppercase opacity-90">
                <span>Product · AI · Data</span>
                <span>2026</span>
              </div>
              <div>
                <div className="font-display text-7xl leading-none font-semibold">AJ</div>
                <p className="mt-4 max-w-[16rem] text-sm leading-relaxed opacity-95">
                  Product Manager building intelligent products at the intersection of AI, data and
                  business impact.
                </p>
              </div>
              <dl className="grid grid-cols-3 gap-3 border-t border-white/25 pt-5 text-center">
                {[
                  ["48", "Team"],
                  ["₹6 Cr", "Revenue"],
                  ["4+", "Industries"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="font-display text-lg font-semibold">{v}</dt>
                    <dd className="text-[11px] opacity-85">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
