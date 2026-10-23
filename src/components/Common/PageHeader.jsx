import React from 'react';

const M  = 'SUSE, monospace';
const A  = '#0466c8';
const AL = '#4ba3fb';
const BG = '#001233';
const TX = '#e5e7ea';
const TB = 'rgba(4,102,200,0.16)';

export const PageHeader = ({ title, subtitle, label }) => (
  <section className="relative pt-28 sm:pt-40 pb-14 sm:pb-20 border-b overflow-hidden" style={{ background: '#000d22', borderColor: TB, fontFamily: M }}>
    <div className="absolute inset-0 grid-fine pointer-events-none" style={{ opacity: 0.45 }} />
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(4,102,200,0.06) 0%, transparent 70%)' }} />
    <div className="absolute top-0 left-0 right-0" style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(4,102,200,0.35),transparent)' }} />
    <div className="relative max-w-screen-2xl mx-auto px-5 sm:px-8">
      {label && (
        <div style={{ fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: `rgba(4,102,200,0.45)`, marginBottom: 18 }}>
          {label}
        </div>
      )}
      <h1 style={{ fontSize: 'clamp(2.5rem,6vw,7rem)', fontWeight: 100, letterSpacing: '-0.025em', lineHeight: 0.95, color: TX, maxWidth: 860 }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ fontSize: '0.8rem', fontWeight: 300, letterSpacing: '0.06em', lineHeight: 1.85, color: 'rgba(255,255,255,0.32)', maxWidth: 580, marginTop: '1.5rem' }}>
          {subtitle}
        </p>
      )}
      <div className="flex items-center gap-4 mt-10">
        <div style={{ width: 36, height: 1, background: `rgba(4,102,200,0.4)` }} />
        <span style={{ fontSize: '0.52rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: `rgba(4,102,200,0.28)` }}>VANCE &amp; ROSTOVA GROUP · 2026</span>
      </div>
    </div>
  </section>
);
