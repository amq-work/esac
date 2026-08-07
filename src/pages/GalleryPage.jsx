import React, { useState } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { GALLERY_ITEMS } from '../data/residenceData';
import { useNav } from '../context/NavContext';
import { Maximize2, X, SlidersHorizontal } from 'lucide-react';

export const GalleryPage = () => {
  const { setCursor, resetCursor } = useNav();
  const [filterCat, setFilterCat] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const filteredItems = filterCat === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === filterCat);

  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="VISUAL GALLERY" 
        subtitle="An architectural photo exhibition showcasing facade geometry, interior finishes, and sky-deck vistas."
      />

      {/* Filter Tabs */}
      <section className="py-10 bg-onyx border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-champagne">
            <SlidersHorizontal className="w-4 h-4" />
            <span>CATEGORY:</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {['All', 'Architecture', 'Interior Design', 'Amenities', 'Lifestyle'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCat(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all border ${
                  filterCat === cat
                    ? 'bg-champagne text-obsidian border-champagne font-semibold'
                    : 'border-border text-muted hover:text-alabaster'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-obsidian bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setCursor('EXPAND')}
                onMouseLeave={resetCursor}
                onClick={() => setActiveLightbox(item)}
                className="group relative h-96 rounded-2xl overflow-hidden glass-panel border border-border hover:border-border-gold transition-all duration-500 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-champagne tracking-widest block mb-1">{item.category}</span>
                    <h3 className="font-serif text-2xl text-alabaster">{item.title}</h3>
                  </div>
                  <Maximize2 className="w-5 h-5 text-champagne opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6 animate-fadeIn">
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute -top-12 right-0 p-3 rounded-full border border-border hover:border-champagne text-champagne transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={activeLightbox.image}
              alt={activeLightbox.title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl border border-border"
            />

            <div className="mt-6 text-center">
              <span className="text-xs uppercase tracking-widest font-mono text-champagne">{activeLightbox.category}</span>
              <h3 className="font-serif text-3xl text-alabaster mt-1">{activeLightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
