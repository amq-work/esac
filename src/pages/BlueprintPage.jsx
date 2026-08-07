import React from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { BlueprintInspector } from '../components/Common/BlueprintInspector';
import { useNav } from '../context/NavContext';
import { MagneticButton } from '../components/Common/MagneticButton';
import { ArrowUpRight } from 'lucide-react';

export const BlueprintPage = () => {
  const { setCurrentPage } = useNav();

  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="CAD INSPECTOR SUITE" 
        subtitle="Explore Autodesk Revit CAD layers, structural steel diagrids, MEP grids, and solar thermal models for major contracts."
      />

      <section className="py-20 bg-obsidian bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <BlueprintInspector projectTitle="DHA City Karachi Smart Urban Core" projectLocation="Karachi, Pakistan" />

          <div className="p-8 rounded-2xl glass-panel border border-border flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="font-serif text-2xl text-alabaster">Need Custom CAD Export for Your Project?</h4>
              <p className="text-xs text-muted font-light mt-1">Our engineering team provides BIM 5D models for governmental tender evaluation.</p>
            </div>
            <MagneticButton
              onClick={() => setCurrentPage('rfp')}
              cursorText="REQUEST"
              className="px-6 py-3 rounded-full bg-champagne text-obsidian text-xs font-semibold uppercase tracking-widest hover:bg-champagne-light transition-colors"
            >
              <span>REQUEST ARCHITECTURAL BRIEFING</span>
            </MagneticButton>
          </div>

        </div>
      </section>
    </div>
  );
};
