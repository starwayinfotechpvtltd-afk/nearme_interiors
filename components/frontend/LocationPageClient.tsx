'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Check, Star, ArrowRight, Sparkles, Building, Briefcase } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LocationData } from '@/types';
import LeadDialog from '@/components/features/LeadDialog';

const leadSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  phone: z.string().min(10, { message: 'Valid phone is required' }),
  studio: z.string().min(2, { message: 'Studio name is required' }),
  revenue: z.string().min(1, { message: 'Please select revenue' }),
});

type FormValues = z.infer<typeof leadSchema>;

interface LocationPageClientProps {
  location: LocationData;
}

export default function LocationPageClient({ location }: LocationPageClientProps) {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      studio: '',
      revenue: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setFormSuccess(true);
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Location Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-slate-200/50">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-bold">
            <MapPin className="h-3.5 w-3.5" />
            Localized Growth Architecture: {location.city}
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-primary leading-[1.15]">
            {location.headline}
          </h1>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            {location.intro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            {location.localSEOStats.map((stat, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <span className="block text-brand-secondary font-black font-heading text-xl sm:text-2xl">
                  {stat.value}
                </span>
                <span className="block text-[10px] text-brand-muted font-bold uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsLeadOpen(true)}
              className="bg-brand-secondary hover:bg-brand-secondary/95 text-white font-bold text-sm px-8 py-4.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-secondary/20 transition-all duration-200"
            >
              Request Free City Consultation
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

        {/* Local Office Contact info card */}
        <div className="lg:col-span-5 bg-white border border-slate-100 p-8 rounded-3xl shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-brand-primary rounded-xl flex items-center justify-center text-white">
              <Building className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-brand-primary text-sm font-heading">{location.city} Regional Office</h4>
              <p className="text-brand-muted text-[10px] uppercase tracking-wider font-semibold">Near Me Interiors India</p>
            </div>
          </div>

          <div className="space-y-4 text-brand-primary text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-brand-secondary shrink-0 mt-0.5" />
              <span className="text-brand-muted">{location.localOffice.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-brand-secondary shrink-0" />
              <span className="font-semibold">{location.localOffice.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-brand-secondary shrink-0" />
              <span className="font-semibold">{location.localOffice.email}</span>
            </div>
          </div>

          <div className="p-4 bg-brand-bg rounded-xl border border-brand-secondary/10 text-xs text-brand-muted leading-relaxed">
            <span className="font-bold text-brand-primary block mb-1">Region Exclusivity Warning</span>
            We only accept 1 premium design studio client inside the {location.city} map pack boundary to ensure absolute ranking authority.
          </div>
        </div>
      </div>

      {/* Market Context & Strategy */}
      <div className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-slate-200/50">
        <div className="space-y-6">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-secondary">
            Market Demographics & Insights
          </span>
          <h3 className="font-heading text-3xl font-extrabold text-brand-primary">
            Sourcing High-Budget Design Contracts in {location.city}
          </h3>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            {location.marketContext}
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-2.5">
              <Check className="h-4.5 w-4.5 text-brand-secondary shrink-0 mt-1" />
              <span className="text-brand-primary text-xs sm:text-sm font-semibold">Exclusion of low-budget apartment renovations</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Check className="h-4.5 w-4.5 text-brand-secondary shrink-0 mt-1" />
              <span className="text-brand-primary text-xs sm:text-sm font-semibold">Precision local map optimization targeting wealthy neighborhoods</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Check className="h-4.5 w-4.5 text-brand-secondary shrink-0 mt-1" />
              <span className="text-brand-primary text-xs sm:text-sm font-semibold">Builder-broker network digital targeting funnels</span>
            </div>
          </div>
        </div>

        {/* Localized Lead Form */}
        <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-xl">
          <h4 className="font-heading text-xl font-bold text-brand-primary mb-2">Apply for {location.city} Representation</h4>
          <p className="text-brand-muted text-xs mb-6">Complete the briefing form below. We will check regional search openings and call you within 2 hours.</p>

          {!formSuccess ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="loc-name" className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">Your Name</Label>
                  <Input id="loc-name" placeholder="Rohan Kapoor" className="py-4 bg-white" {...register('name')} />
                  {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="loc-email" className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">Email Address</Label>
                  <Input id="loc-email" type="email" placeholder="rohan@design.com" className="py-4 bg-white" {...register('email')} />
                  {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="loc-phone" className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">Phone Number</Label>
                  <Input id="loc-phone" placeholder="+91 98765 43210" className="py-4 bg-white" {...register('phone')} />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="loc-studio" className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">Studio / Brand</Label>
                  <Input id="loc-studio" placeholder="Kapoor & Co" className="py-4 bg-white" {...register('studio')} />
                  {errors.studio && <p className="text-xs text-red-500">{errors.studio.message}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="loc-revenue" className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">Current Monthly Revenue</Label>
                <select
                  id="loc-revenue"
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
                  {...register('revenue')}
                >
                  <option value="">Select range...</option>
                  <option value="under-5">Under ₹5 Lakhs</option>
                  <option value="5-15">₹5L - ₹15L</option>
                  <option value="above-15">Above ₹15 Lakhs</option>
                </select>
                {errors.revenue && <p className="text-xs text-red-500">{errors.revenue.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-primary hover:bg-brand-primary/95 text-white font-bold py-5 rounded-lg text-xs mt-2 cursor-pointer shadow-md"
              >
                {loading ? 'Submitting Application...' : `Submit ${location.city} Briefing`}
              </Button>
            </form>
          ) : (
            <div className="text-center py-8">
              <span className="text-4xl">🎉</span>
              <h4 className="font-bold text-brand-primary text-base mt-4">Briefing Details Received!</h4>
              <p className="text-brand-muted text-xs mt-2">Our national strategist is checking the local registry for {location.city} and will reach out to you shortly.</p>
            </div>
          )}
        </div>
      </div>

      {/* Local Testimonial */}
      {location.testimonials && location.testimonials.length > 0 && (
        <div className="py-16">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-xl text-center relative">
            <span className="absolute top-4 left-6 text-6xl text-brand-secondary/10 font-heading font-black select-none">“</span>
            <p className="text-brand-primary text-sm sm:text-base italic leading-relaxed relative z-10">
              &quot;{location.testimonials[0].quote}&quot;
            </p>
            <div className="mt-8 flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={location.testimonials[0].avatar}
                alt={location.testimonials[0].author}
                className="h-12 w-12 rounded-full object-cover mb-3 shadow-md"
              />
              <h5 className="font-bold text-brand-primary text-sm">{location.testimonials[0].author}</h5>
              <p className="text-brand-muted text-xs font-semibold">
                {location.testimonials[0].role}, {location.testimonials[0].company} — {location.city}
              </p>
            </div>
          </div>
        </div>
      )}

      <LeadDialog isOpen={isLeadOpen} onClose={() => setIsLeadOpen(false)} ctaSource={`Location Page: ${location.city}`} />
    </div>
  );
}
