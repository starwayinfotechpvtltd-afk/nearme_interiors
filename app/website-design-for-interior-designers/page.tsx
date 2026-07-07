'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Layout, ArrowLeft, ArrowRight, Phone,
  Check, ChevronDown, TrendingUp, Star,
  MapPin, Zap, Monitor, Smartphone, Globe,
  Clock, Shield, MousePointer2, Palette,
  BarChart3, Code2, Layers, Search, Eye,
  Play, CheckCircle2,
} from 'lucide-react';
import Header from '@/components/features/Header';
import Footer from '@/components/features/Footer';
import WhatsAppButton from '@/components/features/WhatsAppButton';
import LeadDialog from '@/components/features/LeadDialog';
import CountUp from 'react-countup';
import CTAInline from '@/components/features/CTAInline';
import Lenis from 'lenis';

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
  { value: 3.8,  suffix: '×',  label: 'Avg Enquiry Rate Lift',    sub: 'vs old website' },
  { value: 1.2,  suffix: 's',  label: 'Avg Page Load Speed',      sub: 'across all devices' },
  { value: 98,   suffix: '',   label: 'Google Pagespeed Score',    sub: 'average across builds' },
  { value: 60,   suffix: '+',  label: 'Design Studios Launched',   sub: 'across India' },
];

const WHAT_MAKES_DIFFERENT = [
  {
    icon: Palette,
    title: 'Built for Design Studios',
    desc: 'We understand what luxury design clients expect when they land on your site. Every layout decision, font choice, and colour is made with your ideal client in mind — not a generic template.',
  },
  {
    icon: MousePointer2,
    title: 'Built to Convert, Not Just Impress',
    desc: 'Beautiful without a purpose is just art. We design every page to guide visitors toward one action — booking a consultation. Strategic CTAs, trust signals, and smart layouts do the selling.',
  },
  {
    icon: Zap,
    title: 'Fast Enough to Keep Impatient Clients',
    desc: 'A slow website kills trust instantly. We obsess over performance — sub-2-second load times on all devices, 90+ Google PageSpeed scores, and optimised images that never compromise quality.',
  },
  {
    icon: Smartphone,
    title: 'Flawless on Every Screen',
    desc: 'Over 70% of your clients will visit on mobile first. We design mobile-first so your portfolio looks as stunning on a phone as it does on a large studio monitor.',
  },
  {
    icon: Search,
    title: 'SEO-Ready from Day One',
    desc: 'No point having a beautiful site no one can find. Every website we build has clean code structure, proper heading hierarchy, schema markup, and local SEO foundations baked in.',
  },
  {
    icon: Shield,
    title: 'Secure, Maintained & Reliable',
    desc: 'We handle hosting, security certificates, uptime monitoring, and updates. Your website stays fast, safe, and online — so you never have to think about it again.',
  },
];

const SITE_TYPES = [
  {
    tag: 'Most Popular',
    title: 'Premium Portfolio Website',
    price: 'From ₹65,000',
    icon: Palette,
    color: 'bg-brand-secondary',
    desc: 'A high-converting portfolio that showcases your best work and turns visitors into consultation bookings.',
    features: [
      'Custom design — no templates',
      'Up to 8 pages',
      'Project showcase with filters',
      'Contact & enquiry forms',
      'Mobile & tablet optimised',
      'Google Analytics setup',
      'Basic SEO foundations',
      '3 months post-launch support',
    ],
  },
  {
    tag: 'Full Package',
    title: 'Conversion Studio Website',
    price: 'From ₹1,20,000',
    icon: TrendingUp,
    color: 'bg-brand-primary',
    desc: 'A full marketing website with landing pages, blog, booking integration, and advanced SEO built to dominate local search.',
    features: [
      'Everything in Portfolio Website',
      'Unlimited pages',
      'Blog & content system',
      'Online booking / enquiry flow',
      'Location landing pages',
      'Advanced SEO setup',
      'Speed & Core Web Vitals optimised',
      '6 months post-launch support',
    ],
  },
  {
    tag: 'Add-on',
    title: 'Redesign & Refresh',
    price: 'From ₹40,000',
    icon: Layers,
    color: 'bg-brand-accent',
    desc: 'Your existing website modernised — faster, more beautiful, better converting — without starting from scratch.',
    features: [
      'Full visual redesign',
      'Speed & performance fixes',
      'Mobile responsiveness overhaul',
      'SEO audit & fixes',
      'Conversion rate improvements',
      'New photography integration',
      'Copy refresh on key pages',
      '2 months post-launch support',
    ],
  },
];

const PROCESS = [
  {
    step: '01', time: 'Day 1–2',
    icon: Eye,
    title: 'Discovery Call',
    desc: 'We learn about your studio, your clients, your competitors, and what you want the website to achieve. No assumptions — we ask the right questions first.',
  },
  {
    step: '02', time: 'Day 3–7',
    icon: Palette,
    title: 'Design Concepts',
    desc: 'We present 2 design directions for your homepage. You choose the one that resonates, give feedback, and we refine until it feels exactly right.',
  },
  {
    step: '03', time: 'Week 2–3',
    icon: Layers,
    title: 'Full Build',
    desc: 'All pages designed and developed. We add your photography, write or refine copy, set up forms, connect integrations, and optimise for performance.',
  },
  {
    step: '04', time: 'Week 4',
    icon: Monitor,
    title: 'Review & Test',
    desc: 'You get a private staging link to review everything. We test on 8+ devices and browsers. Any changes — we make them before going live.',
  },
  {
    step: '05', time: 'Week 4–5',
    icon: Globe,
    title: 'Launch & Handover',
    desc: 'We launch, submit to Google, set up analytics, and walk you through how to update your own content. You own everything — no lock-in.',
  },
];

const WEBSITE_FEATURES = [
  { icon: Code2,         title: 'Custom Coded',              desc: 'No page builders. No Wix. Clean, fast, custom code that gives you a real performance edge over template-built competitor sites.' },
  { icon: BarChart3,     title: 'Analytics & Heatmaps',      desc: 'We set up Google Analytics 4, Search Console, and optional heatmap tracking so you can see exactly how visitors behave on your site.' },
  { icon: Clock,         title: 'Booking Integration',        desc: 'Connect Calendly, Google Calendar, or a custom enquiry flow so potential clients can book a consultation directly from your website.' },
  { icon: Globe,         title: 'CMS for Easy Updates',      desc: 'Add new projects yourself without touching code. We build on a simple CMS so your portfolio stays current without needing a developer.' },
  { icon: MapPin,        title: 'Location Pages',            desc: 'Rank in multiple cities with dedicated location landing pages — "Interior Designer in Mumbai", "Interior Designer in Pune" and more.' },
  { icon: Play,          title: 'Video & 3D Integration',    desc: 'Embed walkthrough videos, 3D room renders, and before-after sliders that let clients experience your work before they even call you.' },
];

const COMPARISON = {
  bad: [
    'Generic Wix / Squarespace template',
    'Loads slowly on mobile',
    'Looks identical to 100 other design sites',
    'No clear path to booking a consultation',
    'Disappears on Google search',
    'You cannot update it without a developer',
    'No tracking — you have no idea what is working',
  ],
  good: [
    'Custom designed for your specific brand',
    'Sub-2-second load on all devices',
    'Unique visual identity that attracts premium clients',
    'Clear conversion flow to enquiry or booking',
    'SEO-optimised from the ground up',
    'You manage your own content with ease',
    'Full analytics showing traffic, leads, and behaviour',
  ],
};

const RESULTS = [
  { metric: '3.8×',  label: 'More Enquiries',     sub: 'after website redesign launch',   name: 'Arjun Interiors',   city: 'Mumbai'    },
  { metric: '0.9s',  label: 'Page Load Time',      sub: 'down from 6.2 seconds',           name: 'Studio Veda',       city: 'Bangalore' },
  { metric: '#1',    label: 'Google Ranking',       sub: 'for "Interior Designer Delhi"',   name: 'Kairos Studio',     city: 'Delhi'     },
];

const FAQS = [
  {
    q: 'How long does the website take to build?',
    a: 'Most projects are live within 4–5 weeks from the kickoff call. The timeline depends on how quickly you provide photography and feedback. We give you a clear schedule at the start so there are no surprises.',
  },
  {
    q: 'Do I need to provide my own photos?',
    a: 'Yes — your real project photography is the most important element of the website. If you do not have professional photos yet, we can recommend photographers we work with regularly. We make the most of whatever you have.',
  },
  {
    q: 'Will I be able to update the website myself?',
    a: 'Absolutely. We build with a simple CMS (content management system) so you can add new projects, update prices, and change copy without touching code or calling us. We walk you through it at handover.',
  },
  {
    q: 'What platform do you build on?',
    a: 'Most of our sites are built on Next.js for performance or WordPress with a custom theme for easier self-management. We recommend the best fit based on your needs, not what is easiest for us.',
  },
  {
    q: 'Do you handle hosting and domain?',
    a: 'Yes. We set everything up — domain, hosting, SSL certificate, email forwarding. You own all accounts. We just handle the technical setup so you do not have to figure it out.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes — our Redesign & Refresh package is built exactly for this. We modernise the look, fix the speed, improve the mobile experience, and add proper conversion elements. No need to start from scratch.',
  },
];






/* ─── Component ───────────────────────────────────────────────────── */
export default function WebDesignPageClient() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  const [openFaq, setOpenFaq]       = useState<number | null>(0);


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

  return (
    <>
      <Header />
      <main className="bg-white">

        {/* ════════════════════ HERO ════════════════════ */}
        <section className="relative overflow-hidden pt-32 pb-24 bg-brand-primary">
          {/* Blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-secondary/15 blur-[140px]" />
            <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-brand-accent/10 blur-[120px]" />
          </div>
          {/* Grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{ backgroundImage: 'linear-gradient(#3B82F6 1px,transparent 1px),linear-gradient(90deg,#3B82F6 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white/40 hover:text-white/70 transition-colors mb-10 uppercase tracking-widest">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left copy */}
              <div className="lg:col-span-7 space-y-7">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-secondary/15 border border-brand-secondary/30 text-brand-accent text-[11px] font-bold tracking-wider uppercase">
                  <Layout className="h-3.5 w-3.5" />
                  Website Design & Development
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
                  className="text-4xl sm:text-5xl xl:text-[3.4rem] font-extrabold text-white leading-[1.08] tracking-tight">
                  A Website That Makes<br />
                  Luxury Clients Say<br />
                  <span className="text-brand-secondary">"This is the one."</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
                  className="text-white/55 text-[15px] leading-relaxed max-w-lg">
                  Most interior designer websites look the same — slow, generic, and forgettable. We build custom, fast,
                  and conversion-focused digital showrooms that make serious clients want to reach out immediately.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-3.5 pt-1">
                  <button onClick={() => setIsLeadOpen(true)}
                    className="bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold text-[14px] px-7 py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-brand-secondary/30 transition-all duration-200">
                    See Pricing & Get Started
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a href="tel:+912269827800"
                    className="px-7 py-4 border border-white/12 hover:border-white/20 bg-white/5 text-white font-bold text-[14px] rounded-xl flex items-center justify-center gap-2 transition-colors">
                    <Phone className="h-4 w-4 text-brand-accent" />
                    Talk to a Designer
                  </a>
                </motion.div>

                {/* Tech badges */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.45 }}
                  className="flex items-center gap-3 pt-1 flex-wrap">
                  <span className="text-white/30 text-[11px] font-bold uppercase tracking-widest">Built with</span>
                  {['Next.js', 'WordPress', 'Tailwind CSS', 'Vercel'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-lg bg-white/6 border border-white/8 text-white/50 text-[11px] font-bold">
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Right stats */}
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 grid grid-cols-2 gap-3">
                {STATS.map((s, i) => (
                  <div key={i} className="rounded-2xl p-5 flex flex-col gap-1 bg-white/6 border border-white/8">
                    <span className="text-3xl font-extrabold text-white leading-none">
                      <CountUp end={s.value} suffix={s.suffix}
                        decimals={s.suffix === '×' || s.suffix === 's' ? 1 : 0}
                        duration={2.5} enableScrollSpy scrollSpyOnce />
                    </span>
                    <span className="text-brand-accent text-[11px] font-bold leading-tight">{s.label}</span>
                    <span className="text-white/30 text-[10px]">{s.sub}</span>
                  </div>
                ))}

                {/* Mock browser window */}
                <div className="col-span-2 rounded-2xl overflow-hidden border border-white/10 bg-white/4">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/8 border-b border-white/8">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                    </div>
                    <div className="flex-1 bg-white/8 rounded-md px-3 py-1 text-[10px] text-white/30 font-medium">
                      yourstudio.com
                    </div>
                  </div>
                  {/* Fake content skeleton */}
                  <div className="p-4 space-y-2.5">
                    <div className="h-24 rounded-lg bg-white/6 border border-white/5" />
                    <div className="grid grid-cols-3 gap-2">
                      {[1,2,3].map(i => <div key={i} className="h-14 rounded-lg bg-white/4 border border-white/5" />)}
                    </div>
                    <div className="h-2.5 w-3/4 rounded-full bg-white/8" />
                    <div className="h-2.5 w-1/2 rounded-full bg-white/5" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════════════════ TRUST STRIP ════════════════════ */}
        <section className="border-b border-slate-100 bg-brand-bg py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {[
              { icon: Star,         text: '4.9 Google Rating'       },
              { icon: CheckCircle2, text: '60+ Sites Launched'      },
              { icon: Zap,          text: 'Sub-2s Load Times'       },
              { icon: Search,       text: 'SEO-Ready from Day One'  },
              { icon: Shield,       text: 'No Lock-in Contracts'    },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-brand-primary/70">
                <Icon className="h-4 w-4 text-brand-secondary shrink-0" />
                <span className="text-[13px] font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════ WHY DIFFERENT ════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Why We Are Different</p>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight max-w-lg">
                  Not just pretty.<br />
                  <span className="text-brand-secondary italic">Built to bring in clients.</span>
                </h2>
                <p className="text-brand-muted text-[14px] leading-relaxed max-w-sm">
                  Any agency can make something that looks nice. We build websites that rank on Google, load in under 2 seconds, and turn visitors into bookings.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHAT_MAKES_DIFFERENT.map((item, idx) => (
                <FadeUp key={idx} delay={idx * 0.07}>
                  <div className="group h-full bg-brand-bg hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md rounded-3xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="h-11 w-11 rounded-2xl bg-brand-primary/5 group-hover:bg-brand-secondary/8 flex items-center justify-center transition-colors">
                      <item.icon className="h-5 w-5 text-brand-primary group-hover:text-brand-secondary transition-colors" />
                    </div>
                    <h3 className="font-heading font-extrabold text-[16px] text-brand-primary">{item.title}</h3>
                    <p className="text-brand-muted text-[13px] leading-relaxed flex-1">{item.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ PACKAGES ════════════════════ */}
        <section className="py-24 bg-brand-bg" id="packages">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14 text-center">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Packages</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary">
                Choose your starting point.<br />
                <span className="text-brand-secondary italic">We handle the rest.</span>
              </h2>
              <p className="text-brand-muted text-[14px] mt-3 max-w-lg mx-auto">
                All packages include hosting setup, SSL, mobile optimisation, and 3–6 months of post-launch support.
              </p>
            </FadeUp>

            {/* ── Three-column package cards ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
              {SITE_TYPES.map((pkg, idx) => {
                const isMiddle = idx === 1;
                return (
                  <FadeUp key={idx} delay={idx * 0.1} className="h-full">
                    <div className={`relative h-full rounded-3xl flex flex-col overflow-hidden transition-all duration-300
                      ${isMiddle
                        ? 'bg-brand-primary border-2 border-brand-secondary shadow-2xl shadow-brand-primary/20 md:-translate-y-2'
                        : 'bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md'
                      }`}>

                      {/* Popular badge */}
                      {isMiddle && (
                        <div className="absolute -top-px left-0 right-0 h-[3px] bg-brand-secondary rounded-t-3xl" />
                      )}
                      {pkg.tag && (
                        <div className={`absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider
                          ${isMiddle ? 'bg-brand-secondary text-white' : 'bg-brand-secondary/10 text-brand-secondary'}`}>
                          {pkg.tag}
                        </div>
                      )}

                      <div className="p-8 flex flex-col gap-5 flex-1">
                        {/* Icon row */}
                        <div className={`h-12 w-12 rounded-2xl flex items-center justify-center
                          ${isMiddle ? 'bg-brand-secondary/15' : 'bg-brand-primary/5'}`}>
                          <pkg.icon className={`h-6 w-6 ${isMiddle ? 'text-brand-accent' : 'text-brand-primary'}`} />
                        </div>

                        {/* Name + price */}
                        <div>
                          <h3 className={`font-heading font-extrabold text-xl mb-1 ${isMiddle ? 'text-white' : 'text-brand-primary'}`}>
                            {pkg.title}
                          </h3>
                          <p className={`text-[22px] font-extrabold ${isMiddle ? 'text-brand-secondary' : 'text-brand-primary'}`}>
                            {pkg.price}
                          </p>
                        </div>

                        <p className={`text-[13px] leading-relaxed ${isMiddle ? 'text-white/55' : 'text-brand-muted'}`}>
                          {pkg.desc}
                        </p>

                        {/* Divider */}
                        <div className={`h-px w-full ${isMiddle ? 'bg-white/10' : 'bg-slate-100'}`} />

                        {/* Feature list */}
                        <ul className="space-y-2.5 flex-1">
                          {pkg.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <Check className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${isMiddle ? 'text-brand-secondary' : 'text-emerald-500'}`} strokeWidth={3} />
                              <span className={`text-[13px] font-medium ${isMiddle ? 'text-white/70' : 'text-brand-muted'}`}>{f}</span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <button onClick={() => setIsLeadOpen(true)}
                          className={`w-full mt-2 py-3.5 rounded-xl font-bold text-[13px] flex items-center justify-center gap-2 cursor-pointer transition-all
                            ${isMiddle
                              ? 'bg-brand-secondary hover:bg-brand-secondary/90 text-white shadow-lg shadow-brand-secondary/25'
                              : 'bg-brand-primary/5 hover:bg-brand-primary/10 text-brand-primary border border-slate-100'
                            }`}>
                          Get started
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>

            <FadeUp delay={0.3} className="mt-6 text-center">
              <p className="text-brand-muted text-[13px]">
                Not sure which fits?{' '}
                <button onClick={() => setIsLeadOpen(true)} className="text-brand-secondary font-bold hover:underline cursor-pointer">
                  Book a free 30-min call
                </button>{' '}
                and we will recommend the right one.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ════════════════════ FEATURES BENTO ════════════════════ */}
        <section className="py-24 bg-white" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">What's Built In</p>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight max-w-lg">
                  Every feature your studio<br />
                  <span className="text-brand-secondary italic">actually needs.</span>
                </h2>
                <p className="text-brand-muted text-[14px] leading-relaxed max-w-sm">
                  No extras to buy, no plugins to configure. Everything below is included in every build we do.
                </p>
              </div>
            </FadeUp>

            {/* ── Asymmetric Bento Grid ── */}
            <div className="grid grid-cols-12 gap-4 auto-rows-[minmax(140px,auto)]">

              {/* Hero wide cell */}
              <FadeUp delay={0.0} className="col-span-12 lg:col-span-8 row-span-1">
                <div className="h-full bg-brand-primary/5 border border-brand-primary/10 rounded-3xl p-7 flex flex-col justify-between gap-3 group hover:bg-brand-primary/8 transition-colors">
                  <div className="h-11 w-11 rounded-2xl bg-brand-primary/8 flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-[18px] text-brand-primary mb-2">Custom coded — no page builders</h3>
                    <p className="text-brand-muted text-[13px] leading-relaxed max-w-xl">
                      No Wix, no Squarespace, no Elementor. Clean hand-written code gives you a real performance edge —
                      sub-2-second load times, 98+ PageSpeed score, and a site no competitor template can replicate.
                    </p>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary">Performance foundation</p>
                </div>
              </FadeUp>

              {/* Stat cell — tall */}
              <FadeUp delay={0.06} className="col-span-12 sm:col-span-6 lg:col-span-4 row-span-2">
                <div className="h-full bg-brand-primary rounded-3xl p-7 flex flex-col gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div className="mt-auto">
                    <p className="text-6xl font-extrabold text-white leading-none">98</p>
                    <p className="text-brand-accent text-[11px] font-black uppercase tracking-widest mt-1">Google PageSpeed</p>
                    <p className="text-white/40 text-[12px] mt-1">Average across all our builds</p>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mt-auto">Core web vitals</p>
                </div>
              </FadeUp>

              {/* Small cells row */}
              <FadeUp delay={0.08} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="h-full bg-brand-bg border border-slate-100 rounded-3xl p-6 flex flex-col gap-3 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all">
                  <div className="h-10 w-10 rounded-xl bg-brand-primary/5 flex items-center justify-center">
                    <Smartphone className="h-4.5 w-4.5 text-brand-primary" />
                  </div>
                  <h3 className="font-heading font-extrabold text-[15px] text-brand-primary">Mobile-first design</h3>
                  <p className="text-brand-muted text-[12px] leading-relaxed">70% of visitors arrive on mobile. Every layout is designed for phones first, then scaled up.</p>
                </div>
              </FadeUp>

              <FadeUp delay={0.1} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="h-full bg-brand-bg border border-slate-100 rounded-3xl p-6 flex flex-col gap-3 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all">
                  <div className="h-10 w-10 rounded-xl bg-brand-primary/5 flex items-center justify-center">
                    <Search className="h-4.5 w-4.5 text-brand-primary" />
                  </div>
                  <h3 className="font-heading font-extrabold text-[15px] text-brand-primary">SEO-ready from day one</h3>
                  <p className="text-brand-muted text-[12px] leading-relaxed">Schema markup, heading hierarchy, local SEO foundations, and Search Console connected at launch.</p>
                </div>
              </FadeUp>

              {/* Wide cell */}
              <FadeUp delay={0.12} className="col-span-12 lg:col-span-8">
                <div className="h-full bg-brand-bg border border-slate-100 rounded-3xl p-7 flex flex-col gap-3 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all">
                  <div className="h-10 w-10 rounded-xl bg-brand-primary/5 flex items-center justify-center">
                    <Globe className="h-4.5 w-4.5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-[16px] text-brand-primary mb-2">CMS — you update content yourself</h3>
                    <p className="text-brand-muted text-[13px] leading-relaxed">Add new projects, update copy, change photos — no developer needed. We build with a simple content system and walk you through it at handover. You own everything.</p>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary">No developer needed after launch</p>
                </div>
              </FadeUp>

              {/* Small cells bottom row */}
              {[
                { icon: Clock,       title: 'Booking integration',     desc: 'Calendly or a custom enquiry flow — visitors book consultations directly from your site.' },
                { icon: BarChart3,   title: 'Analytics and heatmaps',  desc: 'Google Analytics 4, Search Console, and optional heatmaps to see exactly how visitors behave.' },
                { icon: MapPin,      title: 'Location pages',          desc: 'Rank in multiple cities with dedicated landing pages targeting local search terms.' },
                { icon: Play,        title: 'Video and 3D walkthroughs',desc: 'Embed room tours, 3D renders, and before-after sliders that let clients experience your work.' },
              ].map((f, idx) => (
                <FadeUp key={idx} delay={0.14 + idx * 0.06} className="col-span-12 sm:col-span-6 lg:col-span-3">
                  <div className="h-full bg-brand-bg border border-slate-100 rounded-3xl p-6 flex flex-col gap-3 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all">
                    <div className="h-10 w-10 rounded-xl bg-brand-primary/5 flex items-center justify-center">
                      <f.icon className="h-4 w-4 text-brand-primary" />
                    </div>
                    <h3 className="font-heading font-extrabold text-[14px] text-brand-primary">{f.title}</h3>
                    <p className="text-brand-muted text-[12px] leading-relaxed">{f.desc}</p>
                  </div>
                </FadeUp>
              ))}

            </div>
          </div>
        </section>

                {/* ════════════════════ BEFORE / AFTER ════════════════════ */}
        <section className="py-24 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14 text-center">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">The Difference</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary">
                A website that works for you,<br />not against you.
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FadeUp delay={0.05}>
                <div className="rounded-3xl border border-red-100 bg-red-50/40 p-8">
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-400 text-[13px] font-black">✕</span>
                    </div>
                    <p className="text-[12px] font-black uppercase tracking-widest text-red-400">The typical design studio website</p>
                  </div>
                  <div className="space-y-3.5">
                    {COMPARISON.bad.map((item, i) => (
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
                    <p className="text-[12px] font-black uppercase tracking-widest text-emerald-600">A website built by us</p>
                  </div>
                  <div className="space-y-3.5">
                    {COMPARISON.good.map((item, i) => (
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
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Our Process</p>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
                  From brief to live site<br />
                  <span className="text-brand-secondary italic">in 4 to 5 weeks.</span>
                </h2>
                <p className="text-brand-muted text-[14px] leading-relaxed max-w-xs sm:text-right">
                  A clear process with no surprises. You know exactly what is happening at every stage.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {PROCESS.map((step, idx) => (
                <FadeUp key={idx} delay={idx * 0.08}>
                  <div className="group h-full bg-brand-bg hover:bg-white border border-slate-100 hover:shadow-md rounded-3xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black tracking-[0.2em] text-brand-secondary">{step.step}</span>
                      <span className="text-[9px] font-bold px-2 py-1 rounded-full bg-brand-secondary/8 text-brand-secondary">{step.time}</span>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-brand-primary/5 flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-brand-primary" />
                    </div>
                    <h3 className="font-heading font-extrabold text-[15px] text-brand-primary leading-snug">{step.title}</h3>
                    <p className="text-brand-muted text-[12px] leading-relaxed flex-1">{step.desc}</p>
                    <div className="flex items-center gap-1 pt-3 border-t border-slate-100">
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
        <section className="py-24 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Real Results</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
                Studios whose websites<br />
                <span className="text-brand-secondary italic">changed their business.</span>
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

        {/* ════════════════════ FAQ ════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <FadeUp className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-4">Questions</p>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight mb-6">
                  Common questions about<br />
                  <span className="text-brand-secondary italic">website design.</span>
                </h2>
                <p className="text-brand-muted text-[14px] leading-relaxed mb-8">
                  Honest answers to everything you are probably wondering before committing to a new website.
                </p>
                <button onClick={() => setIsLeadOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-[13px] transition-colors cursor-pointer">
                  Ask us anything
                  <ArrowRight className="h-4 w-4" />
                </button>
              </FadeUp>

              <div className="lg:col-span-8">
                <div className="divide-y divide-slate-100">
                  {FAQS.map((faq, idx) => (
                    <div key={idx}>
                      <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex items-start justify-between gap-6 py-6 text-left cursor-pointer group">
                        <span className={`font-heading font-extrabold text-[15px] sm:text-[16px] leading-snug transition-colors
                          ${openFaq === idx ? 'text-brand-primary' : 'text-brand-primary/70 group-hover:text-brand-primary'}`}>
                          {faq.q}
                        </span>
                        <motion.div animate={{ rotate: openFaq === idx ? 180 : 0 }} transition={{ duration: 0.25 }}
                          className="shrink-0 mt-0.5 h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center">
                          <ChevronDown className="h-4 w-4 text-brand-muted" />
                        </motion.div>
                      </button>
                      <motion.div initial={false}
                        animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                        <p className="pb-6 text-brand-muted text-[14px] leading-relaxed max-w-2xl">{faq.a}</p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════ FINAL CTA ════════════════════ */}
<CTAInline/>

      </main>

      <Footer />
      <WhatsAppButton />
      <LeadDialog isOpen={isLeadOpen} onClose={() => setIsLeadOpen(false)} ctaSource="Website Design Service Page" />
    </>
  );
}