import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNav } from '../context/NavContext';
import { MagneticButton } from '../components/Common/MagneticButton';
import { ConsultationButton } from '../components/Common/ConsultationButton';
import { FIRM_STATS, PROJECTS, CLIENT_LOGOS, LEADERSHIP } from '../data/firmData';
import { AnimatedCounter } from '../components/Common/AnimatedCounter';
import { ArrowUpRight, ArrowDown, ChevronDown, Check, Send, Compass, Layers, Box, Leaf, Building2, ShieldCheck, Users, Target, Globe, PhoneCall, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─── Accent / colour tokens ─────────────────────────────────
const A   = '#0466c8';    // accent blue
const AL  = '#1a56db';    // accent — deep dark blue
const AD  = 'rgba(4,102,200,0.22)'; // accent dim
const BG  = '#001233';    // obsidian
const BG2 = '#001845';    // onyx
const BG3 = '#002855';    // charcoal
const TX  = '#e5e7ea';    // alabaster
const TM  = '#7d8597';    // muted
const TB  = 'rgba(4,102,200,0.18)'; // border blue
const M   = 'SUSE, monospace';      // font shorthand

// ─── Minimal CSS-only grid overlay ──────────────────────────
const GridBg = ({ opacity = 0.5 }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `
        linear-gradient(rgba(4,102,200,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(4,102,200,0.05) 1px, transparent 1px)
      `,
      backgroundSize: '80px 80px',
      opacity,
    }}
  />
);

// ─── Stat card in data strip ─────────────────────────────────
const StatItem = ({ stat, idx }) => (
  <div
    className="relative py-12 px-10 flex flex-col items-start justify-center"
    style={{ borderRight: idx < 3 ? `1px solid ${TB}` : 'none' }}
  >
    <div style={{ fontFamily: M, fontSize: '0.55rem', letterSpacing: '0.3em', color: `rgba(4,102,200,0.4)`, textTransform: 'uppercase', marginBottom: 12 }}>
      {String(idx + 1).padStart(2, '0')}
    </div>
    <div style={{ fontFamily: M, fontSize: 'clamp(2.5rem,5vw,5.5rem)', fontWeight: 100, letterSpacing: '-0.03em', lineHeight: 1, color: TX }}>
      <AnimatedCounter endValue={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} />
      <span style={{ fontSize: '0.4em', letterSpacing: '0.1em', color: AL, fontWeight: 300 }}>+</span>
    </div>
    <div style={{ fontFamily: M, fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: A, marginTop: 10 }}>
      {stat.unit}
    </div>
    <div style={{ fontFamily: M, fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: TM, marginTop: 4 }}>
      {stat.label}
    </div>
  </div>
);

// ─── Cinematic Scroll Section Data ──────────────────────────
const CHAPTERS = [
  {
    id: 1,
    label: "01 / 08",
    cards: [
      {
        eyebrow: "01 / MASTERPLANNING",
        title: "20,000+ ACRES",
        description: "Integrated urban masterplanning, infrastructure, and development strategy.",
        position: "TOP_LEFT"
      }
    ]
  },
  {
    id: 2,
    label: "02 / 08",
    cards: [
      {
        eyebrow: "02 / INFRASTRUCTURE",
        title: "CITY-SCALE SYSTEMS",
        description: "High-density utilities and traffic flow mapping for smart city grids.",
        position: "CENTER_RIGHT"
      }
    ]
  },
  {
    id: 3,
    label: "03 / 08",
    cards: [
      {
        eyebrow: "03 / FLUID DYNAMICS",
        title: "CHILLED LOOP",
        description: "High-efficiency cooling loop systems for low-emission performance.",
        position: "BOTTOM_LEFT"
      },
      {
        eyebrow: "03 / MEP INTEGRATION",
        title: "HVAC FLOWS",
        description: "Optimized thermal dynamics and air distribution ducts for extreme climates.",
        position: "BOTTOM_CENTER"
      }
    ]
  },
  {
    id: 4,
    label: "04 / 08",
    cards: [
      {
        eyebrow: "04 / SOLAR SCALING",
        title: "450 MW GENERATION",
        description: "Decentralized photovoltaic roof layout and annual solar irradiance harvesting models.",
        position: "TOP_RIGHT"
      }
    ]
  },
  {
    id: 5,
    label: "05 / 08",
    cards: [
      {
        eyebrow: "05 / SPATIAL ZONING",
        title: "CBD CORE ZONES",
        description: "Dynamic zoning allocations maximizing pedestrian flow and commercial density.",
        position: "CENTER_LEFT"
      },
      {
        eyebrow: "05 / SKYLINE METRICS",
        title: "PENTHOUSE LEVEL",
        description: "Pre-seismic wind shear calculations for high-altitude structural zones.",
        position: "BOTTOM_RIGHT"
      }
    ]
  },
  {
    id: 6,
    label: "06 / 08",
    cards: [
      {
        eyebrow: "06 / DHA LANDSCAPE",
        title: "GREEN WATER",
        description: "Macro-scale development boundary planning and ecological protection corridors.",
        position: "BOTTOM_RIGHT"
      }
    ]
  },
  {
    id: 7,
    label: "07 / 08",
    cards: [
      {
        eyebrow: "07 / ENERGY STORAGE",
        title: "GRID STATION A",
        description: "Smart battery arrays storing excess solar power for nighttime district usage.",
        position: "TOP_LEFT"
      },
      {
        eyebrow: "07 / CONTRACT VALUE",
        title: "$4.2B VALUE",
        description: "Capital expenditure structures, investment phasing, and development timelines.",
        position: "CENTER"
      }
    ]
  },
  {
    id: 8,
    label: "08 / 08",
    cards: [
      {
        eyebrow: "08 / DELIVERY TIMELINE",
        title: "2028 HANDOVER",
        description: "Final execution phases, commissioning schedules, and VR integration handoff.",
        position: "BOTTOM_LEFT",
        isCTA: true
      }
    ]
  }
];

const POSITION_CLASSES = {
  TOP_LEFT: "top-5 left-4 md:top-14 md:left-14",
  TOP_CENTER: "top-5 left-1/2 -translate-x-1/2 md:top-14",
  TOP_RIGHT: "top-5 right-4 md:top-14 md:right-14",
  CENTER_LEFT: "top-1/4 left-4 md:top-1/2 md:-translate-y-1/2 md:left-14",
  CENTER: "top-1/3 left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2",
  CENTER_RIGHT: "top-1/4 right-4 md:top-1/2 md:-translate-y-1/2 md:right-14",
  BOTTOM_LEFT: "bottom-20 left-4 md:bottom-14 md:left-14",
  BOTTOM_CENTER: "bottom-20 left-1/2 -translate-x-1/2 md:bottom-14",
  BOTTOM_RIGHT: "bottom-20 right-4 md:bottom-14 md:right-14",
};

const TOTAL_FRAMES = 160;

const getFramePath = (index) => {
  const padIndex = String(index + 1).padStart(3, '0');
  return `/scroll-effect/ezgif-frame-${padIndex}.jpg`;
};

const CinematicSection = () => {
  const { isPreloaded, setCurrentPage } = useNav();
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const progressBarRef = useRef(null);
  const chapterNumberRef = useRef(null);
  const scrollInstructionRef = useRef(null);

  const imagesRef = useRef([]);
  const frameObjRef = useRef({ frame: 0 });

  // 1. Preload all 160 image frames
  useEffect(() => {
    const images = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      images.push(img);
    }
    imagesRef.current = images;

    if (images[0]) {
      images[0].onload = () => {
        renderCanvasFrame(0);
      };
    }
  }, []);

  const renderCanvasFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const clampedIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(frameIndex)));
    const img = imagesRef.current[clampedIdx];
    if (!img) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth || img.width || 1920;
    const imgHeight = img.naturalHeight || img.height || 1080;

    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const x = (canvasWidth / 2) - (imgWidth / 2) * scale;
    const y = (canvasHeight / 2) - (imgHeight / 2) * scale;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
  };

  // Canvas size handler
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderCanvasFrame(frameObjRef.current.frame);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. GSAP ScrollTrigger Timeline Setup
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial state for all cards & graphics
      CHAPTERS.forEach((ch, idx) => {
        const cardSelector = `.ch-card-${ch.id}`;
        const graphicSelector = `.ch-graphic-${ch.id}`;

        if (idx === 0) {
          gsap.set(cardSelector, { opacity: 1, y: 0, scale: 1 });
          gsap.set(graphicSelector, { opacity: 0.4 });
        } else {
          gsap.set(cardSelector, { opacity: 0, y: 40, scale: 0.95 });
          gsap.set(graphicSelector, { opacity: 0 });
        }
      });

      // Master Scrub Timeline connected to ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=6000',
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Scrub canvas frame sequence
            const frameIdx = self.progress * (TOTAL_FRAMES - 1);
            frameObjRef.current.frame = frameIdx;
            renderCanvasFrame(frameIdx);

            // Progress Bar Fill
            if (progressBarRef.current) {
              progressBarRef.current.style.transform = `scaleX(${self.progress})`;
            }

            // Active Chapter Label
            const activeChapter = Math.min(8, Math.floor(self.progress * 8) + 1);
            if (chapterNumberRef.current) {
              chapterNumberRef.current.textContent = `0${activeChapter} / 08`;
            }

            // Scroll Instruction Prompt
            if (scrollInstructionRef.current) {
              scrollInstructionRef.current.style.opacity = self.progress > 0.02 ? '0' : '1';
            }
          }
        }
      });

      // Build keyframes for each chapter transition across timeline duration 8
      CHAPTERS.forEach((ch, idx) => {
        const cardSelector = `.ch-card-${ch.id}`;
        const graphicSelector = `.ch-graphic-${ch.id}`;
        const startTime = idx;
        const endTime = idx + 1;

        if (idx === 0) {
          tl.to(cardSelector, {
            opacity: 0, y: -40, scale: 0.95, duration: 0.35, ease: 'power2.inOut'
          }, startTime + 0.65);
          tl.to(graphicSelector, {
            opacity: 0, duration: 0.35, ease: 'power2.inOut'
          }, startTime + 0.65);
        } else if (idx === 7) {
          tl.to(cardSelector, {
            opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.1, ease: 'power2.out'
          }, startTime - 0.35);
          tl.to(graphicSelector, {
            opacity: 0.4, duration: 0.35, ease: 'power2.out'
          }, startTime - 0.35);
        } else {
          tl.to(cardSelector, {
            opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.1, ease: 'power2.out'
          }, startTime - 0.3);
          tl.to(graphicSelector, {
            opacity: 0.4, duration: 0.35, ease: 'power2.out'
          }, startTime - 0.3);

          tl.to(cardSelector, {
            opacity: 0, y: -40, scale: 0.95, duration: 0.35, ease: 'power2.inOut'
          }, endTime - 0.3);
          tl.to(graphicSelector, {
            opacity: 0, duration: 0.35, ease: 'power2.inOut'
          }, endTime - 0.3);
        }
      });

      setTimeout(() => ScrollTrigger.refresh(), 100);
    }, containerRef);

    return () => ctx.revert();
  }, [isPreloaded]);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        {/* Canvas Frame Sequence Hero */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{
            filter: 'brightness(0.5) saturate(0.9)',
          }}
        />

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10" style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.9) 100%)'
        }} />

        {/* Technical Graphics Layer */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          {/* Chapter 1 Graphics: Corner Coordinates */}
          <div className="ch-graphic-1 absolute inset-0 w-full h-full flex justify-between p-8 md:p-14">
            <div style={{ fontFamily: 'SUSE, monospace', fontSize: '0.55rem', color: 'rgba(75,163,251,0.6)', letterSpacing: '0.2em' }}>
              SYS_LOC: 24°51′N 67°02′E<br/>WGS 84 · UTM 43N
            </div>
            <div style={{ fontFamily: 'SUSE, monospace', fontSize: '0.55rem', color: 'rgba(75,163,251,0.6)', letterSpacing: '0.2em', textAlign: 'right' }}>
              SCALE_RATIO: 1:200<br/>VANCE_ROSTOVA_VR
            </div>
          </div>

          {/* Chapter 2 Graphics: Horizontal Measurement Line */}
          <div className="ch-graphic-2 absolute bottom-24 left-10 right-10 flex flex-col gap-2">
            <div className="w-full h-[1px] bg-sky-500/40 relative">
              <div className="absolute top-0 left-0 w-[1px] h-3 bg-sky-500/70" />
              <div className="absolute top-0 left-1/4 w-[1px] h-2 bg-sky-500/70" />
              <div className="absolute top-0 left-1/2 w-[1px] h-3 bg-sky-500/70" />
              <div className="absolute top-0 left-3/4 w-[1px] h-2 bg-sky-500/70" />
              <div className="absolute top-0 right-0 w-[1px] h-3 bg-sky-500/70" />
            </div>
            <div className="flex justify-between" style={{ fontFamily: 'SUSE, monospace', fontSize: '0.52rem', color: 'rgba(75,163,251,0.7)' }}>
              <span>0.00 M</span>
              <span>15,000 M</span>
              <span>30,000 M</span>
              <span>45,000 M</span>
              <span>60,000 M</span>
            </div>
          </div>

          {/* Chapter 3 Graphics: Target Crosshair */}
          <div className="ch-graphic-3 absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 border border-sky-500/30 rounded-full flex items-center justify-center relative">
              <div className="absolute w-[1px] h-56 bg-sky-500/40" />
              <div className="absolute h-[1px] w-56 bg-sky-500/40" />
              <div className="w-2.5 h-2.5 bg-sky-500/70 rounded-full" />
            </div>
          </div>

          {/* Chapter 4 Graphics: Structural Grid Lines */}
          <svg className="ch-graphic-4 absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ch-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(4,102,200,0.18)" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ch-grid)" />
          </svg>

          {/* Chapter 5 Graphics: Active Zone Box */}
          <div className="ch-graphic-5 absolute top-1/4 right-1/4 w-64 h-44 border border-amber-500/40 flex flex-col justify-between p-3.5">
            <span style={{ fontFamily: 'SUSE, monospace', fontSize: '0.52rem', color: '#f59e0b', letterSpacing: '0.15em' }}>[ ZONE ANALYSIS ACTIVE ]</span>
            <div className="w-full flex justify-between" style={{ fontFamily: 'SUSE, monospace', fontSize: '0.52rem', color: 'rgba(245,158,11,0.7)' }}>
              <span>X: 1,489.2</span>
              <span>Y: -894.1</span>
            </div>
          </div>

          {/* Chapter 6 Graphics: Site Boundary */}
          <svg className="ch-graphic-6 absolute inset-0 w-full h-full" fill="none" stroke="rgba(34,197,94,0.4)" strokeWidth="1">
            <rect x="5%" y="10%" width="90%" height="80%" strokeDasharray="8,5" />
            <text x="7%" y="14%" fill="#22c55e" fontSize="10" fontFamily="SUSE, monospace" letterSpacing="0.15em">SECTOR_6_LIMITS</text>
          </svg>

          {/* Chapter 7 Graphics: Masterplan Rays */}
          <svg className="ch-graphic-7 absolute inset-0 w-full h-full" fill="none" stroke="rgba(75,163,251,0.3)" strokeWidth="0.8">
            <path d="M 0,0 L 500,500 M 1000,0 L 500,500 M 0,1000 L 500,500 M 1000,1000 L 500,500" strokeDasharray="4,6" />
          </svg>

          {/* Chapter 8 Graphics: Final Focus Corner Brackets */}
          <div className="ch-graphic-8 absolute inset-10 border border-sky-500/20 pointer-events-none">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-sky-500/60" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-sky-500/60" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-sky-500/60" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-sky-500/60" />
          </div>
        </div>

        {/* Information Cards Layer */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {CHAPTERS.map((ch) => (
            <React.Fragment key={ch.id}>
              {ch.cards.map((card, cardIdx) => {
                const posClass = POSITION_CLASSES[card.position] || POSITION_CLASSES.BOTTOM_LEFT;
                return (
                  <div
                    key={cardIdx}
                    className={`ch-card-${ch.id} absolute ${posClass} w-[210px] sm:w-[260px] md:w-[290px] max-w-[85vw] p-4 sm:p-5 md:p-6 cinematic-card-hud pointer-events-auto flex flex-col`}
                  >
                    <span style={{ fontFamily: 'SUSE, monospace', fontSize: '0.55rem', color: '#4ba3fb', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '8px' }}>
                      {card.eyebrow}
                    </span>
                    <h3 style={{ fontFamily: 'SUSE, monospace', fontSize: '1.2rem', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '10px' }}>
                      {card.title}
                    </h3>
                    <p style={{ fontFamily: 'SUSE, monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: card.isCTA ? '16px' : '0' }}>
                      {card.description}
                    </p>

                    {card.isCTA && (
                      <button
                        onClick={() => setCurrentPage('projects')}
                        className="self-start flex items-center gap-2 border border-sky-500/40 hover:border-sky-500/90 px-4 py-2 text-[#4ba3fb] hover:text-white bg-sky-500/10 hover:bg-sky-500/25 transition-all text-[0.6rem] tracking-widest font-semibold uppercase"
                        style={{ fontFamily: 'SUSE, monospace' }}
                      >
                        <span>VIEW DOSSIER →</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>

        {/* Fixed Chapter Indicator & Progress Bar */}
        <div className="absolute bottom-8 left-8 md:left-14 z-40 flex flex-col gap-2 pointer-events-none">
          <div className="flex items-center gap-3">
            <span ref={chapterNumberRef} style={{ fontFamily: 'SUSE, monospace', fontSize: '0.65rem', color: '#fff', letterSpacing: '0.25em' }}>
              01 / 08
            </span>
          </div>
          <div className="w-36 h-[2px] bg-white/15 relative overflow-hidden">
            <div
              ref={progressBarRef}
              className="absolute inset-0 bg-[#4ba3fb] origin-left scale-x-0"
              style={{ transition: 'transform 0.08s ease-out' }}
            />
          </div>
        </div>

        {/* Scroll Instruction Prompt */}
        <div
          ref={scrollInstructionRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-40 pointer-events-none transition-opacity duration-300"
        >
          <span style={{ fontFamily: 'SUSE, monospace', fontSize: '0.55rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            SCROLL TO EXPLORE
          </span>
          <div className="w-[1px] h-10 bg-[#4ba3fb]/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#4ba3fb] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};


// ─── Wireframe Tower (pure CSS, no GSAP per frame) ──────────
const WireframeTower = ({ mouseX = 0, mouseY = 0 }) => (
  <svg viewBox="0 0 280 480" className="w-full h-full" style={{
    opacity: 0.15,
    transform: `perspective(900px) rotateY(${(mouseX * 10).toFixed(1)}deg) rotateX(${(-mouseY * 5).toFixed(1)}deg)`,
    transition: 'transform 1s cubic-bezier(0.16,1,0.3,1)',
  }} xmlns="http://www.w3.org/2000/svg">
    {Array.from({ length: 18 }).map((_, i) => {
      const w = 190 - i * 4;
      const x = (280 - w) / 2;
      const y = 440 - i * 22;
      return <rect key={i} x={x} y={y} width={w} height="1.2" fill="none" stroke={`rgba(4,102,200,${0.3 + i * 0.015})`} strokeWidth="0.8" />;
    })}
    <line x1="45" y1="460" x2="82" y2="20" stroke={`rgba(4,102,200,0.55)`} strokeWidth="1" />
    <line x1="235" y1="460" x2="198" y2="20" stroke={`rgba(4,102,200,0.55)`} strokeWidth="1" />
    <line x1="140" y1="460" x2="140" y2="20" stroke={`rgba(4,102,200,0.3)`} strokeWidth="0.7" />
    <line x1="140" y1="20" x2="140" y2="0" stroke={`rgba(4,102,200,0.7)`} strokeWidth="1.5" />
    <circle cx="140" cy="0" r="2.5" fill={A} opacity="0.6" />
  </svg>
);

// ─── Project Atlas: GSAP Pinned Scroll Experience ───
const ProjectAtlas = () => {
  const { setCursor, resetCursor, setCurrentPage } = useNav();
  const wrapRef = useRef(null);
  const slideRefs = useRef([]);
  const [activeIdx, setActiveIdx] = useState(0);

  const projects = PROJECTS.slice(0, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial state for all slides
      projects.forEach((_, idx) => {
        const slide = slideRefs.current[idx];
        if (!slide) return;
        if (idx === 0) {
          gsap.set(slide, { opacity: 1, y: 0, zIndex: 10 });
        } else {
          gsap.set(slide, { opacity: 0, y: 60, zIndex: 10 + idx });
        }
      });

      // 2. Timeline with GSAP pinning, scrubbing, and scroll snapping
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top top',
          end: '+=2000',
          pin: true,
          scrub: true,
          snap: {
            snapTo: [0, 0.5, 1], // Slide 1 (0.0), Slide 2 (0.5), Slide 3 (1.0)
            duration: { min: 0.4, max: 0.8 },
            delay: 0.05,
            ease: 'power2.inOut'
          },
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.25) setActiveIdx(0);
            else if (p < 0.75) setActiveIdx(1);
            else setActiveIdx(2);
          }
        }
      });

      // Transition 1: Slide 0 (Karachi) out -> Slide 1 (Lahore) in
      tl.to(slideRefs.current[0], { opacity: 0, y: -60, duration: 1, ease: 'power2.inOut' }, 0)
        .to(slideRefs.current[1], { opacity: 1, y: 0, duration: 1, ease: 'power2.inOut' }, 0);

      // Transition 2: Slide 1 (Lahore) out -> Slide 2 (Islamabad) in
      tl.to(slideRefs.current[1], { opacity: 0, y: -60, duration: 1, ease: 'power2.inOut' }, 1)
        .to(slideRefs.current[2], { opacity: 1, y: 0, duration: 1, ease: 'power2.inOut' }, 1);

    }, wrapRef);

    return () => ctx.revert();
  }, []); // eslint-disable-line

  return (
    <section>
      {/* Section header */}
      <div
        className="max-w-screen-2xl mx-auto px-8 py-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b"
        style={{ borderColor: TB }}
      >
        <div>
          <div style={{ fontFamily: M, fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: `rgba(4,102,200,0.5)`, marginBottom: 12 }}>
            01 / Featured Contracts
          </div>
          <h2 style={{ fontFamily: M, fontSize: 'clamp(2.2rem,4.5vw,5.5rem)', fontWeight: 200, letterSpacing: '-0.025em', lineHeight: 0.95, color: TX }}>
            Major DHA Projects
          </h2>
        </div>
        <div style={{ fontFamily: M, fontSize: '0.65rem', letterSpacing: '0.15em', color: TM, textTransform: 'uppercase', maxWidth: 360, lineHeight: 1.8 }}>
          Scroll to view landmark DHA Pakistan contracts — Karachi, Lahore, and Islamabad.
        </div>
      </div>

      {/* Pinned Viewport */}
      <div
        ref={wrapRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          background: BG,
          overflow: 'hidden'
        }}
      >
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            ref={el => slideRefs.current[idx] = el}
            style={{
              position: 'absolute',
              inset: 0,
              willChange: 'opacity, transform',
            }}
          >
            {/* Full-bleed background image */}
            <img
              src={proj.heroImage}
              alt={proj.title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.5) saturate(0.65)' }}
            />

            {/* Grid overlay */}
            <div className="coord-overlay" />

            {/* Gradient overlays: 60% max opacity for high image visibility */}
            <div className="absolute inset-0" style={{
              background: `linear-gradient(to right, rgba(0, 18, 51, 0.6) 0%, rgba(0, 18, 51, 0.25) 50%, transparent 100%)`
            }} />
            <div className="absolute inset-0" style={{
              background: `linear-gradient(to top, rgba(0, 18, 51, 0.6) 0%, transparent 60%)`
            }} />

            {/* Status badge */}
            <div className="absolute top-8 right-8 flex items-center gap-3">
              <div className="pulse-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ fontFamily: M, fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                {proj.status}
              </span>
            </div>

            {/* Counter */}
            <div className="absolute top-8 left-8" style={{ fontFamily: M, fontSize: '0.55rem', letterSpacing: '0.3em', color: `rgba(4,102,200,0.5)`, textTransform: 'uppercase' }}>
              {String(idx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </div>

            {/* Project info card */}
            <div
              className="absolute bottom-12 sm:bottom-0 left-0 px-6 pb-8 sm:px-10 sm:pb-12 md:px-16 md:pb-16 w-full lg:w-3/5"
              style={{ cursor: 'default' }}
            >
              <div style={{ fontFamily: M, fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: `rgba(4,102,200,0.5)`, marginBottom: 12 }}>
                {proj.sector} · {proj.location.split(',')[0].toUpperCase()}
              </div>

              <h3 style={{ fontFamily: M, fontSize: 'clamp(1.8rem,4vw,4.5rem)', fontWeight: 200, letterSpacing: '-0.02em', lineHeight: 0.95, color: TX, marginBottom: '1.2rem' }}>
                {proj.title}
              </h3>

              {/* Meta strip */}
              <div className="flex flex-wrap gap-4 sm:gap-8 mb-4 sm:mb-6">
                {[
                  { k: 'Location',       v: proj.location },
                  { k: 'Scale',          v: proj.scale },
                  { k: 'Contract Value', v: proj.value },
                ].map(({ k, v }) => (
                  <div key={k}>
                    <div style={{ fontFamily: M, fontSize: '0.52rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: 4 }}>{k}</div>
                    <div style={{ fontFamily: M, fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.1em', color: AL }}>{v}</div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ width: 48, height: 1, background: `rgba(4,102,200,0.55)`, marginBottom: '1rem' }} />

              <p style={{ fontFamily: M, fontSize: '0.75rem', fontWeight: 300, letterSpacing: '0.04em', lineHeight: 1.8, color: 'rgba(229,230,234,0.4)', maxWidth: 520 }}>
                {proj.tagline}
              </p>
            </div>
          </div>
        ))}

        {/* Dynamic active city indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
          {projects.map((p, i) => {
            const isActive = activeIdx === i;
            return (
              <div key={i} className="flex items-center gap-2 transition-all duration-300">
                <div
                  style={{
                    width: isActive ? 28 : 12,
                    height: 2,
                    background: isActive ? AL : 'rgba(255,255,255,0.2)',
                    transition: 'all 0.3s ease'
                  }}
                />
                <span
                  style={{
                    fontFamily: M,
                    fontSize: '0.52rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: isActive ? TX : 'rgba(255,255,255,0.3)',
                    fontWeight: isActive ? 600 : 400,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {p.location.split(',')[0]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer link */}
      <div className="flex justify-end px-8 py-5 border-t" style={{ borderColor: TB }}>
        <button
          onClick={() => setCurrentPage('projects')}
          className="flex items-center gap-2"
          style={{ fontFamily: M, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: AL }}
        >
          <span>View All Contracts</span>
          <ArrowUpRight size={13} color={A} />
        </button>
      </div>
    </section>
  );
};
const MarqueeCard = ({ client, setCursor, resetCursor }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setCursor('CLIENT');
    setHovered(true);
  };

  const handleMouseLeave = () => {
    resetCursor();
    setHovered(false);
  };

  return (
    <div
      className="flex-shrink-0 flex items-center gap-6 px-12 py-6 relative select-none transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.08)' }} />
      <div className="text-left">
        <div style={{ fontFamily: 'SUSE, monospace', fontSize: '0.88rem', fontWeight: 500, letterSpacing: '0.15em', color: hovered ? '#ffffff' : 'rgba(255,255,255,0.5)', textTransform: 'uppercase', whiteSpace: 'nowrap', transition: 'color 0.3s' }}>
          {client.name}
        </div>
        <div style={{ fontFamily: 'SUSE, monospace', fontSize: '0.52rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: hovered ? '#4ba3fb' : 'rgba(75, 163, 251, 0.3)', transition: 'color 0.3s', marginTop: 2 }}>
          {client.role}
        </div>
      </div>
    </div>
  );
};
MarqueeCard.displayName = 'MarqueeCard';

// ─── Replicated Reference Services Section (Deep Navbar Glass + Slightly Smaller Cards) ───
const ServicesSection = ({ setCurrentPage }) => {
  const triggerRef = useRef(null);
  const trackRef = useRef(null);
  const bgOverlayRef = useRef(null);

  const services = [
    {
      idx: '01',
      title: 'Architectural Design',
      desc: 'Innovative architectural solutions for residential, commercial, and mixed-use developments tailored to site parameters.',
      tag: 'RESIDENTIAL & COMMERCIAL',
      Icon: Compass,
      alignClass: 'self-end mb-6 md:mb-10',
    },
    {
      idx: '02',
      title: 'Interior Design',
      desc: 'Functional and aesthetically refined interior spaces balancing aesthetics with practical usability for modern living.',
      tag: 'SPATIAL DESIGN',
      Icon: Building2,
      alignClass: 'self-start mt-6 md:mt-10',
    },
    {
      idx: '03',
      title: 'Structural Design & Engineering',
      desc: 'Structural engineering solutions and technical civil guidance integrated seamlessly with architectural design.',
      tag: 'STRUCTURAL ENGINEERING',
      Icon: Box,
      alignClass: 'self-center my-3',
    },
    {
      idx: '04',
      title: 'Infrastructure & Civil Works',
      desc: 'Planning and engineering solutions for sustainable infrastructure developments, roads, and public works.',
      tag: 'CIVIL INFRASTRUCTURE',
      Icon: Leaf,
      alignClass: 'self-end mb-6 md:mb-10',
    },
    {
      idx: '05',
      title: 'Urban Design & Town Planning',
      desc: 'Designing organized community layouts, sustainable land use strategies, and future-ready urban environments.',
      tag: 'ZONING & MASTERPLAN',
      Icon: Layers,
      alignClass: 'self-start mt-6 md:mt-10',
    },
    {
      idx: '06',
      title: 'Engineering Consultancy & Mgmt',
      desc: 'Professional engineering guidance, project management, and construction supervision for quality assurance.',
      tag: 'CONSULTANCY & SUPERVISION',
      Icon: ShieldCheck,
      alignClass: 'self-center my-3',
    },
    {
      idx: '07',
      title: 'Explore All 12 Capabilities',
      desc: 'Discover our full spectrum of 12 integrated services including site planning, development consultancy, and masterplanning.',
      tag: 'ALL 12 SERVICES',
      Icon: ArrowUpRight,
      alignClass: 'self-end mb-6 md:mb-10',
      isInverted: true,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Dark black gradient overlay opacity scrub on scroll
      gsap.fromTo(
        bgOverlayRef.current,
        { opacity: 0 },
        {
          opacity: 0.9,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
        }
      );

      // 2. Horizontal pin & scroll scrub animation
      if (trackRef.current) {
        const getScrollAmount = () => {
          return trackRef.current.scrollWidth - window.innerWidth + 120;
        };

        gsap.to(trackRef.current, {
          x: () => -getScrollAmount(),
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: () => `+=${getScrollAmount()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
      }

      // Delayed refresh to handle dynamically loaded elements and correct layout calculation
      const refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 1500);

      return () => {
        clearTimeout(refreshTimeout);
      };
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={triggerRef}
      className="relative z-20 min-h-screen w-full overflow-hidden bg-[#020408] border-t border-b"
      style={{ borderColor: 'rgba(75, 163, 251, 0.15)' }}
    >
      {/* Background Image: services-bg.jpg */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/services-bg.jpg"
          alt="Architecture Services Backdrop"
          className="w-full h-full object-cover filter brightness-75 saturate-90"
        />
        {/* Animated Dark Gradient Overlay */}
        <div
          ref={bgOverlayRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0, 12, 35, 0.75) 0%, rgba(2, 4, 8, 0.96) 100%), ' +
              'linear-gradient(to right, rgba(2, 4, 8, 0.96) 0%, rgba(2, 4, 8, 0.82) 50%, rgba(2, 4, 8, 0.96) 100%)',
          }}
        />
        <GridBg opacity={0.2} />
      </div>

      {/* Huge Outline Watermark Text: "OUR SERVICES" */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none select-none z-0 whitespace-nowrap overflow-hidden opacity-15"
        style={{
          fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif",
          fontSize: 'clamp(5rem, 15vw, 16rem)',
          fontWeight: 800,
          letterSpacing: '0.05em',
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.25)',
          lineHeight: 1,
        }}
      >
        OUR SERVICES
      </div>

      {/* Main Horizontal Track Container */}
      <div className="relative z-10 h-screen w-full flex items-center overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-row items-center gap-6 md:gap-10 px-8 md:px-16 lg:px-24 h-full"
          style={{ willChange: 'transform' }}
        >
          {/* Fixed Left Header Card */}
          <div className="w-[280px] md:w-[340px] lg:w-[380px] flex-shrink-0 flex flex-col justify-center self-center pr-4">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase leading-[1.08]"
              style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
            >
              Designing Beyond Form
            </h2>

            <p
              className="text-xs md:text-sm text-white/50 mt-5 leading-relaxed font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              An architectural &amp; engineering process defining spatial order, functional logic, and multi-billion dollar masterplan direction.
            </p>

            <div className="mt-8 flex items-center gap-3 text-xs font-mono text-sky-400">
              <span>SCROLL TO EXPLORE CAPABILITIES</span>
              <span className="animate-bounce">→</span>
            </div>
          </div>

          {/* 7 Staggered Service Cards (With 7th Card Styled White) */}
          {services.map((srv, idx) => {
            const { Icon, isInverted } = srv;
            return (
              <div
                key={idx}
                className={`service-card group relative w-[290px] sm:w-[320px] md:w-[340px] h-[370px] md:h-[400px] flex-shrink-0 p-7 md:p-8 rounded-[20px] border backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between ${srv.alignClass} ${
                  isInverted
                    ? 'bg-white border-white text-slate-950 hover:bg-[#020816] hover:border-sky-500/50 hover:text-white'
                    : 'bg-[#020816]/80 border-white/12 hover:border-sky-500/50 text-white'
                }`}
                style={{
                  boxShadow: isInverted
                    ? '0 20px 60px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                    : '0 20px 60px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
                }}
              >
                <div>
                  {/* Top Header: Line Icon + Index Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isInverted
                        ? 'border-slate-300 bg-slate-100 text-slate-900 group-hover:bg-[#4ba3fb] group-hover:border-sky-500 group-hover:text-white'
                        : 'border-sky-500/30 bg-sky-500/10 text-[#4ba3fb] group-hover:bg-[#4ba3fb] group-hover:text-white'
                    }`}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border transition-colors ${
                        isInverted
                          ? 'border-slate-300 bg-slate-100 text-slate-900 group-hover:border-sky-500/20 group-hover:bg-sky-500/10 group-hover:text-[#4ba3fb]'
                          : 'border-sky-500/20 bg-sky-500/10 text-[#4ba3fb]'
                      }`}
                    >
                      {srv.idx} / 07
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3
                    className={`text-xl md:text-2xl font-bold mb-3 leading-tight transition-colors ${
                      isInverted ? 'text-slate-900 group-hover:text-sky-300' : 'text-white group-hover:text-sky-300'
                    }`}
                    style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
                  >
                    {srv.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    className={`text-xs leading-relaxed font-light transition-colors ${
                      isInverted ? 'text-slate-700 group-hover:text-white/60' : 'text-white/60'
                    }`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {srv.desc}
                  </p>
                </div>

                {/* Bottom Action Link ("View details ↗" or "VIEW MORE") */}
                <button
                  type="button"
                  onClick={() => setCurrentPage('services')}
                  className={`pt-5 border-t flex items-center justify-between text-xs w-full text-left bg-transparent cursor-pointer transition-colors ${
                    isInverted ? 'border-slate-200 group-hover:border-sky-500/40' : 'border-white/10 group-hover:border-sky-500/40'
                  }`}
                >
                  <span
                    className={`font-semibold tracking-wider text-xs transition-colors flex items-center gap-2 ${
                      isInverted ? 'text-slate-950 group-hover:text-[#4ba3fb]' : 'text-white group-hover:text-[#4ba3fb]'
                    }`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {isInverted ? 'VIEW MORE' : 'View details'}
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <span className={`text-[9px] font-mono tracking-widest uppercase transition-colors ${
                    isInverted ? 'text-slate-500 group-hover:text-sky-400/80' : 'text-sky-400/80'
                  }`}>
                    {srv.tag}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── About Us Section (Mission & Vision) ───
const AboutUsSection = () => {
  return (
    <section className="py-24 md:py-32 relative z-20 overflow-hidden border-t border-b" style={{ background: '#020408', borderColor: 'rgba(75, 163, 251, 0.15)' }}>
      <GridBg opacity={0.2} />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Title Block (Light Weight Heading) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight uppercase leading-[1.12]"
              style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
            >
              Masterplanning &amp; High-Rise Engineering
            </h2>
            <p
              className="text-xs md:text-sm text-white/60 mt-6 leading-relaxed font-light max-w-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Established in 1992, ESAC Architects &amp; Engineers Group has spent three decades designing iconic skylines and smart city developments.
            </p>
          </div>

          {/* Right Column: Stacked Cards Block (Stacked one above another, small cards) */}
          <div className="lg:col-span-6 flex flex-col gap-6 w-full lg:max-w-lg lg:ml-auto">
            
            {/* Our Mission Card */}
            <div
              className="group p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-sky-500/50 transition-all duration-500 relative overflow-hidden"
              style={{
                boxShadow: '0 15px 35px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4ba3fb]/50 to-transparent group-hover:via-[#4ba3fb] transition-all" />

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl border border-sky-500/30 bg-sky-500/10 flex-shrink-0 flex items-center justify-center text-[#4ba3fb] group-hover:scale-110 transition-transform">
                  <Target size={20} />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-[#4ba3fb] uppercase mb-1.5 block">
                    STATEMENT // 01
                  </span>
                  <h3
                    className="text-lg md:text-xl font-bold text-white mb-2 uppercase"
                    style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
                  >
                    Our Mission
                  </h3>
                  <p
                    className="text-xs text-white/70 leading-relaxed font-light"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Driving zero-carbon urbanism, Zone 4 seismic resilience, and sovereign infrastructure monuments.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Vision Card */}
            <div
              className="group p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-sky-500/50 transition-all duration-500 relative overflow-hidden"
              style={{
                boxShadow: '0 15px 35px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4ba3fb]/50 to-transparent group-hover:via-[#4ba3fb] transition-all" />

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl border border-sky-500/30 bg-sky-500/10 flex-shrink-0 flex items-center justify-center text-[#4ba3fb] group-hover:scale-110 transition-transform">
                  <Globe size={20} />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-[#4ba3fb] uppercase mb-1.5 block">
                    STATEMENT // 02
                  </span>
                  <h3
                    className="text-lg md:text-xl font-bold text-white mb-2 uppercase"
                    style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
                  >
                    Our Vision
                  </h3>
                  <p
                    className="text-xs text-white/70 leading-relaxed font-light"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Defining the global skyline standard by orchestrating high-density smart cities and vertical developments.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Catalogue Gallery Section ───
const CatalogueSection = ({ setCurrentPage }) => {
  const catalogueImages = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop'
  ];

  return (
    <section className="py-28 md:py-36 relative z-20 overflow-hidden border-t border-b" style={{ background: '#020408', borderColor: 'rgba(75, 163, 251, 0.15)' }}>
      <GridBg opacity={0.15} />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2
              className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase"
              style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
            >
              CATALOGUE
            </h2>
            <p
              className="text-xs md:text-sm text-white/50 mt-4 leading-relaxed max-w-lg"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Explore landmark masterplans, seismic towers, and sovereign infrastructure engineered across global studios.
            </p>
          </div>
        </div>

        {/* 4x2 Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {catalogueImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentPage('portfolio')}
              className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[16/10] border border-white/10 bg-slate-950 transition-all duration-500"
              style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              {/* Image with Hover Zoom */}
              <img
                src={img}
                alt={`Catalogue Project ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* VIEW MORE Button below Catalogue Gallery */}
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={() => setCurrentPage('portfolio')}
            className="inline-flex items-center gap-3 text-lg md:text-xl font-normal text-white hover:text-[#4ba3fb] transition-all duration-300 group cursor-pointer"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>View More</span>
            <div className="w-10 h-10 rounded-full border border-white group-hover:border-[#4ba3fb] flex items-center justify-center transition-all duration-300">
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

// ─── Our Team Section (Executive Leadership) ───
const OurTeamSection = () => {
  return (
    <section className="py-28 md:py-36 relative z-20 overflow-hidden border-t border-b" style={{ background: '#020408', borderColor: 'rgba(75, 163, 251, 0.15)' }}>
      <GridBg opacity={0.15} />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2
              className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase"
              style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
            >
              OUR TEAM
            </h2>
          </div>
          <p
            className="text-xs md:text-sm text-white/50 leading-relaxed font-light max-w-md"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            World-class principal architects, structural engineers, and urban masterplanners leading ESAC's global design directorate.
          </p>
        </div>

        {/* 4 Executive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {LEADERSHIP.map((member, idx) => {
            const images = [
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop'
            ];
            const memberImg = images[idx] || images[0];

            return (
              <div
                key={idx}
                className="group relative h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-slate-950 transition-all duration-500"
                style={{
                  boxShadow: '0 15px 45px rgba(0,0,0,0.6)',
                }}
              >
                {/* Background Member Image */}
                <img
                  src={memberImg}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Default Visible Bottom Title Bar */}
                <div className="absolute bottom-4 left-4 right-4 z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="p-4 rounded-2xl bg-slate-950/80 backdrop-blur-lg border border-white/10">
                    <h3
                      className="text-lg font-bold text-white leading-tight"
                      style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
                    >
                      {member.name}
                    </h3>
                    <div
                      className="text-[10px] font-bold text-[#4ba3fb] uppercase tracking-wider mt-1"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Hover Slide-up Details Panel */}
                <div
                  className="absolute inset-0 bg-[#020816]/95 p-6 flex flex-col justify-between transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[9px] font-mono font-bold tracking-widest text-[#4ba3fb] uppercase px-2.5 py-1 rounded-full border border-sky-500/20 bg-sky-500/10">
                        {member.location}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60">
                        <Users size={14} />
                      </div>
                    </div>

                    <h3
                      className="text-2xl font-bold text-white mb-2 leading-tight"
                      style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
                    >
                      {member.name}
                    </h3>

                    <div
                      className="text-xs font-bold text-[#4ba3fb] tracking-wider uppercase mb-4"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {member.role}
                    </div>

                    <p
                      className="text-xs text-white/60 leading-relaxed font-light"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-sky-400">
                    <span>ESAC PARTNER DIRECTORATE</span>
                    <span>ACTIVE</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── Non-Card Architectural Data Matrix (INSTITUTIONAL METRICS with Animated Count-Up) ───
const EditorialStatsSection = () => {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState({
    acres: 0,
    markets: 0,
    experts: 0,
    honors: 0,
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const targets = { acres: 0, markets: 0, experts: 0, honors: 0 };

    const ctx = gsap.context(() => {
      gsap.to(targets, {
        acres: 20000,
        markets: 8,
        experts: 465,
        honors: 41,
        duration: 2.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
        onUpdate: () => {
          setCounts({
            acres: Math.floor(targets.acres),
            markets: Math.floor(targets.markets),
            experts: Math.floor(targets.experts),
            honors: Math.floor(targets.honors),
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { n: `${counts.acres.toLocaleString()}+`,  u: 'ACRES MASTERPLANNED',   d: 'DHA City Karachi Smart Urban Masterplan & transit core', idx: '01' },
    { n: counts.markets < 10 ? `0${counts.markets}` : `${counts.markets}`,       u: 'GLOBAL MARKETS',        d: 'Architecture & engineering studios across South Asia, UK & UAE', idx: '02' },
    { n: `${counts.experts}`,      u: 'LICENSED EXPERTS',      d: 'Structural engineers, BIM modelers & municipal planners', idx: '03' },
    { n: `${counts.honors}`,       u: 'GLOBAL DESIGN HONORS',  d: 'WAF, RIBA International, and Pritzker architecture nominations', idx: '04' },
  ];

  return (
    <section ref={sectionRef} className="py-28 md:py-36 relative z-20 border-t border-b overflow-hidden" style={{ borderColor: 'rgba(75, 163, 251, 0.15)', background: '#020408' }}>
      <GridBg opacity={0.15} />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Architectural Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 pb-12 border-b border-white/10">
          <div>
            <h2
              className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight"
              style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
            >
              Engineering Unrivaled Global Scale
            </h2>
          </div>
          <p
            className="text-xs md:text-sm text-white/50 leading-relaxed font-light max-w-md"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Three decades of landmark masterplanning, anti-seismic skyscrapers, and sovereign public contracts.
          </p>
        </div>

        {/* Non-Card Architectural Column Data Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map(({ n, u, d, idx }, i) => (
            <div
              key={idx}
              className={`group flex flex-col justify-between ${i !== 0 ? 'lg:pl-6 xl:pl-8' : ''} ${i !== stats.length - 1 ? 'lg:pr-6 xl:pr-8' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#4ba3fb] uppercase">
                    METRIC // {idx}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ba3fb]/40 group-hover:bg-[#4ba3fb] transition-colors" />
                </div>

                {/* Massive Highkind Metric Number */}
                <div
                  className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight mb-4 group-hover:text-[#4ba3fb] transition-colors duration-500 whitespace-nowrap"
                  style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
                >
                  {n}
                </div>

                {/* Metric Unit Title */}
                <div
                  className="text-xs font-bold text-[#4ba3fb] tracking-widest uppercase mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {u}
                </div>

                {/* Metric Description */}
                <p
                  className="text-xs text-white/45 leading-relaxed font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {d}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ─── Contact CTA Section (Replaces old consultation form) ───
const ContactCtaSection = ({ setCurrentPage }) => {
  return (
    <section className="py-32 md:py-44 relative z-20 overflow-hidden border-t border-b" style={{ background: '#020408', borderColor: 'rgba(75, 163, 251, 0.15)' }}>
      {/* Background Building Image & Dark Overlay (60% Opacity) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/esac-banner.png"
          alt="Architectural Backdrop"
          className="w-full h-full object-cover opacity-60 filter brightness-90 contrast-110 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/40 to-[#020408]/60" />
        <GridBg opacity={0.15} />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight leading-[1.05]"
          style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
        >
          Ready to Shape Tomorrow's Cities?
        </h2>

        <p
          className="text-sm md:text-base text-white/60 mt-6 leading-relaxed font-light max-w-2xl mx-auto"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Initiate direct feasibility evaluation, masterplanning strategy, and structural engineering directorate consultation under strict NDA protocols.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center gap-4 px-10 py-5 rounded-full border-2 border-transparent bg-transparent text-white font-bold tracking-widest uppercase text-xs transition-all duration-500 hover:border-[#4ba3fb] hover:text-[#4ba3fb] hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/10 group cursor-pointer"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>CONTACT NOW</span>
            <div className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-[#4ba3fb] group-hover:text-slate-950 transition-all duration-300">
              <PhoneCall size={14} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── Consultation Form Section Component ───
const ConsultationFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [selectedCategory, setSelectedCategory] = useState('Smart City Masterplan');
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Smart City Masterplan',
    'High-Rise Skyscraper',
    'Civic Infrastructure',
    'Zero-Carbon R&D',
    'Luxury Residence'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.contact) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24 md:py-36 relative overflow-hidden border-t border-b" style={{ background: '#030814', borderColor: 'rgba(75,163,251,0.15)' }}>
      {/* Background Building Image & Ambient Blue Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/esac-banner.png" 
          alt="Architectural Building Backdrop" 
          className="w-full h-full object-cover opacity-20 brightness-75 contrast-125 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(4, 102, 200, 0.18) 0%, transparent 60%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(75, 163, 251, 0.12) 0%, transparent 50%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #030814 0%, rgba(3, 8, 20, 0.7) 40%, rgba(3, 8, 20, 0.85) 70%, #030814 100%)' }} />
        <GridBg opacity={0.3} />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header HUD Pill & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-center font-bold text-3xl md:text-5xl text-white tracking-wide uppercase" style={{ fontFamily: "'Outfit', 'Syne', sans-serif", letterSpacing: '0.04em' }}>
            PROJECT CONSULTATION &amp; BRIEFING
          </h2>
          <p className="text-xs md:text-sm font-mono text-white/50 mt-4 max-w-2xl mx-auto leading-relaxed">
            Initiate direct feasibility evaluation with our chief architects &amp; structural engineering directorate.
          </p>
        </div>

        {/* Main Glassmorphic Card Container */}
        <div className="relative rounded-3xl border border-sky-500/20 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contacts & Interactive SLAs */}
            <div className="lg:col-span-5 space-y-8 text-left border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-12">
              <div>
                <div className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#4ba3fb] uppercase mb-4">
                  DIRECT CHANNELS
                </div>
                
                <div className="space-y-5 font-mono text-xs">
                  <div className="p-4 rounded-xl border border-white/10 bg-black/30 hover:border-sky-500/40 transition-colors group">
                    <div className="text-white/40 uppercase tracking-widest text-[9px] mb-1">E-MAIL DIRECT</div>
                    <a href="mailto:briefings@esac-group.com" className="text-white font-medium text-sm group-hover:text-[#4ba3fb] transition-colors flex items-center justify-between">
                      <span>briefings@esac-group.com</span>
                      <ArrowUpRight size={14} className="text-[#4ba3fb]" />
                    </a>
                  </div>

                  <div className="p-4 rounded-xl border border-white/10 bg-black/30 hover:border-sky-500/40 transition-colors group">
                    <div className="text-white/40 uppercase tracking-widest text-[9px] mb-1">DIRECT TELEPHONE</div>
                    <a href="tel:+92518409000" className="text-white font-medium text-sm group-hover:text-[#4ba3fb] transition-colors flex items-center justify-between">
                      <span>+92 (51) 840-9000</span>
                      <ArrowUpRight size={14} className="text-[#4ba3fb]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* SLA Guarantee Box */}
              <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                <div>
                  <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    24-HOUR FEASIBILITY REVIEW
                  </div>
                  <div className="text-[11px] font-mono text-white/60 mt-0.5 leading-snug">
                    All submitted project parameters are encrypted under strict NDA protocols.
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-3">GLOBAL NETWORKS</div>
                <div className="flex items-center gap-3">
                  {['LinkedIn', 'Facebook', 'X / Twitter', 'Behance', 'Instagram'].map((soc, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-[#4ba3fb] text-white/60 hover:text-white transition-all text-[10px] font-mono uppercase bg-white/5"
                    >
                      {soc}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Category Pills & Form */}
            <div className="lg:col-span-7">
              
              {/* Category Selector Pills */}
              <div className="mb-8">
                <label className="block text-[10px] font-mono font-bold tracking-[0.25em] text-[#4ba3fb] uppercase mb-3 text-left">
                  SELECT PROJECT SECTOR / DOMAIN
                </label>
                <div className="flex flex-wrap gap-2 text-left">
                  {categories.map((cat) => {
                    const isSel = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                          isSel
                            ? 'bg-[#4ba3fb] text-white font-semibold shadow-[0_0_15px_rgba(75,163,251,0.5)] border border-sky-400'
                            : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>

              {submitted ? (
                <div className="py-16 text-center space-y-5 rounded-2xl border border-sky-500/30 bg-black/40">
                  <div className="w-16 h-16 rounded-full bg-[#4ba3fb]/20 text-[#4ba3fb] border border-[#4ba3fb]/50 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(75,163,251,0.4)]">
                    <Check size={32} />
                  </div>
                  <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.6rem', color: TX, fontWeight: 300 }}>
                    BRIEFING TRANSMITTED CONFIDENTIAL
                  </h4>
                  <p className="text-xs font-mono text-white/60 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our executive engineering directorate will review your briefing for <span className="text-[#4ba3fb]">{selectedCategory}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-8 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white uppercase tracking-widest border border-white/20 transition-all"
                  >
                    Submit Additional Briefing
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7 text-left">
                  <div>
                    <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">FULL NAME / EXECUTIVE TITLE</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Director Architect / Property Developer"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/30 border border-white/15 focus:border-[#4ba3fb] rounded-xl px-4 py-3.5 text-xs md:text-sm font-mono text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#4ba3fb] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">PHONE NUMBER OR DIRECT E-MAIL</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. +92 300 1234567 / name@company.com"
                      value={formData.contact}
                      onChange={e => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full bg-black/30 border border-white/15 focus:border-[#4ba3fb] rounded-xl px-4 py-3.5 text-xs md:text-sm font-mono text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#4ba3fb] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">PROJECT SCOPE &amp; REQUIREMENTS</label>
                    <textarea 
                      rows={4}
                      placeholder="Outline site location, plot scale, masterplanning scope, or structural requirements..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black/30 border border-white/15 focus:border-[#4ba3fb] rounded-xl px-4 py-3.5 text-xs md:text-sm font-mono text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#4ba3fb] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-white/40">
                      SECURE 256-BIT ENCRYPTED
                    </span>

                    <button
                      type="submit"
                      className="group flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#0466c8] to-[#3b82f6] hover:from-[#2563eb] hover:to-[#60a5fa] text-white text-xs font-mono tracking-widest font-bold uppercase transition-all duration-300 shadow-[0_0_25px_rgba(4,102,200,0.5)] hover:shadow-[0_0_35px_rgba(75,163,251,0.7)] cursor-pointer"
                    >
                      <span>TRANSMIT BRIEFING</span>
                      <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// ─── FAQ Section Component ───
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What is ESAC's role in DHA Pakistan masterplanning projects?",
      a: "ESAC serves as a primary architectural & engineering consultancy for landmark DHA developments including DHA City Karachi (20,000-acre smart city masterplan), DHA Phase 9 Lahore (68-story twin commercial towers), and DHA Islamabad (1,200-acre golf resort). We deliver BIM 5D modeling, subterranean transport spines, and anti-seismic engineering."
    },
    {
      q: "How does ESAC approach anti-seismic engineering for high-rise towers?",
      a: "Our structural engineering studio implements tuned mass dampers, diagrid external exoskeletons, and non-linear dynamic time-history analysis. All high-rise commercial structures comply with international Zone 4 high-seismic resistance standards."
    },
    {
      q: "What is the typical timeline and process for enterprise contract RFPs?",
      a: "Upon submitting a consultation briefing or contract RFP, our partner engineering directorate conducts a confidential feasibility analysis within 24 to 48 hours, followed by preliminary CAD spatial zoning, BIM 5D cost estimating, and site inspection."
    },
    {
      q: "Can international developers and sovereign wealth funds collaborate with ESAC?",
      a: "Yes. ESAC operates global studios across South Asia, London, Dubai, and Tokyo. We regularly partner with sovereign wealth funds, master developers, and municipal authorities on multi-billion dollar joint ventures."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#000814' }}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span style={{ fontFamily: M, fontSize: '0.55rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: AL }}>
            KNOWLEDGE BASE
          </span>
          <h2 style={{ fontFamily: M, fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 200, color: TX, marginTop: '0.4rem', letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontFamily: M, fontSize: '0.8rem', fontWeight: 300, color: 'rgba(255,255,255,0.4)', marginTop: '0.8rem' }}>
            Key technical insights into our engineering standards, DHA Pakistan partnerships, and municipal masterplanning workflow.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border transition-all duration-300 overflow-hidden"
                style={{
                  background: isOpen ? 'rgba(5, 11, 24, 0.85)' : 'rgba(255, 255, 255, 0.02)',
                  borderColor: isOpen ? 'rgba(75, 163, 251, 0.4)' : 'rgba(255, 255, 255, 0.06)'
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 transition-colors"
                >
                  <span style={{ fontFamily: M, fontSize: '1.05rem', fontWeight: 300, color: isOpen ? AL : TX }}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#4ba3fb]/20 text-[#4ba3fb] border-[#4ba3fb]/50' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                  <div 
                  className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2 border-t border-white/5">
                      <p style={{ fontFamily: M, fontSize: '0.8rem', fontWeight: 300, color: 'rgba(255,255,255,0.5)', lineHeight: 1.85 }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

// ─── Hero dynamic data ───────────────────────────────────
const HEADLINES = [
  ['Designing', "Tomorrow's", 'Cities.'],
  ['Engineering', 'Iconic',   'Skylines.'],
  ['Building',    'Smarter',  'Nations.'],
  ['Shaping',     'Urban',    'Futures.'],
];

// ─── MAIN HOME PAGE ─────────────────────────────────────────
export const HomePage = () => {
  const { setCurrentPage, setCursor, resetCursor, isPreloaded } = useNav();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const pageRef   = useRef(null);
  const heroBgRef = useRef(null);

  // Hero state management
  const [heroReady, setHeroReady] = useState(false);
  const [hlIdx, setHlIdx]         = useState(0);
  const [hlStatus, setHlStatus]   = useState('visible'); // 'visible' | 'exit' | 'enter'

  // ── Hero entrance ──
  useEffect(() => {
    if (!isPreloaded) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => setHeroReady(true)
      });

      // Background fade & scale
      tl.fromTo(heroBgRef.current,
        { opacity: 0, scale: 1.06, y: 20 },
        { opacity: 1, scale: 1,    y: 0, duration: 1.6 }
      );
      // Separator line
      tl.fromTo('.hero-divider',
        { scaleX: 0, opacity: 0, transformOrigin: 'left center' },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power2.inOut' },
        '-=0.8'
      );
      // ESAC Brand
      tl.fromTo('.hero-brand',
        { y: 60, opacity: 0 },
        { y: 0,  opacity: 1, duration: 1.0, ease: 'power4.out' },
        '-=0.5'
      );
      // Initial Headline words
      tl.fromTo('.hero-hl-word-init',
        { y: 50, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power4.out' },
        '-=0.75'
      );
      // CTA
      tl.fromTo('.hero-cta',
        { y: 20, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.6 },
        '-=0.4'
      );
      // Scroll nudge
      tl.fromTo('.hero-scroll-nudge',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.2'
      );
    }, pageRef);

    return () => ctx.revert();
  }, [isPreloaded]);

  // ── Dynamic headline baseline-ascend loop ──
  useEffect(() => {
    if (!heroReady) return;

    const hlInterval = setInterval(() => {
      setHlStatus('exit'); // slide up and fade out
      setTimeout(() => {
        setHlIdx(prev => (prev + 1) % HEADLINES.length);
        setHlStatus('enter'); // jump below baseline instantly
        setTimeout(() => {
          setHlStatus('visible'); // slide up to 0 and fade in
        }, 50);
      }, 450);
    }, 4000);

    return () => {
      clearInterval(hlInterval);
    };
  }, [heroReady]);

  const handleMouseMove = useCallback((e) => {
    setMouse({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: (e.clientY / window.innerHeight) * 2 - 1,
    });
  }, []);

  return (
    <div ref={pageRef} onMouseMove={handleMouseMove} style={{ background: BG, color: TX, minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>

      {/* ══════════════════════════════════════════════════════
          01 · HERO  —  CUUB-inspired minimal editorial
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ height: '100vh', minHeight: '600px', background: '#020408' }}
      >
        {/* ── Full-bleed background ── */}
        <div ref={heroBgRef} className="absolute inset-0" style={{ opacity: 0 }}>
          <img
            src="/esac-banner.png"
            alt="ESAC Architectural Masterplan"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.72) saturate(0.85)' }}
          />
          {/* Subtle bottom vignette only — keep the image open */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(2,4,8,0.88) 0%, rgba(2,4,8,0.3) 30%, transparent 65%),' +
                'linear-gradient(to bottom, rgba(2,4,8,0.4) 0%, transparent 20%),' +
                'linear-gradient(to right, rgba(2,4,8,0.55) 0%, transparent 35%)',
            }}
          />
        </div>

        {/* ── Bottom bar: brand-mark LEFT · headline RIGHT (CUUB layout) ── */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20"
          style={{ padding: 'clamp(1.5rem,4vw,3.5rem) clamp(1.2rem,5vw,4rem)' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8">

            {/* LEFT — ESAC brand-mark (Highkind font, bold) */}
            <div className="hero-brand" style={{ opacity: 0 }}>
              <div
                style={{
                  fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif",
                  fontSize: 'clamp(3.8rem,10vw,11rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.85,
                  color: '#ffffff',
                  userSelect: 'none',
                }}
              >
                ESAC
              </div>
              <div
                style={{
                  fontFamily: "'SUSE', monospace",
                  fontSize: 'clamp(0.5rem,1vw,0.7rem)',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: '0.6rem',
                }}
              >
                Engineering Services &amp; Architectural Consultants
              </div>
            </div>

            {/* RIGHT — Dynamic headline (baseline-ascend) + CTA */}
            <div className="text-left sm:text-right max-w-full sm:max-w-[clamp(260px,40vw,520px)] flex-shrink-0">

              {/* Dynamic cycling headline */}
              <div style={{ marginBottom: 'clamp(1rem,2.5vw,2rem)', overflow: 'hidden' }}>
                {HEADLINES[hlIdx].map((word, i) => {
                  const delay = `${i * 0.08}s`;

                  // Determine CSS inline styles based on entrance vs cycling status
                  let opacity = 1;
                  let transform = 'translateY(0)';
                  let transition = `opacity 0.45s ease ${delay}, transform 0.45s cubic-bezier(0.16,1,0.3,1) ${delay}`;

                  if (!heroReady) {
                    // GSAP handles initial entrance animation via .hero-hl-word-init
                    opacity = 0;
                    transform = 'translateY(50px)';
                    transition = 'none';
                  } else if (hlStatus === 'exit') {
                    // Slide up & fade out
                    opacity = 0;
                    transform = 'translateY(-32px)';
                  } else if (hlStatus === 'enter') {
                    // Position below baseline instantly
                    opacity = 0;
                    transform = 'translateY(36px)';
                    transition = 'none';
                  } else if (hlStatus === 'visible') {
                    // Slide up to baseline & fade in
                    opacity = 1;
                    transform = 'translateY(0)';
                  }

                  return (
                    <div
                      key={`hl-${hlIdx}-${i}`}
                      className="hero-hl-word-init"
                      style={{
                        fontFamily: "'SUSE', monospace",
                        fontSize: 'clamp(1.8rem,3.8vw,4.2rem)',
                        fontWeight: i === 2 ? 300 : 200,
                        letterSpacing: '-0.03em',
                        lineHeight: 0.95,
                        color: i === 2 ? '#4ba3fb' : TX,
                        display: 'block',
                        opacity,
                        transform,
                        transition,
                      }}
                    >
                      {word}
                    </div>
                  );
                })}
              </div>

              {/* Minimal CTA — underline text link */}
              <button
                className="hero-cta group"
                onClick={() => setCurrentPage('dha-pakistan')}
                style={{
                  opacity: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(75,163,251,0.4)',
                }}
              >
                <span
                  style={{
                    fontFamily: "'SUSE', monospace",
                    fontSize: '0.63rem',
                    fontWeight: 700,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: '#4ba3fb',
                    transition: 'color 0.3s',
                  }}
                  className="group-hover:text-white"
                >
                  INITIATE DOSSIER
                </span>
                <ArrowUpRight
                  size={13}
                  color="#4ba3fb"
                  style={{ transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)', flexShrink: 0 }}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </div>

          {/* Thin horizontal divider line */}
          <div
            className="hero-divider"
            style={{
              opacity: 0,
              position: 'absolute',
              top: 0,
              left: 'clamp(1.5rem,5vw,4rem)',
              right: 'clamp(1.5rem,5vw,4rem)',
              height: '1px',
              background: 'rgba(255,255,255,0.12)',
            }}
          />
        </div>

        {/* ── Scroll nudge ── */}
        <div
          className="hero-scroll-nudge absolute z-20 hidden sm:flex"
          style={{
            opacity: 0,
            left: '50%',
            bottom: '2.2rem',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            pointerEvents: 'none',
          }}
        >
          <div style={{ width: 1, height: 44, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.28))' }} />
          <ArrowDown size={9} color="rgba(255,255,255,0.28)" />
        </div>

      </section>

      {/* ══════════════════════════════════════════════════════
          02 · ABOUT US SECTION (Mission & Vision)
      ══════════════════════════════════════════════════════ */}
      <AboutUsSection />

      {/* ══════════════════════════════════════════════════════
          03 · CLIENT MARQUEE
      ══════════════════════════════════════════════════════ */}
      <section className="py-10 border-b overflow-hidden relative" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#050810' }}>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 mb-4 text-center font-mono">
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
            TRUSTED BY LEADING DEVELOPERS &amp; GOVERNMENT AGENCIES
          </span>
        </div>
        <div className="overflow-hidden">
          <div className="marquee-track flex items-center">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => (
              <MarqueeCard
                key={i}
                client={c}
                setCursor={setCursor}
                resetCursor={resetCursor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          04 · PROJECT ATLAS — sticky per-scroll reveal
      ══════════════════════════════════════════════════════ */}
      <div style={{ background: BG }}>
        <ProjectAtlas />
      </div>

      {/* ══════════════════════════════════════════════════════
          05 · INSTITUTIONAL STATS & METRICS (Animated Count-Up Numbers)
      ══════════════════════════════════════════════════════ */}
      <EditorialStatsSection />

      {/* ══════════════════════════════════════════════════════
          06 · SERVICES SECTION — 7 Cards (Including Inverted Style Card)
      ══════════════════════════════════════════════════════ */}
      <ServicesSection setCurrentPage={setCurrentPage} />

      {/* ══════════════════════════════════════════════════════
          07 · CATALOGUE GALLERY SECTION & VIEW MORE
      ══════════════════════════════════════════════════════ */}
      <CatalogueSection setCurrentPage={setCurrentPage} />

      {/* ══════════════════════════════════════════════════════
          08 · CINEMATIC SCROLL EXPERIENCE
      ══════════════════════════════════════════════════════ */}
      <CinematicSection setCurrentPage={setCurrentPage} />

      {/* ══════════════════════════════════════════════════════
          09 · OUR TEAM SECTION (Executive Leadership)
      ══════════════════════════════════════════════════════ */}
      <OurTeamSection />

      {/* ══════════════════════════════════════════════════════
          10 · CONTACT CTA SECTION (Replaces old form)
      ══════════════════════════════════════════════════════ */}
      <ContactCtaSection setCurrentPage={setCurrentPage} />

      {/* ══════════════════════════════════════════════════════
          11 · FREQUENTLY ASKED QUESTIONS (FAQ) SECTION
      ══════════════════════════════════════════════════════ */}
      <FAQSection />

    </div>
  );
};
