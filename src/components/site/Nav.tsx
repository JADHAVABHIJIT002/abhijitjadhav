import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/abhijit-logo.png.asset.json";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "case-studies", label: "Case Studies" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "vision", label: "Vision" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 glass-bar transition-all duration-300",
        scrolled ? "border-b border-border" : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-[4.5rem]"
      >
        <a href="#top" className="group flex items-center gap-3" aria-label="Abhijit Jadhav — home">
          <span className="brand-mark-shell size-11 shrink-0">
            <img
              src={logo.url}
              alt=""
              width={44}
              height={44}
              className="size-full rounded-full object-cover"
            />
          </span>
          <span className="hidden font-display text-sm font-semibold sm:inline">Abhijit Jadhav</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors",
                  active === l.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-primary transition-transform duration-300",
                    active === l.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-4 py-2 text-[13px] font-medium text-background transition-all hover:bg-primary sm:inline-flex"
          >
            Let's Connect
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 transition-[max-height,opacity] duration-400 ease-out lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
          {links.map((l, i) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
                className={cn(
                  "block border-b border-border/60 py-3 text-[15px] font-medium transition-all duration-300",
                  open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0",
                  active === l.id ? "text-primary" : "text-foreground",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background"
            >
              Let's Connect
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
