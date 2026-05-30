"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MarathonLoadBar } from "@/app/components/marathon/marathon-load-bar";
import { MarathonStatusTicker } from "@/app/components/marathon/marathon-status-ticker";
import { MarathonTabletChrome } from "@/app/components/marathon/marathon-tablet-chrome";

const DETAIL_MESSAGES = [
  "dossier sanitizado · sem capturas publicas",
  "metadata strip · cliente redacted",
  "leitura abstract · field record only",
];

type MarathonDetailShellProps = {
  children: ReactNode;
};

export function MarathonDetailShell({ children }: MarathonDetailShellProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="marathon-detail-shell">
      <div className="marathon-detail-ambient" aria-hidden="true">
        <span className="marathon-orb marathon-orb--cyan marathon-orb--sm" />
        <span className="marathon-orb marathon-orb--pink marathon-orb--sm" />
      </div>
      <motion.div
        className="marathon-detail-notice section-spacing-sm"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <MarathonTabletChrome
          showBarcode
          headerLeft="sense-mem"
          headerRight="public record"
        >
          <MarathonStatusTicker messages={DETAIL_MESSAGES} />
          <MarathonLoadBar label="decrypt dossier" target={100} delay={0.25} duration={1.8} />
          <p className="marathon-tablet-lead">
            Registro liberado so em nivel descritivo. Identidade do cliente, telas
            e arquitetura permanecem fora do catalogo aberto.
          </p>
        </MarathonTabletChrome>
      </motion.div>
      {children}
    </div>
  );
}
