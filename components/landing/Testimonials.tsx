import React from 'react';
import { Sparkles } from 'lucide-react';
import { testimonialsData } from '@/data/agencyData';

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-secondary mb-3">
            Elite Endorsements
          </h2>
          <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary">
            Trusted by Leading Architects & Designers
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white/70 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-brand-primary text-sm sm:text-base italic leading-relaxed">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-4 border-t border-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.avatar} alt={t.author} className="h-12 w-12 rounded-full object-cover shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-primary text-sm">{t.author}</h4>
                  <p className="text-brand-muted text-xs font-semibold">
                    {t.role}, {t.company} — {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
