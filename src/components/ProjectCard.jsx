import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaPlus, FaHeart, FaThumbsUp } from "react-icons/fa";
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
  const [reactions, setReactions] = useState({ amei: 0, curti: 0, palmas: 0 });
  const [userSelection, setUserSelection] = useState(null);

  useEffect(() => {
    const savedReactions = localStorage.getItem(`reactions-${slug}`);
    const savedSelection = localStorage.getItem(`selection-${slug}`);
    
    if (savedReactions) {
      setReactions(JSON.parse(savedReactions));
    } else {
      const initial = { 
        amei: Math.floor(Math.random() * 10) + 2, 
        curti: Math.floor(Math.random() * 20) + 5,
        palmas: Math.floor(Math.random() * 5)
      };
      setReactions(initial);
      localStorage.setItem(`reactions-${slug}`, JSON.stringify(initial));
    }
    if (savedSelection) setUserSelection(savedSelection);
  }, [slug]);

  const fireConfetti = (e, color) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
      const p = document.createElement('div');
      p.className = 'confetti-particle';
      p.style.setProperty('--bg', color);
      p.style.left = `${x}px`;
      p.style.top = `${y}px`;
      const angle = Math.random() * Math.PI * 2;
      const velocity = 40 + Math.random() * 60;
      p.style.setProperty('--dx', `${Math.cos(angle) * velocity}px`);
      p.style.setProperty('--dy', `${Math.sin(angle) * velocity}px`);
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 800);
    }
  };

  const handleReaction = (e, type) => {
    const colors = { amei: '#f43f5e', curti: '#3b82f6', palmas: '#ff9800' };
    const newReactions = { ...reactions };
    if (userSelection === type) {
      newReactions[type] -= 1;
      setUserSelection(null);
      localStorage.removeItem(`selection-${slug}`);
    } else {
      if (userSelection) newReactions[userSelection] -= 1;
      newReactions[type] += 1;
      setUserSelection(type);
      localStorage.setItem(`selection-${slug}`, type);
      fireConfetti(e, colors[type]);
    }
    setReactions(newReactions);
    localStorage.setItem(`reactions-${slug}`, JSON.stringify(newReactions));
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

      {/* Reações agora aparecem embaixo do texto antes dos links */}
      <div className="reactions-wrapper" style={{ margin: '15px auto', padding: '5px 15px', transform: 'scale(0.9)' }}>
        <button className={`reaction-btn amei ${userSelection === 'amei' ? 'active' : ''}`} onClick={(e) => handleReaction(e, 'amei')}>
          <FaHeart /> <span>{reactions.amei}</span>
        </button>
        <button className={`reaction-btn curti ${userSelection === 'curti' ? 'active' : ''}`} onClick={(e) => handleReaction(e, 'curti')}>
          <FaThumbsUp /> <span>{reactions.curti}</span>
        </button>
        <button className={`reaction-btn palmas ${userSelection === 'palmas' ? 'active' : ''}`} onClick={(e) => handleReaction(e, 'palmas')}>
          <span className="emoji">👏</span> <span>{reactions.palmas}</span>
        </button>
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