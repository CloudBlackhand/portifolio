import Link from "next/link";
import { getTopSecretProjects } from "@/data/projects";

export function ProjetosSigiloGate() {
  const topSecretProjects = getTopSecretProjects();
  const count = topSecretProjects.length;

  if (count === 0) return null;

  const dossierLabel = count === 1 ? "dossiê" : "dossiês";

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
          Vendas Hub, infraestrutura WhatsApp HTTPS e outros sistemas com código em
          repositório privado. Você vê contexto, entrega e resultado — telas,
          credenciais e operação ficam protegidas por acordo.
        </p>
        <p className="projetos-sigilo-meta">
          {count} {dossierLabel} disponíveis · acesso pelo tablet imersivo
        </p>
        <Link className="projetos-sigilo-link" href="/classificados">
          Abrir arquivo confidencial →
        </Link>
      </div>
    </section>
  );
}
