import React from "react";
import { FaClock, FaPlay, FaPaw, FaChartLine, FaHistory, FaFilm } from "react-icons/fa";

export const hexToRgb = (hex) => {
  if (!hex) return '99, 102, 241';
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

export const projetosData = [
  {
    title: "PlanVision",
    icon: <FaChartLine />,
    slug: "planvision",
    description: "Plataforma de gestão operacional, inteligência de negócios e controle de RH com Analytics.",
    tagline: "PlanVision — Gestão Operacional e Analytics Integrados",
    descricao: "Plataforma avançada de gestão operacional, inteligência de negócios e controle de RH com integração de Analytics.",
    problema: "A tomada de decisão em muitas empresas é prejudicada pela falta de dados centralizados e análises em tempo real.",
    solucao: "Desenvolvimento de um dashboard dinâmico que unifica dados operacionais, de RH e métricas de negócios, facilitando o monitoramento e a estratégia.",
    desafio: "Garantir a performance da aplicação ao lidar com múltiplos gráficos e grandes volumes de dados no frontend.",
    decisaoTecnica: "Utilização do React com Vite para build rápido, e Recharts para a renderização otimizada e interativa dos dados.",
    aprendizado: "Aprofundamento na construção de dashboards interativos, manipulação de estados complexos e visualização de dados.",
    resultado: "Uma ferramenta que centraliza a gestão, fornecendo insights valiosos e melhorando a eficiência operacional das equipes.",
    contexto: "Criado para demonstrar capacidades avançadas na criação de painéis gerenciais e interfaces de análise de dados.",
    img: "/img/planvision.png",
    imagem: "/img/planvision.png",
    tech: ["React", "Vite", "Recharts", "CSS3"],
    linkDemo: "https://plan-vision.vercel.app/",
    linkGit: "https://github.com/Renato8318/PlanVision",
    destaque: true,
    accentColor: "#a855f7",
    accentColorRgb: hexToRgb("#a855f7"),
    screenshots: ["/img/planvision.png", "/img/planvision-ss1.png", "/img/planvision-ss2.png"]
  },
  {
    title: "Veritime",
    icon: <FaHistory />,
    slug: "veritime",
    description: "Gestão de ponto eletrônico em tempo real com persistência local.",
    tagline: "Veritime — O tempo no seu controle",
    descricao: "Interface inteligente de controle de ponto eletrônico, projetada para oferecer transparência e precisão no monitoramento de jornadas de trabalho e intervalos.",
    problema: "A dificuldade em visualizar o saldo de horas e o status da jornada em tempo real gera insegurança e falhas no cumprimento de escalas.",
    solucao: "Uma Single Page Application que automatiza o cálculo de horas trabalhadas, fornecendo feedbacks visuais instantâneos sobre o status do colaborador.",
    desafio: "Sincronizar a contagem regressiva de pausas e o cronômetro da jornada sem gerar atrasos na renderização ou inconsistências nos dados exibidos.",
    decisaoTecnica: "Arquitetura centrada em React Hooks para gerenciamento de ciclos de tempo e utilização de LocalStorage para garantir a persistência dos dados entre sessões do navegador.",
    aprendizado: "Aprofundamento em lógica de intervalos assíncronos (setInterval), manipulação avançada de objetos Date e estruturação de layouts para Dashboards.",
    resultado: "Uma ferramenta funcional e precisa que elimina a necessidade de cálculos manuais e melhora a autogestão do tempo pelo usuário.",
    contexto: "Desenvolvido como uma solução prática para automação de processos de RH, focando em usabilidade e precisão técnica.",
    img: "/img/veritime.png",
    imagem: "/img/veritime.png",
    tech: ["React", "JavaScript", "CSS3"],
    linkDemo: "https://projeto-controle-ponto.vercel.app/",
    linkGit: "https://github.com/Renato8318/ProjetoControlePonto",
    accentColor: "#00f3ff",
    accentColorRgb: hexToRgb("#00f3ff"),
    video: "/img/veritime-demo.mp4",
    videoZoom: 1.4,
    screenshots: ["/img/veritime-ss1.png", "/img/veritime-ss2.png", "/img/veritime-ss3.png"]
  },
  {
    title: "SessãoPlay",
    icon: <FaFilm />,
    slug: "sessaoplay",
    description: "Streaming de filmes com API.",
    tagline: "SessãoPlay — O entretenimento na palma da sua mão",
    descricao: "Single Page Application (SPA) de entretenimento que utiliza consumo de dados em larga escala para oferecer um catálogo imersivo de produções cinematográficas.",
    problema: "Usuários enfrentavam dificuldades para encontrar informações técnicas e trailers de lançamentos em uma interface que fosse rápida e amigável.",
    solucao: "Desenvolvimento de uma plataforma centralizada com busca inteligente, categorização por gênero e carregamento dinâmico de metadados via TMDB API.",
    desafio: "Otimizar o carregamento de múltiplas fontes de mídia simultâneas, mantendo a responsividade da UI durante o processamento de respostas JSON complexas.",
    decisaoTecnica: "Uso estratégico de requisições assíncronas (Async/Await) e manipulação eficiente do DOM para renderização sob demanda (Lazy Loading conceitual).",
    aprendizado: "Domínio em integração de serviços de terceiros (REST APIs), tratamento de exceções para UX de fallback e refinamento de layouts complexos com CSS Grid.",
    resultado: "Uma plataforma estável e 100% responsiva, proporcionando uma experiência de usuário comparável a grandes players de mercado.",
    contexto: "Desenvolvido como projeto de consolidação de arquitetura front-end escalável e integração de serviços externos.",
    img: "/img/sessaoplay.png",
    imagem: "/img/sessaoplay.png",
    tech: ["JavaScript", "CSS", "TMDB API"],
    linkDemo: "https://meu-clone-nu-nine-32.vercel.app/",
    linkGit: "https://github.com/Renato8318/Netflix-Clone",
    accentColor: "#ff004c",
    accentColorRgb: hexToRgb("#ff004c"),
    video: "/img/sessaoplay-demo.mp4",
    videoZoom: 1.15,
    videoPosition: "left 10%",
    screenshots: ["/img/sessaoplay-ss1.png", "/img/sessaoplay-ss2.png", "/img/sessaoplay-ss3.png"]
  },
  {
    title: "Amicão",
    icon: <FaPaw />,
    slug: "amicao",
    description: "Adoção de cães online.",
    tagline: "Amicão — Encontre seu melhor amigo hoje",
    descricao: "Solução digital focada em responsabilidade social, otimizando a conexão entre ONGs de proteção animal e potenciais adotantes através de uma interface humanizada.",
    problema: "A fragmentação de informações e interfaces datadas dificultavam o fluxo de adoção, reduzindo o alcance de animais resgatados.",
    solucao: "Criação de um portal direto e acolhedor, onde a clareza visual e a facilidade de contato são os pilares da jornada do usuário.",
    desafio: "Maximizar a performance em dispositivos mobile de baixo custo, garantindo que a aplicação seja leve e acessível inclusive em conexões de rede limitadas.",
    decisaoTecnica: "Adoção da filosofia 'Mobile-First' e utilização de Vanilla JavaScript puro para garantir o menor bundle size possível, priorizando a semântica do HTML5.",
    aprendizado: "Refinamento em princípios de User Experience (UX), otimização de ativos estáticos e estratégias de SEO para causas sociais.",
    resultado: "Uma plataforma rápida e eficiente que remove barreiras tecnológicas entre os animais e seus futuros lares.",
    contexto: "Inspirado em necessidades reais de ONGs de proteção animal, visando modernizar a presença digital do terceiro setor.",
    img: "/img/amicao.png",
    imagem: "/img/amicao.png",
    tech: ["HTML", "CSS", "JavaScript"],
    linkDemo: "https://adoteum-pet.vercel.app/?theme=light",
    linkGit: "https://github.com/Renato8318/AdoteumPet",
    accentColor: "#39ff14",
    accentColorRgb: hexToRgb("#39ff14"),
    video: "/img/amicao-demo.mp4",
    videoZoom: 1.2,
    screenshots: ["/img/amicao-ss1.png", "/img/amicao-ss2.png", "/img/amicao-ss3.png"]
  }
];
