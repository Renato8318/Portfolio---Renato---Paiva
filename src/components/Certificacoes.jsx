import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAward, FaCalendarAlt, FaChevronLeft, FaChevronRight, FaBuilding, FaPlus, FaUserGraduate, FaNetworkWired, FaPalette, FaLaptopCode, FaPython } from "react-icons/fa";

const certificationsData = [
  {
    id: 6,
    slug: "lean-six-sigma-yellow-belt",
    title: "📊 Lean Six Sigma Yellow Belt",
    issuer: "FM2S Educação e Consultoria",
    date: "Maio de 2026",
    description: "Certificação em melhoria contínua, análise estratégica de processos e otimização de resultados baseada em dados.",
    img: "/img/certificado-lean-six-sigma.jpg",
    credentialUrl: "", 
    icon: <FaAward />,
    destaque: true,
  },
  {
    id: 1,
    slug: "analise-desenvolvimento-sistemas",
    title: "🎓 Tecnólogo em Análise e Desenvolvimento de Sistemas",
    issuer: "Universidade Cruzeiro do Sul",
    date: "2022 - 2024",
    description: "Capacitação em desenvolvimento de software, banco de dados, análise de requisitos, arquitetura de sistemas e metodologias ágeis, com foco em tecnologia, inovação e resolução de problemas.",
    img: "/img/diploma-ads.jpg", // Certifique-se de colocar a foto nesta pasta
    credentialUrl: "", // Deixe vazio se não tiver link, ou coloque o link do LinkedIn/PDF
    icon: <FaUserGraduate />,
  },
  {
    id: 2,
    slug: "redes-computadores-alura",
    title: "🌐 Redes de Computadores",
    issuer: "Alura",
    date: "18 de Junho de 2025",
    description: "🚀 Finalização de 4 cursos da Trilha Alura focados em infraestrutura, conectividade e segurança.",
    img: "/img/certificado-alura-redes.jpg", 
    credentialUrl: "", 
    icon: <FaNetworkWired />,
  },
  {
    id: 3,
    slug: "ui-design-devs-alura",
    title: "🎨 Formação UI Design para Devs",
    issuer: "Alura",
    date: "Junho de 2025",
    description: "✨ Formação focada em fundamentos de design, heurísticas e animações para desenvolvedores.",
    img: "/img/certificado-alura-ui.jpg", // Salve a imagem com este nome na pasta public/img/
    credentialUrl: "", 
    icon: <FaPalette />,
  },
  {
    id: 4,
    slug: "desenvolvimento-frontend-alura",
    title: "💻 Formação Desenvolvimento Front-end",
    issuer: "Alura",
    date: "Junho de 2025",
    description: "⚡ Cursos focados na criação de aplicações web dinâmicas, manipulação do DOM e Node.js.",
    img: "/img/certificado-alura-frontend.jpg", // Salve a imagem com este nome na pasta public/img/
    credentialUrl: "", 
    icon: <FaLaptopCode />,
  },
  {
    id: 5,
    slug: "python-oo-alura",
    title: "🐍 Python: aplicando a Orientação a Objetos",
    issuer: "Alura",
    date: "Junho de 2025",
    description: "⚙️ Desenvolvimento de competências em Programação Orientada a Objetos com Python.",
    img: "/img/certificado-alura-python-oo.jpg", // Nome sugerido para a imagem
    credentialUrl: "", 
    icon: <FaPython />,
  }
];

const Certificacoes = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // Margem de 5px para evitar problemas de arredondamento em diferentes browsers
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const grid = scrollRef.current;
    if (grid) {
      checkScroll(); // Checagem inicial
      grid.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll); // Reavalia se a tela mudar de tamanho
      return () => {
        grid.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 325; // Largura do card (300px) + gap (25px)
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="certificacoes" className="certificacoes" data-aos="fade-up">
      <h2 onMouseMove={handleMouseMove}>Certificações</h2>
      
      <div className="certificacoes-wrapper">
        <button 
          className={`nav-arrow left ${!canScrollLeft ? 'hidden' : ''}`} 
          onClick={() => scroll("left")} 
          aria-label="Anterior"
        >
          <FaChevronLeft />
        </button>

        <div className="certificacoes-grid" ref={scrollRef}>
          {certificationsData.map(cert => (
            <div key={cert.id} className={`certificacao-item ${cert.destaque ? "destaque" : ""}`} onMouseMove={handleMouseMove}>
              {cert.destaque && <span className="badge-destaque">Destaque</span>}
              
              {cert.img && (
                <div className="card-img-wrapper cert-card-img">
                  <div className="hud-overlay" style={{ opacity: 1 }}>
                    <div className="scan-line"></div>
                    <div className="corner tl"></div><div className="corner tr"></div>
                    <div className="corner bl"></div><div className="corner br"></div>
                  </div>
                  <img src={cert.img} alt={cert.title} className="card-img" />
                </div>
              )}
              {!cert.img && <div className="cert-icon-wrapper">{cert.icon || <FaAward />}</div>}
              <h3 className="cert-title">{cert.title}</h3>

              <p className="cert-issuer"><FaBuilding /> {cert.issuer}</p>
              <p className="cert-date"><FaCalendarAlt /> {cert.date}</p>
              
              <Link to={`/certificacao/${cert.slug}`} className="btn-details" onMouseMove={handleMouseMove} style={{ marginTop: 'auto' }}>
                <FaPlus style={{ fontSize: '0.7rem' }} /> Saber mais
              </Link>
            </div>
          ))}
        </div>

        <button 
          className={`nav-arrow right ${!canScrollRight ? 'hidden' : ''}`} 
          onClick={() => scroll("right")} 
          aria-label="Próximo"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Certificacoes;