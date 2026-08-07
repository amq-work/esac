import React, { useState } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { RESIDENCES } from '../data/residenceData';
import { useNav } from '../context/NavContext';
import { MagneticButton } from '../components/Common/MagneticButton';
import { ShieldCheck, Filter, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const AvailabilityPage = () => {
  const { setCurrentPage, setSelectedResidenceModal } = useNav();
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredInventory = statusFilter === 'All'
    ? RESIDENCES
    : RESIDENCES.filter(r => r.status === statusFilter);

  return (
    <div className="bg-obsidian text-alabaster min-h-screen">
      <PageHeader 
        title="LIVE AVAILABILITY MATRIX" 
        subtitle="Real-time residence inventory, elevation levels, area specifications, and pricing status."
      />

      <section className="py-16 bg-obsidian bg-noise">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          {/* Top Filter Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 glass-panel p-6 rounded-2xl border border-border-gold">
            <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-champagne">
              <ShieldCheck className="w-5 h-5" />
              <span>INVENTORY RELEASE PHASE IV</span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-xs text-muted uppercase tracking-widest">STATUS:</span>
              {['All', 'Available', 'Reserved', 'Sold'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all border ${
                    statusFilter === status
                      ? 'bg-champagne text-obsidian font-bold border-champagne'
                      : 'border-border text-muted hover:text-alabaster'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Real-time Inventory Table */}
          <div className="glass-panel rounded-2xl overflow-hidden border border-border">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-onyx border-b border-border uppercase font-mono text-champagne tracking-wider">
                  <tr>
                    <th className="p-6">Residence</th>
                    <th className="p-6">Type</th>
                    <th className="p-6">Floor Level</th>
                    <th className="p-6">Beds / Baths</th>
                    <th className="p-6">Interior Area</th>
                    <th className="p-6">Terrace Area</th>
                    <th className="p-6">Offering Price</th>
                    <th className="p-6">Status</th>
                    <th className="p-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {filteredInventory.map((item) => (
                    <tr key={item.id} className="hover:bg-onyx/50 transition-colors">
                      <td className="p-6 font-serif text-lg text-alabaster">{item.title}</td>
                      <td className="p-6 font-mono text-muted">{item.type}</td>
                      <td className="p-6 font-mono text-alabaster">{item.floor}</td>
                      <td className="p-6 font-mono text-muted">{item.bedrooms} Bed / {item.bathrooms} Bath</td>
                      <td className="p-6 font-mono text-alabaster">{item.interiorArea}</td>
                      <td className="p-6 font-mono text-champagne">{item.terraceArea}</td>
                      <td className="p-6 font-serif text-xl text-champagne font-light">{item.price}</td>
                      <td className="p-6">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase font-semibold font-mono tracking-wider ${
                          item.status === 'Available' 
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                            : item.status === 'Reserved'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-6 text-right">
                        <button
                          onClick={() => setSelectedResidenceModal(item)}
                          className="text-xs uppercase tracking-widest text-champagne hover:underline inline-flex items-center"
                        >
                          <span>Inspect</span>
                          <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
