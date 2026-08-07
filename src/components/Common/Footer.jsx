import React from 'react';
import { useNav } from '../../context/NavContext';
import { ArrowUp } from 'lucide-react';

const M  = 'SUSE, monospace';
const AL = '#4ba3fb';
const BG = '#020612';
const TX = '#e5e7ea';
const TB = 'rgba(255,255,255,0.08)';

export const Footer = () => {
  const { setCurrentPage } = useNav();

  return (
    <footer className="relative border-t overflow-hidden py-16" style={{ background: BG, borderColor: TB }}>
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(4, 102, 200, 0.1) 0%, transparent 60%)'
      }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-15" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-screen-2xl mx-auto px-6 md:px-12 z-10">
        
        {/* ─── COMPLETE INTEGRATED FOOTER CONTENT ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b" style={{ borderColor: TB }}>
          
          {/* Brand column */}
          <div className="lg:col-span-5 space-y-6">
            <img 
              src="/esac-logo.png" 
              alt="ESAC Logo" 
              className="h-10 w-auto object-contain"
            />
            <p className="text-xs font-light text-white/40 leading-relaxed max-w-sm" style={{ fontFamily: M }}>
              Pre-eminent architectural engineering and urban masterplanning group. Lead design consortia for DHA Pakistan megaprojects.
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 font-mono text-xs">
            <div className="space-y-3">
              <div className="text-[10px] text-[#4ba3fb] uppercase tracking-widest border-b border-white/10 pb-2">
                PORTFOLIO SECTORS
              </div>
              {['DHA Pakistan', 'Civic Masterplans', 'High-Rise Commercial', 'Structural Systems'].map((item, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentPage('projects')}
                  className="block text-white/40 hover:text-white transition-colors uppercase tracking-wider text-[11px]"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              <div className="text-[10px] text-[#4ba3fb] uppercase tracking-widest border-b border-white/10 pb-2">
                TOOLS &amp; PRACTICE
              </div>
              {['CAD Blueprint', 'BIM 5D Services', 'Leadership', 'Submit RFP'].map((item, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentPage('rfp')}
                  className="block text-white/40 hover:text-white transition-colors uppercase tracking-wider text-[11px]"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="space-y-3 col-span-2 md:col-span-1">
              <div className="text-[10px] text-[#4ba3fb] uppercase tracking-widest border-b border-white/10 pb-2">
                DHA REGIONAL HQ
              </div>
              <p className="text-white/40 text-[11px] leading-relaxed">
                Sector F-7/2 &amp; DHA Phase 6<br />
                Islamabad / Lahore, Pakistan
              </p>
              <span className="block text-[#4ba3fb] text-[11px] pt-1">+92 (51) 840-9000</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-white/40">
          <div>
            © 2026 ESAC ARCHITECTS &amp; ENGINEERS GROUP. ALL RIGHTS RESERVED.
            <span className="hidden sm:inline mx-2 text-white/20">|</span>
            <span className="block sm:inline mt-1 sm:mt-0 text-white/50">
              Designed and Developed by{' '}
              <a 
                href="https://www.digitalnexes.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#4ba3fb] hover:text-white hover:underline transition-colors font-medium inline-flex items-center gap-1"
              >
                Digital Nexes
              </a>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => setCurrentPage('terms')} className="hover:text-white transition-colors">Terms &amp; Conditions</button>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2.5 rounded-full border border-white/10 hover:border-[#4ba3fb] text-white/50 hover:text-white transition-all"
              title="Back to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
