"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { getProjectKindLabel } from "@/data/projects";
import { MarathonLoadBar } from "@/app/components/marathon/marathon-load-bar";
import { MarathonSession } from "@/app/components/marathon/marathon-session";
import { MarathonStatusTicker } from "@/app/components/marathon/marathon-status-ticker";

const DETAIL_STATUS = "dossier sanitizado · sem capturas publicas · cliente redacted";

type MarathonTopSecretDetailProps = {
  project: Project;
};

export function MarathonTopSecretDetail({ project }: MarathonTopSecretDetailProps) {
  return (
    <MarathonSession
      fillViewport
      headerLeft="UESC · sense-mem"
      headerRight="dossier / sanitized"
    >
      <div className="marathon-session-toolbar">
        <Link className="marathon-session-back" href="/classificados">
          ← partition classificados
        </Link>
        <span className="marathon-session-badge">{getProjectKindLabel(project)}</span>
      </div>

      <MarathonStatusTicker messages={[DETAIL_STATUS]} />
      <MarathonLoadBar label="decrypt dossier" target={100} delay={0.2} duration={1.6} />

      <header className="marathon-session-head">
        <h1 className="marathon-session-title">{project.title}</h1>
        <p className="marathon-session-subtitle">{project.shortDescription}</p>
      </header>

      <figure className="marathon-session-preview">
        <div className="marathon-session-preview-frame">
          <Image
            src={project.thumbnail}
            alt={`Representação ilustrativa — ${project.title}`}
            width={1200}
            height={630}
            className="marathon-session-preview-img"
            priority
          />
        </div>
        <figcaption className="marathon-session-preview-caption">
          representação ilustrativa · sem captura real
        </figcaption>
      </figure>

      <section className="marathon-session-panel">
        <h2 className="marathon-session-panel-title">Sobre o trabalho</h2>
        <p className="marathon-session-panel-body">{project.detailedDescription}</p>
      </section>

      <section className="marathon-session-panel marathon-session-panel--warn">
        <h2 className="marathon-session-panel-title">Protocolo de sigilo</h2>
        <p className="marathon-session-panel-body">
          Por acordo com o cliente, não publicamos capturas, código, links ou dados
          sensíveis. Só contexto, solução e resultado — arquivo classificado, sem
          exposição operacional.
        </p>
      </section>

      <p className="marathon-session-foot">
        Registro liberado só em nível descritivo. Identidade do cliente, telas e
        arquitetura permanecem fora do catálogo aberto.
      </p>
    </MarathonSession>
  );
}
