"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const WHATSAPP_URL = "https://wa.me/5521971364919";

function useMotionTransition(base: { duration: number; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return { duration: 0 };
  return base;
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={useMotionTransition({ duration: 0.55, delay })}
    >
      {children}
    </motion.div>
  );
}

export function SpecPlate({
  lines,
  className,
}: {
  lines: string[];
  className?: string;
}) {
  return (
    <div
      className={`lnd-spec-plate${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    >
      {lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </div>
  );
}

export function RefCode({ children }: { children: ReactNode }) {
  return (
    <span className="lnd-ref-code" aria-hidden="true">
      {children}
    </span>
  );
}

export function SheetFrame({ index, total }: { index: number; total: number }) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <>
      <span className="lnd-reg-mark lnd-reg-mark--tl" aria-hidden="true" />
      <span className="lnd-reg-mark lnd-reg-mark--tr" aria-hidden="true" />
      <span className="lnd-reg-mark lnd-reg-mark--bl" aria-hidden="true" />
      <span className="lnd-reg-mark lnd-reg-mark--br" aria-hidden="true" />
      <span className="lnd-sheet-index" aria-hidden="true">
        sheet {pad(index)}/{pad(total)}
      </span>
    </>
  );
}
