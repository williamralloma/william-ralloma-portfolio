"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Sparkles } from "lucide-react";
import { heroStats } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-light opacity-70 dark:bg-grid-dark"
        style={{ backgroundSize: "44px 44px" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[420px] w-[680px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,195,0,0.35), transparent)",
        }}
      />

      <div className="container-px">
        <div className="grid items-center gap-12 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="chip gap-2"
            >
              <Sparkles size={14} className="text-gold-400" />
              Available for WordPress, hosting, and technical support work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              I solve hosting problems before they become{" "}
              <span className="text-gradient-gold">customer problems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              Technical support specialist with experience across WordPress, DNS, email,
              hosting infrastructure, troubleshooting, customer communication, and
              uptime-focused problem solving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#contact" className="btn-primary">
                Contact me
                <ArrowRight size={16} />
              </a>
              <a href="#experience" className="btn-secondary">
                <Briefcase size={16} />
                View experience
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-10 grid max-w-lg grid-cols-3 gap-3"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="surface-card p-4">
                  <div className="font-display text-lg font-bold text-gold-400 sm:text-xl">
                    {stat.value}
                  </div>
                  <div
                    className="mt-0.5 text-xs sm:text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: terminal / status card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <TerminalCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="glass-panel relative overflow-hidden p-1.5 shadow-soft dark:shadow-glow">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span
          className="ml-3 font-mono text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          support — status
        </span>
      </div>

      {/* Body */}
      <div
        className="rounded-xl p-5 font-mono text-sm leading-relaxed"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <Line k="status" v="available" highlight />
        <Line k="focus" v="WordPress, DNS, Hosting" />
        <Line k="response" v="clear and reliable" />
        <Line k="uptime" v="customer-first" />

        <div
          className="mt-4 flex items-center gap-2 border-t pt-4 text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-gold-300 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-400" />
          </span>
          ready to pick up your next ticket
        </div>
      </div>
    </div>
  );
}

function Line({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div className="flex flex-wrap items-baseline gap-2 py-1">
      <span style={{ color: "var(--text-muted)" }}>{k}:</span>
      <span
        className={highlight ? "font-semibold text-gold-400" : ""}
        style={highlight ? undefined : { color: "var(--text)" }}
      >
        {v}
      </span>
    </div>
  );
}
