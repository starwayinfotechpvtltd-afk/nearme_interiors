'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Phone,
  Check, ChevronDown, TrendingUp, Heart,
  Eye, MessageCircle, Users, Zap, Camera,
  BarChart3, Repeat2, MapPin, Star, Play,
  Target, DollarSign, Globe, Megaphone, MousePointer2, Layers,
} from 'lucide-react';
import Header from '@/components/features/Header';
import Footer from '@/components/features/Footer';
import WhatsAppButton from '@/components/features/WhatsAppButton';
import LeadDialog from '@/components/features/LeadDialog';
import CountUp from 'react-countup';
import { FacebookIcon, InstagramIcon, LinkedinIcon, MetaAdsIcon, PinterestIcon, YoutubeIcon } from '@/components/ui/SocialIcons';
import FAQ from '@/components/features/FAQRow';
import CTAInline from '@/components/features/CTAInline';

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
  { value: 28, suffix: 'K+', label: 'Avg Followers Gained', sub: 'per client in 6 months' },
  { value: 2.4, suffix: 'M', label: 'Total Reel Views', sub: 'in first campaign month' },
  { value: 9, suffix: '×', label: 'Avg ROAS on Meta Ads', sub: 'across all clients' },
  { value: 96, suffix: '%', label: 'Client Retention Rate', sub: 'stay beyond year one' },
];

const PLATFORMS = [
  {
    icon: InstagramIcon, name: 'Instagram',
    color: '#E1306C', bg: 'bg-pink-50', border: 'border-pink-100',
    tag: 'Organic + Paid',
    desc: 'Your portfolio in its most powerful visual form. We handle Reels, carousels, Stories, and captions — everything optimised for discovery and saves.',
    metrics: ['Reels strategy', 'Hashtag research', 'Story funnels', 'Profile optimisation'],
  },
  {
    icon: FacebookIcon, name: 'Facebook',
    color: '#1877F2', bg: 'bg-blue-50', border: 'border-blue-100',
    tag: 'Organic + Ads',
    desc: 'Still the highest-reach platform in India. We run targeted Facebook campaigns that put your studio in front of homeowners actively planning renovations.',
    metrics: ['Page management', 'Local audience targeting', 'Lead generation ads', 'Retargeting campaigns'],
  },
  {
    icon: MetaAdsIcon, name: 'Meta Ads',
    color: '#0668E1', bg: 'bg-indigo-50', border: 'border-indigo-100',
    tag: 'Paid Media',
    desc: 'We plan, build, and manage Meta ad campaigns across Instagram and Facebook — targeted by city, income level, and home ownership. Every rupee tracked.',
    metrics: ['Campaign strategy', 'Creative production', 'A/B testing', 'ROAS optimisation'],
  },
  {
    icon: YoutubeIcon, name: 'YouTube',
    color: '#FF0000', bg: 'bg-red-50', border: 'border-red-100',
    tag: 'Long Form',
    desc: 'Before-and-afters, room walkthroughs, and design process videos that build deep trust and keep you top of mind for months after a single watch.',
    metrics: ['Video strategy', 'SEO titles & tags', 'Thumbnail design', 'Shorts repurposing'],
  },
  {
    icon: PinterestIcon, name: 'Pinterest',
    color: '#E60023', bg: 'bg-rose-50', border: 'border-rose-100',
    tag: 'Discovery',
    desc: 'The highest-intent design platform online. People on Pinterest are actively planning their homes — we make sure your work is what they find and save.',
    metrics: ['Board strategy', 'Rich pins setup', 'Keyword optimisation', 'Lead traffic funnels'],
  },
  {
    icon: LinkedinIcon, name: 'LinkedIn',
    color: '#0A66C2', bg: 'bg-sky-50', border: 'border-sky-100',
    tag: 'B2B',
    desc: 'For commercial projects and high-value referrals. We position your studio in front of architects, developers, and property managers who need a trusted design partner.',
    metrics: ['Profile optimisation', 'Thought leadership posts', 'B2B outreach', 'Portfolio showcasing'],
  },
];

const META_ADS = [
  { icon: Target, title: 'Audience Targeting', desc: 'We build laser-focused audiences — by city, household income, home ownership, and renovation intent. Your ads reach people who can actually afford your services.' },
  { icon: Camera, title: 'Ad Creative Production', desc: 'High-converting ad creatives built from your project photography. Carousels, video ads, single-image ads — we design and write everything.' },
  { icon: Layers, title: 'Full-Funnel Campaigns', desc: 'From awareness to enquiry. We run awareness campaigns to warm up cold audiences, then retarget website visitors with conversion ads.' },
  { icon: MousePointer2, title: 'Landing Page Strategy', desc: 'An ad is only as good as what comes after the click. We advise on or build landing pages that convert visitors into booked consultations.' },
  { icon: BarChart3, title: 'Weekly Performance Reports', desc: 'No black boxes. You get a simple, weekly breakdown of spend, leads, cost-per-lead, and what we are optimising next.' },
  { icon: DollarSign, title: 'Budget Optimisation', desc: 'We manage your ad spend like it is our own money. When something is working, we scale it. When it is not, we cut it fast and redirect budget.' },
];

const ORGANIC_SERVICES = [
  { icon: Repeat2, title: 'Reels & Short Video', desc: 'We script, plan, and guide production of Reels that showcase your projects beautifully and drive discovery from new audiences.' },
  { icon: MessageCircle, title: 'Community Management', desc: 'We handle comments and DMs daily so no potential client ever waits 48 hours. Every conversation is a chance to book a consultation.' },
  { icon: TrendingUp, title: 'Content Calendar', desc: 'A 30-day content plan built around your services, seasons, and city — so you never wonder what to post next.' },
  { icon: Globe, title: 'Cross-Platform Repurposing', desc: 'One piece of content turned into 5. A Reel becomes a YouTube Short, a Pinterest pin, a Facebook post, and an Instagram Story.' },
  { icon: Zap, title: 'Trend Capitalisation', desc: 'We monitor design trends and platform algorithm shifts weekly so your content stays current and keeps getting shown to new people.' },
  { icon: Star, title: 'Brand Voice & Aesthetics', desc: 'We match your content to your studio\'s visual identity — fonts, filters, tone. Your feed looks like a premium editorial, not random posts.' },
];

const PROCESS = [
  { step: '01', time: 'Day 1–3', icon: Eye, title: 'Social Audit', desc: 'We review every platform you are on — follower quality, content performance, competitor gaps, and missed opportunities.' },
  { step: '02', time: 'Week 1', icon: Target, title: 'Strategy Build', desc: 'A full 90-day plan covering platforms, content types, posting frequency, ad structure, and KPIs. You approve before we begin.' },
  { step: '03', time: 'Week 2–3', icon: Camera, title: 'Creative Production', desc: 'We design templates, write captions, plan Reel scripts, and build the first month of ad creatives ready to launch.' },
  { step: '04', time: 'Month 1+', icon: Megaphone, title: 'Launch & Manage', desc: 'Organic content goes live on schedule. Meta ads launch with precise targeting. We manage, respond, and optimise daily.' },
  { step: '05', time: 'Ongoing', icon: BarChart3, title: 'Report & Scale', desc: 'Monthly reviews with clear data. We double down on what is working and cut what is not — the plan keeps getting sharper.' },
];

const RESULTS = [
  { metric: '28K', label: 'Followers Gained', sub: 'from 800 in 6 months', name: 'The Arch Studio', city: 'Pune', color: '#E1306C' },
  { metric: '9×', label: 'Meta Ads ROAS', sub: '₹3L/month spend, ₹27L pipeline', name: 'Marble & Oak', city: 'Chennai', color: '#0668E1' },
  { metric: '+380%', label: 'Instagram Enquiries', sub: 'in DMs month over month', name: 'Studio Veda', city: 'Bangalore', color: '#7C3AED' },
];

const COMPARISON = {
  before: [
    'Posting once a week when you find time',
    'No strategy — just sharing finished projects',
    'Low engagement, mostly from other designers',
    'Zero enquiries from Instagram or Facebook',
    'Spending on ads with no clear return',
    'Unsure which platforms are even worth it',
    'Feeling like social media is a time drain',
  ],
  after: [
    'Consistent, high-quality content on schedule',
    'A 90-day strategy driving specific goals',
    'Engaged followers who match your ideal client',
    'Regular DMs and enquiries from serious buyers',
    'Meta ads with tracked ROAS and clear ROI',
    'All platforms working together as one system',
    'Social media that actively brings in projects',
  ],
};

const faqItems = [
  {
    question: "Why is social media marketing important for interior designers?",
    answer:
      "Social media helps interior designers showcase their portfolio, build credibility, engage potential clients, and generate high-quality project inquiries through visual content.",
  },
  {
    question: "Which social media platforms work best for interior design businesses?",
    answer:
      "Instagram, Pinterest, Facebook, LinkedIn, and YouTube are highly effective for interior designers because they allow businesses to showcase projects, share expertise, and attract homeowners and commercial clients.",
  },
  {
    question: "How often should interior designers post on social media?",
    answer:
      "Consistency is key. Most interior design brands see strong engagement by posting 3–5 times per week along with regular Stories, Reels, and project updates.",
  },
  {
    question: "Can social media generate interior design leads?",
    answer:
      "Yes. A strategic social media marketing campaign can attract homeowners, property developers, and business owners actively looking for interior design services.",
  },
  {
    question: "What type of content performs best for interior designers?",
    answer:
      "Project showcases, before-and-after transformations, design tips, client testimonials, behind-the-scenes content, and video walkthroughs typically generate the highest engagement.",
  },
  {
    question: "Do you create content for interior design companies?",
    answer:
      "Yes. We handle content strategy, graphic design, captions, video editing, content calendars, and platform-specific optimization to maintain a professional brand presence.",
  },
  {
    question: "Can social media advertising help me get more projects?",
    answer:
      "Absolutely. Targeted social media ads can reach homeowners, luxury property buyers, and businesses within specific locations, increasing inquiries and consultation bookings.",
  },
  {
    question: "How do you measure social media marketing success?",
    answer:
      "We track engagement rates, reach, follower growth, website traffic, lead generation, consultation requests, and overall return on investment to measure campaign performance.",
  },
  {
    question: "Do you manage Instagram and Pinterest for interior designers?",
    answer:
      "Yes. We specialize in managing Instagram and Pinterest accounts, helping interior design brands increase visibility, drive website traffic, and showcase their portfolio effectively.",
  },
  {
    question: "How long does it take to see results from social media marketing?",
    answer:
      "While engagement improvements can be seen within weeks, meaningful brand growth, audience building, and lead generation typically develop over 2–4 months of consistent marketing.",
  },
]

/* ─── Component ───────────────────────────────────────────────────── */
export default function SocialMediaPageClient() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activePlatform, setActivePlatform] = useState(0);

  return (
    <>
      <Header />
      <main className="bg-white">

        {/* ════════════════════ HERO ════════════════════ */}
        <section className="relative overflow-hidden pt-32 pb-24 bg-brand-primary">
          {/* Blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand-secondary/20 blur-[140px]" />
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-brand-accent/15 blur-[110px]" />
            <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full bg-brand-secondary/10 blur-[90px]" />
          </div>
          {/* Dot grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white/40 hover:text-white/70 transition-colors mb-10 uppercase tracking-widest">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Copy */}
              <div className="lg:col-span-7 space-y-7">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-secondary/15 border border-brand-secondary/30 text-brand-accent text-[11px] font-bold tracking-wider uppercase">
                  <Megaphone className="h-3.5 w-3.5" />
                  Social Media & Meta Ads
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
                  className="text-4xl sm:text-5xl xl:text-[3.4rem] font-extrabold text-white leading-[1.08] tracking-tight">
                  Turn Your Design Work<br />
                  Into a Client<br />
                  <span className="text-brand-secondary">Magnet Online.</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
                  className="text-white/55 text-[15px] leading-relaxed max-w-lg">
                  We handle everything — organic content across all platforms, Meta ad campaigns, community management, and monthly reporting.
                  You focus on design. We bring the clients.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-3.5 pt-1">
                  <button onClick={() => setIsLeadOpen(true)}
                    className="bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold text-[14px] px-7 py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-brand-secondary/30 transition-all duration-200">
                    Get a Free Social Audit
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a href="tel:+912269827800"
                    className="px-7 py-4 border border-white/12 hover:border-white/20 bg-white/5 text-white font-bold text-[14px] rounded-xl flex items-center justify-center gap-2 transition-colors">
                    <Phone className="h-4 w-4 text-brand-accent" />
                    Talk to a Strategist
                  </a>
                </motion.div>

                {/* Platform icons row */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.45 }}
                  className="flex items-center gap-3 pt-2">
                  <span className="text-white/30 text-[11px] font-bold uppercase tracking-widest">Platforms</span>
                  <div className="flex items-center gap-2">
                    {[InstagramIcon, FacebookIcon, YoutubeIcon, PinterestIcon, LinkedinIcon].map((Icon, i) => (
                      <div key={i} className="h-8 w-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-white/60" />
                      </div>
                    ))}
                    <span className="text-white/30 text-[12px] font-semibold ml-1">+ more</span>
                  </div>
                </motion.div>
              </div>

              {/* Stat grid */}
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 grid grid-cols-2 gap-3">
                {STATS.map((s, i) => (
                  <div key={i} className="rounded-2xl p-5 flex flex-col gap-1 bg-white/6 border border-white/8">
                    <span className="text-3xl font-extrabold text-white leading-none">
                      <CountUp end={s.value} suffix={s.suffix} decimals={s.suffix === '×' || s.suffix === 'M' ? 1 : 0}
                        duration={2.5} enableScrollSpy scrollSpyOnce />
                    </span>
                    <span className="text-brand-accent text-[11px] font-bold leading-tight">{s.label}</span>
                    <span className="text-white/30 text-[10px]">{s.sub}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════════════════ TRUST STRIP ════════════════════ */}
        <section className="border-b border-slate-100 bg-brand-bg py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {[
              { icon: Star, text: '4.9 Google Rating' },
              { icon: Users, text: '150+ Studios Managed' },
              { icon: Target, text: 'Meta Business Partners' },
              { icon: Heart, text: '28K Avg Followers Built' },
              { icon: DollarSign, text: '9× Avg ROAS on Meta Ads' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-brand-primary/70">
                <Icon className="h-4 w-4 text-brand-secondary shrink-0" />
                <span className="text-[13px] font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════ PLATFORMS TABS ════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-12">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Every Platform Covered</p>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight max-w-lg">
                  We grow your presence<br />
                  <span className="text-brand-secondary italic">everywhere your clients scroll.</span>
                </h2>
                <p className="text-brand-muted text-[14px] leading-relaxed max-w-sm">
                  Each platform needs a different approach. We know exactly how to make your studio stand out on each one.
                </p>
              </div>
            </FadeUp>

            {/* Tab row */}
            <div className="flex flex-wrap gap-2 mb-8">
              {PLATFORMS.map((p, idx) => (
                <button key={idx} onClick={() => setActivePlatform(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-200 cursor-pointer border
                    ${activePlatform === idx
                      ? 'bg-brand-primary text-white border-brand-primary shadow-md'
                      : 'bg-white text-brand-muted border-slate-200 hover:border-slate-300 hover:text-brand-primary'
                    }`}>
                  <p.icon className="h-4 w-4" style={{ color: activePlatform === idx ? '#fff' : p.color }} />
                  {p.name}
                </button>
              ))}
            </div>

            {/* Active platform detail */}
            <motion.div key={activePlatform}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-3xl border p-8 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${PLATFORMS[activePlatform].bg} ${PLATFORMS[activePlatform].border}`}>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    {React.createElement(PLATFORMS[activePlatform].icon, { className: 'h-6 w-6', style: { color: PLATFORMS[activePlatform].color } })}
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-brand-primary">{PLATFORMS[activePlatform].name}</h3>
                    <span className="text-[11px] font-bold text-brand-secondary uppercase tracking-wider">{PLATFORMS[activePlatform].tag}</span>
                  </div>
                </div>
                <p className="text-brand-muted text-[15px] leading-relaxed">{PLATFORMS[activePlatform].desc}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {PLATFORMS[activePlatform].metrics.map((m, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-white/60 p-4 flex items-center gap-2.5 shadow-sm">
                    <Check className="h-3.5 w-3.5 text-brand-secondary shrink-0" strokeWidth={3} />
                    <span className="text-[13px] font-semibold text-brand-primary">{m}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════ META ADS DEEP DIVE ════════════════════ */}
        <section className="py-24 bg-brand-primary relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-secondary/15 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-accent/10 blur-[100px]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-secondary/15 border border-brand-secondary/30 text-brand-accent text-[11px] font-bold tracking-wider uppercase mb-4">
                <Target className="h-3.5 w-3.5" /> Meta Ads — Instagram & Facebook
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight max-w-lg">
                  Paid ads that bring in<br />
                  <span className="text-brand-secondary">clients, not just clicks.</span>
                </h2>
                <p className="text-white/50 text-[14px] leading-relaxed max-w-sm">
                  We manage Meta ad campaigns end-to-end — from audience research to creative to reporting. Every rupee is tracked and justified.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {META_ADS.map((item, idx) => (
                <FadeUp key={idx} delay={idx * 0.07}>
                  <div className="group h-full bg-white/5 hover:bg-white/8 border border-white/8 hover:border-white/15 rounded-3xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="h-11 w-11 rounded-2xl bg-brand-secondary/15 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-brand-accent" />
                    </div>
                    <h3 className="font-heading font-extrabold text-[16px] text-white">{item.title}</h3>
                    <p className="text-white/50 text-[13px] leading-relaxed flex-1">{item.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* ROAS callout */}
            <FadeUp delay={0.3} className="mt-8">
              <div className="rounded-3xl bg-brand-secondary/10 border border-brand-secondary/20 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
                <div>
                  <p className="text-white font-extrabold text-[16px] mb-1">Average return across all Meta ad clients</p>
                  <p className="text-white/50 text-[13px]">Tracked from ad spend to qualified consultation bookings</p>
                </div>
                <div className="flex items-baseline gap-2 shrink-0">
                  <span className="text-5xl font-extrabold text-brand-secondary">9×</span>
                  <span className="text-white/40 text-[12px] font-bold uppercase tracking-wider">ROAS</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ════════════════════ ORGANIC SERVICES ════════════════════ */}
        <section className="py-24 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Organic Social Management</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
                Everything done for you.<br />
                <span className="text-brand-secondary italic">Nothing left to figure out.</span>
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ORGANIC_SERVICES.map((s, idx) => (
                <FadeUp key={idx} delay={idx * 0.07}>
                  <div className="group h-full bg-white rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 p-7 flex flex-col gap-4 hover:-translate-y-0.5">
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

        {/* ════════════════════ BEFORE / AFTER ════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14 text-center">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">The Difference</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary">
                What changes when we manage<br />your social and ads.
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FadeUp delay={0.05}>
                <div className="rounded-3xl border border-red-100 bg-red-50/40 p-8">
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-400 text-[13px] font-black">✕</span>
                    </div>
                    <p className="text-[12px] font-black uppercase tracking-widest text-red-400">Before working with us</p>
                  </div>
                  <div className="space-y-3.5">
                    {COMPARISON.before.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-400 text-[10px] font-black">✕</span>
                        <p className="text-[13px] text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.12}>
                <div className="rounded-3xl border border-emerald-100 bg-emerald-50/40 p-8">
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-emerald-600" strokeWidth={3} />
                    </div>
                    <p className="text-[12px] font-black uppercase tracking-widest text-emerald-600">After working with us</p>
                  </div>
                  <div className="space-y-3.5">
                    {COMPARISON.after.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-emerald-600" strokeWidth={3} />
                        </span>
                        <p className="text-[13px] text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ════════════════════ PROCESS ════════════════════ */}
        <section className="py-24 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Our Process</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
                How we build and run<br />
                <span className="text-brand-secondary italic">your entire social presence.</span>
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {PROCESS.map((step, idx) => (
                <FadeUp key={idx} delay={idx * 0.08}>
                  <div className="group h-full bg-white rounded-3xl border border-slate-100 hover:shadow-md transition-all duration-300 p-6 flex flex-col gap-4 hover:-translate-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black tracking-[0.2em] text-brand-secondary">{step.step}</span>
                      <span className="text-[9px] font-bold px-2 py-1 rounded-full bg-brand-secondary/8 text-brand-secondary">{step.time}</span>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-brand-primary/5 flex items-center justify-center">
                      <step.icon className="h-4.5 w-4.5 text-brand-primary" />
                    </div>
                    <h3 className="font-heading font-extrabold text-[15px] text-brand-primary leading-snug">{step.title}</h3>
                    <p className="text-brand-muted text-[12px] leading-relaxed flex-1">{step.desc}</p>
                    <div className="flex items-center gap-1 pt-3 border-t border-slate-50">
                      {PROCESS.map((_, i) => (
                        <div key={i} className={`h-1 rounded-full transition-all ${i <= idx ? `bg-brand-secondary ${i === idx ? 'w-5' : 'w-1.5 opacity-40'}` : 'w-1.5 bg-slate-100'}`} />
                      ))}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ RESULTS ════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Real Results</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
                Studios we helped grow<br />
                <span className="text-brand-secondary italic">through social and ads.</span>
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

        {/* ════════════════════════════════════════
            FAQ
        ════════════════════════════════════════ */}
        <section className="py-24 bg-[#F4F4F2]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14 text-center">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Questions</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary">
                Common questions about<br />
                <span className="text-brand-secondary italic">SEO for designers.</span>
              </h2>
            </FadeUp>

            <FAQ
              title="Frequently Asked Questions"
              items={faqItems}
            />
          </div>
        </section>

        {/* ════════════════════ FINAL CTA ════════════════════ */}
        <CTAInline />

      </main>
      <Footer />
      <WhatsAppButton />
      <LeadDialog isOpen={isLeadOpen} onClose={() => setIsLeadOpen(false)} ctaSource="Social Media Service Page" />
    </>
  );
}