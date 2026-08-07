import React, { useState } from 'react';
import { Layers, Eye, ShieldCheck, Sun, Zap, Cpu, Activity, Download } from 'lucide-react';

export const BlueprintInspector = ({ projectTitle = "DHA Phase 9 Prism Towers", projectLocation = "Lahore, Pakistan" }) => {
  const [activeLayer, setActiveLayer] = useState('structural'); // 'structural', 'mep', 'solar', 'zoning'

  return (
    <div className="glass-panel p-6 md:p-8 rounded-2xl border border-border-gold space-y-6 relative overflow-hidden bg-noise">
      
      {/* Top Controls Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border pb-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-champagne">
            <Activity className="w-4 h-4" />
            <span>INTERACTIVE CAD BLUEPRINT INSPECTOR v4.8</span>
          </div>
          <h3 className="font-serif text-2xl text-alabaster mt-1">{projectTitle}</h3>
          <span className="text-xs text-muted font-mono">{projectLocation}</span>
        </div>

        {/* Layer Selectors */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'structural', label: '1. Structural Steel', icon: Layers },
            { id: 'mep', label: '2. MEP & HVAC Grid', icon: Zap },
            { id: 'solar', label: '3. Solar Thermal', icon: Sun },
            { id: 'zoning', label: '4. Spatial Zoning', icon: Cpu }
          ].map((layer) => {
            const Icon = layer.icon;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all border ${
                  activeLayer === layer.id
                    ? 'bg-champagne text-obsidian font-bold border-champagne shadow-lg'
                    : 'bg-onyx border-border text-muted hover:text-alabaster'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{layer.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Blueprint Visual Canvas Box */}
      <div className="relative h-96 rounded-xl bg-black/60 border border-champagne/30 overflow-hidden flex flex-col justify-between p-6">
        
        {/* Top Info Bar */}
        <div className="flex justify-between items-center text-[10px] font-mono text-champagne z-10">
          <span>ACTIVE LAYER: {activeLayer.toUpperCase()}</span>
          <span>AUTODESK REVIT / BIM 5D SYNCED</span>
        </div>

        {/* Dynamic Vector Layer Graphic */}
        <div className="my-auto w-full max-w-2xl mx-auto h-64 relative flex items-center justify-center">
          
          {/* Base Grid Lines */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-2 opacity-20 pointer-events-none">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="border border-champagne/40" />
            ))}
          </div>

          {/* Layer 1: Structural Steel Exoskeleton */}
          {activeLayer === 'structural' && (
            <div className="w-full h-full flex items-center justify-center space-x-6 animate-fadeIn">
              <div className="w-48 h-56 border-2 border-dashed border-champagne rounded p-4 flex flex-col justify-between bg-champagne/10 relative">
                <div className="absolute inset-x-0 top-1/2 border-t-2 border-champagne/60" />
                <div className="absolute inset-y-0 left-1/2 border-l-2 border-champagne/60" />
                <span className="text-[10px] font-mono text-champagne">TOWER A: HIGH-TENSILE DIAGRID</span>
                <span className="text-[9px] font-mono text-muted">VISCOUS DAMPER LOAD: 850 TON</span>
              </div>
              <div className="w-48 h-56 border-2 border-dashed border-champagne rounded p-4 flex flex-col justify-between bg-champagne/10 relative">
                <div className="absolute inset-x-0 top-1/2 border-t-2 border-champagne/60" />
                <div className="absolute inset-y-0 left-1/2 border-l-2 border-champagne/60" />
                <span className="text-[10px] font-mono text-champagne">TOWER B: CANTILEVER TRUSS</span>
                <span className="text-[9px] font-mono text-muted">ANTI-SEISMIC RATING: ZONE 4</span>
              </div>
            </div>
          )}

          {/* Layer 2: MEP & HVAC Grid */}
          {activeLayer === 'mep' && (
            <div className="w-full h-full flex items-center justify-center space-x-6 animate-fadeIn">
              <div className="w-full h-48 border border-sky-400/60 rounded p-4 bg-sky-400/10 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] font-mono text-sky-300">
                  <span>CENTRAL CHILLED WATER CIRCUIT</span>
                  <span>FLOW: 12,000 GPM</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-sky-500/40 rounded w-full animate-pulse" />
                  <div className="h-2 bg-emerald-500/40 rounded w-3/4 animate-pulse" />
                  <div className="h-2 bg-amber-500/40 rounded w-1/2 animate-pulse" />
                </div>
                <span className="text-[9px] font-mono text-sky-200">AIR EXCHANGE: HEPA-14 MEDICAL GRADE (6X / HR)</span>
              </div>
            </div>
          )}

          {/* Layer 3: Solar Thermal Grid */}
          {activeLayer === 'solar' && (
            <div className="w-full h-full flex items-center justify-center animate-fadeIn">
              <div className="w-full h-48 border border-amber-500/60 rounded p-4 bg-amber-500/10 flex flex-col justify-between text-amber-300">
                <div className="flex justify-between text-[10px] font-mono">
                  <span>KINETIC SOLAR FACADE TILES</span>
                  <span>GENERATION: 4.8 MW/DAY</span>
                </div>
                <div className="grid grid-cols-8 gap-1 h-24 my-auto">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div key={i} className="bg-amber-400/30 border border-amber-400/60 rounded hover:bg-amber-400 transition-colors" />
                  ))}
                </div>
                <span className="text-[9px] font-mono text-amber-200">SOLAR THERMAL ABSORPTION: 98.4%</span>
              </div>
            </div>
          )}

          {/* Layer 4: Spatial Zoning */}
          {activeLayer === 'zoning' && (
            <div className="w-full h-full grid grid-cols-3 gap-3 p-2 animate-fadeIn text-xs">
              <div className="border border-purple-500/60 bg-purple-500/10 rounded p-3 text-purple-300 flex flex-col justify-between">
                <span className="font-mono text-[10px]">ZONE 01: COMMERCIAL CORE</span>
                <span className="text-[9px] text-muted">Level 01 - 35</span>
              </div>
              <div className="border border-emerald-500/60 bg-emerald-500/10 rounded p-3 text-emerald-300 flex flex-col justify-between">
                <span className="font-mono text-[10px]">ZONE 02: SKY VILLA SUITES</span>
                <span className="text-[9px] text-muted">Level 36 - 60</span>
              </div>
              <div className="border border-champagne bg-champagne/10 rounded p-3 text-champagne flex flex-col justify-between">
                <span className="font-mono text-[10px]">ZONE 03: PENTHOUSE TRIPLE</span>
                <span className="text-[9px] text-muted">Level 61 - 68</span>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Footer Info */}
        <div className="flex justify-between items-center text-[10px] font-mono text-muted border-t border-champagne/20 pt-3">
          <span>SCALE: 1:200 ARCHITECTURAL VECTOR</span>
          <button className="text-champagne hover:underline inline-flex items-center">
            <Download className="w-3.5 h-3.5 mr-1" />
            <span>EXPORT AUTODESK REVIT CAD DATA (.DWG)</span>
          </button>
        </div>

      </div>

    </div>
  );
};
