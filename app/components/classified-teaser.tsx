"use client";

"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { getTopSecretProjects } from "@/data/projects";
import { MarathonLoadBar } from "@/app/components/marathon/marathon-load-bar";
import { MarathonStatusTicker } from "@/app/components/marathon/marathon-status-ticker";

export function ClassifiedTeaser() {
  const reduceMotion = useReducedMotion();
  const dossierCount = getTopSecretProjects().length;
  const dossierLabel = dossierCount === 1 ? "dossiê" : "dossiês";
  const teaserStatus = `cloud service · ${dossierCount} ${dossierLabel} em sigilo · repos privados no github`;

  return (
    <section className="marathon-teaser" aria-labelledby="classified-teaser-heading">
      <div className="marathon-teaser-bg" aria-hidden="true" />
      <div className="marathon-teaser-inner">
        <motion.div
          className="marathon-teaser-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="marathon-tablet-kicker">cloud service · sob sigilo</p>
          <MarathonStatusTicker messages={[teaserStatus]} />
          <MarathonLoadBar label="cloud vault" target={84} delay={0.2} duration={1.4} />
          <h2 id="classified-teaser-heading" className="marathon-teaser-title">
            Trabalhos que só abrem pelo tablet
          </h2>
          <p className="marathon-teaser-lead">
            Vendas Hub, WhatsApp HTTPS e outros sistemas com repositório privado —
            rodando com dados reais de clientes, sob acordo de sigilo. Você vê
            contexto, entrega e resultado; telas, credenciais e operação ficam
            protegidas.
          </p>
          <Link className="marathon-teaser-link" href="/projetos#sob-sigilo">
            ver em projetos →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
