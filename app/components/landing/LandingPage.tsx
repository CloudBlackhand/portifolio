"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

const easeOut = [0.22, 1, 0.36, 1] as const;

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
  { label: "Sistemas em producao", value: "4" },
  { label: "Foco", value: "B2B / operacao" },
  { label: "Repositorios publicos no portfolio", value: "3" },
  { label: "Prioridade", value: "Resultado" },
];

const quotes = [
  {
    text:
      "Entrega alinhada ao negocio, sem enrolacao tecnica. Exatamente o que precisavamos para organizar vendas.",
    who: "Parceiro comercial",
    role: "Operacao B2B",
  },
  {
    text:
      "Integracao WhatsApp estavel mudou nosso ritmo de disparo e suporte.",
    who: "Operacao",
    role: "Mensageria em massa",
  },
  {
    text:
      "Documentacao do que foi feito e por que foi feito — raro e valioso.",
    who: "Stakeholder",
    role: "Produto interno",
  },
];

type LandingPageProps = {
  projects: Project[];
};

export function LandingPage({ projects }: LandingPageProps) {
  const reduce = useReducedMotion();
  const featured = projects.filter((p) => p.featured);
  const filmstrip = [...featured, ...featured];

  return (
    <>
      <section className="ep-hero">
        <div className="container ep-hero-grid">
          <div className="ep-hero-copy">
            <motion.p
              className="ep-eyebrow"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: easeOut }}
            >
              Portfolio profissional
            </motion.p>
            <motion.h1
              className="ep-hero-title"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06, ease: easeOut }}
            >
              Sistemas reimaginados para
              <span className="ep-hero-accent"> sua operacao</span>
            </motion.h1>
            <motion.p
              className="ep-hero-lead"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: easeOut }}
            >
              Porque bons produtos merecem engenharia clara, integracao seria e
              resultado mensuravel — sem ruído e sem atalho.
            </motion.p>
            <motion.div
              className="ep-hero-cta"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18, ease: easeOut }}
            >
              <Link className="ep-btn ep-btn-primary" href="/projetos">
                Ver projetos
              </Link>
              <a
                className="ep-btn ep-btn-ghost"
                href="https://wa.me/5521971364919"
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
              </a>
            </motion.div>
          </div>

          <div className="ep-hero-visual" aria-hidden>
            <div className="ep-hero-mosaic">
              {featured.slice(0, 4).map((project, i) => (
                <motion.div
                  key={`${project.slug}-${i}`}
                  className="ep-mosaic-cell"
                  initial={reduce ? false : { opacity: 0, scale: 0.92, y: 16 }}
                  animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.08,
                    ease: easeOut,
                  }}
                >
                  <Image
                    src={project.thumbnail}
                    alt=""
                    width={400}
                    height={260}
                    className="ep-mosaic-img"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="ep-filmstrip-wrap">
        <div className="ep-filmstrip" aria-hidden>
          <div className="ep-filmstrip-track">
            {filmstrip.map((project, i) => (
              <div key={`${project.slug}-a-${i}`} className="ep-filmstrip-item">
                <Image
                  src={project.thumbnail}
                  alt=""
                  width={320}
                  height={200}
                  className="ep-filmstrip-img"
                />
              </div>
            ))}
          </div>
          <div className="ep-filmstrip-track ep-filmstrip-track--dup" aria-hidden>
            {filmstrip.map((project, i) => (
              <div key={`${project.slug}-b-${i}`} className="ep-filmstrip-item">
                <Image
                  src={project.thumbnail}
                  alt=""
                  width={320}
                  height={200}
                  className="ep-filmstrip-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="ep-section ep-section-tint">
        <div className="container">
          <Reveal>
            <p className="ep-eyebrow ep-eyebrow-dark">Experimente voce mesmo</p>
            <h2 className="ep-section-title">Veja o portfolio em acao</h2>
            <p className="ep-section-lead">
              Cada estudo traz contexto, stack e o que foi entregue em producao.
              Abra um projeto e navegue pelas capturas quando disponiveis.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="ep-device">
              <div className="ep-device-chrome">
                <span className="ep-device-dot" />
                <span className="ep-device-dot" />
                <span className="ep-device-dot" />
                <span className="ep-device-url">portifolio / projetos</span>
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
                    Vendas Hub, WAHA, MS e Melhor Preco — sistemas usados de
                    verdade, com links publicos quando o repositorio e aberto.
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
            <h2 className="ep-section-title">O que consolidamos no portfolio</h2>
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

      <section className="ep-section ep-marquee-section">
        <div className="container">
          <Reveal>
            <h2 className="ep-section-title ep-section-title-center">
              Projetos que funcionam
            </h2>
            <p className="ep-section-lead ep-section-lead-center">
              Depoimentos genericos de tom profissional — substitua por citacoes
              reais quando quiser.
            </p>
          </Reveal>
        </div>
        <div className="ep-marquee" role="region" aria-label="Depoimentos">
          <div className="ep-marquee-inner">
            {[...quotes, ...quotes].map((q, i) => (
              <blockquote key={i} className="ep-quote-card">
                <p>&ldquo;{q.text}&rdquo;</p>
                <footer>
                  <strong>{q.who}</strong>
                  <span>{q.role}</span>
                </footer>
              </blockquote>
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
                Ver estudos
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
                Portfolio completo
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
