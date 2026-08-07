import React from 'react';
import { useNav } from '../context/NavContext';
import { Home, Building2, Compass, MapPin, Layers, ArrowRight } from 'lucide-react';

export const IndustriesPage = () => {
  const { setCurrentPage } = useNav();

  const industries = [
    {
      id: 'residential',
      title: 'Residential',
      desc: 'Planning and designing modern homes, villas, apartment developments, and residential communities with a focus on functionality and long-term value.',
      icon: Home,
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'commercial',
      title: 'Commercial',
      desc: 'Architectural and engineering solutions for offices, commercial buildings, mixed-use developments, and business spaces.',
      icon: Building2,
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'urban',
      title: 'Urban Development',
      desc: 'Urban design and town planning services that support organized, sustainable, and future-ready communities.',
      icon: Compass,
      img: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure',
      desc: 'Engineering and design solutions for infrastructure projects, including roads and public development works.',
      icon: MapPin,
      img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'interiors',
      title: 'Interior Spaces',
      desc: 'Interior design for residential and commercial environments, balancing aesthetics with practical usability.',
      icon: Layers,
      img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop'
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
            INDUSTRIES WE SERVE
          </h1>
          <p
            className="text-xs md:text-sm text-white/50 font-light max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            ESAC Consultants delivers multidisciplinary architecture, engineering, and planning services across a range of development sectors. The industries below reflect the types of projects consistently showcased through ESAC's public portfolio and social presence.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950 flex flex-col justify-between transition-all duration-500 hover:border-sky-500/50"
                style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={ind.img}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg border border-sky-500/30 bg-sky-500/10 flex items-center justify-center text-[#4ba3fb] mb-4">
                      <Icon size={20} />
                    </div>
                    <h3
                      className="text-2xl font-bold text-white mb-3 uppercase leading-tight group-hover:text-sky-200 transition-colors"
                      style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
                    >
                      {ind.title}
                    </h3>
                    <p
                      className="text-xs text-white/60 leading-relaxed font-light"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {ind.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40 group-hover:text-white transition-colors">
                    <span className="font-mono text-[10px] uppercase tracking-wider">Sector Overview</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 text-[#4ba3fb] transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Our Approach */}
        <div className="p-10 md:p-14 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
          <div className="max-w-3xl">
            <span className="text-[10px] font-mono tracking-widest text-[#4ba3fb] uppercase font-bold block mb-3">
              CONSULTANCY APPROACH
            </span>
            <h2
              className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase"
              style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
            >
              Our Approach
            </h2>
            <p
              className="text-xs md:text-sm text-white/60 leading-relaxed font-light mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Regardless of project type, ESAC combines architecture, engineering, and planning expertise to deliver coordinated solutions tailored to each client's objectives.
            </p>
            <button
              type="button"
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-sky-500/40 bg-sky-500/10 hover:bg-[#4ba3fb] hover:text-slate-950 text-white font-bold tracking-widest uppercase text-xs transition-all cursor-pointer"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>INITIATE SECTOR INQUIRY</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
