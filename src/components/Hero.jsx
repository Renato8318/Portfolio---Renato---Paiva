import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import ScrambleText from "./ScrambleText";
import TypingText from "./TypingText";

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Efeito para girar a foto automaticamente a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 4000); // 4000ms = 4 segundos

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
          {/* Status Badge - Open to Work / Disponível */}
          <a href="#contato" className="status-badge" onMouseMove={handleMouseMove}>
            <span className="status-dot">
              <span className="status-ping"></span>
            </span>
            <span className="status-text">Disponível para Novos Projetos & Contratação</span>
          </a>

          <h1>
            <span className="highlight"><ScrambleText text="Olá, eu sou Renato Paiva" /></span>
          </h1>

          <p>
            <TypingText
              text="Desenvolvedor Web & Analista de Dados — transformando dados em decisões estratégicas."
              speed={40}
              deleteSpeed={20}
              pauseDelay={3000}
              loop={true}
            />
          </p>

          <div className="buttons">
            <a 
              href="/Curriculo_Renato 2026.pdf" 
              download="Curriculo_Renato_Paiva_2026.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-item cv-btn"
              onMouseMove={handleMouseMove}
              title="Baixar Currículo em PDF"
            >
              <FaFileDownload className="contact-icon" /> Baixar CV
            </a>

            <a href="https://www.linkedin.com/in/renato-paiva-developer/" target="_blank" rel="noopener noreferrer" 
               className="contact-item linkedin-btn" 
               onMouseMove={handleMouseMove}
            >
              <FaLinkedin className="contact-icon" /> LinkedIn
            </a>
            <a href="https://github.com/Renato8318" target="_blank" rel="noopener noreferrer" 
               className="contact-item github-btn" 
               onMouseMove={handleMouseMove}
            >
              <FaGithub className="contact-icon" /> GitHub
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