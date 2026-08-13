import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCardGrid } from "@/app/components/project-card-grid";
import { ProjetosSigiloGate } from "@/app/components/projetos-sigilo-gate";
import { getCatalogProjectsByKind } from "@/data/projects";

export const metadata: Metadata = {
  title: "Sistemas de gestão empresarial | Cloud Service",
  description:
    "ERP, CRM, financeiro, estoque, RH, frotas, BI e gestão de projetos — cases reais da Cloud Service para empresas de todos os tamanhos.",
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
      <h1 className="page-title">Sistemas de gestão empresarial</h1>
      <p className="page-subtitle">
        ERP, CRM, financeiro, estoque, RH, frotas, BI e gestão de projetos —
        catálogo de cases reais para administradores, gestores e empresários.
      </p>

      <ProjetosSigiloGate />

      <section className="section-spacing">
        <h2 className="section-heading">Sistemas e gestão empresarial</h2>
        <p className="muted section-spacing-sm">
          ERP360, CRM Max, Controla Financeiro, Stock Control, Ponto Digital,
          Service OS, Fleet Manager, Business View, PDV Cloud, Project Hub e
          mais — sistemas que movem a operação de empresas de todos os tamanhos.
        </p>
        <ProjectCardGrid projects={softwareProjects} />
      </section>

      <section id="landing-pages" className="section-spacing">
        <h2 className="section-heading">Landing pages</h2>
        <p className="muted section-spacing-sm">
          VISION, ViON, RapidCred e CN Construtora — páginas com hero 3D ou captura
          publicadas, com link para ver no ar quando disponível.
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

      <section className="content-block section-spacing" aria-labelledby="projetos-cta-title">
        <h2 id="projetos-cta-title" className="section-heading">
          Pronto para organizar sua operação?
        </h2>
        <p className="muted section-spacing-sm">
          Se sua empresa ainda vive de planilhas, WhatsApp solto e ferramentas
          avulsas, vamos conversar. Desenho e entrego sistemas de gestão
          pensados para o dia a dia real do seu negócio.
        </p>
        <div className="link-row">
          <a
            className="button primary"
            href="https://wa.me/5521971364919"
            target="_blank"
            rel="noreferrer"
          >
            Falar sobre meu projeto
          </a>
          <Link className="button" href="/contato">
            Ver página de contato
          </Link>
        </div>
      </section>
    </section>
  );
}
