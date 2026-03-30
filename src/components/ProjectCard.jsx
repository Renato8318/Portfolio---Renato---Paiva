import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaRocket } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const ProjectCard = ({
  title,
  description,
  tech,
  img,
  linkDemo,
  linkGit,
  destaque,
  slug
}) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div 
      className={`card ${destaque ? "destaque" : ""}`} 
      data-aos="zoom-in"
      onMouseMove={handleMouseMove}
    >
      {destaque && <span className="badge-destaque">Destaque</span>}
      
      <div className="card-img-wrapper">
        <div className="hud-overlay">
          <div className="scan-line"></div>
          <div className="corner tl"></div>
          <div className="corner tr"></div>
          <div className="corner bl"></div>
          <div className="corner br"></div>
        </div>
        <img src={img} alt={title} className="card-img" />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="card-techs">
        {tech.map((t, i) => (
          <span key={i} className="tech-tag">{t}</span>
        ))}
      </div>

      <div className="links">
        <a href={linkDemo} target="_blank" rel="noreferrer" className="btn-card">
          <SiVercel /> Ver Demo
        </a>

        <a href={linkGit} target="_blank" rel="noreferrer" className="btn-card">
          <FaGithub /> GitHub
        </a>

        <Link to={`/projeto/${slug}`} className="btn-details">
          <FaRocket /> Objetivo e Desafios
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;