import React, { useState, useEffect, useRef } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

// Pausa entre cada ciclo (em ms)
const LOOP_DELAY = 3500;

const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const elementRef = useRef(null);
  const isVisible = useRef(false);
  const scrambleIntervalRef = useRef(null);
  const loopTimerRef = useRef(null);

  const scramble = () => {
    // Limpa qualquer animação anterior
    if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);

    setIsScrambling(true);
    let iterations = 0;

    scrambleIntervalRef.current = setInterval(() => {
      setDisplayText(
        text.split('').map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iterations) return text[index];
          return characters[Math.floor(Math.random() * characters.length)];
        }).join('')
      );

      if (iterations >= text.length) {
        clearInterval(scrambleIntervalRef.current);
        setIsScrambling(false);

        // Agenda o próximo ciclo somente se ainda visível
        if (isVisible.current) {
          loopTimerRef.current = setTimeout(scramble, LOOP_DELAY);
        }
      }
      iterations += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries[0].isIntersecting;
        isVisible.current = visible;

        if (visible) {
          // Entra na tela: inicia o efeito
          scramble();
        } else {
          // Sai da tela: para tudo e restaura o texto original
          if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);
          if (loopTimerRef.current) clearTimeout(loopTimerRef.current);
          setDisplayText(text);
          setIsScrambling(false);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
      if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);
      if (loopTimerRef.current) clearTimeout(loopTimerRef.current);
    };
  }, [text]);

  return (
    <span ref={elementRef} className={`scramble-text ${isScrambling ? 'scrambling' : ''}`}>
      {displayText}
    </span>
  );
};

export default ScrambleText;
