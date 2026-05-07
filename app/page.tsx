import { projects } from "@/data/projects";
import { ShowcaseCarousel } from "./components/showcase-carousel";
import { LandingPage } from "./components/landing/LandingPage";
import { WorkTable } from "./components/work-table";

export default function Home() {
  return (
    <>
      <ShowcaseCarousel projects={projects} />
      <LandingPage projects={projects} />
      <div className="container ep-table-section">
        <WorkTable projects={projects} />
        <p className="muted section-spacing">
          Quatro sistemas em producao: Vendas Hub, WAHA, MS e Melhor Preco.
          Capturas reais no estudo de cada projeto.
        </p>
      </div>
    </>
  );
}
