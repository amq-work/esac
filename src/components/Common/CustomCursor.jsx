import React, { useEffect, useRef } from 'react';
import { useNav } from '../../context/NavContext';
import { gsap } from 'gsap';

export const CustomCursor = () => {
  const { cursorText, cursorHovering } = useNav();
  const cursorRef = useRef(null);
  const dotRef    = useRef(null);

  useEffect(() => {
    let raf = null;
    const move = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (cursorRef.current) gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power2.out', overwrite: 'auto' });
        if (dotRef.current)    gsap.to(dotRef.current,    { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'none', overwrite: 'auto' });
        raf = null;
      });
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`custom-cursor ${cursorHovering ? 'hovering' : ''}`}>
        {cursorText && (
          <span className="custom-cursor-text">{cursorText}</span>
        )}
      </div>
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
};
