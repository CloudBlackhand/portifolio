import type { Metadata } from "next";
import { TopSecretSection } from "@/app/components/top-secret-section";
import { getTopSecretProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Sob sigilo | Cloud Service",
  description:
    "Dossiês restritos — trabalhos em produção sob sigilo. Contexto e resultado publicados, sem expor operação do cliente.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ClassificadosPage() {
  const topSecretProjects = getTopSecretProjects();

  return <TopSecretSection projects={topSecretProjects} standalone />;
}
