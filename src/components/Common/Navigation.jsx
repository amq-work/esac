import React, { useState, useEffect, useRef } from 'react';
import { useNav } from '../../context/NavContext';
import { MagneticButton } from './MagneticButton';
import { gsap } from 'gsap';
import { ArrowUpRight, Menu, X, Globe, Phone } from 'lucide-react';
import { ConsultationButton } from './ConsultationButton';

const M   = 'SUSE, monospace';
const A   = '#0466c8';
const AL  = '#4ba3fb';
const BG  = '#001233';
const TX  = '#e5e7ea';
const TB  = 'rgba(4,102,200,0.18)';
const TM  = '#7d8597';

export const Navigation = () => {
  const { currentPage, setCurrentPage, isNavOpen, setIsNavOpen } = useNav();
  const [scrolled, setScrolled] = useState(false);
  const [times, setTimes] = useState({ pkt: '', london: '' });
  const overlayRef = useRef(null);
  const linksRef   = useRef([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    const tick = () => {
      const now = new Date();
      const fmt = tz => now.toLocaleTimeString('en-US', { timeZone: tz, hour12: false, hour: '2-digit', minute: '2-digit' });
      setTimes({ pkt: fmt('Asia/Karachi'), london: fmt('Europe/London') });
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => { window.removeEventListener('scroll', onScroll); clearInterval(iv); };
  }, []);

  useEffect(() => {
    if (!overlayRef.current) return;
    const links = linksRef.current.filter(Boolean);
    if (isNavOpen) {
      gsap.timeline()
        .to(overlayRef.current, { clipPath: 'circle(150% at 96% 4%)', duration: 0.85, ease: 'power4.inOut' })
        .fromTo(links, { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.04, duration: 0.55, ease: 'power3.out' }, '-=0.45');
    } else {
      gsap.to(overlayRef.current, { clipPath: 'circle(0% at 96% 4%)', duration: 0.65, ease: 'power4.inOut' });
    }
  }, [isNavOpen]);

  const navItems = [
    { id: 'home',       label: 'Home'        },
    { id: 'about',      label: 'About'       },
    { id: 'services',   label: 'Services'    },
    { id: 'catalogue',  label: 'Catalogue'   },
    { id: 'expertise',  label: 'Expertise'   },
    { id: 'industries', label: 'Industries'  },
    { id: 'insights',   label: 'Insights'    },
    { id: 'careers',    label: 'Careers'     },
    { id: 'leadership', label: 'Leadership'  },
    { id: 'contact',    label: 'Contact'     },
  ];

  return (
    <>
      <header
        className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 rounded-full border"
        style={{
          width: scrolled ? '220px' : '94%',
          maxWidth: scrolled ? '220px' : '1380px',
          padding: scrolled ? '7px 12px' : 'clamp(8px, 2vw, 14px) clamp(14px, 3vw, 28px)',
          background: scrolled
            ? 'rgba(0, 12, 40, 0.92)'
            : 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(40px) saturate(200%)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%)',
          borderColor: scrolled
            ? 'rgba(75, 163, 251, 0.4)'
            : 'rgba(255, 255, 255, 0.08)',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15), 0 0 20px rgba(75,163,251,0.2)'
            : 'none',
          transition: 'all 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Collapsed pill inner layout: always full-width flex with justify-between */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            gap: scrolled ? '8px' : '16px',
          }}
        >
          {/* Logo — always on the LEFT */}
          <button
            onClick={() => { setCurrentPage('home'); setIsNavOpen(false); }}
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
          >
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '32px', overflow: 'hidden' }}>
              <img
                src="/esac-logo.png"
                alt="ESAC Logo"
                style={{
                  height: '32px', width: 'auto', objectFit: 'contain',
                  filter: 'drop-shadow(0 0 8px rgba(75,163,251,0.3))',
                  opacity: scrolled ? 0 : 1,
                  transform: scrolled ? 'translateX(-12px)' : 'translateX(0)',
                  maxWidth: scrolled ? '0px' : '160px',
                  transition: 'all 0.5s ease',
                }}
              />
              <img
                src="/esac-favicon.png"
                alt="ESAC"
                style={{
                  height: '28px', width: scrolled ? '28px' : '0px', borderRadius: '50%', objectFit: 'contain',
                  filter: 'drop-shadow(0 0 8px rgba(75,163,251,0.5))',
                  opacity: scrolled ? 1 : 0,
                  transform: scrolled ? 'scale(1)' : 'scale(0.5)',
                  transition: 'all 0.5s ease',
                  flexShrink: 0,
                }}
              />
            </div>
          </button>

          {/* Desktop nav items: main 5 pages */}
          <div
            style={{
              display: scrolled ? 'none' : 'flex',
              alignItems: 'center',
              overflow: 'hidden',
            }}
            className="hidden xl:flex"
          >
            <nav className="flex items-center gap-7 px-6 whitespace-nowrap">
              {[
                { id: 'home',      label: 'Home'      },
                { id: 'about',     label: 'About'     },
                { id: 'services',  label: 'Services'  },
                { id: 'catalogue', label: 'Catalogue' },
                { id: 'contact',   label: 'Contact'   },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className="relative group text-xs py-1 cursor-pointer"
                  style={{ fontFamily: M, fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: currentPage === item.id ? AL : 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }}
                >
                  {item.label}
                  <div style={{ position: 'absolute', bottom: 0, left: '10%', height: 1.5, background: AL, width: currentPage === item.id ? '80%' : '0%', transition: 'width 0.3s' }} />
                </button>
              ))}
            </nav>
          </div>

          {/* Right panel — always on the RIGHT */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            {/* Consultation Button (only on desktop/tablet sm+ when not scrolled) */}
            <div
              style={{
                display: scrolled ? 'none' : undefined,
                alignItems: 'center',
              }}
              className="hidden sm:flex"
            >
              <ConsultationButton
                onClick={() => setCurrentPage('contact')}
                text="Get Consultation"
                compact={true}
              />
            </div>

            {/* Phone icon (only visible when scrolled/collapsed on sm+ screens) */}
            {scrolled && (
              <button
                onClick={() => setCurrentPage('contact')}
                className="hidden sm:flex"
                style={{
                  width: '30px', height: '30px', borderRadius: '50%',
                  border: '1px solid rgba(75,163,251,0.4)',
                  background: 'rgba(4,102,200,0.18)',
                  color: AL,
                  alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', flexShrink: 0,
                }}
                title="Contact ESAC"
              >
                <Phone size={13} />
              </button>
            )}

            {/* Hamburger — always visible and cleanly aligned with logo on mobile */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              style={{
                width: '34px', height: '34px', borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.22)',
                background: 'linear-gradient(135deg, rgba(4,102,200,0.35) 0%, rgba(4,102,200,0.6) 100%)',
                boxShadow: '0 0 14px rgba(4,102,200,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
                color: '#ffffff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', flexShrink: 0,
                transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 0 22px rgba(4,102,200,0.7), inset 0 1px 0 rgba(255,255,255,0.2)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 0 14px rgba(4,102,200,0.4), inset 0 1px 0 rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="Toggle navigation menu"
            >
              {isNavOpen ? <X size={15} color="#ffffff" /> : <Menu size={15} color="#ffffff" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 flex flex-col overflow-auto"
        style={{ background: '#000d22', clipPath: 'circle(0% at 96% 4%)', fontFamily: M }}
      >
        <div className="absolute inset-0 grid-fine pointer-events-none" style={{ opacity: 0.5 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 20%, rgba(4,102,200,0.06) 0%, transparent 70%)' }} />
        <div className="h-24 flex-shrink-0" />
        <div className="flex-1 max-w-screen-2xl mx-auto w-full px-5 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-6 sm:py-8">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-12">
              {navItems.map((item, idx) => (
                <div key={item.id} className="overflow-hidden">
                  <button
                    ref={el => linksRef.current[idx] = el}
                    onClick={() => { setCurrentPage(item.id); setIsNavOpen(false); }}
                    className="group flex items-baseline gap-4 py-2 sm:py-2.5 w-full text-left cursor-pointer"
                    style={{ opacity: 0 }}
                  >
                    <span style={{ fontSize: '0.52rem', letterSpacing: '0.3em', color: `rgba(4,102,200,0.45)`, minWidth: 28 }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span style={{ fontSize: 'clamp(1.1rem,2.2vw,1.9rem)', fontWeight: 300, letterSpacing: '-0.01em', color: currentPage === item.id ? AL : 'rgba(229,230,234,0.75)', transition: 'color 0.2s' }}>
                      {item.label}
                    </span>
                  </button>
                </div>
              ))}
            </div>

            {/* Consultation CTA inside mobile menu */}
            <div className="mt-8 pt-6 border-t border-white/10 sm:hidden flex flex-col gap-3">
              <ConsultationButton
                onClick={() => { setCurrentPage('contact'); setIsNavOpen(false); }}
                text="Get Consultation"
                compact={false}
              />
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center border-t lg:border-t-0 lg:border-l pt-6 lg:pt-0 lg:pl-12 space-y-6 sm:space-y-8" style={{ borderColor: TB }}>
            <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              <div style={{ color: `rgba(4,102,200,0.5)`, marginBottom: 8, fontWeight: 'bold' }}>ESAC CONSULTANTS</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.9 }}>Ground Floor D-97, Commercial Broadway</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.9 }}>DHA Phase 8, Lahore 54000, Pakistan</div>
              <div style={{ color: AL, marginTop: 8 }}>info@esaconsultant.com</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>+92 42 35740675 | +92 310 3722266</div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto w-full px-5 sm:px-8 pb-6 sm:pb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-t pt-4 sm:pt-6" style={{ borderColor: TB }}>
          <span style={{ fontSize: '0.52rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>© 2026 ESAC ARCHITECTS & ENGINEERS CONSULTANTS</span>
          <span style={{ fontSize: '0.52rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>ISO 9001:2015 CERTIFIED</span>
        </div>
      </div>
    </>
  );
};
