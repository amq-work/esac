import React from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { useNav } from '../context/NavContext';
import { MagneticButton } from '../components/Common/MagneticButton';
import { Layers, ShieldCheck, Sun, Zap, ArrowUpRight } from 'lucide-react';

export const ArchitecturePage = () => {
  const { setCurrentPage } = useNav();

  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="FACADE & ARCHITECTURE" 
        subtitle="A technical breakdown of cantilever structural engineering, solar orientation, and wind dampening technology."
      />

      {/* Structural Breakdown */}
      <section className="py-20 bg-onyx border-b border-border bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-champagne block">ENGINEERING MASTERY</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light">Cantilevered Sky Pavilions</h2>
            <p className="text-sm text-muted font-light leading-relaxed">
              The defining signature of L'ÉRA RESIDENCE is its 15-meter cantilevered terraces. Engineered with high-tensile structural steel trusses and post-tensioned concrete cores, each terrace floats out over the skyline without interior support columns.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-obsidian border border-border">
                <span className="font-serif text-2xl text-champagne block">15 METERS</span>
                <span className="text-[10px] uppercase font-mono text-muted">CANTILEVER PROJECTION</span>
              </div>
              <div className="p-4 rounded-xl bg-obsidian border border-border">
                <span className="font-serif text-2xl text-champagne block">99.9%</span>
                <span className="text-[10px] uppercase font-mono text-muted">WIND HARMONIC DAMPENING</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden glass-panel border border-border-gold shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Architecture Blueprint View"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Cards */}
      <section className="py-20 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-champagne block">PERFORMANCE DATA</span>
            <h2 className="font-serif text-4xl font-light">High-Altitude Structural Engineering</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl border border-border space-y-4">
              <Sun className="w-8 h-8 text-champagne" />
              <h3 className="font-serif text-2xl text-alabaster">Solar Thermal Envelope</h3>
              <p className="text-xs text-muted leading-relaxed font-light">
                Triple-pane low-E glass panels with automated interior solar louvers that dynamically adjust according to sun angle.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-border space-y-4">
              <Layers className="w-8 h-8 text-champagne" />
              <h3 className="font-serif text-2xl text-alabaster">Acoustic Glazing Matrix</h3>
              <p className="text-xs text-muted leading-relaxed font-light">
                Laminated acoustic interlayers reducing urban sound transmission to under 25 decibels for total interior quiet.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-border space-y-4">
              <Zap className="w-8 h-8 text-champagne" />
              <h3 className="font-serif text-2xl text-alabaster">Circadian Air & Lighting</h3>
              <p className="text-xs text-muted leading-relaxed font-light">
                HEPA-14 medical grade air filtration cycling fresh exterior air 6 times per hour with humidity balancing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
