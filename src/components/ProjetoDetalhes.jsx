import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaGithub, FaRocket, FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const detalhesData = {
  veritime: {
    title: "Veritime",
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
    title: "SessãoPlay",
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
    title: "Amicão",
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
    <section className="container projeto-detalhes-page" style={{ textAlign: 'left' }}>
      <Link to="/" className="btn-secondary back-btn">
        <FaArrowLeft /> Voltar para a Home
      </Link>
      
      <h1 onMouseMove={handleMouseMove}>{projeto.title}</h1>

      {projeto.tagline && <p className="tagline">{projeto.tagline}</p>}

      <div className="card-techs" style={{ justifyContent: 'flex-start', marginBottom: '15px' }}>
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
          <img src={projeto.imagem} alt={projeto.title} />
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
        </div>
      </div>
    </section>
  );
};

export default ProjetoDetalhes;