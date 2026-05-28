import Image from "next/image";
import Link from "next/link";
import { getMarketingHighlightProjects } from "@/data/projects";

const PREVIEW_WIDTH = 480;

export function MarketingHighlights() {
  const highlights = getMarketingHighlightProjects();

  if (highlights.length === 0) {
    return null;
  }

  return (
    <section className="marketing-section" aria-labelledby="marketing-section-title">
      <div className="container">
        <p className="ep-eyebrow ep-eyebrow-dark">Marketing e criativo</p>
        <h2 id="marketing-section-title" className="ep-section-title">
          Pecas que mais convertem
        </h2>
        <p className="ep-section-lead">
          Posts para Instagram e campanhas visuais de provedor de internet — fora do
          banner de sistemas, com foco no resultado estetico e na mensagem de venda.
        </p>

        <div className="marketing-highlight-grid">
          {highlights.map((project) => {
            const previewH =
              project.thumbnailWidth && project.thumbnailHeight
                ? Math.round(
                    (PREVIEW_WIDTH * project.thumbnailHeight) /
                      project.thumbnailWidth,
                  )
                : 600;

            return (
              <article className="marketing-highlight-card" key={project.slug}>
                <Link
                  href={`/projetos/${project.slug}`}
                  className="marketing-highlight-media"
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={PREVIEW_WIDTH}
                    height={previewH}
                    className="marketing-highlight-image"
                    sizes="(max-width: 640px) 90vw, 400px"
                  />
                </Link>
                <div className="marketing-highlight-body">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  <Link className="button" href={`/projetos/${project.slug}`}>
                    Ver peca
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <p className="section-spacing">
          <Link className="button" href="/projetos#marketing">
            Ver todo marketing e criativo
          </Link>
        </p>
      </div>
    </section>
  );
}
