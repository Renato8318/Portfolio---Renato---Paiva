import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaPlus, FaHeart } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

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
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  // Lógica de Curtidas (Persistência Local)
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const savedLikes = localStorage.getItem(`likes-${slug}`);
    const userLiked = localStorage.getItem(`user-liked-${slug}`);
    
    if (savedLikes) {
      setLikes(parseInt(savedLikes));
    } else {
      const initial = Math.floor(Math.random() * 5) + 2; // Simula algumas curtidas iniciais
      setLikes(initial);
      localStorage.setItem(`likes-${slug}`, initial.toString());
    }
    setHasLiked(userLiked === "true");
  }, [slug]);

  const handleLike = () => {
    if (!hasLiked) {
      // Trigger de animação simples (opcional: pode-se usar uma lib como canvas-confetti ou apenas CSS)
    }
    const newCount = hasLiked ? likes - 1 : likes + 1;
    setLikes(newCount);
    setHasLiked(!hasLiked);
    localStorage.setItem(`likes-${slug}`, newCount.toString());
    localStorage.setItem(`user-liked-${slug}`, (!hasLiked).toString());
  };

  return (
    <div 
      className={`card ${destaque ? "destaque" : ""}`} 
      data-aos="zoom-in"
      onMouseMove={handleMouseMove}
    >
      {destaque && <span className="badge-destaque">Destaque</span>}
      
      <button 
        className={`like-btn ${hasLiked ? "active animate-pop" : ""}`} 
        onClick={handleLike}
        title={hasLiked ? "Remover curtida" : "Curtir projeto"}
      >
        <FaHeart />
        <span>{likes}</span>
      </button>
      
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