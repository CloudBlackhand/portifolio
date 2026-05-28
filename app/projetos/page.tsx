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
  const marketingProjects = getProjectsByKind("marketing").sort((a, b) => {
    if (a.marketingHighlight && !b.marketingHighlight) return -1;
    if (!a.marketingHighlight && b.marketingHighlight) return 1;
    return 0;
  });

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

      <section id="marketing" className="section-spacing">
        <h2 className="section-heading">Marketing e criativo</h2>
        <p className="muted section-spacing-sm">
          Destaques: instalacao gratis e rapida e peca de velocidade com CTA. Tambem
          Copa 2026 e serie de posts para feed.
        </p>
        <ProjectCardGrid projects={marketingProjects} />
      </section>
    </section>
  );
}
