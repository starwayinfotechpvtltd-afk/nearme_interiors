'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, Check, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, FacebookIcon } from '@/components/ui/SocialIcons';
import { servicesData, locationsData } from '@/data/agencyData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { setError('Please enter an email address.'); return; }
    if (!/\S+@\S+\.\S+/.test(email)) { setError('Please enter a valid email.'); return; }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="relative bg-brand-primary text-white overflow-hidden">
      {/* ══════════════════════════════════════
          MIDDLE — links + newsletter
      ══════════════════════════════════════ */}
      <div className="relative overflow-hidden border-b border-slate-800">
        {/* Giant Background Wordmark */}
        <div
          className="absolute inset-x-0 bottom-[-40px] flex justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <p
            className="
                font-extrabold
                tracking-tighter
                whitespace-nowrap
                text-white/[0.04]
                leading-none
              "
            style={{ fontSize: "clamp(4rem, 15vw, 16rem)", }}
          >
            NeaR Me
          </p>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="text-[14px] font-black uppercase tracking-[0.18em] text-slate-400 mb-5">Services</p>
            <ul className="space-y-3">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-[13px] font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    {s.title.replace('for Interior Designers', '').trim()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[14px] font-black uppercase tracking-[0.18em] text-slate-400 mb-5">Cities</p>
            <ul className="space-y-3">
              {locationsData.slice(0, 6).map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/location/${loc.slug}`}
                    className="text-[13px] font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    {loc.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div className="space-y-6">
            <div>
              <p className="text-[14px] font-black uppercase tracking-[0.18em] text-slate-400 mb-3">Address</p>
              <p className="text-[13px] text-slate-400 leading-relaxed">
                59C/ Tiljala Road, <br /> JBS Haldane Ave, Gobra,<br/> Kolkata, West Bengal 700046
              </p>
            </div>
            <div>
              <p className="text-[14px] font-black uppercase tracking-[0.18em] text-slate-400 mb-3">Follow</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-[#E4405F] transition-colors text-white"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-[#0A66C2] transition-colors text-white"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-[#1877F2] transition-colors text-white"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>


          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 mb-3">Newsletter</p>
            <p className="text-[13px] text-slate-400 leading-relaxed mb-4">
              Monthly breakdowns of high-performing design ads &amp; SEO strategy.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="info@starwaywebdigital.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 pl-3 pr-10 text-[13px] focus:outline-none focus:border-brand-secondary text-white placeholder:text-slate-600"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-brand-secondary hover:bg-brand-secondary/90 text-white rounded-md flex items-center justify-center transition-colors cursor-pointer"
                >
                  {subscribed ? <Check className="h-3.5 w-3.5" /> : <Send className="h-3.5 w-3.5" />}
                </button>
              </div>
              {error && <p className="text-[11px] text-red-400">{error}</p>}
              {subscribed && <p className="text-[11px] text-green-400 font-semibold">You&apos;re subscribed!</p>}
            </form>
          {/* number and email */}
          <div className="mt-4">
            <p className="text-[15px] text-slate-400">
              Call Us: +91 8240669415
            </p>
            <p className="text-[15px] text-slate-400">
              Email Us: info@starwaywebdigital.com
            </p>
          </div>
          </div>
        </div>
      </div>
      {/* ══════════════════════════════════════
          LEGAL DISCLAIMER
      ══════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-1 border-t border-slate-800">
        <p className="text-[11px] text-slate-400 leading-relaxed">
          <span className="font-bold text-white">Legal Disclaimer:</span> This website is independently owned and operated. It is not part of or associated with Near Me Interiors Pvt. Ltd.
        </p>
      </div>

      {/* ══════════════════════════════════════
          BOTTOM COPYRIGHT STRIP
      ══════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-slate-600 font-medium">
        <div>
          <p className="uppercase tracking-wider">© {new Date().getFullYear()} NeaR Me Interior All Rights Reserved</p>
        </div>

        <div className="flex items-center gap-5 sm:justify-end">
          <Link href="/privacy" className="hover:text-white transition-colors uppercase tracking-wider">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors uppercase tracking-wider">Terms</Link>
          <Link href="/blog" className="hover:text-white transition-colors uppercase tracking-wider">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}