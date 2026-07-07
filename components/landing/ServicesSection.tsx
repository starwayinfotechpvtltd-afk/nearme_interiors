// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { ChevronRight, Check, ArrowUpRight, Search, Percent, Users, Layout, MapPin } from 'lucide-react';
// import { InstagramIcon } from '@/components/ui/SocialIcons';
// import { servicesData } from '@/data/agencyData';

// const iconMap: Record<string, React.ReactNode> = {
//   Search: <Search className="h-6 w-6" />,
//   Percent: <Percent className="h-6 w-6" />,
//   Instagram: <InstagramIcon className="h-6 w-6" />,
//   Users: <Users className="h-6 w-6" />,
//   Layout: <Layout className="h-6 w-6" />,
//   MapPin: <MapPin className="h-6 w-6" />
// };

// interface ServicesSectionProps {
//   onOpenLead: (source: string) => void;
// }

// export default function ServicesSection({ onOpenLead }: ServicesSectionProps) {
//   const [activeServiceTab, setActiveServiceTab] = useState('seo');

//   return (
//     <section className="py-20 bg-white" id="services">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-secondary mb-3">
//             Services Portfolio
//           </h2>
//           <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary">
//             Omnichannel Architecture for Digital Domination
//           </h3>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
//           {/* Left selector */}
//           <div className="lg:col-span-4 space-y-2">
//             {servicesData.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => setActiveServiceTab(service.id)}
//                 className={`w-full text-left p-4 rounded-xl font-semibold flex items-center justify-between transition-all cursor-pointer ${
//                   activeServiceTab === service.id
//                     ? 'bg-brand-primary text-white shadow-lg'
//                     : 'bg-brand-bg hover:bg-slate-100 text-brand-primary'
//                 }`}
//               >
//                 <span className="flex items-center gap-3 text-sm sm:text-base">
//                   {iconMap[service.iconName]}
//                   {service.title.replace('for Interior Designers', '')}
//                 </span>
//                 <ChevronRight className="h-4 w-4" />
//               </button>
//             ))}
//           </div>

//           {/* Right details */}
//           <div className="lg:col-span-8 bg-brand-bg border border-slate-100 p-6 sm:p-10 rounded-2xl min-h-[400px] flex flex-col justify-between">
//             {(() => {
//               const current = servicesData.find((s) => s.id === activeServiceTab) || servicesData[0];
//               return (
//                 <div className="space-y-6">
//                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-semibold">
//                     Featured service
//                   </div>
//                   <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-primary">
//                     {current.title}
//                   </h3>
//                   <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
//                     {current.longDescription}
//                   </p>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
//                     {current.features.map((feat, idx) => (
//                       <div key={idx} className="flex items-start gap-2.5">
//                         <Check className="h-4 w-4 text-brand-secondary mt-1 shrink-0" />
//                         <span className="text-brand-primary text-xs sm:text-sm font-semibold">{feat}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="border-t border-slate-200/60 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
//                     <div>
//                       <span className="block text-xs text-brand-muted font-semibold uppercase tracking-wider">{current.stats.label}</span>
//                       <span className="block text-3xl font-extrabold text-brand-primary mt-1">{current.stats.value}</span>
//                     </div>
//                     <div className="flex gap-4">
//                       <button
//                         onClick={() => onOpenLead(`Service Tab: ${current.title}`)}
//                         className="px-6 py-3 bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold rounded-lg text-xs cursor-pointer transition-colors shadow-md"
//                       >
//                         Inquire about this
//                       </button>
//                       <Link
//                         href={`/${current.slug}`}
//                         className="px-6 py-3 border border-slate-200 hover:border-slate-300 bg-white text-brand-primary font-bold rounded-lg text-xs text-center flex items-center gap-1.5 transition-colors"
//                       >
//                         View service specs
//                         <ArrowUpRight className="h-3.5 w-3.5" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })()}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowUpRight, Search, Percent, Users, Layout, MapPin, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/SocialIcons';
import { servicesData } from '@/data/agencyData';

const iconMap: Record<string, React.ReactNode> = {
  Search:    <Search    className="h-5 w-5" />,
  Percent:   <Percent   className="h-5 w-5" />,
  Instagram: <InstagramIcon className="h-5 w-5" />,
  Users:     <Users     className="h-5 w-5" />,
  Layout:    <Layout    className="h-5 w-5" />,
  MapPin:    <MapPin    className="h-5 w-5" />,
};

/* Unsplash images — one per service slot */
const serviceImages = [
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
];

interface ServicesSectionProps {
  onOpenLead: (source: string) => void;
}

export default function ServicesSection({ onOpenLead }: ServicesSectionProps) {
  const [activeId, setActiveId] = useState(servicesData[0].id);
  const activeIdx = servicesData.findIndex((s) => s.id === activeId);
  const current   = servicesData[activeIdx] || servicesData[0];

  return (
    <section className="py-20 bg-[#F4F4F2]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section heading ── */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary tracking-tight leading-tight">
            Our{' '}
            <span className="text-brand-secondary italic">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* ══════════════════════════════════
              LEFT — tall detail card
              mirrors "Our Community" card
          ══════════════════════════════════ */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm flex flex-col">

            {/* Image block */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={current.id}
                src={serviceImages[activeIdx] || serviceImages[0]}
                alt={current.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {/* icon badge */}
              <div className="absolute top-4 left-4 h-10 w-10 rounded-xl bg-white/90 backdrop-blur text-brand-primary flex items-center justify-center shadow">
                {iconMap[current.iconName]}
              </div>
            </div>

            {/* Text body */}
            <div className="p-7 flex flex-col gap-5 flex-1">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-2">
                  Featured Service
                </p>
                <h3 className="font-heading text-xl font-extrabold text-brand-primary leading-snug">
                  {current.title}
                </h3>
                <p className="text-brand-muted text-[13px] leading-relaxed mt-2">
                  {current.longDescription}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {current.features.slice(0, 4).map((feat, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <Check className="h-3.5 w-3.5 text-brand-secondary mt-0.5 shrink-0" />
                    <span className="text-brand-primary text-[12px] font-semibold leading-snug">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Stat + CTA — pushed to bottom */}
              <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <span className="block text-[10px] text-brand-muted font-bold uppercase tracking-wider">
                    {current.stats.label}
                  </span>
                  <span className="block text-2xl font-extrabold text-brand-primary mt-0.5">
                    {current.stats.value}
                  </span>
                </div>
                <button
                  onClick={() => onOpenLead(`Service: ${current.title}`)}
                  className="px-6 py-3 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-full text-[13px] cursor-pointer transition-colors shadow-sm whitespace-nowrap"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════
              RIGHT — service list
              mirrors "Recent Articles" list
          ══════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col gap-3">

            {/* List rows */}
            {servicesData.map((service, idx) => {
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className={`w-full text-left rounded-2xl border bg-white transition-all duration-200 cursor-pointer group
                    ${isActive
                      ? 'border-slate-200 shadow-md'
                      : 'border-slate-100 hover:border-slate-200 hover:shadow-sm'
                    }`}
                >
                  <div className="flex items-center gap-4 px-5 py-4">

                    {/* Thumbnail */}
                    <div className="shrink-0 w-[72px] h-[56px] rounded-xl overflow-hidden bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={serviceImages[idx] || serviceImages[0]}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Title + meta */}
                    <div className="flex-1 min-w-0">
                      <p className={`font-bold text-[14px] leading-snug transition-colors
                        ${isActive ? 'text-brand-primary' : 'text-brand-primary/80 group-hover:text-brand-primary'}`}>
                        {service.title.replace('for Interior Designers', '').trim()}
                      </p>
                      <p className="text-brand-muted text-[12px] mt-0.5 flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? 'bg-brand-secondary' : 'bg-slate-300'}`} />
                        {service.stats.value} {service.stats.label}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all
                      ${isActive
                        ? 'bg-brand-primary text-white'
                        : 'bg-slate-100 text-slate-400 group-hover:bg-brand-primary/8 group-hover:text-brand-primary'
                      }`}>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Bottom blurb + CTA — mirrors "Explore…" + "All articles" */}
            <div className="mt-3 px-1">
              <p className="text-brand-primary font-bold text-[14px] leading-snug max-w-sm">
                Explore premium marketing strategies built exclusively for luxury interior design studios.
              </p>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold rounded-full text-[13px] transition-colors shadow-sm"
              >
                All services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}