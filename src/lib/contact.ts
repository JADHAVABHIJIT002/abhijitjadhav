import { createServerFn } from "@tanstack/react-start";
import nodemailer, { type Transporter } from "nodemailer";
import { z } from "zod";

import { LINKS } from "@/components/site/data";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().toLowerCase().email(),
  subject: z.string().trim().min(3).max(150),
  message: z.string().trim().min(10).max(5000),
  // Hidden honeypot field (see the `company` input in Contact.tsx). Real
  // visitors never see or fill it in, so any value here means the
  // submission is almost certainly from a bot — accept it silently
  // instead of sending an email.
  company: z.string().max(200).optional().default(""),
});

// NOTE: nodemailer talks SMTP over raw TCP sockets. That works fine when
// this server runs on Node (e.g. `vite dev`, or a plain Node host), but this
// project's build target is Cloudflare Workers, which does not support
// arbitrary outbound SMTP — so this endpoint will not send email once
// deployed there. Swap in an HTTP-based provider (Resend, SendGrid, etc.) if
// you deploy to Workers.
let transporter: Transporter | undefined;

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error(
      "Email is not configured: set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS (see .env.example).",
    );
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  return transporter;
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.company) {
      // Honeypot tripped — pretend success, skip the actual email.
      return { ok: true as const };
    }

    try {
      await getTransporter().sendMail({
        from: `"Portfolio Contact Form" <${process.env["SMTP_USER"]}>`,
        to: process.env["CONTACT_TO_EMAIL"] ?? LINKS.email,
        replyTo: `"${data.name}" <${data.email}>`,
        subject: `[Portfolio] ${data.subject}`,
        text: `${data.message}\n\n— ${data.name} (${data.email})`,
      });
    } catch (error) {
      console.error("Failed to send contact email:", error);
      throw new Error("Could not send your message right now. Please try again shortly.");
    }

    return { ok: true as const };
  });
