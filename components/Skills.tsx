"use client";

import { Section, Reveal } from "./Section";
import { skillCategories, type SkillCategory } from "@/lib/data";
import { Globe, Server, Mail, Headphones } from "lucide-react";

const iconMap: Record<SkillCategory["icon"], typeof Globe> = {
  wordpress: Globe,
  server: Server,
  mail: Mail,
  support: Headphones,
};

export function Skills() {
  return (
    <Section
      id="skills"
      num="02"
      label="Skills"
      heading="The tools and systems I work with"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skillCategories.map((cat, i) => {
          const Icon = iconMap[cat.icon];
          return (
            <Reveal key={cat.title} delay={i * 0.08}>
              <div className="surface-card group h-full p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold-400/50">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-300 text-navy-950">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="chip transition-colors group-hover:border-gold-400/40">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
