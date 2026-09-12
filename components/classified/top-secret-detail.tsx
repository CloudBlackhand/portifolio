"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { getProjectKindLabel } from "@/data/projects";
import {
  CLOUD_BOOT_HEAD,
  getDossierBootLines,
  getDossierBootTarget,
} from "@/components/classified/boot-lines";
import { ClassifiedSession } from "@/components/classified/session";
import { ClassifiedThumb } from "@/components/classified/thumb";

type TopSecretDetailProps = {
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
          ? "classified-session-panel classified-session-panel--warn"
          : "classified-session-panel"
      }
    >
      <h2 className="classified-session-panel-title">{title}</h2>
      <ul className="classified-session-panel-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function TopSecretDetail({ project }: TopSecretDetailProps) {
  const bootLines = getDossierBootLines(project);
  const bootTarget = getDossierBootTarget(project.slug);

  return (
    <ClassifiedSession
      fillViewport
      headerLeft="Cloud Service"
      headerRight="sob sigilo"
      bootLines={bootLines}
      bootHead={CLOUD_BOOT_HEAD}
      bootTarget={bootTarget}
      bootDuration={2.6}
    >
      <div className="classified-session-toolbar">
        <Link className="classified-session-back" href="/classificados">
          ← voltar à lista
        </Link>
        <span className="classified-session-badge">{getProjectKindLabel(project)}</span>
      </div>

      <header className="classified-session-head">
        <h1 className="classified-session-title">{project.title}</h1>
        <p className="classified-session-subtitle">{project.shortDescription}</p>
        {project.stack.length > 0 ? (
          <div className="classified-tablet-tags classified-session-tags">
            {project.stack.map((tag) => (
              <span key={tag} className="classified-tag classified-tag--neutral">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <figure className="classified-session-preview">
        <div className="classified-session-preview-frame">
          <ClassifiedThumb
            src={project.thumbnail}
            alt={`Ilustração: ${project.title}`}
            className="classified-session-preview-img"
            priority
          />
        </div>
      </figure>

      <section className="classified-session-panel">
        <h2 className="classified-session-panel-title">Sobre o trabalho</h2>
        <p className="classified-session-panel-body">{project.detailedDescription}</p>
      </section>

      <section className="classified-session-panel">
        <h2 className="classified-session-panel-title">Contexto do cliente</h2>
        <p className="classified-session-panel-body">{project.context}</p>
      </section>

      <ListPanel title="Limites do que publico" items={project.challenges} warn />
      <ListPanel title="O que foi feito" items={project.solution} />
      <ListPanel title="Resultado" items={project.results} />

      <section className="classified-session-panel classified-session-panel--warn">
        <h2 className="classified-session-panel-title">Privacidade</h2>
        <p className="classified-session-panel-body">
          Por acordo com o cliente, não mostro telas, código, links, credenciais
          ou qualquer dado que identifique a operação. Aqui fica só o contexto,
          a forma de resolver e o resultado, o suficiente para você avaliar o
          trabalho sem expor quem contratou.
        </p>
      </section>

      <p className="classified-session-foot">
        Cloud Service · {project.impactLabel}
      </p>
    </ClassifiedSession>
  );
}
