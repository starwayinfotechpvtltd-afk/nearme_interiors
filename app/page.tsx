'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/features/Header';
import Footer from '@/components/features/Footer';
import WhatsAppButton from '@/components/features/WhatsAppButton';
import ExitIntentPopup from '@/components/features/ExitIntentPopup';
import LeadDialog from '@/components/features/LeadDialog';

// Import split landing page components
import HeroSection from '@/components/landing/HeroSection';
import ClientLogos from '@/components/landing/ClientLogos';
import PainPoints from '@/components/landing/PainPoints';
import ServicesSection from '@/components/landing/ServicesSection';
import PortfolioShowcase from '@/components/landing/PortfolioShowcase';
import CaseStudies from '@/components/landing/CaseStudies';
import Testimonials from '@/components/landing/Testimonials';
import ProcessTimeline from '@/components/landing/ProcessTimeline';
import ResultsCounter from '@/components/landing/ResultsCounter';
import PricingSection from '@/components/landing/PricingSection';
import ComparisonTable from '@/components/landing/ComparisonTable';
import LeadMagnetCapture from '@/components/landing/LeadMagnetCapture';
import FaqAccordion from '@/components/landing/FaqAccordion';
import FinalCTA from '@/components/landing/FinalCTA';

import Lenis from 'lenis';

export default function Home() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  const [leadSource, setLeadSource] = useState('Hero Section');

  const handleOpenLead = (source: string) => {
    setLeadSource(source);
    setIsLeadOpen(true);
  };

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

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Near Me Interiors Agency',
    'url': 'https://auraarch.agency',
    'logo': 'https://auraarch.agency/logo.png',
    'description': 'Premium digital marketing agency engineered exclusively for luxury interior designers and architects.',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+91-22-6982-7800',
      'contactType': 'sales',
      'areaServed': 'IN',
      'availableLanguage': ['en', 'hi']
    },
    'sameAs': [
      'https://www.facebook.com/auraarchagency',
      'https://www.instagram.com/auraarchagency',
      'https://www.linkedin.com/company/auraarchagency'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />
      <main className="flex-1">
        <HeroSection onOpenLead={handleOpenLead} />
        {/* <ClientLogos /> */}
        <PainPoints />
        <ServicesSection onOpenLead={handleOpenLead} />
        <PortfolioShowcase />
        <CaseStudies/>
        <Testimonials />
        <ProcessTimeline />
        <PricingSection onOpenLead={handleOpenLead} />
        <ComparisonTable />
        <LeadMagnetCapture />
        <FaqAccordion />
        {/* <FinalCTA onOpenLead={handleOpenLead} /> */}
      </main>
      <Footer />
      <WhatsAppButton />
      {/* <ExitIntentPopup /> */}
      <LeadDialog isOpen={isLeadOpen} onClose={() => setIsLeadOpen(false)} ctaSource={leadSource} />
    </>
  );
}
