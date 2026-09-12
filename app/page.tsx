import { projects, getCatalogProjects } from "@/data/projects";
import { getProfilePhoto } from "@/lib/profile-photo";
import {
  LandingHero,
  StatsSection,
  TimelineSection,
  OficinaSection,
} from "./components/landing/LandingPage";

export default function Home() {
  const profilePhoto = getProfilePhoto();
  const catalog = getCatalogProjects(projects);
  const latest = [...catalog].sort((a, b) => b.year - a.year)[0];

  return (
    <>
      <LandingHero profilePhoto={profilePhoto} />
      <StatsSection />
      <TimelineSection projects={projects} />
      <OficinaSection project={latest} profilePhoto={profilePhoto} />
    </>
  );
}
