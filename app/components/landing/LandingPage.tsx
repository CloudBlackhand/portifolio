"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

export function IntroHeading() {
  return (
    <Reveal className="ep-intro-compact">
      <span className="hire-chip">Disponível para freelas e contratos</span>
      <h2 className="ep-section-title ep-section-title-left">
        Sistemas que administram empresas
      </h2>
      <p className="ep-section-lead ep-section-lead-left">
        ERP, CRM, financeiro, estoque, RH, frotas, BI e gestão de projetos.
        Portfólio direto pra quem precisa contratar dev com entrega real.
      </p>
    </Reveal>
  );
}

type AboutSectionProps = {
  profilePhoto: ProfilePhoto;
};

export function AboutSection({ profilePhoto }: AboutSectionProps) {
  return (
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
            <h2 className="ep-section-title ep-section-title-left">
              Antes de propor solução técnica, entendo o objetivo do negócio
            </h2>
            <p className="ep-body">
              Trabalho assim há anos: primeiro alinho direção, prioridade e
              critério de resultado com quem contrata, depois desenho a
              arquitetura. Sem expor código proprietário nem dado sensível
              do cliente.
            </p>
            <p className="ep-body">
              Tem um sistema, site ou automação em mente? Me manda o cenário
              pelo WhatsApp ou pela página de contato.
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
  );
}
