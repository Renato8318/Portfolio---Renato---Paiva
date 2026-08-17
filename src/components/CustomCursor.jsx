import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Use clientX/Y to align with position: fixed
      setPosition({ x: e.clientX - 4, y: e.clientY - 4 }); // -4 to center the 8px dot
      
      const target = e.target;
      const computedStyle = window.getComputedStyle(target);
      setIsPointer(
        computedStyle.cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className={`custom-cursor-dot ${isPointer ? 'pointer' : ''}`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      <div 
        className={`custom-cursor-outline ${isPointer ? 'pointer' : ''}`}
        style={{ transform: `translate3d(${position.x - 11}px, ${position.y - 11}px, 0)` }} 
      />
    </>
  );
};

export default CustomCursor;
