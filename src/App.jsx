import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp, FaLinkedin, FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Tecnologias from "./components/Tecnologias";
import Projetos from "./components/Projetos";
import Experiencia from "./components/Experiencia";
import ProjetoDetalhes from "./components/ProjetoDetalhes";

function App() {
  const [greeting, setGreeting] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : true;
  });

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
    <Router>
      <header className="header" onMouseMove={handleMouseMove}>
        <div className="header-container">
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#home">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#tecnologias">Tecnologias</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#experiencia">Experiência</a></li>
              <li><a href="#contato">Contato</a></li>
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
            {greeting} // RENATO PAIVA :: FRONT-END DEVELOPER // PYTHON AUTOMATION // DATA ANALYSIS // [ STATUS: OPEN TO WORK ] // {greeting} // RENATO PAIVA :: FRONT-END DEVELOPER // PYTHON AUTOMATION // DATA ANALYSIS // [ STATUS: OPEN TO WORK ] //
          </span>
          <span>
            {greeting} // RENATO PAIVA :: FRONT-END DEVELOPER // PYTHON AUTOMATION // DATA ANALYSIS // [ STATUS: OPEN TO WORK ] // {greeting} // RENATO PAIVA :: FRONT-END DEVELOPER // PYTHON AUTOMATION // DATA ANALYSIS // [ STATUS: OPEN TO WORK ] //
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
            <Experiencia />
          </main>
        } />
        
        {/* Rota da Página de Detalhes Dinâmica */}
        <Route path="/projeto/:slug" element={
          <ProjetoDetalhes />
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
            <p>&copy; {new Date().getFullYear()} Renato Paiva. Todos os direitos reservados.</p>
            <div className="tech-stack-icons">
              <FaReact title="React" />
              <FaHtml5 title="HTML5" />
              <FaCss3Alt title="CSS3" />
              <FaJsSquare title="JavaScript" />
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;