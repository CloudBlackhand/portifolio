import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

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
      title: "Projeto nao encontrado | Portifolio",
    };
  }

  return {
    title: `${project.title} | Portifolio`,
    description: project.shortDescription,
  };
}

export default async function ProjetoDetalhePage({ params }: Params) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const canShowCodeLink = project.visibility === "public" && Boolean(project.codeUrl);
  const hasDemo = Boolean(project.demoUrl);

  return (
    <article>
      <Link className="button" href="/projetos">
        Voltar para projetos
      </Link>

      <h1 className="page-title section-spacing">{project.title}</h1>
      <p className="page-subtitle">{project.shortDescription}</p>

      <div className="section-spacing">
        <Image
          src={project.thumbnail}
          alt={`Miniatura do ${project.title}`}
          width={1200}
          height={630}
          className="detail-image"
        />
      </div>

      <section className="content-block">
        <h3>Descricao detalhada do produto</h3>
        <p className="muted">{project.detailedDescription}</p>
      </section>

      <section className="content-block">
        <h3>Acesso publico</h3>
        {!hasDemo && !canShowCodeLink && (
          <p className="muted">
            Links serao adicionados na fase de publicacao de conteudo real.
          </p>
        )}
        <div className="link-row">
          {hasDemo && (
            <a className="button" href={project.demoUrl} target="_blank" rel="noreferrer">
              Ver demo
            </a>
          )}
          {canShowCodeLink && (
            <a className="button" href={project.codeUrl} target="_blank" rel="noreferrer">
              Ver codigo
            </a>
          )}
        </div>
      </section>
    </article>
  );
}

export const dynamicParams = false;
