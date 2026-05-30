import Link from "next/link";

const stack = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "WhatsApp API",
  "Railway / Netlify",
];

export function HireHero() {
  return (
    <section className="mhn-hire-band" aria-label="Apresentação profissional">
      <div className="container mhn-hire-grid">
        <div>
          <p className="mhn-tag">[ runner online — disponível ]</p>
          <h1 className="mhn-title">Desenvolvedor full-stack · sistemas em produção</h1>
          <p className="mhn-role">
            // automação · integrações · landing pages · operação real
          </p>
          <p className="mhn-lead">
            Portfólio com projetos no ar — não só mockup. Busco freela, contratos
            pontuais e oportunidades remotas (CLT ou PJ).
          </p>
          <div className="mhn-chips" aria-label="Stack principal">
            {stack.map((item) => (
              <span key={item} className="mhn-chip">
                {item}
              </span>
            ))}
          </div>
          <div className="mhn-cta">
            <Link className="mhn-btn mhn-btn-primary" href="/contato">
              Contratar / Proposta
            </Link>
            <Link className="mhn-btn mhn-btn-ghost" href="/projetos">
              Ver projetos
            </Link>
            <a
              className="mhn-btn mhn-btn-ghost"
              href="https://wa.me/5521971364919"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <aside className="mhn-terminal" aria-label="Status do portfólio">
          <div className="mhn-terminal-bar">
            <span>sys/portfolio</span>
            <span>v1.0</span>
          </div>
          <div className="mhn-terminal-body">
            <div className="mhn-terminal-row">
              <span>status</span>
              <span className="mhn-terminal-val">disponível</span>
            </div>
            <div className="mhn-terminal-row">
              <span>sistemas no ar</span>
              <span className="mhn-terminal-val">7</span>
            </div>
            <div className="mhn-terminal-row">
              <span>landing pages</span>
              <span className="mhn-terminal-val">2</span>
            </div>
            <div className="mhn-terminal-row">
              <span>foco</span>
              <span className="mhn-terminal-val">produção</span>
            </div>
            <div className="mhn-terminal-row">
              <span>resposta</span>
              <span className="mhn-terminal-val">&lt; 24h</span>
            </div>
            <p style={{ marginTop: "0.75rem", fontSize: "0.68rem" }}>
              <strong>→</strong> abra um projeto abaixo e veja captura real ou
              link público quando disponível.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
