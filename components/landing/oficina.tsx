"use client";

import Image from "next/image";
import Link from "next/link";
import { CornerBrackets } from "@/components/corner-brackets";
import type { Project } from "@/data/projects";
import type { ProfilePhoto } from "@/lib/profile-photo";
import { Reveal, RefCode, SheetFrame } from "./shared";

type OficinaSectionProps = {
  project: Project;
  profilePhoto: ProfilePhoto;
};

export function OficinaSection({ project, profilePhoto }: OficinaSectionProps) {
  return (
    <section className="lnd-paddock" aria-labelledby="lnd-paddock-h2">
      <SheetFrame index={4} total={4} />
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
            <div className="lnd-fig-caption" aria-hidden="true">
              <span className="lnd-fig-caption-rule" />
              fig. 01 — operator
            </div>
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
              <CornerBrackets />
              <span className="lnd-view-cta-text">ver projeto</span>
              <span className="lnd-view-cta-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </Reveal>
          <Reveal className="lnd-paddock-panels" delay={0.12}>
            <div className="lnd-bracket-panel">
              <CornerBrackets />
              <div className="lnd-panel-eyebrow">
                <span>último case</span>
                <RefCode>cs-03</RefCode>
              </div>
              <dl className="lnd-panel-dl">
                <dt className="lnd-panel-dt">{project.title}</dt>
                <dd className="lnd-panel-dd">{project.category}</dd>
                <dd className="lnd-panel-dd">{project.year}</dd>
              </dl>
            </div>
            <div className="lnd-bracket-panel">
              <CornerBrackets />
              <div className="lnd-panel-eyebrow">
                <span>como trabalho</span>
                <RefCode>cs-04</RefCode>
              </div>
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
