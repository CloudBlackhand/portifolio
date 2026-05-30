import Link from "next/link";

export function ClassifiedTeaser() {
  return (
    <section className="marathon-teaser" aria-labelledby="classified-teaser-heading">
      <div className="marathon-teaser-inner">
        <article className="marathon-tablet marathon-tablet--mini" aria-hidden="true">
          <div className="marathon-tablet-frame">
            <span className="marathon-reg marathon-reg--tl" />
            <span className="marathon-reg marathon-reg--tr" />
            <div className="marathon-tablet-bezel">
              <div className="marathon-tablet-screen marathon-tablet-screen--mini">
                <div className="marathon-load">
                  <div className="marathon-load-label">
                    <span>sense-mem</span>
                    <span className="marathon-load-pct">84%</span>
                  </div>
                  <div className="marathon-load-track">
                    <span className="marathon-load-fill" style={{ width: "84%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="marathon-teaser-copy">
          <p className="marathon-tablet-kicker">Fora do catálogo aberto</p>
          <h2 id="classified-teaser-heading" className="marathon-teaser-title">
            Existem trabalhos que só entram pelo tablet
          </h2>
          <p className="marathon-teaser-lead">
            Sistemas comerciais e automação WhatsApp em produção, sob sigilo total.
            Só contexto, solução e resultado — sem expor operação.
          </p>
          <Link className="marathon-teaser-link" href="/classificados">
            Abrir arquivos restritos
          </Link>
        </div>
      </div>
    </section>
  );
}
