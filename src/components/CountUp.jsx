import React, { useState, useEffect, useRef } from "react";

const CountUp = ({ end, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function (easeOutQuad)
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            const currentCount = Math.floor(easeProgress * end);
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={elementRef} className="count-up-number">
      {prefix}{count}{suffix}
    </span>
  );
};

export default CountUp;
