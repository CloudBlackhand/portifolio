import type { Metadata } from "next";
import { ProjectCardGrid } from "@/app/components/project-card-grid";
import { getProjectsByKind } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos | Cloud Service",
  description:
    "Sistemas em producao e trabalhos de marketing e criativo da Cloud Service.",
};

export default function ProjetosPage() {
  const softwareProjects = getProjectsByKind("software");
  const marketingProjects = getProjectsByKind("marketing");

  return (
    <section className="page-shell">
      <h1 className="page-title">Projetos</h1>
      <p className="page-subtitle">
        Sistemas que colocamos no ar e pecas de marketing para redes — tudo com
        foco em resultado e linguagem clara para o cliente final.
      </p>

      <section className="section-spacing">
        <h2 className="section-heading">Sistemas</h2>
        <p className="muted section-spacing-sm">
          Vendas Hub, Sistema HTTPS WhatsApp, MS, Melhor Preco e CEPBOT — produtos
          digitais em uso no dia a dia da operacao.
        </p>
        <ProjectCardGrid projects={softwareProjects} />
      </section>

      <section className="section-spacing">
        <h2 className="section-heading">Marketing e criativo</h2>
        <p className="muted section-spacing-sm">
          Campanhas visuais para Instagram e materiais promocionais de provedor de
          internet — ofertas, instalacao, Wi-Fi e eventos sazonais.
        </p>
        <ProjectCardGrid projects={marketingProjects} />
      </section>
    </section>
  );
}
