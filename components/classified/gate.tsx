import Link from "next/link";
import { getTopSecretProjects } from "@/data/projects";

export function ClassifiedGate() {
  const topSecretProjects = getTopSecretProjects();
  const count = topSecretProjects.length;

  if (count === 0) return null;

  const projectLabel = count === 1 ? "projeto" : "projetos";

  return (
    <section
      id="sob-sigilo"
      className="classified-gate"
      aria-labelledby="classified-gate-heading"
    >
      <div className="classified-gate-inner">
        <p className="classified-gate-kicker">fora do catálogo aberto</p>
        <h2 id="classified-gate-heading" className="classified-gate-title">
          Projetos sob sigilo
        </h2>
        <p className="classified-gate-lead">
          Trabalhos de clientes que pediram discrição: comercial, mensageria, saúde,
          locação, imóveis e autoatendimento. Explico o que foi feito e o resultado,
          sem marcas, telas ou dados sensíveis.
        </p>
        <p className="classified-gate-meta">
          {count} {projectLabel} nesta lista
        </p>
        <Link className="classified-gate-link" href="/classificados">
          Ver projetos sob sigilo →
        </Link>
      </div>
    </section>
  );
}
