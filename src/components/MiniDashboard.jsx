import React, { useState } from "react";
import { FaPython, FaDatabase, FaChartBar, FaChartLine, FaClock, FaArrowRight, FaCalendarAlt, FaRobot } from "react-icons/fa";

const MiniDashboard = () => {
  const [phase, setPhase] = useState("planejamento"); // Padrão é a fase mais recente

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  // Dados das métricas de cada fase
  const kpis = {
    suporte: [
      { label: "Automações Python", value: "98%", sub: "Processos manuais reduzidos", icon: <FaRobot /> },
      { label: "Tempo de Resposta SLA", value: "< 2h", sub: "Atendimento especializado", icon: <FaClock /> },
      { label: "Scrapers de Dados", value: "5+", sub: "Robôs ativos coletando dados", icon: <FaPython /> }
    ],
    planejamento: [
      { label: "Decisões baseadas em BI", value: "100%", sub: "Dados integrados para diretoria", icon: <FaChartBar /> },
      { label: "Registros Modelados (SQL)", value: "10M+", sub: "Tratamento de grandes volumes", icon: <FaDatabase /> },
      { label: "SLA Operacional de TI", value: "+15%", sub: "Ganho de eficiência operacional", icon: <FaChartLine /> }
    ]
  };

  // Comparativo de competências entre as duas fases (escala de 0 a 100)
  const skills = [
    { name: "Suporte Técnico & ERPs", suporte: 95, planejamento: 100, color: "#8a2be2" },
    { name: "Automação em Python (RPA)", suporte: 85, planejamento: 90, color: "#306998" },
    { name: "Análise SQL & Bancos de Dados", suporte: 30, planejamento: 90, color: "#f29111" },
    { name: "Dashboards & Power BI", suporte: 10, planejamento: 95, color: "#f2c811" },
    { name: "Planejamento Estratégico (MIS)", suporte: 10, planejamento: 90, color: "#10b981" },
    { name: "Desenvolvimento React (Front-end)", suporte: 20, planejamento: 80, color: "#61dafb" }
  ];

  return (
    <section id="dashboard" className="dashboard-section" data-aos="fade-up">
      <div className="tech-graph-bg">
        <svg viewBox="0 0 1000 200" preserveAspectRatio="none">
          <path d="M0,80 Q200,180 400,60 T800,150 T1000,50 L1000,200 L0,200 Z" fill="rgba(99, 102, 241, 0.02)" />
        </svg>
      </div>

      <h2 onMouseMove={handleMouseMove}>Painel de Evolução Profissional</h2>
      <p className="section-desc">
        Acompanhe de forma interativa como migrei de um perfil técnico especializado em suporte e automação (RPA) para a inteligência de dados, planejamento de TI e desenvolvimento de dashboards corporativos de larga escala.
      </p>

      <div className="dashboard-container">
        {/* Seletores de Timeline */}
        <div className="dashboard-tabs">
          <button 
            className={`tab-btn ${phase === "suporte" ? "active" : ""}`}
            onClick={() => setPhase("suporte")}
            onMouseMove={handleMouseMove}
          >
            <FaCalendarAlt className="tab-icon" />
            <div>
              <span className="tab-title">Automação & Suporte</span>
              <span className="tab-subtitle">2023 – 2024 (Jotatei)</span>
            </div>
          </button>

          <div className="tab-arrow-container">
            <FaArrowRight className="tab-arrow" />
          </div>

          <button 
            className={`tab-btn ${phase === "planejamento" ? "active" : ""}`}
            onClick={() => setPhase("planejamento")}
            onMouseMove={handleMouseMove}
          >
            <FaChartLine className="tab-icon" />
            <div>
              <span className="tab-title">Inteligência & Planejamento</span>
              <span className="tab-subtitle">2025 – 2026 (Vermont)</span>
            </div>
          </button>
        </div>

        {/* Conteúdo do Painel */}
        <div className="dashboard-grid-content">
          
          {/* Métricas KPI */}
          <div className="kpi-cards">
            {kpis[phase].map((kpi, index) => (
              <div 
                key={index} 
                className="kpi-card" 
                onMouseMove={handleMouseMove}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="hud-overlay">
                  <div className="scan-line"></div>
                  <div className="corner tl"></div><div className="corner tr"></div>
                  <div className="corner bl"></div><div className="corner br"></div>
                </div>
                <div className="kpi-header">
                  <span className="kpi-icon" style={{ color: "var(--primary-color)" }}>{kpi.icon}</span>
                  <span className="kpi-label">{kpi.label}</span>
                </div>
                <div className="kpi-value">{kpi.value}</div>
                <div className="kpi-sub">{kpi.sub}</div>
              </div>
            ))}
          </div>

          {/* Gráfico de Evolução de Habilidades */}
          <div className="skills-evolution-card" onMouseMove={handleMouseMove}>
            <div className="hud-overlay">
              <div className="corner tl"></div><div className="corner tr"></div>
              <div className="corner bl"></div><div className="corner br"></div>
            </div>
            <h3>Comparativo de Habilidades Técnicas</h3>
            <p className="card-subtitle">A barra cresce e mostra sua evolução ao alternar as fases acima</p>

            <div className="skill-bars-list">
              {skills.map((skill, index) => {
                const currentVal = phase === "suporte" ? skill.suporte : skill.planejamento;
                const prevVal = phase === "suporte" ? skill.planejamento : skill.suporte;
                const delta = currentVal - prevVal;
                
                return (
                  <div key={index} className="skill-progress-wrapper">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-val-label">
                        {currentVal}% 
                        {delta > 0 && phase === "planejamento" && (
                          <span className="skill-growth-badge">+{delta}%</span>
                        )}
                      </span>
                    </div>
                    <div className="skill-progress-bar-bg">
                      <div 
                        className="skill-progress-bar-fill" 
                        style={{ 
                          width: `${currentVal}%`, 
                          background: `linear-gradient(90deg, var(--primary-color) 0%, ${skill.color} 100%)` 
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MiniDashboard;


