"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { getProjectKindLabel } from "@/data/projects";
import {
  CLOUD_BOOT_HEAD,
  getDossierBootLines,
  getDossierBootTarget,
} from "@/app/components/marathon/marathon-boot-lines";
import { MarathonSession } from "@/app/components/marathon/marathon-session";

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
      headerLeft="Cloud · sense-mem"
      headerRight="dossier / sanitized"
      bootLines={bootLines}
      bootHead={CLOUD_BOOT_HEAD}
      bootTarget={bootTarget}
      bootDuration={2.6}
    >
      <div className="marathon-session-toolbar">
        <Link className="marathon-session-back" href="/classificados">
          ← voltar ao arquivo
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
          representação ilustrativa · sem captura real · dados reais redigidos
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

      <ListPanel title="O que fica fora do portfólio aberto" items={project.challenges} warn />
      <ListPanel title="Como foi entregue" items={project.solution} />
      <ListPanel title="Resultado em produção" items={project.results} />

      <section className="marathon-session-panel marathon-session-panel--warn">
        <h2 className="marathon-session-panel-title">Protocolo de sigilo</h2>
        <p className="marathon-session-panel-body">
          Estes dossiês existem para provar entrega em cenário real — com dados de
          clientes, credenciais, conversas ou pipeline comercial — sem expor nada
          disso publicamente. Não publicamos capturas, código, links, números,
          endpoints, payloads ou identidade do contratante. O que você vê aqui é
          memória sanitizada: contexto, abordagem e resultado aprovados para leitura
          externa.
        </p>
      </section>

      <p className="marathon-session-foot">
        Cloud Service · registro classificado · {project.impactLabel.toLowerCase()}
      </p>
    </MarathonSession>
  );
}
