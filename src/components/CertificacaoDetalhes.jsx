import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaBuilding, FaCalendarAlt, FaAward, FaExternalLinkAlt, FaCheckCircle, FaUserGraduate, FaNetworkWired, FaPalette, FaLaptopCode, FaPython } from "react-icons/fa";

import { certificacoesData } from "../data/certificacoesData";


const CertificacaoDetalhes = () => {
  const { slug } = useParams();
  const cert = certificacoesData.find(c => c.slug === slug);
  const [isZoomed, setIsZoomed] = useState(false);
  const [scale, setScale] = useState(1);
  const [touchStartDist, setTouchStartDist] = useState(0);

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

  const lightboxContentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Efeito para fechar o zoom ao pressionar a tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsZoomed(false);
    };

    if (isZoomed) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isZoomed]);

  // Lógica de Zoom via Scroll e Pinça
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.005;
    setScale(s => Math.min(Math.max(s + delta, 1), 4));
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      setTouchStartDist(Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      ));
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && touchStartDist > 0) {
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const delta = currentDist / touchStartDist;
      setScale(s => Math.min(Math.max(s * delta, 1), 4));
      setTouchStartDist(currentDist);
    }
  };

  useEffect(() => {
    const element = lightboxContentRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: false });
      return () => element.removeEventListener('wheel', handleWheel);
    }
  }, [isZoomed]);

  const closeLightbox = () => {
    setIsZoomed(false);
    setScale(1);
    setTouchStartDist(0);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  if (!cert) return <div className="container"><h2>Certificação não encontrada</h2></div>;

  return (
    <div className="certificacao-detalhes-wrapper">
      {/* Barra de Progresso Dinâmica */}
      <div className="reading-progress-container">
        <div className="reading-progress-bar" style={{ width: `${scrollProgress}%`, '--accent-color': cert.accentColor }}></div>
      </div>

      <section className="container projeto-detalhes-page" style={{ '--accent-color': cert.accentColor, '--accent-color-rgb': cert.accentColorRgb }}>
      <div className="project-detail-intro-header">
        <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
          <Link to="/" className="btn-secondary back-btn" onMouseMove={handleMouseMove}>
            <FaArrowLeft /> Voltar para a Home
          </Link>
        </div>
        
        <h1 onMouseMove={handleMouseMove} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
          <span style={{ color: 'var(--primary-color)' }}>{cert.icon}</span>
          {cert.title}
        </h1>
        
        <div className="exp-info-header">
          <p className="exp-company" style={{ fontSize: '1.2rem', marginBottom: '5px' }}>
            <FaBuilding className="exp-icon" /> {cert.issuer}
          </p>
          <p style={{ color: 'var(--text-gray)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaCalendarAlt color="var(--primary-color)" /> {cert.date}
          </p>
        </div>
      </div>

      <div className="projeto-detalhes-wrapper">
        <div className="projeto-detalhes-content" style={{ flex: 1 }}>
          <h3>Descrição da Formação</h3>
          <p style={{ fontSize: '1.05rem', marginBottom: '30px', lineHeight: '1.8' }}>{cert.description}</p>

          <h3 style={{ marginBottom: '20px' }}>Competências Adquiridas</h3>
          <div className="exp-tech-tags" style={{ marginBottom: '40px' }}>
            {cert.competencias.map((comp, i) => (
              <span key={i} className="tech-tag-sm">
                <FaCheckCircle style={{ color: 'var(--primary-color)' }} /> {comp}
              </span>
            ))}
          </div>
        </div>

        <div className="projeto-detalhes-img" style={{ flex: 0.4 }}>
          <div 
            className="card-img-wrapper" 
            style={{ marginBottom: '20px', cursor: 'zoom-in' }} 
            onClick={() => setIsZoomed(true)}
            title="Clique para ampliar"
          >
            <div className="hud-overlay" style={{ opacity: 1 }}>
              <div className="scan-line"></div>
              <div className="corner tl"></div><div className="corner tr"></div>
              <div className="corner bl"></div><div className="corner br"></div>
            </div>
            <img src={cert.img} alt={cert.title} style={{ width: '100%', borderRadius: '12px' }} />
          </div>

          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a 
              href={`https://wa.me/5511959117042?text=${encodeURIComponent(`Olá Renato, vi os detalhes da sua certificação em ${cert.title} e gostaria de conversar.`)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center' }}
              onMouseMove={handleMouseMove}
            >
              Conversar sobre isso
            </a>

            {cert.credentialUrl && (
              <a 
                href={cert.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary" 
                style={{ width: '100%', justifyContent: 'center' }}
                onMouseMove={handleMouseMove}
              >
                <FaExternalLinkAlt style={{ fontSize: '0.8rem' }} /> Ver Credencial Oficial
              </a>
            )}
          </div>
        </div>
      </div>

      {cert.gradeCurricular && (
        <div className="grade-curricular-section" style={{ marginTop: '50px' }}>
          <h3 style={{ marginBottom: '25px', textAlign: 'left' }}>Conteúdo Programático</h3>
          <div className="grade-curricular-grid">
            {cert.gradeCurricular.map((mod, idx) => (
              <div key={idx} className="modulo-item">
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px', fontSize: '0.9rem', textTransform: 'uppercase' }}>{mod.modulo}</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {mod.topicos.map((topico, i) => (
                    <li key={i} style={{ fontSize: '0.8rem', color: 'var(--text-gray)', marginBottom: '6px', display: 'flex', gap: '8px', lineHeight: '1.4' }}>
                      <span style={{ color: 'var(--primary-color)' }}>•</span> {topico}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>

      {/* Modal de Zoom fora da section para evitar problemas de posicionamento */}
      {isZoomed && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button 
            className="close-lightbox" 
            onClick={closeLightbox}
            aria-label="Fechar"
          >
            &times;
          </button>
          <div 
            className="lightbox-content" 
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setTouchStartDist(0)}
            ref={lightboxContentRef}
          >
            <img 
              src={cert.img} 
              alt={cert.title} 
              style={{ transform: `scale(${scale})`, transition: touchStartDist > 0 ? 'none' : 'transform 0.1s ease-out' }} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificacaoDetalhes;