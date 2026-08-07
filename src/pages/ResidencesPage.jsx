import React, { useState } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { RESIDENCES } from '../data/residenceData';
import { useNav } from '../context/NavContext';
import { MagneticButton } from '../components/Common/MagneticButton';
import { ArrowUpRight, Check, X, SlidersHorizontal, Bed, Maximize2, Layers } from 'lucide-react';

export const ResidencesPage = () => {
  const { setCurrentPage, setCursor, resetCursor, selectedResidenceModal, setSelectedResidenceModal } = useNav();
  const [filterType, setFilterType] = useState('All');

  const filteredResidences = filterType === 'All'
    ? RESIDENCES
    : RESIDENCES.filter(r => r.type === filterType);

  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="THE RESIDENCES" 
        subtitle="A private sanctuary of 28 triplex sky sanctuaries, cantilevered villas, and grand duplexes."
      />

      {/* Filter Tabs */}
      <section className="py-12 bg-onyx border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-6">
          
          <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-champagne">
            <SlidersHorizontal className="w-4 h-4" />
            <span>FILTER COLLECTION:</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {['All', 'Penthouse', 'Sky Villa', 'Duplex', 'Residence'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border ${
                  filterType === type
                    ? 'bg-champagne text-obsidian border-champagne font-semibold'
                    : 'border-border text-muted hover:text-alabaster hover:border-champagne/40'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Residence Cards Grid */}
      <section className="py-20 bg-obsidian bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResidences.map((res) => (
              <div
                key={res.id}
                onMouseEnter={() => setCursor('INSPECT')}
                onMouseLeave={resetCursor}
                onClick={() => setSelectedResidenceModal(res)}
                className="group glass-panel rounded-2xl overflow-hidden hover-lift border border-border hover:border-border-gold transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Hero Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={res.heroImage}
                    alt={res.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-obsidian/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-champagne uppercase tracking-wider border border-border">
                    {res.floor}
                  </div>
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider ${
                    res.status === 'Available' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  }`}>
                    {res.status}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-champagne font-mono">{res.type}</span>
                    <h3 className="font-serif text-2xl text-alabaster group-hover:text-champagne transition-colors mt-1">
                      {res.title}
                    </h3>
                    <p className="text-xs text-muted mt-2 leading-relaxed">
                      {res.tagline}
                    </p>
                  </div>

                  {/* Features Quick Preview */}
                  <div className="space-y-1 py-2">
                    {res.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center text-[11px] text-muted space-x-2">
                        <Check className="w-3 h-3 text-champagne flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs & Pricing */}
                  <div className="pt-4 border-t border-border flex justify-between items-center text-xs">
                    <div className="text-muted flex items-center space-x-3 font-mono">
                      <span>{res.bedrooms} Beds</span>
                      <span>•</span>
                      <span>{res.interiorArea}</span>
                    </div>
                    <div className="font-serif text-xl text-champagne font-light">
                      {res.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Residence Detail Modal Drawer */}
      {selectedResidenceModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
          <div className="bg-obsidian border border-border-gold rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 relative text-alabaster bg-noise space-y-8">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedResidenceModal(null)}
              className="absolute top-6 right-6 p-3 rounded-full border border-border hover:border-champagne text-champagne transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-champagne">{selectedResidenceModal.floor} • {selectedResidenceModal.type}</span>
              <h2 className="font-serif text-3xl md:text-5xl text-alabaster mt-1">{selectedResidenceModal.title}</h2>
              <p className="text-sm text-muted mt-2">{selectedResidenceModal.tagline}</p>
            </div>

            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden h-96 border border-border">
              <img src={selectedResidenceModal.heroImage} alt={selectedResidenceModal.title} className="w-full h-full object-cover" />
            </div>

            {/* Gallery Thumbnails */}
            {selectedResidenceModal.gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {selectedResidenceModal.gallery.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden h-32 border border-border">
                    <img src={img} alt="Gallery view" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}

            {/* Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-onyx border border-border text-center">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-muted block">BEDROOMS</span>
                <span className="font-serif text-2xl text-champagne">{selectedResidenceModal.bedrooms}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-muted block">BATHROOMS</span>
                <span className="font-serif text-2xl text-champagne">{selectedResidenceModal.bathrooms}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-muted block">INTERIOR AREA</span>
                <span className="font-serif text-2xl text-champagne">{selectedResidenceModal.interiorArea}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-muted block">OFFERING PRICE</span>
                <span className="font-serif text-2xl text-champagne">{selectedResidenceModal.price}</span>
              </div>
            </div>

            {/* Architectural Features */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-champagne">BESPOKE ARCHITECTURAL FEATURES</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedResidenceModal.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs text-muted">
                    <Check className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
              <button 
                onClick={() => {
                  setSelectedResidenceModal(null);
                  setCurrentPage('floorplans');
                }}
                className="text-xs uppercase tracking-widest text-champagne hover:underline inline-flex items-center"
              >
                <span>View Interactive Floor Plan</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>

              <MagneticButton
                onClick={() => {
                  setSelectedResidenceModal(null);
                  setCurrentPage('contact');
                }}
                cursorText="BOOK"
                className="px-8 py-3.5 rounded-full bg-champagne text-obsidian text-xs font-semibold uppercase tracking-widest hover:bg-champagne-light transition-colors"
              >
                <span>INQUIRE ABOUT THIS RESIDENCE</span>
              </MagneticButton>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
