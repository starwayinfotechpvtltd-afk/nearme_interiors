'use client';

import React, { useState, useRef, useMemo } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Phone, Check, ChevronDown,
  TrendingUp, MapPin, Star, Target, DollarSign,
  MousePointer2, Search, Clock, Shield, Gauge,
  AlertTriangle, FileSearch, Sliders, Rocket,
  LineChart, Wallet, Eye, ThumbsUp, Filter,
  Zap,
} from 'lucide-react';
import Header from '@/components/features/Header';
import Footer from '@/components/features/Footer';
import WhatsAppButton from '@/components/features/WhatsAppButton';
import LeadDialog from '@/components/features/LeadDialog';
import CountUp from 'react-countup';

/* ─── FadeUp ──────────────────────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

/* ─── Data ────────────────────────────────────────────────────────── */
const STATS = [
  { value: 9,   suffix: '×',  label: 'Average ROAS' },
  { value: 38,  suffix: '%',  label: 'Lower Cost-Per-Lead' },
  { value: 11,  suffix: ' d', label: 'Avg Days to First Lead' },
  { value: 60,  suffix: '+',  label: 'Campaigns Managed' },
];

const PROBLEMS = [
  { icon: AlertTriangle, title: 'Burning budget on the wrong searches', desc: 'Generic agencies bid on broad terms like "interior design" — you pay for clicks from students, bloggers, and people 5 states away.' },
  { icon: Eye,           title: 'Ads that look like everyone else\'s',  desc: 'Stock templates with generic copy do not stop a scroll. Luxury clients can tell the difference between a real studio and a lead-farming agency.' },
  { icon: Filter,        title: 'No filter for who actually clicks',    desc: 'Without proper targeting, your ads reach anyone — not specifically homeowners who can actually afford a premium renovation.' },
  { icon: DollarSign,    title: 'Zero conversion tracking & feedback loops', desc: 'Without custom tracking, you never know which keyword drove a consultation. You end up optimizing for clicks instead of revenue.' },
];

const FUNNEL = [
  {
    stage: 'Impressions',
    value: 48000,
    metric: 'Ad Views',
    icon: Eye,
    title: 'Ad Placed on Google Search',
    description: 'We position your brand at the absolute top of the search page for clients typing high-intent keywords.',
    standardAgencyLeak: 'They bid on broad keywords like "house design ideas", attracting students, job hunters, and DIY hobbyists.',
    ourProtection: 'Exact and phrase matching only. Layered with negative keywords (e.g., jobs, DIY, cheap) to block wasteful searches.',
    efficiencyMetric: '100% High-Intent Traffic',
  },
  {
    stage: 'Clicks',
    value: 1840,
    metric: 'Premium Visitors',
    icon: MousePointer2,
    title: 'High-Intent Visitors Land',
    description: 'Only high-probability prospects click through, pre-filtered by demographic indicators.',
    standardAgencyLeak: 'They display ads to anyone in the country, paying for clicks from cities you do not service.',
    ourProtection: 'Demographic income layering (focusing on top 10% net worth) and strict local geo-fencing down to individual postal codes.',
    efficiencyMetric: 'Top 10% Household Income',
  },
  {
    stage: 'Leads',
    value: 212,
    metric: 'Qualified Enquiries',
    icon: FileSearch,
    title: 'Contact Form & WhatsApp Inquiries',
    description: 'Visitors convert into solid, traceable lead enquiries using custom design landing pages.',
    standardAgencyLeak: 'They redirect ad traffic to a slow, generic homepage with no clear layout or contact flow.',
    ourProtection: 'Bespoke, high-performance landing pages containing strict pre-qualification questions (scope & budget).',
    efficiencyMetric: '4.8% Average Conversion Rate',
  },
  {
    stage: 'Consultations',
    value: 64,
    metric: 'Booked Meetings',
    icon: ThumbsUp,
    title: 'Meetings on Your Calendar',
    description: 'Qualified prospects schedule their direct consultation with you.',
    standardAgencyLeak: 'Leads sit in an inbox for days, going cold before anyone follows up.',
    ourProtection: 'Instant WhatsApp integrations and an automated calendar scheduler, converting leads in under 5 minutes.',
    efficiencyMetric: '30% Meeting Booking Rate',
  },
];

const SERVICES = [
  { icon: Search,      title: 'Search Campaigns',        desc: 'Show up at the exact moment someone searches "interior designer near me" or "luxury home renovation [city]". High intent, high conversion.' },
  { icon: Target,       title: 'Audience Targeting',      desc: 'We layer in income level, home ownership, and renovation-intent signals so your budget reaches people who can actually hire you.' },
  { icon: Sliders,       title: 'Landing Page Strategy',  desc: 'Generic homepage clicks waste budget. We build or advise on dedicated landing pages built to convert ad traffic specifically.' },
  { icon: LineChart,     title: 'Conversion Tracking',    desc: 'Every call, form fill, and WhatsApp click is tracked back to the exact ad and keyword that drove it. No guessing what is working.' },
  { icon: Wallet,        title: 'Budget Management',      desc: 'We manage daily bids and budget pacing like it is our own money — scaling what works, cutting what does not, fast.' },
  { icon: Shield,        title: 'Negative Keyword Lists', desc: 'We continuously block irrelevant searches — DIY tutorials, job seekers, students — so your spend goes only toward real prospects.' },
];

const PROCESS = [
  {
    step: '01',
    title: 'Audit & Tracking Setup',
    desc: 'We map out conversion tracking for calls, WhatsApp messages, and forms, and fix structural tracking issues in your ad account.',
    icon: Shield,
    weDo: 'Inject script trackers, link Google Analytics 4, audit negative keyword foundations, verify conversion pathways.',
    youDo: 'Provide ad account link & designer style files (takes under 3 mins).',
  },
  {
    step: '02',
    title: 'Keyword & Demographics Research',
    desc: 'We map local search terms and align them with geotargets and income-level demographics.',
    icon: Target,
    weDo: 'Identify high-cost & low-value keywords, map regional zip codes, filter search terms, analyze competitor bids.',
    youDo: 'Define your average project value and client avatar.',
  },
  {
    step: '03',
    title: 'Ads & Landing Page Build',
    desc: 'We build high-converting ad copy and bespoke landing pages optimized to convert traffic.',
    icon: Sliders,
    weDo: 'Write premium ad headlines, build responsive page structures, test loading speed, write persuasive CTAs.',
    youDo: 'Provide portfolio photos and brand assets.',
  },
  {
    step: '04',
    title: 'Launch & Live Optimisation',
    desc: 'Campaigns go live. We actively monitor bids, test ad creatives, and block trash search queries daily.',
    icon: Rocket,
    weDo: 'A/B test creatives, adjust bid pacing, build negative keyword list in real time, scale high-performing ad sets.',
    youDo: 'Check your CRM dashboard and receive WhatsApp leads.',
  },
  {
    step: '05',
    title: 'Pipeline Scale & Weekly Reports',
    desc: 'We evaluate which keywords drove high-end interior projects and scale the budget accordingly.',
    icon: LineChart,
    weDo: 'Evaluate cost per consultation, optimize bidding algorithms, provide plain-English weekly pipeline value reports.',
    youDo: 'Share sales closing feedback (who signed a contract).',
  },
];

const RESULTS = [
  { metric: '9×',    label: 'ROAS',            sub: '₹3L/mo spend → ₹27L pipeline', name: 'Marble & Oak',    city: 'Chennai'   },
  { metric: '₹1,840', label: 'Cost Per Lead',   sub: 'down from ₹4,200 prior agency', name: 'Studio Veda',     city: 'Bangalore' },
  { metric: '11 days', label: 'To First Lead',  sub: 'from campaign launch',          name: 'Arjun Interiors', city: 'Mumbai'    },
];

const FAQS = [
  { q: 'How much should I budget for Google Ads?',           a: 'We typically recommend starting with ₹40,000–80,000 per month in ad spend, depending on your city and competition. We will give you a specific recommendation after reviewing your market.' },
  { q: 'How is this different from running ads myself?',     a: 'Google Ads has hundreds of settings most people never touch — audience layering, negative keywords, bid strategies, conversion tracking. Small mistakes waste budget fast. We manage this daily so nothing leaks.' },
  { q: 'How soon will I see leads?',                          a: 'Most clients see their first leads within 7–14 days of launch. We are upfront that the first 2–3 weeks are often spent gathering data to optimise toward your best-performing keywords.' },
  { q: 'Do you also build the landing page?',                 a: 'We can. A dedicated landing page typically converts 2–3× better than sending traffic to a generic homepage. We will recommend this if your current site is not built for conversions.' },
  { q: 'What if a lead is low quality?',                      a: 'We track lead quality closely and adjust targeting based on what you tell us about who converts to a real client. The campaign gets smarter every month.' },
  { q: 'Is there a minimum contract?',                        a: 'We recommend a 3-month minimum to gather enough data for proper optimisation. After that, it is month-to-month — no long-term lock-in.' },
];

/* ─── Component ───────────────────────────────────────────────────── */
export default function GoogleAdsPageClient() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  const [openFaq, setOpenFaq]       = useState<number | null>(0);
  const [activeFunnelStep, setActiveFunnelStep] = useState(0);

  /* Live budget calculator */
  const [budget, setBudget] = useState(50000);
  const calc = useMemo(() => {
    const cpl = 1800;
    const leads = Math.round(budget / cpl);
    const consultRate = 0.3;
    const consultations = Math.round(leads * consultRate);
    const closeRate = 0.25;
    const projects = Math.max(1, Math.round(consultations * closeRate));
    const avgProjectValue = 850000;
    const pipeline = projects * avgProjectValue;
    return { leads, consultations, projects, pipeline };
  }, [budget]);

  return (
    <>
      <Header />
      <main className="bg-white">

        {/* ════════════════════ HERO — split with live funnel preview ════════════════════ */}
        <section className="relative overflow-hidden pt-32 pb-20 bg-brand-primary">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-brand-secondary/15 blur-[130px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-accent/10 blur-[110px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white/40 hover:text-white/70 transition-colors mb-10 uppercase tracking-widest">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-7">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-secondary/15 border border-brand-secondary/30 text-brand-accent text-[11px] font-bold tracking-wider uppercase">
                  <Target className="h-3.5 w-3.5" />
                  Google Ads Management
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
                  className="text-4xl sm:text-5xl xl:text-[3.3rem] font-extrabold text-white leading-[1.08] tracking-tight">
                  Stop Paying for Clicks.<br />
                  Start Paying for<br />
                  <span className="text-brand-secondary">Booked Consultations.</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
                  className="text-white/55 text-[15px] leading-relaxed max-w-lg">
                  We build and manage Google Ads campaigns built specifically for interior designers —
                  precise targeting, tracked conversions, and a team that optimises daily, not monthly.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-3.5 pt-1">
                  <button onClick={() => setIsLeadOpen(true)}
                    className="bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold text-[14px] px-7 py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-brand-secondary/30 transition-all duration-200">
                    Get a Free Ads Audit
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a href="tel:+912269827800"
                    className="px-7 py-4 border border-white/12 hover:border-white/20 bg-white/5 text-white font-bold text-[14px] rounded-xl flex items-center justify-center gap-2 transition-colors">
                    <Phone className="h-4 w-4 text-brand-accent" />
                    Talk to a Strategist
                  </a>
                </motion.div>

                {/* Inline stat row */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4">
                  {STATS.map((s, i) => (
                    <div key={i} className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-extrabold text-white">
                        <CountUp end={s.value} suffix={s.suffix} duration={2.2} enableScrollSpy scrollSpyOnce />
                      </span>
                      <span className="text-white/40 text-[11px] font-semibold">{s.label}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right — live mock ad preview card */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
                className="lg:col-span-5">
                <div className="bg-white rounded-3xl p-1.5 shadow-2xl">
                  <div className="bg-white rounded-[20px] p-5 space-y-4">
                    {/* Search bar mock */}
                    <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2.5">
                      <Search className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span className="text-[12px] text-slate-500 font-medium">interior designer near me</span>
                    </div>

                    {/* Ad result mock */}
                    <div className="space-y-1 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">Ad</span>
                        <span className="text-[11px] text-slate-400">yourstudio.com</span>
                      </div>
                      <p className="text-[15px] text-blue-700 font-medium leading-snug">Luxury Interior Design Studio — Free Consultation</p>
                      <p className="text-[12px] text-slate-500 leading-relaxed">Award-winning residential design. Book a free 30-min consultation. Serving Mumbai, Bandra and South Mumbai.</p>
                    </div>

                    {/* Campaign metrics mock */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-brand-bg rounded-xl p-3 text-center">
                        <p className="text-lg font-extrabold text-brand-primary leading-none">9.2%</p>
                        <p className="text-[9px] font-bold text-brand-muted uppercase tracking-wider mt-1">CTR</p>
                      </div>
                      <div className="bg-brand-bg rounded-xl p-3 text-center">
                        <p className="text-lg font-extrabold text-brand-primary leading-none">₹1.8K</p>
                        <p className="text-[9px] font-bold text-brand-muted uppercase tracking-wider mt-1">Cost/Lead</p>
                      </div>
                      <div className="bg-brand-secondary rounded-xl p-3 text-center">
                        <p className="text-lg font-extrabold text-white leading-none">9×</p>
                        <p className="text-[9px] font-bold text-white/70 uppercase tracking-wider mt-1">ROAS</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-white/30 text-[11px] text-center mt-3">Example campaign performance from a live client account</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════════════════ TRUST STRIP ════════════════════ */}
        <section className="border-b border-slate-100 bg-brand-bg py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {[
              { icon: Star,       text: '4.9 Google Rating'         },
              { icon: Shield,     text: 'Google Partner Agency'     },
              { icon: Gauge,      text: 'Daily Campaign Monitoring' },
              { icon: DollarSign, text: '9× Average ROAS'           },
              { icon: Clock,      text: 'Leads From Week 2'         },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-brand-primary/70">
                <Icon className="h-4 w-4 text-brand-secondary shrink-0" />
                <span className="text-[13px] font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════ PROBLEM — diagnostic bento layout ════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Heading — centred like reference */}
            <FadeUp className="text-center mb-14">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Why Most Ad Campaigns Fail</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
                Most designers have run ads before.
                <br />
                <span className="text-brand-secondary italic">Most got burned.</span>
              </h2>
            </FadeUp>

            {/* ── Layout: large featured card left + 2×2 grid right ── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

              {/* Featured card — dark, full height, left col */}
              <FadeUp className="lg:col-span-4" delay={0.05}>
                <div className="h-full bg-brand-primary rounded-3xl p-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden">
                  {/* subtle grid texture */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                  <div className="relative z-10 flex flex-col gap-6 h-full">
                    <div className="h-10 w-10 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-red-400" />
                    </div>

                    <div className="space-y-3 flex-1">
                      <h3 className="text-white font-heading font-extrabold text-[20px] leading-tight">Clicks vs. Booked Consultations</h3>
                      <p className="text-white/60 text-[13.5px] leading-relaxed">
                        Standard agencies focus on driving cheap clicks rather than high-intent consultations. For luxury design studios, this results in massive waste on DIY-ers, students, and job seekers.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] font-bold text-brand-secondary">
                      <Zap className="h-4 w-4" />
                      <span>Primary Leak: 87% of budget wasted on generic traffic</span>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* 2×2 grid of problem cards — right cols */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROBLEMS.map((item, idx) => (
                  <FadeUp key={idx} delay={0.1 + idx * 0.08}>
                    <div className="h-full bg-[#F9F9F7] hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md rounded-3xl p-6 flex flex-col gap-4 transition-all duration-200 justify-between">
                      <div className="h-10 w-10 rounded-xl bg-brand-primary/5 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-brand-primary" />
                      </div>

                      <div className="space-y-2 flex-1">
                        <h4 className="font-heading font-extrabold text-[15px] text-brand-primary">{item.title}</h4>
                        <p className="text-brand-muted text-[12.5px] leading-relaxed">{item.desc}</p>
                      </div>

                      <div className="pt-3 border-t border-slate-200/50 flex items-center gap-1.5 text-[11px] font-semibold text-brand-secondary">
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                        <span>Solved by our campaign model</span>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            <FadeUp delay={0.5} className="mt-8 text-center">
              <p className="text-brand-primary font-bold text-[15px]">
                We built our entire process to fix exactly these problems.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ════════════════════ FUNNEL — visual narrowing diagram ════════════════════ */}
        <section className="py-24 bg-brand-bg border-y border-slate-100 relative overflow-hidden">
          {/* Subtle decoration elements */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-brand-secondary/5 blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeUp className="text-center mb-14">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">How Your Budget Flows</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
                From Search Query to Booked Consultation:<br />
                <span className="text-brand-secondary italic">Tracing every rupee spent</span>
              </h2>
              <p className="text-brand-muted text-[14px] mt-4 max-w-xl mx-auto">
                Hover or click on the stages below to see how standard agencies leak your marketing budget—and how our custom guardrails seal those leaks.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Interactive Funnel Stages */}
              <div className="lg:col-span-5 space-y-4">
                {FUNNEL.map((stage, idx) => {
                  const Icon = stage.icon;
                  const isActive = activeFunnelStep === idx;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.01, x: 4 }}
                      onClick={() => setActiveFunnelStep(idx)}
                      onMouseEnter={() => setActiveFunnelStep(idx)}
                      className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative overflow-hidden ${
                        isActive
                          ? 'bg-white border-brand-secondary shadow-xl shadow-brand-secondary/5'
                          : 'bg-white/60 hover:bg-white border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      {/* Left color bar on active */}
                      {isActive && (
                        <motion.div
                          layoutId="activeBar"
                          className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-secondary"
                          transition={{ duration: 0.2 }}
                        />
                      )}

                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`h-11 w-11 rounded-xl flex items-center justify-center transition-colors ${
                            isActive ? 'bg-brand-secondary/10 text-brand-secondary' : 'bg-slate-100 text-slate-500'
                          }`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">
                              Stage 0{idx + 1}
                            </p>
                            <h3 className="font-heading font-extrabold text-[16px] text-brand-primary">
                              {stage.stage}
                            </h3>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-2xl font-extrabold leading-none ${isActive ? 'text-brand-secondary' : 'text-brand-primary'}`}>
                            {stage.value.toLocaleString('en-IN')}
                          </p>
                          <p className="text-[10px] text-brand-muted font-medium mt-0.5">
                            {stage.metric}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Column: Stage Details (Diagnostics Dashboard) */}
              <div className="lg:col-span-7">
                <motion.div
                  key={activeFunnelStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-brand-primary/5 space-y-6"
                >
                  {/* Header info */}
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold bg-brand-secondary/10 text-brand-secondary px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Diagnostics — Stage 0{activeFunnelStep + 1}
                      </span>
                      <h3 className="font-heading text-2xl font-extrabold text-brand-primary pt-1">
                        {FUNNEL[activeFunnelStep].title}
                      </h3>
                      <p className="text-brand-muted text-[13.5px] leading-relaxed">
                        {FUNNEL[activeFunnelStep].description}
                      </p>
                    </div>
                    <div className="bg-brand-secondary text-white px-4 py-2 rounded-xl text-center shrink-0">
                      <p className="text-xs font-bold text-white/75 uppercase tracking-wider">Efficiency Indicator</p>
                      <p className="text-[14px] font-black">{FUNNEL[activeFunnelStep].efficiencyMetric}</p>
                    </div>
                  </div>

                  {/* Comparisons: Leak vs Protection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    {/* Leak point card */}
                    <div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-5 space-y-3">
                      <div className="flex items-center gap-2 text-rose-700">
                        <AlertTriangle className="h-4 w-4 shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider">Typical Agency Leak</span>
                      </div>
                      <p className="text-slate-600 text-[12.5px] leading-relaxed">
                        {FUNNEL[activeFunnelStep].standardAgencyLeak}
                      </p>
                    </div>

                    {/* Protection card */}
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-5 space-y-3">
                      <div className="flex items-center gap-2 text-emerald-700">
                        <Shield className="h-4 w-4 shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider">Our Guardrails</span>
                      </div>
                      <p className="text-slate-700 text-[12.5px] leading-relaxed">
                        {FUNNEL[activeFunnelStep].ourProtection}
                      </p>
                    </div>
                  </div>

                  {/* Visual tracker element */}
                  <div className="bg-[#F8FBFF] rounded-2xl p-4 flex items-center justify-between gap-4 border border-brand-secondary/10">
                    <div className="flex items-center gap-2 text-brand-primary text-[12px] font-bold">
                      <Zap className="h-4 w-4 text-brand-secondary" />
                      <span>Resulting pipeline value is fully attributed at this stage</span>
                    </div>
                    <span className="text-[11px] font-bold text-brand-secondary">Traceable in CRM</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════ BUDGET CALCULATOR — interactive ════════════════════ */}
        <section className="py-24 bg-brand-primary relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[450px] h-[450px] rounded-full bg-brand-secondary/15 blur-[120px]" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-10 text-center">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-accent mb-3">Estimate Your Results</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                See what your budget<br />could realistically bring in.
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-7 sm:p-10">
                {/* Slider */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-white/60 text-[12px] font-bold uppercase tracking-wider">Monthly ad spend</label>
                    <span className="text-white text-xl font-extrabold">₹{budget.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range" min={20000} max={200000} step={5000} value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none bg-white/15 cursor-pointer accent-brand-secondary"
                  />
                  <div className="flex justify-between mt-1.5">
                    <span className="text-white/30 text-[10px]">₹20K</span>
                    <span className="text-white/30 text-[10px]">₹2L</span>
                  </div>
                </div>

                {/* Result grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: 'Est. Leads', value: calc.leads, icon: FileSearch },
                    { label: 'Consultations', value: calc.consultations, icon: ThumbsUp },
                    { label: 'Projects Won', value: calc.projects, icon: Target },
                    { label: 'Pipeline Value', value: `₹${(calc.pipeline / 100000).toFixed(1)}L`, icon: TrendingUp, isText: true },
                  ].map((r, i) => (
                    <div key={i} className="bg-white/6 rounded-2xl p-4 flex flex-col gap-2">
                      <r.icon className="h-4 w-4 text-brand-accent" />
                      <span className="text-xl font-extrabold text-white">
                        {r.isText ? r.value : r.value.toLocaleString('en-IN')}
                      </span>
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider">{r.label}</span>
                    </div>
                  ))}
                </div>

                <p className="text-white/30 text-[11px] mt-5 text-center leading-relaxed">
                  Based on average client performance: ₹1,800 cost-per-lead, 30% consultation rate, 25% close rate, ₹8.5L average project value. Your actual results depend on your city and market.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ════════════════════ SERVICES ════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">What's Included</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
                Full campaign management,<br />
                <span className="text-brand-secondary italic">not a one-time setup.</span>
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((s, idx) => (
                <FadeUp key={idx} delay={idx * 0.07}>
                  <div className="group h-full bg-brand-bg hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md rounded-3xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="h-11 w-11 rounded-2xl bg-brand-primary/5 group-hover:bg-brand-secondary/8 flex items-center justify-center transition-colors">
                      <s.icon className="h-5 w-5 text-brand-primary group-hover:text-brand-secondary transition-colors" />
                    </div>
                    <h3 className="font-heading font-extrabold text-[16px] text-brand-primary">{s.title}</h3>
                    <p className="text-brand-muted text-[13px] leading-relaxed flex-1">{s.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ PROCESS — premium timeline grid ════════════════════ */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-16 text-center">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Our Process</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
                How We Launch, Optimize, and Scale<br />
                <span className="text-brand-secondary italic">Your Campaign Pipeline</span>
              </h2>
              <p className="text-brand-muted text-[14px] mt-4 max-w-xl mx-auto">
                A structured, hands-off system designed to build your design pipeline without adding administrative burden to your week.
              </p>
            </FadeUp>

            {/* Desktop timeline track (dashed line) */}
            <div className="relative">
              {/* The connecting horizontal dashed line for large screens */}
              <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-[2px] border-t-2 border-dashed border-slate-200 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                {PROCESS.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <FadeUp key={idx} delay={idx * 0.08} className="flex">
                      <div className="group flex flex-col bg-brand-bg hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-brand-primary/5 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 justify-between w-full">
                        <div className="space-y-4">
                          {/* Step number and Icon row */}
                          <div className="flex items-center justify-between">
                            <span className="text-4xl font-black text-brand-secondary/15 group-hover:text-brand-secondary/25 leading-none transition-colors select-none font-heading">
                              {step.step}
                            </span>
                            <div className="h-10 w-10 rounded-xl bg-white border border-slate-100 group-hover:border-brand-secondary/35 group-hover:bg-brand-secondary/5 flex items-center justify-center text-brand-primary group-hover:text-brand-secondary transition-all">
                              <Icon className="h-5 w-5" />
                            </div>
                          </div>

                          {/* Details */}
                          <div className="space-y-2">
                            <h3 className="font-heading font-extrabold text-[15px] text-brand-primary">
                              {step.title}
                            </h3>
                            <p className="text-brand-muted text-[12.5px] leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </div>

                        {/* Responsibility matrix */}
                        <div className="mt-5 pt-4 border-t border-slate-200/50 space-y-2.5">
                          <div>
                            <p className="text-[9px] font-bold text-brand-secondary uppercase tracking-wider">What We Handle</p>
                            <p className="text-[11px] text-slate-700 font-medium leading-normal mt-0.5">
                              {step.weDo}
                            </p>
                          </div>
                          <div>
                            <p className="text-[9px] font-bold text-brand-muted uppercase tracking-wider">What We Need From You</p>
                            <p className="text-[11px] text-slate-500 italic leading-normal mt-0.5">
                              {step.youDo}
                            </p>
                          </div>
                        </div>
                      </div>
                    </FadeUp>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════ RESULTS ════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Real Results</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
                Studios whose ad spend<br />
                <span className="text-brand-secondary italic">finally paid off.</span>
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {RESULTS.map((r, idx) => (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="relative overflow-hidden bg-brand-primary rounded-3xl p-8 flex flex-col justify-between min-h-[240px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/20 to-transparent" />
                    <div className="relative z-10">
                      <span className="text-5xl font-extrabold text-white leading-none">{r.metric}</span>
                      <p className="text-brand-accent text-[11px] font-black uppercase tracking-widest mt-1">{r.label}</p>
                      <p className="text-white/35 text-[12px] mt-1">{r.sub}</p>
                    </div>
                    <div className="relative z-10 mt-8 pt-5 border-t border-white/10">
                      <p className="text-white font-bold text-[14px]">{r.name}</p>
                      <p className="text-white/40 text-[12px] flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3" /> {r.city}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ FAQ — split grid with helper sidebar ════════════════════ */}
        <section className="py-24 bg-brand-bg border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Sticky Title & Support Info */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                <FadeUp>
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Questions & Answers</p>
                  <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
                    Common Questions About <span className="text-brand-secondary">Google Ads</span>
                  </h2>
                  <p className="text-brand-muted text-[13.5px] leading-relaxed mt-4">
                    Everything you need to know about budgets, campaign setups, performance timelines, and target qualifications for premium design studios.
                  </p>
                </FadeUp>

                {/* Instant Help Card */}
                <FadeUp delay={0.1}>
                  <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl shadow-brand-primary/5 space-y-4">
                    <h3 className="font-heading font-extrabold text-[16px] text-brand-primary">Need a custom answer?</h3>
                    <p className="text-brand-muted text-[12.5px] leading-relaxed">
                      If you want to know if Google Ads is viable for your specific city and budget, talk directly to a campaign specialist.
                    </p>
                    <div className="space-y-2 pt-2">
                      <a
                        href="https://wa.me/912269827800?text=I%20have%20questions%20about%20Google%20Ads%20for%20Interior%20Designers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-[13px] font-bold rounded-xl shadow-lg shadow-[#25D366]/20 transition-all"
                      >
                        <Zap className="h-4 w-4 fill-white" />
                        Chat on WhatsApp
                      </a>
                      <a
                        href="tel:+912269827800"
                        className="flex items-center justify-center gap-2 w-full py-3 border border-slate-200 hover:border-slate-300 text-brand-primary hover:bg-slate-50 text-[13px] font-bold rounded-xl transition-all"
                      >
                        <Phone className="h-4 w-4 text-brand-secondary" />
                        Call Us: +91 22 6982 7800
                      </a>
                    </div>
                    <p className="text-[10px] text-brand-muted text-center pt-1 font-semibold">Average response time: &lt; 10 minutes</p>
                  </div>
                </FadeUp>
              </div>

              {/* Right Column: Premium Accordion Cards */}
              <div className="lg:col-span-8">
                <div className="space-y-3.5">
                  {FAQS.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <FadeUp key={idx} delay={idx * 0.05}>
                        <div
                          className={`border rounded-2xl transition-all duration-300 overflow-hidden shadow-sm ${
                            isOpen
                              ? 'bg-white border-brand-secondary/40 shadow-md'
                              : 'bg-white border-slate-100 hover:border-slate-200'
                          }`}
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : idx)}
                            className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left cursor-pointer group focus-visible:outline-none"
                          >
                            <span className={`font-heading font-extrabold text-[14.5px] sm:text-[15.5px] leading-snug transition-colors ${
                              isOpen ? 'text-brand-secondary' : 'text-brand-primary group-hover:text-brand-secondary'
                            }`}>
                              {faq.q}
                            </span>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.25 }}
                              className={`shrink-0 h-7 w-7 rounded-full border flex items-center justify-center transition-colors ${
                                isOpen ? 'border-brand-secondary bg-brand-secondary/5 text-brand-secondary' : 'border-slate-200 text-slate-400 group-hover:text-slate-600'
                              }`}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </motion.div>
                          </button>
                          
                          <motion.div
                            initial={false}
                            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 pt-1 text-slate-600 text-[13px] leading-relaxed max-w-3xl border-t border-slate-50">
                              {faq.a}
                            </div>
                          </motion.div>
                        </div>
                      </FadeUp>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════ FINAL CTA — double column luxury layout ════════════════════ */}
        <section className="py-24 bg-brand-primary relative overflow-hidden">
          {/* Glowing blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-brand-secondary/20 blur-[130px] translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-brand-accent/15 blur-[110px] -translate-x-1/4 translate-y-1/4" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Copywriting and Bullet Checklist */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-secondary/20 border border-brand-secondary/30 text-brand-accent text-[11px] font-bold tracking-wider uppercase">
                    <Shield className="h-3.5 w-3.5" />
                    One Studio Per City Policy
                  </span>
                  <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white leading-[1.08] tracking-tight">
                    Every day without targeting<br />
                    is wasted ad spend.<br />
                    <span className="text-brand-secondary">Let's audit it this week.</span>
                  </h2>
                  <p className="text-white/50 text-[15px] leading-relaxed max-w-xl">
                    We will audit your existing Google Ads account (or map out a complete launching framework if you are new to ads) completely free. You will get a detailed blueprint of leaks, competitor keywords, and city-wide opportunities. No obligation.
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Competitor Bid & Keyword Analysis',
                    'Demographic & Geo-location Auditing',
                    'Negative Keyword Leak Detection',
                    'Dedicated Conversion Page Design Blueprint',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="h-5 w-5 rounded-full bg-brand-secondary/15 flex items-center justify-center shrink-0 mt-0.5 border border-brand-secondary/35">
                        <Check className="h-3 w-3 text-brand-secondary" />
                      </div>
                      <span className="text-white/80 text-[13px] font-medium leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Primary/Secondary Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={() => setIsLeadOpen(true)}
                    className="bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold text-[14px] px-8 py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-brand-secondary/30 transition-all duration-200"
                  >
                    Get Your Free Audit
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href="tel:+912269827800"
                    className="px-8 py-4 border border-white/12 hover:border-white/20 bg-white/5 text-white font-bold text-[14px] rounded-xl flex items-center justify-center gap-2 transition-all duration-250"
                  >
                    <Phone className="h-4 w-4 text-brand-accent" />
                    Call +91 22 6982 7800
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Mockup Report Card */}
              <div className="lg:col-span-5">
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-[32px] p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl">
                  {/* Subtle decorative grid background inside card */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                  {/* Header of Report Card */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                    <div>
                      <p className="text-[10px] font-bold text-brand-accent uppercase tracking-wider">Audit Strategy Mockup</p>
                      <h3 className="font-heading text-lg font-bold text-white mt-0.5">Campaign Diagnostics Report</h3>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">PREVIEW</span>
                  </div>

                  {/* Body elements of Report */}
                  <div className="space-y-4.5 relative z-10">
                    {/* Diagnostic Stat 1 */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px] text-white/60 font-semibold">
                        <span>Keyword Targeting Waste (DIY / Low budget)</span>
                        <span className="text-red-400 font-bold">78% Budget Leak</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '78%' }}
                          transition={{ duration: 1, delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-red-500 to-rose-400 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Diagnostic Stat 2 */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px] text-white/60 font-semibold">
                        <span>Untapped High-Income Traffic in Mumbai</span>
                        <span className="text-emerald-400 font-bold">+3.8x Potential</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '90%' }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Diagnostic Stat 3 */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px] text-white/60 font-semibold">
                        <span>Landing Page Conversion Score</span>
                        <span className="text-amber-400 font-bold">Poor (Needs Funnel)</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '35%' }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Inner overlay card acting as a CTA box */}
                  <div className="bg-white rounded-2xl p-5 text-center shadow-xl space-y-3 relative z-10 border border-slate-100">
                    <p className="text-[13px] font-extrabold text-brand-primary leading-tight">
                      Ready to unlock your customized agency report?
                    </p>
                    <p className="text-slate-500 text-[11px] leading-normal">
                      We will run live keyword maps for your city and analyze competitor bids.
                    </p>
                    <button
                      onClick={() => setIsLeadOpen(true)}
                      className="w-full bg-brand-primary hover:bg-brand-primary/95 text-white font-bold py-2.5 rounded-xl text-[12.5px] transition-colors cursor-pointer"
                    >
                      Analyze My Ads Setup
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
      <LeadDialog isOpen={isLeadOpen} onClose={() => setIsLeadOpen(false)} ctaSource="Google Ads Service Page" />
    </>
  );
}