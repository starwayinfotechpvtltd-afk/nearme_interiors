// 'use client';

// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { caseStudiesData } from '@/data/agencyData';

// interface CaseStudiesProps {
//   onOpenLead: (source: string) => void;
// }

// export default function CaseStudies({ onOpenLead }: CaseStudiesProps) {
//   return (
//     <section className="py-20 bg-white" id="case-studies">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-secondary mb-3">
//             Deep Dives
//           </h2>
//           <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary">
//             Inside Our 7-Figure Growth Partnerships
//           </h3>
//         </div>

//         <div className="space-y-12">
//           {caseStudiesData.map((study) => (
//             <div
//               key={study.id}
//               className="bg-brand-bg rounded-3xl p-6 sm:p-10 border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
//             >
//               {/* Metric Summary Left */}
//               <div className="lg:col-span-4 space-y-6">
//                 <span className="text-xs uppercase font-extrabold tracking-widest text-brand-secondary">
//                   {study.industry}
//                 </span>
//                 <h4 className="font-heading text-2xl font-bold text-brand-primary leading-tight">
//                   {study.clientName}
//                 </h4>
//                 <div className="grid grid-cols-3 gap-4 border-y border-slate-200/60 py-6">
//                   <div>
//                     <span className="block text-[10px] uppercase tracking-wider text-brand-muted font-bold">Pipeline</span>
//                     <span className="block text-2xl font-extrabold text-brand-secondary mt-1">{study.results.revenueIncrease}</span>
//                   </div>
//                   <div>
//                     <span className="block text-[10px] uppercase tracking-wider text-brand-muted font-bold">Leads</span>
//                     <span className="block text-2xl font-extrabold text-brand-primary mt-1">{study.results.leadGrowth}</span>
//                   </div>
//                   <div>
//                     <span className="block text-[10px] uppercase tracking-wider text-brand-muted font-bold">ROAS</span>
//                     <span className="block text-2xl font-extrabold text-brand-primary mt-1">{study.results.roi}</span>
//                   </div>
//                 </div>
//                 <div className="flex gap-3">
//                   <Button
//                     onClick={() => onOpenLead(`Case Study: ${study.clientName}`)}
//                     className="bg-brand-primary hover:bg-brand-primary/95 text-white font-bold text-xs px-5 py-4 rounded-lg cursor-pointer"
//                   >
//                     Audit my studio like this
//                   </Button>
//                 </div>
//               </div>

//               {/* Challenge & Solution Right */}
//               <div className="lg:col-span-8 space-y-6 lg:pl-6 border-l-0 lg:border-l border-slate-200/60">
//                 <div>
//                   <h5 className="text-xs uppercase font-bold text-brand-muted tracking-wider">The Challenge</h5>
//                   <p className="text-brand-primary text-sm sm:text-base mt-2 leading-relaxed font-semibold">
//                     {study.challenge}
//                   </p>
//                 </div>
//                 <div>
//                   <h5 className="text-xs uppercase font-bold text-brand-muted tracking-wider">The Solution</h5>
//                   <p className="text-brand-muted text-sm sm:text-base mt-2 leading-relaxed">
//                     {study.solution}
//                   </p>
//                 </div>
//                 {/* Testimonial Quote */}
//                 <div className="p-5 bg-white rounded-2xl border border-slate-100 flex gap-4 items-center">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={study.testimonial.avatar}
//                     alt={study.testimonial.author}
//                     className="h-12 w-12 rounded-full object-cover shrink-0"
//                   />
//                   <div>
//                     <p className="text-xs italic text-brand-primary leading-relaxed">
//                       &quot;{study.testimonial.quote}&quot;
//                     </p>
//                     <span className="block text-[10px] font-bold text-brand-secondary mt-1.5">
//                       {study.testimonial.author} — {study.testimonial.role}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, BadgeCheck } from 'lucide-react';

interface CaseStudy {
  id: number;
  industry: string;
  clientName: string;
  results: {
    revenueIncrease: string;
    leadGrowth: string;
    roi: string;
  };
  challenge: string;
  solution: string;
  testimonial: {
    avatar: string;
    quote: string;
    author: string;
    role: string;
  };
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    industry: 'Boutique Fitness',
    clientName: 'Bloom Pilates Studio',
    results: { revenueIncrease: '+320%', leadGrowth: '4.2x', roi: '185%' },
    challenge:
      'Bloom had great classes but no one was booking. Referrals were slowing down and ads were wasting money with no results.',
    solution:
      'We created a free first-class offer, used video to reconnect with past visitors, and set up a system to call every lead within 10 minutes.',
    testimonial: {
      avatar: '',
      quote: "We went from chasing leads to picking which ones to take. It's a different business now.",
      author: 'Priya Nair',
      role: 'Founder, Bloom Pilates',
    },
  },
  {
    id: 2,
    industry: 'Audio Production',
    clientName: 'Apex Recording Studio',
    results: { revenueIncrease: '+210%', leadGrowth: '3.6x', roi: '142%' },
    challenge:
      'Apex only got clients through word of mouth. During slow months, studios sat empty and engineers had no work.',
    solution:
      'We turned slow periods into a "demo week" special, made a mobile-friendly booking page, and created a referral program artists loved.',
    testimonial: {
      avatar: '',
      quote: 'Our calendar used to have gaps every month. Now we\'re booking sessions six weeks out.',
      author: 'Marcus Webb',
      role: 'Studio Manager, Apex',
    },
  },
  {
    id: 3,
    industry: 'Creative Services',
    clientName: 'Lumen Photography Studio',
    results: { revenueIncrease: '+275%', leadGrowth: '5.1x', roi: '198%' },
    challenge:
      'Lumen had a beautiful portfolio but no system to turn Instagram followers into paying clients.',
    solution:
      'We set up a tiered booking system with deposits, created email follow-ups for past leads, and focused ads on areas with the most interest.',
    testimonial: {
      avatar: '',
      quote: 'I used to dread the slow season. This year it barely existed.',
      author: 'Sofia Reyes',
      role: 'Owner, Lumen Photography',
    },
  },
];

const prefersReducedMotion: boolean =
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

function useInView(threshold: number = 0.15): [React.RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState<boolean>(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function useCountUp(value: string, active: boolean, duration: number = 1300): string {
  const [display, setDisplay] = useState<string>(value);

  useEffect(() => {
    if (!active) return;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }
    const match = value.match(/[-+]?[0-9]*\.?[0-9]+/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(match[0]);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[0].length);
    const decimals = match[0].includes('.') ? match[0].split('.')[1].length : 0;

    let frame: number = 0;
    let start: number | null = null;
    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value, duration]);

  return display;
}

interface StatProps {
  label: string;
  value: string;
  active: boolean;
}

function Stat({ label, value, active }: StatProps) {
  const display = useCountUp(value, active);
  return (
    <div>
      <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">
        {label}
      </span>
      <span className="block text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tabular-nums">
        {display}
      </span>
    </div>
  );
}

interface GrowthLineProps {
  active: boolean;
}

function GrowthLine({ active }: GrowthLineProps) {
  return (
    <svg viewBox="0 0 200 36" className="w-full h-7 mt-5" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M2 30 C 35 28, 55 18, 75 16 S 120 6, 145 8 S 185 2, 198 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        pathLength={1}
        className="text-brand-accent"
        style={{
          strokeDasharray: 1,
          strokeDashoffset: active ? 0 : 1,
          transition: 'stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1) 0.15s',
        }}
      />
    </svg>
  );
}

interface AvatarProps {
  name: string;
}

function Avatar({ name }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);
  return (
    <div className="h-12 w-12 rounded-full shrink-0 relative z-10 bg-slate-900 text-white flex items-center justify-center text-xs font-bold tracking-wide">
      {initials}
    </div>
  );
}

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
  onOpenLead: (source: string) => void;
}

function CaseStudyCard({ study, index, onOpenLead }: CaseStudyCardProps) {
  const [ref, inView] = useInView(0.15);

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      style={{ transitionDelay: prefersReducedMotion ? '0ms' : `${index * 110}ms` }}
      className={`group relative bg-slate-50 rounded-[28px] border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 transition-all duration-700 ease-out hover:shadow-[0_24px_60px_-20px_rgba(15,23,42,0.18)] hover:-translate-y-1 motion-reduce:transition-none ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div
        aria-hidden="true"
        className="hidden sm:flex absolute -top-5 -right-4 w-24 h-24 rounded-full border-2 border-dashed border-brand-accent items-center justify-center text-center bg-white rotate-[-10deg] shadow-sm"
      >
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[8px] font-extrabold uppercase tracking-widest text-brand-accent leading-none">
            Verified
          </span>
          <BadgeCheck className="w-4 h-4 text-brand-accent" strokeWidth={2.5} />
          <span className="text-[8px] font-extrabold uppercase tracking-widest text-brand-accent leading-none">
            Results
          </span>
        </div>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <span className="text-xs uppercase font-extrabold tracking-widest text-brand-secondary">
          {study.industry}
        </span>
        <h4 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
          {study.clientName}
        </h4>

        <div className="border-y border-slate-200/60 py-6">
          <div className="grid grid-cols-3 gap-4">
            <Stat label="Pipeline" value={study.results.revenueIncrease} active={inView} />
            <Stat label="Leads" value={study.results.leadGrowth} active={inView} />
            <Stat label="ROAS" value={study.results.roi} active={inView} />
          </div>
          <GrowthLine active={inView} />
        </div>

        <button
          onClick={() => onOpenLead(`Case Study: ${study.clientName}`)}
          className="group/cta inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-4 rounded-lg cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-secondary/20"
        >
          Audit my studio like this
          <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
        </button>
      </div>

      <div className="lg:col-span-8 lg:pl-6 border-l-0 lg:border-l border-slate-200/60">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-5 sm:gap-6 items-start">
          <div>
            <h5 className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Before</h5>
            <p className="text-slate-900 text-sm sm:text-base mt-2 leading-relaxed font-semibold">
              {study.challenge}
            </p>
          </div>

          <div
            aria-hidden="true"
            className="hidden sm:flex w-7 h-7 rounded-full bg-slate-900 text-white items-center justify-center mt-1 self-center"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </div>

          <div>
            <h5 className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">After</h5>
            <p className="text-slate-500 text-sm sm:text-base mt-2 leading-relaxed">{study.solution}</p>
          </div>
        </div>

        <div className="relative mt-6 p-5 sm:p-6 bg-white rounded-2xl border border-slate-100 flex gap-4 items-center overflow-hidden">
          <span
            aria-hidden="true"
            className="absolute -top-2 left-3 text-6xl font-black text-brand-secondary/10 select-none leading-none"
          >
            &rdquo;
          </span>
          <Avatar name={study.testimonial.author} />
          <div className="relative z-10">
            <p className="text-xs italic text-slate-900 leading-relaxed">
              &quot;{study.testimonial.quote}&quot;
            </p>
            <span className="block text-[10px] font-bold text-brand-secondary mt-1.5">
              {study.testimonial.author} — {study.testimonial.role}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CaseStudies() {
  const onOpenLead = (source: string) => console.log('open lead form:', source);

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bold text-xs uppercase tracking-widest text-brand-secondary mb-3">
            Our Casestudies
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Inside Our 7-Figure Growth Partnerships
          </h3>
        </div>

        <div className="space-y-12">
          {caseStudiesData.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} onOpenLead={onOpenLead} />
          ))}
        </div>
      </div>
    </section>
  );
}