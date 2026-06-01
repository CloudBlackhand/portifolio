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
      "Disparador de mensagens WhatsApp em produção: filas, modelos, regras e rastreio do que foi enviado.",
    detailedDescription:
      "O MS é o produto que operacionaliza o envio pelo WhatsApp: quem dispara, para quem, com qual modelo, em que ordem e com registro do resultado. Centraliza filas, evita disparo duplicado sem querer e dá visibilidade do que saiu do canal oficial — conectado a eventos de negócio (por exemplo, etapa de venda, lembrete, confirmação). Não é um rótulo genérico de automação: é um disparador de mensagens com governança, desenhado para volume real e para integrar com o restante do ecossistema (incluindo a base de API e cadastros). Interface desktop com envio em massa (Excel, atrasos e lotes), até três contas com repartição de carga e fluxo de licença.",
    thumbnail: "/project-thumbs/ms/ms-envio-massa.png",
    thumbnailWidth: 1919,
    thumbnailHeight: 1030,
    category: "Disparo de mensagens WhatsApp",
    year: 2025,
    impactLabel: "Envio rastreável no canal oficial",
    featured: true,
    stack: ["Node.js", "WhatsApp", "Filas"],
    context:
      "A operação precisava sair de envios manuais e planilhas para um disparador único, com fila, modelo e histórico do que foi enviado a cada contato.",
    challenges: [
      "Garantir ordem, idempotência e rastreio em disparos em escala.",
      "Conectar regras de negócio ao canal sem expor o time a erros de destino ou texto.",
    ],
    solution: [
      "Camada de disparo com filas, modelos e vínculo a entidades do sistema (venda, cliente, evento).",
      "Registro de envio e status para auditoria e suporte operacional.",
    ],
    results: [
      "Mensagens saindo pelo canal oficial com previsibilidade e registro.",
      "Menos retrabalho e menos dependência de atalho manual no dia a dia.",
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
      "Comparador de planos de internet com mapa de cobertura por KML, cache e painel admin para operação comercial.",
    detailedDescription:
      "O Melhor Preço Net reúne comparação de planos, margem e decisão de compra em um fluxo web completo. O diferencial é a cobertura geográfica: áreas importadas em KML, validação com Turf.js e visualização no mapa com Leaflet — o cliente vê se o endereço está atendido antes de fechar. Há autenticação, painel administrativo, Prisma com PostgreSQL, Redis para cache e interface atual com componentes reutilizáveis. Parte da experiência usa Three.js para dar profundidade visual sem perder velocidade no operacional.",
    thumbnail: "/project-thumbs/captures/melhor-preco.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Comparador e cobertura",
    year: 2026,
    impactLabel: "Cobertura no mapa antes da venda",
    featured: true,
    stack: ["Next.js", "PostgreSQL", "Leaflet", "Three.js"],
    context:
      "Operação de internet precisava comparar planos e provar cobertura por região — não só tabela de preço em planilha.",
    challenges: [
      "Cruzar KMLs de cobertura com consulta rápida no mapa.",
      "Manter comparação de planos consistente para quem decide compra e revenda.",
    ],
    solution: [
      "Backend com Prisma, cache Redis e rotas públicas + admin.",
      "Mapa interativo com polígonos de cobertura e fluxo de comparação objetivo.",
    ],
    results: [
      "Decisão de compra e precificação com número e região na mesma tela.",
      "Base pronta para escalar operadoras e áreas atendidas.",
    ],
    liveUrl: "https://melhorpreconet.up.railway.app",
  },
  {
    slug: "cepbot",
    projectKind: "software",
    title: "CEPBOT",
    shortDescription:
      "Bot de atendimento no WhatsApp que consulta cobertura por CEP, apresenta planos da região e encaminha para humano quando necessário.",
    detailedDescription:
      "O CEPBOT automatiza o primeiro contato com o cliente pelo WhatsApp: recebe a mensagem, mostra um menu claro e conduz a conversa sem depender de alguém online o tempo todo. Quando o cliente informa o CEP, o sistema verifica se o endereço está dentro da área de cobertura e, se estiver, apresenta os planos disponíveis para aquela região. Se não houver cobertura ou o cliente preferir falar com uma pessoa, o atendimento é transferido para a equipe humana. Um painel administrativo permite acompanhar conversas, assumir o atendimento manualmente e devolver o fluxo ao bot quando fizer sentido. O objetivo é vender com mais agilidade, reduzir respostas repetitivas e manter a experiência organizada do início ao fim.",
    thumbnail: "/project-thumbs/cepbot.svg",
    category: "Atendimento automatizado WhatsApp",
    year: 2026,
    impactLabel: "Cobertura por CEP no atendimento",
    featured: true,
    stack: ["WhatsApp", "Consulta de CEP", "Painel de atendimento"],
    context:
      "A operação precisava atender volume no WhatsApp sem perder qualidade: validar cobertura por região e mostrar oferta certa antes de envolver um vendedor.",
    challenges: [
      "Garantir que o cliente entenda o menu e informe o CEP corretamente.",
      "Combinar atendimento automático com handoff humano sem perder o histórico da conversa.",
    ],
    solution: [
      "Fluxo conversacional com menu, validação de CEP e resposta sobre cobertura e planos.",
      "Painel para a equipe assumir ou devolver conversas ao bot com registro completo.",
    ],
    results: [
      "Primeiro atendimento mais rápido e padronizado no WhatsApp.",
      "Menos tempo da equipe em perguntas repetitivas de cobertura e planos.",
    ],
    liveUrl:
      "https://wa.me/5519989834581?text=Ola%2C%20vim%20pelo%20site%20Cloud%20Service%20e%20quero%20conhecer%20o%20CEPBOT",
    liveLinkLabel: "Bot de atendimento",
  },
  {
    slug: "instalacao-gratis-rapida",
    projectKind: "marketing",
    title: "Instalação grátis e rápida",
    shortDescription:
      "Post para Instagram: instalação sem custo, técnico em ação e CTA para contratar hoje e navegar amanhã.",
    detailedDescription:
      "Peça vertical para feed com layout dividido: lado ilustrado com notebook, Wi-Fi e copy de instalação grátis; lado com foto real do técnico crimpando cabo. Reforça urgência com faixa vermelha e telefone de contato. Foco em remover objeção de prazo e custo de instalação no provedor de internet.",
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
      "Campanha para provedor que precisava destacar instalação rápida e sem taxa em meio à concorrência agressiva.",
    challenges: [
      "Unir confiança (foto real) com impacto visual (3D) sem poluir a leitura.",
      "Manter CTA e telefone legíveis em preview pequeno do feed.",
    ],
    solution: [
      "Composição em duas faixas com hierarquia clara: promessa, benefício e contato.",
      "Paleta azul e vermelho alinhada à identidade de telecom.",
    ],
    results: [
      "Peça pronta para stories e feed no formato 4:5.",
      "Mensagem direta para quem adia a contratação por medo de demora ou taxa.",
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
      "Post de conversão com estética 3D limpa: roteador, ondas de sinal em vermelho metálico e headline sobre velocidade. Faixa de CTA reforça contratação no mesmo dia com resultado no dia seguinte. WhatsApp visível para fechar no canal que o público já usa. Ideal para campanhas de aquisição rápida no Instagram.",
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
      "Provedor precisava de peça leve e moderna para vender velocidade sem tabela complexa na imagem.",
    challenges: [
      "Comunicar velocidade de forma visual, não só com números de mega.",
      "Encaixar CTA e contato sem competir com o título principal.",
    ],
    solution: [
      "Iconografia 3D de roteador e sinal como metáfora imediata de internet rápida.",
      "Bloco vermelho de CTA e rodapé com WhatsApp para resposta rápida.",
    ],
    results: [
      "Visual memorável para repetição em calendário de posts.",
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
      "Peça promocional completa para redes e materiais digitais, alinhada à temporada da Copa do Mundo FIFA 2026. O layout reforça velocidade, pacote combinado (fibra e plano móvel) e benefícios de entretenimento (SportTV, YouTube Premium, Vero Vídeo). A entrega inclui hierarquia clara de preço, CTA de assinatura e contato, com identidade vermelha e dourada de alto contraste. A imagem de destaque mostra a separação de camadas do criativo — útil para revisão interna e para demonstrar o processo de montagem profissional.",
    thumbnail: "/project-thumbs/marketing/copa-2026-camadas.png",
    thumbnailWidth: 3375,
    thumbnailHeight: 4219,
    category: "Marketing e criativo",
    year: 2026,
    impactLabel: "Campanha temática Copa 2026",
    featured: false,
    stack: ["Instagram", "Identidade visual", "Copy promocional"],
    context:
      "O cliente precisava de uma campanha rápida e memorável para vender pacote de internet no período da Copa, sem perder clareza de preço e benefícios.",
    challenges: [
      "Conciliar muita informação regulamentada com leitura em poucos segundos no feed.",
      "Manter consistência com a marca do provedor e com o clima de evento esportivo.",
    ],
    solution: [
      "Composição em camadas com foco em atletas, título da Copa e bloco de oferta destacado.",
      "CTA e telefone visíveis, com rodapé de condições em tipografia menor.",
    ],
    results: [
      "Peça pronta para publicação em formato vertical (4:5).",
      "Arquivo de camadas separadas para ajustes finos sem refazer o layout do zero.",
    ],
    liveUrl: "",
  },
  {
    slug: "pecas-internet-redes-sociais",
    projectKind: "marketing",
    title: "Peças para redes — internet residencial",
    shortDescription:
      "Série de posts para Instagram: instalação rápida, Wi-Fi 6, planos, streaming e velocidade — linguagem direta para conversão.",
    detailedDescription:
      "Conjunto de criativos em formato feed/stories (4:5) para divulgar internet residencial. Cada peça trabalha um ângulo diferente: família e entretenimento em qualquer tela, qualidade Wi-Fi 6, comparativo de planos em destaque, instalação grátis em até 24h e promessa de navegar no dia seguinte. Visual 3D e fotos reais de técnico reforçam confiança; botões e faixas vermelhas conduzem para WhatsApp e assinatura. Ideal para campanhas recorrentes de aquisição no provedor.",
    thumbnail: "/project-thumbs/marketing/post-planos-destaque.png",
    thumbnailWidth: 3375,
    thumbnailHeight: 4219,
    category: "Marketing e criativo",
    year: 2026,
    impactLabel: "Série Instagram conversão",
    featured: false,
    stack: ["Instagram", "3D e foto", "Oferta e CTA"],
    context:
      "Provedor de internet precisava de volume de peças para redes, mantendo padrão visual e mensagens de venda claras.",
    challenges: [
      "Variar o argumento (preço, velocidade, instalação, Wi-Fi) sem parecer marca diferente a cada post.",
      "Garantir legibilidade de tabelas de plano em tela de celular.",
    ],
    solution: [
      "Templates com mesma lógica de CTA, cores e tipografia, mudando apenas o gancho principal.",
      "Uso de mockups 3D, foto de instalação e cards de plano para diferentes etapas do funil.",
    ],
    results: [
      "Biblioteca de peças prontas para calendário de posts.",
      "Mensagens alinhadas às objeções comuns: preço, velocidade, prazo de instalação e qualidade do Wi-Fi.",
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
      "Loja virtual de eletrônicos: vitrine, categorias, ofertas e fluxo de compra com visual moderno e responsivo.",
    detailedDescription:
      "Site comercial publicado no Netlify para a TechStore — loja de eletrônicos com layout responsivo, hierarquia clara de produtos, destaques promocionais e chamadas para ação. Mais que uma página única: estrutura de vitrine pensada para conversão, navegação por categorias e credibilidade para quem chega pelo link ou campanha.",
    thumbnail: "/project-thumbs/captures/cltechshop.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Loja virtual",
    year: 2025,
    impactLabel: "E-commerce no ar no Netlify",
    featured: true,
    stack: ["Web", "Netlify", "Vitrine comercial"],
    context:
      "A loja precisava de presença online completa para divulgar catálogo e converter visitantes em compradores.",
    challenges: [
      "Comunicar variedade de produtos com site leve e fácil de manter.",
      "Manter vitrine e CTA visíveis em mobile e desktop.",
    ],
    solution: [
      "Site com seções de destaque, categorias, benefícios e contato.",
      "Deploy estático no Netlify para carregamento rápido.",
    ],
    results: [
      "Loja publicada e acessível por URL fixa.",
      "Base pronta para campanhas e divulgação contínua.",
    ],
    liveUrl: "https://cltechshop.netlify.app",
  },
  {
    slug: "rapidcred",
    projectKind: "landing",
    title: "RapidCred",
    shortDescription:
      "Landing de crédito pessoal: proposta clara, simulação e CTA para solicitar crédito fácil e rápido.",
    detailedDescription:
      "Página de captura para serviço de crédito com mensagem direta sobre agilidade e simplicidade. Layout pensado para reduzir fricção na solicitação e transmitir confiança — publicada no Netlify para uso em anúncios e indicações.",
    thumbnail: "/project-thumbs/captures/rapidcred.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Landing page",
    year: 2025,
    impactLabel: "Captação de crédito",
    featured: true,
    stack: ["HTML/CSS", "Netlify", "Landing page"],
    context:
      "Operação de crédito precisava de página única para explicar a oferta e receber contatos.",
    challenges: [
      "Explicar benefício sem parecer genérico demais.",
      "Destacar CTA principal sem poluir a leitura.",
    ],
    solution: [
      "Copy objetiva com foco em velocidade e facilidade.",
      "Estrutura enxuta com blocos de confiança e formulário ou contato.",
    ],
    results: [
      "Landing no ar para tráfego pago ou orgânico.",
      "Mensagem consistente em um só link.",
    ],
    liveUrl: "https://rapidcred.netlify.app",
  },
  {
    slug: "cn-construtora",
    projectKind: "landing",
    title: "CN Construtora",
    shortDescription:
      "Site institucional de construtora: serviços, obras e contato para captar clientes B2B e residenciais.",
    detailedDescription:
      "Landing institucional da CN Construtora com apresentação de soluções em construção civil, portfólio resumido e canal de contato. Visual profissional para passar solidez a visitantes que chegam por indicação ou busca local.",
    thumbnail: "/project-thumbs/captures/cn-construtora.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Landing page",
    year: 2025,
    impactLabel: "Institucional construção civil",
    featured: true,
    stack: ["HTML/CSS", "Netlify", "Landing page"],
    context:
      "Construtora precisava de presença digital simples para complementar indicações e orçamentos.",
    challenges: [
      "Transmitir confiança em segmento de ticket alto.",
      "Organizar serviços sem página pesada.",
    ],
    solution: [
      "Seções de serviços, diferenciais e formulário de contato.",
      "Hospedagem estática no Netlify.",
    ],
    results: [
      "Link único para enviar a prospects.",
      "Imagem profissional alinhada ao ramo.",
    ],
    liveUrl: "https://cnconstrutora.netlify.app",
  },
  {
    slug: "calculo-juridico-ebook",
    projectKind: "software",
    title: "Cálculo Jurídico — Oliveira & Costa",
    shortDescription:
      "Site comercial da calculadora jurídica: serviços, equipe, depoimentos e formulário para solicitar demonstração.",
    detailedDescription:
      "Site completo para a solução Oliveira & Costa de cálculos processuais — prazos, honorários e correção monetária. Inclui apresentação da equipe, depoimentos, captura de leads para demonstração e cortesia de e-book após envio do formulário. Produto jurídico B2B com funil comercial estruturado.",
    thumbnail: "/project-thumbs/captures/calculo-juridico-ebook.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Software jurídico",
    year: 2024,
    impactLabel: "Funil comercial B2B jurídico",
    featured: true,
    stack: ["Web", "Netlify", "Formulário de leads"],
    context:
      "Escritório e produto jurídico precisavam de site de vendas consultivo para advogados interessados em cálculos processuais.",
    challenges: [
      "Conciliar credibilidade técnica com linguagem acessível.",
      "Conduzir visitante até solicitação de demo.",
    ],
    solution: [
      "Seções de serviços, equipe e prova social.",
      "Formulário de demonstração com confirmação pós-envio.",
    ],
    results: [
      "Site publicado em calculojuridicoebook.netlify.app.",
      "Funil claro para interessados em cálculos processuais.",
    ],
    liveUrl: "https://calculojuridicoebook.netlify.app",
  },
  {
    slug: "vision",
    projectKind: "landing",
    title: "VISION",
    shortDescription:
      "Landing de veículos premium com hero 3D cinematográfico — modelos GLB, pós-processamento e CTA para WhatsApp.",
    detailedDescription:
      "Site de apresentação para concessionária premium: hero imersivo com React Three Fiber, modelos BMW em GLB/GLTF, bloom e aberração cromática. A cada visita o carro em destaque pode variar; seções de financiamento, veículos revisados e entrega nacional completam a narrativa comercial. Layout escuro de alto contraste, tipografia forte e fluxo pensado para converter no WhatsApp — experiência de vitrine digital, não catálogo estático.",
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
      "Manter legibilidade do copy sobre cena escura e efeitos de luz.",
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
      "Site institucional 3D para operadoras: van de instalação, scroll-driven e pitch de vendas + campo com marca parceira.",
    detailedDescription:
      "ViON é o site de apresentação do modelo comercial para operadoras parceiras: vendedores fixos no desk e equipe de instalação em campo, operando com a marca da operadora. A experiência é scroll-driven — câmera e cena 3D sincronizadas com as seções, inspiradas em referências imersivas como igloo.inc. Inclui van de serviço modelada, roteador procedural, partículas, grid de rede, intro animada e post-processing. Stack React + Vite + Three.js + Tailwind v4 + Zustand.",
    thumbnail: "/project-thumbs/captures/vion.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Site institucional 3D",
    year: 2026,
    impactLabel: "Pitch imersivo para operadoras",
    featured: true,
    stack: ["React Three Fiber", "Three.js", "Vite", "Tailwind"],
    context:
      "Operadora precisa entender o modelo ViON — desk + instalação — antes de fechar parceria; PDF e slide não transmitiam a proposta.",
    challenges: [
      "Narrar vendas e instalação em uma jornada contínua, sem parecer apresentação corporativa genérica.",
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
      "Diagnóstico, arquitetura e acompanhamento para digitalizar processos com clareza, segurança e foco em resultado.",
    detailedDescription:
      "Consultoria para empresas que precisam sair do improviso: entendemos o processo atual, mapeamos gargalos e propomos solução técnica alinhada ao que o time realmente usa. Atuamos desde a definição de escopo até a orientação na implementação — integrações, automação, WhatsApp, cadastros e operação do dia a dia — sempre com linguagem acessível para decisores e respeito a restrições de dados e confidencialidade.",
    thumbnail: "/project-thumbs/consultoria.svg",
    category: "Consultoria",
    year: 2026,
    impactLabel: "Processo claro antes do código",
    featured: false,
    stack: ["Diagnóstico", "Arquitetura", "Acompanhamento"],
    context:
      "Muitas operações crescem em planilhas, grupos e ferramentas soltas até o custo de manter tudo ficar maior que o benefício.",
    challenges: [
      "Traduzir dor de negócio em decisões técnicas sem jargão desnecessário.",
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
      "Sistema web que centraliza a rotina comercial de uma operação de serviços: cadastro de oportunidades com formulário completo, aprovação interna, painéis comparando períodos, visão por canal ou parceiro e upload de documentos organizados por tipo. Usuários, logs e permissões em banco relacional; parte do pipeline sincronizada com planilha operacional para quem edita fora do painel; arquivos em armazenamento em nuvem com pastas por categoria. Inclui financeiro, metas, antecipação, acompanhamento pós-venda com mensagens padronizadas, solicitações internas, grupos com permissões e visão em tempo real. Papéis distintos controlam quem vê números, quem aprova negócio e quem dispara mensagem. Por lidar com dados pessoais, contratos e pipeline real, a descrição aqui é só resumo: prova entrega sem telas, integrações ou identidade do contratante.",
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
      "A operação precisava sair de planilhas soltas e grupos de mensagem: um funil único, rastreável, com documentos, financeiro e pós-venda integrados — sem vazamento de dados de clientes ou pipeline.",
    challenges: [
      "Manter cadastro rico consistente entre painel web, planilha operacional e repositório de documentos.",
      "Separar permissões entre vendedor, backoffice, financeiro e pós-venda — inclusive envio de mensagens.",
      "Rodar estável na nuvem com autenticação, recuperação de acesso e alertas em tempo real.",
      "Documentar entrega sem publicar capturas, URLs, webhooks ou qualquer dado identificável.",
    ],
    solution: [
      "API REST com papéis explícitos e serviços dedicados para planilha, arquivos e mensageria.",
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
      "Plataforma comercial multiempresa: cada organização acessa ambiente próprio, com papéis de proprietário, administrador, gerente e vendedor. Cobre produtos, clientes, registro de vendas, comissões, movimentações financeiras, rotinas de pós-venda, visão gerencial por período e supervisão central para operadores autorizados. Autenticação persistente, banco relacional modelado com migrations, interface atual e gráficos de acompanhamento. Pode operar em modo demonstração somente leitura para apresentações sem gravar dados sensíveis. Repositório privado; deploy preparado com migrações no arranque. Descrevo capacidade e abordagem — nunca CNPJs, credenciais ou capturas reais.",
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
      "Depois de entregar operação vertical em produção, surgiu a necessidade de produto comercial genérico — escalável por empresa, pronto para diferentes segmentos.",
    challenges: [
      "Isolar empresas, membros e vendedores sem vazamento cruzado de dados.",
      "Unificar vendas, comissões, financeiro e pós-venda num fluxo coerente.",
      "Permitir demo ou apresentação sem expor gravações reais de clientes.",
    ],
    solution: [
      "Modelo de dados com empresa, venda, comissão, cliente e atividades pós-venda.",
      "Rotas por identificador de empresa, onboarding guiado e supervisão central.",
      "Ambiente somente leitura para demonstrações; métricas opcionais desacopladas.",
    ],
    results: [
      "Base CRM completa pronta para demo ou produção com cliente real.",
      "Arquitetura reutilizável para operações com equipe, comissões e financeiro.",
      "Código e dados permanecem privados; portfólio mostra só o nível executivo.",
    ],
  },
  {
    slug: "topsecret-mensageria-integrada",
    projectKind: "topsecret",
    title: "Mensageria integrada — sigilo",
    shortDescription:
      "Camada própria de API para WhatsApp corporativo: instâncias, webhooks, filas e integrações HTTPS — base de bots e automações em produção.",
    detailedDescription:
      "Infraestrutura de mensageria mantida em repositório privado: API REST em HTTPS para criar e gerenciar instâncias, conectar sessões oficiais ou via web, receber eventos por webhooks e integrar bots, filas, armazenamento e ferramentas de atendimento. Persistência relacional, cache e deploy containerizado na nuvem. Alimenta produtos públicos do portfólio e sistemas confidenciais — mas tokens, números conectados, conversas, chaves de API e endpoints internos nunca entram no material aberto. Outras rotinas comerciais usam pilha complementar de envio operacional; mesma exigência de sigilo em ambas.",
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
      "Bots, disparadores e painéis precisavam de mensageria estável e centralizada — sem espalhar sessões em cada produto ou depender de serviço opaco.",
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
      "Canal previsível para atendimento automatizado, disparos e integrações corporativas.",
      "Base comprovada para bots e operações confidenciais — sem evidência sensível pública.",
      "Referência para quem exige API própria e governança de instâncias.",
    ],
  },
  {
    slug: "topsecret-agendamento-consultas",
    projectKind: "topsecret",
    title: "Agendamento de consultas — sigilo",
    shortDescription:
      "Site e fluxo de marcação para clínicas e consultórios: agenda, confirmações e dados de pacientes tratados como confidenciais.",
    detailedDescription:
      "Sistemas de agendamento online para área da saúde: escolha de especialidade ou profissional, horários disponíveis, confirmação por mensagem ou e-mail, lembretes automáticos e painel interno para recepção remarcar ou bloquear slots. Lida com nome, contato, histórico de consultas e preferências — informação sensível sob LGPD e acordo com o contratante. Descrevo o tipo de entrega (marcação, confirmação, integração com operação) sem publicar marca, telas, URLs ou dados reais de pacientes.",
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
      "Consultórios e clínicas precisam reduzir ligações repetitivas e faltas — com agenda clara para o paciente e controle para a recepção.",
    challenges: [
      "Conciliar disponibilidade real da equipe com autoatendimento simples para quem marca.",
      "Enviar confirmações e lembretes sem expor dados de pacientes em canal público.",
      "Manter operação alinhada ao que a recepção vê no painel interno.",
    ],
    solution: [
      "Fluxo de marcação em etapas curtas, com validação de horário e confirmação imediata.",
      "Lembretes automáticos e painel para remarcar, cancelar ou bloquear horários.",
      "Deploy seguro; portfólio limitado a descrição aprovada pelo contratante.",
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
      "Plataforma para aluguel de carros e motos: frota, reservas, contratos e pagamentos — operação real sob acordo de sigilo.",
    detailedDescription:
      "Sistema para locadoras de carros e motos: catálogo de veículos por categoria, consulta de disponibilidade, reserva com datas e retirada, registro de contrato, cobrança e status da frota (disponível, reservado, em manutenção). Pode incluir check-list de entrega e devolução, multas ou adicionais e painel operacional para equipe interna. Trata documentos, pagamentos e dados de locatários como confidenciais. Descrição genérica — sem marca da locadora, placas, telas ou integrações expostas.",
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
      "Reservas mais previsíveis e frota visível para a operação.",
      "Menos retrabalho entre site, balcão e financeiro.",
      "Identidade da locadora e dados de clientes preservados no portfólio.",
    ],
  },
  {
    slug: "topsecret-portal-imobiliario",
    projectKind: "topsecret",
    title: "Portal imobiliário — sigilo",
    shortDescription:
      "Site e backoffice para imobiliárias: imóveis, leads, visitas e documentação — sem exposição de operação ou clientes.",
    detailedDescription:
      "Ecossistema digital para corretoras e imobiliárias: vitrine de imóveis com filtros, captura de leads, agendamento de visitas, acompanhamento de propostas e repositório de documentos por negócio. Painel interno para corretores atualizarem status, registrar contatos e priorizar oportunidades. Informações de proprietários, valores negociados e documentos ficam sob sigilo comercial. Mostro capacidade de entrega no segmento — nunca endereços reais, fotos internas, CRM ou identidade do contratante.",
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
      "Organizar leads e visitas para equipe comercial dispersa.",
      "Separar o que é público (anúncio) do que é interno (proposta, documento).",
    ],
    solution: [
      "Site de captura com filtros claros e formulário de interesse.",
      "Painel para corretores com pipeline, visitas e histórico de contato.",
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
      "Sistemas de autoatendimento para reduzir fila presencial e liberar equipe: jornadas guiadas por etapas (escolha de serviço, preenchimento, confirmação, pagamento ou emissão de comprovante), integração com backoffice e, quando necessário, mensageria ou impressão. Serve setores como serviços, varejo, utilities ou atendimento público interno — sempre adaptado ao processo do contratante. Dados de quem usa o fluxo e regras comerciais reais permanecem confidenciais. Descrevo o padrão de entrega (fluxo, integração, operação) sem expor telas, totens, URLs ou identidade do cliente.",
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
      "Operações com alto volume de pedidos repetitivos precisam de autoatendimento claro — sem depender de atendente para cada passo simples.",
    challenges: [
      "Traduzir processo burocrático em etapas curtas que qualquer pessoa conclui.",
      "Integrar com sistemas legados ou planilhas sem quebrar operação existente.",
      "Registrar o que foi feito para auditoria interna, sem expor isso publicamente.",
    ],
    solution: [
      "Jornadas por etapas com validação e feedback imediato.",
      "Painel interno para acompanhar fila, exceções e reprocessamento.",
      "Conexão com pagamento, mensagem ou emissão conforme o caso.",
    ],
    results: [
      "Menos fila e menos repetição para o time interno.",
      "Cliente resolve o básico sozinho, no ritmo dele.",
      "Regras e dados da operação mantidos sob sigilo no portfólio.",
    ],
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
  if (project.slug === "cepbot") return "Bot de atendimento";
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
