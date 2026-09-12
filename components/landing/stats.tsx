"use client";

import { Reveal, SheetFrame } from "./shared";

export function StatsSection() {
  return (
    <section className="lnd-dark lnd-season" aria-labelledby="lnd-season-h2">
      <SheetFrame index={2} total={4} />
      <div className="lnd-container">
        <Reveal>
          <h2 className="lnd-h2 lnd-h2--accent" id="lnd-season-h2">
            <span className="lnd-h2-line">o trabalho</span>
            <span className="lnd-h2-line">
              até agora<span className="lnd-h2-dot lnd-h2-dot--light">.</span>
            </span>
          </h2>
          <div className="lnd-rule" aria-hidden="true" />
          <p className="lnd-season-intro">
            Números do que está no ar hoje.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="lnd-plate">
            <div className="lnd-plate-id">
              <div className="lnd-plate-badge">
                CS <span>/ 2026</span>
              </div>
              <div className="lnd-plate-serial">serial // cs-2026-014</div>
            </div>
            <dl className="lnd-plate-stats">
              <div className="lnd-plate-row">
                <dt className="lnd-plate-dt">14</dt>
                <dd className="lnd-plate-dd">sistemas em produção</dd>
              </div>
              <div className="lnd-plate-row">
                <dt className="lnd-plate-dt">35</dt>
                <dd className="lnd-plate-dd">projetos entregues</dd>
              </div>
              <div className="lnd-plate-row">
                <dt className="lnd-plate-dt">05</dt>
                <dd className="lnd-plate-dd">anos de estrada.</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
