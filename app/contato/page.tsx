import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato | Cloud Service — Contratar",
  description:
    "Canal direto para contratar desenvolvimento web, automação WhatsApp e consultoria.",
};

export default function ContatoPage() {
  return (
    <section className="page-shell">
      <p className="mara-prompt">&gt; contato / contratar</p>
      <h1 className="page-title">Vamos fechar seu próximo projeto</h1>
      <p className="page-subtitle">
        Resposta rápida para freelas, projetos fechados e consultoria. Conte o
        objetivo, prazo e faixa de orçamento — alinhamos escopo antes de
        qualquer compromisso.
      </p>

      <div className="content-block section-spacing mara-contact-block">
        <h3>Canal preferencial</h3>
        <p className="muted">
          WhatsApp: <strong>(21) 97136-4919</strong>
        </p>
        <p className="muted section-spacing-sm">
          Ideal para primeira conversa: você descreve a demanda e eu retorno com
          perguntas objetivas ou proposta de próximo passo.
        </p>
        <div className="link-row">
          <a
            className="button primary"
            href="https://wa.me/5521971364919?text=Ola%2C%20vi%20seu%20portfolio%20e%20quero%20contratar%20para%20um%20projeto."
            target="_blank"
            rel="noreferrer"
          >
            Contratar via WhatsApp
          </a>
          <Link className="button" href="/projetos">
            Ver portfólio antes
          </Link>
        </div>
      </div>

      <div className="content-block">
        <h3>O que enviar na primeira mensagem</h3>
        <ul className="plain-list">
          <li>Objetivo do projeto em uma ou duas frases</li>
          <li>Prazo desejado ou urgência</li>
          <li>Se já existe sistema, site ou processo hoje</li>
          <li>Orçamento aproximado, se tiver (facilita priorização)</li>
        </ul>
      </div>

      <div className="content-block">
        <h3>Privacidade</h3>
        <p className="muted">
          Não compartilhe senhas, dados sensíveis de clientes ou documentos
          confidenciais na primeira conversa — alinhamos NDA ou escopo antes
          quando necessário.
        </p>
      </div>
    </section>
  );
}
