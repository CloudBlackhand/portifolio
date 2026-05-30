import type { MarathonActivationConfig } from "@/app/components/marathon/marathon-tablet-activation";

export const VAULT_ACTIVATION: MarathonActivationConfig = {
  code: "sense-mem",
  operation: "vault index",
  completeLabel: "partition unlocked · dossier vault ready",
  steps: [
    {
      label: "weave-mem buffer",
      status: "alocando buffer · identidade do cliente removida",
      target: 52,
      duration: 0.85,
    },
    {
      label: "sense-mem sync",
      status: "strip endpoint metadata · sem links publicos",
      target: 78,
      duration: 0.95,
    },
    {
      label: "vault index",
      status: "render abstrato · so contexto e resultado",
      target: 100,
      duration: 1.05,
    },
  ],
};

export const DOSSIER_ACTIVATION: MarathonActivationConfig = {
  code: "sense-mem",
  operation: "dossier decrypt",
  completeLabel: "record sanitized · leitura liberada",
  steps: [
    {
      label: "header strip",
      status: "decrypt dossier · metadata parcial",
      target: 38,
      duration: 0.8,
    },
    {
      label: "client redact",
      status: "cliente redacted · sem capturas publicas",
      target: 71,
      duration: 0.9,
    },
    {
      label: "abstract render",
      status: "sense-mem render · representacao ilustrativa",
      target: 100,
      duration: 1.1,
    },
  ],
};
