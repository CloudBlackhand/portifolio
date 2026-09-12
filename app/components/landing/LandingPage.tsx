"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { getCatalogProjects } from "@/data/projects";
import type { ProfilePhoto } from "@/lib/profile-photo";

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

function BracketCorners() {
  return (
    <>
      <span className="lnd-bracket lnd-bracket--tl" aria-hidden="true" />
      <span className="lnd-bracket lnd-bracket--tr" aria-hidden="true" />
      <span className="lnd-bracket lnd-bracket--bl" aria-hidden="true" />
      <span className="lnd-bracket lnd-bracket--br" aria-hidden="true" />
    </>
  );
}

const WHATSAPP_URL = "https://wa.me/5521971364919";

export function LandingHero() {
  return (
    <section className="lnd-hero" aria-labelledby="lnd-hero-name">
      <div className="lnd-hero-contours" aria-hidden="true" />
      <div className="lnd-hero-inner">
        <div className="lnd-hero-middle">
          <Reveal className="lnd-hero-identity">
            <div className="lnd-hero-id">
              dev_012<span className="lnd-caret" aria-hidden="true" />
            </div>
            <h1 className="lnd-hero-name" id="lnd-hero-name">
              cloud service
            </h1>
            <ul className="lnd-hero-meta">
              <li className="lnd-hero-meta-item">Brasil</li>
              <li className="lnd-hero-meta-item">disponível_2026</li>
              <li className="lnd-hero-meta-item">full-stack + automação</li>
            </ul>
          </Reveal>
          <Reveal className="lnd-hero-panels" delay={0.08}>
            <div className="lnd-bracket-panel">
              <BracketCorners />
              <div className="lnd-panel-eyebrow">disponibilidade</div>
              <dl className="lnd-panel-dl">
                <dt className="lnd-panel-dt">freelas e contratos</dt>
                <dd className="lnd-panel-dd">início imediato</dd>
                <dd className="lnd-panel-dd">remoto · gmt-3</dd>
              </dl>
            </div>
            <div className="lnd-bracket-panel">
              <BracketCorners />
              <div className="lnd-panel-eyebrow">números</div>
              <dl className="lnd-stats-dl">
                <div className="lnd-stat-cell">
                  <dt className="lnd-stat-label">projetos</dt>
                  <dd className="lnd-stat-value">35</dd>
                </div>
                <div className="lnd-stat-cell">
                  <dt className="lnd-stat-label">sistemas</dt>
                  <dd className="lnd-stat-value">14</dd>
                </div>
                <div className="lnd-stat-cell">
                  <dt className="lnd-stat-label">anos</dt>
                  <dd className="lnd-stat-value">05</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
        <Reveal className="lnd-hero-actions" delay={0.14}>
          <a
            className="lnd-trailer-btn"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <span className="lnd-trailer-glyph" aria-hidden="true">
              ▸
            </span>
            <span>
              <span className="lnd-trailer-label">falar no whatsapp</span>
              <span className="lnd-trailer-sub">resposta no mesmo dia</span>
            </span>
          </a>
          <Link className="lnd-view-cta" href="/projetos">
            <BracketCorners />
            <span className="lnd-view-cta-text">ver projetos</span>
            <span className="lnd-view-cta-arrow" aria-hidden="true">
              →
            </span>
          </Link>
          <ul className="lnd-hero-socials">
            <li>
              <a
                className="lnd-hero-social-link"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                wa
              </a>
            </li>
            <li>
              <Link className="lnd-hero-social-link" href="/contato">
                contato
              </Link>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="lnd-dark lnd-season" aria-labelledby="lnd-season-h2">
      <div className="lnd-container">
        <Reveal>
          <h2 className="lnd-h2 lnd-h2--accent" id="lnd-season-h2">
            <span className="lnd-h2-line">o trabalho</span>
            <span className="lnd-h2-line">
              até agora<span className="lnd-h2-dot lnd-h2-dot--light">.</span>
            </span>
          </h2>
          <div className="lnd-rule" aria-hidden="true" />
          <p className="lnd-season-intro">
            Números do que está no ar hoje.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="lnd-plate">
            <div className="lnd-plate-badge">
              CS <span>/ 2026</span>
            </div>
            <dl className="lnd-plate-stats">
              <div className="lnd-plate-row">
                <dt className="lnd-plate-dt">14</dt>
                <dd className="lnd-plate-dd">sistemas em produção</dd>
              </div>
              <div className="lnd-plate-row">
                <dt className="lnd-plate-dt">35</dt>
                <dd className="lnd-plate-dd">projetos entregues</dd>
              </div>
              <div className="lnd-plate-row">
                <dt className="lnd-plate-dt">05</dt>
                <dd className="lnd-plate-dd">anos de estrada.</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type TimelineSectionProps = {
  projects: Project[];
};

export function TimelineSection({ projects }: TimelineSectionProps) {
  const catalog = getCatalogProjects(projects);
  const years = [...new Set(catalog.map((p) => p.year))].sort((a, b) => a - b);

  return (
    <section className="lnd-dark lnd-timeline" aria-labelledby="lnd-timeline-h2">
      <div className="lnd-container">
        <Reveal>
          <h2 className="lnd-h2" id="lnd-timeline-h2">
            <span className="lnd-h2-line">da planilha</span>
            <span className="lnd-h2-line">
              à produção<span className="lnd-h2-dot lnd-h2-dot--accent">.</span>
            </span>
          </h2>
        </Reveal>
        <div className="lnd-timeline-wrap">
          <div className="lnd-timeline-rail" aria-hidden="true" />
          {years.map((year, index) => {
            const items = catalog.filter((p) => p.year === year);
            const shown = items.slice(0, 5);
            const rest = items.length - shown.length;
            return (
              <Reveal key={year} delay={index * 0.06}>
                <div className="lnd-timeline-row">
                  <div className="lnd-timeline-dot" aria-hidden="true" />
                  <div className="lnd-timeline-year">{year}</div>
                  <div className="lnd-timeline-body">
                    <ul className="lnd-timeline-list">
                      {shown.map((p) => (
                        <li key={p.slug}>
                          <Link href={`/projetos/${p.slug}`}>{p.title}</Link>
                        </li>
                      ))}
                      {rest > 0 ? (
                        <li className="lnd-timeline-more">+{rest} projetos</li>
                      ) : null}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type OficinaSectionProps = {
  project: Project;
  profilePhoto: ProfilePhoto;
};

export function OficinaSection({ project, profilePhoto }: OficinaSectionProps) {
  return (
    <section className="lnd-paddock" aria-labelledby="lnd-paddock-h2">
      <div className="lnd-container">
        <div className="lnd-paddock-grid">
          <Reveal className="lnd-paddock-portrait-wrap">
            <Image
              src={profilePhoto.src}
              alt={profilePhoto.alt}
              width={profilePhoto.width}
              height={profilePhoto.height}
              className="lnd-paddock-portrait"
              sizes="(max-width: 720px) 85vw, 380px"
            />
          </Reveal>
          <Reveal className="lnd-paddock-intro" delay={0.06}>
            <h2 className="lnd-h2 lnd-h2--ink" id="lnd-paddock-h2">
              <span className="lnd-h2-line">da</span>
              <span className="lnd-h2-line">
                oficina<span className="lnd-h2-dot lnd-h2-dot--accent">.</span>
              </span>
            </h2>
            <p className="lnd-paddock-copy">
              Todo sistema sai daqui do mesmo jeito: primeiro eu entendo a
              operação, depois desenho a solução. O último a entrar em
              produção foi o {project.title}.
            </p>
            <Link
              className="lnd-view-cta lnd-view-cta--ink"
              href={`/projetos/${project.slug}`}
            >
              <BracketCorners />
              <span className="lnd-view-cta-text">ver projeto</span>
              <span className="lnd-view-cta-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </Reveal>
          <Reveal className="lnd-paddock-panels" delay={0.12}>
            <div className="lnd-bracket-panel">
              <BracketCorners />
              <div className="lnd-panel-eyebrow">último case</div>
              <dl className="lnd-panel-dl">
                <dt className="lnd-panel-dt">{project.title}</dt>
                <dd className="lnd-panel-dd">{project.category}</dd>
                <dd className="lnd-panel-dd">{project.year}</dd>
              </dl>
            </div>
            <div className="lnd-bracket-panel">
              <BracketCorners />
              <div className="lnd-panel-eyebrow">como trabalho</div>
              <dl className="lnd-panel-dl">
                <div className="lnd-mini-stat">
                  <dt className="lnd-stat-label">escopo</dt>
                  <dd className="lnd-mini-value">ponta a ponta</dd>
                </div>
                <div className="lnd-mini-stat">
                  <dt className="lnd-stat-label">comunicação</dt>
                  <dd className="lnd-mini-value">direto comigo</dd>
                </div>
                <div className="lnd-mini-stat">
                  <dt className="lnd-stat-label">sigilo</dt>
                  <dd className="lnd-mini-value">nda quando preciso</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
