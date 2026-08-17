import React, { useState, useEffect, useRef } from 'react';
import { FaTerminal } from 'react-icons/fa';

const PythonTerminal = () => {
  const [output, setOutput] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const terminalRef = useRef(null);

  const lines = [
    { text: "import pandas as pd", delay: 800 },
    { text: "from bs4 import BeautifulSoup", delay: 500 },
    { text: "import requests", delay: 500 },
    { text: "", delay: 200 },
    { text: "> Inicializando robô de coleta...", type: "system", delay: 1000 },
    { text: "> Acessando banco de dados (SQL)... OK", type: "system", delay: 800 },
    { text: "> Extraindo 10M+ registros... Aguarde.", type: "system", delay: 1500 },
    { text: "  [####################################] 100%", type: "success", delay: 500 },
    { text: "> Transformando dados com Pandas...", type: "system", delay: 1200 },
    { text: "df = pd.DataFrame(data)", delay: 600 },
    { text: "df.dropna(inplace=True)", delay: 400 },
    { text: "> Modelagem concluída. 0 valores nulos.", type: "success", delay: 900 },
    { text: "> Gerando relatórios para Power BI...", type: "system", delay: 1000 },
    { text: "export_to_powerbi(df)", delay: 600 },
    { text: "> Automação finalizada com sucesso. Tempo total: 2.3s", type: "success", delay: 0 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    
    setIsTyping(true);
    let currentLine = 0;
    let timerId;
    
    const printLine = () => {
      if (currentLine < lines.length) {
        setOutput(prev => {
          if (prev.length > currentLine) return prev;
          return [...prev, lines[currentLine]];
        });
        currentLine++;
        if (currentLine < lines.length) {
          timerId = setTimeout(printLine, lines[currentLine].delay);
        } else {
          setIsTyping(false);
        }
      }
    };

    timerId = setTimeout(printLine, 500);
    
    return () => clearTimeout(timerId);
  }, [hasStarted]);

  return (
    <div className="python-terminal-container" data-aos="fade-left" ref={terminalRef}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="close"></span>
          <span className="minimize"></span>
          <span className="maximize"></span>
        </div>
        <div className="terminal-title">
          <FaTerminal /> root@automations: ~/scripts/data_pipeline.py
        </div>
      </div>
      <div className="terminal-body">
        {output.map((line, index) => (
          <div key={index} className={`terminal-line ${line.type || 'code'}`}>
            {line.type !== 'system' && line.type !== 'success' && line.text !== "" && (
              <span className="prompt">{'>>>'} </span>
            )}
            {line.text}
          </div>
        ))}
        {isTyping && (
          <div className="terminal-line typing-cursor">
            <span className="prompt">{'>>>'} </span><span className="cursor">_</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PythonTerminal;
