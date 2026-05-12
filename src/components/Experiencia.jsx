import React from "react";
import { Link } from "react-router-dom";
import { FaPython, FaHeadset, FaBuilding, FaSearch, FaChartLine, FaDatabase, FaUsers, FaClock, FaChartBar } from "react-icons/fa";
import { SiSalesforce, SiSelenium, SiPandas } from "react-icons/si";

const Experiencia = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="experiencia" className="experiencia" data-aos="fade-up">
      <h2 onMouseMove={handleMouseMove}>
        Experiência
      </h2>

      <div className="experiencia-grid">
        <div className="experiencia-item">
          <span className="exp-title" onMouseMove={handleMouseMove}>Assistente de Planejamento de TI | MIS & Power BI</span>
          <span className="exp-company"><FaBuilding className="exp-icon" /> VERMONT TI E CALL CENTER LTDA | Nov/2025 – Atual</span>
          
          <ul className="exp-list">
            <li onMouseMove={handleMouseMove}>
              <FaChartLine className="exp-icon" /> 
              <span>Atuação estratégica no planejamento operacional de TI, acompanhando indicadores de performance, produtividade e SLAs (Service Level Agreement).</span>
            </li>
            <li onMouseMove={handleMouseMove}>
              <FaClock className="exp-icon" /> 
              <span>Responsável por atividades de Tráfego & MIS: monitoramento em tempo real, análise de volumetria e dimensionamento de recursos.</span>
            </li>
            <li className="exp-highlight" onMouseMove={handleMouseMove}>
              <div className="exp-highlight-header">
                <FaChartBar className="exp-icon" /> <strong>Destaque em BI & Dashboards:</strong>
              </div>
              <p>
                Criação de dashboards e relatórios analíticos em Power BI, transformando dados em informações estratégicas para tomada de decisão.
              </p>
              <div className="exp-tech-tags">
                <span className="tech-tag-sm"><FaChartBar /> Power BI</span>
                <span className="tech-tag-sm"><FaDatabase /> SQL</span>
                <span className="tech-tag-sm"><FaChartLine /> MIS & KPI</span>
              </div>
            </li>
            <li onMouseMove={handleMouseMove}>
              <FaDatabase className="exp-icon" /> 
              <span>Vivência com banco de dados, realizando consultas, extração, tratamento e consolidação de informações para geração de insights.</span>
            </li>
            <li onMouseMove={handleMouseMove}>
              <FaUsers className="exp-icon" /> 
              <span>Interface constante com áreas técnicas e lideranças, apoiando decisões estratégicas e otimização de processos das equipes.</span>
            </li>
          </ul>
          <div className="exp-fade-overlay">
            <Link to="/experiencia/assistente-planejamento-ti" className="btn-primary btn-saiba-mais" onMouseMove={handleMouseMove}>
              Saiba mais
            </Link>
          </div>
        </div>

        <div className="experiencia-item">
          <span className="exp-title" onMouseMove={handleMouseMove}>Analista de Suporte & Desenvolvedor de Automações</span>
          <span className="exp-company"><FaBuilding className="exp-icon" /> Jotatei - Informática</span>
          
          <ul className="exp-list">
            <li onMouseMove={handleMouseMove}>
              <FaHeadset className="exp-icon" /> 
              <span>Atuação em suporte técnico especializado nos sistemas empresariais <strong>SGD Express</strong> e <strong>Acione-me</strong>, garantindo alta disponibilidade e excelência no atendimento.</span>
            </li>
            <li onMouseMove={handleMouseMove}>
              <SiSalesforce className="exp-icon" /> 
              <span>Análise de dados e geração de relatórios via <strong>Salesforce</strong>, com foco em monitoramento de KPIs e suporte à tomada de decisão.</span>
            </li>
            <li className="exp-highlight" onMouseMove={handleMouseMove}>
              <div className="exp-highlight-header">
                <FaPython className="exp-icon" /> <strong>Destaque em Automação:</strong>
              </div>
              <p>
                Desenvolvimento de robôs de <strong>Web Scraping</strong> e automações de processos repetitivos, otimizando o fluxo de trabalho interno.
              </p>
              <div className="exp-tech-tags">
                <span className="tech-tag-sm"><FaPython /> Python</span>
                <span className="tech-tag-sm"><SiSelenium /> Selenium</span>
                <span className="tech-tag-sm"><SiPandas /> Pandas</span>
              </div>
            </li>
            <li onMouseMove={handleMouseMove}>
              <FaSearch className="exp-icon" /> 
              <span>Investigação e resolução de falhas técnicas com abordagem analítica, entregando soluções personalizadas para o negócio.</span>
            </li>
          </ul>
          <div className="exp-fade-overlay">
            <Link to="/experiencia/analista-suporte-automacoes" className="btn-primary btn-saiba-mais" onMouseMove={handleMouseMove}>
              Saiba mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;