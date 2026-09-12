"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ClassifiedSession } from "@/components/classified/session";
import { ClassifiedThumb } from "@/components/classified/thumb";
import {
  CLOUD_BOOT_HEAD,
  getVaultBootLines,
} from "@/components/classified/boot-lines";

type ClassifiedSectionProps = {
  projects: Project[];
  standalone?: boolean;
};

export function ClassifiedSection({ projects, standalone = false }: ClassifiedSectionProps) {
  const reduceMotion = useReducedMotion();

  if (projects.length === 0) return null;

  return (
    <ClassifiedSession
      fillViewport={standalone}
      bootSequence={standalone}
      headerLeft="Cloud Service"
      headerRight="sob sigilo"
      bootLines={getVaultBootLines(projects.length)}
      bootHead={CLOUD_BOOT_HEAD}
      bootTarget={100}
      bootDuration={2.4}
    >
      <div className="classified-session-toolbar">
        <Link className="classified-session-back" href="/projetos#sob-sigilo">
          ← voltar aos projetos
        </Link>
        <span className="classified-session-badge">sob sigilo</span>
      </div>

      <header className="classified-session-head">
        <h2 id="classified-heading" className="classified-session-title">
          Projetos sob sigilo
        </h2>
        <p className="classified-session-subtitle">
          Cases reais, descritos com cuidado. Sem nomes de clientes, links, capturas
          de tela ou dados que possam identificar a operação.
        </p>
      </header>

      <ul className="classified-dossier-list">
        {projects.map((project, index) => (
          <motion.li
            key={project.slug}
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <Link
              className="classified-dossier-row"
              href={`/projetos/${project.slug}`}
              aria-label={`Abrir: ${project.title}`}
            >
              <div className="classified-dossier-row-main">
                <div className="classified-dossier-row-meta">
                  <span>{project.impactLabel}</span>
                  <span className="classified-dossier-row-index">
                    {String(index + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="classified-dossier-row-title">{project.title}</h3>
                <p className="classified-dossier-row-desc">{project.shortDescription}</p>
                <span className="classified-dossier-row-cta">ver detalhes →</span>
              </div>
              <div className="classified-dossier-row-preview" aria-hidden="true">
                <ClassifiedThumb
                  src={project.thumbnail}
                  alt=""
                  className="classified-dossier-row-img"
                />
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>

      <p className="classified-session-foot">
        Estes projetos não aparecem na tabela da home nem no catálogo aberto.
      </p>
    </ClassifiedSession>
  );
}
