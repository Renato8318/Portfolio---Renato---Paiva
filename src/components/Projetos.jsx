import React from "react";
import ProjectCard from "./ProjectCard";

const projetos = [
  {
    title: "Veritime",
    slug: "veritime",
    description: "Plataforma de gestão de ponto integrada.",
    tech: ["JavaScript", "Node.js", "PostgreSQL"],
    img: "/img/veritime.png",
    linkDemo: "https://projeto-controle-ponto.vercel.app/",
    linkGit: "https://github.com/Renato8318/ProjetoControlePonto",
    destaque: true
  },
  {
    title: "SessãoPlay",
    slug: "sessaoplay",
    description: "Streaming de filmes com API.",
    tech: ["JavaScript", "CSS", "TMDB API"],
    img: "/img/sessaoplay.png",
    linkDemo: "https://meu-clone-nu-nine-32.vercel.app/",
    linkGit: "https://github.com/Renato8318/Netflix-Clone"
  },
  {
    title: "Amicão",
    slug: "amicao",
    description: "Adoção de cães online.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "/img/amicao.png",
    linkDemo: "https://adoteum-pet.vercel.app/",
    linkGit: "https://github.com/Renato8318/AdoteumPet"
  }
];

const Projetos = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="projetos" className="projetos" data-aos="fade-up">
      <h2 onMouseMove={handleMouseMove}>
        Meus Projetos
      </h2>

      <div className="grid">
        {projetos.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projetos;