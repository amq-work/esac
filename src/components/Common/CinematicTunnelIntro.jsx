import React, { useEffect, useState } from 'react';
import { useNav } from '../../context/NavContext';

export const CinematicTunnelIntro = () => {
  const { setIsPreloaded } = useNav();
  const [fading, setFading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Allow full GIF animation loop to play completely (3.8s), then fade out smoothly over 0.75s
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        document.body.style.overflow = '';
        setIsPreloaded(true);
      }, 750);
    }, 3800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [setIsPreloaded]);

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center select-none"
      style={{
        background: '#020408',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      <img
        src="/esac-loading.gif"
        alt="ESAC Loading..."
        className="w-full h-full w-screen h-screen object-cover"
      />
    </div>
  );
};
