"use client";

import { motion, useReducedMotion } from "framer-motion";

type MarathonStatusTickerProps = {
  messages: string[];
};

export function MarathonStatusTicker({ messages }: MarathonStatusTickerProps) {
  const reduceMotion = useReducedMotion();
  const message = messages[0] ?? "";

  return (
    <div className="marathon-status-ticker" aria-live="polite">
      <span className="marathon-status-dot" aria-hidden="true" />
      <motion.span
        className="marathon-status-text"
        initial={reduceMotion ? false : { opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {message}
      </motion.span>
    </div>
  );
}
