import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getProjectLiveLinkLabel,
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
      title: "Projeto nao encontrado | Cloud Service",
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

  const thumbW = project.thumbnailWidth ?? 1200;
  const thumbH = project.thumbnailHeight ?? 630;
  const detailThumbStyle: CSSProperties | undefined = project.thumbnailWidth
    ? ({
        ["--detail-img-max-w"]: `${project.thumbnailWidth}px`,
      } as CSSProperties)
    : undefined;

  return (
    <article className="page-shell">
      <Link className="button" href="/projetos">
        Voltar para projetos
      </Link>

      <h1 className="page-title section-spacing">{project.title}</h1>
      <p className="page-subtitle">{project.shortDescription}</p>

      <div className="section-spacing">
        <Image
          src={project.thumbnail}
          alt={`Captura principal do ${project.title}`}
          width={thumbW}
          height={thumbH}
          className={
            project.thumbnailWidth
              ? "detail-image detail-image--native"
              : "detail-image"
          }
          style={detailThumbStyle}
          sizes="(max-width: 740px) 100vw, min(1100px, 100vw)"
          priority
        />
      </div>

      {project.gallery && project.gallery.length > 0 ? (
        <section className="content-block section-spacing">
          <h3>Outras telas</h3>
          <p className="muted privacy-note">
            Capturas reais da interface em uso (versao desktop).
          </p>
          <div className="detail-gallery">
            {project.gallery.map((item) => {
              const gw = item.width ?? 1200;
              const gh = item.height ?? 675;
              const galleryStyle: CSSProperties | undefined = item.width
                ? ({
                    ["--detail-img-max-w"]: `${item.width}px`,
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
                    item.width
                      ? "detail-image detail-image--native"
                      : "detail-image"
                  }
                  style={galleryStyle}
                  sizes="(max-width: 740px) 100vw, 50vw"
                />
              </figure>
            );
            })}
          </div>
        </section>
      ) : null}

      <section className="content-block section-spacing">
        <h3>Descricao detalhada do produto</h3>
        <p className="muted">{project.detailedDescription}</p>
      </section>

      <section className="content-block">
        <h3>Experimente</h3>
        {!hasLiveLink ? (
          <p className="muted">
            O link para ver o sistema no ar sera publicado em breve.
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
    </article>
  );
}

export const dynamicParams = false;
