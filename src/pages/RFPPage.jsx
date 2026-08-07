import React, { useState } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { MagneticButton } from '../components/Common/MagneticButton';
import { Check, ShieldCheck, FileText, Send } from 'lucide-react';

export const RFPPage = () => {
  const [formData, setFormData] = useState({
    organisation: '',
    contactName: '',
    email: '',
    phone: '',
    sector: 'DHA Pakistan Contract',
    scale: '10,000+ Acres Masterplan',
    budgetValuation: '$1B - $5B+',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="SUBMIT CONTRACT PROPOSAL (RFP)" 
        subtitle="Confidential portal for government agencies, municipal authorities, and corporate real estate consortia."
      />

      <section className="py-20 bg-obsidian bg-noise">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-panel p-8 md:p-12 rounded-2xl border border-border-gold shadow-2xl space-y-8">
            
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-champagne">
              <ShieldCheck className="w-5 h-5" />
              <span>CONFIDENTIAL TENDER SUBMISSION PROTOCOL</span>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-onyx border border-champagne text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-champagne/20 text-champagne flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-3xl text-alabaster">RFP Dossier Received</h3>
                <p className="text-xs text-muted leading-relaxed max-w-md mx-auto font-light">
                  Thank you, {formData.contactName}. Our partner director for {formData.sector} has logged proposal dossier #{Math.floor(100000 + Math.random() * 900000)}. Direct briefing scheduled within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-widest text-champagne hover:underline pt-2 inline-block font-mono"
                >
                  Submit Additional Documentation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-champagne tracking-wider block">Government / Client Organisation *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Defense Housing Authority / Neom Consortia"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full bg-onyx border border-border rounded-lg px-4 py-3 text-sm text-alabaster focus:outline-none focus:border-champagne transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-champagne tracking-wider block">Primary Representative Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Brig. (Ret.) A. R. Khan"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full bg-onyx border border-border rounded-lg px-4 py-3 text-sm text-alabaster focus:outline-none focus:border-champagne transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-champagne tracking-wider block">Official Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="director@dha.gov.pk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-onyx border border-border rounded-lg px-4 py-3 text-sm text-alabaster focus:outline-none focus:border-champagne transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-champagne tracking-wider block">Telephone / Signal *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 (51) 840-9000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-onyx border border-border rounded-lg px-4 py-3 text-sm text-alabaster focus:outline-none focus:border-champagne transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
                  <div className="space-y-2">
                    <label className="uppercase text-champagne tracking-wider block">Contract Sector</label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full bg-onyx border border-border rounded-lg px-3 py-3 text-alabaster focus:outline-none focus:border-champagne"
                    >
                      <option value="DHA Pakistan Contract">DHA Pakistan Contract</option>
                      <option value="High-Rise Commercial Skyscraper">High-Rise Skyscraper</option>
                      <option value="Smart City Urban Masterplan">Smart City Masterplan</option>
                      <option value="Civic & Infrastructure">Civic Infrastructure</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="uppercase text-champagne tracking-wider block">Development Scale</label>
                    <select
                      value={formData.scale}
                      onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                      className="w-full bg-onyx border border-border rounded-lg px-3 py-3 text-alabaster focus:outline-none focus:border-champagne"
                    >
                      <option value="5,000 - 20,000+ Acres">5,000 - 20,000+ Acres</option>
                      <option value="1M - 5M Sq Ft High-Rise">1M - 5M Sq Ft High-Rise</option>
                      <option value="Civic Infrastructure Hub">Civic Infrastructure Hub</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="uppercase text-champagne tracking-wider block">Estimated Valuation</label>
                    <select
                      value={formData.budgetValuation}
                      onChange={(e) => setFormData({ ...formData, budgetValuation: e.target.value })}
                      className="w-full bg-onyx border border-border rounded-lg px-3 py-3 text-alabaster focus:outline-none focus:border-champagne"
                    >
                      <option value="$500M - $1B">$500M - $1B</option>
                      <option value="$1B - $5B+">$1B - $5B+</option>
                      <option value="$5B+ Mega-Consortia">$5B+ Mega-Consortia</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-champagne tracking-wider block">Tender Requirements & Scope Brief</label>
                  <textarea
                    rows={4}
                    placeholder="Provide overview of urban site coordinates, structural requirements, environmental directives, or security clearances..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-onyx border border-border rounded-lg px-4 py-3 text-sm text-alabaster focus:outline-none focus:border-champagne transition-colors"
                  />
                </div>

                <MagneticButton
                  cursorText="SUBMIT"
                  className="w-full py-4 rounded-full bg-champagne text-obsidian text-xs font-semibold uppercase tracking-widest hover:bg-champagne-light transition-colors"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span>TRANSMIT CONTRACT PROPOSAL DOSSIER</span>
                </MagneticButton>

              </form>
            )}

          </div>
        </div>
      </section>
    </div>
  );
};
