import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaBuilding, FaCalendarAlt, FaChartLine, FaDatabase, FaUsers, FaClock, FaChartBar, FaHeadset, FaSearch, FaPython, FaCode } from "react-icons/fa";
import { SiSalesforce, SiSelenium, SiPandas } from "react-icons/si";

// Função utilitária para converter HEX para RGB
const hexToRgb = (hex) => {
  if (!hex) return '99, 102, 241'; // Default primary color RGB
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

const expData = {
  "assistente-planejamento-ti": {
    title: "Assistente de Planejamento de TI | MIS & Power BI",
    company: "VERMONT TI E CALL CENTER LTDA",
    period: "Nov/2025 – Jul/2026",
    fullDescription: "Atuação estratégica no planejamento operacional da área de TI, focada na otimização de fluxos e suporte analítico para a diretoria técnica.",
    topics: [
      { icon: <FaChartLine />, text: "Monitoramento constante de indicadores de performance (KPIs) e SLAs." },
      { icon: <FaClock />, text: "Gestão de tráfego e MIS: forecast de demanda e dimensionamento preciso de recursos humanos e técnicos." },
      { icon: <FaChartBar />, text: "Desenvolvimento de dashboards complexos em Power BI integrando múltiplas fontes de dados." },
      { icon: <FaDatabase />, text: "Criação de queries SQL para extração e tratamento de grandes volumes de dados." },
      { icon: <FaUsers />, text: "Apoio consultivo a lideranças para otimização de produtividade e redução de custos operacionais." }
    ],
    accentColor: "#00bfff", // Deep Sky Blue
    accentColorRgb: hexToRgb("#00bfff"),
    techTags: [
      { name: "Power BI", icon: <FaChartBar />, color: "var(--tech-pbi)" },
      { name: "SQL", icon: <FaDatabase />, color: "var(--tech-sql)" },
      { name: "MIS", icon: <FaChartLine />, color: "var(--primary-color)" },
      { name: "Planejamento Estratégico", icon: <FaUsers />, color: "#10B981" }
    ]
  },
  "analista-suporte-automacoes": {
    title: "Analista de Suporte & Desenvolvedor de Automações",
    company: "Jotatei - Informática",
    period: "Mai/2023 – Dez/2024",
    fullDescription: "Especialista em resolução de problemas complexos e automação de processos internos para ganho de escala.",
    topics: [
      { icon: <FaHeadset />, text: "Suporte especializado nos sistemas SGD Express e Acione-me." },
      { icon: <SiSalesforce />, text: "Administração e extração de dados analíticos via Salesforce." },
      { icon: <FaPython />, text: "Desenvolvimento de scripts Python para automação de tarefas repetitivas (RPA)." },
      { icon: <FaSearch />, text: "Análise de causa raiz para falhas críticas de sistema." }
    ],
    accentColor: "#8a2be2", // Blue Violet
    accentColorRgb: hexToRgb("#8a2be2"),
    techTags: [
      { name: "Python", icon: <FaPython />, color: "var(--tech-python)" },
      { name: "Selenium", icon: <SiSelenium />, color: "var(--tech-selenium)" },
      { name: "Salesforce", icon: <SiSalesforce />, color: "var(--tech-salesforce)" },
      { name: "RPA", icon: <FaCode />, color: "var(--tech-rpa)" },
    ]
  }
};

// Adiciona accentColorRgb a cada objeto de experiência
Object.keys(expData).forEach(key => {
  // Garante que accentColor e accentColorRgb existam, com fallback para primary-color
  expData[key].accentColor = expData[key].accentColor || '#6366f1';
  expData[key].accentColorRgb = hexToRgb(expData[key].accentColor);

  // Corrige a estrutura de techTags se necessário, garantindo que accentColorRgb não seja adicionado lá
  if (Array.isArray(expData[key].techTags)) {
    // Não precisa fazer nada aqui, pois accentColorRgb é para o objeto principal
  }
});

const ExperienciaDetalhes = () => {
  const { slug } = useParams();
  const exp = expData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Lógica da Barra de Progresso de Leitura
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  if (!exp) return <div className="container"><h2>Experiência não encontrada</h2></div>;

  return (
    <>
      {/* Barra de Progresso Dinâmica */}
      <div className="reading-progress-container">
        <div className="reading-progress-bar" style={{ width: `${scrollProgress}%`, '--accent-color': exp.accentColor }}></div>
      </div>
      <section className="container projeto-detalhes-page" style={{ '--accent-color': exp.accentColor, '--accent-color-rgb': exp.accentColorRgb }}>
      <div className="project-detail-intro-header">
        <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
          <Link to="/" className="btn-secondary back-btn" onMouseMove={handleMouseMove}>
            <FaArrowLeft /> Voltar para a Home
          </Link>
        </div>
        
        <h1 onMouseMove={handleMouseMove}>{exp.title}</h1>
        
        <div className="exp-info-header">
          <p className="exp-company" style={{ fontSize: '1.2rem', marginBottom: '5px' }}>
            <FaBuilding className="exp-icon" /> {exp.company}
          </p>
          <p style={{ color: 'var(--text-gray)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaCalendarAlt color="var(--primary-color)" /> {exp.period}
          </p>
        </div>
      </div>

      <div className="projeto-detalhes-wrapper">
        <div className="projeto-detalhes-content" style={{ flex: 1 }}>
          <h3>Resumo da Atuação</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>{exp.fullDescription}</p>

          <h3>Principais Responsabilidades e Entregas</h3>
          <ul className="exp-list" style={{ marginTop: '20px' }}>
            {exp.topics.map((item, index) => (
              <li key={index} style={{ marginBottom: '20px', fontSize: '1.05rem' }}>
                <span style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginRight: '15px' }}>
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="projeto-detalhes-img" style={{ flex: 0.4 }}>
          <div className="card" style={{ padding: '25px', border: '1px solid var(--primary-color)' }}>
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Stack Utilizada</h4>
            <div className="exp-tech-tags">
              {exp.techTags.map((tech, i) => (
                <span key={i} className="tech-tag-sm">
                  <span style={{ color: tech.color, display: 'flex', alignItems: 'center' }}>
                    {tech.icon}
                  </span> 
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
          
          <div style={{ marginTop: '30px' }}>
            <a 
              href={`https://wa.me/5511959117042?text=${encodeURIComponent(`Olá Renato, vi os detalhes da sua experiência como ${exp.title} e gostaria de conversar.`)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center' }}
              onMouseMove={handleMouseMove}
            >
              Conversar sobre isso
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ExperienciaDetalhes;