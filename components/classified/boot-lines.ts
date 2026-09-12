import type { Project } from "@/data/projects";

export const CLOUD_BOOT_HEAD = "Cloud Service";

export function dossierBootName(project: Project): string {
  return project.title.replace(/\s*—\s*(confidencial|sigilo)$/i, "").trim().toLowerCase();
}

export function getVaultBootLines(dossierCount: number): string[] {
  const countLabel = dossierCount === 1 ? "1 projeto" : `${dossierCount} projetos`;

  return [
    "> conectando...",
    "> carregando lista...",
    `> ${countLabel} sob sigilo`,
    "> pronto",
  ];
}

export function getDossierBootLines(project: Project): string[] {
  const name = dossierBootName(project);

  return [
    "> conectando...",
    "> lendo projeto...",
    `> ${name}`,
    "> pronto",
  ];
}

export function getDossierBootTarget(_slug: string): number {
  return 100;
}
