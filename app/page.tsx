import { projects } from "@/data/projects";
import { getProfilePhoto } from "@/lib/profile-photo";
import { HireHero } from "./components/hire-hero";
import { MarketingHighlights } from "./components/marketing-highlights";
import { ShowcaseCarousel } from "./components/showcase-carousel";
import { LandingPage } from "./components/landing/LandingPage";
import { WorkTable } from "./components/work-table";

export default function Home() {
  const profilePhoto = getProfilePhoto();

  return (
    <>
      <HireHero />
      <ShowcaseCarousel projects={projects} />
      <MarketingHighlights />
      <LandingPage projects={projects} profilePhoto={profilePhoto} />
      <div className="container ep-table-section">
        <WorkTable projects={projects} />
        <p className="muted section-spacing">
          Sistemas em produção e campanhas de marketing e criativo — abra cada projeto
          para ver capturas ou peças visuais.
        </p>
      </div>
    </>
  );
}
