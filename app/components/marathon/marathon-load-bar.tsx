"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type MarathonLoadBarProps = {
  label: string;
  target: number;
  delay?: number;
  duration?: number;
  animate?: boolean;
};

export function MarathonLoadBar({
  label,
  target,
  delay = 0,
  duration = 1.8,
  animate = true,
}: MarathonLoadBarProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animate && !reduceMotion;
  const [value, setValue] = useState(shouldAnimate ? 0 : target);

  useEffect(() => {
    if (!shouldAnimate) {
      setValue(target);
      return;
    }

    let frame = 0;
    const start = performance.now() + delay * 1000;
    const end = start + duration * 1000;

    const tick = (now: number) => {
      if (now < start) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(1, (now - start) / (end - start));
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [delay, duration, shouldAnimate, target]);

  return (
    <div className="marathon-load">
      <div className="marathon-load-label">
        <span>{label}</span>
        <span className="marathon-load-pct">{value}%</span>
      </div>
      <div
        className="marathon-load-track"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.span
          className="marathon-load-fill"
          initial={shouldAnimate ? { width: "0%" } : { width: `${target}%` }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
        <span className="marathon-load-shimmer" aria-hidden="true" />
      </div>
    </div>
  );
}
