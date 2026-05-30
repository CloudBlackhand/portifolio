"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CLOUD_BOOT_HEAD } from "@/app/components/marathon/marathon-boot-lines";

const BLOCK_COUNT = 18;

type MarathonTabletBootProps = {
  lines?: string[];
  head?: string;
  target?: number;
  duration?: number;
  onComplete?: () => void;
};

function blockBar(value: number, target: number): string {
  const ratio = target > 0 ? value / target : 0;
  const filled = Math.round(ratio * BLOCK_COUNT);
  return `[${"█".repeat(filled)}${"░".repeat(BLOCK_COUNT - filled)}]`;
}

export function MarathonTabletBoot({
  lines = [
    "> cloud link handshake...",
    "> carregando dados...",
    "> weave-mem buffer alocada...",
    "> sense-mem sync...",
  ],
  head = CLOUD_BOOT_HEAD,
  target = 100,
  duration = 2.4,
  onComplete,
}: MarathonTabletBootProps) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? target : 0);
  const [exiting, setExiting] = useState(false);
  const [visibleCount, setVisibleCount] = useState(reduceMotion ? lines.length : 0);

  const showX = visibleCount >= 2;
  const showOk = value >= target;
  const progressLabel = useMemo(
    () => `${blockBar(value, target)} ${String(value).padStart(3, " ")}%`,
    [target, value],
  );

  useEffect(() => {
    if (reduceMotion) {
      setValue(target);
      setVisibleCount(lines.length);
      setExiting(true);
      return;
    }

    const lineTimers = lines.map((_, index) =>
      window.setTimeout(() => {
        setVisibleCount((prev) => Math.max(prev, index + 1));
      }, 280 + index * 480),
    );

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
      setValue(target);
      window.setTimeout(() => setExiting(true), 220);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      lineTimers.forEach((timer) => window.clearTimeout(timer));
      cancelAnimationFrame(frame);
    };
  }, [duration, lines, reduceMotion, target]);

  return (
    <motion.div
      className="marathon-tablet-boot marathon-tablet-boot--cmd"
      role="status"
      aria-live="polite"
      aria-label={`Carregando ${value}%`}
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.38, ease: "easeOut" }}
      onAnimationComplete={() => {
        if (exiting) onComplete?.();
      }}
    >
      <span className="marathon-boot-frame marathon-boot-frame--tl" aria-hidden="true" />
      <span className="marathon-boot-frame marathon-boot-frame--tr" aria-hidden="true" />
      <span className="marathon-boot-frame marathon-boot-frame--bl" aria-hidden="true" />
      <span className="marathon-boot-frame marathon-boot-frame--br" aria-hidden="true" />

      {showX ? (
        <motion.span
          className="marathon-boot-x"
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          ×
        </motion.span>
      ) : null}

      <div className="marathon-boot-cmd">
        <p className="marathon-boot-cmd-head">{head}</p>

        <div className="marathon-boot-cmd-lines">
          {lines.slice(0, visibleCount).map((line, index) => (
            <motion.p
              key={`${line}-${index}`}
              className="marathon-boot-cmd-line"
              initial={reduceMotion ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {line}
              {index === visibleCount - 1 && !showOk ? (
                <span className="marathon-boot-cursor" aria-hidden="true">
                  _
                </span>
              ) : null}
            </motion.p>
          ))}

          {showOk ? (
            <motion.p
              className="marathon-boot-cmd-line marathon-boot-cmd-line--ok"
              initial={reduceMotion ? false : { opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {"> OK"}
            </motion.p>
          ) : null}
        </div>

        <p className="marathon-boot-cmd-progress">{progressLabel}</p>
      </div>
    </motion.div>
  );
}
