import React, { useState } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { PROJECTS } from '../data/firmData';
import { useNav } from '../context/NavContext';
import { SlidersHorizontal, ArrowUpRight } from 'lucide-react';

export const ProjectsPage = () => {
  const { setCursor, resetCursor } = useNav();
  const [filterCat, setFilterCat] = useState('All');

  const filteredProjects = filterCat === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filterCat || p.sector.includes(filterCat));

  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="GLOBAL PORTFOLIO" 
        subtitle="Pre-eminent masterplanning, architectural engineering, and infrastructure projects."
      />

      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center gap-4 justify-between">
          <div className="flex flex-wrap gap-2">
            {['All', 'Civic & Infrastructure', 'Commercial Skylines', 'Smart Masterplan'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCat(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  filterCat === cat
                    ? 'bg-champagne text-obsidian font-semibold'
                    : 'bg-white/5 text-muted hover:bg-white/10'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-muted">
            <SlidersHorizontal size={14} />
            <span>FILTERING {filteredProjects.length} ACTIVE CONTRACTS</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-obsidian bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="group glass-panel rounded-2xl overflow-hidden hover-lift border border-border hover:border-border-gold transition-all duration-500 flex flex-col justify-between"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={proj.heroImage}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-obsidian/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-champagne uppercase tracking-wider border border-border">
                    {proj.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider">
                    {proj.status}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-champagne font-mono">{proj.location}</span>
                    <h3 className="font-serif text-2xl text-alabaster group-hover:text-champagne transition-colors mt-1">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-muted mt-2 line-clamp-2 leading-relaxed font-light">
                      {proj.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border flex justify-between items-center text-xs font-mono">
                    <span className="text-muted">{proj.scale}</span>
                    <span className="font-serif text-xl text-champagne font-light">{proj.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
