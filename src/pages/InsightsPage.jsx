import React from 'react';
import { useNav } from '../context/NavContext';
import { BookOpen, Cpu, Layers, Newspaper, ArrowRight } from 'lucide-react';

export const InsightsPage = () => {
  const { setCurrentPage } = useNav();

  const insightCategories = [
    {
      id: 'updates',
      title: 'Project Updates',
      desc: 'Follow the latest milestones, construction progress, and completed developments showcased by ESAC.',
      icon: BookOpen,
      badge: 'Milestones & Field Progress',
      img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'concepts',
      title: 'Design Concepts',
      desc: 'Explore architectural visualizations and design ideas that reflect ESAC\'s approach to planning and development.',
      icon: Layers,
      badge: 'Architectural R&D',
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'engineering',
      title: 'Engineering Perspectives',
      desc: 'Read about engineering and planning considerations that support practical, efficient project outcomes.',
      icon: Cpu,
      badge: 'Technical Dossiers',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'news',
      title: 'Company News',
      desc: 'Stay informed about announcements, team activities, and other official updates shared by ESAC.',
      icon: Newspaper,
      badge: 'Official Announcements',
      img: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800&auto=format&fit=crop'
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
            INSIGHTS
          </h1>
          <p
            className="text-base md:text-xl text-white/70 font-light max-w-3xl leading-relaxed mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Sharing Ideas That Shape Better Design & Engineering
          </p>
          <p
            className="text-xs md:text-sm text-white/50 font-light max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Based on ESAC's public communications, the firm regularly shares project progress, architectural concepts, engineering work, and company updates. The Insights section serves as a place to keep clients informed about ongoing work and professional perspectives.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {insightCategories.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950 flex flex-col justify-between transition-all duration-500 hover:border-sky-500/50"
                style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono tracking-widest px-3 py-1 rounded-full border border-sky-500/30 bg-black/60 text-sky-300 backdrop-blur-md uppercase font-bold">
                      {item.badge}
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
                    <span className="font-mono text-[10px] uppercase tracking-wider">Read Publication</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 text-[#4ba3fb] transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter / Follow */}
        <div className="p-10 md:p-14 rounded-3xl border border-sky-500/20 bg-slate-950 text-center">
          <h2
            className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase"
            style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
          >
            Stay Informed on Official ESAC Updates
          </h2>
          <p
            className="text-xs md:text-sm text-white/60 max-w-xl mx-auto mb-8 font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Follow our official communication channels or reach out to our media team for press releases and project inquiries.
          </p>
          <button
            type="button"
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-sky-500/40 bg-sky-500/10 hover:bg-[#4ba3fb] hover:text-slate-950 text-white font-bold tracking-widest uppercase text-xs transition-all cursor-pointer"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>CONNECT WITH ESAC MEDIA</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};
