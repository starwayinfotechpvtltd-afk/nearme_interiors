import React from 'react';
import type { Metadata } from 'next';
import ServicePageClient from '@/components/frontend/ServicePageClient';

export const metadata: Metadata = {
  title: 'Meta (Instagram & Facebook) Ads for Interior Designers | Near Me Interiors',
  description: 'Turn your photography portfolio into scroll-stopping video ads that schedule consultations with high-net-worth clients.',
  alternates: {
    canonical: '/meta-ads-for-interior-designers',
  },
};

export default function Page() {
  return <ServicePageClient serviceId="meta-ads" />;
}
