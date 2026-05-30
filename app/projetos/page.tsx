import type { Metadata } from "next";
import { ProjectCardGrid } from "@/app/components/project-card-grid";
import { getProjectsByKind } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos | Cloud Service",
  description:
    "Sistemas em produção, landing pages, consultoria e trabalhos confidenciais da Cloud Service.",
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
        resultado com linguagem clara e sem expor o que não pode ser público.
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
          Diagnóstico, arquitetura e direção técnica antes de implementar — sem
          link público, com descrição completa do tipo de entrega.
        </p>
        <ProjectCardGrid projects={consultoriaProjects} />
      </section>

      <section id="top-secret" className="section-spacing">
        <h2 className="section-heading">Trabalhos Top Secret</h2>
        <p className="muted section-spacing-sm">
          Sistemas em produção sob confidencialidade: mostramos o padrão de
          trabalho, não cliente, URL nem capturas.
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