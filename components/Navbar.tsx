"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, profile } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-px">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? "glass-panel shadow-soft" : "border border-transparent"
          }`}
        >
          {/* Logo / name */}
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-400 to-gold-300 font-display text-sm font-bold text-navy-950">
              WR
            </span>
            <span className="font-display text-base font-semibold tracking-tight">
              {profile.name}
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-gold-400"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="btn-primary hidden sm:inline-flex">
              Get in touch
              <ArrowUpRight size={16} />
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border lg:hidden"
              style={{ borderColor: "var(--border)" }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="glass-panel mt-2 overflow-hidden p-2 shadow-soft lg:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-[color:var(--surface-2)] hover:text-gold-400"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Get in touch
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
