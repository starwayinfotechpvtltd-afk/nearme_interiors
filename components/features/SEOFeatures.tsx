'use client';

import React, { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  TooltipContentProps,
} from 'recharts';

// ─── Types ───────────────────────────────────────────────────────────────────

interface RankingPoint {
  time: string;
  rank: number;
}

interface KeywordVolume {
  kw: string;
  vol: number;
}

interface SeoScoreSegment {
  name: string;
  value: number;
  color: string;
}

interface TopKeyword {
  name: string;
  pos: number;
  change: string;
}

// ─── Static Data ─────────────────────────────────────────────────────────────

const rankingData: RankingPoint[] = [
  { time: '10:00', rank: 14 },
  { time: '12:00', rank: 11 },
  { time: '14:00', rank: 9 },
  { time: '16:00', rank: 12 },
  { time: '18:00', rank: 7 },
  { time: '20:00', rank: 5 },
  { time: '22:00', rank: 3 },
];

const keywordData: KeywordVolume[] = [
  { kw: 'seo agency', vol: 4800 },
  { kw: 'local seo', vol: 3200 },
  { kw: 'keyword tool', vol: 2900 },
  { kw: 'on-page seo', vol: 2100 },
  { kw: 'link building', vol: 1800 },
  { kw: 'rank tracker', vol: 1400 },
];

const seoScore: SeoScoreSegment[] = [
  { name: 'On-Page', value: 38, color: '#6366f1' },
  { name: 'Backlinks', value: 26, color: '#8b5cf6' },
  { name: 'Technical', value: 22, color: '#3b82f6' },
  { name: 'Content', value: 14, color: '#22d3ee' },
];

const topKeywords: TopKeyword[] = [
  { name: 'seo agency near me', pos: 1, change: '+3' },
  { name: 'best keyword tracker', pos: 2, change: '+1' },
  { name: 'local seo optimization', pos: 4, change: '-1' },
  { name: 'on-page seo checker', pos: 6, change: '+5' },
  { name: 'backlink audit tool', pos: 9, change: '+2' },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1300): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }
    let start: number | null = null;
    let frame: number;
    const tick = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
}

// ─── Tooltip Components ───────────────────────────────────────────────────────

function RankTooltip({ active, payload, label }: TooltipContentProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#1e2340] border border-white/10 rounded-xl px-4 py-2 text-xs text-slate-200">
      <div className="text-slate-500 mb-1">{label}</div>
      <div className="font-bold text-violet-400">Rank #{payload[0].value}</div>
    </div>
  );
}

function BarTooltip({ active, payload, label }: TooltipContentProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#1e2340] border border-white/10 rounded-xl px-4 py-2 text-xs text-slate-200">
      <div className="text-slate-500 mb-1">{label}</div>
      <div className="font-bold text-indigo-400">
        {Number(payload[0].value).toLocaleString()} searches/mo
      </div>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function TrendArrow() {
  return (
    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
      <polyline
        points="1,9 5,4 8,6 11,2"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PulseDot() {
  return (
    <span className="inline-block w-[6px] h-[6px] rounded-full bg-emerald-500 animate-pulse" />
  );
}

function DotMenu() {
  return (
    <div className="flex gap-[3px]">
      {[0, 1, 2].map((i) => (
        <div key={i} className="w-[4px] h-[4px] rounded-full bg-slate-700" />
      ))}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function SEOFeatures() {
  const daScore = useCountUp(72);

  return (
    <section className="bg-[#080b18] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-[11px] font-semibold text-violet-400 tracking-widest uppercase mb-5">
            ✦ Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-[1.1] mb-4">
            All you need to rank on Google
          </h2>
          <p className="text-slate-500 text-[15px] max-w-md mx-auto leading-relaxed">
            Track keyword positions, analyse backlinks, and make data-driven decisions — all in one SEO dashboard.
          </p>
        </div>

        {/* ── Dashboard Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.75fr] gap-4">

          {/* ── Card 1: Domain Authority (top-left) ── */}
          <div className="relative bg-[#0f1326] border border-white/[0.07] rounded-[20px] p-6 overflow-hidden group hover:border-violet-500/30 hover:-translate-y-0.5 transition-all duration-300">
            {/* Glow spots */}
            <div className="absolute -top-16 -right-10 w-48 h-48 rounded-full bg-violet-700 blur-[60px] opacity-[0.12] pointer-events-none" />
            <div className="absolute -bottom-10 -left-5 w-36 h-36 rounded-full bg-blue-600 blur-[60px] opacity-[0.10] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] uppercase font-bold tracking-[0.08em] text-slate-500">
                  Domain Authority
                </span>
                <DotMenu />
              </div>

              <div className="text-[40px] font-extrabold text-slate-100 leading-none tracking-[-0.03em] my-3">
                {daScore}
              </div>

              <div className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                <TrendArrow />
                +4.2 this month
              </div>

              <div className="mt-5 pt-5 border-t border-white/[0.06]">
                <div className="text-sm font-bold text-slate-200 mb-1.5">
                  Track Authority at a Glance
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  Monitor domain strength and link equity in real time as you build high-quality backlinks.
                </div>
              </div>
            </div>
          </div>

          {/* ── Card 2: Live Rankings Area Chart (top-right) ── */}
          <div className="relative bg-[#0f1326] border border-white/[0.07] rounded-[20px] p-6 overflow-hidden group hover:border-violet-500/30 hover:-translate-y-0.5 transition-all duration-300">
            <div className="absolute -bottom-10 -left-5 w-40 h-40 rounded-full bg-blue-600 blur-[60px] opacity-[0.10] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-1">
                <div>
                  <div className="text-sm font-bold text-slate-200 mb-1">
                    Live Keyword Rankings
                  </div>
                  <div className="text-xs text-slate-500 leading-relaxed max-w-sm">
                    Watch your rankings climb in real time as we optimise your pages and build authority.
                  </div>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <div className="text-2xl font-extrabold text-slate-100 leading-none">#3</div>
                  <div className="flex items-center gap-1.5 justify-end mt-1">
                    <PulseDot />
                    <span className="text-[10px] font-bold uppercase tracking-[0.06em] text-emerald-400">
                      Live
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-[145px] mt-3">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={rankingData} margin={{ top: 4, right: 0, left: -26, bottom: 0 }}>
                    <defs>
                      <linearGradient id="rankGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="time"
                      tick={{ fill: '#475569', fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      reversed
                      tick={{ fill: '#475569', fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                      domain={[1, 16]}
                      tickFormatter={(v) => `#${v}`}
                    />
                    <Tooltip content={RankTooltip} />
                    <Area
                      type="monotone"
                      dataKey="rank"
                      stroke="#818cf8"
                      strokeWidth={2.5}
                      fill="url(#rankGrad)"
                      dot={false}
                      activeDot={{ r: 5, fill: '#a78bfa', strokeWidth: 0 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* ── Card 3: Keyword Volume Bar Chart (bottom-left) ── */}
          <div className="relative bg-[#0f1326] border border-white/[0.07] rounded-[20px] p-6 overflow-hidden group hover:border-violet-500/30 hover:-translate-y-0.5 transition-all duration-300">
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-1">
                <div>
                  <div className="text-sm font-bold text-slate-200 mb-1">
                    Top Keyword Opportunities
                  </div>
                  <div className="text-xs text-slate-500 leading-relaxed max-w-xs">
                    Uncover high-volume keywords your competitors rank for — and you don&apos;t yet.
                  </div>
                </div>
                <button className="text-[10px] text-slate-500 bg-white/[0.05] border border-white/[0.08] rounded-lg px-2.5 py-1 font-semibold shrink-0 ml-4 cursor-pointer hover:bg-white/[0.08] transition-colors">
                  Last 6 Months ▾
                </button>
              </div>

              <div className="h-[175px] mt-3">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={keywordData}
                    margin={{ top: 0, right: 0, left: -26, bottom: 0 }}
                    barSize={26}
                  >
                    <defs>
                      <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#818cf8" stopOpacity={1} />
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity={0.6} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
                    <XAxis
                      dataKey="kw"
                      tick={{ fill: '#475569', fontSize: 9 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: '#475569', fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) =>
                        v >= 1000 ? `${(v / 1000).toFixed(1)}k` : String(v)
                      }
                    />
                    <Tooltip content={BarTooltip} />
                    <Bar dataKey="vol" fill="url(#barGrad)" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* ── Card 4: SEO Score + Top Keywords (bottom-right) ── */}
          <div className="relative bg-[#0f1326] border border-white/[0.07] rounded-[20px] p-6 overflow-hidden group hover:border-violet-500/30 hover:-translate-y-0.5 transition-all duration-300">
            <div className="absolute -top-14 -right-10 w-44 h-44 rounded-full bg-violet-700 blur-[60px] opacity-[0.10] pointer-events-none" />

            <div className="relative z-10">
              {/* Platform stat header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase font-bold tracking-[0.08em] text-slate-500">
                  SEO Health Score
                </span>
                <span className="text-indigo-400 text-xs font-bold cursor-pointer">↗</span>
              </div>

              {/* Donut + Legend */}
              <div className="flex items-center gap-5">
                {/* Donut */}
                <div className="relative shrink-0">
                  <PieChart width={110} height={110}>
                    <Pie
                      data={seoScore}
                      cx={50}
                      cy={50}
                      innerRadius={34}
                      outerRadius={50}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                      strokeWidth={0}
                    >
                      {seoScore.map((s, i) => (
                        <Cell key={i} fill={s.color} />
                      ))}
                    </Pie>
                  </PieChart>
                  {/* Center label */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-2xl font-extrabold text-slate-100 leading-none">86</span>
                    <span className="text-[9px] uppercase tracking-[0.06em] text-slate-500 mt-0.5">
                      Score
                    </span>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex flex-col gap-2 flex-1">
                  {seoScore.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                      <div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: s.color }}
                      />
                      <span>{s.name}</span>
                      <span className="ml-auto font-bold text-slate-200">{s.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top keywords list */}
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <div className="text-xs font-bold text-slate-200 mb-3">Top Ranking Keywords</div>
                <div className="space-y-0">
                  {topKeywords.map((k, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[1fr_auto_auto] gap-x-3 items-center py-2 border-b border-white/[0.05] last:border-0 text-[11px]"
                    >
                      <span className="text-slate-400 truncate">{k.name}</span>
                      <span className="font-bold text-slate-200 text-right">#{k.pos}</span>
                      <span
                        className={`font-semibold text-right w-9 ${
                          k.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'
                        }`}
                      >
                        {k.change}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <div className="text-sm font-bold text-slate-200 mb-1">
                  SEO Performance in One View
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  Track all key signals and trends from a single dashboard.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
