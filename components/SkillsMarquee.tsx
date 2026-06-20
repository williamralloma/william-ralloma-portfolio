"use client";

import { skillsMarquee } from "@/lib/data";

export function SkillsMarquee() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const items = [...skillsMarquee, ...skillsMarquee];

  return (
    <div className="relative overflow-hidden border-y py-5" style={{ borderColor: "var(--border)" }}>
      {/* Edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
        style={{ background: "linear-gradient(to right, var(--bg), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
        style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
      />

      <div className="marquee-track flex w-max animate-marquee items-center gap-4">
        {items.map((skill, i) => (
          <div
            key={`${skill}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium"
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
