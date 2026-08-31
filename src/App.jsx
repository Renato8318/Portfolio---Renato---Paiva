import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { FaWhatsapp, FaLinkedin, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBars, FaTimes, FaArrowUp, FaEnvelope, FaCopy, FaCheck, FaPython, FaDatabase } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Tecnologias from "./components/Tecnologias";
import Projetos from "./components/Projetos";
import Certificacoes from "./components/Certificacoes"; // Import new component
import Experiencia from "./components/Experiencia";
import ProjetoDetalhes from "./components/ProjetoDetalhes";
import ExperienciaDetalhes from "./components/ExperienciaDetalhes";
import CertificacaoDetalhes from "./components/CertificacaoDetalhes";
import ScrambleText from "./components/ScrambleText";
import CustomCursor from "./components/CustomCursor";
import CommandPalette from "./components/CommandPalette";

function AppContent() {
  const [greeting, setGreeting] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [showFloatingTop, setShowFloatingTop] = useState(false);
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
  const [activeSection, setActiveSection] = useState("home");

  // Função para formatar o link dinamicamente
  const getNavLink = (id) => {
    return isHome ? `#${id}` : `/#${id}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("paivarenato08@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Atalho global Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    
    const hours = new Date().getHours();
    if (hours < 12) setGreeting("Bom dia");
    else if (hours < 18) setGreeting("Boa tarde");
    else setGreeting("Boa noite");

    // Monitor de Progresso de Rolagem e Botão Flutuante
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setShowFloatingTop(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Executa na montagem

    // IntersectionObserver para detectar seção ativa no menu
    const sectionIds = ["home", "sobre", "tecnologias", "projetos", "certificacoes", "experiencia", "contato"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleMouseMove = (e) => {
    const target = e.currentTarget;
    const x = e.clientX;
    const y = e.clientY;

    requestAnimationFrame(() => {
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--x", `${x - rect.left}px`);
      target.style.setProperty("--y", `${y - rect.top}px`);
    });
  };

  return (
    <>
      <CustomCursor />
      
      {/* Modal Command Palette (Ctrl + K) */}
      <CommandPalette 
        isOpen={cmdOpen} 
        onClose={() => setCmdOpen(false)} 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Barra de Progresso de Rolagem Neon */}
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Botão Flutuante Voltar ao Topo */}
      <button 
        className={`floating-back-to-top ${showFloatingTop ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo da página"
        title="Voltar ao Topo"
      >
        <FaArrowUp />
      </button>

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
              <li><a href={getNavLink("home")} className={activeSection === 'home' ? 'nav-active' : ''}>Início</a></li>
              <li><a href={getNavLink("sobre")} className={activeSection === 'sobre' ? 'nav-active' : ''}>Sobre</a></li>
              <li><a href={getNavLink("tecnologias")} className={activeSection === 'tecnologias' ? 'nav-active' : ''}>Tecnologias</a></li>
              <li><a href={getNavLink("projetos")} className={activeSection === 'projetos' ? 'nav-active' : ''}>Projetos</a></li>
              <li><a href={getNavLink("certificacoes")} className={activeSection === 'certificacoes' ? 'nav-active' : ''}>Certificações</a></li>
              <li><a href={getNavLink("experiencia")} className={activeSection === 'experiencia' ? 'nav-active' : ''}>Experiência</a></li>
              <li><a href={getNavLink("contato")} className={activeSection === 'contato' ? 'nav-active' : ''}>Contato</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            {/* Botão de Abertura da Command Palette */}
            <button 
              className="cmd-trigger-btn"
              onClick={() => setCmdOpen(true)}
              title="Abrir Busca Rápida (Ctrl + K)"
              aria-label="Abrir Command Palette"
            >
              <span>⌘K</span>
            </button>

            <button
              className="dark-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Alternar tema claro/escuro"
              title={darkMode ? "Mudar para modo claro" : "Mudar para modo escuro"}
            >
              {darkMode 
                ? <BsSunFill className="theme-icon sun" /> 
                : <BsMoonStarsFill className="theme-icon moon" />
              }
            </button>
          </div>
        </div>
      </header>

      <div className="greeting-marquee">
        <div className="marquee-content">
          <span>
            {`${greeting} // RENATO PAIVA :: FRONT-END DEVELOPER // PLANNING & MIS // POWER BI // PYTHON AUTOMATION // [ STATUS: OPEN TO WORK ] // ${greeting} // RENATO PAIVA :: FRONT-END DEVELOPER // PLANNING & MIS // POWER BI // PYTHON AUTOMATION // [ STATUS: OPEN TO WORK ] //`}
          </span>
          <span>
            {`${greeting} // RENATO PAIVA :: FRONT-END DEVELOPER // PLANNING & MIS // POWER BI // PYTHON AUTOMATION // [ STATUS: OPEN TO WORK ] // ${greeting} // RENATO PAIVA :: FRONT-END DEVELOPER // PLANNING & MIS // POWER BI // PYTHON AUTOMATION // [ STATUS: OPEN TO WORK ] //`}
          </span>
        </div>
      </div>

      <Routes>
        <Route path="/" element={
          <main className="container">
            <Hero />
            <div className="section-divider"><span className="divider-node"></span></div>
            <Sobre />
            <div className="section-divider"><span className="divider-node"></span></div>
            <Tecnologias />
            <div className="section-divider"><span className="divider-node"></span></div>
            <Projetos />
            <div className="section-divider"><span className="divider-node"></span></div>
            <Certificacoes />
            <div className="section-divider"><span className="divider-node"></span></div>
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
            <ScrambleText text="Contato" />
          </h2>
          <p>Vamos trabalhar juntos? Me chame em uma das redes ou envie um e-mail direto:</p>
          
          <div className="contact-links">
            <a href={`https://wa.me/5511959117042?text=${encodeURIComponent("Olá Renato, vi seu portfólio e gostaria de conversar sobre uma oportunidade técnica.")}`} target="_blank" rel="noopener noreferrer" className="contact-item whatsapp-btn">
              <FaWhatsapp className="contact-icon" /> WhatsApp
            </a>
            
            <a href="https://www.linkedin.com/in/renato-paiva-developer/" target="_blank" rel="noopener noreferrer" className="contact-item linkedin-btn" onMouseMove={handleMouseMove}>
              <FaLinkedin className="contact-icon" /> LinkedIn
            </a>

            <button 
              onClick={handleCopyEmail} 
              className={`contact-item copy-email-btn ${copiedEmail ? "copied" : ""}`}
              onMouseMove={handleMouseMove}
              title="Clique para copiar o e-mail"
            >
              {copiedEmail ? <FaCheck className="contact-icon text-success" /> : <SiGmail className="contact-icon" />}
              <span>{copiedEmail ? "✓ E-mail Copiado!" : "paivarenato08@gmail.com"}</span>
              {!copiedEmail && <FaCopy className="copy-icon-sm" />}
            </button>
          </div>

          <div className="footer-copyright">
            <p>
              &copy; {new Date().getFullYear()} Renato Paiva. Todos os direitos reservados.
            </p>
            <div className="tech-stack-icons">
              <FaReact title="React" />
              <FaPython title="Python" />
              <FaDatabase title="SQL & Banco de Dados" />
              <FaJsSquare title="JavaScript" />
              <FaHtml5 title="HTML5" />
              <FaCss3Alt title="CSS3" />
            </div>
          </div>
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