"use client";

import { useState, type FormEvent } from "react";
import { Section, Reveal } from "./Section";
import { profile } from "@/lib/data";
import { Mail, Linkedin, Github, Facebook, Send, CheckCircle2 } from "lucide-react";

const contactMethods = [
  { icon: Mail, label: "Email", value: profile.email, href: profile.links.email },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "William Francis Ralloma",
    href: profile.links.linkedin,
  },
  { icon: Github, label: "GitHub", value: "williamralloma", href: profile.links.github },
  { icon: Facebook, label: "Facebook", value: "bisdakfreelancer", href: profile.links.facebook },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Wire this to an API route, Formspree, or your mail provider.
    // For now we open the user's mail client with the message prefilled.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `${profile.links.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section
      id="contact"
      num="06"
      label="Contact"
      heading="Need someone who can troubleshoot clearly and communicate calmly?"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        {/* Left: copy + links */}
        <Reveal>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Whether you need ongoing hosting support, a tricky WordPress issue resolved, or
            an extra hand on your support team — I&apos;m happy to talk. Reach out and I&apos;ll
            get back to you clearly and quickly.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {contactMethods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="surface-card flex items-center gap-3 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-400/50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--surface-2)] text-gold-400">
                  <m.icon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs" style={{ color: "var(--text-muted)" }}>
                    {m.label}
                  </span>
                  <span className="block truncate text-sm font-medium">{m.value}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="surface-card space-y-4 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                id="name"
                label="Name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                placeholder="Jane Doe"
              />
              <Field
                id="email"
                type="email"
                label="Email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                placeholder="jane@company.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Tell me a little about what you need help with…"
                className="w-full resize-none rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-gold-400"
                style={{ borderColor: "var(--border)" }}
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              {sent ? (
                <>
                  Message ready <CheckCircle2 size={16} />
                </>
              ) : (
                <>
                  Send message <Send size={16} />
                </>
              )}
            </button>

            {sent && (
              <p className="text-center text-xs" style={{ color: "var(--text-muted)" }}>
                Your mail client should open with the message prefilled.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-gold-400"
        style={{ borderColor: "var(--border)" }}
      />
    </div>
  );
}
