import React from 'react';
import { useNav } from '../../context/NavContext';
import { X, CheckCircle2, ShieldCheck, Download, ArrowUpRight, Layers } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { BlueprintInspector } from './BlueprintInspector';

export const ProjectModal = ({ project, onClose }) => {
  const { setCurrentPage } = useNav();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-obsidian border border-border-gold rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto p-6 md:p-10 relative text-alabaster bg-noise space-y-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full border border-border hover:border-champagne text-champagne transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Brief */}
        <div className="space-y-2">
          <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-champagne">
            <span className="px-3 py-1 rounded-full bg-champagne/20 border border-champagne">{project.category}</span>
            <span>{project.location}</span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl text-alabaster">{project.title}</h2>
          <p className="text-sm text-muted max-w-2xl font-light">{project.tagline}</p>
        </div>

        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden h-96 border border-border">
          <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Key Contract Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-xl bg-onyx border border-border text-center font-mono">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-muted block">CLIENT ORGANISATION</span>
            <span className="text-sm text-alabaster font-semibold block mt-1">{project.client}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-muted block">CONTRACT VALUE</span>
            <span className="font-serif text-2xl text-champagne font-light">{project.value}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-muted block">MASTERPLAN SCALE</span>
            <span className="text-sm text-alabaster font-semibold block mt-1">{project.scale}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-muted block">TIMELINE</span>
            <span className="text-sm text-champagne block mt-1">{project.year}</span>
          </div>
        </div>

        {/* Interactive CAD Inspector inside Modal */}
        <BlueprintInspector projectTitle={project.title} projectLocation={project.location} />

        {/* Key Engineering Features */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-widest text-champagne">KEY CONTRACT ENGINEERING DELIVERABLES</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-xs text-muted glass-panel p-3 rounded-lg border border-border">
                <CheckCircle2 className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-muted">
            <ShieldCheck className="w-4 h-4 text-champagne" />
            <span>CONFIDENTIAL GOVERNMENT & ENTERPRISE CONTRACT DOSSIER</span>
          </div>

          <MagneticButton
            onClick={() => {
              onClose();
              setCurrentPage('rfp');
            }}
            cursorText="PROPOSE"
            className="px-8 py-3.5 rounded-full bg-champagne text-obsidian text-xs font-semibold uppercase tracking-widest hover:bg-champagne-light transition-colors"
          >
            <span>SUBMIT RFP FOR SIMILAR CONTRACT</span>
          </MagneticButton>
        </div>

      </div>
    </div>
  );
};
