import React from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { useNav } from '../context/NavContext';
import { MagneticButton } from '../components/Common/MagneticButton';
import { Plane, Anchor, Utensils, Shield, ArrowUpRight } from 'lucide-react';

export const LifestylePage = () => {
  const { setCurrentPage } = useNav();

  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="RESIDENT LIFESTYLE & PRIVILEGES" 
        subtitle="Curated global partnerships providing seamless luxury on land, air, and sea."
      />

      <section className="py-20 bg-onyx border-b border-border bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-champagne block">GLOBAL PARTNERSHIPS</span>
            <h2 className="font-serif text-4xl font-light">Exclusive Resident Perks</h2>
            <p className="text-sm text-muted">Ownership at L'ÉRA RESIDENCE includes membership to our global lifestyle concierge circle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl border border-border space-y-4">
              <Plane className="w-8 h-8 text-champagne" />
              <h3 className="font-serif text-2xl text-alabaster">Private Aviation Concierge</h3>
              <p className="text-xs text-muted leading-relaxed font-light">
                Priority charter booking with NetJets and VistaJet with complimentary helicopter transfers from our private urban pad.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-border space-y-4">
              <Anchor className="w-8 h-8 text-champagne" />
              <h3 className="font-serif text-2xl text-alabaster">Superyacht Berth Access</h3>
              <p className="text-xs text-muted leading-relaxed font-light">
                Guaranteed seasonal deep-water slip reservations at St. Tropez, Monaco, and Caribbean marinas.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-border space-y-4">
              <Utensils className="w-8 h-8 text-champagne" />
              <h3 className="font-serif text-2xl text-alabaster">Michelin Chef In-Residence</h3>
              <p className="text-xs text-muted leading-relaxed font-light">
                Private dining experiences curated by guest Michelin-starred chefs in your residence or private dining salon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
