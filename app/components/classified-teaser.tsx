import Link from "next/link";

export function ClassifiedTeaser() {
  return (
    <section className="classified-teaser" aria-labelledby="classified-teaser-heading">
      <div className="classified-teaser-inner">
        <div className="classified-teaser-mark" aria-hidden="true">
          <span className="classified-stamp classified-stamp--sm">CLASSIFIED</span>
        </div>
        <div className="classified-teaser-copy">
          <p className="classified-transmission classified-transmission--sm" aria-hidden="true">
            UESC :: UNREGISTERED TRANSMISSION
          </p>
          <h2 id="classified-teaser-heading" className="classified-teaser-title">
            Existem trabalhos que não entram no catálogo aberto
          </h2>
          <p className="classified-teaser-lead">
            Sistemas comerciais e automação WhatsApp em produção, sob sigilo
            total do cliente. Só contexto, solução e resultado — sem expor
            operação.
          </p>
          <Link className="classified-teaser-link" href="/projetos#top-secret">
            Acessar arquivos restritos
          </Link>
        </div>
      </div>
    </section>
  );
}
