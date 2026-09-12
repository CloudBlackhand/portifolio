"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ClassifiedRegMarks } from "@/components/classified/tablet-chrome";
import { ClassifiedTabletBoot } from "@/components/classified/tablet-boot";

const IMMERSIVE_BODY_CLASS = "classified-immersive-mode";

type ClassifiedSessionProps = {
  headerLeft: string;
  headerRight: string;
  children: ReactNode;
  fillViewport?: boolean;
  showBarcode?: boolean;
  bootSequence?: boolean;
  bootLines?: string[];
  bootHead?: string;
  bootTarget?: number;
  bootDuration?: number;
};

export function ClassifiedSession({
  headerLeft,
  headerRight,
  children,
  fillViewport = false,
  showBarcode = true,
  bootSequence,
  bootLines,
  bootHead,
  bootTarget = 100,
  bootDuration = 2.4,
}: ClassifiedSessionProps) {
  const reduceMotion = useReducedMotion();
  const shouldBoot = bootSequence ?? fillViewport;
  const [bootComplete, setBootComplete] = useState(!shouldBoot || Boolean(reduceMotion));

  useEffect(() => {
    if (!fillViewport) return undefined;

    document.body.classList.add(IMMERSIVE_BODY_CLASS);
    return () => {
      document.body.classList.remove(IMMERSIVE_BODY_CLASS);
    };
  }, [fillViewport]);

  useEffect(() => {
    if (!shouldBoot || reduceMotion) {
      setBootComplete(true);
    }
  }, [reduceMotion, shouldBoot]);

  return (
    <div
      className={
        fillViewport
          ? "classified-session classified-session--fill"
          : "classified-session"
      }
    >
      <div className="classified-session-bg" aria-hidden="true">
        <div className="classified-session-gradient" />
        <div className="classified-session-dither" />
      </div>

      <div className="classified-session-wrap">
        <motion.div
          className="classified-session-device"
          initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <ClassifiedRegMarks />
          <div className="classified-session-bezel">
            <div className="classified-session-notch" aria-hidden="true" />
            <div className="classified-session-header">
              <span>{headerLeft}</span>
              <span>{headerRight}</span>
            </div>
            <div className="classified-session-screen">
              <span className="classified-screen-boot" aria-hidden="true" />
              <AnimatePresence mode="wait">
                {shouldBoot && !bootComplete ? (
                  <ClassifiedTabletBoot
                    key="tablet-boot"
                    lines={bootLines}
                    head={bootHead}
                    target={bootTarget}
                    duration={bootDuration}
                    onComplete={() => setBootComplete(true)}
                  />
                ) : null}
              </AnimatePresence>
              <motion.div
                className="classified-session-scroll"
                initial={false}
                animate={
                  bootComplete
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {children}
              </motion.div>
              {showBarcode ? <span className="classified-barcode" aria-hidden="true" /> : null}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
