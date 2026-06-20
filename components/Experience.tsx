"use client";

import { Section, Reveal } from "./Section";
import { experience } from "@/lib/data";
import { Building2, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <Section
      id="experience"
      num="03"
      label="Experience"
      heading="Experience built around solving customer problems"
    >
      <div className="relative">
        {/* Timeline spine */}
        <div
          aria-hidden
          className="absolute left-[15px] top-2 bottom-2 w-px sm:left-[19px]"
          style={{ backgroundColor: "var(--border)" }}
        />

        <div className="space-y-6">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={Math.min(i * 0.05, 0.3)}>
              <div className="relative pl-12 sm:pl-16">
                {/* Node */}
                <span className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border bg-[color:var(--surface)] text-gold-400 sm:h-10 sm:w-10">
                  <Building2 size={16} />
                </span>

                <div className="surface-card p-5 transition-transform duration-200 hover:-translate-y-0.5 sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold">{job.title}</h3>
                      <p className="text-sm font-medium text-gold-400">{job.company}</p>
                    </div>
                    <span
                      className="chip shrink-0 self-start sm:self-auto"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {job.period}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {job.description}
                  </p>

                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-400" />
                        <span style={{ color: "var(--text-muted)" }}>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
