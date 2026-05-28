import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Cloud Service",
  description: "Canal de contato profissional com exposição mínima de dados.",
};

export default function ContatoPage() {
  return (
    <section className="page-shell">
      <h1 className="page-title">Contato</h1>
      <p className="page-subtitle">
        Este espaço prioriza comunicação profissional com privacidade e resposta
        rápida para alinhamento de projetos.
      </p>

      <div className="content-block section-spacing">
        <h3>Canal recomendado</h3>
        <p className="muted">
          WhatsApp: <strong>(21) 97136-4919</strong>
        </p>
        <div className="section-spacing">
          <a
            className="button primary"
            href="https://wa.me/5521971364919"
            target="_blank"
            rel="noreferrer"
          >
            Falar comigo no WhatsApp
          </a>
        </div>
      </div>

      <div className="content-block">
        <h3>Nota de privacidade</h3>
        <p className="muted">
          Evite publicar telefone pessoal, endereço residencial e links sensíveis.
        </p>
      </div>
    </section>
  );
}
