'use client';

import React from 'react';
import { ArrowRight, ShieldAlert, Users, TrendingDown } from 'lucide-react';

const posts = [
  {
    dot: 'bg-brand-secondary',
    icon: ShieldAlert,
    title: 'People Canot Find Your Business',
    excerpt:
      'You do amazing work, but most homeowners never find you online. If your website is not showing up on Google, potential clients are choosing your competitors instead.',
  },
  {
    dot: 'bg-brand-accent',
    icon: Users,
    title: 'Too Many Wrong Enquiries',
    excerpt:
      'Getting enquiries is not enough. Many interior designers spend time talking to people who are not ready to hire or do not have the right budget.',
  },
  {
    dot: 'bg-brand-primary',
    icon: TrendingDown,
    title: 'Unpredictable Project Flow',
    excerpt:
      'Depending only on referrals can create busy months and slow months. A strong online marketing system helps bring new project enquiries consistently.',
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* ── Header row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          {/* Left: big headline */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-brand-primary leading-[1.12] tracking-tight">
            Why Many Interior Designers
            <br />
            Struggle to Get Consistent Clients
          </h2>

          {/* Right: description + CTA */}
          <div className="flex flex-col items-start gap-6 lg:pb-1">
            <p className="text-brand-muted text-[14px] leading-relaxed max-w-md">
              Having great designs is not always enough. If people cannot find your
              business online, you will miss valuable projects to competitors who have
              stronger marketing.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-primary text-brand-primary text-[13px] font-semibold hover:bg-brand-primary hover:text-white transition-all duration-200"
            >
              See more
            </a>
          </div>
        </div>

        {/* ── Cards row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post) => (
            <div
              key={post.title}
              className="bg-white rounded-2xl p-6 flex flex-col justify-between gap-8 hover:shadow-md transition-shadow duration-200"
            >
              {/* Top meta */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className={`w-2.5 h-2.5 rounded-full ${post.dot}`} />
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-brand-primary leading-snug">
                  {post.title}
                </h3>
              </div>
              {/* Bottom: excerpt + arrow */}
              <div className="flex items-end justify-between gap-4">
                <p className="text-brand-muted text-[12px] leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}