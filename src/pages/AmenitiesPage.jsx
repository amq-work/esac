import React from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { AMENITIES } from '../data/residenceData';
import { useNav } from '../context/NavContext';
import { MagneticButton } from '../components/Common/MagneticButton';
import { Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const AmenitiesPage = () => {
  const { setCurrentPage } = useNav();

  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="PRIVATE AMENITIES" 
        subtitle="Over 25,000 square feet of curated wellness, private dining, and high-altitude leisure."
      />

      {/* Amenities Showcase Blocks */}
      <section className="py-20 bg-obsidian bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
          {AMENITIES.map((amenity, idx) => (
            <div 
              key={amenity.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Frame */}
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="rounded-2xl overflow-hidden glass-panel border border-border-gold shadow-2xl hover-image-zoom">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-[450px] md:h-[520px] object-cover"
                  />
                </div>
              </div>

              {/* Text Frame */}
              <div className={`lg:col-span-5 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-champagne font-mono">
                  <Sparkles className="w-4 h-4" />
                  <span>{amenity.category}</span>
                </div>

                <h2 className="font-serif text-3xl md:text-5xl font-light text-alabaster leading-tight">
                  {amenity.title}
                </h2>

                <p className="text-sm text-muted font-light leading-relaxed">
                  {amenity.description}
                </p>

                <div className="p-4 rounded-xl bg-onyx border border-border space-y-1">
                  <span className="text-[10px] uppercase font-mono text-champagne tracking-widest">ACCESS SPECIFICATIONS</span>
                  <p className="text-xs text-alabaster font-mono">{amenity.stats}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Concierge Services Banner */}
      <section className="py-20 bg-onyx border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne block">BESPOKE CONCIERGE</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light">24/7 White-Glove Resident Services</h2>
          <p className="text-sm text-muted max-w-xl mx-auto font-light leading-relaxed">
            From private jet charters and sommelier wine sourcing to in-residence Michelin chef dining, our dedicated team handles every luxury request.
          </p>

          <MagneticButton
            onClick={() => setCurrentPage('contact')}
            cursorText="BOOK"
            className="px-8 py-4 rounded-full bg-champagne text-obsidian text-xs font-semibold uppercase tracking-widest hover:bg-champagne-light transition-colors"
          >
            <span>SCHEDULE PRIVATE AMENITY TOUR</span>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};
