"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { MarathonSession } from "@/app/components/marathon/marathon-session";
import { MarathonThumb } from "@/app/components/marathon/marathon-thumb";
import {
  CLOUD_BOOT_HEAD,
  getVaultBootLines,
} from "@/app/components/marathon/marathon-boot-lines";

type TopSecretSectionProps = {
  projects: Project[];
  standalone?: boolean;
};

export function TopSecretSection({ projects, standalone = false }: TopSecretSectionProps) {
  const reduceMotion = useReducedMotion();

  if (projects.length === 0) return null;

  return (
    <MarathonSession
      fillViewport={standalone}
      bootSequence={standalone}
      headerLeft="Cloud Service"
      headerRight="sob sigilo"
      bootLines={getVaultBootLines(projects.length)}
      bootHead={CLOUD_BOOT_HEAD}
      bootTarget={100}
      bootDuration={2.4}
    >
      <div className="marathon-session-toolbar">
        <Link className="marathon-session-back" href="/projetos#sob-sigilo">
          ← voltar aos projetos
        </Link>
        <span className="marathon-session-badge">sob sigilo</span>
      </div>

      <header className="marathon-session-head">
        <h2 id="classified-heading" className="marathon-session-title">
          Projetos sob sigilo
        </h2>
        <p className="marathon-session-subtitle">
          Cases reais, descritos com cuidado. Sem nomes de clientes, links, capturas
          de tela ou dados que possam identificar a operação.
        </p>
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
              className="marathon-dossier-row"
              href={`/projetos/${project.slug}`}
              aria-label={`Abrir: ${project.title}`}
            >
              <div className="marathon-dossier-row-main">
                <div className="marathon-dossier-row-meta">
                  <span>{project.impactLabel}</span>
                  <span className="marathon-dossier-row-index">
                    {String(index + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="marathon-dossier-row-title">{project.title}</h3>
                <p className="marathon-dossier-row-desc">{project.shortDescription}</p>
                <span className="marathon-dossier-row-cta">ver detalhes →</span>
              </div>
              <div className="marathon-dossier-row-preview" aria-hidden="true">
                <MarathonThumb
                  src={project.thumbnail}
                  alt=""
                  className="marathon-dossier-row-img"
                />
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>

      <p className="marathon-session-foot">
        Estes projetos não aparecem na tabela da home nem no catálogo aberto.
      </p>
    </MarathonSession>
  );
}
