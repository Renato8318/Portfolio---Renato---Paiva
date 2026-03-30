import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="home" className="hero" data-aos="fade-up">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            <span className="highlight">Olá, eu sou Renato Paiva</span>
          </h1>

          <p>
            Desenvolvedor Front-end com experiência em automação, suporte técnico e análise de dados.
          </p>

          <div className="buttons">
            <a href="#" className="btn-primary" onMouseMove={handleMouseMove}>
              Baixar CV
            </a>
            <a href="https://www.linkedin.com/in/renato-paiva-developer/" target="_blank" rel="noopener noreferrer" 
               className="btn-secondary" onMouseMove={handleMouseMove}
            >
              <FaLinkedin className="linkedin-icon" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-img" data-aos="fade-left">
          <div className="hero-img-wrapper" onMouseMove={handleMouseMove}>
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <img src="/img/foto-perfil.jpg" alt="Renato Paiva" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;