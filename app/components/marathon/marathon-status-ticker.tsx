"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type MarathonStatusTickerProps = {
  messages: string[];
  intervalMs?: number;
};

export function MarathonStatusTicker({
  messages,
  intervalMs = 2800,
}: MarathonStatusTickerProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || messages.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, messages.length, reduceMotion]);

  const message = messages[index] ?? messages[0];

  return (
    <div className="marathon-status-ticker" aria-live="polite">
      <span className="marathon-status-dot" aria-hidden="true" />
      <AnimatePresence mode="wait">
        <motion.span
          key={message}
          className="marathon-status-text"
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: 0.35 }}
        >
          {message}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
