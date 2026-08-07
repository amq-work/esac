import React from 'react';
import { useNav } from '../context/NavContext';
import { ArrowRight, Building2, Home, Layers, MapPin, Compass } from 'lucide-react';

export const CataloguePage = () => {
  const { setCurrentPage } = useNav();

  const sectors = [
    {
      id: 'residential',
      title: 'Residential Projects',
      desc: 'Thoughtfully designed residential developments focused on comfort, functionality, and modern living.',
      icon: Home,
      img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
      badge: 'Residential Sector'
    },
    {
      id: 'commercial',
      title: 'Commercial Projects',
      desc: 'Architectural and engineering solutions for offices, commercial buildings, and mixed-use developments designed to support business growth.',
      icon: Building2,
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      badge: 'Commercial & Corporate'
    },
    {
      id: 'interior',
      title: 'Interior Design Projects',
      desc: 'Interior spaces designed to balance aesthetics, functionality, and the client\'s unique vision.',
      icon: Layers,
      img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
      badge: 'Interior Environments'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure Projects',
      desc: 'Engineering and planning solutions that contribute to sustainable infrastructure and urban development.',
      icon: MapPin,
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
      badge: 'Civil & Public Infrastructure'
    },
    {
      id: 'urban',
      title: 'Urban Design & Planning',
      desc: 'Projects focused on organized community planning, efficient land use, and future-ready urban environments.',
      icon: Compass,
      img: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800&auto=format&fit=crop',
      badge: 'Masterplanning'
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
            CATALOGUE
          </h1>
          <p
            className="text-base md:text-xl text-white/70 font-light max-w-3xl leading-relaxed mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Explore Our Portfolio
          </p>
          <p
            className="text-xs md:text-sm text-white/50 font-light max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Our portfolio reflects ESAC Consultants' multidisciplinary approach to architecture, engineering, and planning. Each project demonstrates our commitment to functional design, technical excellence, and practical solutions across a variety of development sectors.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sectors.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.id}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950 flex flex-col justify-between transition-all duration-500 hover:border-sky-500/50"
                style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={sec.img}
                    alt={sec.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono tracking-widest px-3 py-1 rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md uppercase">
                      {sec.badge}
                    </span>
                  </div>
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
                      {sec.title}
                    </h3>
                    <p
                      className="text-xs text-white/60 leading-relaxed font-light"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {sec.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40 group-hover:text-white transition-colors">
                    <span className="font-mono text-[10px] uppercase tracking-wider">Explore Dossier</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 text-[#4ba3fb] transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Banner */}
        <div className="p-10 md:p-14 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
          <div className="max-w-3xl">
            <span className="text-[10px] font-mono tracking-widest text-[#4ba3fb] uppercase font-bold block mb-3">
              DESIGN PHILOSOPHY
            </span>
            <h2
              className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase"
              style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
            >
              Every Project Begins with Understanding
            </h2>
            <p
              className="text-xs md:text-sm text-white/60 leading-relaxed font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Every project is approached with careful planning, collaboration, and technical expertise. Our portfolio reflects our commitment to delivering practical, high-quality solutions tailored to each client's requirements.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
