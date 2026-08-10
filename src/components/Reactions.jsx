import React, { useState, useEffect } from "react";
import { FaHeart, FaThumbsUp } from "react-icons/fa";

const Reactions = ({ slug, wrapperStyle = {} }) => {
  const [reactions, setReactions] = useState({ amei: 0, curti: 0, palmas: 0 });
  const [userSelection, setUserSelection] = useState(null);

  useEffect(() => {
    const savedReactions = localStorage.getItem(`reactions-${slug}`);
    const savedSelection = localStorage.getItem(`selection-${slug}`);
    
    if (savedReactions) {
      setReactions(JSON.parse(savedReactions));
    } else {
      const initial = { 
        amei: Math.floor(Math.random() * 15) + 5, 
        curti: Math.floor(Math.random() * 30) + 10,
        palmas: Math.floor(Math.random() * 10) + 2
      };
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
      const velocity = 40 + Math.random() * 60;
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

  return (
    <div className="reactions-wrapper" style={{ margin: '0 auto', ...wrapperStyle }}>
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
  );
};

export default Reactions;
