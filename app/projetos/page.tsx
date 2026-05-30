import type { Metadata } from "next";
import { ProjectCardGrid } from "@/app/components/project-card-grid";
import { ProjetosSigiloGate } from "@/app/components/projetos-sigilo-gate";
import { getCatalogProjectsByKind } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos | Cloud Service",
  description:
    "Sistemas em produção, landing pages e trabalhos de marketing e criativo da Cloud Service.",
};

export default function ProjetosPage() {
  const softwareProjects = getCatalogProjectsByKind("software");
  const landingProjects = getCatalogProjectsByKind("landing");
  const consultoriaProjects = getCatalogProjectsByKind("consultoria");
  const marketingProjects = getCatalogProjectsByKind("marketing").sort((a, b) => {
    if (a.marketingHighlight && !b.marketingHighlight) return -1;
    if (!a.marketingHighlight && b.marketingHighlight) return 1;
    return 0;
  });

  return (
    <section className="page-shell">
      <h1 className="page-title">Projetos</h1>
      <p className="page-subtitle">
        Sistemas, landing pages, consultoria e marketing — catálogo aberto com
        foco em resultado e linguagem clara.
      </p>

      <ProjetosSigiloGate />

      <section className="section-spacing">
        <h2 className="section-heading">Sistemas</h2>
        <p className="muted section-spacing-sm">
          MS, Melhor Preço, CEPBOT, CL Tech Shop e Cálculo Jurídico — produtos
          digitais em uso ou publicados com link no ar.
        </p>
        <ProjectCardGrid projects={softwareProjects} />
      </section>

      <section id="landing-pages" className="section-spacing">
        <h2 className="section-heading">Landing pages</h2>
        <p className="muted section-spacing-sm">
          RapidCred e CN Construtora — páginas de captura publicadas no Netlify com
          link para ver no ar.
        </p>
        <ProjectCardGrid projects={landingProjects} />
      </section>

      <section id="consultoria" className="section-spacing">
        <h2 className="section-heading">Consultoria</h2>
        <p className="muted section-spacing-sm">
          Diagnóstico, arquitetura e acompanhamento para digitalizar processos
          antes e durante a implementação.
        </p>
        <ProjectCardGrid projects={consultoriaProjects} />
      </section>

      <section id="marketing" className="section-spacing">
        <h2 className="section-heading">Marketing e criativo</h2>
        <p className="muted section-spacing-sm">
          Destaques: instalação grátis e rápida, e peça de velocidade com CTA. Também
          Copa 2026 e série de posts para feed.
        </p>
        <ProjectCardGrid projects={marketingProjects} />
      </section>
    </section>
  );
}
