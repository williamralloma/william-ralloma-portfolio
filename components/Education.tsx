"use client";

import { Section, Reveal } from "./Section";
import { education, certifications, languages } from "@/lib/data";
import { GraduationCap, Award, Languages } from "lucide-react";

export function Education() {
  return (
    <Section
      id="education"
      num="05"
      label="Education"
      heading="Education and continuous learning"
    >
      <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        {/* Degrees */}
        <div className="space-y-5">
          {education.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="surface-card p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-300 text-navy-950">
                    <GraduationCap size={20} />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                      <span className="chip" style={{ color: "var(--text-muted)" }}>
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-gold-400">{item.institution}</p>
                    {item.description && (
                      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Languages */}
          <Reveal delay={0.12}>
            <div className="surface-card p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--surface-2)] text-gold-400">
                  <Languages size={18} />
                </span>
                <h3 className="font-display text-base font-semibold">Languages</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span key={lang} className="chip">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Certifications / training */}
        <Reveal delay={0.1}>
          <div className="surface-card h-full p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--surface-2)] text-gold-400">
                <Award size={18} />
              </span>
              <h3 className="font-display text-base font-semibold">
                Certifications &amp; Training
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm"
                  style={{ backgroundColor: "var(--surface-2)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
