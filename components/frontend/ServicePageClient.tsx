'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  Percent,
  Users,
  Layout,
  MapPin,
  Check,
  ArrowRight,
  Sparkles,
  Phone,
  ArrowLeft
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/SocialIcons';
import Header from '@/components/features/Header';
import Footer from '@/components/features/Footer';
import WhatsAppButton from '@/components/features/WhatsAppButton';
import ExitIntentPopup from '@/components/features/ExitIntentPopup';
import LeadDialog from '@/components/features/LeadDialog';
import { servicesData } from '@/data/agencyData';

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="h-10 w-10 text-brand-secondary" />,
  Percent: <Percent className="h-10 w-10 text-brand-secondary" />,
  Instagram: <InstagramIcon className="h-10 w-10 text-brand-secondary" />,
  Users: <Users className="h-10 w-10 text-brand-secondary" />,
  Layout: <Layout className="h-10 w-10 text-brand-secondary" />,
  MapPin: <MapPin className="h-10 w-10 text-brand-secondary" />
};

interface ServicePageClientProps {
  serviceId: string;
}

export default function ServicePageClient({ serviceId }: ServicePageClientProps) {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  const service = servicesData.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg text-brand-primary">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold font-heading">Service Specification Not Found</h1>
          <Link href="/" className="text-brand-secondary font-semibold hover:underline">
            Back to flagship agency site
          </Link>
        </div>
      </div>
    );
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.title,
    'provider': {
      '@type': 'Organization',
      'name': 'Near Me Interiors',
      'url': 'https://auraarch.agency'
    },
    'description': service.longDescription,
    'areaServed': 'IN'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main className="flex-1 pt-24 pb-20 bg-brand-bg">
        {/* Service Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-muted hover:text-brand-secondary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            BACK TO FLAGSHIP
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="h-16 w-16 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                {iconMap[service.iconName]}
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-primary leading-[1.15]">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
                {service.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => setIsLeadOpen(true)}
                  className="bg-brand-secondary hover:bg-brand-secondary/95 text-white font-bold text-sm px-8 py-4.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-secondary/20 hover:shadow-brand-secondary/35 transition-all duration-200"
                >
                  Book Service Strategy Session
                  <ArrowRight className="h-5 w-5" />
                </button>
                <a
                  href="tel:+912269827800"
                  className="px-8 py-4 border border-slate-200 hover:border-slate-300 bg-white/50 backdrop-blur text-brand-primary font-bold text-center rounded-xl text-sm flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="h-4 w-4 text-brand-secondary" />
                  Speak with a Strategist
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-slate-100 p-8 rounded-3xl shadow-xl flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="block text-[10px] uppercase font-bold text-brand-muted tracking-widest mb-1">
                  Proven Output Vector
                </span>
                <span className="block text-4xl font-extrabold text-brand-primary font-heading mt-2">
                  {service.stats.value}
                </span>
                <span className="block text-xs text-brand-muted font-semibold mt-1">
                  {service.stats.label}
                </span>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
                <h3 className="font-bold text-brand-primary text-sm">Key System Outcomes:</h3>
                <div className="space-y-2.5">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-brand-muted">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature breakdown */}
        <div className="bg-white py-20 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-secondary mb-3">
                Operational Framework
              </h2>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-primary">
                What is Included in Our Acquisition System
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feat, idx) => (
                <div key={idx} className="p-6 bg-brand-bg rounded-2xl border border-slate-100/50 flex gap-4">
                  <div className="h-8 w-8 bg-brand-secondary/10 text-brand-secondary rounded-lg flex items-center justify-center shrink-0">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary text-sm sm:text-base mb-2">
                      {feat}
                    </h4>
                    <p className="text-brand-muted text-xs leading-relaxed">
                      Custom configured for luxury architecture profiles to ensure high credibility and direct lead pre-qualification.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conversion Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-20">
          <div className="bg-brand-primary text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800 text-center shadow-2xl flex flex-col items-center">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-secondary mb-3">
              Territorial Exclusivity
            </span>
            <h3 className="font-heading text-3xl font-extrabold leading-tight max-w-xl">
              Lock in Your Local Search Domination Before Competitors Do
            </h3>
            <p className="text-slate-400 text-sm mt-4 max-w-md leading-relaxed">
              We operate on an exclusive basis—only working with one luxury design studio per city region. Schedule an audit to see if your location is available.
            </p>
            <button
              onClick={() => setIsLeadOpen(true)}
              className="mt-8 bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold py-4.5 px-10 rounded-xl text-sm cursor-pointer shadow-lg hover:shadow-brand-secondary/20 transition-all duration-200 flex items-center gap-2"
            >
              Verify Region Availability
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      {/* <ExitIntentPopup /> */}
      {/* <LeadDialog isOpen={isLeadOpen} onClose={() => setIsLeadOpen(false)} ctaSource={`Service Page: ${service.title}`} /> */}
    </>
  );
}
