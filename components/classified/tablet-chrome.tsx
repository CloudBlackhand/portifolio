"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type ClassifiedTabletChromeProps = {
  children: ReactNode;
  className?: string;
  bootDelay?: number;
  showBarcode?: boolean;
  headerLeft?: string;
  headerRight?: string;
};

export function ClassifiedRegMarks() {
  return (
    <>
      <span className="classified-reg classified-reg--tl" />
      <span className="classified-reg classified-reg--tr" />
      <span className="classified-reg classified-reg--bl" />
      <span className="classified-reg classified-reg--br" />
    </>
  );
}

export function ClassifiedTabletChrome({
  children,
  className = "",
  bootDelay = 0,
  showBarcode = false,
  headerLeft,
  headerRight,
}: ClassifiedTabletChromeProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`classified-tablet-frame ${className}`.trim()}
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, delay: bootDelay, ease: [0.22, 1, 0.36, 1] }}
    >
      <ClassifiedRegMarks />
      <div className="classified-tablet-bezel">
        <div className="classified-tablet-notch" />
        {(headerLeft || headerRight) && (
          <div className="classified-tablet-header-strip">
            <span>{headerLeft}</span>
            <span>{headerRight}</span>
          </div>
        )}
        <div className="classified-tablet-screen">
          <span className="classified-screen-boot" aria-hidden="true" />
          <div className="classified-screen-content">{children}</div>
          {showBarcode ? <span className="classified-barcode" aria-hidden="true" /> : null}
        </div>
      </div>
    </motion.div>
  );
}
