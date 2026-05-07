import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";
import { ShowcaseCarousel } from "./components/showcase-carousel";
import { WorkTable } from "./components/work-table";

export default function Home() {
  return (
    <section>
      <ShowcaseCarousel projects={projects} />

      <WorkTable projects={projects} />
      <p className="muted section-spacing">
        Quatro sistemas em producao: Vendas Hub (gestao e cadastro de vendas),
        WAHA (API WhatsApp), MS (disparo no WhatsApp) e Melhor Preco
        (comparacao para decisao). Capturas de tela na proxima atualizacao.
      </p>

      <section className="about-section section-spacing">
        <div className="about-photo-wrap">
          <Image
            src="/profile-placeholder.svg"
            alt="Foto profissional"
            width={420}
            height={420}
            className="about-photo"
          />
        </div>
        <div className="about-content">
          <p className="showcase-kicker">Antes de tudo</p>
          <h2>Uma conversa clara sobre o seu projeto</h2>
          <p className="muted">
            Meu foco e entender seu objetivo de negocio antes de propor
            qualquer solucao tecnica. Assim, cada entrega nasce com direcao,
            prioridade e criterio de resultado desde o inicio.
          </p>
          <p className="muted">
            Trabalho com alinhamentos curtos e objetivos para reduzir duvidas,
            acelerar decisoes e manter transparencia durante todo o processo.
          </p>
          <div className="showcase-actions">
            <a
              className="button primary"
              href="https://wa.me/5521971364919"
              target="_blank"
              rel="noreferrer"
            >
              Conversar no WhatsApp
            </a>
            <Link className="button" href="/contato">
              Ver canais de contato
            </Link>
          </div>
        </div>
      </section>

      <div className="content-block section-spacing professional-intro">
        <p className="showcase-kicker">Apresentacao profissional</p>
        <h2>Como eu trabalho</h2>
        <p className="muted">
          Estruturo cada projeto com foco em tres pontos: entendimento real do
          problema, implementacao robusta e resultado mensuravel. O objetivo
          desta pagina e mostrar impacto sem expor detalhes sensiveis de codigo
          ou arquitetura proprietaria.
        </p>
        <div className="showcase-actions">
          <Link className="button primary" href="/projetos">
            Ver portfolio completo
          </Link>
          <Link className="button" href="/contato">
            Falar sobre um projeto
          </Link>
        </div>
      </div>
    </section>
  );
}
