import type { Project, ProjectKind } from "./types";
import { projects } from "./catalog";

/** Largura máxima da peça na página de detalhe (evita imagem gigante em PNG 4K). */
export const MARKETING_DETAIL_MAX_WIDTH_PX = 420;

export function isMarketingProject(project: Project): boolean {
  return project.projectKind === "marketing";
}

export function isConsultoriaProject(project: Project): boolean {
  return project.projectKind === "consultoria";
}

export function isTopSecretProject(project: Project): boolean {
  return project.projectKind === "topsecret";
}

export function isConfidentialProject(project: Project): boolean {
  return project.confidential === true || project.projectKind === "topsecret";
}

export function getProjectKindLabel(project: Project): string {
  switch (project.projectKind) {
    case "marketing":
      return "Marketing e criativo";
    case "landing":
      return "Landing page";
    case "consultoria":
      return "Consultoria";
    case "topsecret":
      return "Sob sigilo";
    default:
      return "Sistema";
  }
}

export function getProjectsByKind(kind: ProjectKind): Project[] {
  return projects.filter((project) => project.projectKind === kind);
}

export function getProjectLiveLinkLabel(project: Project): string {
  if (project.liveLinkLabel) return project.liveLinkLabel;
  return "Ver site no ar";
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Projetos visíveis em listagens gerais (tabela, catálogo público) — sem sigilo. */
export function getCatalogProjects(list: Project[] = projects): Project[] {
  return list.filter(
    (project) => !isTopSecretProject(project) && !isConfidentialProject(project),
  );
}

export function getCatalogProjectsByKind(kind: ProjectKind): Project[] {
  return getCatalogProjects().filter((project) => project.projectKind === kind);
}

export function getTopSecretProjects(): Project[] {
  return getProjectsByKind("topsecret");
}
