import React from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { Award, ExternalLink } from 'lucide-react';

export const PressPage = () => {
  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="PRESS & RECOGNITION" 
        subtitle="Global honors, architectural monographs, and international awards."
      />

      <section className="py-20 bg-obsidian bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { award: "World Architecture Festival 2025 Winner", title: "DHA City Karachi Smart Urban Masterplan", publication: "WAF Global Jury" },
            { award: "RIBA International Award for Excellence", title: "DHA Phase 9 Prism 68-Story Towers", publication: "Royal Institute of British Architects" },
            { award: "Architectural Digest Cover Feature", title: "The Sovereign Cantilevered Sanctuary", publication: "Architectural Digest International" },
            { award: "Dezeen Sustainable Infrastructure Honor", title: "Zero-Carbon Geopolymer Concrete Matrix", publication: "Dezeen Architecture Awards" }
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl border border-border space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-champagne">
                <Award className="w-4 h-4" />
                <span>{item.award}</span>
              </div>
              <h3 className="font-serif text-3xl text-alabaster">{item.title}</h3>
              <p className="text-xs text-muted font-mono">{item.publication}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
