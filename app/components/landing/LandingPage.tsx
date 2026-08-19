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
      initial={false}
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
    title: "Entrega pensada para produção",
    body:
      "Nada de demo frágil: fluxos, cadastros e integrações pensados para o dia a dia da operação.",
  },
  {
    title: "Stack moderna e sustentável",
    body:
      "Next.js, TypeScript, APIs e infraestrutura que você consegue evoluir sem reescrever tudo a cada ano.",
  },
  {
    title: "Clareza sem vazar segredo",
    body:
      "Contexto, solução e resultado — sem expor código proprietário ou dados sensíveis do cliente.",
  },
  {
    title: "Gestão empresarial de ponta a ponta",
    body:
      "ERP, CRM, financeiro, estoque, RH, frotas e BI — sistemas que conectam departamentos e dão controle real para a diretoria.",
  },
];

const skills = [
  "Next.js",
  "TypeScript",
  "APIs & integrações",
  "WhatsApp / automação",
  "Landing pages",
  "Consultoria técnica",
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
        <div className="container ep-intro-grid">
          <Reveal className="ep-intro-copy">
            <span className="hire-chip">Disponível para freelas e contratos</span>
            <p className="ep-eyebrow ep-eyebrow-dark">Experimente você mesmo</p>
            <h2 className="ep-section-title ep-section-title-left">
              Sistemas que administram empresas
            </h2>
            <p className="ep-section-lead ep-section-lead-left">
              ERP, CRM, financeiro, estoque, RH, frotas, BI e gestão de projetos
              — portfólio direto para quem precisa contratar dev com entrega real
              e experiência em gestão empresarial.
            </p>
            <div className="ep-skills-row">
              {skills.map((skill) => (
                <span key={skill} className="ep-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08} className="ep-intro-device">
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
                    ERP, CRM, controle financeiro, estoque, BI e gestão de
                    projetos — cases de gestão empresarial para empresas de
                    todos os tamanhos.
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
        <div className="container ep-pillars-grid">
          <Reveal className="ep-pillars-head">
            <p className="ep-eyebrow ep-eyebrow-dark">Por que esta abordagem</p>
            <h2 className="ep-section-title ep-section-title-left">
              A forma mais direta de evoluir o stack
            </h2>
            <p className="ep-section-lead ep-section-lead-left">
              Menos ferramenta solta, mais produto integrado — é o que aplicamos
              nos sistemas que você vê aqui.
            </p>
          </Reveal>
          <div className="ep-pillars-list">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.06 * i} className="ep-pillar-row">
                <span className="ep-pillar-index">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
              <p className="ep-eyebrow ep-eyebrow-dark">Antes de tudo</p>
              <h2 className="ep-section-title ep-section-title-left">
                Uma conversa clara sobre o seu projeto
              </h2>
              <p className="ep-body">
                Meu foco é entender seu objetivo de negócio antes de propor
                qualquer solução técnica. Cada entrega nasce com direção,
                prioridade e critério de resultado desde o início — sem expor
                código proprietário ou dados sensíveis do cliente.
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
        <div className="container ep-cta-block ep-cta-block--split">
          <Reveal className="ep-cta-label">
            <p className="ep-eyebrow ep-eyebrow-dark">Vamos conversar</p>
          </Reveal>
          <Reveal delay={0.05} className="ep-cta-body">
            <h2 className="ep-section-title ep-section-title-left">
              Pronto para o próximo sistema?
            </h2>
            <p className="ep-section-lead ep-section-lead-left">
              Precisa de dev full-stack, automação WhatsApp ou site que converte?
              Conte objetivo, prazo e orçamento — respondemos pelo WhatsApp ou
              pela página de contato.
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
    </>
  );
}
