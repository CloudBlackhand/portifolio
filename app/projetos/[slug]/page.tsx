import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getProjectKindLabel,
  getProjectLiveLinkLabel,
  isMarketingProject,
  MARKETING_DETAIL_MAX_WIDTH_PX,
  projects,
} from "@/data/projects";

type Params = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto não encontrado | Cloud Service",
    };
  }

  return {
    title: `${project.title} | Cloud Service`,
    description: project.shortDescription,
  };
}

export default async function ProjetoDetalhePage({ params }: Params) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const hasLiveLink = Boolean(project.liveUrl);
  const marketing = isMarketingProject(project);

  const thumbW = project.thumbnailWidth ?? 1200;
  const thumbH = project.thumbnailHeight ?? 630;
  const detailMaxW = marketing
    ? MARKETING_DETAIL_MAX_WIDTH_PX
    : project.thumbnailWidth;
  const detailThumbStyle: CSSProperties | undefined = detailMaxW
    ? ({
        ["--detail-img-max-w"]: `${detailMaxW}px`,
      } as CSSProperties)
    : undefined;

  return (
    <article className="page-shell">
      <Link className="button" href="/projetos">
        Voltar para projetos
      </Link>

      <p className="card-kind section-spacing-sm">
        {getProjectKindLabel(project)}
      </p>
      <h1 className="page-title">{project.title}</h1>
      <p className="page-subtitle section-spacing">{project.shortDescription}</p>

      <div
        className={
          marketing ? "section-spacing detail-media detail-media--marketing" : "section-spacing"
        }
      >
        <Image
          src={project.thumbnail}
          alt={
            marketing
              ? `Peça principal — ${project.title}`
              : `Captura principal do ${project.title}`
          }
          width={thumbW}
          height={thumbH}
          className={
            detailMaxW
              ? `detail-image detail-image--native${marketing ? " detail-image--marketing" : ""}`
              : "detail-image"
          }
          style={detailThumbStyle}
          sizes={
            marketing
              ? `(max-width: 740px) 100vw, ${MARKETING_DETAIL_MAX_WIDTH_PX}px`
              : "(max-width: 740px) 100vw, min(1100px, 100vw)"
          }
          priority
        />
      </div>

      {project.gallery && project.gallery.length > 0 ? (
        <section className="content-block section-spacing">
          <h3>{marketing ? "Outras peças" : "Outras telas"}</h3>
          <p className="muted privacy-note">
            {marketing
              ? "Variações da campanha em formato para Instagram e redes."
              : "Capturas reais da interface em uso (versão desktop)."}
          </p>
          <div
            className={
              marketing ? "detail-gallery detail-gallery--marketing" : "detail-gallery"
            }
          >
            {project.gallery.map((item) => {
              const gw = item.width ?? 1200;
              const gh = item.height ?? 675;
              const galleryMaxW = marketing
                ? MARKETING_DETAIL_MAX_WIDTH_PX
                : item.width;
              const galleryStyle: CSSProperties | undefined = galleryMaxW
                ? ({
                    ["--detail-img-max-w"]: `${galleryMaxW}px`,
                  } as CSSProperties)
                : undefined;
              return (
              <figure key={item.src} className="detail-gallery-figure">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={gw}
                  height={gh}
                  className={
                    galleryMaxW
                      ? `detail-image detail-image--native${marketing ? " detail-image--marketing" : ""}`
                      : "detail-image"
                  }
                  style={galleryStyle}
                  sizes={
                    marketing
                      ? `(max-width: 740px) 100vw, ${MARKETING_DETAIL_MAX_WIDTH_PX}px`
                      : "(max-width: 740px) 100vw, 50vw"
                  }
                />
              </figure>
            );
            })}
          </div>
        </section>
      ) : null}

      <section className="content-block section-spacing">
        <h3>{marketing ? "Sobre o trabalho" : "Descrição detalhada do produto"}</h3>
        <p className="muted">{project.detailedDescription}</p>
      </section>

      {!marketing ? (
        <section className="content-block">
          <h3>Experimente</h3>
          {!hasLiveLink ? (
            <p className="muted">
              O link para ver o sistema no ar será publicado em breve.
            </p>
          ) : (
            <div className="link-row">
              <a
                className="button primary"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                {getProjectLiveLinkLabel(project)}
              </a>
            </div>
          )}
        </section>
      ) : null}
    </article>
  );
}

export const dynamicParams = false;
