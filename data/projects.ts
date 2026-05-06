export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  thumbnail: string;
  category: string;
  year: number;
  impactLabel: string;
  featured: boolean;
  stack: string[];
  context: string;
  challenges: string[];
  solution: string[];
  results: string[];
  demoUrl?: string;
  codeUrl?: string;
  visibility: "public" | "private";
};

export const projects: Project[] = [
  {
    slug: "vendas-hub",
    title: "Vendas Hub",
    shortDescription:
      "Hub comercial usado em producao para organizar vendas, acompanhamento e operacao do time.",
    detailedDescription:
      "O Vendas Hub centraliza o fluxo comercial em um unico lugar: visibilidade do funil, disciplina no acompanhamento e menos retrabalho entre areas. Foi construido para uso real da operacao, com foco em previsibilidade do pipeline e clareza do que precisa ser feito em cada etapa. A experiencia prioriza rapidez na rotina diaria e informacao suficiente para decisao sem sobrecarregar a equipe.",
    thumbnail: "/project-thumbs/placeholder.svg",
    category: "Operacao comercial",
    year: 2026,
    impactLabel: "Fluxo comercial unificado",
    featured: true,
    stack: ["Web app", "Dashboard", "API"],
    context:
      "Operacao comercial precisava de um ponto unico para acompanhar vendas e execucao sem depender de planilhas dispersas.",
    challenges: [
      "Manter adocao diaria pelo time com interface objetiva.",
      "Evitar que informacao critica fique espalhada em varios canais.",
    ],
    solution: [
      "Fluxo guiado por etapas com visao consolidada do pipeline.",
      "Padronizacao de registros para facilitar leitura e priorizacao.",
    ],
    results: [
      "Mais clareza sobre status de oportunidades e proximos passos.",
      "Menos atrito entre comunicacao comercial e operacao.",
    ],
    demoUrl: "",
    codeUrl: "",
    visibility: "private",
  },
  {
    slug: "waha",
    title: "WAHA",
    shortDescription:
      "Integracao com API WhatsApp self-hosted em producao para automacao e canais oficiais.",
    detailedDescription:
      "Este trabalho envolve operacao de WAHA (WhatsApp HTTP API) em ambiente controlado, integrando sistemas internos ao WhatsApp de forma estavel e repetivel. O foco foi disponibilizar mensagens e automacoes com governanca: sessoes gerenciadas, integracao com backends existentes e menos dependencia de fluxos manuais. E infraestrutura e produto em uso real, nao apenas experimentacao.",
    thumbnail: "/project-thumbs/placeholder.svg",
    category: "Integracao e mensagens",
    year: 2025,
    impactLabel: "Canal oficial escalavel",
    featured: true,
    stack: ["Node.js", "Docker", "WhatsApp API"],
    context:
      "Necessidade de conectar produtos internos ao WhatsApp com previsibilidade e sem solucoes improvisadas.",
    challenges: [
      "Manter sessoes e integracoes estaveis ao longo do tempo.",
      "Coordenar API, deploy e consumo pelos sistemas internos.",
    ],
    solution: [
      "WAHA self-hosted com rotinas claras de operacao.",
      "Contratos de integracao entre API de mensagens e demais servicos.",
    ],
    results: [
      "Automacao e notificacoes via canal oficial com menor atrito operacional.",
      "Base tecnica reutilizavel para novos fluxos sobre o mesmo canal.",
    ],
    demoUrl: "",
    codeUrl: "https://github.com/CloudBlackhand/waha",
    visibility: "public",
  },
  {
    slug: "msg-sys",
    title: "MS",
    shortDescription:
      "Sistema de mensagens e automacoes usado em producao para comunicacao operacional.",
    detailedDescription:
      "O MS organiza envio, modelos e rotinas de mensagens ligadas a operacao — reduzindo dependencia de acoes manuais e padronizando o que precisa ser comunicado. Foi desenhado para carga real de uso: filas, consistencia e visibilidade do que foi disparado. A camada de automacao conversa com os demais sistemas para que alertas e comunicacoes sigam regras claras de negocio.",
    thumbnail: "/project-thumbs/placeholder.svg",
    category: "Automacao",
    year: 2025,
    impactLabel: "Comunicacao padronizada",
    featured: true,
    stack: ["Node.js", "Integracao", "Mensagens"],
    context:
      "Equipe e sistemas precisavam de mensagens confiaveis, repetiveis e rastreaveis.",
    challenges: [
      "Evitar erros em disparos em volume e manter rastreabilidade.",
      "Integrar com fluxos existentes sem duplicar cadastros e regras.",
    ],
    solution: [
      "Orquestracao de mensagens com governanca e pontos de extensao claros.",
      "Automacao alinhada a eventos e estados do negocio.",
    ],
    results: [
      "Menos comunicacao ad hoc e mais previsibilidade nos disparos.",
      "Melhor continuidade entre sistemas e canais de contato.",
    ],
    demoUrl: "",
    codeUrl: "https://github.com/CloudBlackhand/msgSYS",
    visibility: "public",
  },
  {
    slug: "melhor-preco",
    title: "Melhor Preco",
    shortDescription:
      "Produto usado em producao para comparar e apoiar decisoes de preco com dados consistentes.",
    detailedDescription:
      "O Melhor Preco reune informacao de forma que a equipe compare cenarios e tome decisao com menos ambiguidade. O objetivo e sustentar operacao real: cadastros, regras e apresentacao clara do que importa para compra ou revenda. O sistema foi usado no dia a dia, nao como demo isolada — com foco em consistencia dos dados e velocidade na consulta.",
    thumbnail: "/project-thumbs/placeholder.svg",
    category: "Produto de dados",
    year: 2024,
    impactLabel: "Decisao com base em dados",
    featured: true,
    stack: ["Web", "TypeScript", "API"],
    context:
      "Decisoes de preco e comparacao precisavam sair de estimativas informais para uma base unica.",
    challenges: [
      "Manter dados atualizados e comparaveis entre cenarios.",
      "Interface simples para quem decide rapido no operacional.",
    ],
    solution: [
      "Modelagem de comparacao com regras explicitas e revisao continua.",
      "Fluxos de consulta pensados para uso recorrente.",
    ],
    results: [
      "Menos discordancia sobre numeros e mais velocidade na analise.",
      "Disciplina na informacao que entra na decisao comercial.",
    ],
    demoUrl: "",
    codeUrl: "https://github.com/CloudBlackhand/MelhorPre-o",
    visibility: "public",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
