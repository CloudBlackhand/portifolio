"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MarathonLoadBar } from "@/app/components/marathon/marathon-load-bar";
import { MarathonStatusTicker } from "@/app/components/marathon/marathon-status-ticker";
import { MarathonTabletChrome } from "@/app/components/marathon/marathon-tablet-chrome";

const TEASER_MESSAGES = [
  "sense-mem detectada · fora do catalogo aberto",
  "2 dossiês em field active · clearance local",
];

export function ClassifiedTeaser() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="marathon-teaser" aria-labelledby="classified-teaser-heading">
      <div className="marathon-teaser-bg" aria-hidden="true" />
      <div className="marathon-teaser-inner">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <article className="marathon-tablet marathon-tablet--mini" aria-hidden="true">
            <MarathonTabletChrome headerLeft="uesc" headerRight="teaser">
              <MarathonLoadBar label="sense-mem" target={84} delay={0.2} duration={1.4} />
            </MarathonTabletChrome>
          </article>
        </motion.div>
        <motion.div
          className="marathon-teaser-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <p className="marathon-tablet-kicker">partition / restricted</p>
          <MarathonStatusTicker messages={TEASER_MESSAGES} intervalMs={3200} />
          <h2 id="classified-teaser-heading" className="marathon-teaser-title">
            Trabalhos que só abrem pelo tablet
          </h2>
          <p className="marathon-teaser-lead">
            Sistemas comerciais e automação WhatsApp em produção, sob sigilo total.
            Sense-mem sanitizada: contexto, solução e resultado — sem expor operação.
          </p>
          <Link className="marathon-teaser-link" href="/classificados">
            entrar na partition →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
