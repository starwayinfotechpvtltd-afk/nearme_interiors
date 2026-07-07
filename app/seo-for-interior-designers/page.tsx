'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Search, Check, ArrowRight, Phone, ArrowLeft,
  TrendingUp, MapPin, Star, Shield, Zap,
  BarChart3, Globe, Target, Users, Clock, ChevronDown
} from 'lucide-react';
import Header from '@/components/features/Header';
import Footer from '@/components/features/Footer';
import WhatsAppButton from '@/components/features/WhatsAppButton';
import ExitIntentPopup from '@/components/features/ExitIntentPopup';
import LeadDialog from '@/components/features/LeadDialog';
import CountUp from 'react-countup';
import SEOFeatures from '@/components/features/SEOFeatures';
import SEOClarity from '@/components/features/SEOClarity';
import FAQ from '@/components/features/FAQRow';
import CTAInline from '@/components/features/CTAInline';
import Lenis from 'lenis';



/* ─── data ─── */
const SERVICE = {
  title: 'SEO for Interior Designers',
  tagline: 'Get found by clients who are ready to invest in great design.',
  description:
    'Most interior designers rely on word of mouth. We add a second engine — one that works 24/7, bringing the right people to your website even while you sleep.',
  stats: [
    { value: 420, suffix: '%', label: 'Average Organic Traffic Growth' },
    { value: 4, suffix: ' mo', label: 'Average Time to Page 1' },
    { value: 150, suffix: '+', label: 'Design Studios Ranked' },
    { value: 96, suffix: '%', label: 'Client Retention Rate' },
  ],
  whatWeDo: [
    {
      icon: Globe,
      title: 'Local SEO',
      desc: 'We make sure you appear when someone in your city searches for an interior designer. We target the exact phrases your ideal clients type.',
    },
    {
      icon: BarChart3,
      title: 'Keyword Strategy',
      desc: 'No guessing. We research which search terms bring in serious clients and build a focused plan around those — not vanity keywords.',
    },
    {
      icon: Target,
      title: 'On-Page Optimisation',
      desc: 'We fine-tune every page of your website — headings, images, copy, meta tags — so Google understands exactly what you offer and who you serve.',
    },
    {
      icon: TrendingUp,
      title: 'Content That Attracts Clients',
      desc: 'We write blog posts, project case studies, and location pages that rank on Google and position you as the go-to designer in your area.',
    },
    {
      icon: Shield,
      title: 'Technical SEO',
      desc: 'We fix the behind-the-scenes issues that quietly hurt your rankings — slow speed, broken links, missing structure. Clean site, better results.',
    },
    {
      icon: MapPin,
      title: 'Google Business Profile',
      desc: 'We fully optimise your Google listing so you appear in map results — one of the highest-converting spots for local service searches.',
    },
  ],
  process: [
    {
      step: "01",
      title: "SEO Audit",
      desc: "Analyze website structure, speed, keywords and competitors.",
      image: "/images/process/audit.webp",
    },
    {
      step: "02",
      title: "Keyword Research",
      desc: "Find high-converting keywords with buying intent.",
      image: "/images/process/keyword.webp",
    },
    {
      step: "03",
      title: "On-Page SEO",
      desc: "Optimize content, meta tags and internal linking.",
      image: "/images/process/onpage.webp",
    },
    {
      step: "04",
      title: "Content Strategy",
      desc: "Create authority-building content that ranks.",
      image: "/images/process/content.webp",
    },
    {
      step: "05",
      title: "Growth & Tracking",
      desc: "Monitor rankings, traffic and lead generation.",
      image: "/images/process/tracking.webp",
    },
  ],
  results: [
    { metric: '#1', label: 'Google Ranking', sub: 'for "Luxury Interior Designer Mumbai"', name: 'Arjun Interiors', city: 'Mumbai' },
    { metric: '+380%', label: 'Organic Traffic', sub: 'in 5 months from baseline', name: 'Studio Veda', city: 'Bangalore' },
    { metric: '₹1.8Cr', label: 'Pipeline Value', sub: 'from organic leads in Q1', name: 'Kairos Studio', city: 'Delhi' },
  ],

faqItems : [
  {
    question: "Why do interior designers need SEO?",
    answer:
      "SEO helps interior designers rank higher on Google, attract qualified leads, and generate consistent inquiries without relying entirely on paid advertising.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "Most interior design businesses start seeing noticeable improvements within 3–6 months, depending on competition, website quality, and current rankings.",
  },
  {
    question: "Can SEO help me get local clients?",
    answer:
      "Yes. Local SEO optimizes your Google Business Profile, local citations, and location-based keywords to help you attract clients in your target service areas.",
  },
  {
    question: "What keywords should an interior design company target?",
    answer:
      "Keywords should include service-based terms such as 'luxury interior designer', 'residential interior design', and location-specific searches like 'interior designer in Kolkata'.",
  },
  {
    question: "Do I need to redesign my website for SEO?",
    answer:
      "Not always. Many SEO improvements can be implemented on your existing website through technical optimization, content enhancements, and better site structure.",
  },
  {
    question: "What is included in your SEO service?",
    answer:
      "Our SEO service includes keyword research, technical SEO, on-page optimization, content strategy, local SEO, link building, analytics tracking, and monthly reporting.",
  },
  {
    question: "Will SEO increase my project inquiries?",
    answer:
      "A well-executed SEO strategy increases website visibility and attracts users actively searching for interior design services, resulting in more qualified inquiries.",
  },
  {
    question: "Do you provide monthly SEO reports?",
    answer:
      "Yes. We provide transparent monthly reports covering keyword rankings, organic traffic growth, lead generation performance, and completed optimization work.",
  },
],
};

/* ─── tiny fade-up wrapper ─── */
function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
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

export default function ServicePageClient({ serviceId }: { serviceId: string }) {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section className="relative bg-[#070E1C] overflow-hidden pt-32 pb-24">
          {/* Ambient blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#1A3A6E]/40 blur-[120px]" />
            <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#0E2D5E]/40 blur-[100px]" />
          </div>
          {/* Grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(#4A90D9 1px,transparent 1px),linear-gradient(90deg,#4A90D9 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <Link href="/" className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white/40 hover:text-white/70 transition-colors mb-10 uppercase tracking-widest">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left copy */}
              <div className="lg:col-span-7 space-y-7">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A3A6E]/60 border border-blue-500/20 text-blue-300 text-[11px] font-bold tracking-wider uppercase">
                  <Search className="h-3.5 w-3.5" />
                  Search Engine Optimisation
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
                  className="text-4xl sm:text-5xl xl:text-[3.4rem] font-extrabold text-white leading-[1.08] tracking-tight">
                  Get Found by Clients<br />
                  <span className="text-[#3B9EFF]">Ready to Invest.</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
                  className="text-blue-100/60 text-[15px] leading-relaxed max-w-lg">
                  {SERVICE.description}
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-3.5 pt-1">
                  <button onClick={() => setIsLeadOpen(true)}
                    className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-[14px] px-7 py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-blue-900/50 transition-all duration-200">
                    Book a Free SEO Audit
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a href="tel:+912269827800"
                    className="px-7 py-4 border border-white/10 hover:border-white/20 bg-white/5 text-white font-bold text-[14px] rounded-xl flex items-center justify-center gap-2 transition-colors">
                    <Phone className="h-4 w-4 text-blue-400" />
                    Talk to a Strategist
                  </a>
                </motion.div>
              </div>

              {/* Right stat card */}
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 grid grid-cols-2 gap-3">
                {SERVICE.stats.map((s, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur border border-white/8 rounded-2xl p-5 flex flex-col gap-1">
                    <span className="text-3xl font-extrabold text-white leading-none">
                      <CountUp end={s.value} suffix={s.suffix} duration={2.5} enableScrollSpy scrollSpyOnce />
                    </span>
                    <span className="text-white/40 text-[11px] font-semibold uppercase tracking-wider leading-tight">{s.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            TRUST STRIP
        ════════════════════════════════════════ */}
        <section className="border-b border-slate-100 bg-[#F9F9F7] py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {[
              { icon: Star, text: '4.9 Google Rating' },
              { icon: Users, text: '150+ Studios Ranked' },
              { icon: Shield, text: 'Exclusive Per City' },
              { icon: Clock, text: 'Results from Month 3' },
              { icon: Zap, text: 'No Long Contracts' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-brand-primary/70">
                <Icon className="h-4 w-4 text-brand-secondary shrink-0" />
                <span className="text-[13px] font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            WHAT WE DO
        ════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">What's Included</p>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight max-w-lg">
                  Everything that goes into<br />
                  <span className="text-brand-secondary italic">ranking your studio.</span>
                </h2>
                <p className="text-brand-muted text-[14px] leading-relaxed max-w-sm">
                  No shortcuts. No black-hat tricks. Just a proven system that builds lasting visibility for your studio.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICE.whatWeDo.map((item, idx) => (
                <FadeUp key={idx} delay={idx * 0.07}>
                  <div className="group h-full bg-[#F9F9F7] hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md rounded-3xl p-7 flex flex-col gap-4 transition-all duration-300">
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

        {/* ════════════════════════════════════════
            HOW IT WORKS — timeline
        ════════════════════════════════════════ */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Blur */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[800px] h-[180px] bg-black/10 blur-[120px] rotate-[-20deg]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-5">

            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between gap-10 mb-14">

              <div>
                <span className="inline-flex items-center px-4 py-2 rounded-full border border-black/20 text-xs font-medium bg-white/40 backdrop-blur">
                  ⚡ Our Process
                </span>

                <h2 className="mt-5 text-5xl md:text-6xl font-serif leading-[1.05] text-[#2B211A]">
                  How we can
                  <br />
                  rank you
                  <br />
                  on Google
                </h2>
              </div>

              <div className="max-w-md">
                <p className="text-lg text-[#3F342D] leading-relaxed mb-6">
                  From SEO strategy to content and local search domination,
                  we build systems that consistently generate leads.
                </p>

                <button className="group flex items-center gap-3 bg-[#D5B89B] hover:bg-[#caa57f] transition px-6 py-3 rounded-full shadow-lg">
                  <span className="font-medium">
                    See our process
                  </span>

                  <span className="h-10 w-10 rounded-full bg-[#3B2D25] text-white flex items-center justify-center group-hover:translate-x-1 transition">
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">

              {SERVICE.process.map((step, idx) => (
                <div
                  key={idx}
                  className="group relative h-[420px] rounded-[28px] overflow-hidden"
                >
                  {/* Background Image */}
                  <img
                    src={step.image}
                    alt={step.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Button */}
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                      ↗
                    </button>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-white/70 text-xs tracking-[0.2em] uppercase">
                      {step.step}
                    </span>

                    <h3 className="mt-2 text-white text-xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition duration-500">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════
            RESULTS — case studies
        ════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-14">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-3">Real Results</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight">
                Studios we have helped<br />
                <span className="text-brand-secondary italic">grow through SEO.</span>
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {SERVICE.results.map((r, idx) => (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="relative overflow-hidden bg-[#070E1C] rounded-3xl p-8 flex flex-col justify-between min-h-[260px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A6E]/40 to-transparent" />
                    <div className="relative z-10">
                      <span className="text-5xl font-extrabold text-white leading-none">{r.metric}</span>
                      <p className="text-[#3B9EFF] text-[11px] font-black uppercase tracking-widest mt-1">{r.label}</p>
                      <p className="text-white/40 text-[12px] mt-1">{r.sub}</p>
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
        <SEOFeatures />
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
              items={SERVICE.faqItems}
            />
          </div>
        </section>

        {/* ════════════════════════════════════════
            FINAL CTA
        ════════════════════════════════════════ */}
        <CTAInline/>
      </main>

      <Footer />
      <WhatsAppButton />
      <ExitIntentPopup />
      <LeadDialog isOpen={isLeadOpen} onClose={() => setIsLeadOpen(false)} ctaSource="SEO Service Page" />
    </>
  );
}
