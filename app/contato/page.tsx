import type { Metadata } from "next";
import { CornerBrackets } from "@/components/corner-brackets";

export const metadata: Metadata = {
  title: "Contato | Cloud Service",
  description:
    "Fale sobre seu projeto pelo WhatsApp. Resposta rápida, sem formulário.",
};

export default function ContatoPage() {
  return (
    <section className="page-shell">
      <span className="hire-chip">Disponível para freelas e contratos</span>
      <h1 className="page-title">Vamos falar sobre o seu sistema</h1>
      <p className="page-subtitle">
        Sem formulário, sem triagem automática. Me manda uma mensagem direta
        no WhatsApp com o contexto do projeto e eu respondo pessoalmente.
      </p>

      <div className="content-block section-spacing">
        <CornerBrackets />
        <h3>Canal direto</h3>
        <p className="muted">
          WhatsApp: <strong>(21) 97136-4919</strong>, atendimento em horário
          comercial, resposta normalmente no mesmo dia.
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

      <div className="content-block section-spacing">
        <CornerBrackets />
        <h3>O que ajuda a agilizar a conversa</h3>
        <ul className="plain-list">
          <li>O que o sistema ou site precisa resolver hoje.</li>
          <li>Prazo desejado e se já existe orçamento definido.</li>
          <li>Se já tem algo no ar (planilha, sistema antigo, site atual).</li>
        </ul>
      </div>

      <div className="content-block section-spacing">
        <CornerBrackets />
        <h3>Sigilo de projeto</h3>
        <p className="muted">
          Projetos sob NDA ou com dados sensíveis do cliente são tratados sem
          expor código-fonte, capturas de tela ou informação que identifique a
          operação. O portfólio já reflete isso nos cases marcados como
          confidenciais.
        </p>
      </div>
    </section>
  );
}
