import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaBuilding, FaCalendarAlt, FaAward, FaExternalLinkAlt, FaCheckCircle, FaUserGraduate, FaNetworkWired, FaPalette, FaLaptopCode, FaPython } from "react-icons/fa";

// Função utilitária para converter HEX para RGB
const hexToRgb = (hex) => {
  if (!hex) return '99, 102, 241'; // Default primary color RGB
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

const certData = {
  "analise-desenvolvimento-sistemas": {
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    icon: <FaUserGraduate />,
    issuer: "Universidade Cruzeiro do Sul",
    date: "2022 - 2024",
    description: "Capacitação em desenvolvimento de software, banco de dados, análise de requisitos, arquitetura de sistemas e metodologias ágeis, com foco em tecnologia, inovação e resolução de problemas.",
    img: "/img/diploma-ads.jpg",
    competencias: [
      "Desenvolvimento de Software", "Análise de Sistemas", 
      "Banco de Dados (Oracle / SQL Server)", "Java e XML", 
      "UML / RUP", "Metodologias Ágeis (Scrum)", 
      "Segurança da Informação", "Arquitetura de Sistemas",
      "Inteligência Artificial e Machine Learning"
    ],
    accentColor: "#ff8c00", // Dark Orange
  },
  "redes-computadores-alura": {
    title: "Redes de Computadores",
    icon: <FaNetworkWired />,
    issuer: "Alura",
    date: "18 de Junho de 2025",
    description: "🚀 Finalização de 4 cursos da Trilha Alura focados em infraestrutura, conectividade e segurança, com carga horária total de 37 horas.",
    img: "/img/certificado-alura-redes.jpg",
    competencias: [
      "Redes: dos conceitos iniciais à criação de uma intranet", 
      "Redes: construindo um projeto com VLANs", 
      "Redes: implementando roteamento, DNS e IPv6", 
      "Redes Wi-Fi: criando uma rede sem fio de modo seguro"
    ]
  },
  "ui-design-devs-alura": {
    title: "Formação UI Design para Devs",
    icon: <FaPalette />,
    issuer: "Alura",
    date: "Junho de 2025",
    description: "✨ Formação focada em fundamentos de design, heurísticas e animações para desenvolvedores criarem interfaces mais atraentes e funcionais.",
    img: "/img/certificado-alura-ui.jpg",
    competencias: [
      "UI para Devs: interfaces atraentes com fundamentos do design", 
      "UI para Devs: aprimorando projetos web com heurísticas", 
      "UI para devs: construindo interfaces animadas"
    ]
  },
  "desenvolvimento-frontend-alura": {
    title: "Formação Desenvolvimento Front-end",
    icon: <FaLaptopCode />,
    issuer: "Alura",
    date: "Junho de 2025",
    description: "⚡ Cursos focados na criação de aplicações web dinâmicas, cobrindo desde a manipulação do DOM e Promises até a implementação de CRUD e domínio do ambiente Node.js.",
    img: "/img/certificado-alura-frontend.jpg",
    competencias: [
      "JavaScript: construindo páginas dinâmicas", 
      "JavaScript: entendendo promises e async/await", 
      "JavaScript: métodos de array", 
      "JavaScript: manipulando elementos no DOM", 
      "JavaScript: explorando localStorage", 
      "JavaScript: implementando CRUD com requisições HTTP", 
      "JavaScript: evoluindo a sua aplicação com ES6+", 
      "Node.js e terminal"
    ],
    accentColor: "#ffd700", // Gold
  },
  "python-oo-alura": {
    title: "Python: aplicando a Orientação a Objetos",
    icon: <FaPython />,
    issuer: "Alura",
    date: "Junho de 2025",
    description: "⚙️ Exploração aprofundada da Programação Orientada a Objetos em Python, focando na estruturação de classes, utilização de construtores, implementação de decorators como @property e organização de código através de importação e composição.",
    img: "/img/certificado-alura-python-oo.jpg",
    competencias: [
      "Classes", 
      "Construtor e instanciando objetos", 
      "Property e métodos de classe", 
      "Importando classe e composição", 
      "Consolidando os conhecimentos de POO"
    ],
    accentColor: "#4169e1", // Royal Blue
  }
};

// Adiciona accentColorRgb a cada objeto de certificação
Object.keys(certData).forEach(key => {
  certData[key].accentColorRgb = hexToRgb(certData[key].accentColor || '#6366f1'); // Fallback para primary-color
});


const CertificacaoDetalhes = () => {
  const { slug } = useParams();
  const cert = certData[slug];
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

          <div style={{ marginTop: '30px' }}>
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
          </div>
        </div>
      </div>
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