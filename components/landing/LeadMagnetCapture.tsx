'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LeadMagnetCapture() {
  const [lmName, setLmName] = useState('');
  const [lmEmail, setLmEmail] = useState('');
  const [lmPhone, setLmPhone] = useState('');
  const [lmSuccess, setLmSuccess] = useState(false);

  const handleLeadMagnetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lmName || !lmEmail) return;
    setLmSuccess(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-brand-primary text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          {/* Background Blob */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-secondary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

          <div className="lg:col-span-7 space-y-4 relative z-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-secondary">
              Free Downloadable Asset
            </span>
            <h3 className="font-heading text-3xl font-extrabold leading-tight">
              The 7-Figure Interior Design Studio Growth Playbook
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Uncover the exact local search filters, portfolio layout guidelines, and Instagram Reels templates that our agency uses to scale design firms.
            </p>
          </div>

          <div className="lg:col-span-5 relative z-10">
            {!lmSuccess ? (
              <form onSubmit={handleLeadMagnetSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={lmName}
                  onChange={(e) => setLmName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg py-3 px-4 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-secondary"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={lmEmail}
                  onChange={(e) => setLmEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg py-3 px-4 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-secondary"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  value={lmPhone}
                  onChange={(e) => setLmPhone(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg py-3 px-4 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-secondary"
                />
                <Button
                  type="submit"
                  className="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold py-3.5 rounded-lg text-xs cursor-pointer shadow-md"
                >
                  Download Playbook PDF
                </Button>
              </form>
            ) : (
              <div className="text-center p-4 bg-slate-900/60 backdrop-blur border border-slate-800 rounded-2xl">
                <Check className="h-10 w-10 text-green-500 mx-auto mb-3" />
                <h4 className="font-heading font-bold text-sm">Download Link Sent!</h4>
                <p className="text-xs text-slate-400 mt-2">
                  Check your inbox at <span className="font-semibold text-white">{lmEmail}</span> for your copy.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
