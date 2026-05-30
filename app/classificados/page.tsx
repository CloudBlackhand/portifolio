import type { Metadata } from "next";
import Link from "next/link";
import { TopSecretSection } from "@/app/components/top-secret-section";
import { getTopSecretProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Classificados | Cloud Service",
  description:
    "Dossiês restritos — trabalhos em produção sob sigilo. Contexto e resultado publicados, sem expor operação do cliente.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ClassificadosPage() {
  const topSecretProjects = getTopSecretProjects();

  return (
    <div className="marathon-world-page">
      <div className="marathon-world-page-bar">
        <div className="container marathon-world-page-bar-inner">
          <Link className="marathon-world-back" href="/projetos">
            ← Catálogo público
          </Link>
          <span className="marathon-world-route" aria-hidden="true">
            tau ceti · warehouse node · tablet sync
          </span>
        </div>
      </div>
      <TopSecretSection projects={topSecretProjects} standalone />
    </div>
  );
}
