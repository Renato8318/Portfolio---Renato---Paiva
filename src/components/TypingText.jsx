import React, { useState, useEffect, useRef } from 'react';

const TypingText = ({ text, speed = 45, loop = true, pauseDelay = 2500, deleteSpeed = 25 }) => {
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pausing' | 'deleting'
  const indexRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      if (phase === 'typing') {
        if (indexRef.current < text.length) {
          setDisplayed(text.slice(0, indexRef.current + 1));
          indexRef.current++;
          timerRef.current = setTimeout(tick, speed);
        } else {
          // Finished typing — pause before deleting (or stay if no loop)
          if (loop) {
            timerRef.current = setTimeout(() => setPhase('deleting'), pauseDelay);
          }
        }
      } else if (phase === 'deleting') {
        if (indexRef.current > 0) {
          indexRef.current--;
          setDisplayed(text.slice(0, indexRef.current));
          timerRef.current = setTimeout(tick, deleteSpeed);
        } else {
          // Deleted everything — restart typing
          timerRef.current = setTimeout(() => setPhase('typing'), 400);
        }
      }
    };

    timerRef.current = setTimeout(tick, speed);
    return () => clearTimeout(timerRef.current);
  }, [phase, text, speed, loop, pauseDelay, deleteSpeed]);

  return (
    <span className="typing-text">
      {displayed}
      <span className="typing-cursor-blink">|</span>
    </span>
  );
};

export default TypingText;
