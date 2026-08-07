import React from 'react';
import { useNav } from '../context/NavContext';
import { Target, Globe, ShieldCheck, Award, Users, ArrowRight } from 'lucide-react';

export const AboutPage = () => {
  const { setCurrentPage } = useNav();

  return (
    <div className="bg-[#020408] text-white min-h-screen pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <h1
            className="text-4xl md:text-7xl font-bold text-white tracking-tight uppercase mb-6"
            style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
          >
            ABOUT OUR PRACTICE
          </h1>
          <p
            className="text-base md:text-xl text-white/70 font-light max-w-3xl leading-relaxed mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Pioneering Sovereign Masterplanning & High-Rise Engineering
          </p>
          <p
            className="text-xs md:text-sm text-white/50 font-light max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Established in 1992, ESAC Architects & Engineers Group has spent three decades designing iconic skylines, subterranean transit grids, and smart city developments. We combine technical excellence, collaborative thinking, and responsible design.
          </p>
        </div>

        {/* 2-Column Overview & Mission/Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          <div className="lg:col-span-7 space-y-6">
            <h2
              className="text-3xl font-bold text-white uppercase leading-tight"
              style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
            >
              Integrated Consultancy Built on 3 Decades of Technical Excellence
            </h2>
            <p
              className="text-xs md:text-sm text-white/70 leading-relaxed font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              At ESAC Consultants, our multidisciplinary team unifies architectural design, interior environments, structural engineering, infrastructure development, urban design, and town planning under one consultancy for coordinated project delivery.
            </p>
            <p
              className="text-xs md:text-sm text-white/50 leading-relaxed font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              We believe successful projects are achieved through close collaboration between our team, clients, and project stakeholders. Every design and engineering solution is developed with careful planning, attention to detail, and professional standards.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            
            {/* Mission Card */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl border border-sky-500/30 bg-sky-500/10 flex-shrink-0 flex items-center justify-center text-[#4ba3fb]">
                  <Target size={20} />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#4ba3fb] uppercase mb-1 block">STATEMENT // 01</span>
                  <h3
                    className="text-xl font-bold text-white mb-2 uppercase"
                    style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
                  >
                    Our Mission
                  </h3>
                  <p
                    className="text-xs text-white/60 leading-relaxed font-light"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Driving zero-carbon urbanism, Zone 4 seismic resilience, and multi-billion-dollar sovereign infrastructure. We translate complex civic mandates into timeless, functional, and anti-seismic architectural monuments.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl border border-sky-500/30 bg-sky-500/10 flex-shrink-0 flex items-center justify-center text-[#4ba3fb]">
                  <Globe size={20} />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#4ba3fb] uppercase mb-1 block">STATEMENT // 02</span>
                  <h3
                    className="text-xl font-bold text-white mb-2 uppercase"
                    style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
                  >
                    Our Vision
                  </h3>
                  <p
                    className="text-xs text-white/60 leading-relaxed font-light"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    To define the global skyline standard for the next century by orchestrating high-density smart cities, subterranean transit spines, and hyper-sustainable vertical developments across 5 continent studios.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Practice Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 p-8 rounded-3xl border border-white/10 bg-slate-950">
          <div>
            <span className="text-3xl md:text-5xl font-bold text-[#4ba3fb] block font-mono">20,000+</span>
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block mt-2">Acres Masterplanned</span>
          </div>
          <div>
            <span className="text-3xl md:text-5xl font-bold text-[#4ba3fb] block font-mono">08</span>
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block mt-2">Global Markets</span>
          </div>
          <div>
            <span className="text-3xl md:text-5xl font-bold text-[#4ba3fb] block font-mono">465</span>
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block mt-2">Licensed Experts</span>
          </div>
          <div>
            <span className="text-3xl md:text-5xl font-bold text-[#4ba3fb] block font-mono">41</span>
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block mt-2">Global Design Honors</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-3xl border border-sky-500/20 bg-slate-950">
          <h3
            className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase"
            style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
          >
            Explore Our Comprehensive Leadership & Services
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={() => setCurrentPage('services')}
              className="px-8 py-4 rounded-full border border-sky-500/40 bg-sky-500/10 hover:bg-[#4ba3fb] hover:text-slate-950 text-white font-bold tracking-widest uppercase text-xs transition-all cursor-pointer"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>VIEW OUR 12 SERVICES</span>
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage('leadership')}
              className="px-8 py-4 rounded-full border border-white/20 hover:border-[#4ba3fb] text-white font-bold tracking-widest uppercase text-xs transition-all cursor-pointer"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>VIEW EXECUTIVE BOARD</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
