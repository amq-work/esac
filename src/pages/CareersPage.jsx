import React, { useState } from 'react';
import { useNav } from '../context/NavContext';
import { Briefcase, Building2, Layers, Cpu, MapPin, Compass, CheckCircle2, Upload, Send } from 'lucide-react';

export const CareersPage = () => {
  const { setCurrentPage } = useNav();
  const [submitted, setSubmitted] = useState(false);
  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    discipline: 'Architecture',
    portfolioUrl: '',
    coverNote: ''
  });

  const disciplines = [
    { title: 'Architecture', icon: Building2 },
    { title: 'Interior Design', icon: Layers },
    { title: 'Structural Engineering', icon: Cpu },
    { title: 'Infrastructure Engineering', icon: MapPin },
    { title: 'Urban Design & Town Planning', icon: Compass },
    { title: 'Engineering Consultancy', icon: Briefcase }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (applicant.name && applicant.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#020408] text-white min-h-screen pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <h1
            className="text-4xl md:text-7xl font-bold text-white tracking-tight uppercase mb-6"
            style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
          >
            CAREERS
          </h1>
          <p
            className="text-base md:text-xl text-white/70 font-light max-w-3xl leading-relaxed mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Build Your Future with ESAC Consultants
          </p>
          <p
            className="text-xs md:text-sm text-white/50 font-light max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            At ESAC Consultants, we believe great projects are delivered by talented professionals who are passionate about architecture, engineering, and design. We welcome individuals who share our commitment to quality, innovation, and technical excellence.
          </p>
        </div>

        {/* Who We're Looking For */}
        <div className="mb-20">
          <span className="text-[10px] font-mono tracking-widest text-[#4ba3fb] uppercase font-bold block mb-3">
            DISCIPLINE SPECTRUM
          </span>
          <h2
            className="text-2xl md:text-4xl font-bold text-white mb-8 uppercase"
            style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
          >
            Who We're Looking For
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplines.map((d, idx) => {
              const Icon = d.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl flex items-center gap-4 hover:border-sky-500/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl border border-sky-500/30 bg-sky-500/10 flex items-center justify-center text-[#4ba3fb] flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/40 block uppercase">FIRM DISCIPLINE</span>
                    <h4
                      className="text-sm font-bold text-white uppercase"
                      style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
                    >
                      {d.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Join ESAC & Current Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-slate-950">
            <span className="text-[10px] font-mono tracking-widest text-[#4ba3fb] uppercase font-bold block mb-2">
              THE ESAC ENVIRONMENT
            </span>
            <h3
              className="text-2xl font-bold text-white mb-4 uppercase"
              style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
            >
              Why Join ESAC
            </h3>
            <p
              className="text-xs md:text-sm text-white/60 leading-relaxed font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Work alongside multidisciplinary professionals on meaningful projects while contributing to high-quality design and engineering solutions.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-slate-950">
            <span className="text-[10px] font-mono tracking-widest text-[#4ba3fb] uppercase font-bold block mb-2">
              ANNOUNCEMENTS
            </span>
            <h3
              className="text-2xl font-bold text-white mb-4 uppercase"
              style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
            >
              Current Opportunities
            </h3>
            <p
              className="text-xs md:text-sm text-white/60 leading-relaxed font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Career opportunities are announced through ESAC's official communication channels. Follow our latest updates or contact our talent team for current openings.
            </p>
          </div>

        </div>

        {/* Application Submission Form */}
        <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl relative">
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] font-mono tracking-widest text-[#4ba3fb] uppercase font-bold block mb-2">
              TALENT APPLICATION
            </span>
            <h2
              className="text-2xl md:text-4xl font-bold text-white mb-3 uppercase"
              style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
            >
              Submit Your Application
            </h2>
            <p
              className="text-xs md:text-sm text-white/60 font-light leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Interested candidates may submit their CV and portfolio link below or send directly using ESAC Consultants' official contact details. Shortlisted applicants will be contacted when suitable opportunities become available.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4 border border-sky-500/30 rounded-2xl bg-sky-950/20">
              <div className="w-14 h-14 rounded-full bg-sky-500/20 text-[#4ba3fb] flex items-center justify-center mx-auto">
                <CheckCircle2 size={28} />
              </div>
              <h4 className="text-xl font-bold uppercase" style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}>Application Received</h4>
              <p className="text-xs text-white/60 font-light max-w-sm mx-auto">Thank you for submitting your application to ESAC Consultants. Our talent acquisitions team will review your profile.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={applicant.name}
                    onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs focus:border-[#4ba3fb] outline-none"
                    placeholder="e.g. Architect Sarah Ahmed"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={applicant.email}
                    onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs focus:border-[#4ba3fb] outline-none"
                    placeholder="sarah@domain.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-2">Primary Discipline</label>
                  <select
                    value={applicant.discipline}
                    onChange={(e) => setApplicant({ ...applicant, discipline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs focus:border-[#4ba3fb] outline-none"
                  >
                    <option value="Architecture">Architecture</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Structural Engineering">Structural Engineering</option>
                    <option value="Infrastructure Engineering">Infrastructure Engineering</option>
                    <option value="Urban Design">Urban Design & Town Planning</option>
                    <option value="Engineering Consultancy">Engineering Consultancy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-2">Portfolio / LinkedIn URL</label>
                  <input
                    type="url"
                    value={applicant.portfolioUrl}
                    onChange={(e) => setApplicant({ ...applicant, portfolioUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs focus:border-[#4ba3fb] outline-none"
                    placeholder="https://behance.net/..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-2">Cover Note & Experience Summary</label>
                <textarea
                  rows={4}
                  value={applicant.coverNote}
                  onChange={(e) => setApplicant({ ...applicant, coverNote: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs focus:border-[#4ba3fb] outline-none"
                  placeholder="Briefly describe your background, software proficiencies (Revit, BIM, AutoCAD, ETABS), and key projects..."
                />
              </div>

              <button
                type="submit"
                className="py-4 px-8 rounded-xl border-2 border-transparent bg-[#4ba3fb] hover:bg-sky-400 text-slate-950 font-bold tracking-widest uppercase text-xs transition-all flex items-center gap-2 cursor-pointer"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>SUBMIT CV & DOSSIER</span>
                <Send size={14} />
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
