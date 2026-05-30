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
    <div className="classified-page">
      <div className="classified-page-bar">
        <div className="container classified-page-bar-inner">
          <Link className="classified-page-back" href="/projetos">
            ← Catálogo público
          </Link>
          <span className="classified-page-route" aria-hidden="true">
            UESC / RESTRICTED / NODE-07
          </span>
        </div>
      </div>
      <TopSecretSection projects={topSecretProjects} standalone />
    </div>
  );
}
