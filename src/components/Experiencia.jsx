import React from "react";
import { FaPython, FaHeadset, FaBuilding, FaSearch } from "react-icons/fa";
import { SiSalesforce, SiSelenium, SiPandas, SiPytest } from "react-icons/si";

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
              <span className="tech-tag-sm"><SiPytest /> BeautifulSoup</span>
              <span className="tech-tag-sm"><SiPandas /> Pandas</span>
            </div>
          </li>
          <li onMouseMove={handleMouseMove}>
            <FaSearch className="exp-icon" /> 
            <span>Investigação e resolução de falhas técnicas com abordagem analítica, entregando soluções personalizadas para o negócio.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experiencia;