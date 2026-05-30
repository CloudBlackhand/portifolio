import Link from "next/link";
import { projects, getCatalogProjects } from "@/data/projects";
import { getProfilePhoto } from "@/lib/profile-photo";
import { ClassifiedTeaser } from "./components/classified-teaser";
import { MarketingHighlights } from "./components/marketing-highlights";
import { ShowcaseCarousel } from "./components/showcase-carousel";
import { LandingPage } from "./components/landing/LandingPage";
import { WorkTable } from "./components/work-table";

export default function Home() {
  const profilePhoto = getProfilePhoto();
  const catalogProjects = getCatalogProjects(projects);

  return (
    <>
      <ShowcaseCarousel projects={projects} />
      <MarketingHighlights />
      <LandingPage projects={projects} profilePhoto={profilePhoto} />
      <ClassifiedTeaser />
      <div className="container ep-table-section">
        <WorkTable projects={catalogProjects} />
        <p className="muted section-spacing">
          Sistemas em produção e campanhas de marketing — abra cada projeto para
          ver capturas ou peças visuais quando disponíveis.
        </p>
        <p className="catalog-table-note">
          Arquivos classificados não entram nesta tabela.{" "}
          <Link href="/projetos#top-secret">Ver dossiês restritos</Link>
        </p>
      </div>
    </>
  );
}
