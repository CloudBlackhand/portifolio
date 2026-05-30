"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export type MarathonActivationStep = {
  label: string;
  status: string;
  target: number;
  duration?: number;
};

export type MarathonActivationConfig = {
  code: string;
  operation: string;
  steps: MarathonActivationStep[];
  completeLabel?: string;
};

type MarathonTabletActivationProps = {
  config: MarathonActivationConfig;
  onComplete: () => void;
};

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

export function MarathonTabletActivation({
  config,
  onComplete,
}: MarathonTabletActivationProps) {
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [stepValue, setStepValue] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [statusText, setStatusText] = useState(config.steps[0]?.status ?? "");
  const [complete, setComplete] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      onComplete();
    }
  }, [onComplete, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return undefined;

    if (activeStep >= config.steps.length) {
      setComplete(true);
      setStatusText(config.completeLabel ?? "sync complete");

      const hold = window.setTimeout(() => setExiting(true), 520);
      const finish = window.setTimeout(() => onComplete(), 1080);

      return () => {
        window.clearTimeout(hold);
        window.clearTimeout(finish);
      };
    }

    const step = config.steps[activeStep];
    if (!step) return undefined;

    setStatusText(step.status);
    setStepValue(0);

    let frame = 0;
    let advanceTimeout = 0;
    const durationMs = (step.duration ?? 1) * 1000;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      setStepValue(Math.round(step.target * easeOutCubic(t)));

      if (t < 1) {
        frame = requestAnimationFrame(tick);
        return;
      }

      setDoneCount(activeStep + 1);
      advanceTimeout = window.setTimeout(() => {
        setActiveStep((prev) => prev + 1);
      }, 180);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(advanceTimeout);
    };
  }, [activeStep, config.completeLabel, config.steps, onComplete, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <motion.div
      className={`marathon-activation${exiting ? " marathon-activation--exit" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: exiting ? 0.55 : 0.35, ease: "easeOut" }}
      aria-busy={!complete}
      aria-label="Carregando sense-mem"
    >
      <div className="marathon-activation-meta">
        <span>{config.code}</span>
        <span>{complete ? "ready" : "active"}</span>
      </div>

      <h2 className="marathon-activation-title">{config.operation}</h2>
      <p className="marathon-activation-kicker">UESC · partition / restricted</p>

      <motion.p
        key={statusText}
        className="marathon-activation-status"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <span className="marathon-status-dot" aria-hidden="true" />
        {statusText}
      </motion.p>

      <ol className="marathon-activation-steps">
        {config.steps.map((step, index) => {
          const isDone = index < doneCount;
          const isActive = index === activeStep && !complete;
          const value = isDone
            ? step.target
            : isActive
              ? stepValue
              : 0;

          return (
            <li
              key={step.label}
              className={`marathon-activation-step${
                isActive ? " marathon-activation-step--active" : ""
              }${isDone ? " marathon-activation-step--done" : ""}`}
            >
              <div className="marathon-load-label">
                <span>{step.label}</span>
                <span className="marathon-load-pct">{value}%</span>
              </div>
              <div
                className="marathon-load-track"
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={step.label}
              >
                <span
                  className="marathon-load-fill"
                  style={{ width: `${value}%` }}
                />
              </div>
            </li>
          );
        })}
      </ol>

      <div
        className={`marathon-activation-preview${
          complete ? " marathon-activation-preview--resolved" : ""
        }`}
        aria-hidden="true"
      >
        <span className="marathon-activation-preview-label">abstract render</span>
        <span className="marathon-activation-preview-grid" />
      </div>

      {complete ? (
        <p className="marathon-activation-complete">{config.completeLabel}</p>
      ) : null}
    </motion.div>
  );
}
