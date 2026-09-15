import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { ParticleField } from "./Effects";
import { LINKS, RESUME_URL } from "./data";
import portrait from "@/assets/abhijit-jadhav.png.asset.json";


const pillars = [
  { k: "Product", v: "Discovery → PRD → Launch" },
  { k: "AI", v: "LLMs, ML & Automation" },
  { k: "Impact", v: "₹6 Cr revenue contribution" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden hero-glow pt-28 pb-16 sm:pt-36 lg:pt-44 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 drift-grid opacity-[0.35] [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <ParticleField />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">

        <div>
          {/* Hero content is always the first thing visible on load — it must not
              be wrapped in the scroll-triggered Reveal animation (opacity: 0 until
              hydration + IntersectionObserver), which was measured to delay LCP
              past 4s on throttled mobile. Reveal stays in use everywhere else on
              the page, where it only affects content the user scrolls to. */}
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-accent/70 px-3.5 py-1.5 text-[12px] font-medium tracking-wide text-accent-foreground">
            <Sparkles className="size-3.5 shrink-0" aria-hidden="true" />
            Product Management × AI × Generative AI
          </p>

          <h1 className="mt-7 text-[clamp(2.6rem,7.2vw,5.25rem)] leading-[0.95] font-semibold">
            Abhijit <span className="text-gradient">Jadhav</span>
          </h1>

          <p className="mt-5 text-[clamp(1.05rem,2.4vw,1.4rem)] font-medium text-foreground">
            Product Manager
            <span className="mx-2.5 text-primary/50" aria-hidden="true">
              /
            </span>
            AI/ML &amp; Generative AI Specialist
          </p>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            I build AI-powered products, automation systems and data-driven solutions that solve
            real business problems.
          </p>

          <dl className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.k} className="bg-surface px-4 py-4">
                <dt className="text-[10px] font-semibold tracking-[0.2em] text-primary uppercase">
                  {p.k}
                </dt>
                <dd className="mt-1.5 text-[13px] leading-snug font-medium text-foreground">
                  {p.v}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary group inline-flex items-center gap-2">
              Explore My Work
              <ArrowDown
                className="size-4 transition-transform group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn-ghost">
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>

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
              className="inline-flex min-w-0 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              <span className="truncate">{LINKS.email}</span>
            </a>
          </div>
        </div>

        <div className="relative order-first mx-auto w-full max-w-[30rem] lg:order-none lg:max-w-none">
          <figure className="portrait-stage group mx-auto flex w-full flex-col items-center">
            <div className="portrait-orbit relative grid aspect-square w-[min(72vw,17.5rem)] place-items-center sm:w-[min(68vw,22rem)] lg:w-[min(37vw,31rem)]">
              <div aria-hidden="true" className="portrait-aura absolute inset-[12%] rounded-full" />
              <div aria-hidden="true" className="portrait-ring portrait-ring-outer absolute inset-[1.5%] rounded-full">
                <span className="portrait-orb portrait-orb-primary" />
              </div>
              <div aria-hidden="true" className="portrait-ring portrait-ring-middle absolute inset-[7%] rounded-full">
                <span className="portrait-orb portrait-orb-secondary" />
              </div>
              <div aria-hidden="true" className="portrait-ring portrait-ring-inner absolute inset-[12.5%] rounded-full" />

              <span aria-hidden="true" className="portrait-spark portrait-spark-one" />
              <span aria-hidden="true" className="portrait-spark portrait-spark-two" />
              <span aria-hidden="true" className="portrait-spark portrait-spark-three" />
              <span aria-hidden="true" className="portrait-spark portrait-spark-four" />

              <div className="portrait-frame relative z-10 aspect-square w-[70%] overflow-hidden rounded-full border border-primary/35 bg-surface p-1.5 shadow-[var(--shadow-lift)]">
                <div className="size-full overflow-hidden rounded-full bg-secondary">
                  <img
                    src="./abhijit-jadhav-profile-photo.jpg"
                    alt="Abhijit Jadhav — professional profile photo"
                    width={512}
                    height={512}
                    fetchPriority="high"
                    className="portrait-image size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <figcaption className="relative z-20 -mt-2 text-center">
              <p className="text-[10px] font-semibold tracking-[0.22em] text-primary uppercase">
                Product · AI · Data
              </p>
              <p className="mt-1.5 font-display text-lg font-semibold">Abhijit Jadhav</p>
            </figcaption>

            <dl className="mt-6 grid w-full max-w-md grid-cols-3 divide-x divide-border border-y border-border/80 bg-surface/45 backdrop-blur-sm">
              {[
                ["48", "Team led"],
                ["₹6 Cr", "Revenue"],
                ["4+", "Industries"],
              ].map(([v, l]) => (
                <div key={l} className="px-2 py-3.5 text-center sm:py-4">
                  <dt className="font-display text-base font-semibold sm:text-lg">{v}</dt>
                  <dd className="mt-0.5 text-[11px] text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </figure>
        </div>
      </div>
    </section>
  );
}
