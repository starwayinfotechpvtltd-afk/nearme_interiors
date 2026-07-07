'use client';

import React from 'react';
import { Target, TrendingUp, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Smart keyword targeting',
    description:
      'Build content around keywords that actually convert. Prioritise by search intent, volume, and competitive gap — never guess what to write next.',
  },
  {
    icon: TrendingUp,
    title: 'Real-time rank tracking',
    description:
      'See every keyword position update as it happens. Get instant alerts when rankings shift so your team can act fast, not react late.',
  },
];

const fullFeature = {
  icon: BarChart3,
  title: 'Full-funnel performance clarity',
  description:
    'Connect organic traffic to actual revenue. See which pages, keywords, and campaigns drive conversions — so you know exactly where to focus your SEO budget and cut what isn\'t pulling its weight. Teams can quickly understand current status, identify areas that need attention, and stay focused on what matters most.',
};

export default function SEOClarity() {
  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: '#F6F3EE',
        backgroundImage: 'radial-gradient(circle, #C8C0B4 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight leading-[1.15] mb-3">
            Rank higher with complete clarity
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-500 max-w-md mx-auto leading-relaxed">
            A single platform that helps marketing teams research keywords, track rankings,
            and turn organic search into measurable revenue.
          </p>
        </div>

        {/* ── Main Card ── */}
        <div className="bg-white rounded-[20px] border border-slate-200/80 flex flex-col md:flex-row overflow-hidden min-h-[360px] shadow-sm">

          {/* ── Left: Image Panel ── */}
          <div
            className="relative w-full md:w-[38%] shrink-0 min-h-[240px] md:min-h-0 overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #D97B3A 0%, #A8521F 55%, #7A3810 100%)' }}
          >
            {/* Abstract decorative circles */}
            <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/[0.07] pointer-events-none" />
            <div className="absolute -bottom-6 -right-8 w-36 h-36 rounded-full bg-white/[0.05] pointer-events-none" />

            {/* Globe graphic */}
            <div className="absolute inset-0 flex justify-center pt-6 opacity-[0.15] pointer-events-none">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="58" stroke="white" strokeWidth="1.5" />
                <circle cx="60" cy="60" r="40" stroke="white" strokeWidth="1" />
                <line x1="60" y1="2" x2="60" y2="118" stroke="white" strokeWidth="0.8" />
                <line x1="2" y1="60" x2="118" y2="60" stroke="white" strokeWidth="0.8" />
              </svg>
            </div>

            {/* Bars */}
            <div className="absolute bottom-24 left-6 flex items-end gap-[7px] opacity-30 pointer-events-none">
              {[32, 52, 44, 64, 80, 68, 90].map((h, i) => (
                <span
                  key={i}
                  className="block w-3 rounded-t-[3px] bg-white"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>

            {/* Big stat */}
            <div className="absolute inset-0 flex items-center justify-center pb-16 pointer-events-none">
              <div className="text-center text-white/90">
                <div className="text-[11px] font-medium uppercase tracking-widest opacity-70 mb-1.5">
                  Organic Traffic
                </div>
                <div className="text-5xl font-medium leading-none tracking-tight">+284%</div>
                <div className="text-xs opacity-60 mt-1.5">vs. last quarter</div>
              </div>
            </div>

            {/* Bottom overlay fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.50), transparent)' }}
            />

            {/* Person badge */}
            <div className="absolute bottom-4 left-3 right-3 bg-white rounded-xl px-3 py-2.5 flex items-center gap-2.5 shadow-md">
              <div
                className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-medium"
                style={{ background: 'linear-gradient(135deg, #E8923A, #C76A2A)' }}
              >
                EC
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-slate-900 truncate">Emma Clarke</div>
                <div className="text-[11px] text-slate-400 mt-0.5">SEO Campaign Manager</div>
              </div>
              <div className="shrink-0 text-[10px] font-medium text-orange-600 bg-orange-50 rounded-md px-2 py-1 whitespace-nowrap">
                Audit: 28 Jan 2026
              </div>
            </div>
          </div>

          {/* ── Right: Features ── */}
          <div className="flex-1 flex flex-col justify-between p-7 sm:p-8 gap-5">

            {/* Top row: 2 features side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-5 border-b border-slate-100">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title}>
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center mb-3">
                    <Icon className="w-[18px] h-[18px] text-orange-500" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-medium text-slate-900 mb-1.5">{title}</h3>
                  <p className="text-[12.5px] text-slate-500 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            {/* Bottom: 1 full-width feature */}
            <div>
              <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center mb-3">
                <fullFeature.icon className="w-[18px] h-[18px] text-orange-500" strokeWidth={1.75} />
              </div>
              <h3 className="text-[15px] font-medium text-slate-900 mb-1.5">{fullFeature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xl">{fullFeature.description}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}