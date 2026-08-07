import React from 'react';
import { useNav } from '../context/NavContext';
import { Building2, Layers, MapPin, Cpu, Compass, Layers3, ArrowRight } from 'lucide-react';

export const ExpertisePage = () => {
  const { setCurrentPage } = useNav();

  const expertisePillars = [
    {
      id: 'arch',
      title: 'Architectural Design',
      desc: 'Designing functional and modern residential and commercial spaces tailored to project requirements.',
      icon: Building2
    },
    {
      id: 'interior',
      title: 'Interior Design',
      desc: 'Creating practical and aesthetically balanced interior environments.',
      icon: Layers
    },
    {
      id: 'infra',
      title: 'Infrastructure Design',
      desc: 'Planning and engineering infrastructure solutions with an emphasis on efficient development.',
      icon: MapPin
    },
    {
      id: 'eng',
      title: 'Engineering Services',
      desc: 'Providing technical engineering expertise to support reliable project planning and design.',
      icon: Cpu
    },
    {
      id: 'urban',
      title: 'Urban Design & Town Planning',
      desc: 'Developing organized, sustainable urban and town planning solutions.',
      icon: Compass
    },
    {
      id: 'integrated',
      title: 'Integrated Consultancy',
      desc: 'Bringing architecture, engineering, infrastructure, and planning together under one consultancy for coordinated project delivery.',
      icon: Layers3
    }
  ];

  return (
    <div className="bg-[#020408] text-white min-h-screen pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <h1
            className="text-4xl md:text-7xl font-bold text-white tracking-tight uppercase mb-6"
            style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
          >
            EXPERTISE
          </h1>
          <p
            className="text-base md:text-xl text-white/70 font-light max-w-3xl leading-relaxed mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Specialized Knowledge. Integrated Solutions.
          </p>
          <p
            className="text-xs md:text-sm text-white/50 font-light max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            At ESAC Consultants, our expertise is reflected in the multidisciplinary services consistently presented through the firm's public profile. We combine architecture, engineering, planning, and design to deliver coordinated solutions for residential, commercial, and infrastructure projects.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {expertisePillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-sky-500/50 transition-all duration-500 flex flex-col justify-between"
                style={{ boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4ba3fb]/40 to-transparent group-hover:via-[#4ba3fb] transition-all" />

                <div>
                  <span className="font-mono text-[10px] text-[#4ba3fb] font-bold tracking-widest block mb-4">
                    EXPERTISE // 0{idx + 1}
                  </span>

                  <div className="w-12 h-12 rounded-xl border border-sky-500/30 bg-sky-500/10 flex items-center justify-center text-[#4ba3fb] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} />
                  </div>

                  <h3
                    className="text-2xl font-bold text-white mb-3 uppercase leading-tight group-hover:text-sky-200 transition-colors"
                    style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-xs text-white/60 leading-relaxed font-light"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40 group-hover:text-white transition-colors">
                  <span className="font-mono text-[10px] uppercase tracking-wider">Learn More</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 text-[#4ba3fb] transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-10 md:p-14 rounded-3xl border border-sky-500/20 bg-slate-950 text-center">
          <h2
            className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase"
            style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
          >
            Coordinated Project Delivery Under One Roof
          </h2>
          <p
            className="text-xs md:text-sm text-white/60 max-w-xl mx-auto mb-8 font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            We unify architecture, structural design, civil infrastructure, and town planning to eliminate inter-disciplinary conflicts.
          </p>
          <button
            type="button"
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-transparent bg-[#4ba3fb] hover:bg-sky-400 text-slate-950 font-bold tracking-widest uppercase text-xs transition-all cursor-pointer"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>DISCUSS CONSULTANCY SCOPE</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};
