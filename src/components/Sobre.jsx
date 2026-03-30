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
            Sou um Desenvolvedor Front-end com um olhar analítico apurado, moldado por anos de experiência em suporte técnico e análise de dados. Minha trajetória na <strong>Jotatei - Informática</strong>, operando sistemas como <strong>SGD Express</strong> e <strong>Acione-me</strong>, me permitiu dominar a arte de transformar problemas complexos em soluções de alta disponibilidade.
          </p>
          <p>
            Especialista em unir a agilidade do <strong>React</strong> com a eficiência das automações em <strong>Python</strong>, utilizo ferramentas como <strong>Salesforce</strong> para monitorar KPIs e apoiar decisões estratégicas. Meu objetivo é construir interfaces que não sejam apenas bonitas, mas que resolvam desafios reais de negócio através de código limpo e dados inteligentes.
          </p>
        </div>

        <div className="soft-skills">
          <h4 data-aos="fade-right">Competências Comportamentais</h4>
          <ul className="soft-skills-list">
            {[
              "Pensamento Analítico", "Foco no Cliente", "Resolução de Falhas Críticas",
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