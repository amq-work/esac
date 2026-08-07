import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useNav } from '../../context/NavContext';

export const MagneticButton = ({ 
  children, 
  onClick, 
  className = "", 
  cursorText = "EXPLORE",
  strength = 0.35 
}) => {
  const buttonRef = useRef(null);
  const { setCursor, resetCursor } = useNav();

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3.out" });

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      xTo(relX * strength);
      yTo(relY * strength);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      resetCursor();
    };

    const handleMouseEnter = () => {
      if (cursorText) {
        setCursor(cursorText, true);
      }
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);
    btn.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
      btn.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [strength, cursorText, setCursor, resetCursor]);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center cursor-pointer transition-colors duration-300 will-change-transform ${className}`}
    >
      {children}
    </button>
  );
};
