import React, { useState } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { LOCATION_POINTS } from '../data/residenceData';
import { useNav } from '../context/NavContext';
import { MapPin, Navigation, Compass, ArrowUpRight } from 'lucide-react';

export const LocationPage = () => {
  const { setCurrentPage } = useNav();
  const [activePoint, setActivePoint] = useState(0);

  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="PRESTIGE LOCATION" 
        subtitle="Situated in the historic heart of the city's finest cultural, dining, and financial quarter."
      />

      <section className="py-20 bg-obsidian bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Proximity Points Selector */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-champagne block">NEIGHBORHOOD GUIDE</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light">Surrounded by Cultural & Culinary Excellence</h2>

            <div className="space-y-4 pt-4">
              {LOCATION_POINTS.map((pt, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePoint(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all border ${
                    activePoint === idx
                      ? 'bg-onyx border-champagne text-alabaster shadow-xl'
                      : 'border-transparent text-muted hover:text-alabaster'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-lg">{pt.name}</span>
                    <span className="text-xs font-mono text-champagne font-semibold">{pt.distance}</span>
                  </div>
                  <p className="text-xs text-muted mt-2 font-light leading-relaxed">
                    {pt.detail}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden glass-panel border border-border-gold p-8 relative space-y-6">
              <div className="flex justify-between items-center border-b border-border pb-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-champagne">
                  <MapPin className="w-4 h-4" />
                  <span>DISTRICT COORDINATES: 40.7614° N, 73.9776° W</span>
                </div>
                <span className="text-xs uppercase tracking-widest text-muted">FIFTH AVENUE ESTATE</span>
              </div>

              {/* Map Graphic Box */}
              <div className="h-96 rounded-xl bg-onyx border border-border relative overflow-hidden flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2070&auto=format&fit=crop"
                  alt="City Aerial View"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                
                {/* Pins */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce">
                  <div className="w-10 h-10 rounded-full bg-champagne text-obsidian flex items-center justify-center font-serif text-lg font-bold shadow-2xl">
                    É
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-obsidian/90 px-2 py-1 rounded text-champagne mt-2 border border-champagne">
                    L'ÉRA RESIDENCE
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-muted">
                <span>Private Sales Pavilion Open Daily 10 AM - 6 PM</span>
                <button onClick={() => setCurrentPage('contact')} className="text-champagne hover:underline uppercase tracking-widest flex items-center">
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
