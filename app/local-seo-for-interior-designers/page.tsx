'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  MapPin, Check, ArrowRight, Phone, ArrowLeft,
  TrendingUp, Star, Shield, Zap, BarChart3,
  Globe, Target, Users, Clock, ChevronDown,
  Navigation, CheckCircle2, AlertTriangle, HelpCircle, MessageSquare
} from 'lucide-react';
import Header from '@/components/features/Header';
import Footer from '@/components/features/Footer';
import WhatsAppButton from '@/components/features/WhatsAppButton';
import LeadDialog from '@/components/features/LeadDialog';
import CountUp from 'react-countup';
import FAQ from '@/components/features/FAQRow';
import CTAInline from '@/components/features/CTAInline';
import Lenis from 'lenis';

/* ─── FadeUp Animation Wrapper ────────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = '' }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Static Data ──────────────────────────────────────────────────────── */
const STATS = [
  { value: 3, suffix: '-Pack', label: 'Local Map Pack Focus', sub: 'Top 3 ranking guarantee' },
  { value: 280, suffix: '%', label: 'Avg Call Volume Growth', sub: 'within 90 days' },
  { value: 100, suffix: '%', label: 'Citation Accuracy Rate', sub: 'across 80+ directories' },
  { value: 1, suffix: ' / City', label: 'Exclusive Representation', sub: 'Only one studio per city' },
];

const PITFALLS = [
  {
    title: 'The Map Pack Blindspot',
    desc: 'Even if your website ranks organically, over 60% of all local search clicks go directly to the Google Business Profile Map Pack. If you are not in the top 3, you are invisible to local searches.',
  },
  {
    title: 'Broad City Targeting',
    desc: 'Generic agencies target entire cities. We optimize at the neighborhood and postal-code level, ensuring your studio ranks in high-net-worth enclaves where luxury clients reside.',
  },
  {
    title: 'Vanity Traffic vs. Intent',
    desc: 'Traffic is meaningless without design briefs. We target buyers searching for "best interior architect" or "luxury villa renovation near me" instead of generic DIY ideas.',
  },
  {
    title: 'NAP Inconsistency',
    desc: 'Inconsistent Name, Address, or Phone (NAP) details across directories silently kill Google\'s algorithmic trust. We cleanse and lock down your local footprint completely.',
  },
];

const PLAYBOOK = [
  {
    icon: Target,
    title: 'GBP Authority Optimization',
    desc: 'We overhaul your Google Business Profile with keyword-rich category selections, customized service descriptions, and localized updates that force Google to rank you higher.',
  },
  {
    icon: MapPin,
    title: 'Affluent Neighborhood Geo-Targeting',
    desc: 'We structure localized website pages targeting elite residential pockets and high-income neighborhoods, capturing wealthy homeowners searching locally.',
  },
  {
    icon: Shield,
    title: 'NAP Citation Cleansing',
    desc: 'We audit and align your details across 80+ top citation sources and business registries, wiping out duplicates and securing consistent ranking authority.',
  },
  {
    icon: Star,
    title: 'Review Acceleration Strategy',
    desc: 'We deploy frictionless client feedback funnels that systematically generate descriptive, keyword-rich 5-star Google reviews with photos from your clients.',
  },
  {
    icon: Zap,
    title: 'Local Business Schema Markup',
    desc: 'We write and deploy advanced JSON-LD schema code on your site, signaling your physical coordinates, localized portfolio works, and reviews directly to Google.',
  },
  {
    icon: BarChart3,
    title: 'Local Competitor Infiltration',
    desc: 'We reverse-engineer the citation, backlink, and content profiles of the top-ranking local design competitors in your city to systematically outrank them.',
  },
];

const CITIES = [
  { name: 'Mumbai', status: 'Booked', client: 'Studio Velvet & Co.', color: 'text-red-500 bg-red-50 border-red-100' },
  { name: 'Delhi NCR', status: 'Booked', client: 'Vanguard Space', color: 'text-red-500 bg-red-50 border-red-100' },
  { name: 'Bangalore', status: 'Booked', client: 'Hegde Workspace', color: 'text-red-500 bg-red-50 border-red-100' },
  { name: 'Pune', status: '1 Opening', client: 'Accepting applications', color: 'text-emerald-600 bg-emerald-50 border-emerald-100 animate-pulse' },
  { name: 'Hyderabad', status: '1 Opening', client: 'Accepting applications', color: 'text-emerald-600 bg-emerald-50 border-emerald-100 animate-pulse' },
  { name: 'Kolkata', status: '1 Opening', client: 'Accepting applications', color: 'text-emerald-600 bg-emerald-50 border-emerald-100 animate-pulse' },
  { name: 'Chennai', status: '1 Opening', client: 'Accepting applications', color: 'text-emerald-600 bg-emerald-50 border-emerald-100 animate-pulse' },
  { name: 'Ahmedabad', status: '1 Opening', client: 'Accepting applications', color: 'text-emerald-600 bg-emerald-50 border-emerald-100 animate-pulse' },
];

const PROCESS_STEPS = [
  {
    step: '01',
    time: 'Week 1',
    title: 'Local SEO Audit & Competitor Mapping',
    desc: 'We map out your maps ranking position relative to competitors, audit existing citations, and isolate the affluent neighborhoods in your target territory.',
  },
  {
    step: '02',
    time: 'Week 2',
    title: 'Google Business Profile Overhaul',
    desc: 'We claim, clean, and rebuild your Google Business Profile. We establish correct primary categories, optimize description keywords, and configure photos with geotags.',
  },
  {
    step: '03',
    time: 'Weeks 3-4',
    title: 'Citation Cleanse & Sync',
    desc: 'We clean up duplicate business profiles and incorrect phone/address listings online. We then push your uniform details to authoritative directories.',
  },
  {
    step: '04',
    time: 'Weeks 4-5',
    title: 'Geo-Targeted Content Pages',
    desc: 'We build local landing pages targeting specific high-income coordinates and embed Local Business Schema code to solidify your geographical relevance.',
  },
  {
    step: '05',
    time: 'Ongoing',
    title: 'Review Loops & Rank Scaling',
    desc: 'We launch automated client review request sequences, publish ongoing maps posts, and optimize your rankings to ensure you dominate and stay in the Top 3.',
  },
];

const RESULTS = [
  {
    metric: '+280%',
    label: 'Call Volume Increase',
    sub: 'From Google Maps Pack searchers in Worli & Bandra.',
    name: 'Studio Velvet & Co.',
    city: 'Mumbai',
  },
  {
    metric: '#1 Spot',
    label: 'Google Maps Ranking',
    sub: 'Ranked #1 for "Luxury Architect Delhi NCR".',
    name: 'Vanguard Space',
    city: 'Delhi NCR',
  },
  {
    metric: '14.2%',
    label: 'Profile Click-Through Rate',
    sub: 'Steady inbound design briefs from tech founders.',
    name: 'Hegde Workspace',
    city: 'Bangalore',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is the Google 3-Pack and why does it matter?',
    answer: 'The Google 3-Pack is the boxed block of 3 local business listings that appear at the very top of Google searches accompanied by a map. For local service searches like "interior designer near me", this block captures over 60% of all search clicks. Ranking in the 3-Pack is essential for capturing local clients.',
  },
  {
    question: 'Why do you only represent one interior design studio per city?',
    answer: 'Local SEO is a winner-take-all landscape; there are only 3 spots in the Map Pack. If we represented multiple studios in the same city, we would be competing against ourselves. To guarantee absolute ranking dominance for our clients, we pledge 100% exclusivity to one studio per city.',
  },
  {
    question: 'How do you target high-budget neighborhoods specifically?',
    answer: 'We target affluent clients by optimizing for neighborhood-specific local search intents (e.g., "interior designer in Juhu" or "luxury home renovations in Vasant Vihar"). We build dedicated neighborhood landing pages, geotag portfolio images located in those regions, and tailor GBP descriptors to align with premium design queries.',
  },
  {
    question: 'How long does it take to rank in the Google Map Pack?',
    answer: 'Initial improvements, duplicate cleansing, and profile optimizations usually show impact within 30 to 60 days. Dominating the Map Pack and securing a stable spot in the top 3 generally takes between 3 to 6 months of consistent citation building and review management.',
  },
  {
    question: 'Can you help us get more Google reviews?',
    answer: 'Yes. We establish a review acceleration loop using frictionless custom links and email/SMS message templates. We guide you on how and when to ask clients, ensuring reviews contain the specific keyword indicators and locations that help boost Google Maps rankings.',
  },
  {
    question: 'Do we need a physical office in our target city to rank?',
    answer: 'Yes, Google Business Profiles require a verified physical address in the target city to rank in its local Map Pack. We optimize your existing verified address, ensuring it matches all online citation footprints exactly.',
  },
];

/* ─── Main Component ───────────────────────────────────────────────────── */
export default function LocalSeoPage() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const availabilityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToAvailability = () => {
    availabilityRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />

      <main className="bg-white">
        {/* ════════════════════ HERO SECTION ════════════════════ */}
        <section className="relative bg-[#070E1C] overflow-hidden pt-32 pb-24">
          {/* Ambient Blur Blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#1A3A6E]/40 blur-[130px]" />
            <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-[#0E2D5E]/40 blur-[110px]" />
            <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full bg-[#1e3b6e]/20 blur-[100px]" />
          </div>

          {/* Thin Grid Layout Overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(#3B9EFF 1px, transparent 1px), linear-gradient(90deg, #3B9EFF 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white/40 hover:text-white/70 transition-colors mb-10 uppercase tracking-widest"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column Copy */}
              <div className="lg:col-span-7 space-y-7">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A3A6E]/60 border border-blue-500/20 text-blue-300 text-[11px] font-bold tracking-wider uppercase"
                >
                  <MapPin className="h-3.5 w-3.5 text-[#3B9EFF]" />
                  Google Maps Pack Domination
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="text-4xl sm:text-5xl xl:text-[3.4rem] font-extrabold text-white leading-[1.08] tracking-tight"
                >
                  Dominate Local Search.<br />
                  <span className="text-[#3B9EFF]">Capture Premium Clients.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 }}
                  className="text-blue-100/60 text-[15px] leading-relaxed max-w-lg"
                >
                  Standard SEO gets you generic clicks. Our Local SEO engine ranks your design studio at the absolute top of the Google Maps 3-Pack, placing you directly in front of wealthy regional clients actively looking to hire local interior designers.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-3.5 pt-1"
                >
                  <button
                    onClick={() => setIsLeadOpen(true)}
                    className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-[14px] px-7 py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-blue-900/50 transition-all duration-200"
                  >
                    Request a Free Local SEO Audit
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={scrollToAvailability}
                    className="px-7 py-4 border border-white/10 hover:border-white/20 bg-white/5 text-white font-bold text-[14px] rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Check className="h-4 w-4 text-emerald-400" />
                    Check City Exclusivity
                  </button>
                </motion.div>
              </div>

              {/* Right Column: Google Maps Interactive Widget Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5"
              >
                <div className="bg-[#0A1428]/80 border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                  {/* Title Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-[10px] text-white/35 font-bold tracking-wider uppercase">Google Search Results</span>
                  </div>

                  {/* Search Bar Input */}
                  <div className="bg-white/5 rounded-xl border border-white/10 px-4 py-2.5 mb-5 flex items-center justify-between">
                    <span className="text-[11px] text-white/70 font-semibold">luxury interior designer near me</span>
                    <Navigation className="h-3.5 w-3.5 text-[#3B9EFF]" />
                  </div>

                  {/* Maps Box Preview */}
                  <div className="relative rounded-2xl h-36 bg-[#162744] overflow-hidden mb-5 border border-white/5 flex items-center justify-center">
                    {/* Simulated Map Visual */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3B9EFF_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
                    <div className="absolute w-24 h-24 rounded-full border border-blue-500/25 animate-ping opacity-60" />
                    <div className="absolute w-12 h-12 rounded-full border border-blue-500/40 animate-pulse" />
                    
                    {/* Map Pins */}
                    <div className="absolute top-8 left-12 flex flex-col items-center">
                      <MapPin className="h-5 w-5 text-red-500 fill-red-500" />
                      <span className="bg-black/60 text-white text-[8px] px-1 rounded mt-0.5 whitespace-nowrap">Competitor A</span>
                    </div>
                    <div className="absolute bottom-6 right-16 flex flex-col items-center">
                      <MapPin className="h-5 w-5 text-red-500 fill-red-500" />
                      <span className="bg-black/60 text-white text-[8px] px-1 rounded mt-0.5 whitespace-nowrap">Competitor B</span>
                    </div>
                    {/* Active Studio Pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <div className="relative">
                        <MapPin className="h-7 w-7 text-[#3B9EFF] fill-[#3B9EFF]" />
                        <span className="absolute inset-0 flex items-center justify-center text-[8px] font-black text-white pb-1">★</span>
                      </div>
                      <span className="bg-[#3B9EFF] text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow mt-0.5 whitespace-nowrap animate-bounce">Your Design Studio</span>
                    </div>
                  </div>

                  {/* Simulated 3-Pack Listings */}
                  <div className="space-y-2">
                    {/* Your Listing */}
                    <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/10 border border-blue-500/30 rounded-2xl p-4 flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[12px] font-extrabold text-white">Your Design Studio</span>
                          <span className="text-[8px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1 rounded uppercase">Rank #1</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-extrabold text-[#D5B89B]">5.0</span>
                          <div className="flex text-[#D5B89B]">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-[9px]">★</span>
                            ))}
                          </div>
                          <span className="text-[9px] text-white/40 font-semibold">(42 reviews)</span>
                        </div>
                        <p className="text-[9px] text-white/50">Luxury Interior Designer • Worli, Mumbai</p>
                        <p className="text-[8px] text-[#3B9EFF] font-bold">✓ Website • ✓ Directions • Open until 7:00 PM</p>
                      </div>
                      <span className="h-5 w-5 bg-[#3B9EFF]/10 rounded-full flex items-center justify-center text-[#3B9EFF] text-[10px] font-bold">✓</span>
                    </div>

                    {/* Competitor Listings */}
                    {[
                      { name: 'Rival Studio A', rating: '4.2', reviews: '18', location: 'Lower Parel' },
                      { name: 'Rival Studio B', rating: '3.9', reviews: '7', location: 'Prabhadevi' },
                    ].map((comp, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-3 flex justify-between items-center opacity-60">
                        <div className="space-y-0.5">
                          <p className="text-[10px] font-bold text-white">{comp.name}</p>
                          <div className="flex items-center gap-1">
                            <span className="text-[9px] font-bold text-white/60">{comp.rating}</span>
                            <span className="text-[8px] text-yellow-500">★</span>
                            <span className="text-[8px] text-white/35 font-semibold">({comp.reviews} reviews)</span>
                          </div>
                          <p className="text-[8px] text-white/40">Interior Designer • {comp.location}</p>
                        </div>
                        <span className="text-[9px] text-white/30 font-semibold uppercase tracking-wider">Rank #{idx + 2}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stat Row */}
            {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-12 border-t border-white/5">
              {STATS.map((s, idx) => (
                <FadeUp key={idx} delay={idx * 0.08} className="bg-white/5 rounded-2xl border border-white/8 p-5 flex flex-col gap-1">
                  <span className="text-3xl font-extrabold text-white leading-none">
                    <CountUp end={s.value} suffix={s.suffix} duration={2.5} enableScrollSpy scrollSpyOnce />
                  </span>
                  <span className="text-brand-secondary text-[11px] font-bold uppercase tracking-wider leading-tight mt-1">{s.label}</span>
                  <span className="text-white/30 text-[10px]">{s.sub}</span>
                </FadeUp>
              ))}
            </div> */}
          </div>
        </section>

        {/* ════════════════════ TRUST STRIP ════════════════════ */}
        <section className="border-b border-slate-100 bg-[#F9F9F7] py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {[
              { icon: Star, text: '4.9 Google Maps Rating' },
              { icon: Users, text: 'Exclusive 1 Studio Per City' },
              { icon: Shield, text: 'No Long-Term Contracts' },
              { icon: Clock, text: 'Results Visible by Month 3' },
              { icon: Zap, text: 'Weekly Transparency Reports' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-brand-primary/70">
                <Icon className="h-4 w-4 text-brand-secondary shrink-0" />
                <span className="text-[13px] font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════ PITFALLS / PROBLEM SECTION ════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column Quote Block */}
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
                <FadeUp>
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">The Problem</p>
                  <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
                    Why Traditional SEO<br />
                    <span className="text-brand-secondary italic">fails local designers.</span>
                  </h2>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <div className="bg-[#F9F9F7] border border-slate-100 p-8 rounded-3xl relative shadow-sm">
                    <span className="absolute top-4 left-6 text-6xl text-brand-secondary/15 font-serif select-none pointer-events-none">“</span>
                    <p className="text-[13px] text-brand-primary/80 italic leading-relaxed relative z-10">
                      "We spent six months working with a standard SEO agency that ranked our site for general terms like 'boho decor ideas' and 'modern kitchen tips'. We got traffic from all over, but not a single consultation request from homeowners in South Mumbai who had actual projects."
                    </p>
                    <div className="mt-5 pt-4 border-t border-slate-200/50 flex items-center gap-3">
                      <div className="h-9 w-9 bg-brand-primary rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                        ND
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-brand-primary uppercase tracking-wider">Neha Deshmukh</h4>
                        <p className="text-[10px] text-brand-muted font-semibold">Principal Architect, Mumbai</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* Right Column Bento Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PITFALLS.map((p, idx) => (
                  <FadeUp key={idx} delay={idx * 0.08}>
                    <div className="group h-full bg-[#F9F9F7] hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md rounded-2xl p-6 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="h-4.5 w-4.5 text-brand-secondary shrink-0" />
                        <h3 className="font-heading font-extrabold text-[15px] text-brand-primary">{p.title}</h3>
                      </div>
                      <p className="text-brand-muted text-[12.5px] leading-relaxed">{p.desc}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════ MAPS FUNNEL SECTION ════════════════════ */}
        <section className="py-24 bg-brand-bg relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, #3B2D25 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px'
            }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14 text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-secondary/30 bg-brand-secondary/10 text-xs font-bold text-brand-secondary uppercase tracking-widest mb-4">
                📈 Conversion Flow
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
                The Local Map Pack Funnel
              </h2>
              <p className="text-brand-muted text-[14px] leading-relaxed mt-3">
                How we channel local searches from Google Maps into signed luxury interior design contracts.
              </p>
            </FadeUp>

            {/* Funnel Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {[
                { step: '01', title: 'Impression', label: 'Hyper-Local Searches', val: '24K+', detail: 'Local intent queries like "best designer near me" in your metropolitan region.' },
                { step: '02', title: 'Engagement', label: 'GBP Profile Actions', val: '850+', detail: 'Directions requests, direct phone calls, and clicks to view your portfolio website.' },
                { step: '03', title: 'Lead Qualification', label: 'Consultation Briefs', val: '96+', detail: 'High-income briefs submitted through our customized, pre-qualifying landing page.' },
                { step: '04', title: 'Contract', label: 'Luxury Projects Won', val: 'Steady', detail: 'Consistent high-value design commissions and builder partnership alliances.' }
              ].map((step, idx) => (
                <FadeUp key={idx} delay={idx * 0.1} className="relative">
                  <div className="h-full bg-white border border-slate-100 rounded-3xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[10px] font-black tracking-[0.2em] text-brand-secondary uppercase">{step.step} / {step.title}</span>
                        <span className="text-[11px] font-extrabold text-[#3B9EFF] px-2 py-0.5 bg-blue-50 border border-blue-100 rounded-full">{step.val}</span>
                      </div>
                      <h3 className="font-heading font-extrabold text-[16px] text-brand-primary mb-2">{step.label}</h3>
                      <p className="text-brand-muted text-[12px] leading-relaxed">{step.detail}</p>
                    </div>
                    {/* Visual Connection Bar */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i <= idx ? 'w-5 bg-brand-secondary' : 'w-1.5 bg-slate-100'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ SIGNATURE PLAYBOOK SECTION ════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Our Framework</p>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight max-w-lg">
                  Our Signature Local SEO<br />
                  <span className="text-brand-secondary italic">Domination Playbook.</span>
                </h2>
                <p className="text-brand-muted text-[14px] leading-relaxed max-w-sm">
                  We don't just optimize descriptions. We build a comprehensive geographical ranking engine designed for luxury interior designers.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PLAYBOOK.map((item, idx) => (
                <FadeUp key={idx} delay={idx * 0.07}>
                  <div className="group h-full bg-[#F9F9F7] hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md rounded-3xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="h-11 w-11 rounded-2xl bg-brand-primary/5 group-hover:bg-brand-primary/10 flex items-center justify-center transition-colors">
                      <item.icon className="h-5 w-5 text-brand-primary" />
                    </div>
                    <h3 className="font-heading font-extrabold text-[16px] text-brand-primary">{item.title}</h3>
                    <p className="text-brand-muted text-[13px] leading-relaxed flex-1">{item.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ CITY EXCLUSIVITY MATRIX ════════════════════ */}
        <section ref={availabilityRef} className="py-24 bg-brand-primary relative overflow-hidden text-white">
          {/* Ambient Blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1A3A6E]/30 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0E2D5E]/30 blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Copy */}
              <div className="lg:col-span-5 space-y-6">
                <FadeUp>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A3A6E]/60 border border-blue-500/20 text-[#3B9EFF] text-[11px] font-bold tracking-wider uppercase">
                    🔒 Territory Lockdown
                  </span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight mt-4">
                    One Studio Per City.<br />
                    <span className="text-brand-secondary italic">Absolute Exclusivity.</span>
                  </h2>
                  <p className="text-white/50 text-[14px] leading-relaxed mt-4">
                    Since there are only three spots in Google\'s local Map Pack, we pledge absolute loyalty to one premium studio per city. We do not work with your local competitors once your location is reserved. Check if your territory is available below.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsLeadOpen(true)}
                      className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-[14px] px-8 py-4.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all duration-200"
                    >
                      Apply for Your City
                      <ArrowRight className="h-4.5 w-4.5" />
                    </button>
                  </div>
                </FadeUp>
              </div>

              {/* Right Column Availability Grid */}
              <div className="lg:col-span-7 bg-[#0A1428]/60 border border-white/8 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
                <FadeUp>
                  <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                    <h3 className="text-sm font-extrabold tracking-wider uppercase text-white/70">City Status Registry</h3>
                    <span className="text-[10px] text-[#3B9EFF] font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="h-2 w-2 bg-emerald-500 rounded-full animate-ping" /> Real-time Update
                    </span>
                  </div>
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {CITIES.map((city, idx) => (
                    <FadeUp key={idx} delay={idx * 0.06}>
                      <div className="bg-white/5 border border-white/5 hover:border-white/10 rounded-2xl p-4 flex justify-between items-center transition-all duration-300">
                        <div className="space-y-0.5">
                          <p className="text-[14px] font-extrabold text-white">{city.name}</p>
                          <p className="text-[10px] text-white/40">{city.client}</p>
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${city.color}`}>
                          {city.status}
                        </span>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════ PLAYBOOK TIMELINE ════════════════════ */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <FadeUp className="mb-14 text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 text-xs font-bold text-brand-primary uppercase tracking-widest bg-brand-bg mb-4">
                ⏳ Domination Lifecycle
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
                Our Local Domination Process
              </h2>
              <p className="text-brand-muted text-[14px] leading-relaxed mt-3">
                A structured, step-by-step roadmap to ranking your studio in the local 3-Pack and driving calls.
              </p>
            </FadeUp>

            {/* Timeline Tabs Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Tab Selector */}
              <div className="lg:col-span-4 flex flex-col gap-2.5">
                {PROCESS_STEPS.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      activeStep === idx
                        ? 'bg-brand-primary text-white border-brand-primary shadow-md'
                        : 'bg-[#F9F9F7] text-brand-primary border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${activeStep === idx ? 'text-brand-secondary' : 'text-brand-muted'}`}>
                        {step.time}
                      </span>
                      <h3 className="font-heading font-extrabold text-[14px] leading-tight mt-1">{step.title}</h3>
                    </div>
                    <span className="text-xl font-bold ml-4">0{idx + 1}</span>
                  </button>
                ))}
              </div>

              {/* Active Tab Panel */}
              <div className="lg:col-span-8 bg-[#F9F9F7] border border-slate-100 p-8 sm:p-10 rounded-3xl min-h-[300px] flex flex-col justify-between">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black uppercase tracking-widest text-brand-secondary px-3 py-1 bg-brand-secondary/8 border border-brand-secondary/15 rounded-full">
                      {PROCESS_STEPS[activeStep].time} Playbook
                    </span>
                    <span className="text-4xl font-black text-brand-secondary/20">0{activeStep + 1}</span>
                  </div>
                  
                  <h3 className="font-heading font-extrabold text-2xl text-brand-primary leading-tight">
                    {PROCESS_STEPS[activeStep].title}
                  </h3>
                  
                  <p className="text-brand-muted text-[15px] leading-relaxed max-w-xl">
                    {PROCESS_STEPS[activeStep].desc}
                  </p>
                </motion.div>

                <div className="mt-8 pt-8 border-t border-slate-200/50 flex items-center gap-1.5">
                  {PROCESS_STEPS.map((_, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                        i === activeStep ? 'w-8 bg-brand-secondary' : 'w-2 bg-slate-200 hover:bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════ CASE STUDIES SECTION ════════════════════ */}
        <section className="py-24 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Proven Success</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
                Studios dominating local search<br />
                <span className="text-brand-secondary italic">in their respective regions.</span>
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {RESULTS.map((r, idx) => (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="relative overflow-hidden bg-[#070E1C] rounded-3xl p-8 flex flex-col justify-between min-h-[260px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A6E]/40 to-transparent" />
                    <div className="relative z-10">
                      <span className="text-5xl font-extrabold text-white leading-none">{r.metric}</span>
                      <p className="text-[#3B9EFF] text-[11px] font-black uppercase tracking-widest mt-1">{r.label}</p>
                      <p className="text-white/40 text-[12px] mt-2.5 leading-relaxed">{r.sub}</p>
                    </div>
                    <div className="relative z-10 mt-8 pt-5 border-t border-white/10">
                      <p className="text-white font-bold text-[14px]">{r.name}</p>
                      <p className="text-white/40 text-[11px] flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3" /> {r.city}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ FAQ SECTION ════════════════════ */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14 text-center">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Questions & Answers</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary">
                Common Questions About<br />
                <span className="text-brand-secondary italic">Local Google Maps Rankings.</span>
              </h2>
            </FadeUp>

            <FAQ title="Frequently Asked Questions" items={FAQ_ITEMS} />
          </div>
        </section>

        {/* ════════════════════ FINAL CTA SECTION ════════════════════ */}
        <CTAInline />
      </main>

      <Footer />
      <WhatsAppButton />
      <LeadDialog isOpen={isLeadOpen} onClose={() => setIsLeadOpen(false)} ctaSource="Local SEO Service Page" />
    </>
  );
}
