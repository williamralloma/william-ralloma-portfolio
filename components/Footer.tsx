"use client";

import { profile, navLinks } from "@/lib/data";
import { Mail, Linkedin, Github, Facebook } from "lucide-react";

const socials = [
  { icon: Mail, href: profile.links.email, label: "Email" },
  { icon: Linkedin, href: profile.links.linkedin, label: "LinkedIn" },
  { icon: Github, href: profile.links.github, label: "GitHub" },
  { icon: Facebook, href: profile.links.facebook, label: "Facebook" },
];

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container-px py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-400 to-gold-300 font-display text-sm font-bold text-navy-950">
                WR
              </span>
              <span className="font-display text-base font-semibold">{profile.name}</span>
            </a>
            <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
              {profile.role} · {profile.subRole}
            </p>

            {/* Status text */}
            <div
              className="mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs"
              style={{ backgroundColor: "var(--surface-2)", color: "var(--text-muted)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-gold-300 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              status: available for support and web projects
            </div>
          </div>

          {/* Nav */}
          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:text-gold-400"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {year} {profile.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors hover:border-gold-400 hover:text-gold-400"
                style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
