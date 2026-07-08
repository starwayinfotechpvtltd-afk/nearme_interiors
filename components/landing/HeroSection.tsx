"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  ArrowRight,
  TrendingUp,
  Star,
  Users,
  ShieldCheck,
  Phone,
  UsersIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroSectionProps {
  onOpenLead: (source: string) => void;
}

const TRUSTED_BRANDS = [
  {
    name: "Google Partner",
    logo: "/Images/partner/p_google.webp",
  },
  {
    name: "Meta Business",
    logo: "/Images/partner/p_houzz.webp",
  },
  {
    name: "HubSpot",
    logo: "/Images/partner/p_hubspot.webp",
  },
  {
    name: "Houzz Pro",
    logo: "/Images/partner/p_meta.webp",
  },
];

export default function HeroSection({ onOpenLead }: HeroSectionProps) {
  return (
    <section className="hero-selection relative min-h-screen flex flex-col bg-[#070E1C] overflow-hidden ">
      {/* ── Ambient glow blobs ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-[#1A3A6E]/40 blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#0E2D5E]/50 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#112B5A]/30 blur-[90px]" />
      </div>

      {/* ── Subtle grid overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#4A90D9 1px, transparent 1px), linear-gradient(90deg, #4A90D9 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* ══════════════════════════════════════
          HERO BODY
      ══════════════════════════════════════ */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-16 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* ── LEFT: Copy ── */}
            <div className="space-y-7">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A3A6E]/60 border border-blue-500/20 text-blue-300 text-[11px] font-bold tracking-wider uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Marketing That Designs Success
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="text-4xl sm:text-5xl xl:text-[3.6rem] 2xl:text-[3.8rem] font-extrabold text-white leading-[1.08] tracking-tight"
              >
                Get More Interior
                <br />
                Design Clients.
                <br />
                <span className="text-[#3B9EFF]">Grow Your Business.</span>
              </motion.h1>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="text-blue-100/60 text-[15px] leading-relaxed max-w-lg"
              >
                We help interior designers generate qualified leads and 3X
                revenue growth with SEO, Meta Ads, Social Media &amp;
                Conversion-Focused Websites.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
              >
                <Button
                  onClick={() => onOpenLead("Hero Main CTA")}
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-[14px] px-7 py-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-blue-900/50 hover:shadow-blue-800/60 transition-all duration-200"
                >
                  Book Free Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <a
                  href="#case-studies"
                  className="px-7 py-[14px] border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/8 text-white font-bold text-[14px] text-center rounded-xl flex items-center justify-center gap-1.5 transition-colors backdrop-blur-sm"
                >
                  View Case Studies
                </a>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="flex flex-wrap items-center gap-6 pt-4"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-yellow-400/10 border border-yellow-400/20">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-[13px] leading-none">
                      4.9 Rating
                    </p>
                    <p className="text-blue-100/50 text-[11px] mt-0.5">
                      on Google
                    </p>
                  </div>
                </div>

                <div className="w-px h-8 bg-white/10" />

                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/20">
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-[13px] leading-none">
                      150+ Designers
                    </p>
                    <p className="text-blue-100/50 text-[11px] mt-0.5">
                      Interior Designers Served
                    </p>
                  </div>
                </div>

                <div className="w-px h-8 bg-white/10" />

                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-green-500/10 border border-green-500/20">
                    <ShieldCheck className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-[13px] leading-none">
                      96% Retention
                    </p>
                    <p className="text-blue-100/50 text-[11px] mt-0.5">
                      Client Retention Rate
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT: Image + floating cards ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Main image frame */}
              <div className="relative w-full max-w-[520px]">
                {/* Outer glow ring */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-600/30 via-transparent to-blue-900/20 blur-sm" />

                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-950/60 aspect-[16/11]">
                  {/* Interior image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80"
                    alt="Luxury Interior Design"
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070E1C]/70 via-[#070E1C]/10 to-transparent" />

                  {/* Play button in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors">
                        <div className="w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-[16px] border-l-white ml-1" />
                      </div>
                      <span className="text-white/80 text-[11px] font-semibold tracking-wide">
                        See How We Help Designers Grow
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card — Leads Generated (top right) */}
              {/* <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-2 sm:right-4 bg-[#0D1A35]/95 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl shadow-blue-950/50 min-w-[160px]"
              >
                <p className="text-blue-100/60 text-[10px] font-bold uppercase tracking-wider mb-1">
                  Leads Generated
                </p>
                <p className="text-[#3B9EFF] text-3xl font-extrabold leading-none">
                  <CountUp end={15000} separator="," suffix="+" duration={3} enableScrollSpy scrollSpyOnce />
                </p>
                <p className="text-blue-100/50 text-[10px] font-medium mt-1">In Last 12 Months</p>
                <svg
                  viewBox="0 0 80 28"
                  className="mt-2 w-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline
                    points="0,24 14,18 28,20 42,10 56,12 68,4 80,2"
                    stroke="#3B9EFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="0,24 14,18 28,20 42,10 56,12 68,4 80,2 80,28 0,28"
                    fill="url(#grad)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B9EFF" />
                      <stop offset="100%" stopColor="#3B9EFF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div> */}

              {/* Floating card — Revenue Growth (bottom left) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 left-0 sm:-left-4 bg-[#0D1A35]/95 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl shadow-blue-950/50 min-w-[150px]"
              >
                <p className="text-blue-100/60 text-[10px] font-bold uppercase tracking-wider mb-1">
                  Revenue Growth
                </p>
                <p className="text-white text-3xl font-extrabold leading-none">
                  3X
                </p>
                <p className="text-blue-100/50 text-[10px] font-medium mt-1">
                  Average Increase
                </p>
                {/* Mini bar chart */}
                <div className="flex items-end gap-1 mt-2 h-7">
                  {[35, 50, 42, 65, 58, 80, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background:
                          i === 5
                            ? "#3B9EFF"
                            : `rgba(59,158,255,${0.25 + i * 0.05})`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          PARTNER LOGOS STRIP
      ══════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-6 sm:py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Glass Container */}
          <div
            className="relative overflow-hidden rounded-2xl sm:rounded-[28px] lg:rounded-[32px] p-2.5 sm:p-3 bg-white/[0.08] backdrop-blur-2xl border border-white/15 shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-white/5 to-blue-500/10" />

            {/* Grid Overlay */}
            <div
              className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"
            />
            <div className="relative grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4 lg:grid-cols-[repeat(4,minmax(0,1fr))_minmax(280px,340px)]">
              {TRUSTED_BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="min-w-0 h-16 sm:h-[74px] lg:h-[82px] rounded-2xl lg:rounded-3xl bg-white/[0.12] backdrop-blur-xl border border-white/20 flex items-center justify-center px-3 transition-all duration-300 hover:bg-white/[0.16] hover:border-blue-400/30 hover:-translate-y-1"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={170}
                    height={60}
                    priority
                    className="max-h-8 sm:max-h-9 lg:max-h-10 max-w-full w-auto object-contain"
                  />
                </div>
              ))}

              {/* CTA */}
              <div
                className="relative overflow-hidden col-span-2 md:col-span-4 lg:col-span-1 min-h-20 lg:h-[82px] rounded-2xl lg:rounded-3xl bg-gradient-to-r from-[#356BFF] via-[#3F7BFF] to-[#2D5BEB] border border-white/20 shadow-[0_15px_40px_rgba(59,130,246,0.35)] flex items-center justify-center sm:justify-start gap-3 sm:gap-4 px-4 sm:px-6"
              >
                {/* Internal Glow */}
                <div
                  className="absolute -right-10 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/20 blur-3xl"
                />
                {/* Icon Glass Box */}
                <div
                  className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center"
                >
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="relative min-w-0">
                  <h4 className="text-white text-[14px] sm:text-[15px] font-semibold leading-tight">
                    More Than Just Marketing.
                  </h4>
                  <p className="text-blue-100 text-[14px] sm:text-[15px] font-medium leading-tight mt-0.5">
                    We're Growth Partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
