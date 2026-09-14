import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUp, CheckCircle2, Download, Github, Linkedin, Mail, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { sendContactMessage } from "@/lib/contact";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Sections";
import { LINKS, RESUME_URL } from "./data";
import logo from "@/assets/abhijit-logo.png.asset.json";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const sendContactMessageFn = useServerFn(sendContactMessage);

  const set = (key: keyof typeof values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.subject.trim().length < 3) next.subject = "Please add a short subject.";
    if (values.message.trim().length < 10) next.message = "Please write at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitError(null);
    setSubmitting(true);
    try {
      await sendContactMessageFn({ data: values });
      setSent(true);
      setValues({ name: "", email: "", subject: "", message: "", company: "" });
    } catch (error) {
      console.error(error);
      setSubmitError(
        "Something went wrong sending your message. Please try again, or email me directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const field =
    "mt-2 w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25";

  return (
    <Section id="contact" label="Contact">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Something Intelligent"
            subtitle="I'm interested in building AI-powered products, solving complex business problems and working at the intersection of product, data and technology."
          />
          <Reveal delay={100}>
            <ul className="mt-10 space-y-3">
              {[
                { icon: Linkedin, label: "LinkedIn", value: "in/abhijit-jadhav-133833227", href: LINKS.linkedin },
                { icon: Github, label: "GitHub", value: "JADHAVABHIJIT002", href: LINKS.github },
                { icon: Mail, label: "Email", value: LINKS.email, href: `mailto:${LINKS.email}` },
              ].map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="surface-card flex items-center gap-4 p-4"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                      <c.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{c.label}</span>
                      <span className="block text-sm text-muted-foreground">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-primary"
            >
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
          </Reveal>
        </div>

        <Reveal delay={120} className="surface-card p-6 sm:p-8">
          {sent ? (
            <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
              <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-semibold">Message sent</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Thanks for reaching out — I'll get back to you soon. You can also write to{" "}
                <a className="text-primary underline" href={`mailto:${LINKS.email}`}>
                  {LINKS.email}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={set("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="Jane Doe"
                    className={cn(field, errors.name && "border-destructive")}
                  />
                  {errors.name ? (
                    <p id="name-error" className="mt-1.5 text-xs text-destructive">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={set("email")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="jane@company.com"
                    className={cn(field, errors.email && "border-destructive")}
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-1.5 text-xs text-destructive">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={set("subject")}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  placeholder="Product Manager role / collaboration"
                  className={cn(field, errors.subject && "border-destructive")}
                />
                {errors.subject ? (
                  <p id="subject-error" className="mt-1.5 text-xs text-destructive">
                    {errors.subject}
                  </p>
                ) : null}
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={set("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="Tell me about the problem you're solving."
                  className={cn(field, "resize-y", errors.message && "border-destructive")}
                />
                {errors.message ? (
                  <p id="message-error" className="mt-1.5 text-xs text-destructive">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              {/* Honeypot: hidden from real visitors, bots that auto-fill every
                  field trip it and their submission is silently dropped server-side. */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.company}
                  onChange={set("company")}
                />
              </div>

              {submitError ? (
                <p role="alert" className="mt-5 text-sm text-destructive">
                  {submitError}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                <Send className="size-4" aria-hidden="true" />
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-5 sm:px-8 md:flex-row">
        <a href="#top" className="group flex items-center gap-3" aria-label="Abhijit Jadhav — back to top">
          <span className="brand-mark-shell size-14 shrink-0">
            <img
              src="./logo.png"
              alt="Abhijit Jadhav logo"
              width={56}
              height={56}
              loading="lazy"
              className="size-full rounded-full object-cover"
            />
          </span>
          <span>
            <span className="block font-display text-sm font-semibold">Abhijit Jadhav</span>
            <span className="mt-0.5 block text-[11px] text-muted-foreground">Product · AI · Business Impact</span>
          </span>
        </a>
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            About
          </a>
          <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            Contact
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={`mailto:${LINKS.email}`}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Email
          </a>
        </nav>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
        >
          <ArrowUp className="size-4" aria-hidden="true" />
          Back to top
        </button>
      </div>
      <p className="mx-auto mt-7 max-w-7xl px-5 text-center text-xs text-muted-foreground sm:px-8">
        © 2026 Abhijit Jadhav. All rights reserved.
      </p>
    </footer>
  );
}
