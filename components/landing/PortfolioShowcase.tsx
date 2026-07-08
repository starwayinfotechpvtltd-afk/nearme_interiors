// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { portfolioProjects } from '@/data/agencyData';

// export default function PortfolioShowcase() {
//   const [portfolioFilter, setPortfolioFilter] = useState<'all' | 'seo' | 'ads' | 'social' | 'web'>('all');

//   const filteredProjects = portfolioProjects.filter((project) => {
//     if (portfolioFilter === 'all') return true;
//     return project.category === portfolioFilter;
//   });

//   return (
//     <section className="py-20 bg-brand-bg" id="portfolio">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
//           <div>
//             <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-secondary mb-3">
//               Proven Track Record
//             </h2>
//             <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary">
//               Campaign Case Files & Visual Showcases
//             </h3>
//           </div>

//           {/* Filter buttons */}
//           <div className="flex flex-wrap gap-2 mt-6 md:mt-0 bg-white p-1 rounded-xl border border-slate-100 shadow-sm">
//             {(['all', 'seo', 'ads', 'social', 'web'] as const).map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => setPortfolioFilter(filter)}
//                 className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
//                   portfolioFilter === filter
//                     ? 'bg-brand-primary text-white'
//                     : 'text-brand-muted hover:text-brand-primary'
//                 }`}
//               >
//                 {filter.toUpperCase()}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <AnimatePresence mode="popLayout">
//             {filteredProjects.map((project) => (
//               <motion.div
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.3 }}
//                 key={project.id}
//                 className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
//               >
//                 <div>
//                   <div className="aspect-[4/3] w-full overflow-hidden relative">
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
//                     />
//                     <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-brand-primary text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow">
//                       {project.category.toUpperCase()}
//                     </span>
//                   </div>
//                   <div className="p-5">
//                     <p className="text-[10px] uppercase tracking-wider text-brand-muted font-semibold mb-1">
//                       {project.clientName}
//                     </p>
//                     <h4 className="font-heading font-bold text-base text-brand-primary mb-3">
//                       {project.title}
//                     </h4>
//                   </div>
//                 </div>

//                 <div className="px-5 pb-5 pt-3 border-t border-slate-50 bg-slate-50/50">
//                   <span className="block text-[10px] uppercase font-bold text-brand-muted tracking-wider">Campaign Outcome</span>
//                   <div className="flex items-baseline gap-2 mt-1">
//                     <span className="text-base font-extrabold text-brand-secondary">{project.metric}</span>
//                     <span className="text-xs text-brand-muted">{project.metricLabel}</span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const FILTERS = [
  { key: 'all',    label: 'All Work' },
  { key: 'seo',    label: 'SEO'      },
  { key: 'ads',    label: 'Paid Ads' },
  { key: 'social', label: 'Social'   },
  { key: 'web',    label: 'Web'      },
] as const;
type Filter = typeof FILTERS[number]['key'];

/*
  6-card bento — two rows of 12 cols each:
  Row 1: [tall 4] [small 4] [small 4]   ← 4+4+4 = 12 ✓  (tall spans row1+row2)
  Row 2: [tall…] [wide  8          ]    ← 4+8   = 12 ✓
*/
const ALL_PROJECTS = [
  {
    id: '1', category: 'seo', clientName: 'Arjun Interiors, Mumbai',
    title: 'Ranked #1 for "Luxury Interior Designer Mumbai" in 4 Months',
    metric: '+420%', metricLabel: 'Organic Traffic',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    size: 'tall',   // col-span-4 row-span-2
  },
  {
    id: '2', category: 'ads', clientName: 'Studio Veda, Bangalore',
    title: 'Meta Ads Delivered 38 Qualified Leads in 30 Days',
    metric: '₹2.1Cr', metricLabel: 'Pipeline Generated',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    size: 'small',  // col-span-4 row-span-1
  },
  {
    id: '3', category: 'web', clientName: 'Kairos Design Studio, Delhi',
    title: 'Conversion Site Rebuilt — Inquiry Rate Tripled',
    metric: '3.8×', metricLabel: 'Inquiry Rate',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80',
    size: 'small',  // col-span-4 row-span-1
  },
  {
    id: '4', category: 'social', clientName: 'The Arch Studio, Pune',
    title: 'Instagram Grew from 800 to 28K Followers in 6 Months',
    metric: '28K', metricLabel: 'Followers',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
    size: 'wide',   // col-span-8 row-span-1
  },
  {
    id: '5', category: 'seo', clientName: 'Luxe Interiors, Hyderabad',
    title: 'Blog SEO Generated 1,200 Monthly Inbound Leads',
    metric: '₹48Cr', metricLabel: 'Revenue Attributed',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80',
    size: 'small',  // col-span-4 row-span-1
  },
  {
    id: '6', category: 'ads', clientName: 'Marble & Oak, Chennai',
    title: 'Google Ads Delivered 9× ROAS on ₹3L Monthly Budget',
    metric: '9×', metricLabel: 'ROAS',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80',
    size: 'wide',   // col-span-8 row-span-1
  },
];

export default function PortfolioShowcase() {
  const [filter, setFilter] = useState<Filter>('all');

  const projects = ALL_PROJECTS.filter((p) =>
    filter === 'all' ? true : p.category === filter
  );

  return (
    <section className="py-24 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-14">
          <div className="max-w-lg">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">
              Proven Track Record
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
              Real Campaigns.<br />
              <span className="text-brand-secondary italic">Measurable Results.</span>
            </h2>
          </div>

          {/* Animated filter strip */}
          <div className="flex items-center gap-1 bg-[#F4F4F2] p-1 rounded-full self-start sm:self-end">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className="relative px-2 sm:px-4 py-2 rounded-full text-[12px] font-bold transition-colors duration-150 cursor-pointer"
              >
                {filter === f.key && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-brand-primary"
                    style={{ zIndex: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${filter === f.key ? 'text-white' : 'text-brand-muted hover:text-brand-primary'}`}>
                  {f.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Bento grid ── */}
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-12 gap-4" style={{ gridTemplateRows: 'repeat(2, 260px)' }}>
            {projects.map((project, idx) => {
              /*
                Bento slot assignment:
                size='tall'  → col-span-4 row-span-2  (portrait)
                size='wide'  → col-span-8 row-span-1  (landscape)
                size='small' → col-span-4 row-span-1  (square-ish)

                Pattern for 9 cards fills a clean 3-row × 12-col grid:
                Row 1: tall(4) | wide(8)
                Row 2: tall continues | small(4) + small(4)
                Row 3: wide(8) | tall(4)
                Row 4: small(4) + small(4) | tall continues
                ...etc
              */
              const colSpan =
                project.size === 'tall'  ? 'lg:col-span-4' :
                project.size === 'wide'  ? 'lg:col-span-8' :
                                           'lg:col-span-4';

              const rowSpan = project.size === 'tall'  ? 'lg:row-span-2' : 'lg:row-span-1';
              const isLarge = project.size === 'tall'  || project.size === 'wide';

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className={`
                    group relative overflow-hidden rounded-3xl cursor-pointer
                    col-span-12 ${colSpan} ${rowSpan}
                    ${project.size === 'tall' ? 'h-full' : 'h-full'}
                  `}
                >
                  {/* Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/92 via-[#060D1A]/30 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/12 backdrop-blur-sm text-white border border-white/15">
                      {project.category}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-white/10 backdrop-blur border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white transition-all duration-300">
                    <ArrowUpRight className="h-4 w-4 text-white group-hover:text-brand-primary transition-colors" />
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                    {/* Metric — big on large, compact on small */}
                    {isLarge ? (
                      <div className="flex items-end gap-2 mb-2">
                        <span className="text-4xl sm:text-5xl font-extrabold text-white leading-none tracking-tight">
                          {project.metric}
                        </span>
                        <span className="text-white/50 text-[11px] font-semibold uppercase tracking-wider mb-1 leading-tight">
                          {project.metricLabel}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 mb-2">
                        <TrendingUp className="h-3 w-3 text-brand-secondary shrink-0" />
                        <span className="text-brand-secondary text-[13px] font-extrabold">{project.metric}</span>
                        <span className="text-white/40 text-[11px]">{project.metricLabel}</span>
                      </div>
                    )}

                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">
                      {project.clientName}
                    </p>
                    <h3 className={`font-heading font-extrabold text-white leading-snug ${isLarge ? 'text-lg sm:text-xl' : 'text-[13px]'}`}>
                      {project.title}
                    </h3>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom CTA ── */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-10 border-t border-slate-100">
          <div>
            <p className="font-bold text-brand-primary text-[15px]">Want results like these for your studio?</p>
            <p className="text-brand-muted text-[13px] mt-1">Every metric is real. No projections, no stock numbers.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-[13px] transition-colors shadow-md shadow-brand-primary/20"
          >
            Start your campaign
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}