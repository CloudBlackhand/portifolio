"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { getCatalogProjects } from "@/data/projects";
import { Reveal, SheetFrame } from "./shared";

type TimelineSectionProps = {
  projects: Project[];
};

export function TimelineSection({ projects }: TimelineSectionProps) {
  const catalog = getCatalogProjects(projects);
  const years = [...new Set(catalog.map((p) => p.year))].sort((a, b) => a - b);

  return (
    <section className="lnd-dark lnd-timeline" aria-labelledby="lnd-timeline-h2">
      <SheetFrame index={3} total={4} />
      <div className="lnd-container">
        <Reveal>
          <h2 className="lnd-h2" id="lnd-timeline-h2">
            <span className="lnd-h2-line">da planilha</span>
            <span className="lnd-h2-line">
              à produção<span className="lnd-h2-dot lnd-h2-dot--accent">.</span>
            </span>
          </h2>
        </Reveal>
        <div className="lnd-timeline-wrap">
          <div className="lnd-timeline-rail" aria-hidden="true" />
          {years.map((year, index) => {
            const items = catalog.filter((p) => p.year === year);
            const shown = items.slice(0, 5);
            const rest = items.length - shown.length;
            return (
              <Reveal key={year} delay={index * 0.06}>
                <div className="lnd-timeline-row">
                  <div className="lnd-timeline-dot" aria-hidden="true" />
                  <div className="lnd-timeline-year">{year}</div>
                  <div className="lnd-timeline-body">
                    <ul className="lnd-timeline-list">
                      {shown.map((p) => (
                        <li key={p.slug}>
                          <Link href={`/projetos/${p.slug}`}>{p.title}</Link>
                        </li>
                      ))}
                      {rest > 0 ? (
                        <li className="lnd-timeline-more">+{rest} projetos</li>
                      ) : null}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
