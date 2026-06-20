"use client";

import { Section, Reveal } from "./Section";
import { projects } from "@/lib/data";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

export function Projects() {
  return (
    <Section
      id="projects"
      num="04"
      label="Projects"
      heading="Selected work and technical projects"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={Math.min(i * 0.06, 0.3)}>
            <article className="surface-card group flex h-full flex-col p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold-400/50">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--surface-2)] text-gold-400">
                  <FolderGit2 size={18} />
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="text-[color:var(--text-muted)] transition-colors hover:text-gold-400"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold">{project.title}</h3>
              <p
                className="mt-2 flex-1 text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {project.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400"
                >
                  View project
                  <ArrowUpRight size={15} />
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
