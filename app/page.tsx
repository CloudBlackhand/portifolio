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
          Sistemas em producao e campanhas de marketing e criativo — abra cada projeto
          para ver capturas ou pecas visuais.
        </p>
      </div>
    </>
  );
}
