"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type MarathonTabletBootProps = {
  label: string;
  sublabel?: string;
  target?: number;
  duration?: number;
  onComplete?: () => void;
};

export function MarathonTabletBoot({
  label,
  sublabel = "abstract render · field record",
  target = 100,
  duration = 2.4,
  onComplete,
}: MarathonTabletBootProps) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? target : 0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setValue(target);
      setExiting(true);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const end = start + duration * 1000;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (end - start));
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(target * eased));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
        return;
      }
      setExiting(true);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, reduceMotion, target]);

  return (
    <motion.div
      className="marathon-tablet-boot"
      role="status"
      aria-live="polite"
      aria-label={`${label} ${value}%`}
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.4, ease: "easeOut" }}
      onAnimationComplete={() => {
        if (exiting) onComplete?.();
      }}
    >
      <span className="marathon-boot-mark marathon-boot-mark--tl" aria-hidden="true" />
      <span className="marathon-boot-mark marathon-boot-mark--tr" aria-hidden="true" />
      <span className="marathon-boot-mark marathon-boot-mark--bl" aria-hidden="true" />
      <span className="marathon-boot-mark marathon-boot-mark--br" aria-hidden="true" />

      <span className="marathon-boot-x" aria-hidden="true">
        ×
      </span>

      <div className="marathon-boot-core">
        <p className="marathon-boot-kicker">{sublabel}</p>
        <p className="marathon-boot-label">{label}</p>
        <p className="marathon-boot-pct">{value}%</p>
        <div className="marathon-boot-track" aria-hidden="true">
          <motion.span
            className="marathon-boot-fill"
            initial={{ width: "0%" }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
