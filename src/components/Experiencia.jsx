import React from "react";
import { Link } from "react-router-dom";
import { FaBuilding, FaPlus } from "react-icons/fa";
import { experienciaData } from "../data/experienciaData";

const Experiencia = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="experiencia" className="experiencia" data-aos="fade-up">
      <h2 onMouseMove={handleMouseMove}>
        Experiência
      </h2>

      <div className="experiencia-grid">
        {experienciaData.map(exp => (
          <div key={exp.slug} className={`experiencia-item ${exp.destaque ? "destaque" : ""}`}>
            <span className="exp-title" onMouseMove={handleMouseMove}>{exp.title}</span>
            <span className="exp-company"><FaBuilding className="exp-icon" /> {exp.company} | {exp.period}</span>
            
            <ul className="exp-list">
              {exp.cardTopics.map((topic, index) => (
                topic.isHighlight ? (
                  <li key={index} className="exp-highlight" onMouseMove={handleMouseMove}>
                    <div className="exp-highlight-header">
                      {topic.headerIcon} <strong>{topic.headerText}</strong>
                    </div>
                    <p>{topic.text}</p>
                    {topic.tags && (
                      <div className="exp-tech-tags">
                        {topic.tags.map((tag, i) => (
                          <span key={i} className="tech-tag-sm">{tag.icon} {tag.name}</span>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={index} onMouseMove={handleMouseMove}>
                    <span className="exp-icon">{topic.icon}</span>
                    <span>{topic.text}</span>
                  </li>
                )
              ))}
            </ul>
            <div className="exp-fade-overlay">
              <Link to={`/experiencia/${exp.slug}`} className="btn-details" onMouseMove={handleMouseMove}>
                <FaPlus style={{ fontSize: '0.7rem' }} /> Saber mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiencia;