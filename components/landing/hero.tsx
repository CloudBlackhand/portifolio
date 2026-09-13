"use client";

import Link from "next/link";
import { CornerBrackets } from "@/components/corner-brackets";
import {
  Reveal,
  RefCode,
  SheetFrame,
  SpecPlate,
  WHATSAPP_URL,
} from "./shared";

export function LandingHero() {
  return (
    <section className="lnd-hero" aria-labelledby="lnd-hero-name">
      <SheetFrame index={1} total={4} />
      <div className="lnd-hero-contours" aria-hidden="true" />
      <div className="lnd-blueprint" aria-hidden="true">
        <div className="lnd-dim-line lnd-dim-line--a">
          <span className="lnd-dim-track" />
          <span
            className="lnd-dim-label lnd-type-in"
            style={{ animationDelay: "2.2s" }}
          >
            wingspan · 10.95m
          </span>
        </div>
        <div className="lnd-dim-line lnd-dim-line--b">
          <span className="lnd-dim-track" />
          <span
            className="lnd-dim-label lnd-type-in"
            style={{ animationDelay: "2.4s" }}
          >
            length · 19.43m
          </span>
        </div>
        <div
          className="lnd-callout lnd-callout--a lnd-type-in"
          style={{ animationDelay: "2.55s" }}
        >
          <span className="lnd-callout-node">01</span>
          <span className="lnd-callout-leader" />
          <span>in · planilha</span>
        </div>
        <div
          className="lnd-callout lnd-callout--b lnd-type-in"
          style={{ animationDelay: "2.75s" }}
        >
          <span className="lnd-callout-node">02</span>
          <span className="lnd-callout-leader" />
          <span>out · produção</span>
        </div>
      </div>
      <SpecPlate
        className="lnd-spec-plate--hero"
        lines={["unit cs-012", "mdl cloud-01", "rev 2026.1", "qc · pass"]}
      />
      <div className="lnd-barcode" aria-hidden="true">
        <span
          className="lnd-barcode-bars lnd-type-in"
          style={{ animationDelay: "1.9s" }}
        />
        <span
          className="lnd-barcode-label lnd-type-in"
          style={{ animationDelay: "2.05s" }}
        >
          cs-012 / br-rj
        </span>
      </div>
      <div className="lnd-hud" aria-hidden="true">
        <div className="lnd-hud-box">
          <span className="lnd-bracket lnd-bracket--tl" />
          <span className="lnd-bracket lnd-bracket--tr" />
          <span className="lnd-bracket lnd-bracket--bl" />
          <span className="lnd-bracket lnd-bracket--br" />
          <span className="lnd-hud-cross lnd-hud-cross--h" />
          <span className="lnd-hud-cross lnd-hud-cross--v" />
          <span
            className="lnd-hud-box-label lnd-type-in"
            style={{ animationDelay: "2.5s" }}
          >
            target lock
          </span>
        </div>
        <ul className="lnd-hud-readout">
          <li>
            <span>hdg</span>
            <b>087°</b>
          </li>
          <li>
            <span>alt</span>
            <b>12.400</b>
          </li>
          <li>
            <span>mach</span>
            <b>1.4</b>
          </li>
        </ul>
      </div>
      <div className="lnd-hero-inner">
        <div className="lnd-hero-middle">
          <Reveal className="lnd-hero-identity">
            <div className="lnd-hero-id">
              <span className="lnd-type-in lnd-type-in--id">dev_012</span>
              <span className="lnd-caret" aria-hidden="true" />
            </div>
            <h1 className="lnd-hero-name" id="lnd-hero-name">
              <span className="lnd-type-in lnd-type-in--l1">cloud</span>
              <br />
              <span className="lnd-type-in lnd-type-in--l2">service</span>
            </h1>
            <ul className="lnd-hero-meta">
              <li className="lnd-hero-meta-item lnd-type-in lnd-type-in--l3">
                Brasil
              </li>
              <li className="lnd-hero-meta-item lnd-type-in lnd-type-in--l3">
                disponível_2026
              </li>
              <li className="lnd-hero-meta-item lnd-type-in lnd-type-in--l3">
                full-stack + automação
              </li>
            </ul>
          </Reveal>
          <Reveal className="lnd-hero-panels" delay={0.08}>
            <div className="lnd-bracket-panel">
              <CornerBrackets />
              <div className="lnd-panel-eyebrow">
                <span>disponibilidade</span>
                <RefCode>cs-01</RefCode>
              </div>
              <dl className="lnd-panel-dl">
                <dt className="lnd-panel-dt">freelas e contratos</dt>
                <dd className="lnd-panel-dd">início imediato</dd>
                <dd className="lnd-panel-dd">remoto · gmt-3</dd>
              </dl>
            </div>
            <div className="lnd-bracket-panel">
              <CornerBrackets />
              <div className="lnd-panel-eyebrow">
                <span>números</span>
                <RefCode>cs-02</RefCode>
              </div>
              <dl className="lnd-stats-dl">
                <div className="lnd-stat-cell">
                  <dt className="lnd-stat-label">projetos</dt>
                  <dd className="lnd-stat-value">35</dd>
                </div>
                <div className="lnd-stat-cell">
                  <dt className="lnd-stat-label">sistemas</dt>
                  <dd className="lnd-stat-value">14</dd>
                </div>
                <div className="lnd-stat-cell">
                  <dt className="lnd-stat-label">anos</dt>
                  <dd className="lnd-stat-value">05</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
        <Reveal className="lnd-hero-actions" delay={0.14}>
          <a
            className="lnd-trailer-btn"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <span className="lnd-trailer-glyph" aria-hidden="true">
              ▸
            </span>
            <span>
              <span className="lnd-trailer-label">falar no whatsapp</span>
              <span className="lnd-trailer-sub">resposta no mesmo dia</span>
            </span>
          </a>
          <Link className="lnd-view-cta" href="/projetos">
            <CornerBrackets />
            <span className="lnd-view-cta-text">ver projetos</span>
            <span className="lnd-view-cta-arrow" aria-hidden="true">
              →
            </span>
          </Link>
          <ul className="lnd-hero-socials">
            <li>
              <a
                className="lnd-hero-social-link"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                wa
              </a>
            </li>
            <li>
              <Link className="lnd-hero-social-link" href="/contato">
                contato
              </Link>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
