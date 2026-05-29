import Image from "next/image";
import Link from "next/link";
import {
  getProjectLiveLinkLabel,
  getProjectKindLabel,
  isMarketingProject,
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

        return (
          <article className="card interactive-card" key={project.slug}>
            <Image
              src={project.thumbnail}
              alt={`Miniatura do ${project.title}`}
              width={cardW}
              height={cardH}
              className={
                marketing ? "card-image card-image--marketing" : "card-image"
              }
            />
            <div className="card-body">
              <p className="card-kind">
                {getProjectKindLabel(project)}
                {project.marketingHighlight ? " · Destaque" : ""}
              </p>
              <h2>{project.title}</h2>
              <p>{project.shortDescription}</p>
              <div className="section-spacing link-row">
                <Link className="button" href={`/projetos/${project.slug}`}>
                  Ver projeto
                </Link>
                {project.liveUrl ? (
                  <a
                    className="button primary"
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
