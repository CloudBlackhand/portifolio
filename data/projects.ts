export type ProjectGalleryImage = {
  src: string;
  alt: string;
  /** Largura real do arquivo (evita upscale borrado no layout). */
  width?: number;
  height?: number;
};

export type ProjectKind = "software" | "marketing";

export type Project = {
  slug: string;
  /** Sistema em producao ou peca de marketing/criativo. */
  projectKind: ProjectKind;
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
  /** Link publico para ver o sistema no ar ou falar com o bot (ex.: site ou WhatsApp). */
  liveUrl?: string;
  /** Texto do botao do link publico. Padrao: "Ver site no ar" ou "Falar com o bot" no CEPBOT. */
  liveLinkLabel?: string;
  /** Destaque na secao de marketing da pagina inicial (nao entra no hero). */
  marketingHighlight?: boolean;
  /** Telas extras na pagina de detalhe (alem da miniatura principal). */
  gallery?: ProjectGalleryImage[];
  /** Dimensões naturais da miniatura (PNG/JPG). Quando definido, o hero não estica além disso. */
  thumbnailWidth?: number;
  thumbnailHeight?: number;
};

export const projects: Project[] = [
  {
    slug: "vendas-hub",
    projectKind: "software",
    title: "Vendas Hub",
    shortDescription:
      "Sistema completo de cadastro e gestao de vendas: oportunidades, equipe e acompanhamento do funil em um so lugar.",
    detailedDescription:
      "O Vendas Hub e o ponto central da operacao comercial: cadastro de clientes e negocios, registro de etapas do funil, responsaveis e historico do que foi feito em cada oportunidade. Foi pensado como um sistema de vendas de verdade — nao so uma listagem, mas regras de preenchimento, visao por vendedor ou time e leitura rapida do que precisa de atencao. Tudo isso em producao, com interface voltada a quem vive de meta e follow-up diario.",
    thumbnail: "/project-thumbs/vendas-hub.svg",
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
    liveUrl: "",
  },
  {
    slug: "sistema-https-whatsapp",
    projectKind: "software",
    title: "Sistema HTTPS WhatsApp",
    shortDescription:
      "WhatsApp personalizado em ambiente proprio: conecte um numero da empresa e integre bots, disparadores e outros sistemas com seguranca.",
    detailedDescription:
      "Este sistema permite usar um numero de WhatsApp da empresa de forma controlada e personalizada. Voce faz o login do numero (como no app) e passa a ter um canal seguro via HTTPS para conectar outras solucoes: bots de atendimento, disparo de mensagens, alertas, cadastros e qualquer fluxo que precise falar com o cliente no WhatsApp. A ideia e ter uma base unica e confiavel, sem depender de ferramentas fechadas de terceiros, e permitir que cada produto do ecossistema use o mesmo numero oficial com regras claras, monitoramento e estabilidade para operacao do dia a dia.",
    thumbnail: "/project-thumbs/sistema-https-whatsapp.svg",
    category: "WhatsApp personalizado",
    year: 2025,
    impactLabel: "Numero oficial integrado",
    featured: true,
    stack: ["Conexao por numero", "HTTPS", "Integracao multi-sistema"],
    context:
      "A operacao precisava de um WhatsApp proprio, com numero dedicado, para alimentar bots e sistemas de envio sem gambiarra ou dependencia externa fragil.",
    challenges: [
      "Manter o numero conectado e estavel durante o uso continuo.",
      "Permitir que varios sistemas usem o mesmo canal sem conflito ou perda de mensagens.",
    ],
    solution: [
      "Infraestrutura propria com acesso HTTPS para integrar bots, disparadores e demais modulos.",
      "Sessao do WhatsApp vinculada ao numero da empresa, pronta para consumo por outros produtos.",
    ],
    results: [
      "Um unico ponto de conexao WhatsApp para todo o ecossistema de atendimento e envio.",
      "Mais previsibilidade para escalar automacao sem trocar de numero ou de ferramenta a cada projeto.",
    ],
    liveUrl: "",
  },
  {
    slug: "msg-sys",
    projectKind: "software",
    title: "MS",
    shortDescription:
      "Disparador de mensagens WhatsApp em producao: filas, modelos, regras e rastre do que foi enviado.",
    detailedDescription:
      "O MS e o produto que operacionaliza o envio pelo WhatsApp: quem dispara, para quem, com qual modelo, em que ordem e com registro do resultado. Centraliza filas, evita disparo duplicado sem querer e da visibilidade do que saiu do canal oficial — conectado a eventos de negocio (por exemplo, etapa de venda, lembrete, confirmacao). Nao e um rotulo generico de automacao: e um disparador de mensagens com governanca, desenhado para volume real e para integrar com o restante do ecossistema (incluindo a base de API e cadastros). Interface desktop com envio em massa (Excel, atrasos e lotes), ate tres contas com reparticao de carga e fluxo de licenca.",
    thumbnail: "/project-thumbs/ms/ms-envio-massa.png",
    thumbnailWidth: 1919,
    thumbnailHeight: 1030,
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
    liveUrl: "",
    gallery: [
      {
        src: "/project-thumbs/ms/ms-conexao-whatsapp.png",
        alt:
          "MS — conexao WhatsApp com ate tres contas e reparticao automatica do envio",
        width: 1919,
        height: 1031,
      },
      {
        src: "/project-thumbs/ms/ms-licenca.png",
        alt: "MS — tela de licenca e ativacao do produto",
        width: 1919,
        height: 1031,
      },
    ],
  },
  {
    slug: "melhor-preco",
    projectKind: "software",
    title: "Melhor Preco",
    shortDescription:
      "Ferramenta de comparacao e apoio a decisao de compra e margem, com dados reunidos para analise rapida.",
    detailedDescription:
      "O Melhor Preco ajuda a comparar cenarios de custo e revenda antes de comprar ou precificar: entrada de dados organizada, visao do que pesa na margem e leitura objetiva para quem decide no operacional. Foi usado no cotidiano para reduzir decisao no feeling e concentrar numeros em um fluxo so — sempre com foco em consistencia entre consultas e velocidade para repetir a analise sempre que o mercado mudar.",
    thumbnail: "/project-thumbs/melhor-preco.svg",
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
    liveUrl: "",
  },
  {
    slug: "cepbot",
    projectKind: "software",
    title: "CEPBOT",
    shortDescription:
      "Bot de atendimento no WhatsApp que consulta cobertura por CEP, apresenta planos da regiao e encaminha para humano quando necessario.",
    detailedDescription:
      "O CEPBOT automatiza o primeiro contato com o cliente pelo WhatsApp: recebe a mensagem, mostra um menu claro e conduz a conversa sem depender de alguem online o tempo todo. Quando o cliente informa o CEP, o sistema verifica se o endereco esta dentro da area de cobertura e, se estiver, apresenta os planos disponiveis para aquela regiao. Se nao houver cobertura ou o cliente preferir falar com uma pessoa, o atendimento e transferido para a equipe humana. Um painel administrativo permite acompanhar conversas, assumir o atendimento manualmente e devolver o fluxo ao bot quando fizer sentido. O objetivo e vender com mais agilidade, reduzir respostas repetitivas e manter a experiencia organizada do inicio ao fim.",
    thumbnail: "/project-thumbs/cepbot.svg",
    category: "Atendimento automatizado WhatsApp",
    year: 2026,
    impactLabel: "Cobertura por CEP no atendimento",
    featured: true,
    stack: ["WhatsApp", "Consulta de CEP", "Painel de atendimento"],
    context:
      "A operacao precisava atender volume no WhatsApp sem perder qualidade: validar cobertura por regiao e mostrar oferta certa antes de envolver um vendedor.",
    challenges: [
      "Garantir que o cliente entenda o menu e informe o CEP corretamente.",
      "Combinar atendimento automatico com handoff humano sem perder o historico da conversa.",
    ],
    solution: [
      "Fluxo conversacional com menu, validacao de CEP e resposta sobre cobertura e planos.",
      "Painel para a equipe assumir ou devolver conversas ao bot com registro completo.",
    ],
    results: [
      "Primeiro atendimento mais rapido e padronizado no WhatsApp.",
      "Menos tempo da equipe em perguntas repetitivas de cobertura e planos.",
    ],
    liveUrl:
      "https://wa.me/5521971364919?text=Ola%2C%20vim%20pelo%20site%20Cloud%20Service%20e%20quero%20conhecer%20o%20CEPBOT",
    liveLinkLabel: "Falar com o bot",
  },
  {
    slug: "instalacao-gratis-rapida",
    projectKind: "marketing",
    title: "Instalacao gratis e rapida",
    shortDescription:
      "Post para Instagram: instalacao sem custo, tecnico em acao e CTA para contratar hoje e navegar amanha.",
    detailedDescription:
      "Peca vertical para feed com layout dividido: lado ilustrado com notebook, Wi-Fi e copy de instalacao gratis; lado com foto real do tecnico crimpando cabo. Reforca urgencia com faixa vermelha e telefone de contato. Foco em remover objecao de prazo e custo de instalacao no provedor de internet.",
    thumbnail: "/project-thumbs/marketing/post-instalacao-rapida.png",
    thumbnailWidth: 3375,
    thumbnailHeight: 4219,
    category: "Marketing e criativo",
    year: 2026,
    impactLabel: "Conversao instalacao 24h",
    featured: false,
    marketingHighlight: true,
    stack: ["Instagram", "Foto + 3D", "Copy de oferta"],
    context:
      "Campanha para provedor que precisava destacar instalacao rapida e sem taxa em meio a concorrencia agressiva.",
    challenges: [
      "Unir confianca (foto real) com impacto visual (3D) sem poluir a leitura.",
      "Manter CTA e telefone legiveis em preview pequeno do feed.",
    ],
    solution: [
      "Composicao em duas faixas com hierarquia clara: promessa, beneficio e contato.",
      "Paleta azul e vermelho alinhada a identidade de telecom.",
    ],
    results: [
      "Peca pronta para stories e feed no formato 4:5.",
      "Mensagem direta para quem adia a contratacao por medo de demora ou taxa.",
    ],
    liveUrl: "",
  },
  {
    slug: "velocidade-contratacao-imediata",
    projectKind: "marketing",
    title: "Velocidade — contrate hoje",
    shortDescription:
      "Criativo 3D com roteador, sinal Wi-Fi e promessa de navegar no dia seguinte; CTA com WhatsApp.",
    detailedDescription:
      "Post de conversao com estetica 3D limpa: roteador, ondas de sinal em vermelho metalico e headline sobre velocidade. Faixa de CTA reforca contratacao no mesmo dia com resultado no dia seguinte. WhatsApp visivel para fechar no canal que o publico ja usa. Ideal para campanhas de aquisicao rapida no Instagram.",
    thumbnail: "/project-thumbs/marketing/post-velocidade-router.png",
    thumbnailWidth: 3375,
    thumbnailHeight: 4219,
    category: "Marketing e criativo",
    year: 2026,
    impactLabel: "CTA velocidade + WhatsApp",
    featured: false,
    marketingHighlight: true,
    stack: ["Instagram", "3D", "WhatsApp"],
    context:
      "Provedor precisava de peca leve e moderna para vender velocidade sem tabela complexa na imagem.",
    challenges: [
      "Comunicar velocidade de forma visual, nao so com numeros de mega.",
      "Encaixar CTA e contato sem competir com o titulo principal.",
    ],
    solution: [
      "Iconografia 3D de router e sinal como metafora imediata de internet rapida.",
      "Bloco vermelho de CTA e rodape com WhatsApp para resposta rapida.",
    ],
    results: [
      "Visual memoravel para repeticao em calendario de posts.",
      "Funil curto: impacto visual → CTA → contato.",
    ],
    liveUrl: "",
  },
  {
    slug: "campanha-copa-mundo-2026",
    projectKind: "marketing",
    title: "Copa do Mundo FIFA 2026",
    shortDescription:
      "Campanha visual para provedor de internet: oferta de fibra + celular com tema Copa, esportes e streaming.",
    detailedDescription:
      "Peca promocional completa para redes e materiais digitais, alinhada a temporada da Copa do Mundo FIFA 2026. O layout reforca velocidade, pacote combinado (fibra e plano movel) e beneficios de entretenimento (sportv, YouTube Premium, vero video). A entrega inclui hierarquia clara de preco, CTA de assinatura e contato, com identidade vermelha e dourada de alto contraste. A imagem de destaque mostra a separacao de camadas do criativo — util para revisao interna e para demonstrar o processo de montagem profissional.",
    thumbnail: "/project-thumbs/marketing/copa-2026-camadas.png",
    thumbnailWidth: 3375,
    thumbnailHeight: 4219,
    category: "Marketing e criativo",
    year: 2026,
    impactLabel: "Campanha tematica Copa 2026",
    featured: false,
    stack: ["Instagram", "Identidade visual", "Copy promocional"],
    context:
      "O cliente precisava de uma campanha rapida e memoravel para vender pacote de internet no periodo da Copa, sem perder clareza de preco e beneficios.",
    challenges: [
      "Conciliar muita informacao regulamentada com leitura em poucos segundos no feed.",
      "Manter consistencia com a marca do provedor e com o clima de evento esportivo.",
    ],
    solution: [
      "Composicao em camadas com foco em atletas, titulo da Copa e bloco de oferta destacado.",
      "CTA e telefone visiveis, com rodape de condicoes em tipografia menor.",
    ],
    results: [
      "Peca pronta para publicacao em formato vertical (45).",
      "Arquivo de camadas separadas para ajustes finos sem refazer o layout do zero.",
    ],
    liveUrl: "",
  },
  {
    slug: "pecas-internet-redes-sociais",
    projectKind: "marketing",
    title: "Pecas para redes — internet residencial",
    shortDescription:
      "Serie de posts para Instagram: instalacao rapida, Wi-Fi 6, planos, streaming e velocidade — linguagem direta para conversao.",
    detailedDescription:
      "Conjunto de criativos em formato feed/stories (45) para divulgar internet residencial. Cada peca trabalha um angulo diferente: familia e entretenimento em qualquer tela, qualidade Wi-Fi 6, comparativo de planos em destaque, instalacao gratis em ate 24h e promessa de navegar no dia seguinte. Visual 3D e fotos reais de tecnico reforcam confianca; botoes e faixas vermelhas conduzem para WhatsApp e assinatura. Ideal para campanhas recorrentes de aquisicao no provedor.",
    thumbnail: "/project-thumbs/marketing/post-planos-destaque.png",
    thumbnailWidth: 3375,
    thumbnailHeight: 4219,
    category: "Marketing e criativo",
    year: 2026,
    impactLabel: "Serie Instagram conversao",
    featured: false,
    stack: ["Instagram", "3D e foto", "Oferta e CTA"],
    context:
      "Provedor de internet precisava de volume de pecas para redes, mantendo padrao visual e mensagens de venda claras.",
    challenges: [
      "Variar o argumento (preco, velocidade, instalacao, Wi-Fi) sem parecer marca diferente a cada post.",
      "Garantir legibilidade de tabelas de plano em tela de celular.",
    ],
    solution: [
      "Templates com mesma logica de CTA, cores e tipografia, mudando apenas o gancho principal.",
      "Uso de mockups 3D, foto de instalacao e cards de plano para diferentes etapas do funil.",
    ],
    results: [
      "Biblioteca de pecas prontas para calendario de posts.",
      "Mensagens alinhadas a objecoes comuns: preco, velocidade, prazo de instalacao e qualidade do Wi-Fi.",
    ],
    liveUrl: "",
    gallery: [
      {
        src: "/project-thumbs/marketing/post-streaming-familia.png",
        alt: "Post — internet para filmes e streaming em qualquer tela",
        width: 3375,
        height: 4219,
      },
      {
        src: "/project-thumbs/marketing/post-wifi6-qualidade.png",
        alt: "Post — Wi-Fi 6 com qualidade, alcance e velocidade",
        width: 3375,
        height: 4219,
      },
    ],
  },
];

/** Largura maxima da peca na pagina de detalhe (evita imagem gigante em PNG 4K). */
export const MARKETING_DETAIL_MAX_WIDTH_PX = 420;

export function isMarketingProject(project: Project): boolean {
  return project.projectKind === "marketing";
}

export function getProjectsByKind(kind: ProjectKind): Project[] {
  return projects.filter((project) => project.projectKind === kind);
}

export function getFeaturedSoftwareProjects(): Project[] {
  return projects.filter(
    (project) => project.featured && project.projectKind === "software",
  );
}

export function getMarketingHighlightProjects(): Project[] {
  return projects.filter(
    (project) =>
      project.projectKind === "marketing" && project.marketingHighlight,
  );
}

export function getProjectLiveLinkLabel(project: Project): string {
  if (project.liveLinkLabel) return project.liveLinkLabel;
  if (project.slug === "cepbot") return "Falar com o bot";
  return "Ver site no ar";
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
