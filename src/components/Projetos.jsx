import React, { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { FaClock, FaPlay, FaPaw, FaChartLine, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ScrambleText from "./ScrambleText";

import { projetosData as projetos } from "../data/projetosData";

const Projetos = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeFilter, setActiveFilter] = useState("todos");

  const filterCategories = [
    { id: "todos", label: "Todos" },
    { id: "react", label: "React / SPA" },
    { id: "analytics", label: "Analytics & Dashboards" },
    { id: "apis", label: "APIs & Front-End" },
  ];

  const filteredProjetos = projetos.filter((proj) => {
    if (activeFilter === "todos") return true;
    if (activeFilter === "react") return proj.tech?.some(t => t.toLowerCase().includes("react"));
    if (activeFilter === "analytics") return proj.slug === "planvision" || proj.slug === "veritime" || proj.tech?.some(t => t.toLowerCase().includes("recharts"));
    if (activeFilter === "apis") return proj.slug === "sessaoplay" || proj.slug === "amicao" || proj.tech?.some(t => t.toLowerCase().includes("api"));
    return true;
  });

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const grid = scrollRef.current;
    if (grid) {
      checkScroll();
      grid.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        grid.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [filteredProjetos]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projetos" className="projetos" data-aos="fade-up">
      <h2 onMouseMove={handleMouseMove}>
        <ScrambleText text="Meus Projetos" />
      </h2>

      {/* Filtros de Categoria Interativos */}
      <div className="project-filters" onMouseMove={handleMouseMove}>
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeFilter === cat.id ? "active" : ""}`}
            onClick={() => setActiveFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="certificacoes-wrapper">
        <button 
          className={`nav-arrow left ${!canScrollLeft ? 'hidden' : ''}`} 
          onClick={() => scroll("left")} 
          aria-label="Anterior"
        >
          <FaChevronLeft />
        </button>

        <div className="certificacoes-grid" ref={scrollRef}>
          {filteredProjetos.map((proj) => (
            <div key={proj.slug} style={{ minWidth: '320px', display: 'flex', flexDirection: 'column' }}>
              <ProjectCard {...proj} />
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

export default Projetos;