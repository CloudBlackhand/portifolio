"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MarathonLoadBar } from "@/app/components/marathon/marathon-load-bar";
import { MarathonStatusTicker } from "@/app/components/marathon/marathon-status-ticker";

const TEASER_STATUS =
  "cloud service · dossies por segmento · nomes e marcas redigidos";

export function ClassifiedTeaser() {
  const reduceMotion = useReducedMotion();

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
          <MarathonStatusTicker messages={[TEASER_STATUS]} />
          <MarathonLoadBar label="arquivo sigilo" target={84} delay={0.2} duration={1.4} />
          <h2 id="classified-teaser-heading" className="marathon-teaser-title">
            Trabalhos que só abrem pelo tablet
          </h2>
          <p className="marathon-teaser-lead">
            Vários segmentos — comercial, mensageria, saúde, locação, imóveis e
            autoatendimento — com nomes e marcas redigidos. Você vê contexto, entrega
            e resultado; telas, credenciais e operação ficam protegidas.
          </p>
          <Link className="marathon-teaser-link" href="/projetos#sob-sigilo">
            ver em projetos →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
