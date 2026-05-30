"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MarathonLoadBar } from "@/app/components/marathon/marathon-load-bar";
import { MarathonStatusTicker } from "@/app/components/marathon/marathon-status-ticker";

const TEASER_STATUS =
  "cloud classificados · 2 dossies em sigilo · fora do catalogo aberto";

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
          <p className="marathon-tablet-kicker">cloud service · classificados</p>
          <MarathonStatusTicker messages={[TEASER_STATUS]} />
          <MarathonLoadBar label="cloud vault" target={84} delay={0.2} duration={1.4} />
          <h2 id="classified-teaser-heading" className="marathon-teaser-title">
            Trabalhos que só abrem pelo tablet
          </h2>
          <p className="marathon-teaser-lead">
            Sistemas comerciais e automação WhatsApp em produção, sob sigilo total.
            Sense-mem sanitizada: contexto, solução e resultado — sem expor operação.
          </p>
          <Link className="marathon-teaser-link" href="/classificados">
            entrar nos classificados →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
