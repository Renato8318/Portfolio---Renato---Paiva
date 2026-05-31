import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { FaWhatsapp, FaLinkedin, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBars, FaTimes, FaArrowUp } from "react-icons/fa";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Tecnologias from "./components/Tecnologias";
import Projetos from "./components/Projetos";
import Certificacoes from "./components/Certificacoes"; // Import new component
import Experiencia from "./components/Experiencia";
import ProjetoDetalhes from "./components/ProjetoDetalhes";
import ExperienciaDetalhes from "./components/ExperienciaDetalhes";
import CertificacaoDetalhes from "./components/CertificacaoDetalhes"; // Certifique-se que esta linha está presente

function AppContent() {
  const [greeting, setGreeting] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved !== null) return JSON.parse(saved);
      
      // Auto Dark Mode: Ativa entre 18h e 06h
      const hours = new Date().getHours();
      return hours >= 18 || hours < 6;
    } catch (e) {
      return true;
    }
  });

  const location = useLocation();
  const isHome = location.pathname === "/";

  // Função para formatar o link dinamicamente
  const getNavLink = (id) => {
    return isHome ? `#${id}` : `/#${id}`;
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    
    const hours = new Date().getHours();
    if (hours < 12) setGreeting("Bom dia");
    else if (hours < 18) setGreeting("Boa tarde");
    else setGreeting("Boa noite");
  }, []); // Inicializa apenas uma vez

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <>
      {/* Camada de Fundo Viva (Nós e Conexões) */}
      <div className="bg-tech-layer">
        <div className="data-node n1"></div>
        <div className="data-node n2"></div>
        <div className="data-node n3"></div>
        <div className="data-node n4"></div>
        <div className="data-node n5"></div>
        <div className="data-node n6"></div>
        <div className="data-node n7"></div>
        <div className="data-node n8"></div>
        <div className="data-node n9"></div>
        <div className="data-node n10"></div>
        <div className="data-node n11"></div>
        <div className="data-node n12"></div>
        <div className="data-node n13"></div>
        <div className="data-node n14"></div>
        <div className="data-node n15"></div>
        <div className="data-node n16"></div>
        <div className="data-node n17"></div>
        <div className="data-node n18"></div>
        <div className="data-node n19"></div>
        <div className="data-node n20"></div>
      </div>

      <header className="header" onMouseMove={handleMouseMove}>
        <div className="header-container">
          <Link to="/" className="header-logo">
            RENATO<span>.PAIVA</span>
          </Link>

          <button 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <ul className="nav-list" onClick={() => setMenuOpen(false)}>
              <li><a href={getNavLink("home")}>Início</a></li>
              <li><a href={getNavLink("sobre")}>Sobre</a></li>
              <li><a href={getNavLink("tecnologias")}>Tecnologias</a></li>
              <li><a href={getNavLink("projetos")}>Projetos</a></li>
              <li><a href={getNavLink("certificacoes")}>Certificações</a></li> {/* Add new nav link */}
              <li><a href={getNavLink("experiencia")}>Experiência</a></li>
              <li><a href={getNavLink("contato")}>Contato</a></li>
            </ul>
          </nav>

          <button
            className="dark-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Alternar tema claro/escuro"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </header>

      <div className="greeting-marquee">
        <div className="marquee-content">
          <span>
            {greeting} // RENATO PAIVA :: FRONT-END DEVELOPER // PLANNING & MIS // POWER BI // PYTHON AUTOMATION // [ STATUS: OPEN TO WORK ] // {greeting} // RENATO PAIVA :: FRONT-END DEVELOPER // PLANNING & MIS // POWER BI // PYTHON AUTOMATION // [ STATUS: OPEN TO WORK ] //
          </span>
          <span>
            {greeting} // RENATO PAIVA :: FRONT-END DEVELOPER // PLANNING & MIS // POWER BI // PYTHON AUTOMATION // [ STATUS: OPEN TO WORK ] // {greeting} // RENATO PAIVA :: FRONT-END DEVELOPER // PLANNING & MIS // POWER BI // PYTHON AUTOMATION // [ STATUS: OPEN TO WORK ] //
          </span>
        </div>
      </div>

      <Routes>
        {/* Rota da Página Principal */}
        <Route path="/" element={
          <main className="container">
            <Hero />
            <Sobre />
            <Tecnologias />
            <Projetos />
            <Certificacoes /> {/* Add new component */}
            <Experiencia />
          </main>
        } />
        
        {/* Rota da Página de Detalhes Dinâmica */}
        <Route path="/projeto/:slug" element={
          <ProjetoDetalhes />
        } />

        {/* Rota da Página de Detalhes da Experiência */}
        <Route path="/experiencia/:slug" element={
          <ExperienciaDetalhes />
        } />

        {/* Rota da Página de Detalhes da Certificação */}
        <Route path="/certificacao/:slug" element={
          <CertificacaoDetalhes />
        } />
      </Routes>

      <footer id="contato" className="footer">
        <div className="container">
          <h2 onMouseMove={handleMouseMove}>
            Contato
          </h2>
          <p>Vamos trabalhar juntos? Me chame em uma das redes:</p>
          <div className="contact-links">
            <a href={`https://wa.me/5511959117042?text=${encodeURIComponent("Olá Renato, vi seu portfólio e gostaria de conversar sobre uma oportunidade técnica.")}`} target="_blank" rel="noopener noreferrer" className="contact-item whatsapp-btn">
              <FaWhatsapp className="contact-icon" /> WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/renato-paiva-developer/" target="_blank" rel="noopener noreferrer" className="contact-item linkedin-btn" onMouseMove={handleMouseMove}>
              <FaLinkedin className="contact-icon" /> LinkedIn
            </a>
          </div>
          <div className="footer-copyright">
            <p>
              &copy; {new Date().getFullYear()} Renato Paiva. Todos os direitos reservados.
              
            </p>
            <div className="tech-stack-icons">
              <FaReact title="React" />
              <FaHtml5 title="HTML5" />
              <FaCss3Alt title="CSS3" />
              <FaJsSquare title="JavaScript" />
            </div>
          </div>
          <button 
            className="back-to-top" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Voltar ao topo"
          >
            <FaArrowUp /> <span>Topo</span>
          </button>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;