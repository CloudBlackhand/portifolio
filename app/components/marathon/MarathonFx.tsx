"use client";

import { useEffect, useState } from "react";

const BOOT_KEY = "cloudservice-marathon-boot-v1";

const BOOT_LINES = [
  "INICIALIZANDO INTERFACE...",
  "CARREGANDO MODULOS DE PROJETO...",
  "SYNC // PORTFOLIO ONLINE",
  "DEPLOY // VERCEL LINK ACTIVE",
];

const TICKER_ITEMS = [
  "SYS // PORTFOLIO ONLINE",
  "FEED // PROJETOS EM PRODUCAO",
  "LINK // WHATSAPP ACTIVE",
  "DATA // CAPTURAS REAIS",
  "HUD // GRAPHIC RETRO FUTURISM",
  "STATUS // DISPONIVEL PARA PROJETOS",
];

type BootPhase = "hidden" | "booting" | "glitch" | "done";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return reduced;
}

function MarathonBoot() {
  const reduced = usePrefersReducedMotion();
  const [phase, setPhase] = useState<BootPhase>("hidden");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduced) return;
    if (sessionStorage.getItem(BOOT_KEY)) return;

    setPhase("booting");
  }, [reduced]);

  useEffect(() => {
    if (phase !== "booting") return;

    const fullLine = BOOT_LINES[lineIndex] ?? "";
    if (charIndex < fullLine.length) {
      const t = window.setTimeout(() => setCharIndex((c) => c + 1), 22);
      return () => window.clearTimeout(t);
    }

    const nextProgress = ((lineIndex + 1) / BOOT_LINES.length) * 100;
    setProgress(nextProgress);

    if (lineIndex < BOOT_LINES.length - 1) {
      const t = window.setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, 280);
      return () => window.clearTimeout(t);
    }

    const t = window.setTimeout(() => setPhase("glitch"), 350);
    return () => window.clearTimeout(t);
  }, [phase, lineIndex, charIndex]);

  useEffect(() => {
    if (phase !== "glitch") return;

    const t = window.setTimeout(() => {
      sessionStorage.setItem(BOOT_KEY, "1");
      setPhase("done");
    }, 520);
    return () => window.clearTimeout(t);
  }, [phase]);

  if (phase === "hidden" || phase === "done") return null;

  const typed = (BOOT_LINES[lineIndex] ?? "").slice(0, charIndex);

  return (
    <div
      className={`marathon-boot ${phase === "glitch" ? "marathon-boot--glitch" : ""}`}
      aria-hidden="true"
    >
      <div className="marathon-boot-noise" />
      <div className="marathon-boot-panel">
        <p className="marathon-boot-kicker">UESC // CLOUD SERVICE</p>
        <p className="marathon-boot-line">
          {typed}
          <span className="marathon-boot-cursor">_</span>
        </p>
        <div className="marathon-boot-bar" role="presentation">
          <span className="marathon-boot-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="marathon-boot-status">
          {Math.round(progress)}% // {lineIndex + 1}/{BOOT_LINES.length}
        </p>
      </div>
    </div>
  );
}

function MarathonTicker() {
  const reduced = usePrefersReducedMotion();
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  if (reduced) {
    return (
      <div className="marathon-ticker marathon-ticker--static" aria-hidden="true">
        <span>{TICKER_ITEMS.join("  ·  ")}</span>
      </div>
    );
  }

  return (
    <div className="marathon-ticker" aria-hidden="true">
      <div className="marathon-ticker-track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="marathon-ticker-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Dispara flash de glitch global ao trocar rotas / slides (via evento customizado). */
export function marathonGlitchPulse() {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.body.classList.add("marathon-glitch-pulse");
  window.setTimeout(() => {
    document.body.classList.remove("marathon-glitch-pulse");
  }, 380);
}

export function MarathonFx() {
  const [flash, setFlash] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setFlash((n) => n + 1), 4000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <MarathonBoot />
      <div className="marathon-chromatic" aria-hidden="true" key={flash} />
    </>
  );
}

export { MarathonTicker };
