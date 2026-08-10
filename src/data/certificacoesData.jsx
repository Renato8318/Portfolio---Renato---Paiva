import React from "react";
import { FaUserGraduate, FaNetworkWired, FaPalette, FaLaptopCode, FaPython, FaAward } from "react-icons/fa";
import { hexToRgb } from "./projetosData";

export const certificacoesData = [
  {
    id: 6,
    slug: "lean-six-sigma-yellow-belt",
    title: "Lean Six Sigma Yellow Belt",
    icon: <FaAward />,
    issuer: "FM2S Educação e Consultoria",
    date: "Maio de 2026",
    description: "Certificação em melhoria contínua e análise de processos, focada na identificação de gargalos e otimização de resultados. A metodologia Lean Six Sigma complementa minha atuação em Inteligência de Dados, permitindo transformar dados operacionais em estratégias de impacto real.",
    img: "/img/certificado-lean-six-sigma.jpg",
    credentialUrl: "", 
    destaque: true,
    competencias: [
      "Power BI", "Python", "SQL", 
      "MIS & Planejamento de TI", "Lean Six Sigma", 
      "Melhoria Contínua", "Análise de Processos"
    ],
    accentColor: "#eab308",
    accentColorRgb: hexToRgb("#eab308"),
    gradeCurricular: [
      {
        modulo: "Módulo 1 - Introdução ao Lean Seis Sigma",
        topicos: [
          "Introdução ao Lean Seis Sigma: o que é e o que se tornou",
          "Origem da metodologia Seis Sigma",
          "Como realizar um projeto de Melhoria",
          "Roteiro para realização de projetos de Melhoria",
          "Divisão dos Belts e as ferramentas de cada Belt"
        ]
      },
      {
        modulo: "Módulo 2 - Fundamentos do Lean Seis Sigma",
        topicos: [
          "Fundamentos do Lean Seis Sigma: história da Melhoria de processos",
          "Conceitos fundamentais: os pilares do Conhecimento Profundo",
          "Mudança, Melhoria e as Três Questões Fundamentais",
          "Questão 1 - O que melhorar: contextualização e objetivos",
          "Questão 2 - Medição da melhoria: dados confiáveis e indicadores",
          "Questão 3 - Mudanças geradoras de melhoria",
          "Roteiros, habilidades e estratégias do agente de Melhoria",
          "Roteiro DMAIC e suas ferramentas"
        ]
      },
      {
        modulo: "Módulo 3 - Define",
        topicos: [
          "Introdução à fase do Define",
          "SIPOC: conceito, passo-a-passo e estudo de caso",
          "VOC (Voice of Customer): coleta de informações do cliente",
          "Árvore CTC: definição de indicadores",
          "O contrato de Melhoria: elementos principais e elaboração"
        ]
      },
      {
        modulo: "Módulo 4 - Measure",
        topicos: [
          "Introdução à fase do Measure e Análise de processos",
          "Mapeamento de processos e Tipos de Fluxograma",
          "Coleta de dados: variáveis e passo-a-passo",
          "Análise de dados: Pareto, Histogramas e Tendências",
          "Apresentação de resultados do Measure"
        ]
      },
      {
        modulo: "Módulo 5 - Analyze, Improve e Control",
        topicos: [
          "Os Sete Desperdícos do Lean",
          "Diagrama de Ishikawa e os Cinco Porquês",
          "Poka Yoke: processos à prova de erros",
          "Ciclo PDSA e Plano de Implementação"
        ]
      }
    ]
  },
  {
    id: 1,
    slug: "analise-desenvolvimento-sistemas",
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    icon: <FaUserGraduate />,
    issuer: "Universidade Cruzeiro do Sul",
    date: "2022 - 2024",
    description: "Capacitação em desenvolvimento de software, banco de dados, análise de requisitos, arquitetura de sistemas e metodologias ágeis, com foco em tecnologia, inovação e resolução de problemas.",
    img: "/img/diploma-ads.jpg",
    credentialUrl: "",
    competencias: [
      "Desenvolvimento de Software", "Análise de Sistemas", 
      "Banco de Dados (Oracle / SQL Server)", "Java e XML", 
      "UML / RUP", "Metodologias Ágeis (Scrum)", 
      "Segurança da Informação", "Arquitetura de Sistemas",
      "Inteligência Artificial e Machine Learning"
    ],
    accentColor: "#ff8c00",
    accentColorRgb: hexToRgb("#ff8c00"),
  },
  {
    id: 2,
    slug: "redes-computadores-alura",
    title: "Redes de Computadores",
    icon: <FaNetworkWired />,
    issuer: "Alura",
    date: "18 de Junho de 2025",
    description: "🚀 Finalização de 4 cursos da Trilha Alura focados em infraestrutura, conectividade e segurança, com carga horária total de 37 horas.",
    img: "/img/certificado-alura-redes.jpg",
    credentialUrl: "",
    competencias: [
      "Redes: dos conceitos iniciais à criação de uma intranet", 
      "Redes: construindo um projeto com VLANs", 
      "Redes: implementando roteamento, DNS e IPv6", 
      "Redes Wi-Fi: criando uma rede sem fio de modo seguro"
    ],
    accentColor: "#6366f1",
    accentColorRgb: hexToRgb("#6366f1")
  },
  {
    id: 3,
    slug: "ui-design-devs-alura",
    title: "Formação UI Design para Devs",
    icon: <FaPalette />,
    issuer: "Alura",
    date: "Junho de 2025",
    description: "✨ Formação focada em fundamentos de design, heurísticas e animações para desenvolvedores criarem interfaces mais atraentes e funcionais.",
    img: "/img/certificado-alura-ui.jpg",
    credentialUrl: "",
    competencias: [
      "UI para Devs: interfaces atraentes com fundamentos do design", 
      "UI para Devs: aprimorando projetos web com heurísticas", 
      "UI para devs: construindo interfaces animadas"
    ],
    accentColor: "#6366f1",
    accentColorRgb: hexToRgb("#6366f1")
  },
  {
    id: 4,
    slug: "desenvolvimento-frontend-alura",
    title: "Formação Desenvolvimento Front-end",
    icon: <FaLaptopCode />,
    issuer: "Alura",
    date: "Junho de 2025",
    description: "⚡ Cursos focados na criação de aplicações web dinâmicas, cobrindo desde a manipulação do DOM e Promises até a implementação de CRUD e domínio do ambiente Node.js.",
    img: "/img/certificado-alura-frontend.jpg",
    credentialUrl: "",
    competencias: [
      "JavaScript: construindo páginas dinâmicas", 
      "JavaScript: entendendo promises e async/await", 
      "JavaScript: métodos de array", 
      "JavaScript: manipulando elementos no DOM", 
      "JavaScript: explorando localStorage", 
      "JavaScript: implementando CRUD com requisições HTTP", 
      "JavaScript: evoluindo a sua aplicação com ES6+", 
      "Node.js e terminal"
    ],
    accentColor: "#ffd700",
    accentColorRgb: hexToRgb("#ffd700")
  },
  {
    id: 5,
    slug: "python-oo-alura",
    title: "Python: aplicando a Orientação a Objetos",
    icon: <FaPython />,
    issuer: "Alura",
    date: "Junho de 2025",
    description: "⚙️ Exploração aprofundada da Programação Orientada a Objetos em Python, focando na estruturação de classes, utilização de construtores, implementação de decorators como @property e organização de código através de importação e composição.",
    img: "/img/certificado-alura-python-oo.jpg",
    credentialUrl: "",
    competencias: [
      "Classes", 
      "Construtor e instanciando objetos", 
      "Property e métodos de classe", 
      "Importando classe e composição", 
      "Consolidando os conhecimentos de POO"
    ],
    accentColor: "#4169e1",
    accentColorRgb: hexToRgb("#4169e1")
  }
];
