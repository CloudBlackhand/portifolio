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
        Quatro sistemas em producao: cadastro e funil de vendas (Vendas Hub),
        API WhatsApp self-hosted (WAHA), disparador de mensagens (MS) e
        comparacao de precos (Melhor Preco). Miniaturas reais em breve.
      </p>

      <div className="section-spacing card-grid">
        {projects.map((project) => {
          const cardW = 1200;
          const cardH =
            project.thumbnailWidth && project.thumbnailHeight
              ? Math.round(
                  (cardW * project.thumbnailHeight) / project.thumbnailWidth,
                )
              : 630;
          return (
          <article className="card interactive-card" key={project.slug}>
            <Image
              src={project.thumbnail}
              alt={`Miniatura do ${project.title}`}
              width={cardW}
              height={cardH}
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
        );
        })}
      </div>
    </section>
  );
}
