import React, { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Efeito para girar a foto automaticamente a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 5000); // 5000ms = 5 segundos

    return () => clearInterval(interval); // Limpa o timer ao sair da página
  }, []);

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
            Desenvolvedor Front-end e Analista de Planejamento de TI especializado em transformar dados operacionais em decisões estratégicas através de Dashboards e Automações.
          </p>

          <div className="buttons">
            <a href="https://www.linkedin.com/in/renato-paiva-developer/" target="_blank" rel="noopener noreferrer" 
               className="contact-item linkedin-btn" 
               onMouseMove={handleMouseMove}
            >
              <FaLinkedin className="contact-icon" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-img" data-aos="fade-left">
          <div className="hero-img-wrapper" onMouseMove={handleMouseMove}>
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div 
              className={`hero-img-card ${isFlipped ? "flipped" : ""}`}
              onClick={() => setIsFlipped(!isFlipped)}
              title="Clique para girar"
            >
              <div className="hero-img-face front">
                <img src="/img/foto-perfil.jpg" alt="Renato Paiva" />
              </div>
              <div className="hero-img-face back">
                <img src="/img/foto-avatar.jpg" alt="Renato Avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;