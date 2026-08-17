import React from "react";
import { FaMapMarkerAlt, FaCode, FaChartPie, FaPython, FaServer } from "react-icons/fa";
import ScrambleText from "./ScrambleText";

const Sobre = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="sobre" id="sobre">
      <h2 onMouseMove={handleMouseMove} data-aos="fade-up" className="section-title">
        <ScrambleText text="Sobre Mim" />
      </h2>
      <div className="bento-grid">
        {/* Main Resume Box */}
        <div className="bento-item bento-main" data-aos="fade-up" data-aos-delay="100" onMouseMove={handleMouseMove}>
          <div className="hud-overlay">
            <div className="corner tl"></div><div className="corner tr"></div>
            <div className="corner bl"></div><div className="corner br"></div>
          </div>
          <h3>DNA Analítico & Web</h3>
          <p>
            Sou um Desenvolvedor Web focado no <strong>Planejamento de TI e Inteligência de Dados (MIS)</strong>. Minha trajetória é marcada pela transição entre o suporte técnico especializado e a criação de soluções automatizadas de alto nível.
          </p>
          <p style={{ marginTop: '15px' }}>
            Hoje, uno a agilidade do <strong>React</strong> com a precisão do <strong>Power BI</strong> e <strong>SQL</strong> para construir dashboards que guiam decisões estratégicas em tempo real. Traduzo problemas de negócios em interfaces rápidas e robôs (Python) silenciosos.
          </p>
        </div>

        {/* Location Box */}
        <div className="bento-item bento-location" data-aos="fade-up" data-aos-delay="200" onMouseMove={handleMouseMove}>
          <div className="hud-overlay">
            <div className="corner tl"></div><div className="corner tr"></div>
            <div className="corner bl"></div><div className="corner br"></div>
          </div>
          <FaMapMarkerAlt className="bento-icon" />
          <div className="bento-text-block">
            <h4>Localização</h4>
            <p>São Paulo, BR</p>
          </div>
        </div>

        {/* Numbers/Stats Box */}
        <div className="bento-item bento-stats" data-aos="fade-up" data-aos-delay="300" onMouseMove={handleMouseMove}>
          <div className="hud-overlay">
            <div className="corner tl"></div><div className="corner tr"></div>
            <div className="corner bl"></div><div className="corner br"></div>
          </div>
          <div className="stat-number">+10M</div>
          <div className="stat-label">Dados Processados</div>
        </div>

        {/* Tech Focus Box */}
        <div className="bento-item bento-tech" data-aos="fade-up" data-aos-delay="400" onMouseMove={handleMouseMove}>
          <div className="hud-overlay">
            <div className="corner tl"></div><div className="corner tr"></div>
            <div className="corner bl"></div><div className="corner br"></div>
          </div>
           <div className="tech-icons-row">
             <FaCode title="React/JS" />
             <FaChartPie title="Power BI" />
             <FaPython title="Python" />
             <FaServer title="SQL" />
           </div>
           <p className="bento-label-bottom">Core Stack</p>
        </div>

        {/* Soft Skills Box */}
        <div className="bento-item bento-soft" data-aos="fade-up" data-aos-delay="500" onMouseMove={handleMouseMove}>
          <div className="hud-overlay">
            <div className="corner tl"></div><div className="corner tr"></div>
            <div className="corner bl"></div><div className="corner br"></div>
          </div>
          <h4>Soft Skills</h4>
          <ul className="bento-soft-list">
            {[
              "Visão Estratégica", "Orientação a Dados", "Foco no Cliente", "Otimização"
            ].map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Sobre;