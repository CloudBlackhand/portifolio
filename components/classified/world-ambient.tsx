"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ClassifiedWorldAmbient() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="classified-world-ambient" aria-hidden="true">
      <motion.span
        className="classified-orb classified-orb--cyan"
        animate={reduceMotion ? undefined : { x: [0, 24, -12, 0], y: [0, -18, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="classified-orb classified-orb--pink"
        animate={reduceMotion ? undefined : { x: [0, -20, 16, 0], y: [0, 14, -8, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="classified-orb classified-orb--yellow"
        animate={reduceMotion ? undefined : { x: [0, 12, -18, 0], y: [0, 22, -6, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="classified-world-grid-drift" />
    </div>
  );
}
