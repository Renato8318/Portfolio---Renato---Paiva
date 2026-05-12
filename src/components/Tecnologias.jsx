import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGitAlt, FaDatabase, FaCode, FaChartBar } from 'react-icons/fa';
import { SiSalesforce } from 'react-icons/si';

const technologiesData = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Power BI", icon: <FaChartBar /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Salesforce", icon: <SiSalesforce /> },
  { name: "Web Scraping", icon: <FaCode /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const Tecnologias = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="tecnologias" className="tecnologias" data-aos="fade-up">
      {/* Gráfico de linha decorativo no fundo */}
      <div className="tech-graph-bg">
        <svg viewBox="0 0 1000 200" preserveAspectRatio="none">
          <path d="M0,150 Q150,80 300,150 T600,50 T900,120 L1000,80" fill="none" />
        </svg>
      </div>

      <h2 onMouseMove={handleMouseMove}>
        Tecnologias
      </h2>

      <ul className="tech-list">
        {technologiesData.map((tech, index) => (
          <li key={index} className="tech-item" onMouseMove={handleMouseMove}>
            <span className="tech-name">{tech.name}</span>
            {tech.icon && <span className="tech-icon">{tech.icon}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tecnologias;