import React from 'react';
import { useNav } from '../context/NavContext';
import { Users, Target, ShieldCheck, Lightbulb, HeartHandshake, Leaf, ArrowRight } from 'lucide-react';

export const LeadershipPage = () => {
  const { setCurrentPage } = useNav();

  const philosophy = [
    {
      id: 'collab',
      title: 'Collaborative Decision-Making',
      desc: 'We believe successful projects are achieved through close collaboration between our team, clients, and project stakeholders.',
      icon: HeartHandshake
    },
    {
      id: 'tech',
      title: 'Technical Excellence',
      desc: 'Every design and engineering solution is developed with careful planning, attention to detail, and professional standards.',
      icon: ShieldCheck
    },
    {
      id: 'innov',
      title: 'Innovation',
      desc: 'We embrace practical and forward-thinking design and engineering approaches that respond to evolving project requirements.',
      icon: Lightbulb
    },
    {
      id: 'client',
      title: 'Client Commitment',
      desc: 'Understanding each client\'s vision allows us to deliver solutions tailored to their goals and project needs.',
      icon: Target
    },
    {
      id: 'sustainable',
      title: 'Sustainable Thinking',
      desc: 'Our planning and design approach focuses on creating efficient, practical, and future-ready developments.',
      icon: Leaf
    }
  ];

  const leaders = [
    {
      name: 'Aurelius Vance',
      role: 'Global Managing Director & Principal Architect',
      location: 'London / Islamabad',
      bio: 'Leading sovereign masterplanning, Zone 4 seismic engineering, and international studio coordination across 3 decades of practice.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Elena Rostova',
      role: 'Partner & Chief Interior Architect',
      location: 'Milan / Lahore',
      bio: 'Pioneering structural spatial balance, interior luxury aesthetics, and high-density corporate environment design.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Brigadier (Ret.) Tariq Mansoor',
      role: 'Partner & Senior Director of South Asian Infrastructure',
      location: 'Karachi / Rawalpindi',
      bio: 'Directing sovereign infrastructure projects, high-density residential cantonment schemes, and public transit engineering.',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Dr. Henrik Lindqvist',
      role: 'Partner & Chief Structural & Environmental Engineer',
      location: 'Stockholm / Dubai',
      bio: 'Specializing in anti-seismic dampening, zero-carbon thermal insulation models, and tall building structural dynamics.',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop'
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
            LEADERSHIP
          </h1>
          <p
            className="text-base md:text-xl text-white/70 font-light max-w-3xl leading-relaxed mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Leading with Vision, Guided by Expertise
          </p>
          <p
            className="text-xs md:text-sm text-white/50 font-light max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            At ESAC Consultants, our leadership is built on technical excellence, collaborative thinking, and responsible design. By bringing together professionals from architecture, engineering, planning, and design, the firm approaches every project with clarity, precision, and a commitment to quality.
          </p>
        </div>

        {/* Philosophy Grid */}
        <div className="mb-20">
          <span className="text-[10px] font-mono tracking-widest text-[#4ba3fb] uppercase font-bold block mb-3">
            CORE PRINCIPLES
          </span>
          <h2
            className="text-2xl md:text-4xl font-bold text-white mb-8 uppercase"
            style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
          >
            Our Leadership Philosophy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophy.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl flex flex-col justify-between hover:border-sky-500/40 transition-all"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl border border-sky-500/30 bg-sky-500/10 flex items-center justify-center text-[#4ba3fb] mb-6">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-[10px] text-[#4ba3fb] font-bold tracking-widest block mb-2">
                      PHILOSOPHY // 0{idx + 1}
                    </span>
                    <h3
                      className="text-xl font-bold text-white mb-3 uppercase"
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
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Grid */}
        <div className="mb-20">
          <span className="text-[10px] font-mono tracking-widest text-[#4ba3fb] uppercase font-bold block mb-3">
            EXECUTIVE BOARD
          </span>
          <h2
            className="text-2xl md:text-4xl font-bold text-white mb-8 uppercase"
            style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
          >
            Leadership Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950 flex flex-col justify-between transition-all duration-500 hover:border-sky-500/50"
                style={{ boxShadow: '0 15px 35px rgba(0,0,0,0.6)' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#4ba3fb] uppercase font-bold block mb-1">
                      {leader.location}
                    </span>
                    <h3
                      className="text-xl font-bold text-white mb-1 uppercase"
                      style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
                    >
                      {leader.name}
                    </h3>
                    <div className="text-[10px] font-mono text-white/50 uppercase mb-3 font-semibold">
                      {leader.role}
                    </div>
                    <p
                      className="text-xs text-white/60 leading-relaxed font-light"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 md:p-14 rounded-3xl border border-sky-500/20 bg-slate-950 text-center">
          <h2
            className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase"
            style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
          >
            Direct Leadership Engagement
          </h2>
          <p
            className="text-xs md:text-sm text-white/60 max-w-xl mx-auto mb-8 font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            For major sovereign developments, public infrastructure, and strategic partnerships, connect with ESAC leadership.
          </p>
          <button
            type="button"
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-sky-500/40 bg-sky-500/10 hover:bg-[#4ba3fb] hover:text-slate-950 text-white font-bold tracking-widest uppercase text-xs transition-all cursor-pointer"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>SCHEDULE LEADERSHIP CONSULTATION</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};
