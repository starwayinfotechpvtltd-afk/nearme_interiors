'use client';

import React from 'react';
import CountUp from 'react-countup';

export default function ResultsCounter() {
  return (
    <section className="py-16 bg-brand-primary text-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <span className="block font-heading font-extrabold text-4xl sm:text-5xl text-brand-secondary">
              <CountUp end={48} suffix=" Cr+" duration={3} enableScrollSpy scrollSpyOnce />
            </span>
            <span className="block text-slate-400 text-xs sm:text-sm font-semibold mt-2">Design Revenue Generated</span>
          </div>
          <div>
            <span className="block font-heading font-extrabold text-4xl sm:text-5xl text-white">
              <CountUp end={2400} suffix="+" duration={3} enableScrollSpy scrollSpyOnce />
            </span>
            <span className="block text-slate-400 text-xs sm:text-sm font-semibold mt-2">Qualified Inquiries</span>
          </div>
          <div>
            <span className="block font-heading font-extrabold text-4xl sm:text-5xl text-white">
              <CountUp end={1200000} prefix="$" duration={3} enableScrollSpy scrollSpyOnce />
            </span>
            <span className="block text-slate-400 text-xs sm:text-sm font-semibold mt-2">Ad Spend Managed</span>
          </div>
          <div>
            <span className="block font-heading font-extrabold text-4xl sm:text-5xl text-brand-secondary">
              <CountUp end={96} suffix="%" duration={3} enableScrollSpy scrollSpyOnce />
            </span>
            <span className="block text-slate-400 text-xs sm:text-sm font-semibold mt-2">Long-term Client Retention</span>
          </div>
        </div>
      </div>
    </section>
  );
}
