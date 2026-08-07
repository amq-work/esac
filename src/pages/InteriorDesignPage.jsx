import React from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { useNav } from '../context/NavContext';
import { MagneticButton } from '../components/Common/MagneticButton';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export const InteriorDesignPage = () => {
  const { setCurrentPage } = useNav();

  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="INTERIOR DESIGN & FINISHES" 
        subtitle="Bespoke Italian joinery, rare organic marble, and custom acoustic timber tailored by Atelier Rostova Milan."
      />

      <section className="py-20 bg-onyx border-b border-border bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-champagne block">ITALIAN CRAFTSMANSHIP</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light">Custom Poliform Kitchen Pavilions</h2>
            <p className="text-sm text-muted font-light leading-relaxed">
              Every residence kitchen is hand-assembled in Italy by Poliform. Monolithic book-matched Calacatta Gold marble islands pair with concealed Gaggenau 400-Series appliances and integrated sommelier wine galleries.
            </p>

            <ul className="space-y-3 text-xs text-muted pt-2">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                <span>Monolithic 12ft Calacatta marble island with waterfall edges</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                <span>Custom smoked oak cabinetry with soft-close motorized drawers</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                <span>Gaggenau induction hob, steam oven, and sub-zero refrigeration</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden glass-panel border border-border-gold shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
                alt="Marble Kitchen View"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Primary Bath Sanctuary */}
      <section className="py-20 bg-obsidian border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-champagne block">SPA SANCTUARY</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light">Freestanding Travertine Bath Suites</h2>
            <p className="text-sm text-muted font-light leading-relaxed">
              Designed as personal wellness sanctuaries, primary bath suites feature hand-carved floating stone soaking tubs, dual rain showers, and floor-to-ceiling heated marble walls.
            </p>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="rounded-2xl overflow-hidden glass-panel border border-border shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Bathroom View"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
