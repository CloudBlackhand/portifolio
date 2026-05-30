"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { getProjectKindLabel } from "@/data/projects";
import {
  CLOUD_BOOT_HEAD,
  getDossierBootLines,
  getDossierBootTarget,
} from "@/app/components/marathon/marathon-boot-lines";
import { MarathonSession } from "@/app/components/marathon/marathon-session";
import { MarathonThumb } from "@/app/components/marathon/marathon-thumb";

type MarathonTopSecretDetailProps = {
  project: Project;
};

function ListPanel({
  title,
  items,
  warn = false,
}: {
  title: string;
  items: string[];
  warn?: boolean;
}) {
  if (items.length === 0) return null;

  return (
    <section
      className={
        warn
          ? "marathon-session-panel marathon-session-panel--warn"
          : "marathon-session-panel"
      }
    >
      <h2 className="marathon-session-panel-title">{title}</h2>
      <ul className="marathon-session-panel-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function MarathonTopSecretDetail({ project }: MarathonTopSecretDetailProps) {
  const bootLines = getDossierBootLines(project);
  const bootTarget = getDossierBootTarget(project.slug);

  return (
    <MarathonSession
      fillViewport
      headerLeft="Cloud Service"
      headerRight="sob sigilo"
      bootLines={bootLines}
      bootHead={CLOUD_BOOT_HEAD}
      bootTarget={bootTarget}
      bootDuration={2.6}
    >
      <div className="marathon-session-toolbar">
        <Link className="marathon-session-back" href="/classificados">
          ← voltar à lista
        </Link>
        <span className="marathon-session-badge">{getProjectKindLabel(project)}</span>
      </div>

      <header className="marathon-session-head">
        <h1 className="marathon-session-title">{project.title}</h1>
        <p className="marathon-session-subtitle">{project.shortDescription}</p>
        {project.stack.length > 0 ? (
          <div className="marathon-tablet-tags marathon-session-tags">
            {project.stack.map((tag) => (
              <span key={tag} className="marathon-tag marathon-tag--neutral">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <figure className="marathon-session-preview">
        <div className="marathon-session-preview-frame">
          <MarathonThumb
            src={project.thumbnail}
            alt={`Ilustração — ${project.title}`}
            className="marathon-session-preview-img"
            priority
          />
        </div>
        <figcaption className="marathon-session-preview-caption">
          Ilustração genérica — sem captura real do sistema
        </figcaption>
      </figure>

      <section className="marathon-session-panel">
        <h2 className="marathon-session-panel-title">Sobre o trabalho</h2>
        <p className="marathon-session-panel-body">{project.detailedDescription}</p>
      </section>

      <section className="marathon-session-panel">
        <h2 className="marathon-session-panel-title">Contexto do cliente</h2>
        <p className="marathon-session-panel-body">{project.context}</p>
      </section>

      <ListPanel title="Limites do que publico" items={project.challenges} warn />
      <ListPanel title="O que foi feito" items={project.solution} />
      <ListPanel title="Resultado" items={project.results} />

      <section className="marathon-session-panel marathon-session-panel--warn">
        <h2 className="marathon-session-panel-title">Privacidade</h2>
        <p className="marathon-session-panel-body">
          Por acordo com o cliente, não mostro telas, código, links, credenciais
          ou qualquer dado que identifique a operação. Aqui fica só o contexto,
          a forma de resolver e o resultado — o suficiente para você avaliar o
          trabalho sem expor quem contratou.
        </p>
      </section>

      <p className="marathon-session-foot">
        Cloud Service · {project.impactLabel}
      </p>
    </MarathonSession>
  );
}
