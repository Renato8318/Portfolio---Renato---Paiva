import React, { useState, useEffect, useRef } from "react";
import { 
  FaSearch, 
  FaHome, 
  FaUser, 
  FaCode, 
  FaLaptopCode, 
  FaCertificate, 
  FaBriefcase, 
  FaEnvelope, 
  FaFileDownload, 
  FaWhatsapp, 
  FaLinkedin, 
  FaGithub, 
  FaMoon, 
  FaSun, 
  FaTimes,
  FaArrowRight
} from "react-icons/fa";

const CommandPalette = ({ isOpen, onClose, darkMode, setDarkMode }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const actions = [
    {
      id: "cv",
      category: "Ação Rápida",
      title: "Baixar Currículo (PDF)",
      subtitle: "Abrir ou baixar Curriculo_Renato 2026.pdf",
      icon: <FaFileDownload />,
      action: () => {
        const link = document.createElement("a");
        link.href = "/Curriculo_Renato 2026.pdf";
        link.download = "Curriculo_Renato_Paiva_2026.pdf";
        link.target = "_blank";
        link.click();
      }
    },
    {
      id: "theme",
      category: "Ação Rápida",
      title: darkMode ? "Mudar para Tema Claro" : "Mudar para Tema Escuro",
      subtitle: "Alternar paleta visual do portfólio",
      icon: darkMode ? <FaSun /> : <FaMoon />,
      action: () => setDarkMode(!darkMode)
    },
    {
      id: "whatsapp",
      category: "Contato",
      title: "Conversar no WhatsApp",
      subtitle: "Abrir conversa direta com Renato",
      icon: <FaWhatsapp />,
      action: () => window.open("https://wa.me/5511959117042", "_blank")
    },
    {
      id: "linkedin",
      category: "Social",
      title: "Visitar Perfil no LinkedIn",
      subtitle: "linkedin.com/in/renato-paiva-developer",
      icon: <FaLinkedin />,
      action: () => window.open("https://www.linkedin.com/in/renato-paiva-developer/", "_blank")
    },
    {
      id: "github",
      category: "Social",
      title: "Explorar Repositórios no GitHub",
      subtitle: "github.com/Renato8318",
      icon: <FaGithub />,
      action: () => window.open("https://github.com/Renato8318", "_blank")
    },
    {
      id: "home",
      category: "Navegação",
      title: "Ir para Início (Hero)",
      subtitle: "Topo da página",
      icon: <FaHome />,
      action: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
    },
    {
      id: "sobre",
      category: "Navegação",
      title: "Ir para Sobre Mim",
      subtitle: "DNA Analítico, perfil e Bento Grid",
      icon: <FaUser />,
      action: () => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })
    },
    {
      id: "tecnologias",
      category: "Navegação",
      title: "Ir para Tecnologias",
      subtitle: "React, Python, SQL, Power BI, Salesforce",
      icon: <FaCode />,
      action: () => document.getElementById("tecnologias")?.scrollIntoView({ behavior: "smooth" })
    },
    {
      id: "projetos",
      category: "Navegação",
      title: "Ir para Projetos",
      subtitle: "PlanVision, Veritime, SessãoPlay, Amicão",
      icon: <FaLaptopCode />,
      action: () => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })
    },
    {
      id: "certificacoes",
      category: "Navegação",
      title: "Ir para Certificações",
      subtitle: "Certificados técnicos e cursos",
      icon: <FaCertificate />,
      action: () => document.getElementById("certificacoes")?.scrollIntoView({ behavior: "smooth" })
    },
    {
      id: "experiencia",
      category: "Navegação",
      title: "Ir para Experiência",
      subtitle: "Jotatei & Vermont",
      icon: <FaBriefcase />,
      action: () => document.getElementById("experiencia")?.scrollIntoView({ behavior: "smooth" })
    },
    {
      id: "contato",
      category: "Navegação",
      title: "Ir para Contato",
      subtitle: "Enviar mensagem ou e-mail",
      icon: <FaEnvelope />,
      action: () => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
    }
  ];

  const filteredActions = actions.filter((item) => {
    const term = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(term) ||
      item.subtitle.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    );
  });

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + (filteredActions.length || 1)) % (filteredActions.length || 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredActions[selectedIndex]) {
        filteredActions[selectedIndex].action();
        onClose();
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cmd-palette-backdrop" onClick={onClose}>
      <div className="cmd-palette-modal" onClick={(e) => e.stopPropagation()} onKeyDown={handleKeyDown}>
        <div className="cmd-palette-header">
          <FaSearch className="cmd-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="cmd-palette-input"
            placeholder="Digite um comando, projeto ou seção (ex: projetos, cv, tema)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="cmd-close-btn" onClick={onClose} aria-label="Fechar">
            <kbd>ESC</kbd>
          </button>
        </div>

        <div className="cmd-palette-body" ref={listRef}>
          {filteredActions.length === 0 ? (
            <div className="cmd-no-results">Nenhum comando ou seção encontrado.</div>
          ) : (
            filteredActions.map((item, index) => (
              <div
                key={item.id}
                className={`cmd-item ${selectedIndex === index ? "selected" : ""}`}
                onClick={() => {
                  item.action();
                  onClose();
                }}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <div className="cmd-item-icon">{item.icon}</div>
                <div className="cmd-item-info">
                  <div className="cmd-item-title">{item.title}</div>
                  <div className="cmd-item-subtitle">{item.subtitle}</div>
                </div>
                <div className="cmd-item-category">{item.category}</div>
                <FaArrowRight className="cmd-item-arrow" />
              </div>
            ))
          )}
        </div>

        <div className="cmd-palette-footer">
          <span><kbd>↑</kbd> <kbd>↓</kbd> para navegar</span>
          <span><kbd>↵</kbd> para selecionar</span>
          <span><kbd>ESC</kbd> para fechar</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
