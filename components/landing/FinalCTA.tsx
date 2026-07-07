'use client';

import React from 'react';
import { Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FinalCTAProps {
  onOpenLead: (source: string) => void;
}

export default function FinalCTA({ onOpenLead }: FinalCTAProps) {
  return (
    <section className="py-20 bg-brand-primary text-white relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* CTA Copy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-secondary">
              Ready to Dominate Your Local Market?
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold leading-tight">
              Secure Your Exclusive Region Consultation
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg">
              We only partner with a limited number of interior designers per city to prevent keyword conflict. Claim your territory and schedule your free 30-minute growth audit today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => onOpenLead('Final CTA Section')}
                className="bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold py-6 px-8 rounded-xl text-sm cursor-pointer shadow-lg shadow-brand-secondary/20 transition-all flex items-center justify-center gap-2"
              >
                Book Free Audit Call
                <Calendar className="h-4.5 w-4.5" />
              </Button>
              <a
                href="https://wa.me/919876543210?text=Hi%20Aura%20%26%20Arch%2C%20I'd%20like%20to%20schedule%20a%20strategy%20call%20for%20my%20studio."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-white font-bold py-4 px-8 rounded-xl text-sm text-center flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="h-4.5 w-4.5 text-green-400" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Embedded Calendar Interface Box */}
          <div className="lg:col-span-5 bg-slate-900/60 backdrop-blur border border-slate-800 p-6 rounded-2xl shadow-2xl space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="h-8 w-8 bg-brand-secondary/15 rounded-lg flex items-center justify-center text-brand-secondary">
                <Calendar className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Near Me Interiors Scheduler</h4>
                <p className="text-slate-400 text-[10px]">Avg. response duration: Under 2 hours</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                Select a consultation type to verify region availability and lock in your local SEO rights.
              </p>
              <button
                onClick={() => onOpenLead('Scheduler Widget')}
                className="w-full bg-brand-secondary hover:bg-brand-secondary/95 text-white font-bold py-3.5 rounded-lg text-xs cursor-pointer transition-all flex items-center justify-center gap-1.5 mt-4"
              >
                Configure Calendly slot
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
