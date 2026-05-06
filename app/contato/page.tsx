import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Portifolio",
  description: "Canal de contato profissional com exposicao minima de dados.",
};

export default function ContatoPage() {
  return (
    <section>
      <h1 className="page-title">Contato</h1>
      <p className="page-subtitle">
        Este espaco prioriza comunicacao profissional com privacidade e resposta
        rapida para alinhamento de projetos.
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
          Evite publicar telefone pessoal, endereco residencial e links sensiveis.
        </p>
      </div>
    </section>
  );
}
