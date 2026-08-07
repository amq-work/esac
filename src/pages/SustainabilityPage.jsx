import React from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { Leaf, Sun, Zap, Recycle } from 'lucide-react';

export const SustainabilityPage = () => {
  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="SUSTAINABILITY & ZERO-CARBON R&D" 
        subtitle="Pioneering low-embodied-carbon concrete, kinetic solar facades, and micro-climate urban heat mitigation."
      />

      <section className="py-20 bg-onyx border-b border-border bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-panel p-8 rounded-2xl border border-border space-y-4">
            <Leaf className="w-8 h-8 text-champagne" />
            <h3 className="font-serif text-2xl text-alabaster">Geopolymer Bio-Concrete</h3>
            <p className="text-xs text-muted leading-relaxed font-light">
              Substituting traditional Portland cement with industrial fly ash and volcanic slag, reducing embodied carbon by 75%.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-border space-y-4">
            <Sun className="w-8 h-8 text-champagne" />
            <h3 className="font-serif text-2xl text-alabaster">Kinetic Photovoltaic Skins</h3>
            <p className="text-xs text-muted leading-relaxed font-light">
              Motorized solar louvers tracking sun angles while harvesting up to 4.5 Megawatt-hours of clean electricity per day.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-border space-y-4">
            <Recycle className="w-8 h-8 text-champagne" />
            <h3 className="font-serif text-2xl text-alabaster">Closed-Loop Hydro Systems</h3>
            <p className="text-xs text-muted leading-relaxed font-light">
              Subterranean greywater filtration and rainwater harvesting supplying 100% of vertical biophilic garden irrigation needs.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
