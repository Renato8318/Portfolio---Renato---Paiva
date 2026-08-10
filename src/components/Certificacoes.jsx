import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAward, FaCalendarAlt, FaChevronLeft, FaChevronRight, FaBuilding, FaPlus, FaUserGraduate, FaNetworkWired, FaPalette, FaLaptopCode, FaPython } from "react-icons/fa";

import { certificacoesData as certificationsData } from "../data/certificacoesData";

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