import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaBuilding, FaCalendarAlt, FaChartLine, FaDatabase, FaUsers, FaClock, FaChartBar, FaHeadset, FaSearch, FaPython } from "react-icons/fa";
import { SiSalesforce, SiSelenium, SiPandas } from "react-icons/si";

const expData = {
  "assistente-planejamento-ti": {
    title: "Assistente de Planejamento de TI | MIS & Power BI",
    company: "VERMONT TI E CALL CENTER LTDA",
    period: "Nov/2025 – Atual",
    fullDescription: "Atuação estratégica no planejamento operacional da área de TI, focada na otimização de fluxos e suporte analítico para a diretoria técnica.",
    topics: [
      { icon: <FaChartLine />, text: "Monitoramento constante de indicadores de performance (KPIs) e SLAs." },
      { icon: <FaClock />, text: "Gestão de tráfego e MIS: forecast de demanda e dimensionamento preciso de recursos humanos e técnicos." },
      { icon: <FaChartBar />, text: "Desenvolvimento de dashboards complexos em Power BI integrando múltiplas fontes de dados." },
      { icon: <FaDatabase />, text: "Criação de queries SQL para extração e tratamento de grandes volumes de dados." },
      { icon: <FaUsers />, text: "Apoio consultivo a lideranças para otimização de produtividade e redução de custos operacionais." }
    ],
    techTags: ["Power BI", "SQL", "MIS", "Planejamento Estratégico"]
  },
  "analista-suporte-automacoes": {
    title: "Analista de Suporte & Desenvolvedor de Automações",
    company: "Jotatei - Informática",
    period: "Período Anterior",
    fullDescription: "Especialista em resolução de problemas complexos e automação de processos internos para ganho de escala.",
    topics: [
      { icon: <FaHeadset />, text: "Suporte especializado nos sistemas SGD Express e Acione-me." },
      { icon: <SiSalesforce />, text: "Administração e extração de dados analíticos via Salesforce." },
      { icon: <FaPython />, text: "Desenvolvimento de scripts Python para automação de tarefas repetitivas (RPA)." },
      { icon: <FaSearch />, text: "Análise de causa raiz para falhas críticas de sistema." }
    ],
    techTags: ["Python", "Selenium", "Salesforce", "SQL", "RPA"]
  }
};

const ExperienciaDetalhes = () => {
  const { slug } = useParams();
  const exp = expData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  if (!exp) return <div className="container"><h2>Experiência não encontrada</h2></div>;

  return (
    <section className="container projeto-detalhes-page" style={{ textAlign: 'left' }}>
      <Link to="/" className="btn-secondary back-btn">
        <FaArrowLeft /> Voltar para a Home
      </Link>
      
      <h1 onMouseMove={handleMouseMove}>{exp.title}</h1>
      
      <div className="exp-info-header" style={{ marginBottom: '30px' }}>
        <p className="exp-company" style={{ fontSize: '1.2rem', marginBottom: '5px' }}>
          <FaBuilding className="exp-icon" /> {exp.company}
        </p>
        <p style={{ color: 'var(--text-gray)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaCalendarAlt color="var(--primary-color)" /> {exp.period}
        </p>
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
              {exp.techTags.map((tag, i) => (
                <span key={i} className="tech-tag-sm" style={{ padding: '8px 12px', fontSize: '0.8rem' }}>{tag}</span>
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
  );
};

export default ExperienciaDetalhes;