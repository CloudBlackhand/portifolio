"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { MarathonLoadBar } from "@/app/components/marathon/marathon-load-bar";
import { MarathonSession } from "@/app/components/marathon/marathon-session";
import { MarathonStatusTicker } from "@/app/components/marathon/marathon-status-ticker";

type TopSecretSectionProps = {
  projects: Project[];
  standalone?: boolean;
};

const BOOT_MESSAGES = [
  "weave-mem buffer alocada · identidade do cliente removida",
  "strip endpoint metadata · sem links publicos",
  "sense-mem render · abstrato por design",
  "dossier vault · so contexto e resultado",
];

function caseIdFromSlug(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 9973;
  }
  return `DOSSIER-${String(hash).padStart(4, "0")}`;
}

function loadPercentFromSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 17 + slug.charCodeAt(i)) % 100;
  }
  return 48 + (hash % 44);
}

export function TopSecretSection({ projects, standalone = false }: TopSecretSectionProps) {
  const reduceMotion = useReducedMotion();

  if (projects.length === 0) return null;

  return (
    <MarathonSession
      fillViewport={standalone}
      headerLeft="UESC · tau ceti iv"
      headerRight="partition / restricted"
    >
      <div className="marathon-session-toolbar">
        <Link className="marathon-session-back" href="/projetos">
          ← catálogo público
        </Link>
        <span className="marathon-session-badge">vault index</span>
      </div>

      <p className="marathon-tablet-kicker">runner shell · sense-mem · dossier vault</p>
      <MarathonStatusTicker messages={BOOT_MESSAGES} />
      <MarathonLoadBar label="weave-mem sync" target={67} delay={0.35} duration={2} />

      <header className="marathon-session-head">
        <h2 id="classified-heading" className="marathon-session-title">
          Registros sanitizados
        </h2>
        <p className="marathon-session-subtitle">
          Memória fabricada para focar a leitura — abstrata de propósito. Trabalhos
          em produção sob sigilo: contexto, solução e resultado publicados. Telas,
          código e dados do cliente ficam fora do registro aberto.
        </p>
        <div className="marathon-tablet-tags">
          <span className="marathon-tag marathon-tag--pink">CLIENT REDACTED</span>
          <span className="marathon-tag marathon-tag--cyan">NO CAPTURES</span>
          <span className="marathon-tag marathon-tag--yellow">FIELD ACTIVE</span>
        </div>
      </header>

      <ul className="marathon-dossier-list">
        {projects.map((project, index) => {
          const pct = loadPercentFromSlug(project.slug);
          return (
            <motion.li
              key={project.slug}
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Link
                className="marathon-dossier-row interactive-card"
                href={`/projetos/${project.slug}`}
                aria-label={`Abrir dossiê: ${project.title}`}
              >
                <div className="marathon-dossier-row-main">
                  <div className="marathon-dossier-row-meta">
                    <span>{caseIdFromSlug(project.slug)}</span>
                    <span>
                      {String(index + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="marathon-dossier-row-title">{project.title}</h3>
                  <p className="marathon-dossier-row-desc">{project.shortDescription}</p>
                  <MarathonLoadBar
                    label="decrypt sense-mem"
                    target={pct}
                    delay={0.1 + index * 0.06}
                    duration={1.4}
                    animate={!reduceMotion}
                  />
                  <span className="marathon-dossier-row-cta">iniciar leitura →</span>
                </div>
                <div className="marathon-dossier-row-preview">
                  <Image
                    src={project.thumbnail}
                    alt=""
                    width={480}
                    height={252}
                    className="marathon-dossier-row-img"
                    aria-hidden="true"
                  />
                  <div className="marathon-session-preview-glitch" aria-hidden="true" />
                </div>
              </Link>
            </motion.li>
          );
        })}
      </ul>

      <p className="marathon-session-foot">
        Estes dossiês não entram na tabela da home nem no catálogo público de projetos.
      </p>
    </MarathonSession>
  );
}
