import React from "react";
import { FaChartLine, FaDatabase, FaUsers, FaClock, FaChartBar, FaHeadset, FaSearch, FaPython, FaCode } from "react-icons/fa";
import { SiSalesforce, SiSelenium, SiPandas } from "react-icons/si";
import { hexToRgb } from "./projetosData";

export const experienciaData = [
  {
    slug: "assistente-planejamento-ti",
    title: "Assistente de Planejamento de TI | MIS & Power BI",
    company: "VERMONT TI E CALL CENTER LTDA",
    period: "Nov/2025 – Jul/2026",
    destaque: true,
    cardTopics: [
      {
        icon: <FaChartLine />,
        text: "Atuação estratégica no planejamento operacional de TI, acompanhando indicadores de performance, produtividade e SLAs (Service Level Agreement)."
      },
      {
        icon: <FaClock />,
        text: "Responsável por atividades de Tráfego & MIS: monitoramento em tempo real, análise de volumetria e dimensionamento de recursos."
      },
      {
        isHighlight: true,
        headerIcon: <FaChartBar />,
        headerText: "Destaque em BI & Dashboards:",
        text: "Criação de dashboards e relatórios analíticos em Power BI, transformando dados em informações estratégicas para tomada de decisão.",
        tags: [
          { name: "Power BI", icon: <FaChartBar /> },
          { name: "SQL", icon: <FaDatabase /> },
          { name: "MIS & KPI", icon: <FaChartLine /> }
        ]
      },
      {
        icon: <FaDatabase />,
        text: "Vivência com banco de dados, realizando consultas, extração, tratamento e consolidação de informações para geração de insights."
      },
      {
        icon: <FaUsers />,
        text: "Interface constante com áreas técnicas e lideranças, apoiando decisões estratégicas e otimização de processos das equipes."
      }
    ],
    fullDescription: "Atuação estratégica no planejamento operacional da área de TI, focada na otimização de fluxos e suporte analítico para a diretoria técnica.",
    topics: [
      { icon: <FaChartLine />, text: "Monitoramento constante de indicadores de performance (KPIs) e SLAs." },
      { icon: <FaClock />, text: "Gestão de tráfego e MIS: forecast de demanda e dimensionamento preciso de recursos humanos e técnicos." },
      { icon: <FaChartBar />, text: "Desenvolvimento de dashboards complexos em Power BI integrando múltiplas fontes de dados." },
      { icon: <FaDatabase />, text: "Criação de queries SQL para extração e tratamento de grandes volumes de dados." },
      { icon: <FaUsers />, text: "Apoio consultivo a lideranças para otimização de produtividade e redução de custos operacionais." }
    ],
    accentColor: "#00bfff",
    accentColorRgb: hexToRgb("#00bfff"),
    techTags: [
      { name: "Power BI", icon: <FaChartBar />, color: "var(--tech-pbi)" },
      { name: "SQL", icon: <FaDatabase />, color: "var(--tech-sql)" },
      { name: "MIS", icon: <FaChartLine />, color: "var(--primary-color)" },
      { name: "Planejamento Estratégico", icon: <FaUsers />, color: "#10B981" }
    ]
  },
  {
    slug: "analista-suporte-automacoes",
    title: "Analista de Suporte & Desenvolvedor de Automações",
    company: "Jotatei - Informática",
    period: "Mai/2023 – Dez/2024",
    destaque: false,
    cardTopics: [
      {
        icon: <FaHeadset />,
        text: "Atuação em suporte técnico especializado nos sistemas empresariais SGD Express e Acione-me, garantindo alta disponibilidade e excelência no atendimento."
      },
      {
        icon: <SiSalesforce />,
        text: "Análise de dados e geração de relatórios via Salesforce, com foco em monitoramento de KPIs e suporte à tomada de decisão."
      },
      {
        isHighlight: true,
        headerIcon: <FaPython />,
        headerText: "Destaque em Automação:",
        text: "Desenvolvimento de robôs de Web Scraping e automações de processos repetitivos, otimizando o fluxo de trabalho interno.",
        tags: [
          { name: "Python", icon: <FaPython /> },
          { name: "Selenium", icon: <SiSelenium /> },
          { name: "Pandas", icon: <SiPandas /> }
        ]
      },
      {
        icon: <FaSearch />,
        text: "Investigação e resolução de falhas técnicas com abordagem analítica, entregando soluções personalizadas para o negócio."
      }
    ],
    fullDescription: "Especialista em resolução de problemas complexos e automação de processos internos para ganho de escala.",
    topics: [
      { icon: <FaHeadset />, text: "Suporte especializado nos sistemas SGD Express e Acione-me." },
      { icon: <SiSalesforce />, text: "Administração e extração de dados analíticos via Salesforce." },
      { icon: <FaPython />, text: "Desenvolvimento de scripts Python para automação de tarefas repetitivas (RPA)." },
      { icon: <FaSearch />, text: "Análise de causa raiz para falhas críticas de sistema." }
    ],
    accentColor: "#8a2be2",
    accentColorRgb: hexToRgb("#8a2be2"),
    techTags: [
      { name: "Python", icon: <FaPython />, color: "var(--tech-python)" },
      { name: "Selenium", icon: <SiSelenium />, color: "var(--tech-selenium)" },
      { name: "Salesforce", icon: <SiSalesforce />, color: "var(--tech-salesforce)" },
      { name: "RPA", icon: <FaCode />, color: "var(--tech-rpa)" },
    ]
  }
];
