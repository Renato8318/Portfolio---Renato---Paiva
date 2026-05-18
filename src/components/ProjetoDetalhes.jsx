import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaGithub, FaRocket, FaArrowLeft, FaWhatsapp, FaHeart, FaThumbsUp } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const detalhesData = {
  veritime: {
    title: "🕒 Veritime",
    tagline: "Veritime — O tempo no seu controle",
    descricao: "Sistema de acompanhamento de ponto eletrônico que permite ao usuário visualizar em tempo real sua jornada de trabalho, escala e controle de pausas.",
    problema: "Falta de visibilidade e controle sobre registros de ponto e pausas.",
    solucao: "Aplicação web com monitoramento em tempo real da jornada de trabalho.",
    desafio: "Atualizar informações dinamicamente sem comprometer a performance.",
    decisaoTecnica: "Uso de JavaScript para manipulação dinâmica do DOM e integração com API.",
    aprendizado: "Consumo de API, organização de código e melhoria de performance.",
    resultado: "Melhor controle da jornada e redução de inconsistências nos registros.",
    contexto: "Contexto: inspirado em sistemas corporativos reais de controle de ponto.",
    imagem: "/img/veritime.png",
    tech: ["JavaScript", "Node.js", "PostgreSQL"],
    linkDemo: "https://projeto-controle-ponto.vercel.app/",
    linkGit: "https://github.com/Renato8318/ProjetoControlePonto"
  },
  sessaoplay: {
    title: "🎬 SessãoPlay",
    tagline: "SessãoPlay — O entretenimento na palma da sua mão",
    descricao: "Aplicação de streaming robusta que utiliza integração em tempo real com APIs externas para oferecer um catálogo completo de filmes e séries com navegação fluida.",
    problema: "Usuários enfrentavam dificuldades para encontrar informações técnicas e trailers de lançamentos em uma interface que fosse rápida e amigável.",
    solucao: "Desenvolvimento de uma plataforma centralizada com busca inteligente, categorização por gênero e carregamento dinâmico de metadados via TMDB API.",
    desafio: "O maior desafio técnico foi o gerenciamento do estado assíncrono para garantir que a interface não 'travasse' durante a renderização de imagens em alta resolução e dados pesados da API.",
    decisaoTecnica: "Utilização de manipulação nativa do DOM e Fetch API para gerenciar requisições assíncronas e renderização dinâmica dos metadados.",
    aprendizado: "Aprimorei o domínio sobre consumo de APIs RESTful, tratamento de estados de erro (UX de fallback) e otimização de performance em interfaces ricas em mídia.",
    resultado: "Uma plataforma estável e 100% responsiva, proporcionando uma experiência de usuário comparável a grandes players de mercado.",
    contexto: "Desenvolvido como projeto de consolidação de arquitetura front-end escalável e integração de serviços externos.",
    imagem: "/img/sessaoplay.png",
    tech: ["JavaScript", "CSS", "TMDB API"],
    linkDemo: "https://meu-clone-nu-nine-32.vercel.app/",
    linkGit: "https://github.com/Renato8318/Netflix-Clone"
  },
  amicao: {
    title: "🐶 Amicão",
    tagline: "Amicão — Encontre seu melhor amigo hoje",
    descricao: "Plataforma social dedicada à facilitação do processo de adoção de animais, conectando tutores e pets através de uma vitrine digital intuitiva.",
    problema: "A falta de organização visual e a dispersão de informações em sites de abrigos tornavam o processo de adoção confuso e desestimulante para novos tutores.",
    solucao: "Criação de um portal direto e acolhedor, onde a clareza visual e a facilidade de contato são os pilares da jornada do usuário.",
    desafio: "Projetar uma interface extremamente leve e acessível para dispositivos móveis de entrada, garantindo que o tempo de carregamento fosse mínimo mesmo em conexões lentas.",
    decisaoTecnica: "Optei por uma abordagem 'Pure Web' utilizando HTML5 semântico e CSS moderno (Grid e Flexbox) para atingir performance máxima sem a sobrecarga de frameworks externos.",
    aprendizado: "Aprofundamento em manipulação nativa do DOM com JavaScript, conceitos de design centrado no usuário (User-Centered Design) e otimização de recursos estáticos.",
    resultado: "Uma plataforma rápida e eficiente que remove barreiras tecnológicas entre os animais e seus futuros lares.",
    contexto: "Inspirado em necessidades reais de ONGs de proteção animal, visando modernizar a presença digital do terceiro setor.",
    imagem: "/img/amicao.png",
    tech: ["HTML", "CSS", "JavaScript"],
    linkDemo: "https://adoteum-pet.vercel.app/",
    linkGit: "https://github.com/Renato8318/AdoteumPet"
  }
};

const ProjetoDetalhes = () => {
  const { slug } = useParams();
  const projeto = detalhesData[slug];

  // Estado para gerenciar reações locais
  const [reactions, setReactions] = useState({ amei: 0, curti: 0, palmas: 0 });
  const [userSelection, setUserSelection] = useState(null);

  useEffect(() => {
    const savedReactions = localStorage.getItem(`reactions-${slug}`);
    const savedSelection = localStorage.getItem(`selection-${slug}`);
    
    if (savedReactions) {
      setReactions(JSON.parse(savedReactions));
    } else {
      const initial = { amei: 12, curti: 45, palmas: 8 };
      setReactions(initial);
      localStorage.setItem(`reactions-${slug}`, JSON.stringify(initial));
    }
    if (savedSelection) setUserSelection(savedSelection);
  }, [slug]);

  const fireConfetti = (e, color) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
      const p = document.createElement('div');
      p.className = 'confetti-particle';
      p.style.setProperty('--bg', color);
      p.style.left = `${x}px`;
      p.style.top = `${y}px`;
      const angle = Math.random() * Math.PI * 2;
      const velocity = 50 + Math.random() * 70;
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

  // Garante que a página comece no topo ao carregar os detalhes do projeto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  if (!projeto) return <div className="container"><h2>Projeto não encontrado</h2></div>;

  return (
    <section className="container projeto-detalhes-page">
      <Link to="/" className="btn-secondary back-btn">
        <FaArrowLeft /> Voltar para a Home
      </Link>
      
      <h1 onMouseMove={handleMouseMove}>{projeto.title}</h1>

      {projeto.tagline && <p className="tagline">{projeto.tagline}</p>}

      <div className="card-techs" style={{ marginBottom: '15px' }}>
        {projeto.tech?.map((t, i) => (
          <span key={i} className="tech-tag">{t}</span>
        ))}
      </div>
      
      <div className="projeto-detalhes-wrapper">
        <div className="projeto-detalhes-img card-img-wrapper">
          <div className="hud-overlay" style={{ opacity: 1 }}>
            <div className="scan-line"></div>
            <div className="corner tl"></div><div className="corner tr"></div>
            <div className="corner bl"></div><div className="corner br"></div>
          </div>
          <img src={projeto.imagem} alt={projeto.title} className="card-img" />
        </div>

        <div className="projeto-detalhes-content">
          {/* Exibição Dinâmica dos Detalhes */}
          {projeto.descricao && <p>{projeto.descricao}</p>}
          
          {projeto.problema && <p><strong>Problema:</strong> {projeto.problema}</p>}
          {projeto.solucao && <p><strong>Solução:</strong> {projeto.solucao}</p>}
          {projeto.desafio && <p><strong>Desafio:</strong> {projeto.desafio}</p>}
          {projeto.decisaoTecnica && <p><strong>Decisão técnica:</strong> {projeto.decisaoTecnica}</p>}
          {projeto.aprendizado && <p><strong>Aprendizado:</strong> {projeto.aprendizado}</p>}
          
          {projeto.resultado && (
            <p className="impacto">
              <strong>Resultado:</strong> {projeto.resultado}
            </p>
          )}
          
          {projeto.contexto && (
            <p className="contexto">
              {projeto.contexto}
            </p>
          )}

          {/* Fallback para projetos com formato antigo */}
          {!projeto.problema && projeto.objetivo && (<div><h3>Objetivo</h3><p>{projeto.objetivo}</p></div>)}
          {!projeto.desafio && projeto.desafios && (<div><h3>Desafios Enfrentados</h3><p>{projeto.desafios}</p></div>)}

          <div className="buttons" style={{ marginTop: '40px' }}>
            <a href={projeto.linkDemo} target="_blank" rel="noreferrer" className="btn-primary" onMouseMove={handleMouseMove}>
              <SiVercel /> Ver Projeto
            </a>
            <a href={projeto.linkGit} target="_blank" rel="noreferrer" className="btn-secondary" onMouseMove={handleMouseMove}>
              <FaGithub /> Repositório
            </a>
            <a 
              href={`https://wa.me/5511959117042?text=${encodeURIComponent(`Olá Renato, vi seu projeto ${projeto.title} no portfólio e gostei muito. Gostaria de conversar sobre uma oportunidade.`)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary" 
              onMouseMove={handleMouseMove}
              style={{ border: '1px solid #25D366', color: '#25D366' }}
            >
              <FaWhatsapp /> Contato
            </a>
          </div>

          {/* Seção de Reações agora no final da página */}
          <div className="reactions-section" style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-gray)', marginBottom: '10px', fontWeight: 'bold' }}>GOSTOU DO CONTEÚDO?</p>
            <div className="reactions-wrapper">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjetoDetalhes;