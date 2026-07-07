import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Phone, Mail, Check, Star, ArrowRight } from 'lucide-react';
import Header from '@/components/features/Header';
import Footer from '@/components/features/Footer';
import WhatsAppButton from '@/components/features/WhatsAppButton';
import ExitIntentPopup from '@/components/features/ExitIntentPopup';
import LocationPageClient from '@/components/frontend/LocationPageClient';
import { locationsData } from '@/data/agencyData';

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return locationsData.map((loc) => ({
    city: loc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const location = locationsData.find((l) => l.slug === resolvedParams.city);

  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  return {
    title: `${location.city} Interior Design Marketing Agency | Near Me Interiors`,
    description: `${location.intro} Connect with high-net-worth clients and premium developers in ${location.city}.`,
    alternates: {
      canonical: `/location/${location.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const location = locationsData.find((l) => l.slug === resolvedParams.city);

  if (!location) {
    notFound();
  }

  // Schema for Local Business
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': `Near Me Interiors ${location.city}`,
    'description': location.headline,
    'telephone': location.localOffice.phone,
    'email': location.localOffice.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': location.localOffice.address,
      'addressLocality': location.city,
      'addressCountry': 'IN'
    },
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': location.city
    },
    'url': `https://auraarch.agency/location/${location.slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main className="flex-1 bg-brand-bg pt-24 pb-20">
        <LocationPageClient location={location} />
      </main>
      <Footer />
      <WhatsAppButton />
      <ExitIntentPopup />
    </>
  );
}
