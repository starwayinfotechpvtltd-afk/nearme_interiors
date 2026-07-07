import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/features/Header';
import Footer from '@/components/features/Footer';
import WhatsAppButton from '@/components/features/WhatsAppButton';
import ExitIntentPopup from '@/components/features/ExitIntentPopup';
import BlogFeedClient from '@/components/frontend/BlogFeedClient';

export const metadata: Metadata = {
  title: 'Interior Design Growth Blog & Resources | Near Me Interiors',
  description: 'Uncover marketing insights, SEO strategies, ads execution tutorials, and case studies specifically for high-end interior designers.',
  alternates: {
    canonical: '/blog',
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-bg pt-24 pb-20">
        <BlogFeedClient />
      </main>
      <Footer />
      <WhatsAppButton />
      <ExitIntentPopup />
    </>
  );
}
