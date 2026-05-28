"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

function useMotionTransition(base: { duration: number; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return { duration: 0 };
  return base;
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={useMotionTransition({ duration: 0.55, delay })}
    >
      {children}
    </motion.div>
  );
}

const pillars = [
  {
    title: "Entrega pensada para producao",
    body:
      "Nada de demo fragil: fluxos, cadastros e integracoes pensados para o dia a dia da operacao.",
  },
  {
    title: "Stack moderna e sustentavel",
    body:
      "Next.js, TypeScript, APIs e infraestrutura que voce consegue evoluir sem reescrever tudo a cada ano.",
  },
  {
    title: "Clareza sem vazar segredo",
    body:
      "Contexto, solucao e resultado — sem expor codigo proprietario ou dados sensiveis do cliente.",
  },
  {
    title: "Canal oficial e governanca",
    body:
      "WhatsApp e mensageria com filas, atrasos e rastreio — o que a operacao precisa para escalar com seguranca.",
  },
];

const stats = [
  { label: "Sistemas em producao", value: "5" },
  { label: "Foco", value: "Resultado" },
  { label: "Canais", value: "WhatsApp + Web" },
  { label: "Prioridade", value: "Conforto para o cliente" },
];

type LandingPageProps = {
  projects: Project[];
};

export function LandingPage({ projects }: LandingPageProps) {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <section className="ep-section ep-section-tint ep-after-showcase">
        <div className="container">
          <Reveal>
            <p className="ep-eyebrow ep-eyebrow-dark">Experimente voce mesmo</p>
            <h2 className="ep-section-title">Veja a Cloud Service em acao</h2>
            <p className="ep-section-lead">
              Cada projeto traz contexto, solucao e resultado em linguagem clara.
              Abra a pagina do projeto e veja as capturas quando disponiveis.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="ep-device">
              <div className="ep-device-chrome">
                <span className="ep-device-dot" />
                <span className="ep-device-dot" />
                <span className="ep-device-dot" />
                <span className="ep-device-url">cloudservice / projetos</span>
              </div>
              <div className="ep-device-body">
                <div className="ep-device-sidebar">
                  <span className="ep-device-pill">Destaques</span>
                  {featured.slice(0, 3).map((p) => (
                    <div key={p.slug} className="ep-device-row">
                      <span className="ep-device-dot-sm" />
                      {p.title}
                    </div>
                  ))}
                </div>
                <div className="ep-device-main">
                  <p className="ep-device-kicker">Resumo executivo</p>
                  <p className="ep-device-text">
                    Vendas Hub, Sistema HTTPS WhatsApp, MS, Melhor Preco e CEPBOT — sistemas usados de
                    verdade, com link para ver no ar ou falar com o bot quando disponivel.
                  </p>
                  <Link className="ep-btn ep-btn-primary ep-btn-sm" href="/projetos">
                    Abrir lista completa
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ep-section">
        <div className="container">
          <Reveal>
            <p className="ep-eyebrow ep-eyebrow-dark">Por que esta abordagem</p>
            <h2 className="ep-section-title">A forma mais direta de evoluir o stack</h2>
            <p className="ep-section-lead ep-section-lead-narrow">
              Menos ferramenta solta, mais produto integrado. E o que aplicamos
              nos sistemas que voce ve aqui.
            </p>
          </Reveal>
          <div className="ep-pillars">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.06 * i}>
                <article className="ep-pillar-card">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ep-section ep-section-tint">
        <div className="container">
          <Reveal>
            <p className="ep-eyebrow ep-eyebrow-dark">Em numeros</p>
            <h2 className="ep-section-title">O que consolidamos na Cloud Service</h2>
          </Reveal>
          <div className="ep-stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.05 * i}>
                <div className="ep-stat">
                  <span className="ep-stat-value">{s.value}</span>
                  <span className="ep-stat-label">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ep-section">
        <div className="container ep-cta-block">
          <Reveal>
            <p className="ep-eyebrow ep-eyebrow-dark">Vamos conversar</p>
            <h2 className="ep-section-title">Pronto para o proximo sistema?</h2>
            <p className="ep-section-lead ep-section-lead-narrow">
              Conte objetivo, prazo e restricoes — respondemos pelo WhatsApp ou
              pela pagina de contato.
            </p>
            <div className="ep-hero-cta">
              <Link className="ep-btn ep-btn-primary" href="/contato">
                Ir para contato
              </Link>
              <Link className="ep-btn ep-btn-ghost" href="/projetos">
                Ver projetos
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ep-section ep-section-tint">
        <div className="container ep-about-grid">
          <Reveal>
            <div className="ep-about-photo">
              <Image
                src="/profile-placeholder.svg"
                alt="Foto profissional"
                width={420}
                height={420}
                className="ep-about-img"
              />
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="ep-about-copy">
              <p className="ep-eyebrow ep-eyebrow-dark">Antes de tudo</p>
              <h2 className="ep-section-title ep-section-title-left">
                Uma conversa clara sobre o seu projeto
              </h2>
              <p className="ep-body">
                Meu foco e entender seu objetivo de negocio antes de propor
                qualquer solucao tecnica. Cada entrega nasce com direcao,
                prioridade e criterio de resultado desde o inicio.
              </p>
              <p className="ep-body">
                Alinhamentos curtos e objetivos para reduzir duvidas e manter
                transparencia durante todo o processo.
              </p>
              <div className="ep-hero-cta">
                <a
                  className="ep-btn ep-btn-primary"
                  href="https://wa.me/5521971364919"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
                <Link className="ep-btn ep-btn-ghost" href="/contato">
                  Contato
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ep-section">
        <div className="container ep-pro-intro">
          <Reveal>
            <p className="ep-eyebrow ep-eyebrow-dark">Apresentacao profissional</p>
            <h2 className="ep-section-title">Como eu trabalho</h2>
            <p className="ep-section-lead ep-section-lead-narrow">
              Entendimento real do problema, implementacao robusta e resultado
              mensuravel — impacto sem expor detalhes sensiveis de codigo ou
              arquitetura proprietaria.
            </p>
            <div className="ep-hero-cta">
              <Link className="ep-btn ep-btn-primary" href="/projetos">
                Ver todos os projetos
              </Link>
              <Link className="ep-btn ep-btn-ghost" href="/contato">
                Novo projeto
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
