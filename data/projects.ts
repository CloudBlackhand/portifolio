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
    slug: "vendas-hub",
    projectKind: "software",
    title: "Vendas Hub",
    shortDescription:
      "Sistema completo de cadastro e gestão de vendas: oportunidades, equipe e acompanhamento do funil em um só lugar.",
    detailedDescription:
      "O Vendas Hub é o ponto central da operação comercial: cadastro de clientes e negócios, registro de etapas do funil, responsáveis e histórico do que foi feito em cada oportunidade. Foi pensado como um sistema de vendas de verdade — não só uma listagem, mas regras de preenchimento, visão por vendedor ou time e leitura rápida do que precisa de atenção. Tudo isso em produção, com interface voltada a quem vive de meta e follow-up diário.",
    thumbnail: "/project-thumbs/vendas-hub.svg",
    category: "Gestão e cadastro de vendas",
    year: 2026,
    impactLabel: "Funil e cadastro integrados",
    featured: true,
    confidential: true,
    stack: ["Web app", "Dashboard", "API"],
    context:
      "A operação precisava sair de planilhas e grupos soltos para um cadastro de vendas único, com rastreio de etapas e donos claros por oportunidade.",
    challenges: [
      "Modelar cadastro e funil sem travar o time no dia a dia.",
      "Fazer a equipe enxergar prioridade: o que fechar, o que esquentar, o que documentar.",
    ],
    solution: [
      "Estrutura de oportunidades com etapas, campos e visões alinhadas ao processo real de vendas.",
      "Dashboards e listas que destacam o que está atrasado ou sem próximo passo definido.",
    ],
    results: [
      "Um só lugar para cadastro, histórico e acompanhamento de vendas.",
      "Menos perda de informação entre pessoas e canais.",
    ],
    liveUrl: "",
  },
  {
    slug: "sistema-https-whatsapp",
    projectKind: "software",
    title: "Sistema HTTPS WhatsApp",
    shortDescription:
      "WhatsApp personalizado em ambiente próprio: conecte um número da empresa e integre bots, disparadores e outros sistemas com segurança.",
    detailedDescription:
      "Este sistema permite usar um número de WhatsApp da empresa de forma controlada e personalizada. Você faz o login do número (como no app) e passa a ter um canal seguro via HTTPS para conectar outras soluções: bots de atendimento, disparo de mensagens, alertas, cadastros e qualquer fluxo que precise falar com o cliente no WhatsApp. A ideia é ter uma base única e confiável, sem depender de ferramentas fechadas de terceiros, e permitir que cada produto do ecossistema use o mesmo número oficial com regras claras, monitoramento e estabilidade para operação do dia a dia.",
    thumbnail: "/project-thumbs/sistema-https-whatsapp.svg",
    category: "WhatsApp personalizado",
    year: 2025,
    impactLabel: "Número oficial integrado",
    featured: true,
    confidential: true,
    stack: ["Conexão por número", "HTTPS", "Integração multi-sistema"],
    context:
      "A operação precisava de um WhatsApp próprio, com número dedicado, para alimentar bots e sistemas de envio sem gambiarra ou dependência externa frágil.",
    challenges: [
      "Manter o número conectado e estável durante o uso contínuo.",
      "Permitir que vários sistemas usem o mesmo canal sem conflito ou perda de mensagens.",
    ],
    solution: [
      "Infraestrutura própria com acesso HTTPS para integrar bots, disparadores e demais módulos.",
      "Sessão do WhatsApp vinculada ao número da empresa, pronta para consumo por outros produtos.",
    ],
    results: [
      "Um único ponto de conexão WhatsApp para todo o ecossistema de atendimento e envio.",
      "Mais previsibilidade para escalar automação sem trocar de número ou de ferramenta a cada projeto.",
    ],
    liveUrl: "",
  },
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
    title: "Melhor Preço",
    shortDescription:
      "Ferramenta de comparação e apoio à decisão de compra e margem, com dados reunidos para análise rápida.",
    detailedDescription:
      "O Melhor Preço ajuda a comparar cenários de custo e revenda antes de comprar ou precificar: entrada de dados organizada, visão do que pesa na margem e leitura objetiva para quem decide no operacional. Foi usado no cotidiano para reduzir decisão no feeling e concentrar números em um fluxo só — sempre com foco em consistência entre consultas e velocidade para repetir a análise sempre que o mercado mudar.",
    thumbnail: "/project-thumbs/captures/melhor-preco.png",
    thumbnailWidth: 1200,
    thumbnailHeight: 630,
    category: "Precificação e comparação",
    year: 2024,
    impactLabel: "Decisão mais clara na compra",
    featured: true,
    stack: ["Web", "TypeScript", "API"],
    context:
      "Compra e precificação precisavam de uma base única de comparação, em vez de cortes de planilha e conversas sem registro.",
    challenges: [
      "Manter regras de comparação alinhadas ao que o time realmente usa no dia a dia.",
      "Evitar telas pesadas: quem compra precisa resposta em poucos cliques.",
    ],
    solution: [
      "Fluxos de entrada e comparação com foco em margem e cenários repetíveis.",
      "Interface pensada para revisitar preços com frequência.",
    ],
    results: [
      "Disciplina na análise de preço e menos discussão sem número na mesa.",
      "Ganho de tempo na preparação de decisão de compra ou tabela de venda.",
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
    slug: "topsecret-ecossistema-comercial",
    projectKind: "topsecret",
    title: "Ecossistema comercial — confidencial",
    shortDescription:
      "CRM e funil de vendas em produção: oportunidades, equipe, histórico e dados de clientes — tudo sob acordo de sigilo, sem exposição pública.",
    detailedDescription:
      "Sistema comercial completo usado no dia a dia do cliente: cadastro de oportunidades, etapas do funil, responsáveis por negócio, histórico de movimentações e visão consolidada da operação. Lida com informação sensível — nomes, contatos, valores, pipeline e rotina comercial — por isso o case no portfólio é só descritivo: explicamos o tipo de problema resolvido e o resultado, nunca a operação real.",
    thumbnail: "/project-thumbs/topsecret-comercial.svg",
    category: "Top Secret",
    year: 2026,
    impactLabel: "Operação comercial protegida",
    featured: false,
    confidential: true,
    stack: ["Web app", "CRM interno", "HTTPS", "Controle de acesso", "Dados de clientes"],
    context:
      "O cliente precisava centralizar vendas e dar rastreabilidade ao funil sem permitir que processos, números ou dados de terceiros vazassem para concorrentes ou para a web.",
    challenges: [
      "Operar com dados reais de clientes e oportunidades em ambiente de produção.",
      "Manter rastreio comercial forte para o time interno e sigilo absoluto na divulgação externa.",
      "Documentar capacidade técnica sem publicar telas, métricas, URLs ou qualquer identificador do cliente.",
    ],
    solution: [
      "Fluxos alinhados ao processo comercial real, com donos claros por etapa e histórico auditável.",
      "Comunicação protegida (HTTPS) e uso restrito a quem tem permissão no ambiente do cliente.",
      "Portfólio limitado ao que o cliente autorizou: contexto, abordagem e resultado — nada operacional.",
    ],
    results: [
      "Funil comercial rodando com visibilidade interna e menos dependência de planilhas soltas.",
      "Dados de clientes, pipeline e identidade da operação preservados fora do site público.",
      "Prova de entrega em cenário real de sigilo, útil para quem também precisa de confidencialidade.",
    ],
  },
  {
    slug: "topsecret-automacao-whatsapp",
    projectKind: "topsecret",
    title: "Automação WhatsApp — confidencial",
    shortDescription:
      "Canal oficial corporativo com bots, filas e integrações HTTPS — conversas, tokens e dados de contato tratados como confidenciais.",
    detailedDescription:
      "Infraestrutura WhatsApp para uso empresarial: sessão dedicada, integração via HTTPS com bots, filas, sistemas internos e regras de consumo por produto. Envolve dados sensíveis — números, conversas, tokens de sessão, payloads de integração — tratados como confidenciais e fora de qualquer material público. O dossiê existe para mostrar que esse tipo de entrega também está no meu histórico, sem abrir arquitetura, endpoints ou evidências que comprometam o cliente.",
    thumbnail: "/project-thumbs/topsecret-whatsapp.svg",
    category: "Top Secret",
    year: 2025,
    impactLabel: "Canal oficial sob sigilo",
    featured: false,
    confidential: true,
    stack: ["WhatsApp Business API", "HTTPS", "Filas", "Bots", "Dados de conversa"],
    context:
      "A operação precisava de mensageria oficial integrada ao restante dos sistemas, com governança de acesso e proibição total de exposição pública de números, fluxos ou integrações.",
    challenges: [
      "Manter canal estável com múltiplos consumidores da API sem conflito ou vazamento entre produtos.",
      "Proteger tokens, sessões e conteúdo de conversa em ambiente de produção real.",
      "Demonstrar competência técnica sem publicar capturas, rotas, webhooks ou dados de atendimento.",
    ],
    solution: [
      "Camada própria de conexão com regras claras de uso por sistema interno e monitoramento operacional.",
      "Tráfego e integrações via HTTPS; credenciais e metadados ficam restritos ao ambiente autorizado.",
      "Case publicado só em nível executivo, com identidade do cliente e detalhes técnicos redigidos.",
    ],
    results: [
      "WhatsApp corporativo previsível para atendimento, disparos e automação integrada.",
      "Conversas, números e credenciais preservados — zero evidência sensível no portfólio aberto.",
      "Referência para projetos que exigem o mesmo rigor de sigilo em mensageria e APIs.",
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
      return "Top Secret";
    default:
      return "Sistema";
  }
}

export function getProjectsByKind(kind: ProjectKind): Project[] {
  return projects.filter((project) => project.projectKind === kind);
}

export function getFeaturedSoftwareProjects(): Project[] {
  return projects.filter(
    (project) => project.featured && project.projectKind === "software",
  );
}

/** Hero e faixa de favoritos: landing pages primeiro, depois sistemas em destaque. */
export function getShowcaseProjects(list: Project[] = projects): Project[] {
  const landings = list.filter(
    (project) => project.featured && project.projectKind === "landing",
  );
  const software = list.filter(
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

/** Projetos visíveis em listagens gerais (tabela, catálogo público) — sem Top Secret. */
export function getCatalogProjects(list: Project[] = projects): Project[] {
  return list.filter((project) => !isTopSecretProject(project));
}

export function getTopSecretProjects(): Project[] {
  return getProjectsByKind("topsecret");
}
