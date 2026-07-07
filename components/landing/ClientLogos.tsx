import React from 'react';

export default function ClientLogos() {
  return (
    <section className="py-10 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">
          Certified Partners & Featured Network
        </p>
      </div>
      <div className="flex select-none overflow-hidden gap-10">
        <div className="flex gap-20 animate-marquee shrink-0 items-center justify-around min-w-full">
          <span className="font-heading font-extrabold text-slate-400 text-lg tracking-wider">GOOGLE PARTNER</span>
          <span className="font-heading font-extrabold text-slate-400 text-lg tracking-wider">META BUSINESS PARTNER</span>
          <span className="font-heading font-extrabold text-slate-400 text-lg tracking-wider">HUBSPOT CERTIFIED</span>
          <span className="font-heading font-extrabold text-slate-400 text-lg tracking-wider">ARCHITECTURAL DESIGN</span>
          <span className="font-heading font-extrabold text-slate-400 text-lg tracking-wider">DESIGN REPORT</span>
        </div>
        {/* Duplicate for seamless infinite loop */}
        <div className="flex gap-20 animate-marquee shrink-0 items-center justify-around min-w-full" aria-hidden="true">
          <span className="font-heading font-extrabold text-slate-400 text-lg tracking-wider">GOOGLE PARTNER</span>
          <span className="font-heading font-extrabold text-slate-400 text-lg tracking-wider">META BUSINESS PARTNER</span>
          <span className="font-heading font-extrabold text-slate-400 text-lg tracking-wider">HUBSPOT CERTIFIED</span>
          <span className="font-heading font-extrabold text-slate-400 text-lg tracking-wider">ARCHITECTURAL DESIGN</span>
          <span className="font-heading font-extrabold text-slate-400 text-lg tracking-wider">DESIGN REPORT</span>
        </div>
      </div>
    </section>
  );
}
