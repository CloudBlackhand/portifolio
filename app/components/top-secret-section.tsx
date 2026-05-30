import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type TopSecretSectionProps = {
  projects: Project[];
  standalone?: boolean;
};

function caseIdFromSlug(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 9973;
  }
  return `CS-${String(hash).padStart(4, "0")}`;
}

function loadPercentFromSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 17 + slug.charCodeAt(i)) % 100;
  }
  return 42 + (hash % 48);
}

function MarathonRegMarks() {
  return (
    <>
      <span className="marathon-reg marathon-reg--tl" aria-hidden="true" />
      <span className="marathon-reg marathon-reg--tr" aria-hidden="true" />
      <span className="marathon-reg marathon-reg--bl" aria-hidden="true" />
      <span className="marathon-reg marathon-reg--br" aria-hidden="true" />
    </>
  );
}

function MarathonLoadBar({ label, percent }: { label: string; percent: number }) {
  return (
    <div className="marathon-load">
      <div className="marathon-load-label">
        <span>{label}</span>
        <span className="marathon-load-pct">{percent}%</span>
      </div>
      <div className="marathon-load-track" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
        <span className="marathon-load-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export function TopSecretSection({ projects, standalone = false }: TopSecretSectionProps) {
  if (projects.length === 0) return null;

  return (
    <section
      id={standalone ? undefined : "top-secret"}
      className={
        standalone
          ? "marathon-world marathon-world--standalone"
          : "marathon-world"
      }
      aria-labelledby="classified-heading"
    >
      <div className="marathon-world-bg" aria-hidden="true">
        <div className="marathon-world-gradient" />
        <div className="marathon-world-dither" />
      </div>

      <div className="marathon-world-inner">
        <article className="marathon-tablet marathon-tablet--hero">
          <div className="marathon-tablet-frame">
            <MarathonRegMarks />
            <div className="marathon-tablet-bezel">
              <div className="marathon-tablet-notch" aria-hidden="true" />
              <div className="marathon-tablet-screen marathon-tablet-screen--hero">
                <p className="marathon-tablet-kicker">UESC · sense-mem · dossier index</p>
                <MarathonLoadBar label="sync restricted files" percent={67} />
                <h2 id="classified-heading" className="marathon-tablet-title">
                  Arquivos restritos
                </h2>
                <p className="marathon-tablet-lead">
                  Trabalhos em produção sob acordo de sigilo. Contexto e resultado
                  publicados — identidade, telas e dados sensíveis ficam fora do
                  registro aberto.
                </p>
                <div className="marathon-tablet-tags" aria-hidden="true">
                  <span className="marathon-tag marathon-tag--pink">REDACTED</span>
                  <span className="marathon-tag marathon-tag--cyan">SANITIZED</span>
                  <span className="marathon-tag marathon-tag--yellow">IN FIELD</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <ul className="marathon-tablet-grid">
          {projects.map((project, index) => {
            const pct = loadPercentFromSlug(project.slug);
            return (
              <li key={project.slug}>
                <Link
                  className="marathon-tablet marathon-tablet--card interactive-card"
                  href={`/projetos/${project.slug}`}
                  aria-label={`Abrir dossiê: ${project.title}`}
                >
                  <div className="marathon-tablet-frame">
                    <MarathonRegMarks />
                    <div className="marathon-tablet-bezel">
                      <div className="marathon-tablet-screen">
                        <div className="marathon-tablet-meta">
                          <span>{caseIdFromSlug(project.slug)}</span>
                          <span>
                            {String(index + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
                          </span>
                        </div>
                        <MarathonLoadBar label="decrypt dossier" percent={pct} />
                        <div className="marathon-tablet-preview">
                          <Image
                            src={project.thumbnail}
                            alt=""
                            width={1200}
                            height={630}
                            className="marathon-tablet-preview-img"
                            aria-hidden="true"
                          />
                          <div className="marathon-tablet-preview-glitch" aria-hidden="true" />
                        </div>
                        <h3 className="marathon-tablet-card-title">{project.title}</h3>
                        <p className="marathon-tablet-card-desc">{project.shortDescription}</p>
                        <p className="marathon-tablet-redact" aria-hidden="true">
                          client ████████ · stack ███ · endpoint █████████
                        </p>
                        <span className="marathon-tablet-cta">Abrir registro →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="marathon-world-footnote">
          Estes dossiês não aparecem na tabela da home nem no catálogo público.
        </p>
      </div>
    </section>
  );
}
