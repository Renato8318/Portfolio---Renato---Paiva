import React, { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { FaClock, FaPlay, FaPaw, FaChartLine, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projetos = [
  {
    title: "PlanVision",
    icon: <FaChartLine />,
    slug: "planvision",
    description: "Plataforma de gestão operacional, inteligência de negócios e controle de RH com Analytics.",
    tech: ["React", "Vite", "Recharts", "CSS3"],
    img: "/img/planvision.png",
    linkDemo: "https://plan-vision.vercel.app/",
    linkGit: "https://github.com/Renato8318/PlanVision",
    destaque: true
  },
  {
    title: "Veritime",
    icon: <FaClock />,
    slug: "veritime",
    description: "Gestão de ponto eletrônico em tempo real com persistência local.",
    tech: ["React", "JavaScript", "CSS3"],
    img: "/img/veritime.png",
    linkDemo: "https://projeto-controle-ponto.vercel.app/",
    linkGit: "https://github.com/Renato8318/ProjetoControlePonto"
  },
  {
    title: "SessãoPlay",
    icon: <FaPlay />,
    slug: "sessaoplay",
    description: "Streaming de filmes com API.",
    tech: ["JavaScript", "CSS", "TMDB API"],
    img: "/img/sessaoplay.png",
    linkDemo: "https://meu-clone-nu-nine-32.vercel.app/",
    linkGit: "https://github.com/Renato8318/Netflix-Clone"
  },
  {
    title: "Amicão",
    icon: <FaPaw />,
    slug: "amicao",
    description: "Adoção de cães online.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "/img/amicao.png",
    linkDemo: "https://adoteum-pet.vercel.app/?theme=light",
    linkGit: "https://github.com/Renato8318/AdoteumPet"
  }
];

const Projetos = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
  }, []);

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
        Meus Projetos
      </h2>

      <div className="certificacoes-wrapper">
        <button 
          className={`nav-arrow left ${!canScrollLeft ? 'hidden' : ''}`} 
          onClick={() => scroll("left")} 
          aria-label="Anterior"
        >
          <FaChevronLeft />
        </button>

        <div className="certificacoes-grid" ref={scrollRef}>
          {projetos.map((proj) => (
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