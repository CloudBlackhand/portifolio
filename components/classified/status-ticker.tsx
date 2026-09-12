"use client";

import { motion, useReducedMotion } from "framer-motion";

type ClassifiedStatusTickerProps = {
  messages: string[];
};

export function ClassifiedStatusTicker({ messages }: ClassifiedStatusTickerProps) {
  const reduceMotion = useReducedMotion();
  const message = messages[0] ?? "";

  return (
    <div className="classified-status-ticker" aria-live="polite">
      <span className="classified-status-dot" aria-hidden="true" />
      <motion.span
        className="classified-status-text"
        initial={reduceMotion ? false : { opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {message}
      </motion.span>
    </div>
  );
}
