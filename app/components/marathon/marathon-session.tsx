"use client";

import { useEffect, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MarathonRegMarks } from "@/app/components/marathon/marathon-tablet-chrome";

const IMMERSIVE_BODY_CLASS = "marathon-immersive-mode";

type MarathonSessionProps = {
  headerLeft: string;
  headerRight: string;
  children: ReactNode;
  fillViewport?: boolean;
  showBarcode?: boolean;
};

export function MarathonSession({
  headerLeft,
  headerRight,
  children,
  fillViewport = false,
  showBarcode = true,
}: MarathonSessionProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!fillViewport) return undefined;

    document.body.classList.add(IMMERSIVE_BODY_CLASS);
    return () => {
      document.body.classList.remove(IMMERSIVE_BODY_CLASS);
    };
  }, [fillViewport]);

  return (
    <div
      className={
        fillViewport
          ? "marathon-session marathon-session--fill"
          : "marathon-session"
      }
    >
      <div className="marathon-session-bg" aria-hidden="true">
        <div className="marathon-session-gradient" />
        <div className="marathon-session-dither" />
      </div>

      <div className="marathon-session-wrap">
        <motion.div
          className="marathon-session-device"
          initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <MarathonRegMarks />
          <div className="marathon-session-bezel">
            <div className="marathon-session-notch" aria-hidden="true" />
            <div className="marathon-session-header">
              <span>{headerLeft}</span>
              <span>{headerRight}</span>
            </div>
            <div className="marathon-session-screen">
              <span className="marathon-screen-scan" aria-hidden="true" />
              <span className="marathon-screen-boot" aria-hidden="true" />
              <div className="marathon-session-scroll">{children}</div>
              {showBarcode ? <span className="marathon-barcode" aria-hidden="true" /> : null}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
