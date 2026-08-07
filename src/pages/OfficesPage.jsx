import React from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { OFFICES } from '../data/firmData';
import { useNav } from '../context/NavContext';
import { MapPin, Phone, Mail, Globe, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '../components/Common/MagneticButton';

export const OfficesPage = () => {
  const { setCurrentPage } = useNav();

  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="GLOBAL STUDIO NETWORK" 
        subtitle="5 design studios spanning Europe, the Middle East, South Asia, and the Americas."
      />

      <section className="py-20 bg-obsidian bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OFFICES.map((off, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-2xl border border-border hover:border-border-gold transition-colors space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="font-serif text-3xl text-alabaster">{off.city}</span>
                    <span className="text-[10px] font-mono uppercase text-champagne bg-champagne/10 px-2 py-1 rounded border border-champagne/30">{off.country}</span>
                  </div>

                  <p className="text-xs text-champagne font-mono font-medium">{off.focus}</p>

                  <div className="space-y-2 text-xs text-muted font-light pt-2">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                      <span>{off.address}</span>
                    </div>

                    <div className="flex items-center space-x-2 font-mono text-alabaster">
                      <Phone className="w-4 h-4 text-champagne flex-shrink-0" />
                      <span>{off.phone}</span>
                    </div>

                    <div className="flex items-center space-x-2 font-mono">
                      <Mail className="w-4 h-4 text-champagne flex-shrink-0" />
                      <span>{off.email}</span>
                    </div>
                  </div>
                </div>

                <MagneticButton
                  onClick={() => setCurrentPage('rfp')}
                  cursorText="CONTACT"
                  className="w-full py-3 rounded-full border border-border hover:border-champagne text-xs uppercase tracking-widest text-alabaster transition-colors mt-6"
                >
                  <span>CONNECT WITH THIS STUDIO</span>
                </MagneticButton>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
