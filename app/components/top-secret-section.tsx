"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { MarathonLoadBar } from "@/app/components/marathon/marathon-load-bar";
import { MarathonStatusTicker } from "@/app/components/marathon/marathon-status-ticker";
import { MarathonWorldAmbient } from "@/app/components/marathon/marathon-world-ambient";
import { MarathonTabletChrome } from "@/app/components/marathon/marathon-tablet-chrome";

type TopSecretSectionProps = {
  projects: Project[];
  standalone?: boolean;
};

const BOOT_MESSAGES = [
  "weave-mem buffer alocada · identidade do cliente removida",
  "strip endpoint metadata · sem links publicos",
  "sense-mem render · abstrato por design",
  "dossier vault · so contexto e resultado",
];

function caseIdFromSlug(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 9973;
  }
  return `DOSSIER-${String(hash).padStart(4, "0")}`;
}

function loadPercentFromSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 17 + slug.charCodeAt(i)) % 100;
  }
  return 48 + (hash % 44);
}

export function TopSecretSection({ projects, standalone = false }: TopSecretSectionProps) {
  const reduceMotion = useReducedMotion();

  if (projects.length === 0) return null;

  return (
    <section
      id={standalone ? undefined : "top-secret"}
      className={
        standalone
          ? "marathon-world marathon-world--standalone"
          : "marathon-world"
      }
      aria-labelledby="classified-heading"
    >
      <div className="marathon-world-bg" aria-hidden="true">
        <div className="marathon-world-gradient" />
        <div className="marathon-world-dither" />
        <MarathonWorldAmbient />
      </div>

      <div className="marathon-world-inner">
        <article className="marathon-tablet marathon-tablet--hero">
          <MarathonTabletChrome
            bootDelay={0.05}
            showBarcode
            headerLeft="UESC · tau ceti iv"
            headerRight="partition / restricted"
          >
            <p className="marathon-tablet-kicker">runner shell · sense-mem · vault index</p>
            <MarathonStatusTicker messages={BOOT_MESSAGES} />
            <MarathonLoadBar label="weave-mem sync" target={67} delay={0.4} duration={2.2} />
            <motion.h2
              id="classified-heading"
              className="marathon-tablet-title"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              Registros sanitizados
            </motion.h2>
            <p className="marathon-tablet-lead">
              Memória fabricada para focar a leitura durante a transição — abstrata
              de propósito. Trabalhos em produção sob sigilo: publicamos contexto,
              solução e resultado. Telas, código e dados do cliente ficam fora do
              registro aberto.
            </p>
            <div className="marathon-tablet-tags">
              <span className="marathon-tag marathon-tag--pink">CLIENT REDACTED</span>
              <span className="marathon-tag marathon-tag--cyan">NO CAPTURES</span>
              <span className="marathon-tag marathon-tag--yellow">FIELD ACTIVE</span>
            </div>
          </MarathonTabletChrome>
        </article>

        <ul className="marathon-tablet-grid">
          {projects.map((project, index) => {
            const pct = loadPercentFromSlug(project.slug);
            return (
              <motion.li
                key={project.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  className="marathon-tablet marathon-tablet--card interactive-card"
                  href={`/projetos/${project.slug}`}
                  aria-label={`Abrir dossiê: ${project.title}`}
                >
                  <MarathonTabletChrome
                    bootDelay={0}
                    headerLeft={caseIdFromSlug(project.slug)}
                    headerRight={`VOL ${String(index + 1).padStart(2, "0")}/${String(projects.length).padStart(2, "0")}`}
                  >
                    <MarathonLoadBar
                      label="decrypt sense-mem"
                      target={pct}
                      delay={0.15 + index * 0.08}
                      duration={1.6}
                      animate={!reduceMotion}
                    />
                    <div className="marathon-tablet-preview">
                      <Image
                        src={project.thumbnail}
                        alt=""
                        width={1200}
                        height={630}
                        className="marathon-tablet-preview-img"
                        aria-hidden="true"
                      />
                      <div className="marathon-tablet-preview-glitch" aria-hidden="true" />
                    </div>
                    <h3 className="marathon-tablet-card-title">{project.title}</h3>
                    <p className="marathon-tablet-card-desc">{project.shortDescription}</p>
                    <p className="marathon-tablet-redact" aria-hidden="true">
                      cliente ████████ · stack ███ · endpoint █████████
                    </p>
                    <span className="marathon-tablet-cta">
                      <span className="marathon-tablet-cta-pulse" aria-hidden="true" />
                      iniciar leitura →
                    </span>
                  </MarathonTabletChrome>
                </Link>
              </motion.li>
            );
          })}
        </ul>

        <p className="marathon-world-footnote">
          partition isolada · estes dossiês não entram na tabela da home nem no
          catálogo público de projetos
        </p>
      </div>
    </section>
  );
}
