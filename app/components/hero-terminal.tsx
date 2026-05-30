import Link from "next/link";

const skills = [
  "Next.js",
  "TypeScript",
  "APIs",
  "WhatsApp",
  "Automação",
  "Consultoria",
];

export function HeroTerminal() {
  return (
    <section className="mara-intro" aria-label="Apresentação profissional">
      <div className="container">
        <div className="mara-terminal">
          <div className="mara-terminal-bar">
            <span className="mara-status-dot" aria-hidden />
            <span className="mara-terminal-label">CLOUD SERVICE // TERMINAL</span>
            <span className="mara-status">DISPONÍVEL</span>
          </div>
          <div className="mara-terminal-body">
            <p className="mara-prompt">&gt; iniciar sessão: portfolio.dev</p>
            <h1 className="mara-title">
              Desenvolvimento web e automação
              <span className="mara-title-accent"> com sistemas em produção</span>
            </h1>
            <p className="mara-lead">
              Contrato por projeto ou consultoria: cadastros, funis comerciais,
              integrações WhatsApp, landing pages e campanhas — com entrega clara,
              stack moderna e respeito a confidencialidade do cliente.
            </p>
            <ul className="mara-skills" aria-label="Principais competências">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <div className="mara-cta">
              <a
                className="mara-btn mara-btn-primary"
                href="https://wa.me/5521971364919?text=Ola%2C%20vi%20seu%20portfolio%20e%20quero%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noreferrer"
              >
                Contratar agora
              </a>
              <Link className="mara-btn mara-btn-ghost" href="/projetos">
                Ver portfólio
              </Link>
              <Link className="mara-btn mara-btn-ghost" href="/contato">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
