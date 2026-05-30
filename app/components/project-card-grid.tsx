import Image from "next/image";
import Link from "next/link";
import {
  getProjectLiveLinkLabel,
  getProjectKindLabel,
  isConfidentialProject,
  isMarketingProject,
  isTopSecretProject,
  type Project,
} from "@/data/projects";

type ProjectCardGridProps = {
  projects: Project[];
};

export function ProjectCardGrid({ projects }: ProjectCardGridProps) {
  return (
    <div className="card-grid">
      {projects.map((project) => {
        const cardW = 1200;
        const cardH =
          project.thumbnailWidth && project.thumbnailHeight
            ? Math.round(
                (cardW * project.thumbnailHeight) / project.thumbnailWidth,
              )
            : 630;
        const marketing = isMarketingProject(project);
        const confidential = isConfidentialProject(project) && !isTopSecretProject(project);

        return (
          <article className="card interactive-card card--clickable" key={project.slug}>
            <Link
              className="card-stretched-link"
              href={`/projetos/${project.slug}`}
              aria-label={`Abrir ${project.title}`}
            />
            <Image
              src={project.thumbnail}
              alt=""
              width={cardW}
              height={cardH}
              className={
                marketing ? "card-image card-image--marketing" : "card-image"
              }
              aria-hidden
            />
            <div className="card-body">
              <p
                className={
                  confidential ? "card-kind card-kind--confidential" : "card-kind"
                }
              >
                {confidential ? "Sigilo comercial" : getProjectKindLabel(project)}
                {project.marketingHighlight ? " · Destaque" : ""}
              </p>
              <h2>{project.title}</h2>
              <p>{project.shortDescription}</p>
              <div className="section-spacing card-actions">
                <Link className="button card-action-link" href={`/projetos/${project.slug}`}>
                  Ver projeto
                </Link>
                {project.liveUrl ? (
                  <a
                    className="button primary card-action-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {getProjectLiveLinkLabel(project)}
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
