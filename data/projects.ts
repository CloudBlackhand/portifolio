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
      "Disparador de WhatsApp em produção: filas, modelos, controle de carga entre contas e rastreio do que foi enviado.",
    detailedDescription:
      "O MS resolve um problema simples que vira caos rápido: disparar mensagens no WhatsApp sem perder o controle de quem recebeu o quê. Tem fila, modelos de mensagem, envio em massa por Excel, repartição de carga entre até três contas e licença por ativação. Liga em eventos do negócio — etapa de venda, lembrete, confirmação — e registra tudo pra auditoria. Interface desktop, feito pra volume real.",
    thumbnail: "/project-thumbs/ms/ms-envio-massa.png",
    thumbnailWidth: 1919,
    thumbnailHeight: 1030,
    category: "Disparo de mensagens WhatsApp",
    year: 2025,
    impactLabel: "Envio rastreável no canal oficial",
    featured: true,
    stack: ["Node.js", "WhatsApp", "Filas"],
    context:
      "O time disparava tudo manualmente, em planilha e grupo. Não sabia quem já tinha recebido, mandava duplicado, não tinha histórico.",
    challenges: [
      "Controlar fila e evitar disparo duplicado.",
      "Distribuir envio entre várias contas sem estourar limite.",
    ],
    solution: [
      "Fila com modelos e vínculo ao que disparou (venda, cliente, evento).",
      "Log de envio e status pra saber o que saiu e o que falhou.",
    ],
    results: [
      "Disparo previsível, com registro de quem recebeu.",
      "Menos retrabalho manual no dia a dia.",
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
      "Comparador de planos de internet com mapa de cobertura por KML, painel admin e cache.",
    detailedDescription:
      "O Melhor Preço Net compara planos e mostra cobertura no mapa antes da venda. As áreas de cobertura vêm de KML, são validadas com Turf.js e renderizadas no Leaflet — o cliente digita o endereço e vê se tem atendimento naquela rua. Tem painel admin, Prisma com PostgreSQL, Redis de cache e um pouco de Three.js pra dar profundidade visual sem pesar.",
    thumbnail: "/project-thumbs/captures/melhor-preco.png",
    thumbnailWidth: 1919,
    thumbnailHeight: 955,
    category: "Comparador e cobertura",
    year: 2026,
    impactLabel: "Cobertura no mapa antes da venda",
    featured: true,
    stack: ["Next.js", "PostgreSQL", "Leaflet", "Three.js"],
    context:
      "A operação vendia internet mas não tinha como provar que o endereço tinha cobertura — era tudo na fé ou em planilha.",
    challenges: [
      "Cruzar KMLs de cobertura com consulta rápida no mapa.",
      "Manter a comparação de planos consistente pra quem decide compra e revenda.",
    ],
    solution: [
      "Backend com Prisma, Redis de cache e rotas públicas + admin.",
      "Mapa com polígonos de cobertura e fluxo de comparação direto.",
    ],
    results: [
      "Decisão de compra com número e região na mesma tela.",
      "Base pronta pra escalar operadoras e áreas.",
    ],
    liveUrl: "",
  },
  {
    slug: "cepbot",
    projectKind: "software",
    title: "CEPBOT",
    shortDescription:
      "Bot de WhatsApp que consulta cobertura por CEP, mostra planos da região e passa pra humano quando precisa.",
    detailedDescription:
      "O CEPBOT atende o primeiro contato no WhatsApp sozinho: recebe a mensagem, mostra um menu, pede o CEP e verifica se o endereço tem cobertura. Se tiver, mostra os planos daquela região. Se não tiver, ou se o cliente quiser falar com alguém, passa pra equipe. Tem painel pra equipe acompanhar conversas, assumir o atendimento e devolver pro bot quando fizer sentido. Menos pergunta repetitiva, mais agilidade na venda.",
    thumbnail: "/project-thumbs/cepbot.svg",
    category: "Atendimento automatizado WhatsApp",
    year: 2026,
    impactLabel: "Cobertura por CEP no atendimento",
    featured: true,
    stack: ["WhatsApp", "Consulta de CEP", "Painel de atendimento"],
    context:
      "Volume grande de WhatsApp e pouca gente pra atender. A equipe perdia tempo respondendo a mesma coisa: 'tem cobertura na minha rua?'.",
    challenges: [
      "Fazer o cliente informar o CEP corretamente no fluxo do bot.",
      "Passar pra humano sem perder o histórico da conversa.",
    ],
    solution: [
      "Fluxo conversacional com menu, validação de CEP e resposta sobre cobertura e planos.",
      "Painel pra equipe assumir ou devolver conversas ao bot, com histórico completo.",
    ],
    results: [
      "Primeiro atendimento mais rápido e padronizado.",
      "Equipe gasta menos tempo com pergunta repetitiva.",
    ],
    liveUrl: "",
  },
  {
    slug: "instalacao-gratis-rapida",
    projectKind: "marketing",
    title: "Instalação grátis e rápida",
    shortDescription:
      "Post pra Instagram: instalação sem custo, técnico em ação e CTA pra contratar hoje.",
    detailedDescription:
      "Peça vertical pro feed com layout dividido: de um lado notebook, Wi-Fi e copy de instalação grátis; do outro, foto real do técnico crimpando cabo. Faixa vermelha com telefone de contato. A ideia é tirar a objeção de prazo e taxa de instalação logo de cara.",
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
      "Provedor precisava destacar instalação rápida e sem taxa num mercado com concorrência agressiva.",
    challenges: [
      "Juntar foto real (confiança) com 3D (impacto) sem poluir a leitura.",
      "Manter CTA e telefone legíveis no preview pequeno do feed.",
    ],
    solution: [
      "Composição em duas faixas: promessa, benefício e contato na hierarquia certa.",
      "Paleta azul e vermelho alinhada à identidade de telecom.",
    ],
    results: [
      "Peça pronta pra stories e feed no formato 4:5.",
      "Mensagem direta pra quem adia contratação por medo de demora ou taxa.",
    ],
    liveUrl: "",
  },
  {
    slug: "velocidade-contratacao-imediata",
    projectKind: "marketing",
    title: "Velocidade — contrate hoje",
    shortDescription:
      "Criativo 3D com roteador, sinal Wi-Fi e promessa de navegar no dia seguinte. CTA com WhatsApp.",
    detailedDescription:
      "Post de conversão com estética 3D limpa: roteador, ondas de sinal em vermelho metálico e headline sobre velocidade. Faixa de CTA pra contratar hoje e navegar amanhã. WhatsApp visível pra fechar no canal que o público já usa.",
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
      "Provedor precisava de uma peça leve e moderna pra vender velocidade sem jogar tabela de mega na imagem.",
    challenges: [
      "Comunicar velocidade de forma visual, não só com número.",
      "Encaixar CTA e contato sem competir com o título.",
    ],
    solution: [
      "Iconografia 3D de roteador e sinal como metáfora imediata de internet rápida.",
      "Bloco vermelho de CTA e rodapé com WhatsApp pra resposta rápida.",
    ],
    results: [
      "Visual memorável pra repetir no calendário de posts.",
      "Funil curto: impacto visual, CTA, contato.",
    ],
    liveUrl: "",
  },
  {
    slug: "campanha-copa-mundo-2026",
    projectKind: "marketing",
    title: "Copa do Mundo FIFA 2026",
    shortDescription:
      "Campanha visual pra provedor: oferta de fibra + celular com tema Copa, esportes e streaming.",
    detailedDescription:
      "Peça promocional pra redes e materiais digitais na temporada da Copa 2026. O layout vende velocidade, pacote combinado (fibra e móvel) e benefícios de entretenimento (SportTV, YouTube Premium, Vero Vídeo). Hierarquia clara de preço, CTA de assinatura e contato, com identidade vermelha e dourada. A imagem de destaque mostra as camadas separadas do criativo — útil pra revisão interna e pra mostrar o processo de montagem.",
    thumbnail: "/project-thumbs/marketing/copa-2026-camadas.png",
    thumbnailWidth: 3375,
    thumbnailHeight: 4219,
    category: "Marketing e criativo",
    year: 2026,
    impactLabel: "Campanha temática Copa 2026",
    featured: false,
    stack: ["Instagram", "Identidade visual", "Copy promocional"],
    context:
      "O cliente precisava de uma campanha rápida e memorável pra vender pacote de internet na Copa, sem perder clareza de preço e benefícios.",
    challenges: [
      "Cabe muita informação regulamentada em poucos segundos de leitura no feed.",
      "Manter consistência com a marca do provedor e o clima de evento esportivo.",
    ],
    solution: [
      "Composição em camadas com atletas, título da Copa e bloco de oferta destacado.",
      "CTA e telefone visíveis, rodapé de condições em tipografia menor.",
    ],
    results: [
      "Peça pronta pra publicação em formato vertical (4:5).",
      "Arquivo de camadas separadas pra ajuste fino sem refazer o layout do zero.",
    ],
    liveUrl: "",
  },
  {
    slug: "pecas-internet-redes-sociais",
    projectKind: "marketing",
    title: "Peças para redes — internet residencial",
    shortDescription:
      "Série de posts pra Instagram: instalação rápida, Wi-Fi 6, planos, streaming e velocidade.",
    detailedDescription:
      "Conjunto de criativos em formato feed/stories (4:5) pra divulgar internet residencial. Cada peça trabalha um ângulo: família e entretenimento em qualquer tela, Wi-Fi 6, comparativo de planos, instalação grátis em 24h e promessa de navegar no dia seguinte. Visual 3D e fotos reais de técnico pra confiança; botões e faixas vermelhas levam pro WhatsApp e assinatura.",
    thumbnail: "/project-thumbs/marketing/post-planos-destaque.png",
    thumbnailWidth: 3375,
    thumbnailHeight: 4219,
    category: "Marketing e criativo",
    year: 2026,
    impactLabel: "Série Instagram conversão",
    featured: false,
    stack: ["Instagram", "3D e foto", "Oferta e CTA"],
    context:
      "Provedor precisava de volume de peças pra redes, mantendo padrão visual e mensagem de venda clara.",
    challenges: [
      "Variar o argumento (preço, velocidade, instalação, Wi-Fi) sem parecer marca diferente a cada post.",
      "Garantir que tabela de plano seja legível em tela de celular.",
    ],
    solution: [
      "Templates com mesma lógica de CTA, cores e tipografia, mudando só o gancho principal.",
      "Mockups 3D, foto de instalação e cards de plano pra diferentes etapas do funil.",
    ],
    results: [
      "Biblioteca de peças prontas pra calendário de posts.",
      "Mensagens alinhadas às objeções comuns: preço, velocidade, prazo e Wi-Fi.",
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
      "Loja virtual de eletrônicos: vitrine, categorias, ofertas e fluxo de compra. No ar no Netlify.",
    detailedDescription:
      "Site comercial da TechStore — loja de eletrônicos com layout responsivo, vitrine organizada por categorias, destaques promocionais e CTA. Não é uma página única: a estrutura da vitrine foi pensada pra conversão, com navegação por categoria e credibilidade pra quem chega pelo link ou campanha.",
    thumbnail: "/project-thumbs/captures/cltechshop.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Loja virtual",
    year: 2025,
    impactLabel: "E-commerce no ar no Netlify",
    featured: true,
    stack: ["Web", "Netlify", "Vitrine comercial"],
    context:
      "A loja precisava de presença online pra divulgar catálogo e converter visitante em comprador.",
    challenges: [
      "Comunicar variedade de produtos com site leve e fácil de manter.",
      "Manter vitrine e CTA visíveis em mobile e desktop.",
    ],
    solution: [
      "Site com seções de destaque, categorias, benefícios e contato.",
      "Deploy estático no Netlify pra carregamento rápido.",
    ],
    results: [
      "Loja publicada e acessível por URL fixa.",
      "Base pronta pra campanhas e divulgação.",
    ],
    liveUrl: "https://cltechshop.netlify.app",
  },
  {
    slug: "rapidcred",
    projectKind: "landing",
    title: "RapidCred",
    shortDescription:
      "Landing de crédito pessoal: proposta clara, simulação e CTA pra solicitar crédito rápido.",
    detailedDescription:
      "Página de captura pra serviço de crédito com mensagem direta sobre agilidade e simplicidade. Layout pensado pra reduzir fricção na solicitação e passar confiança. Publicada no Netlify pra usar em anúncio e indicação.",
    thumbnail: "/project-thumbs/captures/rapidcred.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Landing page",
    year: 2025,
    impactLabel: "Captação de crédito",
    featured: true,
    stack: ["HTML/CSS", "Netlify", "Landing page"],
    context:
      "Operação de crédito precisava de uma página única pra explicar a oferta e receber contato.",
    challenges: [
      "Explicar o benefício sem parecer genérico.",
      "Destacar o CTA principal sem poluir a leitura.",
    ],
    solution: [
      "Copy objetiva com foco em velocidade e facilidade.",
      "Estrutura enxuta com blocos de confiança e formulário de contato.",
    ],
    results: [
      "Landing no ar pra tráfego pago ou orgânico.",
      "Mensagem consistente em um só link.",
    ],
    liveUrl: "https://rapidcred.netlify.app",
  },
  {
    slug: "cn-construtora",
    projectKind: "landing",
    title: "CN Construtora",
    shortDescription:
      "Site institucional de construtora: serviços, obras e contato pra captar clientes.",
    detailedDescription:
      "Landing institucional da CN Construtora com apresentação dos serviços de construção civil, portfólio resumido e canal de contato. Visual profissional pra passar solidez pra quem chega por indicação ou busca local.",
    thumbnail: "/project-thumbs/captures/cn-construtora.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Landing page",
    year: 2025,
    impactLabel: "Institucional construção civil",
    featured: true,
    stack: ["HTML/CSS", "Netlify", "Landing page"],
    context:
      "Construtora precisava de presença digital simples pra complementar indicações e orçamentos.",
    challenges: [
      "Passar confiança em segmento de ticket alto.",
      "Organizar serviços sem fazer página pesada.",
    ],
    solution: [
      "Seções de serviços, diferenciais e formulário de contato.",
      "Hospedagem estática no Netlify.",
    ],
    results: [
      "Link único pra enviar pra prospects.",
      "Imagem profissional alinhada ao ramo.",
    ],
    liveUrl: "https://cnconstrutora.netlify.app",
  },
  {
    slug: "calculo-juridico-ebook",
    projectKind: "software",
    title: "Cálculo Jurídico — Oliveira & Costa",
    shortDescription:
      "Site comercial da calculadora jurídica: serviços, equipe, depoimentos e formulário pra solicitar demo.",
    detailedDescription:
      "Site completo pra solução Oliveira & Costa de cálculos processuais — prazos, honorários e correção monetária. Tem apresentação da equipe, depoimentos, captura de leads pra demonstração e e-book de cortesia depois do envio do formulário. Funil comercial estruturado pra um produto jurídico B2B.",
    thumbnail: "/project-thumbs/captures/calculo-juridico-ebook.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Software jurídico",
    year: 2024,
    impactLabel: "Funil comercial B2B jurídico",
    featured: true,
    stack: ["Web", "Netlify", "Formulário de leads"],
    context:
      "Escritório e produto jurídico precisavam de um site de vendas consultivo pra advogados interessados em cálculos processuais.",
    challenges: [
      "Conciliar credibilidade técnica com linguagem acessível.",
      "Conduzir o visitante até pedir a demo.",
    ],
    solution: [
      "Seções de serviços, equipe e prova social.",
      "Formulário de demonstração com confirmação pós-envio.",
    ],
    results: [
      "Site publicado em calculojuridicoebook.netlify.app.",
      "Funil claro pra interessados em cálculos processuais.",
    ],
    liveUrl: "https://calculojuridicoebook.netlify.app",
  },
  {
    slug: "vision",
    projectKind: "landing",
    title: "VISION",
    shortDescription:
      "Landing de veículos premium com hero 3D — modelos GLB, pós-processamento e CTA pra WhatsApp.",
    detailedDescription:
      "Site de apresentação pra concessionária premium: hero imersivo com React Three Fiber, modelos BMW em GLB/GLTF, bloom e aberração cromática. O carro em destaque muda a cada visita; embaixo tem seções de financiamento, veículos revisados e entrega nacional. Layout escuro de alto contraste, tipografia forte e fluxo que leva pro WhatsApp. Mais vitrine digital do que catálogo estático.",
    thumbnail: "/project-thumbs/captures/vision.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Landing 3D",
    year: 2026,
    impactLabel: "Hero 3D que vende no clique",
    featured: true,
    stack: ["Next.js", "React Three Fiber", "Three.js", "Tailwind"],
    context:
      "Concessionária precisava de presença digital memorável — mais vitrine cinematográfica do que site de lista de carros.",
    challenges: [
      "Carregar modelos 3D pesados sem travar mobile.",
      "Manter o copy legível sobre cena escura com efeitos de luz.",
    ],
    solution: [
      "Pipeline R3F + drei + postprocessing com loading controlado.",
      "Seções claras de benefício e contato abaixo do hero 3D.",
    ],
    results: [
      "Landing publicada na Vercel com identidade premium.",
      "Hero interativo que reforça posicionamento de seleção exclusiva.",
    ],
    liveUrl: "https://vision-iota-eight.vercel.app",
  },
  {
    slug: "vion",
    projectKind: "landing",
    title: "ViON",
    shortDescription:
      "Site institucional 3D pra operadoras: van de instalação, scroll-driven e pitch de vendas.",
    detailedDescription:
      "ViON é o site de apresentação do modelo comercial pra operadoras parceiras: vendedores fixos no desk e equipe de instalação em campo, operando com a marca da operadora. A experiência é scroll-driven — câmera e cena 3D sincronizam com as seções, inspiradas em referências imersivas como igloo.inc. Tem van de serviço modelada, roteador procedural, partículas, grid de rede, intro animada e post-processing. Stack React + Vite + Three.js + Tailwind v4 + Zustand.",
    thumbnail: "/project-thumbs/captures/vion.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Site institucional 3D",
    year: 2026,
    impactLabel: "Pitch imersivo para operadoras",
    featured: true,
    stack: ["React Three Fiber", "Three.js", "Vite", "Tailwind"],
    context:
      "Operadora precisa entender o modelo ViON — desk + instalação — antes de fechar parceria. PDF e slide não transmitiam a proposta.",
    challenges: [
      "Narrar vendas e instalação numa jornada contínua, sem parecer apresentação corporativa genérica.",
      "Sincronizar scroll HTML com câmera 3D em várias cenas.",
    ],
    solution: [
      "Timeline de scroll com seções Hero, Serviços, Sobre e Contato.",
      "Cena 3D com van, rede e efeitos visuais alinhados à identidade laranja ViON.",
    ],
    results: [
      "Site publicado na Vercel com experiência scroll-driven completa.",
      "Demonstração clara do modelo desk + campo sem expor dados de clientes.",
    ],
    liveUrl: "https://vion-ashen.vercel.app",
  },
  {
    slug: "consultoria-cloud-service",
    projectKind: "consultoria",
    title: "Consultoria técnica e operacional",
    shortDescription:
      "Diagnóstico, arquitetura e acompanhamento pra digitalizar processos com clareza e foco em resultado.",
    detailedDescription:
      "Consultoria pra empresas que precisam sair do improviso: entendemos o processo atual, mapeamos gargalos e propomos solução técnica alinhada ao que o time realmente usa. Atuamos do escopo até a orientação na implementação — integrações, automação, WhatsApp, cadastros e operação do dia a dia — sempre com linguagem acessível pra decisores e respeito a dados e confidencialidade.",
    thumbnail: "/project-thumbs/consultoria.svg",
    category: "Consultoria",
    year: 2026,
    impactLabel: "Processo claro antes do código",
    featured: false,
    stack: ["Diagnóstico", "Arquitetura", "Acompanhamento"],
    context:
      "Muitas operações crescem em planilha, grupo e ferramenta solta até o custo de manter tudo ficar maior que o benefício.",
    challenges: [
      "Traduzir dor de negócio em decisão técnica sem jargão desnecessário.",
      "Priorizar o que traz retorno rápido sem criar dívida técnica evitável.",
    ],
    solution: [
      "Entrevistas curtas, mapa do fluxo atual e proposta de evolução por etapas.",
      "Recomendações práticas sobre stack, integrações e governança de dados.",
    ],
    results: [
      "Cliente entende o caminho antes de investir em desenvolvimento.",
      "Menos retrabalho e mais previsibilidade na entrega.",
    ],
  },
  {
    slug: "topsecret-operacao-comercial",
    projectKind: "topsecret",
    title: "Operação comercial — sigilo",
    shortDescription:
      "Plataforma de vendas e backoffice em produção: funil, financeiro, documentos, equipe com papéis e pós-venda por mensagem — sem exposição pública.",
    detailedDescription:
      "Sistema web que centraliza a rotina comercial de uma operação de serviços: cadastro de oportunidades com formulário completo, aprovação interna, painéis comparando períodos, visão por canal ou parceiro e upload de documentos organizados por tipo. Usuários, logs e permissões em banco relacional; parte do pipeline sincroniza com planilha operacional pra quem edita fora do painel; arquivos em nuvem com pastas por categoria. Tem financeiro, metas, antecipação, pós-venda com mensagens padronizadas, solicitações internas, grupos com permissões e visão em tempo real. Papéis distintos controlam quem vê número, quem aprova negócio e quem dispara mensagem. Por lidar com dados pessoais, contratos e pipeline real, a descrição aqui é só resumo — mostra entrega sem telas, integrações ou identidade do contratante.",
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
      "A operação vivia em planilha solta e grupo de mensagem. Precisava de um funil único, rastreável, com documentos, financeiro e pós-venda integrados — sem vazamento de dados de clientes ou pipeline.",
    challenges: [
      "Manter cadastro rico consistente entre painel web, planilha operacional e repositório de documentos.",
      "Separar permissões entre vendedor, backoffice, financeiro e pós-venda — inclusive envio de mensagens.",
      "Rodar estável na nuvem com autenticação, recuperação de acesso e alertas em tempo real.",
      "Documentar entrega sem publicar capturas, URLs, webhooks ou qualquer dado identificável.",
    ],
    solution: [
      "API REST com papéis explícitos e serviços dedicados pra planilha, arquivos e mensageria.",
      "Interface responsiva com dashboard, listagens paginadas, cadastro unificado e módulos financeiros.",
      "Mensagens operacionais integradas ao fluxo de pós-venda, com sessões restritas por permissão.",
      "Deploy contínuo na nuvem; portfólio limitado ao acordo de sigilo — contexto, abordagem e resultado.",
    ],
    results: [
      "Funil, documentos e financeiro no mesmo ambiente — menos retrabalho entre áreas.",
      "Visibilidade interna de pipeline e desempenho sem export manual diário.",
      "Dados de clientes e identidade da operação preservados fora do site público.",
    ],
  },
  {
    slug: "topsecret-gestao-multiempresa",
    projectKind: "topsecret",
    title: "Gestão multiempresa — sigilo",
    shortDescription:
      "CRM web onde cada empresa opera isolada: vendas, clientes, comissões, financeiro e pós-venda — código privado, dados redigidos.",
    detailedDescription:
      "Plataforma comercial multiempresa: cada organização acessa ambiente próprio, com papéis de proprietário, administrador, gerente e vendedor. Cobre produtos, clientes, registro de vendas, comissões, movimentações financeiras, rotinas de pós-venda, visão gerencial por período e supervisão central pra operadores autorizados. Autenticação persistente, banco relacional com migrations, interface atual e gráficos de acompanhamento. Pode operar em modo demo somente leitura pra apresentações sem gravar dados sensíveis. Repositório privado; deploy preparado com migrações no arranque. Descrevo capacidade e abordagem — nunca CNPJs, credenciais ou capturas reais.",
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
      "Depois de entregar operação vertical em produção, surgiu a necessidade de um produto comercial genérico — escalável por empresa, pronto pra diferentes segmentos.",
    challenges: [
      "Isolar empresas, membros e vendedores sem vazamento cruzado de dados.",
      "Unificar vendas, comissões, financeiro e pós-venda num fluxo coerente.",
      "Permitir demo ou apresentação sem expor gravações reais de clientes.",
    ],
    solution: [
      "Modelo de dados com empresa, venda, comissão, cliente e atividades pós-venda.",
      "Rotas por identificador de empresa, onboarding guiado e supervisão central.",
      "Ambiente somente leitura pra demonstrações; métricas opcionais desacopladas.",
    ],
    results: [
      "Base CRM completa pronta pra demo ou produção com cliente real.",
      "Arquitetura reutilizável pra operações com equipe, comissões e financeiro.",
      "Código e dados permanecem privados; portfólio mostra só o nível executivo.",
    ],
  },
  {
    slug: "topsecret-mensageria-integrada",
    projectKind: "topsecret",
    title: "Mensageria integrada — sigilo",
    shortDescription:
      "Camada própria de API pra WhatsApp corporativo: instâncias, webhooks, filas e integrações HTTPS — base de bots e automações em produção.",
    detailedDescription:
      "Infraestrutura de mensageria mantida em repositório privado: API REST em HTTPS pra criar e gerenciar instâncias, conectar sessões oficiais ou via web, receber eventos por webhooks e integrar bots, filas, armazenamento e ferramentas de atendimento. Persistência relacional, cache e deploy containerizado na nuvem. Alimenta produtos públicos do portfólio e sistemas confidenciais — mas tokens, números conectados, conversas, chaves de API e endpoints internos nunca entram no material aberto. Outras rotinas comerciais usam pilha complementar de envio operacional; mesma exigência de sigilo em ambas.",
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
      "Bots, disparadores e painéis precisavam de mensageria estável e centralizada — sem espalhar sessão em cada produto ou depender de serviço opaco.",
    challenges: [
      "Operar múltiplas instâncias e consumidores sem conflito de sessão ou vazamento entre produtos.",
      "Proteger tokens, webhooks e conteúdo de conversa em produção real.",
      "Manter infra atualizada e observável sem publicar arquitetura interna no portfólio.",
    ],
    solution: [
      "Deploy próprio com autenticação por chave, instâncias nomeadas e eventos por webhook.",
      "Separação clara entre camada de mensageria e produtos de negócio.",
      "Tráfego exclusivamente HTTPS; credenciais restritas ao ambiente autorizado.",
    ],
    results: [
      "Canal previsível pra atendimento automatizado, disparos e integrações corporativas.",
      "Base comprovada pra bots e operações confidenciais — sem evidência sensível pública.",
      "Referência pra quem exige API própria e governança de instâncias.",
    ],
  },
  {
    slug: "topsecret-agendamento-consultas",
    projectKind: "topsecret",
    title: "Agendamento de consultas — sigilo",
    shortDescription:
      "Site e fluxo de marcação pra clínicas e consultórios: agenda, confirmações e dados de pacientes tratados como confidenciais.",
    detailedDescription:
      "Sistemas de agendamento online pra área da saúde: escolha de especialidade ou profissional, horários disponíveis, confirmação por mensagem ou e-mail, lembretes automáticos e painel interno pra recepção remarcar ou bloquear slots. Lida com nome, contato, histórico de consultas e preferências — informação sensível sob LGPD e acordo com o contratante. Descrevo o tipo de entrega (marcação, confirmação, integração com operação) sem publicar marca, telas, URLs ou dados reais de pacientes.",
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
      "Consultórios e clínicas precisam reduzir ligação repetitiva e faltas — com agenda clara pro paciente e controle pra recepção.",
    challenges: [
      "Conciliar disponibilidade real da equipe com autoatendimento simples pra quem marca.",
      "Enviar confirmações e lembretes sem expor dados de pacientes em canal público.",
      "Manter operação alinhada ao que a recepção vê no painel interno.",
    ],
    solution: [
      "Fluxo de marcação em etapas curtas, com validação de horário e confirmação imediata.",
      "Lembretes automáticos e painel pra remarcar, cancelar ou bloquear horários.",
      "Deploy seguro; portfólio limitado à descrição aprovada pelo contratante.",
    ],
    results: [
      "Menos atrito na marcação e menos carga na recepção.",
      "Agenda organizada com confirmações previsíveis.",
      "Dados de pacientes e identidade da clínica fora do catálogo aberto.",
    ],
  },
  {
    slug: "topsecret-locacao-veiculos",
    projectKind: "topsecret",
    title: "Locação de veículos — sigilo",
    shortDescription:
      "Plataforma pra aluguel de carros e motos: frota, reservas, contratos e pagamentos — operação real sob acordo de sigilo.",
    detailedDescription:
      "Sistema pra locadoras de carros e motos: catálogo de veículos por categoria, consulta de disponibilidade, reserva com datas e retirada, registro de contrato, cobrança e status da frota (disponível, reservado, em manutenção). Pode incluir check-list de entrega e devolução, multas ou adicionais e painel operacional pra equipe interna. Trata documentos, pagamentos e dados de locatários como confidenciais. Descrição genérica — sem marca da locadora, placas, telas ou integrações expostas.",
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
      "Locadoras que crescem em planilha e WhatsApp precisam de reserva confiável, frota visível e menos erro manual em alta temporada.",
    challenges: [
      "Evitar double booking quando carro ou moto já está comprometido.",
      "Unificar site público de consulta com rotina interna de entrega e devolução.",
      "Proteger dados de locatários e condições comerciais reais.",
    ],
    solution: [
      "Cadastro de frota com status e calendário de ocupação.",
      "Fluxo de reserva com confirmação e registro de contrato no painel.",
      "Comunicação e pagamento integrados conforme acordo do cliente.",
    ],
    results: [
      "Reservas mais previsíveis e frota visível pra operação.",
      "Menos retrabalho entre site, balcão e financeiro.",
      "Identidade da locadora e dados de clientes preservados no portfólio.",
    ],
  },
  {
    slug: "topsecret-portal-imobiliario",
    projectKind: "topsecret",
    title: "Portal imobiliário — sigilo",
    shortDescription:
      "Site e backoffice pra imobiliárias: imóveis, leads, visitas e documentação — sem exposição de operação ou clientes.",
    detailedDescription:
      "Ecossistema digital pra corretoras e imobiliárias: vitrine de imóveis com filtros, captura de leads, agendamento de visitas, acompanhamento de propostas e repositório de documentos por negócio. Painel interno pra corretores atualizarem status, registrar contatos e priorizar oportunidades. Informações de proprietários, valores negociados e documentos ficam sob sigilo comercial. Mostro capacidade de entrega no segmento — nunca endereços reais, fotos internas, CRM ou identidade do contratante.",
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
      "Imobiliárias dependem de vitrine atualizada e follow-up rápido — mas não podem expor proprietários, valores fechados ou documentos na web aberta.",
    challenges: [
      "Manter vitrine atraente sem vazar dados sensíveis de proprietário ou negociação.",
      "Organizar leads e visitas pra equipe comercial dispersa.",
      "Separar o que é público (anúncio) do que é interno (proposta, documento).",
    ],
    solution: [
      "Site de captura com filtros claros e formulário de interesse.",
      "Painel pra corretores com pipeline, visitas e histórico de contato.",
      "Armazenamento de documentos restrito a quem tem permissão.",
    ],
    results: [
      "Vitrine profissional e leads centralizados.",
      "Menos lead perdido entre anúncio, WhatsApp e planilha.",
      "Operação e clientes preservados fora do portfólio aberto.",
    ],
  },
  {
    slug: "topsecret-autoatendimento",
    projectKind: "topsecret",
    title: "Autoatendimento digital — sigilo",
    shortDescription:
      "Fluxos de autoatendimento web ou totem: filas, formulários, pagamentos e integrações — operação do cliente fora do catálogo público.",
    detailedDescription:
      "Sistemas de autoatendimento pra reduzir fila presencial e liberar equipe: jornadas guiadas por etapas (escolha de serviço, preenchimento, confirmação, pagamento ou emissão de comprovante), integração com backoffice e, quando necessário, mensageria ou impressão. Serve setores como serviços, varejo, utilities ou atendimento público interno — sempre adaptado ao processo do contratante. Dados de quem usa o fluxo e regras comerciais reais permanecem confidenciais. Descrevo o padrão de entrega (fluxo, integração, operação) sem expor telas, totens, URLs ou identidade do cliente.",
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
      "Operações com alto volume de pedido repetitivo precisam de autoatendimento claro — sem depender de atendente pra cada passo simples.",
    challenges: [
      "Traduzir processo burocrático em etapas curtas que qualquer pessoa conclui.",
      "Integrar com sistema legado ou planilha sem quebrar operação existente.",
      "Registrar o que foi feito pra auditoria interna, sem expor isso publicamente.",
    ],
    solution: [
      "Jornadas por etapas com validação e feedback imediato.",
      "Painel interno pra acompanhar fila, exceções e reprocessamento.",
      "Conexão com pagamento, mensagem ou emissão conforme o caso.",
    ],
    results: [
      "Menos fila e menos repetição pro time interno.",
      "Cliente resolve o básico sozinho, no ritmo dele.",
      "Regras e dados da operação mantidos sob sigilo no portfólio.",
    ],
  },
  {
    slug: "erp360",
    projectKind: "software",
    title: "ERP360",
    shortDescription:
      "ERP integrado pra operações de médio porte: vendas, estoque, financeiro, RH e BI num só sistema.",
    detailedDescription:
      "ERP360 junta vendas, compras, estoque, financeiro, RH e dashboards executivos num ambiente só. Cada departamento vê só o que precisa, mas a diretoria tem visão consolidada em tempo real. Feito pra empresa que cresceu usando ferramenta separada e perdia dado entre vendas, estoque e financeiro.",
    thumbnail: "/project-thumbs/erp360.svg",
    category: "ERP",
    year: 2026,
    impactLabel: "Gestão unificada sem planilhas",
    featured: true,
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Redis"],
    context:
      "Empresa de médio porte usava planilhas e sistemas avulsos. Dados se perdiam entre vendas, estoque e financeiro.",
    challenges: [
      "Unificar processos sem parar a operação.",
      "Criar permissões por departamento.",
      "Gerar relatórios consolidados de forma rápida.",
    ],
    solution: [
      "ERP modular com módulos de vendas, compras, estoque, financeiro e RH.",
      "Papéis e aprovações configuráveis por usuário.",
      "Dashboards executivos com KPIs atualizados.",
    ],
    results: [
      "Relatórios que levavam dias gerados em segundos.",
      "Menos retrabalho entre áreas e visão real do lucro.",
    ],
    liveUrl: "",
  },
  {
    slug: "gestor-pro",
    projectKind: "software",
    title: "Gestor Pro",
    shortDescription:
      "ERP enxuto pra pequena empresa que precisa sair do caos do Excel e do WhatsApp.",
    detailedDescription:
      "Gestor Pro é um ERP leve pra pequeno negócio que precisa de controle sem curva de aprendizado. Fluxo de vendas, clientes, contas a pagar, contas a receber e alerta de estoque baixo numa interface direta.",
    thumbnail: "/project-thumbs/gestor-pro.svg",
    category: "ERP leve",
    year: 2026,
    impactLabel: "Controle completo sem complexidade",
    featured: true,
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    context:
      "Pequenos negócios gerenciavam tudo em planilhas e grupos de mensagem, sem controle real.",
    challenges: [
      "Criar interface simples sem perder funcionalidade.",
      "Substituir planilhas de forma natural.",
    ],
    solution: [
      "ERP leve com fluxo de vendas, cadastro de clientes, contas e alertas de estoque.",
      "Relatórios objetivos para o dono do negócio.",
    ],
    results: [
      "Donos passaram a ter controle diário do caixa e do estoque.",
      "Menos esquecimento de contas e prazos.",
    ],
    liveUrl: "",
  },
  {
    slug: "crm-max",
    projectKind: "software",
    title: "CRM Max",
    shortDescription:
      "CRM com funil de vendas, follow-up automático, metas e acompanhamento de equipe em tempo real.",
    detailedDescription:
      "CRM Max organiza o time comercial com funil visual, follow-up automático por WhatsApp, metas individuais e dashboards de conversão. Cada oportunidade tem histórico, próxima ação e alerta de inatividade.",
    thumbnail: "/project-thumbs/crm-max.svg",
    category: "CRM",
    year: 2025,
    impactLabel: "Funil comercial sob controle",
    featured: true,
    stack: ["Next.js", "Node.js", "PostgreSQL", "WhatsApp"],
    context:
      "Time comercial perdia oportunidades por falta de follow-up e não sabia onde estava cada negócio.",
    challenges: [
      "Fazer vendedores atualizarem o funil.",
      "Integrar WhatsApp no fluxo comercial.",
      "Medir conversão por etapa e por vendedor.",
    ],
    solution: [
      "Funil kanban com follow-up automático por WhatsApp.",
      "Metas individuais e dashboard de conversão.",
      "Alertas de inatividade para próxima ação.",
    ],
    results: [
      "Aumento na taxa de conversão.",
      "Menos oportunidades esquecidas no funil.",
    ],
    liveUrl: "",
  },
  {
    slug: "controla-financeiro",
    projectKind: "topsecret",
    title: "Controla Financeiro",
    shortDescription:
      "Controle de contas a pagar, receber, fluxo de caixa e DRE gerada automaticamente.",
    detailedDescription:
      "Sistema financeiro que junta contas a pagar, contas a receber, conciliação, projeção de caixa e DRE. Alerta conta vencida, categoriza receita e despesa e mostra o lucro real do negócio.",
    thumbnail: "/project-thumbs/topsecret-financeiro.svg",
    category: "Gestão financeira",
    year: 2026,
    impactLabel: "DRE e caixa em tempo real",
    featured: false,
    confidential: true,
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    context:
      "Empresa tomava decisões sem saber o lucro real por atraso na conciliação financeira.",
    challenges: [
      "Juntar entradas e saídas de várias fontes.",
      "Gerar DRE confiável.",
      "Alertar contas vencidas.",
    ],
    solution: [
      "Conciliação automática com categorização de receitas e despesas.",
      "Projeção de caixa e DRE gerada instantaneamente.",
      "Alertas de vencimento e inadimplência.",
    ],
    results: [
      "Decisões baseadas em número reais.",
      "Menos inadimplência e lucro líquido claro.",
    ],
    liveUrl: "",
  },
  {
    slug: "stock-control",
    projectKind: "software",
    title: "Stock Control",
    shortDescription:
      "Controle de estoque com alerta de compra, curva ABC, perdas e integração com vendas.",
    detailedDescription:
      "Stock Control dá visibilidade total do estoque: entradas, saídas, curva ABC, ponto de pedido, perdas e integração com vendas. Evita ruptura e também dinheiro parado em produto parado.",
    thumbnail: "/project-thumbs/stock-control.svg",
    category: "Gestão de estoque",
    year: 2025,
    impactLabel: "Estoque sem ruptura nem exagero",
    featured: true,
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    context:
      "Empresa deixava de vender por falta de produto, mas ao mesmo tempo tinha estoque parado.",
    challenges: [
      "Prever demanda e ponto de compra.",
      "Reduzir perdas e quebras.",
      "Integrar estoque com vendas.",
    ],
    solution: [
      "Curva ABC, ponto de pedido automático e auditoria de perdas.",
      "Integração com vendas para atualização em tempo real.",
    ],
    results: [
      "Menos rupturas de venda.",
      "Redução de capital parado em produtos parados.",
    ],
    liveUrl: "",
  },
  {
    slug: "ponto-digital",
    projectKind: "topsecret",
    title: "Ponto Digital",
    shortDescription:
      "Controle de ponto, horas extras, banco de horas e exportação pra folha de pagamento.",
    detailedDescription:
      "Sistema de ponto digital pra empresa que precisa registrar jornada, controlar horas extras, banco de horas e exportar dados pra folha. Registro por geolocalização e relatório por departamento.",
    thumbnail: "/project-thumbs/topsecret-rh.svg",
    category: "RH",
    year: 2026,
    impactLabel: "RH digital e sem planilha",
    featured: false,
    confidential: true,
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    context:
      "RH perdia tempo consolidando ponto em planilhas e discutindo horas com funcionários.",
    challenges: [
      "Criar registro confiável de jornada.",
      "Evitar fraudes no registro.",
      "Integrar com folha de pagamento.",
    ],
    solution: [
      "Registro de ponto por web com geolocalização.",
      "Banco de horas e horas extras automáticos.",
      "Exportação para folha de pagamento.",
    ],
    results: [
      "Fechamento de folha mais rápido.",
      "Menos conflitos sobre horas trabalhadas.",
    ],
    liveUrl: "",
  },
  {
    slug: "service-os",
    projectKind: "topsecret",
    title: "Service OS",
    shortDescription:
      "Gestão de ordens de serviço: técnicos, peças, garantia e acompanhamento em tempo real.",
    detailedDescription:
      "Service OS rastreia cada ordem de serviço do recebimento até a entrega: atribuição de técnicos, controle de peças, garantia, status e aviso automático pro cliente.",
    thumbnail: "/project-thumbs/topsecret-ordemservico.svg",
    category: "Ordens de serviço",
    year: 2026,
    impactLabel: "O.S. sem perder tempo",
    featured: false,
    confidential: true,
    stack: ["Next.js", "Node.js", "PostgreSQL", "WhatsApp"],
    context:
      "Empresa de manutenção perdia O.S. entre atendente, técnico e cliente, sem visão do status.",
    challenges: [
      "Rastrear cada O.S. do início ao fim.",
      "Controlar peças usadas.",
      "Comunicar cliente sobre andamento.",
    ],
    solution: [
      "O.S. com atribuição, status, peças e garantia.",
      "Avisos automáticos por WhatsApp para o cliente.",
    ],
    results: [
      "Menos O.S. esquecidas.",
      "Prazo de atendimento reduzido.",
    ],
    liveUrl: "",
  },
  {
    slug: "fleet-manager",
    projectKind: "software",
    title: "Fleet Manager",
    shortDescription:
      "Controle de veículos, manutenções, combustível, rotas e documentação da frota.",
    detailedDescription:
      "Fleet Manager centraliza a operação de frotas: abastecimento, manutenção preventiva, multas, licenciamento, rotas e custo por veículo. Alerta vencimento e ajuda a reduzir custo operacional.",
    thumbnail: "/project-thumbs/fleet-manager.svg",
    category: "Gestão de frotas",
    year: 2025,
    impactLabel: "Frota organizada e barata",
    featured: false,
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    context:
      "Frota cresceu e faltava controle de custos, manutenções e documentação em dia.",
    challenges: [
      "Controlar abastecimento e manutenção.",
      "Reduzir custo por km.",
      "Alertar vencimentos de documentação.",
    ],
    solution: [
      "Cadastro de veículos com abastecimento, manutenções e custos.",
      "Alertas de vencimento e manutenção preventiva.",
    ],
    results: [
      "Redução de multas e atrasos.",
      "Custo por veículo visível e controlado.",
    ],
    liveUrl: "",
  },
  {
    slug: "contratos-docs",
    projectKind: "topsecret",
    title: "Contratos & Docs",
    shortDescription:
      "Gestão de contratos com alerta de vencimento, aprovações e armazenamento seguro de documentos.",
    detailedDescription:
      "Repositório de contratos e documentos com alerta de vencimento, fluxo de aprovação, versionamento e acesso por permissão. Centraliza a documentação e reduz risco jurídico.",
    thumbnail: "/project-thumbs/topsecret-contratos.svg",
    category: "Gestão de contratos",
    year: 2025,
    impactLabel: "Contratos nunca mais vencidos",
    featured: false,
    confidential: true,
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    context:
      "Empresa descobria contratos vencidos só na cobrança e tinha documentos espalhados.",
    challenges: [
      "Centralizar contratos.",
      "Alertar vencimentos.",
      "Controlar aprovações.",
    ],
    solution: [
      "Repositório de contratos com alertas e aprovações.",
      "Versionamento e lembretes automáticos.",
    ],
    results: [
      "Renovações no prazo.",
      "Documentos centralizados e acesso controlado.",
    ],
    liveUrl: "",
  },
  {
    slug: "business-view",
    projectKind: "software",
    title: "Business View",
    shortDescription:
      "Dashboards executivos com KPIs de vendas, financeiro, estoque e operação em tempo real.",
    detailedDescription:
      "Business View reúne indicadores de vendas, financeiro, estoque e operação em dashboards claros. Ajuda gestor a tomar decisão com dados, não no achismo.",
    thumbnail: "/project-thumbs/business-view.svg",
    category: "BI e dashboards",
    year: 2026,
    impactLabel: "Decisões com dados, não achismo",
    featured: true,
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    context:
      "Gestores tomavam decisões sem saber os números reais por falta de dashboards confiáveis.",
    challenges: [
      "Juntar dados de várias fontes.",
      "Apresentar indicadores de forma simples.",
      "Atualizar dashboards em tempo real.",
    ],
    solution: [
      "BI com dashboards por área e KPIs configuráveis.",
      "Alertas de variação e tendências.",
    ],
    results: [
      "Reuniões mais objetivas.",
      "Gargalos detectados mais rápido.",
    ],
    liveUrl: "",
  },
  {
    slug: "pdv-cloud",
    projectKind: "software",
    title: "PDV Cloud",
    shortDescription:
      "Frente de caixa na nuvem com fiscal, controle de estoque e integração com e-commerce.",
    detailedDescription:
      "PDV Cloud conecta loja física e e-commerce num catálogo só. Emite documento fiscal, atualiza estoque em tempo real e evita erro de preço entre canais.",
    thumbnail: "/project-thumbs/pdv-cloud.svg",
    category: "Ponto de venda",
    year: 2026,
    impactLabel: "Venda online e física integrada",
    featured: true,
    stack: ["Next.js", "Node.js", "PostgreSQL", "API fiscal"],
    context:
      "Loja física e e-commerce usavam sistemas separados. Estoque e preços não conversavam.",
    challenges: [
      "Integrar loja física e online.",
      "Emitir documentos fiscais.",
      "Manter estoque unificado.",
    ],
    solution: [
      "PDV cloud com catálogo unificado e emissão fiscal.",
      "Estoque atualizado em tempo real para todos os canais.",
    ],
    results: [
      "Estoque integrado.",
      "Menos erro de preço e operação unificada.",
    ],
    liveUrl: "",
  },
  {
    slug: "project-hub",
    projectKind: "software",
    title: "Project Hub",
    shortDescription:
      "Gestão de projetos com tarefas, equipe, horas, custos e entregas acompanhadas.",
    detailedDescription:
      "Project Hub acompanha projeto do planejamento à entrega: cronograma, tarefas, alocação de equipe, apontamento de horas e controle de custos. Pra empresa que entrega projeto e precisa saber o lucro de cada um.",
    thumbnail: "/project-thumbs/project-hub.svg",
    category: "Gestão de projetos",
    year: 2026,
    impactLabel: "Projetos no prazo e no custo",
    featured: true,
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    context:
      "Projetos atrasavam e estouravam orçamento por falta de controle de tarefas e horas.",
    challenges: [
      "Acompanhar prazos e entregas.",
      "Controlar horas e custos.",
      "Manter visibilidade do status.",
    ],
    solution: [
      "Cronograma, tarefas, alocação e apontamento de horas.",
      "Acompanhamento de custos e rentabilidade por projeto.",
    ],
    results: [
      "Projetos entregues no prazo.",
      "Controle de rentabilidade por projeto.",
    ],
    liveUrl: "",
  },
  {
    slug: "gps-relevo",
    projectKind: "software",
    title: "GPS Relevo",
    shortDescription:
      "App Android que calcula rota com menos ladeira usando dados de elevação SRTM. Economiza combustível e facilita a vida de condutores.",
    detailedDescription:
      "GPS Relevo é um app Android que faz algo que o GPS comum não faz: em vez de só mostrar a rota mais curta ou mais rápida, ele cruza dados de elevação SRTM com o motor de roteamento e calcula o perfil de relevo de cada trajeto. O condutor recebe três opções — verde (menor relevo), azul (equilibrada) e vermelha (mais curta) — com perfil de elevação visual, estimativa de economia de combustível e tempo. Feito pra caminhoneiro, entregador de van, motoboy e qualquer condutor que sofre com ladeira íngreme, desgaste de freio e consumo elevado. Funciona offline com tiles de elevação cacheados no dispositivo.",
    thumbnail: "/project-thumbs/gps-relevo.svg",
    category: "App Android · GPS por relevo",
    year: 2025,
    impactLabel: "Rotas com menos ladeira e menos combustível",
    featured: true,
    stack: ["Kotlin", "Jetpack Compose", "OSM", "SRTM", "GraphHopper"],
    context:
      "Condutores de caminhão, van e moto precisavam de rota que evitasse ladeira íngreme — o GPS comum só oferece o mais curto ou o mais rápido.",
    challenges: [
      "Processar dados de elevação (SRTM) no dispositivo com performance aceitável.",
      "Calcular declividade real de cada segmento de rota, não só distância.",
      "Funcionar offline em estrada sem sinal.",
      "Comparar rotas de forma clara pra o condutor decidir rápido.",
    ],
    solution: [
      "Motor de roteamento com peso por declividade usando GraphHopper e tiles SRTM.",
      "Três opções de rota (verde/azul/vermelha) com perfil de elevação visual.",
      "Estimativa de economia de combustível comparando desnível total.",
      "Cache offline de tiles de elevação pra uso em estrada sem conexão.",
    ],
    results: [
      "Condutores escolhem rota com até 60% menos desnível acumulado.",
      "Economia de combustível em trajeto com relevo acentuado.",
      "Menos desgaste de freio e embreagem em ladeira íngreme.",
      "App Android nativo com funcionamento offline em estrada.",
    ],
    liveUrl: "",
  },
  {
    slug: "bottique-do-vidro",
    projectKind: "landing",
    title: "Bottique do Vidro",
    shortDescription:
      "Site institucional pra vidraçaria de alto padrão: serviços, diferenciais, portfólio de ambientes e canais de contato.",
    detailedDescription:
      "A Bottique do Vidro é uma vidraçaria de alto padrão que atende residência e comércio com vidro temperado, espelho, esquadria e manutenção. O site mostra serviços claros, diferenciais como experiência e garantia de instalação, portfólio de ambientes transformados e vários canais de atendimento via WhatsApp. Foco em converter visitante em orçamento, sem burocracia.",
    thumbnail: "/project-thumbs/captures/bottique-do-vidro.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Landing page institucional",
    year: 2026,
    impactLabel: "Orçamento claro e contato direto",
    featured: true,
    stack: ["Next.js", "Landing page", "WhatsApp"],
    context:
      "A vidraçaria precisava de presença digital profissional que mostrasse serviço, qualidade do acabamento e facilitasse o primeiro contato.",
    challenges: [
      "Criar landing page que transmita sofisticação e segurança de um serviço técnico.",
      "Mostrar portfólio sem depender de foto própria de obra.",
      "Deixar o contato por WhatsApp acessível em todos os pontos da página.",
    ],
    solution: [
      "Site em Next.js com carregamento rápido e SEO amigável.",
      "Estrutura de seções claras: serviços, diferenciais, portfólio, depoimentos e CTA.",
      "Links diretos pra WhatsApp com opções de atendimento.",
    ],
    results: [
      "Site no ar com identidade clean e foco em conversão.",
      "Cliente entende o serviço e entra em contato em poucos segundos.",
      "Presença digital alinhada com o posicionamento de alto padrão.",
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
