import React from 'react';
import { useNav } from '../context/NavContext';
import { Building2, Compass, Layers, ShieldCheck, Cpu, DraftingCompass, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const ServicesPage = () => {
  const { setCurrentPage } = useNav();

  const services = [
    {
      num: '01',
      title: 'Architectural Design',
      desc: 'Innovative architectural solutions for residential, commercial, and mixed-use developments.',
      icon: Building2,
      category: 'Core Practice'
    },
    {
      num: '02',
      title: 'Interior Design',
      desc: 'Functional and aesthetically refined interior spaces tailored to client requirements.',
      icon: Layers,
      category: 'Spatial Design'
    },
    {
      num: '03',
      title: 'Structural Design',
      desc: 'Structural engineering solutions integrated with architectural design.',
      icon: Cpu,
      category: 'Engineering'
    },
    {
      num: '04',
      title: 'Infrastructure Design',
      desc: 'Planning and engineering solutions for infrastructure developments.',
      icon: MapPin,
      category: 'Civil Works'
    },
    {
      num: '05',
      title: 'Urban Design',
      desc: 'Designing organized and sustainable urban environments.',
      icon: Compass,
      category: 'Urbanism'
    },
    {
      num: '06',
      title: 'Town Planning',
      desc: 'Planning strategies for communities and future developments.',
      icon: DraftingCompass,
      category: 'Zoning & Masterplan'
    },
    {
      num: '07',
      title: 'Engineering Consultancy',
      desc: 'Professional engineering guidance throughout planning and design.',
      icon: ShieldCheck,
      category: 'Technical Advisory'
    },
    {
      num: '08',
      title: 'Project Management',
      desc: 'Coordinating project activities for efficient delivery.',
      icon: CheckCircle2,
      category: 'Execution'
    },
    {
      num: '09',
      title: 'Construction Supervision',
      desc: 'Monitoring construction to maintain quality and design intent.',
      icon: Building2,
      category: 'Quality Assurance'
    },
    {
      num: '10',
      title: 'Development Consultancy',
      desc: 'Supporting clients with planning and development strategies.',
      icon: Layers,
      category: 'Strategic Planning'
    },
    {
      num: '11',
      title: 'Site Planning',
      desc: 'Optimizing site layouts for efficient developments.',
      icon: MapPin,
      category: 'Land Optimization'
    },
    {
      num: '12',
      title: 'Master Planning',
      desc: 'Preparing long-term development plans for integrated projects.',
      icon: Compass,
      category: 'Sovereign Scale'
    }
  ];

  return (
    <div className="bg-[#020408] text-white min-h-screen pt-28 pb-24 relative overflow-hidden">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-[#020408] to-[#020408]" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <h1
            className="text-4xl md:text-7xl font-bold text-white tracking-tight uppercase mb-6"
            style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
          >
            OUR SERVICES
          </h1>
          <p
            className="text-base md:text-xl text-white/70 font-light max-w-3xl leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Integrated Engineering & Design Solutions
          </p>
          <p
            className="text-xs md:text-sm text-white/50 font-light max-w-2xl mt-4 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            At ESAC Consultants, we provide multidisciplinary architectural and engineering solutions tailored to planning, design, and development projects. The services below are based on ESAC's publicly presented expertise and positioning.
          </p>
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.num}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-sky-500/50 transition-all duration-500 flex flex-col justify-between"
                style={{
                  boxShadow: '0 15px 35px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4ba3fb]/40 to-transparent group-hover:via-[#4ba3fb] transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-[#4ba3fb] font-bold tracking-widest">
                      SERVICE // {srv.num}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-300 uppercase font-semibold">
                      {srv.category}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl border border-sky-500/30 bg-sky-500/10 flex items-center justify-center text-[#4ba3fb] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} />
                  </div>

                  <h3
                    className="text-2xl font-bold text-white mb-3 uppercase leading-tight group-hover:text-sky-200 transition-colors"
                    style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
                  >
                    {srv.title}
                  </h3>

                  <p
                    className="text-xs text-white/60 leading-relaxed font-light"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40 group-hover:text-white transition-colors">
                  <span className="font-mono text-[10px] uppercase tracking-wider">Consultation Ready</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 text-[#4ba3fb] transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center p-12 rounded-3xl border border-sky-500/20 bg-gradient-to-r from-sky-950/20 via-slate-950 to-sky-950/20 relative overflow-hidden">
          <h3
            className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase"
            style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
          >
            Ready to Discuss Your Project Requirements?
          </h3>
          <p
            className="text-xs md:text-sm text-white/60 max-w-xl mx-auto mb-8 font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Connect directly with ESAC Consultants for integrated architectural, structural engineering, and masterplanning solutions.
          </p>
          <button
            type="button"
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-transparent bg-transparent text-white font-bold tracking-widest uppercase text-xs transition-all duration-500 hover:border-[#4ba3fb] hover:text-[#4ba3fb] hover:scale-105 cursor-pointer"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>INQUIRE NOW</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};
