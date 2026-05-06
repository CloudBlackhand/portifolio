import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos | Portifolio",
  description: "Lista de projetos com miniaturas e contexto resumido.",
};

export default function ProjetosPage() {
  return (
    <section>
      <h1 className="page-title">Projetos</h1>
      <p className="page-subtitle">
        Grade preparada para receber os seus 8 projetos com descricao completa,
        contexto e resultados.
      </p>

      <div className="section-spacing card-grid">
        {projects.map((project) => (
          <article className="card" key={project.slug}>
            <Image
              src={project.thumbnail}
              alt={`Miniatura do ${project.title}`}
              width={1200}
              height={630}
              className="card-image"
            />
            <div className="card-body">
              <h2>{project.title}</h2>
              <p>{project.shortDescription}</p>
              <div className="chip-list">
                {project.stack.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="section-spacing">
                <Link className="button" href={`/projetos/${project.slug}`}>
                  Abrir estudo
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
