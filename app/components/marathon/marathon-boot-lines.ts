import type { Project } from "@/data/projects";

export const CLOUD_BOOT_HEAD = "cloud service · sense-mem · terminal";

export function dossierBootName(project: Project): string {
  return project.title.replace(/\s*—\s*confidencial$/i, "").trim().toLowerCase();
}

export function getVaultBootLines(dossierCount: number): string[] {
  const countLabel = dossierCount === 1 ? "1 dossie" : `${dossierCount} dossies`;

  return [
    "> cloud link handshake...",
    "> carregando dados...",
    `> vault classificados · ${countLabel}...`,
    "> partition restricted online...",
  ];
}

export function getDossierBootLines(project: Project): string[] {
  const name = dossierBootName(project);

  return [
    "> cloud link handshake...",
    "> carregando dados...",
    `> montando dossie: ${name}...`,
    "> decrypt sense-mem · sigilo ativo...",
  ];
}

export function getDossierBootTarget(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 17 + slug.charCodeAt(i)) % 100;
  }
  return 78 + (hash % 21);
}
