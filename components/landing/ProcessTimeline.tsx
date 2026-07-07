import React from 'react';
import { processSteps } from '@/data/agencyData';

export default function ProcessTimeline() {
  return (
    <section className="py-20  bg-brand-primary text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-secondary mb-3">
            The Architecture of Growth
          </h2>
          <h3 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            4 Phases to Pipeline Automation
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative group space-y-4">
              <span className="block font-heading font-black text-6xl text-brand-accent/50 group-hover:text-brand-accent/80 transition-colors">
                {step.step}
              </span>
              <h4 className="font-heading font-bold text-lg text-brand-accent">
                {step.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
