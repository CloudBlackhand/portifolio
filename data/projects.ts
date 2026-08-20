export type ProjectGalleryImage = {
  src: string;
  alt: string;
  /** Largura real do arquivo (evita upscale borrado no layout). */
  width?: number;
  height?: number;
};

export type ProjectKind = "software" | "marketing" | "landing" | "consultoria" | "topsecret";

export type Project = {
  slug: string;
  /** Sistema em produção, landing page, consultoria, trabalho confidencial ou peça de marketing/criativo. */
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
  /** Link público para ver o sistema no ar ou falar com o bot (ex.: site ou WhatsApp). */
  liveUrl?: string;
  /** Texto do botão do link público. Padrão: "Ver site no ar" ou "Bot de atendimento" no CEPBOT. */
  liveLinkLabel?: string;
  /** Destaque na seção de marketing da página inicial (não entra no hero). */
  marketingHighlight?: boolean;
  /** Telas extras na página de detalhe (além da miniatura principal). */
  gallery?: ProjectGalleryImage[];
  /** Dimensões nativas da miniatura (PNG/JPG). Quando definido, o hero não estica além disso. */
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  /** Sem link ou capturas públicas por confidencialidade do cliente ou operação interna. */
  confidential?: boolean;
};

export const projects: Project[] = [
  {
    slug: "msg-sys",
    projectKind: "software",
    title: "MS",
    shortDescription:
      "Disparador de WhatsApp que eu fiz pra parar de mandar msg duplicada em grupo. Fila, modelos, carga entre contas, log de tudo.",
    detailedDescription:
      "O MS nasceu de uma dor real: o time disparava mensagem manualmente, não sabia quem já tinha recebido, mandava duplicado sem querer. Fiz um disparador desktop com fila, modelos de mensagem, envio em massa por Excel e repartição de carga entre até três contas pra não estourar limite. Liga em eventos do negócio (etapa de venda, lembrete, confirmação) e loga tudo — o que saiu, o que falhou, pra quem. Tem licença por ativação.",
    thumbnail: "/project-thumbs/ms/ms-envio-massa.png",
    thumbnailWidth: 1919,
    thumbnailHeight: 1030,
    category: "Disparo de mensagens WhatsApp",
    year: 2025,
    impactLabel: "Envio rastreável no canal oficial",
    featured: true,
    stack: ["Node.js", "WhatsApp", "Filas"],
    context:
      "O time disparava tudo no braço. Mesma mensagem mandada duas vezes pro mesmo cliente, sem histórico de nada.",
    challenges: [
      "Não mandar duplicado quando duas pessoas disparavam ao mesmo tempo.",
      "Distribuir entre contas sem passar do limite do WhatsApp.",
    ],
    solution: [
      "Fila única com lock, modelos e vínculo ao evento que disparou.",
      "Repartição automática entre contas e log de cada envio.",
    ],
    results: [
      "Acabou o disparo duplicado.",
      "O time sabe exatamente o que foi enviado e pra quem.",
    ],
    liveUrl: "",
    gallery: [
      {
        src: "/project-thumbs/ms/ms-conexao-whatsapp.png",
        alt:
          "MS — conexão WhatsApp com até três contas e repartição automática do envio",
        width: 1919,
        height: 1031,
      },
      {
        src: "/project-thumbs/ms/ms-licenca.png",
        alt: "MS — tela de licença e ativação do produto",
        width: 1919,
        height: 1031,
      },
    ],
  },
  {
    slug: "melhor-preco",
    projectKind: "software",
    title: "Melhor Preço Net",
    shortDescription:
      "Comparador de planos de internet com mapa de cobertura. Cliente digita o endereço e vê se tem antes de fechar.",
    detailedDescription:
      "O Melhor Preço Net faz algo que parece óbvio mas ninguém fazia: mostrar no mapa se o endereço tem cobertura antes da venda. As áreas vêm de KML, valido com Turf.js e renderizo no Leaflet. O cliente digita onde mora e vê na hora se atende. Por trás tem Prisma com PostgreSQL, Redis de cache, painel admin e um pouco de Three.js pra dar profundidade sem pesar o mobile.",
    thumbnail: "/project-thumbs/captures/melhor-preco.png",
    thumbnailWidth: 1919,
    thumbnailHeight: 955,
    category: "Comparador e cobertura",
    year: 2026,
    impactLabel: "Cobertura no mapa antes da venda",
    featured: true,
    stack: ["Next.js", "PostgreSQL", "Leaflet", "Three.js"],
    context:
      "Vendiam internet sem saber se o endereço tinha cobertura. Cliente ligava, vendedor dizia 'deixa eu verificar', demorava, às vezes cancelava depois de instalar.",
    challenges: [
      "Cruzar KML de cobertura com consulta rápida no mapa — o polígono é pesado.",
    ],
    solution: [
      "Backend com Prisma e Redis de cache. O mapa carrega só o polígono da região consultada, não tudo.",
    ],
    results: [
      "O cliente vê cobertura na hora, sem depender do vendedor.",
      "Menos cancelamento pós-instalação por endereço fora da área.",
    ],
    liveUrl: "",
  },
  {
    slug: "cepbot",
    projectKind: "software",
    title: "CEPBOT",
    shortDescription:
      "Bot de WhatsApp que pergunta o CEP, diz se tem cobertura e mostra os planos. Passa pra humano se precisar.",
    detailedDescription:
      "O CEPBOT eu fiz porque a equipe respondia 'tem cobertura na minha rua?' o dia todo. O bot pergunta o CEP, verifica no mapa se tem cobertura, mostra os planos da região e pronto. Se o cliente quiser falar com alguém ou se não tiver cobertura, passa pra equipe com o histórico inteiro da conversa. A equipe pode assumir o atendimento no painel e devolver pro bot quando quiser.",
    thumbnail: "/project-thumbs/cepbot.svg",
    category: "Atendimento automatizado WhatsApp",
    year: 2026,
    impactLabel: "Cobertura por CEP no atendimento",
    featured: true,
    stack: ["WhatsApp", "Consulta de CEP", "Painel de atendimento"],
    context:
      "Volume grande de WhatsApp, pouca gente. Metade das mensagens era a mesma pergunta sobre cobertura.",
    challenges: [
      "O cliente às vezes manda o CEP errado ou incompleto — o bot tem que validar e pedir de novo sem ficar chato.",
      "Passar pra humano sem perder o que o bot já conversou.",
    ],
    solution: [
      "Fluxo com validação de CEP e retry amigável.",
      "Painel onde a equipe vê a conversa inteira antes de assumir.",
    ],
    results: [
      "A equipe parou de responder a mesma coisa 50 vezes por dia.",
      "O cliente que tem cobertura fecha mais rápido porque o bot já mostra os planos.",
    ],
    liveUrl: "",
  },
  {
    slug: "instalacao-gratis-rapida",
    projectKind: "marketing",
    title: "Instalação grátis e rápida",
    shortDescription:
      "Post de Instagram: instalação sem custo, foto do técnico e CTA pra contratar hoje.",
    detailedDescription:
      "Peça vertical pro feed. Metade com notebook, Wi-Fi e copy de instalação grátis; metade com foto real do técnico crimpando cabo. Faixa vermelha com telefone. A ideia é matar a objeção de prazo e taxa na primeira imagem.",
    thumbnail: "/project-thumbs/marketing/post-instalacao-rapida.png",
    thumbnailWidth: 3375,
    thumbnailHeight: 4219,
    category: "Marketing e criativo",
    year: 2026,
    impactLabel: "Conversão instalação 24h",
    featured: false,
    marketingHighlight: true,
    stack: ["Instagram", "Foto + 3D", "Copy de oferta"],
    context:
      "Provedor numa guerra de preço com concorrente. O diferencial dele era instalação rápida e grátis, mas ninguém percebia.",
    challenges: [
      "Juntar foto real (confiança) com 3D (impacto) sem virar poluição visual.",
      "Telefone e CTA legíveis no preview minúsculo do feed.",
    ],
    solution: [
      "Layout em duas faixas: promessa em cima, prova embaixo.",
    ],
    results: [
      "Peça pronta pro feed em 4:5.",
      "A objeção de 'demora muito' some na primeira imagem.",
    ],
    liveUrl: "",
  },
  {
    slug: "velocidade-contratacao-imediata",
    projectKind: "marketing",
    title: "Velocidade — contrate hoje",
    shortDescription:
      "Criativo 3D com roteador e sinal Wi-Fi. 'Contrata hoje, navega amanhã.' WhatsApp no CTA.",
    detailedDescription:
      "Post de conversão com estética 3D: roteador, ondas de sinal em vermelho metálico, headline sobre velocidade. Faixa de CTA embaixo com WhatsApp. Feito pra ser leve no feed e direto na mensagem.",
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
      "Provedor queria vender velocidade sem jogar tabela de mega na imagem. Número assusta, visual não.",
    challenges: [
      "Comunicar velocidade sem usar número — todo mundo faz isso e vira poluição.",
    ],
    solution: [
      "Roteador 3D com ondas de sinal como metáfora. CTA vermelho com WhatsApp embaixo.",
    ],
    results: [
      "Peça que dá pra repetir no calendário mudando só a headline.",
    ],
    liveUrl: "",
  },
  {
    slug: "campanha-copa-mundo-2026",
    projectKind: "marketing",
    title: "Copa do Mundo FIFA 2026",
    shortDescription:
      "Campanha de Copa 2026 pra provedor: fibra + celular, esportes e streaming. Vermelho e dourado.",
    detailedDescription:
      "Peça promocional pra Copa do Mundo. O layout vende pacote combinado (fibra + móvel) com benefícios de streaming (SportTV, YouTube Premium, Vero Vídeo). Identidade vermelha e dourada, preço em destaque, CTA de assinatura. A imagem que coloquei no portfólio mostra as camadas separadas — é útil internamente e mostra como o criativo foi montado.",
    thumbnail: "/project-thumbs/marketing/copa-2026-camadas.png",
    thumbnailWidth: 3375,
    thumbnailHeight: 4219,
    category: "Marketing e criativo",
    year: 2026,
    impactLabel: "Campanha temática Copa 2026",
    featured: false,
    stack: ["Instagram", "Identidade visual", "Copy promocional"],
    context:
      "Copa estava chegando e o provedor queria surfar o clima sem parecer que estava forçando.",
    challenges: [
      "Cabe muita informação regulamentada num post de feed — preço, benefícios, condições. Tem que ler em 3 segundos.",
      "Manter a identidade do provedor sem brigar com o tema da Copa.",
    ],
    solution: [
      "Composição em camadas: atletas em cima, oferta no meio, condições no rodapé pequeno.",
    ],
    results: [
      "Peça pronta em 4:5 pro feed.",
      "Arquivo de camadas separadas pra ajustar sem refazer do zero.",
    ],
    liveUrl: "",
  },
  {
    slug: "pecas-internet-redes-sociais",
    projectKind: "marketing",
    title: "Peças para redes — internet residencial",
    shortDescription:
      "Série de posts de Instagram: instalação, Wi-Fi 6, planos, streaming e velocidade. Mesma identidade, ângulos diferentes.",
    detailedDescription:
      "Um conjunto de peças em 4:5 pra feed e stories. Cada uma pega um argumento diferente: família assistindo streaming, Wi-Fi 6 com alcance, comparativo de planos, instalação em 24h. O visual 3D e as fotos de técnico se repetem pra manter identidade, mas o gancho muda. Faixas vermelhas e WhatsApp em todas.",
    thumbnail: "/project-thumbs/marketing/post-planos-destaque.png",
    thumbnailWidth: 3375,
    thumbnailHeight: 4219,
    category: "Marketing e criativo",
    year: 2026,
    impactLabel: "Série Instagram conversão",
    featured: false,
    stack: ["Instagram", "3D e foto", "Oferta e CTA"],
    context:
      "Provedor precisava de volume de post mas sem parecer que cada um foi feito por uma agência diferente.",
    challenges: [
      "Variar o argumento sem perder a identidade visual.",
      "Tabela de plano legível em tela de celular — é pequena.",
    ],
    solution: [
      "Template fixo de CTA, cor e tipografia. Só muda o gancho e a imagem principal.",
    ],
    results: [
      "Biblioteca de peças que dura um mês de calendário.",
      "Cada post ataca uma objeção: preço, velocidade, prazo, Wi-Fi.",
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
  {
    slug: "cltechshop",
    projectKind: "software",
    title: "CL Tech Shop",
    shortDescription:
      "Loja virtual de eletrônicos com vitrine, categorias e fluxo de compra. No ar no Netlify.",
    detailedDescription:
      "Site da TechStore, loja de eletrônicos. Vitrine organizada por categoria, destaques promocionais e CTA de compra. Não é uma página única — a estrutura foi pensada pra conversão, com navegação por categoria e credibilidade pra quem chega por link de campanha.",
    thumbnail: "/project-thumbs/captures/cltechshop.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Loja virtual",
    year: 2025,
    impactLabel: "E-commerce no ar no Netlify",
    featured: true,
    stack: ["Web", "Netlify", "Vitrine comercial"],
    context:
      "A loja não tinha site. Vendia só por WhatsApp e indicava produto por foto.",
    challenges: [
      "Fazer site leve que o dono consegue manter sem depender de mim pra tudo.",
    ],
    solution: [
      "Deploy estático no Netlify. Vitrine com categorias e CTA visível em mobile e desktop.",
    ],
    results: [
      "Loja no ar com URL fixa pra mandar em campanha.",
      "O dono atualiza destaque sem mexer em código.",
    ],
    liveUrl: "https://cltechshop.netlify.app",
  },
  {
    slug: "rapidcred",
    projectKind: "landing",
    title: "RapidCred",
    shortDescription:
      "Landing de crédito pessoal. 'Crédito rápido e fácil.' Simulação e CTA no Netlify.",
    detailedDescription:
      "Página de captura pra serviço de crédito. Mensagem direta: agilidade e simplicidade. Layout enxuto pra reduzir fricção na solicitação e passar confiança. Publicada no Netlify pra usar em anúncio e indicação.",
    thumbnail: "/project-thumbs/captures/rapidcred.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Landing page",
    year: 2025,
    impactLabel: "Captação de crédito",
    featured: true,
    stack: ["HTML/CSS", "Netlify", "Landing page"],
    context:
      "Operação de crédito não tinha página. Mandava PDF no WhatsApp e perdia lead.",
    challenges: [
      "Explicar o benefício sem virar texto de banco — crédito pessoal assusta.",
    ],
    solution: [
      "Copy curta com foco em velocidade. Bloco de confiança e formulário de contato.",
    ],
    results: [
      "Landing no ar pra tráfego pago.",
      "Lead chega pelo formulário em vez de PDF no WhatsApp.",
    ],
    liveUrl: "https://rapidcred.netlify.app",
  },
  {
    slug: "cn-construtora",
    projectKind: "landing",
    title: "CN Construtora",
    shortDescription:
      "Site institucional de construtora. Serviços, obras e contato. No ar no Netlify.",
    detailedDescription:
      "Landing da CN Construtora. Mostra os serviços de construção civil, um portfólio resumido e canal de contato. Visual profissional pra quem chega por indicação ou busca local — em construção, a primeira impressão é tudo.",
    thumbnail: "/project-thumbs/captures/cn-construtora.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Landing page",
    year: 2025,
    impactLabel: "Institucional construção civil",
    featured: true,
    stack: ["HTML/CSS", "Netlify", "Landing page"],
    context:
      "Construtora vivia de indicação. Não tinha site, e o cliente novo não achava nada no Google.",
    challenges: [
      "Construção é ticket alto. O site tem que passar solidez sem parecer barato.",
    ],
    solution: [
      "Página com serviços, diferenciais e formulário. Hospedagem estática no Netlify.",
    ],
    results: [
      "Link único pra mandar no WhatsApp e no Google.",
      "Cliente novo chega e já vê que é serio.",
    ],
    liveUrl: "https://cnconstrutora.netlify.app",
  },
  {
    slug: "calculo-juridico-ebook",
    projectKind: "software",
    title: "Cálculo Jurídico — Oliveira & Costa",
    shortDescription:
      "Site da calculadora jurídica Oliveira & Costa. Serviços, equipe, depoimentos e demo. E-book de cortesia no final.",
    detailedDescription:
      "Site completo pra solução de cálculos processuais — prazos, honorários, correção monetária. Tem apresentação da equipe, depoimentos, captura de lead pra demonstração e e-book de cortesia depois que o visitante manda o formulário. Funil B2B estruturado: o advogado chega, entende, pede demo, recebe e-book.",
    thumbnail: "/project-thumbs/captures/calculo-juridico-ebook.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Software jurídico",
    year: 2024,
    impactLabel: "Funil comercial B2B jurídico",
    featured: true,
    stack: ["Web", "Netlify", "Formulário de leads"],
    context:
      "Escritório tinha um produto jurídico bom mas vendia por reunião e PDF. Não tinha onde o advogado interessado pudesse chegar sozinho.",
    challenges: [
      "Produto jurídico é técnico. O site tem que ser credível sem virar tese de mestrado.",
      "Conduzir o visitante até pedir a demo sem parecer que está empurrando.",
    ],
    solution: [
      "Seções de serviços, equipe e prova social. Formulário de demo com e-book de cortesia no fim.",
    ],
    results: [
      "Site no ar em calculojuridicoebook.netlify.app.",
      "Lead checa sozinho, pede demo quando quer. Menos reunião de qualificação.",
    ],
    liveUrl: "https://calculojuridicoebook.netlify.app",
  },
  {
    slug: "vision",
    projectKind: "landing",
    title: "VISION",
    shortDescription:
      "Landing de veículos premium com hero 3D. Carro BMW em GLB, bloom, aberração cromática. CTA no WhatsApp.",
    detailedDescription:
      "Site de concessionária premium que eu fiz com React Three Fiber. O hero tem modelo BMW em GLB/GLTF com bloom e aberração cromática — o carro em destaque muda a cada visita. Embaixo tem financiamento, veículos revisados e entrega nacional. Layout escuro de alto contraste, tipografia forte. Mais vitrine digital do que catálogo de lista de carro.",
    thumbnail: "/project-thumbs/captures/vision.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Landing 3D",
    year: 2026,
    impactLabel: "Hero 3D que vende no clique",
    featured: true,
    stack: ["Next.js", "React Three Fiber", "Three.js", "Tailwind"],
    context:
      "Concessionária premium não queria site de lista de carro. Queriam algo que passasse a sensação de entrar num showroom.",
    challenges: [
      "Modelo 3D pesado em mobile — não pode travar.",
      "O copy tem que ficar legível sobre uma cena escura com efeito de luz.",
    ],
    solution: [
      "Pipeline R3F + drei + postprocessing com loading controlado. Seções de benefício e contato abaixo do hero.",
    ],
    results: [
      "Landing na Vercel com identidade premium.",
      "O hero interativo já é o pitch — não precisa de texto longo.",
    ],
    liveUrl: "https://vision-iota-eight.vercel.app",
  },
  {
    slug: "vion",
    projectKind: "landing",
    title: "ViON",
    shortDescription:
      "Site institucional 3D pra operadoras. Van de instalação, scroll-driven, pitch do modelo desk + campo.",
    detailedDescription:
      "ViON é o site que eu fiz pra explicar o modelo comercial pra operadoras parceiras: vendedores no desk, equipe de instalação em campo, tudo com a marca da operadora. A experiência é scroll-driven — a câmera 3D sincroniza com as seções, inspirado em igloo.inc. Tem van de serviço modelada, roteador procedural, partículas, grid de rede, intro animada e post-processing. Stack: React + Vite + Three.js + Tailwind v4 + Zustand.",
    thumbnail: "/project-thumbs/captures/vion.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Site institucional 3D",
    year: 2026,
    impactLabel: "Pitch imersivo para operadoras",
    featured: true,
    stack: ["React Three Fiber", "Three.js", "Vite", "Tailwind"],
    context:
      "A operadora não entendia o modelo ViON com PDF e slide. Precisava de algo que mostrasse desk + campo de forma que fizesse sentido em 30 segundos.",
    challenges: [
      "Narrar vendas e instalação numa jornada contínua — não parecer apresentação corporativa.",
      "Sincronizar scroll HTML com câmera 3D em várias cenas sem dar bug.",
    ],
    solution: [
      "Timeline de scroll com seções Hero, Serviços, Sobre e Contato. Cena 3D com van, rede e efeitos alinhados à identidade laranja ViON.",
    ],
    results: [
      "Site na Vercel com experiência scroll-driven completa.",
      "A operadora entende o modelo sem precisar de reunião de 1 hora.",
    ],
    liveUrl: "https://vion-ashen.vercel.app",
  },
  {
    slug: "consultoria-cloud-service",
    projectKind: "consultoria",
    title: "Consultoria técnica e operacional",
    shortDescription:
      "Consultoria: diagnóstico, arquitetura e acompanhamento pra digitalizar processo sem achismo.",
    detailedDescription:
      "Eu faço consultoria pra empresa que cresceu em planilha e grupo de WhatsApp e não sabe mais onde mexer. Entendo o processo atual, mapeio gargalo e proponho solução técnica alinhada ao que o time já usa. Atuo do escopo até a orientação na implementação — integração, automação, WhatsApp, cadastro. Sempre com linguagem acessível pra quem decide e respeito a dados e confidencialidade.",
    thumbnail: "/project-thumbs/consultoria.svg",
    category: "Consultoria",
    year: 2026,
    impactLabel: "Processo claro antes do código",
    featured: false,
    stack: ["Diagnóstico", "Arquitetura", "Acompanhamento"],
    context:
      "Operação cresce em planilha e grupo até o custo de manter tudo ficar maior que o benefício. Aí me chamam.",
    challenges: [
      "Traduzir dor de negócio em decisão técnica sem jargão.",
      "Priorizar o que traz retorno rápido sem criar dívida técnica.",
    ],
    solution: [
      "Entrevista curta, mapa do fluxo atual e proposta de evolução por etapa.",
    ],
    results: [
      "O cliente entende o caminho antes de investir em desenvolvimento.",
      "Menos retrabalho e mais previsibilidade.",
    ],
  },
  {
    slug: "topsecret-operacao-comercial",
    projectKind: "topsecret",
    title: "Operação comercial — sigilo",
    shortDescription:
      "Plataforma de vendas e backoffice em produção. Funil, financeiro, documentos, pós-venda por mensagem. Tudo sob sigilo.",
    detailedDescription:
      "Sistema web que centraliza a rotina comercial de uma operação de serviços. Cadastro de oportunidade com formulário completo, aprovação interna, painel comparando período, visão por canal e upload de documento por tipo. Usuário, log e permissão em banco relacional. Parte do pipeline sincroniza com planilha pra quem edita fora do painel. Arquivo em nuvem com pasta por categoria. Tem financeiro, meta, antecipação, pós-venda com mensagem, solicitação interna, grupo com permissão e visão em tempo real. Papel diferente controla quem vê número, quem aprova negócio e quem dispara mensagem. Por lidar com dado pessoal, contrato e pipeline real, a descrição aqui é resumo — mostra entrega sem telas, integração ou identidade do contratante.",
    thumbnail: "/project-thumbs/topsecret-comercial.svg",
    category: "Sob sigilo",
    year: 2025,
    impactLabel: "Vendas e operação",
    featured: false,
    confidential: true,
    stack: [
      "Node.js",
      "React",
      "PostgreSQL",
      "Planilha sincronizada",
      "Armazenamento em nuvem",
      "Autenticação segura",
      "Mensageria",
    ],
    context:
      "A operação vivia em planilha solta e grupo de mensagem. Não tinha funil único, não tinha rastreio, documento espalhado.",
    challenges: [
      "Manter cadastro rico consistente entre painel web, planilha e repositório de documento.",
      "Separar permissão entre vendedor, backoffice, financeiro e pós-venda — inclusive envio de mensagem.",
      "Documentar a entrega sem publicar captura, URL, webhook ou dado identificável.",
    ],
    solution: [
      "API REST com papel explícito e serviço dedicado pra planilha, arquivo e mensageria.",
      "Mensagem operacional integrada ao pós-venda, com sessão restrita por permissão.",
    ],
    results: [
      "Funil, documento e financeiro no mesmo lugar. Menos retrabalho entre área.",
      "Pipeline visível sem export manual diário.",
      "Dado de cliente e identidade da operação preservados fora do site público.",
    ],
  },
  {
    slug: "topsecret-gestao-multiempresa",
    projectKind: "topsecret",
    title: "Gestão multiempresa — sigilo",
    shortDescription:
      "CRM web multiempresa. Cada empresa opera isolada: venda, cliente, comissão, financeiro e pós-venda. Código privado.",
    detailedDescription:
      "Plataforma comercial onde cada organização acessa ambiente próprio com papel de proprietário, admin, gerente e vendedor. Cobre produto, cliente, venda, comissão, financeiro, pós-venda, visão gerencial por período e supervisão central. Autenticação persistente, banco relacional com migration, gráfico de acompanhamento. Tem modo demo somente leitura pra apresentação sem gravar dado. Repositório privado. Descrevo capacidade — nunca CNPJ, credencial ou captura real.",
    thumbnail: "/project-thumbs/topsecret-multiempresa.svg",
    category: "Sob sigilo",
    year: 2026,
    impactLabel: "CRM por empresa",
    featured: false,
    confidential: true,
    stack: [
      "Next.js",
      "TypeScript",
      "ORM relacional",
      "PostgreSQL",
      "Autenticação moderna",
      "Painéis analíticos",
    ],
    context:
      "Depois de entregar operação vertical em produção, surgiu a necessidade de um produto comercial genérico — escalável por empresa, pronto pra segmento diferente.",
    challenges: [
      "Isolar empresa, membro e vendedor sem vazamento cruzado de dado.",
      "Unificar venda, comissão, financeiro e pós-venda num fluxo que faça sentido.",
    ],
    solution: [
      "Modelo de dados com empresa, venda, comissão, cliente e atividade de pós-venda. Rota por identificador de empresa e onboarding guiado.",
    ],
    results: [
      "Base CRM completa pronta pra demo ou produção.",
      "Arquitetura reutilizável pra operação com equipe, comissão e financeiro.",
    ],
  },
  {
    slug: "topsecret-mensageria-integrada",
    projectKind: "topsecret",
    title: "Mensageria integrada — sigilo",
    shortDescription:
      "API própria de WhatsApp corporativo. Instância, webhook, fila e integração HTTPS. Base de bot e automação em produção.",
    detailedDescription:
      "Infraestrutura de mensageria que mantenho em repositório privado. API REST em HTTPS pra criar e gerenciar instância, conectar sessão oficial ou via web, receber evento por webhook e integrar bot, fila, armazenamento e ferramenta de atendimento. Persistência relacional, cache e deploy containerizado na nuvem. Alimenta produto público do portfólio e sistema confidencial — mas token, número conectado, conversa, chave de API e endpoint interno nunca entram no material aberto.",
    thumbnail: "/project-thumbs/topsecret-mensageria.svg",
    category: "Sob sigilo",
    year: 2025,
    impactLabel: "Canal corporativo",
    featured: false,
    confidential: true,
    stack: [
      "API REST",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Webhooks",
      "HTTPS",
    ],
    context:
      "Bot, disparador e painel precisavam de mensageria estável e centralizada. Cada produto não podia ter sessão de WhatsApp espalhada.",
    challenges: [
      "Operar várias instância e consumidor sem conflito de sessão.",
      "Proteger token, webhook e conteúdo de conversa em produção.",
    ],
    solution: [
      "Deploy próprio com autenticação por chave, instância nomeada e evento por webhook. Tráfego só em HTTPS.",
    ],
    results: [
      "Canal previsível pra atendimento automatizado, disparo e integração corporativa.",
      "Base comprovada pra bot e operação confidencial — sem evidência sensível pública.",
    ],
  },
  {
    slug: "topsecret-agendamento-consultas",
    projectKind: "topsecret",
    title: "Agendamento de consultas — sigilo",
    shortDescription:
      "Site e fluxo de marcação pra clínica e consultório. Agenda, confirmação e lembrete. Dado de paciente sob sigilo.",
    detailedDescription:
      "Sistema de agendamento online pra área de saúde. Escolha de especialidade ou profissional, horário disponível, confirmação por mensagem ou e-mail, lembrete automático e painel interno pra recepção remarcar ou bloquear slot. Lida com nome, contato, histórico de consulta e preferência — tudo sob LGPD e acordo com o contratante. Descrevo o tipo de entrega sem publicar marca, tela, URL ou dado real de paciente.",
    thumbnail: "/project-thumbs/topsecret-saude.svg",
    category: "Sob sigilo",
    year: 2026,
    impactLabel: "Saúde · agenda",
    featured: false,
    confidential: true,
    stack: [
      "Web app",
      "Agenda",
      "Notificações",
      "Painel interno",
      "HTTPS",
    ],
    context:
      "Consultório e clínica perdiam tempo com ligação repetitiva e sofriam com no-show. A recepção não tinha visão da agenda.",
    challenges: [
      "Conciliar disponibilidade real da equipe com autoatendimento simples.",
      "Enviar lembrete sem expor dado de paciente em canal público.",
    ],
    solution: [
      "Fluxo de marcação em etapa curta com validação de horário. Lembrete automático e painel pra remarcar ou bloquear.",
    ],
    results: [
      "Menos ligação repetitiva e menos no-show.",
      "Recepção tem visão da agenda sem consolidar planilha.",
    ],
  },
  {
    slug: "topsecret-locacao-veiculos",
    projectKind: "topsecret",
    title: "Locação de veículos — sigilo",
    shortDescription:
      "Sistema pra locadora de carro e moto. Frota, reserva, contrato e pagamento. Operação real sob sigilo.",
    detailedDescription:
      "Sistema pra locadora: catálogo de veículo por categoria, consulta de disponibilidade, reserva com data e retirada, registro de contrato, cobrança e status da frota (disponível, reservado, em manutenção). Pode incluir check-list de entrega e devolução, multa ou adicional e painel operacional. Documento, pagamento e dado de locatário são confidenciais. Descrição genérica — sem marca, placa, tela ou integração exposta.",
    thumbnail: "/project-thumbs/topsecret-veiculos.svg",
    category: "Sob sigilo",
    year: 2026,
    impactLabel: "Frota · reservas",
    featured: false,
    confidential: true,
    stack: [
      "Web app",
      "Reservas",
      "Contratos",
      "Pagamentos",
      "Painel operacional",
    ],
    context:
      "Locadora cresceu em planilha e WhatsApp. Em alta temporada alugava o mesmo carro duas vezes sem querer.",
    challenges: [
      "Evitar double booking quando o carro ou moto já está comprometido.",
      "Unificar site público de consulta com rotina interna de entrega e devolução.",
    ],
    solution: [
      "Cadastro de frota com status e calendário de ocupação. Reserva com confirmação e registro de contrato no painel.",
    ],
    results: [
      "Acabou o double booking.",
      "Frota visível pra operação sem consolidar planilha.",
    ],
  },
  {
    slug: "topsecret-portal-imobiliario",
    projectKind: "topsecret",
    title: "Portal imobiliário — sigilo",
    shortDescription:
      "Site e backoffice pra imobiliária. Imóvel, lead, visita e documento. Sem expor operação ou cliente.",
    detailedDescription:
      "Ecossistema pra corretora e imobiliária: vitrine de imóvel com filtro, captura de lead, agendamento de visita, acompanhamento de proposta e repositório de documento por negócio. Painel interno pra corretor atualizar status, registrar contato e priorizar oportunidade. Informação de proprietário, valor negociado e documento ficam sob sigilo comercial. Mostro capacidade de entrega — nunca endereço real, foto interna, CRM ou identidade do contratante.",
    thumbnail: "/project-thumbs/topsecret-imobiliaria.svg",
    category: "Sob sigilo",
    year: 2026,
    impactLabel: "Imóveis · leads",
    featured: false,
    confidential: true,
    stack: [
      "Web app",
      "Catálogo",
      "CRM leve",
      "Agenda de visitas",
      "HTTPS",
    ],
    context:
      "Imobiliária dependia de vitrine desatualizada e follow-up no WhatsApp. Lead se perdia entre anúncio, grupo e planilha.",
    challenges: [
      "Manter vitrine atraente sem vazar dado de proprietário ou negociação.",
      "Separar o que é público (anúncio) do que é interno (proposta, documento).",
    ],
    solution: [
      "Site de captura com filtro e formulário. Painel pra corretor com pipeline, visita e histórico. Documento restrito por permissão.",
    ],
    results: [
      "Lead centralizado — não se perde mais entre WhatsApp e planilha.",
      "Vitrine profissional sem expor proprietário ou valor fechado.",
    ],
  },
  {
    slug: "topsecret-autoatendimento",
    projectKind: "topsecret",
    title: "Autoatendimento digital — sigilo",
    shortDescription:
      "Fluxo de autoatendimento web ou totem. Fila, formulário, pagamento e integração. Operação do cliente fora do catálogo.",
    detailedDescription:
      "Sistema de autoatendimento pra reduzir fila presencial e liberar equipe. Jornada guiada por etapa: escolha de serviço, preenchimento, confirmação, pagamento ou emissão de comprovante. Integra com backoffice e, quando precisa, mensageria ou impressão. Serve serviço, varejo, utilities ou atendimento público interno — sempre adaptado ao processo do contratante. Dado de quem usa e regra comercial real são confidenciais. Descrevo o padrão de entrega sem expor tela, totem, URL ou identidade do cliente.",
    thumbnail: "/project-thumbs/topsecret-autoatendimento.svg",
    category: "Sob sigilo",
    year: 2026,
    impactLabel: "Fluxo · self-service",
    featured: false,
    confidential: true,
    stack: [
      "Web app",
      "Fluxos guiados",
      "Filas",
      "Integrações",
      "HTTPS",
    ],
    context:
      "Operação com alto volume de pedido repetitivo. Atendente gastava tempo com coisa que o cliente podia fazer sozinho.",
    challenges: [
      "Traduzir processo burocrático em etapa curta que qualquer pessoa conclui.",
      "Integrar com sistema legado ou planilha sem quebrar o que já funciona.",
    ],
    solution: [
      "Jornada por etapa com validação e feedback imediato. Painel interno pra acompanhar fila e exceção.",
    ],
    results: [
      "Menos fila presencial.",
      "Cliente resolve o básico sozinho, no ritmo dele.",
    ],
  },
  {
    slug: "erp360",
    projectKind: "software",
    title: "ERP360",
    shortDescription:
      "ERP integrado pra médio porte. Venda, estoque, financeiro, RH e BI num sistema só.",
    detailedDescription:
      "ERP360 junta venda, compra, estoque, financeiro, RH e dashboard executivo num ambiente só. Cada departamento vê só o que precisa, mas a diretoria tem visão consolidada em tempo real. Feito pra empresa que cresceu com ferramenta separada e perdia dado entre venda, estoque e financeiro.",
    thumbnail: "/project-thumbs/erp360.svg",
    category: "ERP",
    year: 2026,
    impactLabel: "Gestão unificada sem planilhas",
    featured: true,
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Redis"],
    context:
      "Empresa de médio porte com planilha e sistema avulso. Dado se perdia entre venda, estoque e financeiro. Relatório demorava dia.",
    challenges: [
      "Unificar processo sem parar a operação.",
      "Criar permissão por departamento.",
    ],
    solution: [
      "ERP modular com venda, compra, estoque, financeiro e RH. Papel e aprovação configurável por usuário. Dashboard com KPI atualizado.",
    ],
    results: [
      "Relatório que demorava dia agora sai em segundo.",
      "Diretoria vê lucro real sem consolidar planilha.",
    ],
    liveUrl: "",
  },
  {
    slug: "gestor-pro",
    projectKind: "software",
    title: "Gestor Pro",
    shortDescription:
      "ERP enxuto pra pequeno negócio. Sair do caos do Excel e do WhatsApp sem curva de aprendizado.",
    detailedDescription:
      "Gestor Pro é um ERP leve que eu fiz pra pequeno negócio que precisa de controle mas não tem tempo pra aprender sistema complexo. Fluxo de venda, cliente, conta a pagar, conta a receber e alerta de estoque baixo. Interface direta, sem recurso que pequeno negócio não usa.",
    thumbnail: "/project-thumbs/gestor-pro.svg",
    category: "ERP leve",
    year: 2026,
    impactLabel: "Controle completo sem complexidade",
    featured: true,
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    context:
      "Pequeno negócio gerenciava tudo em planilha e grupo de mensagem. Não tinha controle de nada, esquecia conta e prazo.",
    challenges: [
      "Fazer interface simples sem perder funcionalidade essencial.",
      "O dono não vai aprender sistema complexo — tem que ser óbvio.",
    ],
    solution: [
      "ERP leve com venda, cliente, conta e alerta de estoque. Relatório direto pra dono: quanto entrou, quanto saiu, quanto tem.",
    ],
    results: [
      "Dono passou a ter controle diário de caixa e estoque.",
      "Acabou o esquecimento de conta e prazo.",
    ],
    liveUrl: "",
  },
  {
    slug: "crm-max",
    projectKind: "software",
    title: "CRM Max",
    shortDescription:
      "CRM com funil de venda, follow-up automático por WhatsApp, meta e dashboard de conversão.",
    detailedDescription:
      "CRM Max organiza o time comercial com funil visual, follow-up automático por WhatsApp, meta individual e dashboard de conversão. Cada oportunidade tem histórico, próxima ação e alerta de inatividade. O vendedor não precisa lembrar de dar retorno — o sistema cobra.",
    thumbnail: "/project-thumbs/crm-max.svg",
    category: "CRM",
    year: 2025,
    impactLabel: "Funil comercial sob controle",
    featured: true,
    stack: ["Next.js", "Node.js", "PostgreSQL", "WhatsApp"],
    context:
      "Time comercial perdia oportunidade porque ninguém dava follow-up. Não sabia onde estava cada negócio.",
    challenges: [
      "Fazer vendedor atualizar o funil — eles odeiam isso.",
      "Integrar WhatsApp no fluxo sem virar caos.",
    ],
    solution: [
      "Funil kanban com follow-up automático por WhatsApp. Meta individual e alerta de inatividade. O sistema cobra o vendedor, não o contrário.",
    ],
    results: [
      "Menos oportunidade esquecida no funil.",
      "Conversão subiu porque o follow-up passou a acontecer.",
    ],
    liveUrl: "",
  },
  {
    slug: "controla-financeiro",
    projectKind: "topsecret",
    title: "Controla Financeiro",
    shortDescription:
      "Sistema financeiro: conta a pagar, receber, conciliação, projeção de caixa e DRE automática.",
    detailedDescription:
      "Controla Financeiro junta conta a pagar, conta a receber, conciliação, projeção de caixa e DRE. Alerta conta vencida, categoriza receita e despesa e mostra o lucro real — não o que o dono acha que é.",
    thumbnail: "/project-thumbs/topsecret-financeiro.svg",
    category: "Gestão financeira",
    year: 2026,
    impactLabel: "DRE e caixa em tempo real",
    featured: false,
    confidential: true,
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    context:
      "Empresa tomava decisão sem saber o lucro real. A conciliação financeira atrasava mês.",
    challenges: [
      "Juntar entrada e saída de várias fonte.",
      "Gerar DRE confiável sem planilha manual.",
    ],
    solution: [
      "Conciliação automática com categorização. DRE gerada instantaneamente. Alerta de vencimento e inadimplência.",
    ],
    results: [
      "Decisão com número real, não com achismo.",
      "Lucro líquido claro e inadimplência sob controle.",
    ],
    liveUrl: "",
  },
  {
    slug: "stock-control",
    projectKind: "software",
    title: "Stock Control",
    shortDescription:
      "Controle de estoque com curva ABC, ponto de pedido, perda e integração com venda.",
    detailedDescription:
      "Stock Control dá visibilidade total do estoque: entrada, saída, curva ABC, ponto de pedido, perda e integração com venda. O problema clássico — deixava de vender por falta de produto mas tinha dinheiro parado em produto parado.",
    thumbnail: "/project-thumbs/stock-control.svg",
    category: "Gestão de estoque",
    year: 2025,
    impactLabel: "Estoque sem ruptura nem exagero",
    featured: true,
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    context:
      "Empresa deixava de vender por falta de produto. Ao mesmo tempo, tinha produto parado no estoque há mês.",
    challenges: [
      "Prever demanda e ponto de compra sem achismo.",
      "Reduzir perda e quebra.",
    ],
    solution: [
      "Curva ABC, ponto de pedido automático e auditoria de perda. Integração com venda pra atualizar em tempo real.",
    ],
    results: [
      "Menos ruptura de venda.",
      "Menos dinheiro parado em produto que não sai.",
    ],
    liveUrl: "",
  },
  {
    slug: "ponto-digital",
    projectKind: "topsecret",
    title: "Ponto Digital",
    shortDescription:
      "Ponto digital com hora extra, banco de hora e exportação pra folha de pagamento.",
    detailedDescription:
      "Sistema de ponto digital pra registrar jornada, controlar hora extra e banco de hora e exportar pra folha. Registro por geolocalização e relatório por departamento.",
    thumbnail: "/project-thumbs/topsecret-rh.svg",
    category: "RH",
    year: 2026,
    impactLabel: "RH digital e sem planilha",
    featured: false,
    confidential: true,
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    context:
      "RH perdia tempo consolidando ponto em planilha e discutia hora com funcionário todo mês.",
    challenges: [
      "Criar registro confiável de jornada.",
      "Evitar fraude no registro.",
    ],
    solution: [
      "Registro de ponto por web com geolocalização. Banco de hora e hora extra automático. Exportação pra folha.",
    ],
    results: [
      "Fechamento de folha mais rápido.",
      "Menos conflito sobre hora trabalhada.",
    ],
    liveUrl: "",
  },
  {
    slug: "service-os",
    projectKind: "topsecret",
    title: "Service OS",
    shortDescription:
      "Gestão de ordem de serviço. Técnico, peça, garantia e acompanhamento em tempo real.",
    detailedDescription:
      "Service OS rastreia cada O.S. do recebimento até a entrega: atribuição de técnico, controle de peça, garantia, status e aviso automático pro cliente. A empresa de manutenção não perde mais O.S. entre atendente, técnico e cliente.",
    thumbnail: "/project-thumbs/topsecret-ordemservico.svg",
    category: "Ordens de serviço",
    year: 2026,
    impactLabel: "O.S. sem perder tempo",
    featured: false,
    confidential: true,
    stack: ["Next.js", "Node.js", "PostgreSQL", "WhatsApp"],
    context:
      "Empresa de manutenção perdia O.S. entre atendente, técnico e cliente. Ninguém sabia o status de nada.",
    challenges: [
      "Rastrear cada O.S. do início ao fim.",
      "Comunicar cliente sobre andamento sem ligação manual.",
    ],
    solution: [
      "O.S. com atribuição, status, peça e garantia. Aviso automático por WhatsApp pro cliente em cada etapa.",
    ],
    results: [
      "Menos O.S. esquecida.",
      "Prazo de atendimento reduzido porque ninguém precisa ligar pra saber status.",
    ],
    liveUrl: "",
  },
  {
    slug: "fleet-manager",
    projectKind: "software",
    title: "Fleet Manager",
    shortDescription:
      "Controle de frota: veículo, manutenção, combustível, rota e documentação.",
    detailedDescription:
      "Fleet Manager centraliza a operação de frota: abastecimento, manutenção preventiva, multa, licenciamento, rota e custo por veículo. Alerta vencimento e ajuda a reduzir custo operacional.",
    thumbnail: "/project-thumbs/fleet-manager.svg",
    category: "Gestão de frotas",
    year: 2025,
    impactLabel: "Frota organizada e barata",
    featured: false,
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    context:
      "Frota cresceu e perdeu controle. Multa por documento vencido, manutenção atrasada, custo por km invisível.",
    challenges: [
      "Controlar abastecimento e manutenção sem planilha.",
      "Alertar vencimento de documento antes da multa.",
    ],
    solution: [
      "Cadastro de veículo com abastecimento, manutenção e custo. Alerta de vencimento e manutenção preventiva.",
    ],
    results: [
      "Menos multa e atraso de documento.",
      "Custo por veículo visível — dá pra saber qual tá comendo dinheiro.",
    ],
    liveUrl: "",
  },
  {
    slug: "contratos-docs",
    projectKind: "topsecret",
    title: "Contratos & Docs",
    shortDescription:
      "Repositório de contrato com alerta de vencimento, aprovação e versionamento.",
    detailedDescription:
      "Contratos & Docs centraliza contrato e documento com alerta de vencimento, fluxo de aprovação, versionamento e acesso por permissão. A empresa não descobre mais contrato vencido na hora da cobrança.",
    thumbnail: "/project-thumbs/topsecret-contratos.svg",
    category: "Gestão de contratos",
    year: 2025,
    impactLabel: "Contratos nunca mais vencidos",
    featured: false,
    confidential: true,
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    context:
      "Empresa descobria contrato vencido só na cobrança. Documento espalhado em e-mail, pasta e gaveta.",
    challenges: [
      "Centralizar contrato em lugar só.",
      "Alertar vencimento antes de virar problema.",
    ],
    solution: [
      "Repositório com alerta e aprovação. Versionamento e lembrete automático.",
    ],
    results: [
      "Renovação no prazo.",
      "Documento centralizado e acesso controlado.",
    ],
    liveUrl: "",
  },
  {
    slug: "business-view",
    projectKind: "software",
    title: "Business View",
    shortDescription:
      "Dashboard executivo com KPI de venda, financeiro, estoque e operação em tempo real.",
    detailedDescription:
      "Business View reúne indicador de venda, financeiro, estoque e operação em dashboard claro. Ajuda gestor a decidir com dado, não no achismo.",
    thumbnail: "/project-thumbs/business-view.svg",
    category: "BI e dashboards",
    year: 2026,
    impactLabel: "Decisões com dados, não achismo",
    featured: true,
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    context:
      "Gestor tomava decisão sem saber o número real. Não tinha dashboard confiável, só planilha desatualizada.",
    challenges: [
      "Juntar dado de várias fonte num dashboard só.",
      "Atualizar em tempo real sem travar.",
    ],
    solution: [
      "BI com dashboard por área e KPI configurável. Alerta de variação e tendência.",
    ],
    results: [
      "Reunião mais objetiva — decisão com número, não com palpite.",
      "Gargalo detectado mais rápido.",
    ],
    liveUrl: "",
  },
  {
    slug: "pdv-cloud",
    projectKind: "software",
    title: "PDV Cloud",
    shortDescription:
      "Frente de caixa na nuvem com fiscal, estoque e integração com e-commerce.",
    detailedDescription:
      "PDV Cloud conecta loja física e e-commerce num catálogo só. Emite documento fiscal, atualiza estoque em tempo real e evita erro de preço entre canal.",
    thumbnail: "/project-thumbs/pdv-cloud.svg",
    category: "Ponto de venda",
    year: 2026,
    impactLabel: "Venda online e física integrada",
    featured: true,
    stack: ["Next.js", "Node.js", "PostgreSQL", "API fiscal"],
    context:
      "Loja física e e-commerce usavam sistema separado. Estoque não conversava, preço era diferente entre canal.",
    challenges: [
      "Integrar loja física e online num catálogo só.",
      "Emitir documento fiscal sem erro.",
    ],
    solution: [
      "PDV cloud com catálogo unificado e emissão fiscal. Estoque atualizado em tempo real pra todos os canal.",
    ],
    results: [
      "Estoque integrado — não vende mais o que não tem.",
      "Preço igual entre loja física e online.",
    ],
    liveUrl: "",
  },
  {
    slug: "project-hub",
    projectKind: "software",
    title: "Project Hub",
    shortDescription:
      "Gestão de projeto com tarefa, equipe, hora, custo e entrega.",
    detailedDescription:
      "Project Hub acompanha projeto do planejamento à entrega: cronograma, tarefa, alocação de equipe, apontamento de hora e controle de custo. Pra empresa que entrega projeto e precisa saber o lucro de cada um.",
    thumbnail: "/project-thumbs/project-hub.svg",
    category: "Gestão de projetos",
    year: 2026,
    impactLabel: "Projetos no prazo e no custo",
    featured: true,
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    context:
      "Projeto atrasava e estourava orçamento porque ninguém controlava tarefa e hora.",
    challenges: [
      "Acompanhar prazo e entrega sem planilha.",
      "Controlar hora e custo do projeto.",
    ],
    solution: [
      "Cronograma, tarefa, alocação e apontamento de hora. Acompanhamento de custo e rentabilidade por projeto.",
    ],
    results: [
      "Projeto entregue no prazo.",
      "Sabe o lucro de cada projeto — não só no fim do mês.",
    ],
    liveUrl: "",
  },
  {
    slug: "gps-relevo",
    projectKind: "software",
    title: "GPS Relevo",
    shortDescription:
      "App Android que calcula rota com menos ladeira usando dado de elevação SRTM. Pra caminhoneiro, van e moto.",
    detailedDescription:
      "GPS Relevo é um app Android que faz algo que o GPS comum não faz: em vez de só mostrar a rota mais curta ou mais rápida, ele cruza dado de elevação SRTM com o motor de roteamento e calcula o perfil de relevo de cada trajeto. O condutor recebe três opção — verde (menor relevo), azul (equilibrada) e vermelha (mais curta) — com perfil de elevação visual, estimativa de economia de combustível e tempo. Eu fiz pra caminhoneiro, entregador de van, motoboy e qualquer condutor que sofre com ladeira íngreme, desgaste de freio e consumo elevado. Funciona offline com tile de elevação cacheado no dispositivo.",
    thumbnail: "/project-thumbs/gps-relevo.svg",
    category: "App Android · GPS por relevo",
    year: 2025,
    impactLabel: "Rotas com menos ladeira e menos combustível",
    featured: true,
    stack: ["Kotlin", "Jetpack Compose", "OSM", "SRTM", "GraphHopper"],
    context:
      "Condutores de caminhão, van e moto não tinham opção de rota que evitasse ladeira. O GPS comum só oferece o mais curto ou o mais rápido.",
    challenges: [
      "Processar dado de elevação (SRTM) no dispositivo sem travar.",
      "Calcular declividade real de cada segmento de rota, não só distância.",
      "Funcionar offline em estrada sem sinal.",
    ],
    solution: [
      "Motor de roteamento com peso por declividade usando GraphHopper e tile SRTM. Três opção de rota com perfil de elevação visual e cache offline.",
    ],
    results: [
      "Condutor escolhe rota com até 60% menos desnível acumulado.",
      "Economia de combustível em trajeto com relevo acentuado.",
      "Menos desgaste de freio e embreagem em ladeira íngreme.",
    ],
    liveUrl: "",
  },
  {
    slug: "bottique-do-vidro",
    projectKind: "landing",
    title: "Bottique do Vidro",
    shortDescription:
      "Site institucional pra vidraçaria de alto padrão. Serviço, portfólio de ambiente e WhatsApp.",
    detailedDescription:
      "A Bottique do Vidro é vidraçaria de alto padrão que atende residência e comércio com vidro temperado, espelho, esquadria e manutenção. O site mostra serviço claro, diferencial como experiência e garantia de instalação, portfólio de ambiente transformado e canal de WhatsApp. Foco em converter visitante em orçamento, sem burocracia.",
    thumbnail: "/project-thumbs/captures/bottique-do-vidro.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Landing page institucional",
    year: 2026,
    impactLabel: "Orçamento claro e contato direto",
    featured: true,
    stack: ["Next.js", "Landing page", "WhatsApp"],
    context:
      "Vidraçaria de alto padrão não tinha site. Cliente chegava por indicação mas não tinha onde ver o trabalho antes de pedir orçamento.",
    challenges: [
      "Passar sofisticação e segurança de serviço técnico numa landing.",
      "Mostrar portfólio sem depender de foto própria de obra.",
    ],
    solution: [
      "Site em Next.js com seção clara: serviço, diferencial, portfólio, depoimento e CTA. WhatsApp acessível em todo ponto da página.",
    ],
    results: [
      "Site no ar com identidade clean e foco em conversão.",
      "Cliente entende o serviço e pede orçamento em poucos segundo.",
    ],
    liveUrl: "https://bottiquedovidro.vercel.app/",
  },
];

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

export function getFeaturedSoftwareProjects(): Project[] {
  return getCatalogProjects().filter(
    (project) => project.featured && project.projectKind === "software",
  );
}

/** Hero e faixa de favoritos: landing pages primeiro, depois sistemas em destaque. */
export function getShowcaseProjects(list: Project[] = projects): Project[] {
  const publicList = list.filter(
    (project) => !isTopSecretProject(project) && !isConfidentialProject(project),
  );
  const landings = publicList.filter(
    (project) => project.featured && project.projectKind === "landing",
  );
  const software = publicList.filter(
    (project) => project.featured && project.projectKind === "software",
  );
  return [...landings, ...software];
}

export function getMarketingHighlightProjects(): Project[] {
  return projects.filter(
    (project) =>
      project.projectKind === "marketing" && project.marketingHighlight,
  );
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
