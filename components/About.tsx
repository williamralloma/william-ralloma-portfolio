"use client";

import { Section, Reveal } from "./Section";
import { aboutCards } from "@/lib/data";
import { Search, MessageSquare, Server, FileCheck } from "lucide-react";

const icons = [Search, MessageSquare, Server, FileCheck];

export function About() {
  return (
    <Section
      id="about"
      num="01"
      label="About"
      heading="Calm, clear technical support for real-world web problems."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Paragraphs */}
        <Reveal className="space-y-5 text-base leading-relaxed" >
          <p style={{ color: "var(--text-muted)" }}>
            For over a decade I&apos;ve sat on the front line of web hosting and WordPress
            support — the person customers reach when their site is down, their email
            stopped delivering, or a plugin update broke checkout. My job is to stay calm,
            find the real cause, and get them back online.
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            I troubleshoot WordPress and WooCommerce issues, untangle DNS and email
            deliverability problems, debug themes and plugins, and walk customers through
            fixes without the jargon. Working across Intercom, Zendesk, WP-CLI, and the
            terminal, I&apos;m comfortable moving from a friendly chat to a server log in the
            same ticket.
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            I work well under pressure, document what I learn, and bring a QA mindset to
            everything — because the best support ticket is the one that never has to be
            opened twice.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {aboutCards.map((card, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="surface-card h-full p-5 transition-transform duration-200 hover:-translate-y-1">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--surface-2)] text-gold-400">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
