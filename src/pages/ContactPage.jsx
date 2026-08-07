import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Globe, Share2 } from 'lucide-react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: 'Residential',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
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
            CONTACT US
          </h1>
          <p
            className="text-base md:text-xl text-white/70 font-light max-w-3xl leading-relaxed mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Let's Discuss Your Next Project
          </p>
          <p
            className="text-xs md:text-sm text-white/50 font-light max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Whether you are planning a residential, commercial, infrastructure, or urban development project, ESAC Consultants welcomes the opportunity to discuss your requirements. Reach out using the official contact details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Information Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Box */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden group hover:border-sky-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl border border-sky-500/30 bg-sky-500/10 flex items-center justify-center text-[#4ba3fb] mb-4">
                <MapPin size={20} />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-[#4ba3fb] uppercase font-bold block mb-1">
                OFFICE ADDRESS
              </span>
              <p
                className="text-sm text-white/80 leading-relaxed font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Ground Floor D-97, Commercial Broadway, DHA Phase 8, Lahore 54000, Pakistan
              </p>
            </div>

            {/* Email Box */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden group hover:border-sky-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl border border-sky-500/30 bg-sky-500/10 flex items-center justify-center text-[#4ba3fb] mb-4">
                <Mail size={20} />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-[#4ba3fb] uppercase font-bold block mb-1">
                OFFICIAL EMAIL
              </span>
              <a
                href="mailto:info@esaconsultant.com"
                className="text-sm text-sky-400 hover:text-white transition-colors font-mono"
              >
                info@esaconsultant.com
              </a>
            </div>

            {/* Phone Box */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden group hover:border-sky-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl border border-sky-500/30 bg-sky-500/10 flex items-center justify-center text-[#4ba3fb] mb-4">
                <Phone size={20} />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-[#4ba3fb] uppercase font-bold block mb-2">
                PHONE NUMBERS
              </span>
              <div className="space-y-1 font-mono text-sm text-white/80">
                <div>+92 42 35740675</div>
                <div>+92 310 3722266</div>
              </div>
            </div>

            {/* Hours & Socials Box */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl border border-sky-500/30 bg-sky-500/10 flex items-center justify-center text-[#4ba3fb] mb-4">
                <Clock size={20} />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-[#4ba3fb] uppercase font-bold block mb-2">
                BUSINESS HOURS & APPOINTMENTS
              </span>
              <p
                className="text-xs text-white/60 leading-relaxed font-light mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Please contact ESAC Consultants through the official phone numbers or social media channels to confirm office hours and schedule appointments.
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono text-white/40 uppercase">Connect Socially:</span>
                <a
                  href="https://facebook.com/esaconsultants"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-white font-mono"
                >
                  <Globe size={14} />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://instagram.com/esaconsultants"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-white font-mono"
                >
                  <Share2 size={14} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl relative">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-sky-500/20 text-[#4ba3fb] border border-sky-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3
                    className="text-2xl font-bold text-white uppercase"
                    style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
                  >
                    Inquiry Received
                  </h3>
                  <p
                    className="text-xs text-white/60 max-w-md mx-auto font-light"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Thank you for reaching out to ESAC Consultants. Our team will review your project parameters and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3
                    className="text-2xl font-bold text-white uppercase mb-6"
                    style={{ fontFamily: "'Highkind', 'Outfit', 'Syne', sans-serif" }}
                  >
                    Project Consultation Form
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs focus:border-[#4ba3fb] outline-none transition-colors"
                        placeholder="e.g. Tariq Mansoor"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs focus:border-[#4ba3fb] outline-none transition-colors"
                        placeholder="client@domain.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-2">Phone Number</label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs focus:border-[#4ba3fb] outline-none transition-colors"
                        placeholder="+92 300 0000000"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-2">Development Sector</label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs focus:border-[#4ba3fb] outline-none transition-colors"
                      >
                        <option value="Residential">Residential Development</option>
                        <option value="Commercial">Commercial Building / Office</option>
                        <option value="Interior Design">Interior Design Project</option>
                        <option value="Infrastructure">Infrastructure & Civil Works</option>
                        <option value="Urban Design">Urban Design & Masterplanning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-2">Project Overview & Requirements *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-xs focus:border-[#4ba3fb] outline-none transition-colors"
                      placeholder="Outline site location, estimated scale, and required architectural or engineering scope..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl border-2 border-transparent bg-[#4ba3fb] hover:bg-sky-400 text-slate-950 font-bold tracking-widest uppercase text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span>SUBMIT INQUIRY</span>
                    <Send size={14} />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
