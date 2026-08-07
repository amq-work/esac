import React, { useState } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { PROJECTS } from '../data/firmData';
import { useNav } from '../context/NavContext';
import { MagneticButton } from '../components/Common/MagneticButton';
import { BlueprintInspector } from '../components/Common/BlueprintInspector';
import { ShieldCheck, CheckCircle2, Building2, MapPin, Layers, ArrowUpRight } from 'lucide-react';

export const DHAPakistanPage = () => {
  const { setCurrentPage } = useNav();
  const dhaProjects = PROJECTS.filter(p => p.category === 'DHA Pakistan');
  const [selectedProject, setSelectedProject] = useState(dhaProjects[0]);

  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="DHA PAKISTAN MEGA-CONTRACTS" 
        subtitle="Multi-billion dollar urban smart city masterplans, high-density commercial towers, and golf estates engineered for Defense Housing Authority Pakistan."
      />

      {/* Overview Banner */}
      <section className="py-20 bg-onyx border-b border-border bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-champagne font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>SOUTH ASIAN INFRASTRUCTURE DIVISION</span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl font-light text-alabaster">
              Engineering Pakistan's Next-Generation Urban Landmarks
            </h2>

            <p className="text-sm text-muted font-light leading-relaxed">
              VANCE & ROSTOVA operates as a lead master-planning and structural engineering partner for Defense Housing Authority (DHA) across Karachi, Lahore, Rawalpindi, and Islamabad.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs">
              <div className="p-4 rounded-xl bg-obsidian border border-border">
                <span className="font-serif text-3xl text-champagne block">20,000 ACRES</span>
                <span className="text-[10px] uppercase text-muted">DHA CITY KARACHI MASTERPLAN</span>
              </div>
              <div className="p-4 rounded-xl bg-obsidian border border-border">
                <span className="font-serif text-3xl text-champagne block">$7.0 BILLION+</span>
                <span className="text-[10px] uppercase text-muted">TOTAL DHA CONTRACT PORTFOLIO</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden glass-panel border border-border-gold shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2070&auto=format&fit=crop"
                alt="DHA City Aerial Masterplan"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DHA Project Tabs Showcase */}
      <section className="py-24 bg-obsidian bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          {/* Project Selector Bar */}
          <div className="flex flex-wrap gap-4 border-b border-border pb-6">
            {dhaProjects.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className={`px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
                  selectedProject.id === proj.id
                    ? 'bg-champagne text-obsidian font-bold border-champagne shadow-lg'
                    : 'bg-onyx border-border text-muted hover:text-alabaster'
                }`}
              >
                {proj.title} ({proj.location})
              </button>
            ))}
          </div>

          {/* Detailed Project Breakdown Card */}
          <div className="glass-panel p-8 md:p-12 rounded-2xl border border-border-gold space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <span className="text-xs font-mono text-champagne uppercase tracking-widest">{selectedProject.location} • {selectedProject.sector}</span>
                <h3 className="font-serif text-3xl md:text-5xl text-alabaster mt-1">{selectedProject.title}</h3>
                <p className="text-sm text-muted mt-2 font-light">{selectedProject.tagline}</p>
              </div>

              <div className="p-4 rounded-xl bg-onyx border border-border text-right font-mono">
                <span className="text-[10px] uppercase text-muted block">CONTRACT VALUATION</span>
                <span className="font-serif text-3xl text-champagne font-light">{selectedProject.value}</span>
              </div>
            </div>

            {/* Hero Render */}
            <div className="rounded-xl overflow-hidden h-96 border border-border">
              <img src={selectedProject.heroImage} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>

            {/* Contract Specifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-xl bg-onyx border border-border font-mono text-xs">
              <div>
                <span className="text-muted text-[10px] uppercase block">CLIENT</span>
                <span className="text-alabaster font-semibold block mt-1">{selectedProject.client}</span>
              </div>
              <div>
                <span className="text-muted text-[10px] uppercase block">DEVELOPMENT SCALE</span>
                <span className="text-alabaster font-semibold block mt-1">{selectedProject.scale}</span>
              </div>
              <div>
                <span className="text-muted text-[10px] uppercase block">EXECUTION TIMELINE</span>
                <span className="text-champagne block mt-1">{selectedProject.year}</span>
              </div>
              <div>
                <span className="text-muted text-[10px] uppercase block">PROJECT STATUS</span>
                <span className="text-emerald-300 block mt-1">{selectedProject.status}</span>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-champagne">CONTRACT ENGINEERING DELIVERABLES</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs text-muted glass-panel p-3 rounded-lg border border-border">
                    <CheckCircle2 className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CAD Inspector for selected project */}
            <BlueprintInspector projectTitle={selectedProject.title} projectLocation={selectedProject.location} />

          </div>

        </div>
      </section>

      {/* Bottom Proposal Trigger */}
      <section className="py-20 bg-onyx text-center border-t border-border">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="font-serif text-3xl md:text-5xl font-light">Propose a DHA Contract or Masterplan</h2>
          <p className="text-sm text-muted font-light">Direct liaison with our South Asian Directorate in Islamabad and Lahore.</p>
          <MagneticButton
            onClick={() => setCurrentPage('rfp')}
            cursorText="PROPOSE"
            className="px-8 py-4 rounded-full bg-champagne text-obsidian text-xs font-semibold uppercase tracking-widest hover:bg-champagne-light transition-colors"
          >
            <span>SUBMIT DHA PAKISTAN RFP</span>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};
