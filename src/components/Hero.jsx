import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import ScrambleText from "./ScrambleText";
import TypingText from "./TypingText";

/* ---------- Configuração das partículas ---------- */
const PARTICLE_COUNT = 55;
const BASE_SPEED = 0.004;

function createParticles(cx, cy) {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const orbit   = 130 + Math.random() * 110;   // raio da órbita
    const orbitY  = orbit * (0.28 + Math.random() * 0.22); // elipse
    const angle   = Math.random() * Math.PI * 2;
    const speed   = (BASE_SPEED + Math.random() * 0.006) * (Math.random() > 0.5 ? 1 : -1);
    const size    = 1.2 + Math.random() * 2.6;
    const alpha   = 0.35 + Math.random() * 0.65;
    const hue     = 150 + Math.random() * 40;     // tons de verde-esmeralda
    return { orbit, orbitY, angle, speed, size, alpha, hue, cx, cy };
  });
}

function drawParticles(ctx, particles, hovered) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  const speedMul = hovered ? 2.6 : 1;

  particles.forEach((p) => {
    p.angle += p.speed * speedMul;
    const x = p.cx + Math.cos(p.angle) * p.orbit;
    const y = p.cy + Math.sin(p.angle) * p.orbitY;

    const glow = ctx.createRadialGradient(x, y, 0, x, y, p.size * (hovered ? 4 : 2.5));
    glow.addColorStop(0, `hsla(${p.hue}, 90%, 65%, ${p.alpha * (hovered ? 1 : 0.85)})`);
    glow.addColorStop(1, `hsla(${p.hue}, 90%, 65%, 0)`);

    ctx.beginPath();
    ctx.arc(x, y, p.size * (hovered ? 1.6 : 1), 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();
  });
}

/* ---------- Componente Hero ---------- */
const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const wrapperRef  = useRef(null);
  const canvasRef   = useRef(null);
  const rafRef      = useRef(null);
  const particles   = useRef([]);
  const hovered     = useRef(false);

  /* Auto-flip */
  useEffect(() => {
    const id = setInterval(() => setIsFlipped((p) => !p), 4000);
    return () => clearInterval(id);
  }, []);

  /* Canvas de partículas */
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");
    const { width, height } = wrapper.getBoundingClientRect();
    canvas.width  = width;
    canvas.height = height;

    const cx = width  / 2;
    const cy = height / 2;
    particles.current = createParticles(cx, cy);

    const loop = () => {
      drawParticles(ctx, particles.current, hovered.current);
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseEnter = useCallback(() => { hovered.current = true;  }, []);
  const handleMouseLeave = useCallback(() => { hovered.current = false; }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="home" className="hero" data-aos="fade-up">
      <div className="hero-container">
        <div className="hero-text">
          <a href="#contato" className="status-badge" onMouseMove={handleMouseMove}>
            <span className="status-dot">
              <span className="status-ping"></span>
            </span>
            <span className="status-text">Disponível para Novos Projetos &amp; Contratação</span>
          </a>

          <h1>
            <span className="highlight"><ScrambleText text="Olá, eu sou Renato Paiva" /></span>
          </h1>

          <p>
            <TypingText
              text="Desenvolvedor Web &amp; Analista de Dados — transformando dados em decisões estratégicas."
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
              className="cv-btn"
              onMouseMove={handleMouseMove}
              title="Baixar Currículo em PDF"
            >
              <FaFileDownload className="contact-icon" /> Baixar CV
            </a>
            <a href="https://www.linkedin.com/in/renato-paiva-developer/" target="_blank" rel="noopener noreferrer"
               className="linkedin-btn" onMouseMove={handleMouseMove}>
              <FaLinkedin className="contact-icon" /> LinkedIn
            </a>
            <a href="https://github.com/Renato8318" target="_blank" rel="noopener noreferrer"
               className="github-btn" onMouseMove={handleMouseMove}>
              <FaGithub className="contact-icon" /> GitHub
            </a>
          </div>
        </div>

        <div className="hero-img" data-aos="fade-left">
          <div
            className="hero-img-wrapper"
            ref={wrapperRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Canvas de partículas orbitais — fica atrás da foto */}
            <canvas ref={canvasRef} className="hero-particles-canvas" />

            {/* Anel de luz pulsante (CSS) */}
            <div className="hero-orbit-ring" />

            <div
              className={`hero-img-card ${isFlipped ? "flipped" : ""}`}
              onClick={() => setIsFlipped(!isFlipped)}
              title="Clique para girar"
            >
              <div className="hero-img-face front">
                <img src="/img/foto-perfil.png" alt="Renato Paiva" />
              </div>
              <div className="hero-img-face back">
                <img src="/img/foto-avatar.png" alt="Renato Avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;