import type { Metadata } from "next";
import { ProjectCardGrid } from "@/app/components/project-card-grid";
import { getProjectsByKind } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos | Cloud Service",
  description:
    "Sistemas em produção, landing pages e trabalhos de marketing e criativo da Cloud Service.",
};

export default function ProjetosPage() {
  const softwareProjects = getProjectsByKind("software");
  const landingProjects = getProjectsByKind("landing");
  const consultoriaProjects = getProjectsByKind("consultoria");
  const topSecretProjects = getProjectsByKind("topsecret");
  const marketingProjects = getProjectsByKind("marketing").sort((a, b) => {
    if (a.marketingHighlight && !b.marketingHighlight) return -1;
    if (!a.marketingHighlight && b.marketingHighlight) return 1;
    return 0;
  });

  return (
    <section className="page-shell">
      <h1 className="page-title">Projetos</h1>
      <p className="page-subtitle">
        Sistemas, landing pages, consultoria e trabalhos confidenciais — foco em
        resultado e linguagem clara, sem expor o que o cliente precisa proteger.
      </p>

      <section className="section-spacing">
        <h2 className="section-heading">Sistemas</h2>
        <p className="muted section-spacing-sm">
          Vendas Hub, Sistema HTTPS WhatsApp, MS, Melhor Preço e CEPBOT — produtos
          digitais em uso no dia a dia da operação.
        </p>
        <ProjectCardGrid projects={softwareProjects} />
      </section>

      <section id="landing-pages" className="section-spacing">
        <h2 className="section-heading">Landing pages</h2>
        <p className="muted section-spacing-sm">
          CL Tech Shop, RapidCred, CN Construtora e Cálculo Jurídico — sites
          publicados no Netlify com link para ver no ar.
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

      <section id="top-secret" className="section-spacing">
        <h2 className="section-heading">Top Secret</h2>
        <p className="muted section-spacing-sm">
          Trabalhos em produção sob sigilo — só contexto, solução e resultado,
          sem telas, links ou dados sensíveis.
        </p>
        <ProjectCardGrid projects={topSecretProjects} />
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