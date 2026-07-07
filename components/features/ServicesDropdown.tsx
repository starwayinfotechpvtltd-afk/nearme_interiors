'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import {
  Search,
  MapPin,
  FileText,
  Link2,
  Settings,
  TrendingUp,
  BarChart3,
  Globe,
  ShoppingCart,
  Star,
  Zap,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ServiceItem {
  id: string | number;
  slug: string;
  title: string;
  description?: string;
}

interface ServicesDropdownProps {
  services: ServiceItem[];
  onClose: () => void;
}

// ─── Icon & description mapping (keyed by slug fragment) ─────────────────────

const iconMap: Array<{ keys: string[]; Icon: LucideIcon; color: string; bg: string }> = [
  { keys: ['audit', 'analysis'],        Icon: Search,      color: '#6366f1', bg: '#EEF2FF' },
  { keys: ['local'],                    Icon: MapPin,       color: '#f59e0b', bg: '#FFFBEB' },
  { keys: ['content', 'blog', 'copy'],  Icon: FileText,     color: '#10b981', bg: '#ECFDF5' },
  { keys: ['link', 'backlink'],         Icon: Link2,        color: '#8b5cf6', bg: '#F5F3FF' },
  { keys: ['technical', 'tech'],        Icon: Settings,     color: '#64748b', bg: '#F1F5F9' },
  { keys: ['ppc', 'ads', 'paid'],       Icon: TrendingUp,   color: '#ef4444', bg: '#FEF2F2' },
  { keys: ['analytic', 'report'],       Icon: BarChart3,    color: '#0ea5e9', bg: '#F0F9FF' },
  { keys: ['global', 'international'],  Icon: Globe,        color: '#14b8a6', bg: '#F0FDFA' },
  { keys: ['ecommerce', 'shop'],        Icon: ShoppingCart, color: '#f97316', bg: '#FFF7ED' },
  { keys: ['reputation', 'review'],     Icon: Star,         color: '#fbbf24', bg: '#FFFBEB' },
  { keys: ['speed', 'performance'],     Icon: Zap,          color: '#f59e0b', bg: '#FFFBEB' },
];

const descriptionMap: Array<{ keys: string[]; desc: string }> = [
  { keys: ['audit', 'analysis'],        desc: 'Identify and fix what\'s holding back your rankings.' },
  { keys: ['local'],                    desc: 'Dominate Google Maps and local search results.' },
  { keys: ['content', 'blog', 'copy'],  desc: 'Content that ranks and turns visitors into clients.' },
  { keys: ['link', 'backlink'],         desc: 'High-authority links from vetted, relevant sources.' },
  { keys: ['technical', 'tech'],        desc: 'Fix crawl errors, speed, and site architecture.' },
  { keys: ['ppc', 'ads', 'paid'],       desc: 'Ad campaigns that deliver measurable ROI.' },
  { keys: ['analytic', 'report'],       desc: 'Clear dashboards showing what\'s actually working.' },
  { keys: ['global', 'international'],  desc: 'Expand organic reach across markets and languages.' },
  { keys: ['ecommerce', 'shop'],        desc: 'Drive qualified traffic to your product pages.' },
  { keys: ['reputation', 'review'],     desc: 'Build trust and control your online reputation.' },
  { keys: ['speed', 'performance'],     desc: 'Faster pages = better rankings and conversions.' },
];

function resolveIcon(slug: string) {
  const lower = slug.toLowerCase();
  for (const entry of iconMap) {
    if (entry.keys.some((k) => lower.includes(k))) return entry;
  }
  return { Icon: Search, color: '#6366f1', bg: '#EEF2FF' };
}

function resolveDescription(slug: string, existing?: string) {
  if (existing) return existing;
  const lower = slug.toLowerCase();
  for (const entry of descriptionMap) {
    if (entry.keys.some((k) => lower.includes(k))) return entry.desc;
  }
  return 'Expert SEO strategies tailored to your business.';
}

// ─── Animation variants ───────────────────────────────────────────────────────

const menuVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0, y: 8, scale: 0.97,
    transition: { duration: 0.15, ease: [0.22, 1, 0.36, 1] },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesDropdown({ services, onClose }: ServicesDropdownProps) {
  // Cap visible items so the dropdown doesn't grow too tall
  const visible = services.slice(0, 8);
  const half    = Math.ceil(visible.length / 2);
  const col1    = visible.slice(0, half);
  const col2    = visible.slice(half);

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 z-50
                 bg-white border border-slate-100 rounded-2xl
                 shadow-[0_24px_60px_-8px_rgba(15,23,64,0.18),0_0_0_1px_rgba(255,255,255,0.9)_inset]
                 overflow-hidden flex"
      style={{ width: 800, minWidth: 480 }}
      // Keep dropdown open when cursor moves from nav item into the panel
      onMouseLeave={onClose}
    >
      {/* ── Top shimmer ── */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent pointer-events-none z-10" />

      {/* ── LEFT: service list ── */}
      <div className="flex-1 p-4">
        <p className="px-2 pb-3 text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
          Our Services
        </p>

        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-1"
        >
          {[col1, col2].map((col, ci) =>
            col.map((service) => {
              const { Icon, color, bg } = resolveIcon(service.slug);
              const desc = resolveDescription(service.slug, service.description);

              return (
                <motion.div key={service.id} variants={itemVariants}>
                  <Link
                    href={`/${service.slug}`}
                    onClick={onClose}
                    className="group flex items-start gap-3 p-2.5 rounded-xl
                               hover:bg-slate-50 transition-colors duration-150"
                  >
                    {/* Icon tile */}
                    <div
                      className="shrink-0 mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center
                                 ring-1 ring-inset ring-black/[0.06] transition-transform duration-200
                                 group-hover:scale-105"
                      style={{ background: bg }}
                    >
                      <Icon
                        className="w-[15px] h-[15px]"
                        style={{ color }}
                        strokeWidth={1.75}
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-slate-800
                                   group-hover:text-slate-900 leading-snug truncate">
                        {service.title}
                      </p>
                      <p className="text-[11.5px] text-slate-400 leading-relaxed mt-0.5 line-clamp-2">
                        {desc}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })
          )}
        </motion.div>

        {/* View all */}
        <div className="mt-3 pt-3 border-t border-slate-100 px-2">
          <Link
            href="/services"
            onClick={onClose}
            className="group inline-flex items-center gap-1.5 text-[12px] font-semibold
                       text-slate-500 hover:text-brand-secondary transition-colors duration-150"
          >
            View all services
            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* ── RIGHT: featured promo panel ── */}
      <div
        className="w-[220px] shrink-0 m-3 rounded-xl overflow-hidden flex flex-col justify-between p-5 relative"
        style={{ background: 'linear-gradient(145deg, #0f172a 0%, #1e1b4b 100%)' }}
      >
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Mini dashboard mockup */}
        <div className="relative z-10 mb-4">
          <div className="bg-white/[0.08] border border-white/[0.1] rounded-lg p-3 space-y-2">
            {/* Bars */}
            <div className="flex items-end gap-1 h-10">
              {[35, 55, 42, 70, 60, 82, 74].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 5 || i === 6
                      ? 'rgba(129,140,248,0.9)'
                      : 'rgba(255,255,255,0.18)',
                  }}
                />
              ))}
            </div>
            {/* Row of pills */}
            <div className="flex gap-1.5 flex-wrap">
              {['#1 ranking', '+47% traffic', '3.2× ROI'].map((label) => (
                <span
                  key={label}
                  className="text-[9px] font-semibold text-indigo-200 bg-indigo-500/20
                             border border-indigo-400/20 rounded-full px-2 py-0.5 whitespace-nowrap"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="relative z-10">
          <p className="text-[13px] font-bold text-white leading-snug mb-1.5">
            Master every aspect of SEO
          </p>
          <p className="text-[11px] text-white/55 leading-relaxed mb-4">
            Step-by-step strategies to help your business rank higher and drive more organic traffic.
          </p>
          <Link
            href="/services"
            onClick={onClose}
            className="group inline-flex items-center gap-1.5 text-[11px] font-semibold
                       text-indigo-300 hover:text-indigo-200 transition-colors duration-150"
          >
            Explore all services
            <ArrowRight className="w-3 h-3 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
