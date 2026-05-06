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
    slug: "projeto-01",
    title: "Projeto 01",
    shortDescription:
      "Placeholder para um projeto focado em experiencia do usuario e performance.",
    detailedDescription:
      "Este projeto foi desenvolvido para melhorar a experiencia de uso em fluxos criticos, reduzindo etapas desnecessarias e deixando o caminho do usuario mais intuitivo. A proposta central foi organizar o produto para que a pessoa entendesse rapidamente o valor entregue, encontrasse o que precisa sem friccao e completasse suas acoes com mais confianca. A estrutura visual e de navegacao foi desenhada para equilibrar clareza, velocidade e consistencia em diferentes dispositivos.",
    thumbnail: "/project-thumbs/placeholder.svg",
    category: "Web Platform",
    year: 2026,
    impactLabel: "Alta performance",
    featured: true,
    stack: ["Next.js", "TypeScript", "CSS"],
    context: "Descricao do contexto do problema e objetivo principal.",
    challenges: [
      "Mapear requisitos sem comprometer velocidade de entrega.",
      "Manter interface clara com pouca exposicao de informacoes sensiveis.",
    ],
    solution: [
      "Separacao de componentes com renderizacao estatica.",
      "Organizacao de conteudo por secoes orientadas a resultado.",
    ],
    results: ["Resultado principal 1", "Resultado principal 2"],
    demoUrl: "",
    codeUrl: "",
    visibility: "private",
  },
  {
    slug: "projeto-02",
    title: "Projeto 02",
    shortDescription: "Placeholder para produto web com foco em automacao.",
    detailedDescription:
      "Este produto foi pensado para automatizar tarefas repetitivas que consumiam tempo da operacao. A solucao organiza processos em etapas claras, com visibilidade do status de cada acao e menor dependencia de controle manual. O ganho principal esta em padronizar a execucao das rotinas, reduzir erros por retrabalho e permitir que a equipe foque em decisoes mais estrategicas em vez de operacoes mecanicas.",
    thumbnail: "/project-thumbs/placeholder.svg",
    category: "Automacao",
    year: 2026,
    impactLabel: "Escala operacional",
    featured: true,
    stack: ["Next.js", "Node.js", "Prisma"],
    context: "Contexto inicial do produto e publico-alvo.",
    challenges: ["Garantir estabilidade em carga moderada."],
    solution: ["Estruturacao por camadas e validacoes server-side."],
    results: ["Reducao de retrabalho operacional"],
    demoUrl: "",
    codeUrl: "",
    visibility: "private",
  },
  {
    slug: "projeto-03",
    title: "Projeto 03",
    shortDescription: "Placeholder para dashboard analitico.",
    detailedDescription:
      "Este dashboard transforma dados dispersos em uma leitura simples para tomada de decisao. O foco foi apresentar informacoes importantes de forma objetiva, com hierarquia visual clara e contexto suficiente para analise rapida. A proposta do produto e diminuir ruido, facilitar comparacoes e tornar o acompanhamento de desempenho mais acessivel para quem nao possui perfil tecnico.",
    thumbnail: "/project-thumbs/placeholder.svg",
    category: "Analytics",
    year: 2025,
    impactLabel: "Clareza de indicadores",
    featured: true,
    stack: ["React", "TypeScript", "Charting"],
    context: "Consolidacao de dados para tomada de decisao.",
    challenges: ["Padronizar metricas entre diferentes fontes."],
    solution: ["Normalizacao e visualizacao por indicadores chave."],
    results: ["Leitura mais rapida de desempenho"],
    demoUrl: "",
    codeUrl: "",
    visibility: "private",
  },
  {
    slug: "projeto-04",
    title: "Projeto 04",
    shortDescription: "Placeholder para landing page de conversao.",
    detailedDescription:
      "Esta landing page foi estruturada para comunicar valor com rapidez e conduzir a pessoa para a acao principal sem distracoes. A pagina combina argumentos objetivos, organizacao de informacao por prioridade e chamadas de acao bem posicionadas. O resultado esperado e melhorar a qualidade do trafego aproveitado, aumentar conversao e reduzir pontos de abandono durante a jornada de contato.",
    thumbnail: "/project-thumbs/placeholder.svg",
    category: "Marketing",
    year: 2025,
    impactLabel: "Conversao",
    featured: true,
    stack: ["Next.js", "SEO", "A/B Test"],
    context: "Aumentar leads sem aumentar custo de aquisicao.",
    challenges: ["Equilibrar design forte e carregamento rapido."],
    solution: ["Layout enxuto com chamadas de acao claras."],
    results: ["Melhora da taxa de conversao"],
    demoUrl: "",
    codeUrl: "",
    visibility: "private",
  },
  {
    slug: "projeto-05",
    title: "Projeto 05",
    shortDescription: "Placeholder para app interno de produtividade.",
    detailedDescription:
      "Este aplicativo interno foi desenhado para organizar atividades recorrentes e reduzir gargalos operacionais. A experiencia privilegia simplicidade de uso, rastreabilidade de etapas e previsibilidade no andamento das tarefas. O foco do produto e tornar a rotina da equipe mais fluida, com menos interrupcoes e com maior controle sobre o que precisa ser executado em cada etapa.",
    thumbnail: "/project-thumbs/placeholder.svg",
    category: "Produtividade",
    year: 2024,
    impactLabel: "Reducao de tempo",
    featured: false,
    stack: ["Next.js", "PostgreSQL", "API"],
    context: "Reduzir gargalos em rotinas recorrentes da equipe.",
    challenges: ["Controlar permissao por perfil de usuario."],
    solution: ["Fluxo com regras de acesso e trilha de acao."],
    results: ["Menor tempo medio por tarefa"],
    demoUrl: "",
    codeUrl: "",
    visibility: "private",
  },
  {
    slug: "projeto-06",
    title: "Projeto 06",
    shortDescription: "Placeholder para plataforma de conteudo.",
    detailedDescription:
      "A plataforma foi planejada para facilitar a publicacao e manutencao de conteudo de forma consistente. O produto cria uma base padronizada para equipes que precisam produzir com frequencia sem perder qualidade editorial. A proposta principal e acelerar publicacoes, manter unidade de comunicacao e simplificar o fluxo de atualizacao para diferentes tipos de material.",
    thumbnail: "/project-thumbs/placeholder.svg",
    category: "Conteudo",
    year: 2024,
    impactLabel: "Publicacao acelerada",
    featured: false,
    stack: ["Next.js", "MDX", "ISR"],
    context: "Publicar conteudo de forma consistente e escalavel.",
    challenges: ["Padronizar formato sem perder flexibilidade."],
    solution: ["Template reutilizavel para tipos de conteudo."],
    results: ["Aumento da velocidade de publicacao"],
    demoUrl: "",
    codeUrl: "",
    visibility: "private",
  },
  {
    slug: "projeto-07",
    title: "Projeto 07",
    shortDescription: "Placeholder para e-commerce nichado.",
    detailedDescription:
      "Este e-commerce foi modelado para reduzir friccao na jornada de compra e melhorar a confianca durante o checkout. A estrutura da vitrine, a navegacao entre categorias e a apresentacao dos itens foram pensadas para facilitar decisao e aumentar clareza. O produto busca combinar experiencia de compra intuitiva com acompanhamento de desempenho para evolucao continua da conversao.",
    thumbnail: "/project-thumbs/placeholder.svg",
    category: "E-commerce",
    year: 2024,
    impactLabel: "Funil otimizado",
    featured: false,
    stack: ["React", "Stripe", "Analytics"],
    context: "Criar fluxo de compra rapido e sem friccao.",
    challenges: ["Evitar abandono na etapa de checkout."],
    solution: ["Etapas simplificadas e monitoramento continuo."],
    results: ["Melhora de conversao no funil de compra"],
    demoUrl: "",
    codeUrl: "",
    visibility: "private",
  },
  {
    slug: "projeto-08",
    title: "Projeto 08",
    shortDescription: "Placeholder para sistema de agendamento.",
    detailedDescription:
      "O sistema de agendamento foi construido para organizar disponibilidade e reduzir conflitos de horario em operacoes com alto volume de marcacoes. A experiencia prioriza simplicidade no processo de reserva, confirmacao e acompanhamento. O objetivo principal e diminuir falhas de comunicacao, melhorar previsibilidade da agenda e elevar a qualidade da relacao com o cliente final.",
    thumbnail: "/project-thumbs/placeholder.svg",
    category: "SaaS",
    year: 2023,
    impactLabel: "Confiabilidade de agenda",
    featured: false,
    stack: ["Next.js", "Calendar API", "Notifications"],
    context: "Organizar agendamentos com menos conflito de horario.",
    challenges: ["Sincronizar disponibilidade em tempo real."],
    solution: ["Bloqueio de horarios e confirmacoes automatizadas."],
    results: ["Reduz conflitos e faltas de agendamento"],
    demoUrl: "",
    codeUrl: "",
    visibility: "private",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
