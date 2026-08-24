import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaPlus } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import Reactions from "./Reactions";

const ProjectCard = ({
  title,
  description,
  tech,
  icon,
  img,
  linkDemo,
  linkGit,
  destaque,
  slug
}) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calcula a rotação proporcional (máximo de 7 graus)
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    e.currentTarget.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
    e.currentTarget.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <div 
      className={`card project-tilt-card ${destaque ? "destaque" : ""}`} 
      data-aos="zoom-in"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
        <img src={img} alt={title} className="card-img" loading="lazy" />
      </div>

      {/* Reações posicionadas logo abaixo da imagem */}
      <Reactions slug={slug} wrapperStyle={{ margin: '10px auto', padding: '5px 15px', transform: 'scale(0.9)' }} />

      <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <span style={{ color: 'var(--primary-color)', fontSize: '1.1rem' }}>{icon}</span>
        {title}
      </h3>
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

        <Link to={`/projeto/${slug}`} className="btn-details" onMouseMove={handleMouseMove}>
          <FaPlus style={{ fontSize: '0.7rem' }} /> Saber mais
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;