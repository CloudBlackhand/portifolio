import { HeroTerminal } from "./components/hero-terminal";
import { projects } from "@/data/projects";
import { getProfilePhoto } from "@/lib/profile-photo";
import { MarketingHighlights } from "./components/marketing-highlights";
import { ShowcaseCarousel } from "./components/showcase-carousel";
import { LandingPage } from "./components/landing/LandingPage";
import { WorkTable } from "./components/work-table";

export default function Home() {
  const profilePhoto = getProfilePhoto();

  return (
    <>
      <HeroTerminal />
      <ShowcaseCarousel projects={projects} />
      <MarketingHighlights />
      <LandingPage projects={projects} profilePhoto={profilePhoto} />
      <div className="container ep-table-section">
        <WorkTable projects={projects} />
        <p className="muted section-spacing">
          Portfólio para contratantes — sistemas, automação e campanhas. Abra cada
          case para validar entrega antes de fechar projeto.
        </p>
      </div>
    </>
  );
}
