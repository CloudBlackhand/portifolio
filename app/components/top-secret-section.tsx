"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { MarathonSession } from "@/app/components/marathon/marathon-session";
import { MARATHON_VAULT_BOOT_LINES } from "@/app/components/marathon/marathon-tablet-boot";

type TopSecretSectionProps = {
  projects: Project[];
  standalone?: boolean;
};

function caseIdFromSlug(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 9973;
  }
  return `DOSSIER-${String(hash).padStart(4, "0")}`;
}

export function TopSecretSection({ projects, standalone = false }: TopSecretSectionProps) {
  const reduceMotion = useReducedMotion();

  if (projects.length === 0) return null;

  return (
    <MarathonSession
      fillViewport={standalone}
      bootSequence={standalone}
      headerLeft="UESC · tau ceti iv"
      headerRight="partition / restricted"
      bootLines={MARATHON_VAULT_BOOT_LINES}
      bootTarget={67}
      bootDuration={2.4}
    >
      <div className="marathon-session-toolbar">
        <Link className="marathon-session-back" href="/projetos">
          ← catálogo público
        </Link>
        <span className="marathon-session-badge">vault index</span>
      </div>

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
        {projects.map((project, index) => (
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
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>

      <p className="marathon-session-foot">
        Estes dossiês não entram na tabela da home nem no catálogo público de projetos.
      </p>
    </MarathonSession>
  );
}
