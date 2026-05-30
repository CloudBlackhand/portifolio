"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type MarathonTabletChromeProps = {
  children: ReactNode;
  className?: string;
  bootDelay?: number;
  showBarcode?: boolean;
  headerLeft?: string;
  headerRight?: string;
};

export function MarathonRegMarks() {
  return (
    <>
      <span className="marathon-reg marathon-reg--tl" />
      <span className="marathon-reg marathon-reg--tr" />
      <span className="marathon-reg marathon-reg--bl" />
      <span className="marathon-reg marathon-reg--br" />
    </>
  );
}

export function MarathonTabletChrome({
  children,
  className = "",
  bootDelay = 0,
  showBarcode = false,
  headerLeft,
  headerRight,
}: MarathonTabletChromeProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`marathon-tablet-frame ${className}`.trim()}
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, delay: bootDelay, ease: [0.22, 1, 0.36, 1] }}
    >
      <MarathonRegMarks />
      <div className="marathon-tablet-bezel">
        <div className="marathon-tablet-notch" />
        {(headerLeft || headerRight) && (
          <div className="marathon-tablet-header-strip">
            <span>{headerLeft}</span>
            <span>{headerRight}</span>
          </div>
        )}
        <div className="marathon-tablet-screen">
          <span className="marathon-screen-boot" aria-hidden="true" />
          <div className="marathon-screen-content">{children}</div>
          {showBarcode ? <span className="marathon-barcode" aria-hidden="true" /> : null}
        </div>
      </div>
    </motion.div>
  );
}
