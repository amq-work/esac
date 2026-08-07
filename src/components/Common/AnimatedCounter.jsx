import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AnimatedCounter = ({ endValue, decimals = 0, suffix = "" }) => {
  const countRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;

    const counterObj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counterObj, {
        val: endValue,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%'
        },
        onUpdate: () => {
          setDisplayValue(counterObj.val.toFixed(decimals));
        }
      });
    });

    return () => ctx.revert();
  }, [endValue, decimals]);

  return (
    <span ref={countRef} className="font-serif font-light text-champagne">
      {displayValue}{suffix}
    </span>
  );
};
