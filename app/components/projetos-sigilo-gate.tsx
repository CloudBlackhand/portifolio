import Link from "next/link";
import { getTopSecretProjects } from "@/data/projects";

export function ProjetosSigiloGate() {
  const topSecretProjects = getTopSecretProjects();
  const count = topSecretProjects.length;

  if (count === 0) return null;

  const projectLabel = count === 1 ? "projeto" : "projetos";

  return (
    <section
      id="sob-sigilo"
      className="projetos-sigilo-gate"
      aria-labelledby="projetos-sigilo-heading"
    >
      <div className="projetos-sigilo-gate-inner">
        <p className="projetos-sigilo-kicker">fora do catálogo aberto</p>
        <h2 id="projetos-sigilo-heading" className="projetos-sigilo-title">
          Projetos sob sigilo
        </h2>
        <p className="projetos-sigilo-lead">
          Trabalhos de clientes que pediram discrição — comercial, mensageria, saúde,
          locação, imóveis e autoatendimento. Explico o que foi feito e o resultado,
          sem marcas, telas ou dados sensíveis.
        </p>
        <p className="projetos-sigilo-meta">
          {count} {projectLabel} nesta lista
        </p>
        <Link className="projetos-sigilo-link" href="/classificados">
          Ver projetos sob sigilo →
        </Link>
      </div>
    </section>
  );
}
