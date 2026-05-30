"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ProfilePhoto } from "@/lib/profile-photo";
import type { Project } from "@/data/projects";
import { getShowcaseProjects } from "@/data/projects";

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
    title: "Sistemas em produção",
    body:
      "Cadastros, funis, dashboards e integrações que o time usa todo dia — não protótipo de vitrine.",
  },
  {
    title: "WhatsApp e automação",
    body:
      "Bots, disparos, filas e canal oficial com governança — do atendimento ao envio em massa.",
  },
  {
    title: "Consultoria técnica",
    body:
      "Diagnóstico e arquitetura antes do código: prioridade clara, menos retrabalho e dívida evitável.",
  },
  {
    title: "Sigilo quando importa",
    body:
      "Cases confidenciais com contexto e resultado publicados — sem vazar operação ou dados do cliente.",
  },
];

const stats = [
  { label: "Sistemas em produção", value: "7" },
  { label: "Disponível para projetos", value: "Sim" },
  { label: "Stack principal", value: "Next.js" },
  { label: "Resposta", value: "Rápida" },
];

type LandingPageProps = {
  projects: Project[];
  profilePhoto: ProfilePhoto;
};

export function LandingPage({ projects, profilePhoto }: LandingPageProps) {
  const featured = getShowcaseProjects(projects);

  return (
    <>
      <section className="ep-section ep-section-tint ep-after-showcase">
        <div className="container">
          <Reveal>
            <p className="ep-eyebrow ep-eyebrow-dark">&gt; portfólio / projetos</p>
            <h2 className="ep-section-title">Prova de entrega — no ar de verdade</h2>
            <p className="ep-section-lead">
              Sistemas, landings e automação com link público quando permitido.
              Abra cada case e veja capturas reais do que foi entregue.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="ep-device">
              <div className="ep-device-chrome">
                <span className="ep-device-dot" />
                <span className="ep-device-dot" />
                <span className="ep-device-dot" />
                <span className="ep-device-url">cloud.service / hire-me</span>
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
                  <p className="ep-device-kicker">Para contratantes</p>
                  <p className="ep-device-text">
                    Portfólio com sistemas comerciais, WhatsApp, e-commerce,
                    jurídico e campanhas — evidência concreta de stack e entrega.
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
            <p className="ep-eyebrow ep-eyebrow-dark">&gt; serviços</p>
            <h2 className="ep-section-title">O que posso entregar no seu projeto</h2>
            <p className="ep-section-lead ep-section-lead-narrow">
              Foco em resultado operacional: menos ferramenta solta, mais produto
              integrado que o time consegue usar amanhã.
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
            <p className="ep-eyebrow ep-eyebrow-dark">&gt; status</p>
            <h2 className="ep-section-title">Resumo para quem está contratando</h2>
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
            <p className="ep-eyebrow ep-eyebrow-dark">&gt; contato / contratar</p>
            <h2 className="ep-section-title">Disponível para o próximo projeto</h2>
            <p className="ep-section-lead ep-section-lead-narrow">
              Conte objetivo, prazo e orçamento aproximado — respondo rápido pelo
              WhatsApp ou pela página de contato.
            </p>
            <div className="ep-hero-cta">
              <a
                className="ep-btn ep-btn-primary"
                href="https://wa.me/5521971364919?text=Ola%2C%20vi%20seu%20portfolio%20e%20quero%20contratar%20para%20um%20projeto."
                target="_blank"
                rel="noreferrer"
              >
                Contratar via WhatsApp
              </a>
              <Link className="ep-btn ep-btn-ghost" href="/contato">
                Outros canais
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ep-section ep-section-tint">
        <div className="container ep-about-grid">
          <Reveal>
            <div
              className={
                profilePhoto.src.includes("profile-placeholder")
                  ? "ep-about-photo"
                  : "ep-about-photo ep-about-photo--real"
              }
            >
              <Image
                src={profilePhoto.src}
                alt={profilePhoto.alt}
                width={profilePhoto.width}
                height={profilePhoto.height}
                className={
                  profilePhoto.src.includes("profile-placeholder")
                    ? "ep-about-img"
                    : "ep-about-img ep-about-img--photo"
                }
                sizes="(max-width: 640px) 85vw, 420px"
                priority={false}
              />
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="ep-about-copy">
              <p className="ep-eyebrow ep-eyebrow-dark">&gt; perfil</p>
              <h2 className="ep-section-title ep-section-title-left">
                Quem está por trás da Cloud Service
              </h2>
              <p className="ep-body">
                Desenvolvedor focado em sistemas reais: entendo o processo do
                cliente antes de propor código, priorizo entrega que funciona em
                produção e comunico com clareza do início ao fim.
              </p>
              <p className="ep-body">
                Aberto a freelas, projetos fechados e consultoria pontual —
                remoto, com alinhamentos objetivos e transparência no andamento.
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
            <p className="ep-eyebrow ep-eyebrow-dark">&gt; processo</p>
            <h2 className="ep-section-title">Como eu trabalho com contratantes</h2>
            <p className="ep-section-lead ep-section-lead-narrow">
              Entendimento do problema, implementação robusta e resultado
              mensurável — com portfólio aberto para validar antes de fechar.
            </p>
            <div className="ep-hero-cta">
              <Link className="ep-btn ep-btn-primary" href="/projetos">
                Ver cases
              </Link>
              <a
                className="ep-btn ep-btn-ghost"
                href="https://wa.me/5521971364919"
                target="_blank"
                rel="noreferrer"
              >
                Propor projeto
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
