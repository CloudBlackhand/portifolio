export type ProjectGalleryImage = {
  src: string;
  alt: string;
};

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
  /** Telas extras na pagina de detalhe (alem da miniatura principal). */
  gallery?: ProjectGalleryImage[];
};

export const projects: Project[] = [
  {
    slug: "vendas-hub",
    title: "Vendas Hub",
    shortDescription:
      "Sistema completo de cadastro e gestao de vendas: oportunidades, equipe e acompanhamento do funil em um so lugar.",
    detailedDescription:
      "O Vendas Hub e o ponto central da operacao comercial: cadastro de clientes e negocios, registro de etapas do funil, responsaveis e historico do que foi feito em cada oportunidade. Foi pensado como um sistema de vendas de verdade — nao so uma listagem, mas regras de preenchimento, visao por vendedor ou time e leitura rapida do que precisa de atencao. Tudo isso em producao, com interface voltada a quem vive de meta e follow-up diario.",
    thumbnail: "/project-thumbs/placeholder.svg",
    category: "Gestao e cadastro de vendas",
    year: 2026,
    impactLabel: "Funil e cadastro integrados",
    featured: true,
    stack: ["Web app", "Dashboard", "API"],
    context:
      "A operacao precisava sair de planilhas e grupos soltos para um cadastro de vendas unico, com rastreio de etapas e donos claros por oportunidade.",
    challenges: [
      "Modelar cadastro e funil sem travar o time no dia a dia.",
      "Fazer a equipe enxergar prioridade: o que fechar, o que esquentar, o que documentar.",
    ],
    solution: [
      "Estrutura de oportunidades com etapas, campos e visoes alinhadas ao processo real de vendas.",
      "Dashboards e listas que destacam o que esta atrasado ou sem proximo passo definido.",
    ],
    results: [
      "Um so lugar para cadastro, historico e acompanhamento de vendas.",
      "Menos perda de informacao entre pessoas e canais.",
    ],
    demoUrl: "",
    codeUrl: "",
    visibility: "private",
  },
  {
    slug: "waha",
    title: "WAHA",
    shortDescription:
      "API WhatsApp (WAHA) em ambiente proprio: base tecnica para sessao oficial, envio e integracao com outros sistemas.",
    detailedDescription:
      "O WAHA aqui funciona como camada HTTP do WhatsApp em infraestrutura controlada: sessao oficial da empresa, disponibilidade para integracao e menos dependencia de solucoes externas fechadas. O trabalho inclui operacao estavel (deploy, monitoramento basico, rotinas de sessao) para que produtos como disparadores e alertas conversem com o WhatsApp de forma previsivel. E infraestrutura em uso real, pensada para durar e para servir de fundacao a outros modulos.",
    thumbnail: "/project-thumbs/placeholder.svg",
    category: "API e infraestrutura WhatsApp",
    year: 2025,
    impactLabel: "Canal oficial integrado",
    featured: true,
    stack: ["Node.js", "Docker", "WhatsApp API"],
    context:
      "Era preciso um endpoint confiavel do WhatsApp, rodando no nosso ambiente, para conectar cadastros, regras de negocio e envio de mensagens sem atalhos frageis.",
    challenges: [
      "Manter sessao e conectividade estaveis na operacao continua.",
      "Definir limites claros entre API, servicos de negocio e filas de envio.",
    ],
    solution: [
      "WAHA self-hosted com praticas de operacao e versionamento alinhados ao restante do stack.",
      "Integracao via HTTP com contratos simples para os sistemas que consomem a API.",
    ],
    results: [
      "Base comum para qualquer funcionalidade que precise falar com o WhatsApp de forma oficial.",
      "Menos surpresa em producao e integracao mais clara entre times.",
    ],
    demoUrl: "",
    codeUrl: "https://github.com/CloudBlackhand/waha",
    visibility: "public",
  },
  {
    slug: "msg-sys",
    title: "MS",
    shortDescription:
      "Disparador de mensagens WhatsApp em producao: filas, modelos, regras e rastre do que foi enviado.",
    detailedDescription:
      "O MS e o produto que operacionaliza o envio pelo WhatsApp: quem dispara, para quem, com qual modelo, em que ordem e com registro do resultado. Centraliza filas, evita disparo duplicado sem querer e da visibilidade do que saiu do canal oficial — conectado a eventos de negocio (por exemplo, etapa de venda, lembrete, confirmacao). Nao e um rotulo generico de automacao: e um disparador de mensagens com governanca, desenhado para volume real e para integrar com o restante do ecossistema (incluindo a base de API e cadastros). Interface desktop com envio em massa (Excel, atrasos e lotes), ate tres contas com reparticao de carga e fluxo de licenca.",
    thumbnail: "/project-thumbs/ms-envio-massa.png",
    category: "Disparo de mensagens WhatsApp",
    year: 2025,
    impactLabel: "Envio rastreavel no canal oficial",
    featured: true,
    stack: ["Node.js", "WhatsApp", "Filas"],
    context:
      "A operacao precisava sair de envios manuais e planilhas para um disparador unico, com fila, modelo e historico do que foi enviado a cada contato.",
    challenges: [
      "Garantir ordem, idempotencia e rastreio em disparos em escala.",
      "Conectar regras de negocio ao canal sem expor o time a erros de destino ou texto.",
    ],
    solution: [
      "Camada de disparo com filas, modelos e vinculo a entidades do sistema (venda, cliente, evento).",
      "Registro de envio e status para auditoria e suporte operacional.",
    ],
    results: [
      "Mensagens saindo pelo canal oficial com previsibilidade e registro.",
      "Menos retrabalho e menos dependencia de atalho manual no dia a dia.",
    ],
    demoUrl: "",
    codeUrl: "https://github.com/CloudBlackhand/msgSYS",
    visibility: "public",
    gallery: [
      {
        src: "/project-thumbs/ms-conexao-whatsapp.png",
        alt:
          "MS — conexao WhatsApp com ate tres contas e reparticao automatica do envio",
      },
      {
        src: "/project-thumbs/ms-licenca.png",
        alt: "MS — tela de licenca e ativacao do produto",
      },
    ],
  },
  {
    slug: "melhor-preco",
    title: "Melhor Preco",
    shortDescription:
      "Ferramenta de comparacao e apoio a decisao de compra e margem, com dados reunidos para analise rapida.",
    detailedDescription:
      "O Melhor Preco ajuda a comparar cenarios de custo e revenda antes de comprar ou precificar: entrada de dados organizada, visao do que pesa na margem e leitura objetiva para quem decide no operacional. Foi usado no cotidiano para reduzir decisao no feeling e concentrar numeros em um fluxo so — sempre com foco em consistencia entre consultas e velocidade para repetir a analise sempre que o mercado mudar.",
    thumbnail: "/project-thumbs/placeholder.svg",
    category: "Precificacao e comparacao",
    year: 2024,
    impactLabel: "Decisao mais clara na compra",
    featured: true,
    stack: ["Web", "TypeScript", "API"],
    context:
      "Compra e precificacao precisavam de uma base unica de comparacao, em vez de cortes de planilha e conversas sem registro.",
    challenges: [
      "Manter regras de comparacao alinhadas ao que o time realmente usa no dia a dia.",
      "Evitar telas pesadas: quem compra precisa resposta em poucos cliques.",
    ],
    solution: [
      "Fluxos de entrada e comparacao com foco em margem e cenarios repetiveis.",
      "Interface pensada para revisitar precos com frequencia.",
    ],
    results: [
      "Disciplina na analise de preco e menos discussao sem numero na mesa.",
      "Ganho de tempo na preparacao de decisao de compra ou tabela de venda.",
    ],
    demoUrl: "",
    codeUrl: "https://github.com/CloudBlackhand/MelhorPre-o",
    visibility: "public",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
