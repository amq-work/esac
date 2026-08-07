import React from 'react';
import { useNav } from '../context/NavContext';
import { MagneticButton } from '../components/Common/MagneticButton';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  const { setCurrentPage } = useNav();

  return (
    <div className="bg-obsidian text-alabaster min-h-screen flex items-center justify-center p-6 bg-noise">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <span className="font-serif text-8xl md:text-9xl text-champagne/40 font-light block">404</span>
        <h1 className="font-serif text-4xl text-alabaster">Architectural Void</h1>
        <p className="text-xs text-muted leading-relaxed max-w-md mx-auto">
          The requested spatial coordinate does not exist within the L'ÉRA RESIDENCE master plan structure.
        </p>

        <MagneticButton
          onClick={() => setCurrentPage('home')}
          cursorText="HOME"
          className="px-8 py-4 rounded-full bg-champagne text-obsidian text-xs font-semibold uppercase tracking-widest hover:bg-champagne-light transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>RETURN TO MAIN ESTATE</span>
        </MagneticButton>
      </div>
    </div>
  );
};
