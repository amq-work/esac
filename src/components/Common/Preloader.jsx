import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useNav } from '../../context/NavContext';

const M  = 'SUSE, monospace';
const A  = '#0466c8';
const AL = '#4ba3fb';
const BG = '#001233';
const TX = '#e5e7ea';
const TB = 'rgba(4,102,200,0.18)';

export const Preloader = () => {
  const containerRef = useRef(null);
  const lineRef      = useRef(null);
  const { setIsPreloaded } = useNav();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const obj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100, duration: 1.0, ease: 'power4.inOut',
          onComplete: () => { setIsPreloaded(true); document.body.style.overflow = ''; }
        });
      }
    });

    tl.to(obj, {
      val: 100, duration: 2.4, ease: 'power2.inOut',
      onUpdate: () => setProgress(Math.floor(obj.val))
    });

    if (lineRef.current) {
      tl.to(lineRef.current, { scaleX: 1, duration: 2.4, ease: 'power2.inOut', transformOrigin: 'left center' }, 0);
    }

    return () => { tl.kill(); document.body.style.overflow = ''; };
  }, [setIsPreloaded]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[10000] flex flex-col justify-between" style={{ background: '#000d22', fontFamily: M }}>
      <div className="absolute inset-0 grid-fine pointer-events-none" style={{ opacity: 0.4 }} />
      {/* Top */}
      <div className="flex justify-between items-center px-8 py-8 border-b" style={{ borderColor: TB }}>
        <span style={{ fontSize: '0.58rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: `rgba(4,102,200,0.5)` }}>VANCE &amp; ROSTOVA GROUP</span>
        <span style={{ fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)' }}>GLOBAL DOSSIER 2026</span>
      </div>
      {/* Center */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-8 space-y-6">
        <div style={{ width: 60, height: 60, border: `1px solid rgba(4,102,200,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '1.1rem', fontWeight: 700, color: A, letterSpacing: '0.04em' }}>V&R</span>
        </div>
        <div style={{ fontSize: '0.55rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: `rgba(4,102,200,0.4)` }}>Architects &amp; Engineers</div>
        <p style={{ fontSize: 'clamp(0.9rem,2vw,1.5rem)', fontWeight: 200, letterSpacing: '0.02em', color: 'rgba(229,230,234,0.55)', lineHeight: 1.55, maxWidth: 520 }}>
          "Sculpting the skylines of tomorrow through structural engineering and masterplan precision."
        </p>
        <div style={{ fontSize: '0.52rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)' }}>
          ISB · LHE · KHI · LDN · DXB · MIL · NYC
        </div>
      </div>
      {/* Progress */}
      <div className="px-8 py-8 border-t" style={{ borderColor: TB }}>
        <div className="flex justify-between items-end mb-4">
          <div style={{ fontSize: '0.52rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: A, animation: 'pulse-dot 1.5s infinite' }} />
            Synchronizing CAD Blueprints
          </div>
          <div style={{ fontSize: '3.5rem', fontWeight: 100, letterSpacing: '-0.04em', lineHeight: 1, color: AL }}>
            {String(progress).padStart(2, '0')}<span style={{ fontSize: '1rem', color: `rgba(4,102,200,0.4)` }}>%</span>
          </div>
        </div>
        <div style={{ height: 1, background: `rgba(4,102,200,0.1)`, overflow: 'hidden' }}>
          <div ref={lineRef} style={{ height: '100%', background: `rgba(4,102,200,0.55)`, transform: 'scaleX(0)', transformOrigin: 'left center', width: '100%' }} />
        </div>
      </div>
    </div>
  );
};
