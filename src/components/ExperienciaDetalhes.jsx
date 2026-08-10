import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaBuilding, FaCalendarAlt, FaChartLine, FaDatabase, FaUsers, FaClock, FaChartBar, FaHeadset, FaSearch, FaPython, FaCode } from "react-icons/fa";
import { SiSalesforce, SiSelenium, SiPandas } from "react-icons/si";

import { experienciaData } from "../data/experienciaData";


const ExperienciaDetalhes = () => {
  const { slug } = useParams();
  const exp = experienciaData.find(e => e.slug === slug);

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