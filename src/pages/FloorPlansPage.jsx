import React, { useState } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { RESIDENCES } from '../data/residenceData';
import { useNav } from '../context/NavContext';
import { MagneticButton } from '../components/Common/MagneticButton';
import { Layers, Maximize2, Download, ArrowUpRight, Check } from 'lucide-react';

export const FloorPlansPage = () => {
  const { setCurrentPage } = useNav();
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [viewMode, setViewMode] = useState('2d'); // '2d' or '3d'

  const currentRes = RESIDENCES[selectedPlanIndex];

  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="INTERACTIVE FLOOR PLANS" 
        subtitle="Explore architectural layout blueprints, room dimensions, and spatial flow across all residence tiers."
      />

      <section className="py-16 bg-onyx border-b border-border bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          {/* Unit Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div className="flex flex-wrap gap-3">
              {RESIDENCES.map((res, idx) => (
                <button
                  key={res.id}
                  onClick={() => setSelectedPlanIndex(idx)}
                  className={`px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
                    selectedPlanIndex === idx
                      ? 'bg-champagne text-obsidian border-champagne font-semibold shadow-lg'
                      : 'bg-obsidian border-border text-muted hover:text-alabaster hover:border-champagne/40'
                  }`}
                >
                  {res.title} ({res.floor})
                </button>
              ))}
            </div>

            {/* 2D / 3D Mode Toggle */}
            <div className="flex items-center space-x-2 glass-panel p-1 rounded-lg border border-border">
              <button
                onClick={() => setViewMode('2d')}
                className={`px-4 py-2 rounded-md text-xs uppercase tracking-wider font-mono transition-colors ${
                  viewMode === '2d' ? 'bg-champagne text-obsidian font-bold' : 'text-muted hover:text-alabaster'
                }`}
              >
                2D Blueprint
              </button>
              <button
                onClick={() => setViewMode('3d')}
                className={`px-4 py-2 rounded-md text-xs uppercase tracking-wider font-mono transition-colors ${
                  viewMode === '3d' ? 'bg-champagne text-obsidian font-bold' : 'text-muted hover:text-alabaster'
                }`}
              >
                3D Spatial Render
              </button>
            </div>
          </div>

          {/* Blueprint Viewer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Interactive Blueprint Display */}
            <div className="lg:col-span-8 bg-obsidian rounded-2xl border border-border-gold p-8 relative flex flex-col items-center justify-center min-h-[500px] overflow-hidden">
              <div className="absolute top-4 left-4 text-xs font-mono text-champagne uppercase">
                {currentRes.title} • {viewMode === '2d' ? 'BLUEPRINT ARCHITECTURE' : 'SPATIAL RENDER'}
              </div>

              {viewMode === '2d' ? (
                /* Interactive Vector Blueprint Simulation */
                <div className="w-full max-w-xl h-96 border border-champagne/30 rounded-xl p-6 flex flex-col justify-between relative bg-black/40">
                  <div className="flex justify-between text-[10px] font-mono text-muted">
                    <span>NORTH FACING EXPOSURE</span>
                    <span>SCALE 1:100</span>
                  </div>

                  {/* Room Schematic Blocks */}
                  <div className="grid grid-cols-3 gap-3 my-auto h-64">
                    <div className="col-span-2 border border-champagne/40 rounded p-3 flex flex-col justify-between bg-champagne/5">
                      <span className="text-xs font-serif text-champagne">Grand Living Pavilion</span>
                      <span className="text-[10px] font-mono text-muted">32' x 24' (22ft Ceiling)</span>
                    </div>
                    <div className="border border-border rounded p-3 flex flex-col justify-between bg-white/5">
                      <span className="text-xs font-serif text-alabaster">Chef Kitchen</span>
                      <span className="text-[10px] font-mono text-muted">18' x 14'</span>
                    </div>
                    <div className="border border-border rounded p-3 flex flex-col justify-between bg-white/5">
                      <span className="text-xs font-serif text-alabaster">Primary Suite</span>
                      <span className="text-[10px] font-mono text-muted">22' x 18'</span>
                    </div>
                    <div className="col-span-2 border border-emerald-500/30 rounded p-3 flex flex-col justify-between bg-emerald-500/5">
                      <span className="text-xs font-serif text-emerald-300">Sky Terrace & Infinity Pool</span>
                      <span className="text-[10px] font-mono text-emerald-400">{currentRes.terraceArea}</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-[10px] font-mono text-champagne">
                    <span>TOTAL INTERIOR: {currentRes.interiorArea}</span>
                    <span>TERRACE: {currentRes.terraceArea}</span>
                  </div>
                </div>
              ) : (
                /* 3D Render Image */
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={currentRes.heroImage}
                    alt={currentRes.title}
                    className="w-full h-[450px] object-cover rounded-xl"
                  />
                </div>
              )}

              <div className="mt-6 flex justify-between items-center w-full border-t border-border pt-4 text-xs text-muted">
                <span>CAD Vector Reference Spec v2.4</span>
                <button className="text-champagne hover:underline inline-flex items-center">
                  <Download className="w-4 h-4 mr-1" />
                  <span>Download PDF Brochure & CAD (.DWG)</span>
                </button>
              </div>
            </div>

            {/* Specifications Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="glass-panel p-6 rounded-xl border border-border space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-champagne">SPECIFICATION METRICS</span>
                <h3 className="font-serif text-3xl text-alabaster">{currentRes.title}</h3>
                <p className="text-xs text-muted leading-relaxed font-light">{currentRes.tagline}</p>

                <div className="space-y-3 pt-4 border-t border-border text-xs">
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-muted">Floor Elevation</span>
                    <span className="font-mono text-alabaster">{currentRes.floor}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-muted">Bedrooms</span>
                    <span className="font-mono text-alabaster">{currentRes.bedrooms} Suites</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-muted">Bathrooms</span>
                    <span className="font-mono text-alabaster">{currentRes.bathrooms} Baths</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-muted">Interior Area</span>
                    <span className="font-mono text-champagne">{currentRes.interiorArea}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span className="text-muted">Outdoor Terrace</span>
                    <span className="font-mono text-champagne">{currentRes.terraceArea}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted">Offered Price</span>
                    <span className="font-serif text-xl text-champagne font-light">{currentRes.price}</span>
                  </div>
                </div>

                <MagneticButton
                  onClick={() => setCurrentPage('contact')}
                  cursorText="BOOK"
                  className="w-full py-3.5 rounded-full bg-champagne text-obsidian text-xs font-semibold uppercase tracking-widest hover:bg-champagne-light transition-colors mt-4"
                >
                  <span>INQUIRE ABOUT THIS PLAN</span>
                </MagneticButton>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
