import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type TopSecretSectionProps = {
  projects: Project[];
  /** Página dedicada /classificados — layout full-screen. */
  standalone?: boolean;
};

function caseIdFromSlug(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 9973;
  }
  return `CS-${String(hash).padStart(4, "0")}`;
}

export function TopSecretSection({ projects, standalone = false }: TopSecretSectionProps) {
  if (projects.length === 0) return null;

  return (
    <section
      id={standalone ? undefined : "top-secret"}
      className={
        standalone ? "classified-zone classified-zone--standalone" : "classified-zone"
      }
      aria-labelledby="classified-heading"
    >
      <div className="classified-zone-bg" aria-hidden="true">
        <div className="classified-zone-noise" />
        <div className="classified-zone-scanlines" />
        <div className="classified-zone-grid" />
      </div>

      <div className="classified-zone-inner">
        <header className="classified-header">
          <div className="classified-header-meta">
            <span className="classified-stamp">CLASSIFIED</span>
            <span className="classified-clearance">CLEARANCE // OMEGA</span>
          </div>
          <p className="classified-transmission" aria-hidden="true">
            UESC-NODE :: SIGNAL DEGRADED :: CLIENT ID REDACTED
          </p>
          <h2 id="classified-heading" className="classified-title">
            Arquivos restritos
          </h2>
          <p className="classified-lead">
            Trabalhos em produção sob acordo de sigilo. Contexto e resultado
            publicados — identidade, telas e dados sensíveis permanecem fora do
            registro aberto.
          </p>
        </header>

        <ul className="classified-grid">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Link
                className="classified-card interactive-card"
                href={`/projetos/${project.slug}`}
                aria-label={`Abrir dossiê classificado: ${project.title}`}
              >
                <span className="classified-fiducial classified-fiducial--tl" aria-hidden="true" />
                <span className="classified-fiducial classified-fiducial--tr" aria-hidden="true" />
                <span className="classified-fiducial classified-fiducial--bl" aria-hidden="true" />
                <span className="classified-fiducial classified-fiducial--br" aria-hidden="true" />

                <div className="classified-card-top">
                  <span className="classified-case-id">{caseIdFromSlug(project.slug)}</span>
                  <span className="classified-index">
                    {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="classified-thumb-wrap">
                  <Image
                    src={project.thumbnail}
                    alt=""
                    width={1200}
                    height={630}
                    className="classified-thumb"
                    aria-hidden="true"
                  />
                  <div className="classified-thumb-overlay" aria-hidden="true" />
                </div>

                <div className="classified-card-body">
                  <p className="classified-label">DOSSIÊ // RESTRITO</p>
                  <h3 className="classified-card-title">{project.title}</h3>
                  <p className="classified-card-desc">{project.shortDescription}</p>
                  <p className="classified-redacted-line" aria-hidden="true">
                    CLIENTE: ████████ · STACK: ███ · ENDPOINT: █████████
                  </p>
                  <span className="classified-open">Abrir registro sanitizado →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="classified-footer-note">
          Estes arquivos não aparecem na tabela resumo da home, no catálogo
          público de projetos nem em listagens abertas.
        </p>
      </div>
    </section>
  );
}
