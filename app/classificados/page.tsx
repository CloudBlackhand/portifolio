import type { Metadata } from "next";
import { ClassifiedSection } from "@/components/classified/section";
import { getTopSecretProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Sob sigilo | Cloud Service",
  description:
    "Projetos em produção sob sigilo: contexto e resultado, sem expor operação do cliente.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ClassificadosPage() {
  const topSecretProjects = getTopSecretProjects();

  return <ClassifiedSection projects={topSecretProjects} standalone />;
}
