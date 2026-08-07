import React from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { useNav } from '../context/NavContext';
import { MagneticButton } from '../components/Common/MagneticButton';
import { Cpu, ShieldCheck, Zap, Layers, Activity } from 'lucide-react';

export const EngineeringPage = () => {
  const { setCurrentPage } = useNav();

  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="ENGINEERING & TECHNOLOGY" 
        subtitle="Anti-seismic structural dampening, 5D BIM digital twin simulations, and high-altitude aerodynamic design."
      />

      <section className="py-20 bg-onyx border-b border-border bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-champagne block">SEISMIC ENGINEERING</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light">Tuned Mass Dampers & Anti-Sway Fluid Systems</h2>
            <p className="text-sm text-muted font-light leading-relaxed">
              Skyscrapers designed by VANCE & ROSTOVA feature active hydraulic viscous dampers capable of absorbing over 98% of lateral sway induced by major earthquakes or high-altitude typhoon wind force.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs">
              <div className="p-4 rounded-xl bg-obsidian border border-border">
                <span className="font-serif text-3xl text-champagne block">850 TON</span>
                <span className="text-[10px] uppercase text-muted">ACTIVE BALANCING DAMPER</span>
              </div>
              <div className="p-4 rounded-xl bg-obsidian border border-border">
                <span className="font-serif text-3xl text-champagne block">ZONE 4</span>
                <span className="text-[10px] uppercase text-muted">HIGHEST SEISMIC COMPLIANCE</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden glass-panel border border-border-gold shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Engineering Trusses Model"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Cards */}
      <section className="py-24 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-champagne block">INNOVATION LAB</span>
            <h2 className="font-serif text-4xl font-light">Digital Twin & 5D BIM Simulation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl border border-border space-y-4">
              <Cpu className="w-8 h-8 text-champagne" />
              <h3 className="font-serif text-2xl text-alabaster">5D BIM Digital Twins</h3>
              <p className="text-xs text-muted leading-relaxed font-light">
                Real-time structural stress monitoring and predictive maintenance models connected directly to municipal operational grids.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-border space-y-4">
              <Activity className="w-8 h-8 text-champagne" />
              <h3 className="font-serif text-2xl text-alabaster">Aerodynamic Wind Tunnels</h3>
              <p className="text-xs text-muted leading-relaxed font-light">
                Vortex shedding mitigation through sculpted corner apertures and porous cantilevered balconies.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-border space-y-4">
              <Zap className="w-8 h-8 text-champagne" />
              <h3 className="font-serif text-2xl text-alabaster">LEED Platinum HVAC</h3>
              <p className="text-xs text-muted leading-relaxed font-light">
                Geothermal cooling loops, solar thermal glass facade tiles, and sub-zero ice storage air conditioning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
