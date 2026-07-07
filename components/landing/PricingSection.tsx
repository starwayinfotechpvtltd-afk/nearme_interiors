'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pricingPackages } from '@/data/agencyData';

interface PricingSectionProps {
  onOpenLead: (source: string) => void;
}

export default function PricingSection({ onOpenLead }: PricingSectionProps) {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-secondary mb-3">
            Investment Models
          </h2>
          <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary">
            Bespoke Strategy Packages Built to Scale
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between relative border ${
                pkg.popular
                  ? 'border-brand-secondary bg-brand-bg shadow-xl scale-100 lg:scale-105 z-10'
                  : 'border-slate-100 bg-white shadow-sm'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-secondary text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular Model
                </span>
              )}
              <div>
                <h4 className="font-heading font-bold text-xl text-brand-primary">{pkg.name}</h4>
                <p className="text-brand-muted text-sm mt-2 leading-relaxed min-h-[60px]">{pkg.description}</p>
                <div className="flex items-baseline gap-1 mt-6 border-b border-slate-100 pb-6">
                  <span className="text-4xl font-extrabold text-brand-primary">{pkg.price}</span>
                  <span className="text-brand-muted text-sm">{pkg.frequency}</span>
                </div>

                <ul className="space-y-4.5 mt-6">
                  {pkg.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2.5">
                      <Check className="h-4.5 w-4.5 text-brand-secondary shrink-0 mt-0.5" />
                      <span className="text-brand-primary text-xs sm:text-sm font-semibold">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={() => onOpenLead(`Pricing Table: ${pkg.name}`)}
                className={`w-full py-6 rounded-lg text-xs font-bold mt-8 cursor-pointer ${
                  pkg.popular
                    ? 'bg-brand-secondary hover:bg-brand-secondary/90 text-white shadow-lg'
                    : 'bg-brand-primary hover:bg-brand-primary/95 text-white'
                }`}
              >
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
