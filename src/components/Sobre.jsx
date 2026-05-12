import React from "react";

const Sobre = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="sobre" id="sobre" data-aos="fade-up">
      <div className="sobre-content">
        <h2 onMouseMove={handleMouseMove}>
          Sobre Mim
        </h2>
        <div className="sobre-text">
          <p>
            Sou um Desenvolvedor Front-end com DNA analítico, atualmente focado no <strong>Planejamento de TI e Inteligência de Dados (MIS)</strong>. Minha trajetória é marcada pela transição entre o suporte técnico especializado e a criação de soluções automatizadas.
          </p>
          <p>
            Hoje, uno a agilidade do <strong>React</strong> com a precisão do <strong>Power BI</strong> e <strong>SQL</strong> para construir dashboards que guiam decisões estratégicas e otimizam processos operacionais em tempo real. Sou especialista em 'traduzir' dados complexos em interfaces intuitivas e automações em <strong>Python</strong> que geram eficiência real para o negócio.
          </p>
        </div>

        <div className="soft-skills">
          <h4 data-aos="fade-right">Competências Comportamentais</h4>
          <ul className="soft-skills-list">
            {[
              "Pensamento Analítico", "Visão Estratégica", "Tomada de Decisão Baseada em Dados",
              "Foco no Cliente", "Resolução de Falhas Críticas",
              "Otimização de Processos", "Comunicação Assertiva", "Adaptabilidade"
            ].map((skill, i) => (
              <li key={i} className="soft-skill-item" onMouseMove={handleMouseMove}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sobre;