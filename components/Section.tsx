"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  num: string;
  label: string;
  heading: string;
  children: ReactNode;
  className?: string;
};

/** Shared section shell: numbered label + heading + animated reveal. */
export function Section({ id, num, label, heading, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className ?? ""}`}>
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 max-w-2xl"
        >
          <span className="section-label">
            <span className="section-label-num">{num}</span>
            {label}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {heading}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

/** Reusable fade-in-up wrapper for staggered children. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
