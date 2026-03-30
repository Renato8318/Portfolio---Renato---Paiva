import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGitAlt, FaDatabase, FaCode } from 'react-icons/fa';

const technologiesData = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Web Scraping", icon: <FaCode /> }, // Usando FaCode como um ícone genérico para Web Scraping
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const Tecnologias = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="tecnologias" className="tecnologias" data-aos="fade-up">
      <h2 onMouseMove={handleMouseMove}>
        Tecnologias
      </h2>

      <ul className="tech-list">
        {technologiesData.map((tech, index) => (
          <li key={index} className="tech-item" onMouseMove={handleMouseMove}>
            <span className="tech-name">{tech.name}</span>
            {tech.icon && <span className="tech-icon">{tech.icon}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tecnologias;