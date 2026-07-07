'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, MapPin, Link2, FileText, Settings,
  TrendingUp, BarChart3, Star, Globe, ShoppingCart,
  Calendar, ChevronRight, ArrowUpRight, LucideIcon,
} from 'lucide-react';

/* ─── Types ─────────────────────────────────────────────────────────────── */
export interface CityItem    { slug: string; city: string; state?: string; }
export interface ServiceItem { id: string | number; slug: string; title: string; description?: string; }

interface Props {
  cities:      CityItem[];
  services:    ServiceItem[];
  basePath?:   string;
  onBookAudit?: (city: CityItem) => void;
  heading?:    string;
  subheading?: string;
  onClose?:    () => void;
}

/* ─── Icon map ───────────────────────────────────────────────────────────── */
interface IconCfg { Icon: LucideIcon; color: string; bg: string; }
const ICON_MAP: Array<{ keys: string[] } & IconCfg> = [
  { keys: ['audit','analysis'],       Icon: Search,       color: '#6366f1', bg: '#EEF2FF' },
  { keys: ['local'],                  Icon: MapPin,        color: '#f97316', bg: '#FFF7ED' },
  { keys: ['link','backlink'],        Icon: Link2,         color: '#8b5cf6', bg: '#F5F3FF' },
  { keys: ['content','blog','copy'],  Icon: FileText,      color: '#10b981', bg: '#ECFDF5' },
  { keys: ['technical','tech'],       Icon: Settings,      color: '#64748b', bg: '#F1F5F9' },
  { keys: ['ppc','ads','paid'],       Icon: TrendingUp,    color: '#ef4444', bg: '#FEF2F2' },
  { keys: ['analytic','report'],      Icon: BarChart3,     color: '#0ea5e9', bg: '#F0F9FF' },
  { keys: ['reputation','review'],    Icon: Star,          color: '#f59e0b', bg: '#FFFBEB' },
  { keys: ['global','international'], Icon: Globe,         color: '#14b8a6', bg: '#F0FDFA' },
  { keys: ['ecommerce','shop'],       Icon: ShoppingCart,  color: '#f97316', bg: '#FFF7ED' },
];
const DESC_MAP: Array<{ keys: string[]; desc: string }> = [
  { keys: ['audit','analysis'],       desc: 'Uncover what is holding back your rankings.' },
  { keys: ['local'],                  desc: 'Dominate Google Maps and local search.' },
  { keys: ['link','backlink'],        desc: 'High-authority backlinks from trusted sources.' },
  { keys: ['content','blog','copy'],  desc: 'Content that ranks and converts visitors.' },
  { keys: ['technical','tech'],       desc: 'Fix crawl errors, speed, and architecture.' },
  { keys: ['ppc','ads','paid'],       desc: 'Ad campaigns that deliver measurable ROI.' },
  { keys: ['analytic','report'],      desc: 'Clear dashboards showing what is working.' },
  { keys: ['reputation','review'],    desc: 'Build trust and control your brand perception.' },
  { keys: ['global','international'], desc: 'Expand reach across markets and languages.' },
  { keys: ['ecommerce','shop'],       desc: 'Drive qualified traffic to your product pages.' },
];

function getIcon(slug: string): IconCfg {
  const s = slug.toLowerCase();
  return ICON_MAP.find(c => c.keys.some(k => s.includes(k))) ?? ICON_MAP[0];
}
function getDesc(slug: string, existing?: string): string {
  if (existing) return existing;
  const s = slug.toLowerCase();
  return DESC_MAP.find(d => d.keys.some(k => s.includes(k)))?.desc ?? 'Expert strategies for your market.';
}

/* ─── Animations ─────────────────────────────────────────────────────────── */
const panelAnim = {
  initial:  { opacity: 0, x: 14 },
  animate:  { opacity: 1, x: 0, transition: { duration: 0.26, ease: [0.22,1,0.36,1] } },
  exit:     { opacity: 0, x: -10, transition: { duration: 0.16 } },
};
const gridAnim = {
  hidden:   {},
  visible:  { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
};
const cardAnim = {
  hidden:   { opacity: 0, y: 10 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.22,1,0.36,1] } },
};
const dropdownAnim = {
  initial:  { opacity: 0, y: 10, scale: 0.97 },
  animate:  { opacity: 1, y: 0,  scale: 1,  transition: { duration: 0.22, ease: [0.22,1,0.36,1] } },
  exit:     { opacity: 0, y: 8,  scale: 0.97, transition: { duration: 0.16 } },
};

/* ─── Service Card ───────────────────────────────────────────────────────── */
function ServiceCard({ service, city, basePath, onClose }: {
  service: ServiceItem; city: CityItem; basePath: string; onClose?: () => void;
}) {
  const { Icon, color, bg } = getIcon(service.slug);
  const desc = getDesc(service.slug, service.description);
  return (
    <motion.div variants={cardAnim}>
      <Link
        href={`${basePath}/${service.slug}/${city.slug}`}
        onClick={onClose}
        className="group flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-100
                   hover:border-slate-200 hover:shadow-sm hover:-translate-y-0.5
                   transition-all duration-200"
      >
        <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ring-1 ring-inset ring-black/[0.05]"
          style={{ background: bg }}>
          <Icon className="w-4 h-4" style={{ color }} strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[12px] font-bold text-slate-800 leading-snug truncate">
            {service.title.replace('for Interior Designers', '').trim()}
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed line-clamp-2">{desc}</p>
        </div>
        <ChevronRight className="shrink-0 w-3 h-3 text-slate-300 group-hover:text-slate-500 mt-0.5 transition-colors" />
      </Link>
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function CityServicesExplorer({
  cities,
  services,
  basePath    = '/services',
  onBookAudit,
  heading     = 'Services by City',
  subheading  = 'Select a city to explore our location-specific solutions.',
  onClose,
}: Props) {
  const [activeSlug, setActiveSlug] = useState(cities[0]?.slug ?? '');
  const activeCity = cities.find(c => c.slug === activeSlug) ?? cities[0];
  if (!activeCity) return null;

  return (
    <motion.div
      variants={dropdownAnim}
      initial="initial"
      animate="animate"
      exit="exit"
      /* Prevent parent's onMouseLeave from closing us */
      onMouseEnter={e => e.stopPropagation()}
      onMouseLeave={onClose}
      className="
        absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2
        w-[min(94vw,860px)]
        bg-white/98 backdrop-blur-2xl
        border border-slate-200/60
        rounded-2xl shadow-[0_20px_60px_rgba(15,23,64,0.16)]
        overflow-hidden z-50
      "
    >
      {/* ── Top header bar ── */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-slate-100">
        <div>
          <p className="text-[13px] font-extrabold text-slate-800">{heading}</p>
          <p className="text-[11px] text-slate-400 mt-0.5">{subheading}</p>
        </div>
        <Link
          href="/services"
          onClick={onClose}
          className="flex items-center gap-1 text-[11px] font-bold text-brand-secondary hover:underline shrink-0"
        >
          All services <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>

      {/* ── Body: city list + service panel ── */}
      <div className="flex min-h-0">

        {/* LEFT — city list */}
        <div className="w-[160px] shrink-0 bg-slate-50/80 border-r border-slate-100 p-2 flex flex-col gap-0.5 overflow-y-auto max-h-[420px]">
          <p className="px-2.5 pt-1 pb-2 text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
            Cities
          </p>
          {cities.map(c => {
            const active = c.slug === activeSlug;
            return (
              <button
                key={c.slug}
                onMouseEnter={() => setActiveSlug(c.slug)}
                onClick={() => setActiveSlug(c.slug)}
                className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-xl text-left text-[12.5px] font-semibold
                  transition-all duration-150 cursor-pointer
                  ${active
                    ? 'bg-brand-primary text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                  }`}
              >
                <span className={`shrink-0 w-1.5 h-1.5 rounded-full transition-colors ${active ? 'bg-blue-300' : 'bg-slate-300'}`} />
                <span className="truncate">{c.city}</span>
                {active && <ChevronRight className="ml-auto w-3 h-3 shrink-0 opacity-60" />}
              </button>
            );
          })}
        </div>

        {/* RIGHT — services panel */}
        <div className="flex-1 min-w-0 p-4 overflow-y-auto max-h-[420px] bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlug}
              variants={panelAnim}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col gap-4"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-[14px] font-extrabold text-slate-800 leading-tight">
                    Services in{' '}
                    <span className="text-brand-primary">{activeCity.city}</span>
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {services.length} specialist services available
                    {activeCity.state ? ` · ${activeCity.state}` : ''}
                  </p>
                </div>
                <button
                  onClick={() => { onBookAudit?.(activeCity); onClose?.(); }}
                  className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl
                             bg-brand-primary hover:bg-brand-primary/90 text-white
                             text-[11px] font-bold transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-3 h-3" />
                  Free Audit
                </button>
              </div>

              {/* Services grid */}
              <motion.div
                variants={gridAnim}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
              >
                {services.map(s => (
                  <ServiceCard
                    key={s.id}
                    service={s}
                    city={activeCity}
                    basePath={basePath}
                    onClose={onClose}
                  />
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Footer strip ── */}
      <div className="flex items-center justify-between gap-4 px-5 py-3 bg-slate-50/80 border-t border-slate-100">
        <p className="text-[11px] text-slate-400">
          We work exclusively with interior designers — <span className="font-bold text-slate-600">one studio per city.</span>
        </p>
        <Link
          href="/contact"
          onClick={onClose}
          className="flex items-center gap-1 text-[11px] font-bold text-brand-secondary hover:underline shrink-0"
        >
          Check availability <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    </motion.div>
  );
}