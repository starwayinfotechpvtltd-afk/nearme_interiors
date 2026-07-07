'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, Calendar, ArrowRight, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const leadSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  website: z.string().url().or(z.string().min(0)).optional(),
  revenue: z.string().min(1, { message: 'Please select a revenue range.' }),
  message: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadSchema>;

interface LeadDialogProps {
  isOpen: boolean;
  onClose: () => void;
  ctaSource?: string;
}

export default function LeadDialog({ isOpen, onClose, ctaSource = 'General' }: LeadDialogProps) {
  const [step, setStep] = useState<'form' | 'schedule' | 'success'>('form');
  const [loading, setLoading] = useState(false);
  const [leadData, setLeadData] = useState<LeadFormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      website: '',
      revenue: '',
      message: '',
    },
  });

  const onSubmit = async (data: LeadFormValues) => {
    setLoading(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLeadData(data);
    setLoading(false);
    setStep('schedule');
  };

  const handleBookSlot = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setStep('success');
  };

  const handleClose = () => {
    onClose();
    // Wait for exit transition, then reset state
    setTimeout(() => {
      setStep('form');
      reset();
    }, 300);
  };

  // Mock schedule times
  const mockTimes = [
    '10:00 AM (IST)',
    '11:30 AM (IST)',
    '2:00 PM (IST)',
    '4:30 PM (IST)',
    '6:00 PM (IST)',
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(val) => { if (!val) handleClose(); }}>
      <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden bg-white/95 backdrop-blur-xl border-white/20 shadow-2xl rounded-2xl">
        {step === 'form' && (
          <div className="p-6 sm:p-8 relative">
            <DialogHeader className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-semibold w-fit mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                1-on-1 Business Strategy Session
              </div>
              <DialogTitle className="font-heading text-2xl sm:text-3xl text-brand-primary font-bold tracking-tight">
                Design Your Growth Engine
              </DialogTitle>
              <DialogDescription className="text-brand-muted text-sm sm:text-base mt-2">
                Analyze your competitors, uncover traffic gaps, and construct a predictable client pipeline. Free for qualified studios.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-brand-primary">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g. Anjali Sen"
                    className="border-slate-200 focus-visible:ring-brand-secondary py-5 bg-white"
                    {...register('name')}
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-brand-primary">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@studio.com"
                    className="border-slate-200 focus-visible:ring-brand-secondary py-5 bg-white"
                    {...register('email')}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-brand-primary">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+91 98765 43210"
                    className="border-slate-200 focus-visible:ring-brand-secondary py-5 bg-white"
                    {...register('phone')}
                  />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="website" className="text-xs font-semibold uppercase tracking-wider text-brand-primary">Website URL (Optional)</Label>
                  <Input
                    id="website"
                    placeholder="https://studio.com"
                    className="border-slate-200 focus-visible:ring-brand-secondary py-5 bg-white"
                    {...register('website')}
                  />
                  {errors.website && <p className="text-xs text-red-500">{errors.website.message}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="revenue" className="text-xs font-semibold uppercase tracking-wider text-brand-primary">Current Monthly Revenue</Label>
                <select
                  id="revenue"
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...register('revenue')}
                >
                  <option value="">Select range...</option>
                  <option value="under-5l">Under ₹5 Lakhs / month</option>
                  <option value="5l-15l">₹5 Lakhs - ₹15 Lakhs / month</option>
                  <option value="15l-50l">₹15 Lakhs - ₹50 Lakhs / month</option>
                  <option value="above-50l">Above ₹50 Lakhs / month</option>
                </select>
                {errors.revenue && <p className="text-xs text-red-500">{errors.revenue.message}</p>}
              </div>

              <div className="space-y-1">
                <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-brand-primary">Primary Goal / Challenge</Label>
                <textarea
                  id="message"
                  placeholder="Tell us about your target clients or current marketing goals..."
                  rows={2}
                  className="flex min-h-[60px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
                  {...register('message')}
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-white font-semibold py-6 rounded-lg text-base cursor-pointer shadow-lg hover:shadow-brand-secondary/20 transition-all duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Processing Application...
                  </>
                ) : (
                  <>
                    Apply & Select Consultation Slot
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        )}

        {step === 'schedule' && (
          <div className="p-6 sm:p-8">
            <DialogHeader className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-semibold w-fit mb-2">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Application Approved
              </div>
              <DialogTitle className="font-heading text-2xl font-bold text-brand-primary">
                Select Your Consultation Slot
              </DialogTitle>
              <DialogDescription className="text-brand-muted">
                Hi {leadData?.name || 'there'}, select a convenient time below for a 30-minute Zoom session with our strategist.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="p-4 border border-brand-secondary/15 rounded-xl bg-brand-bg flex items-start gap-3">
                <Calendar className="h-5 w-5 text-brand-secondary mt-0.5" />
                <div>
                  <h4 className="font-semibold text-brand-primary text-sm">Available: Tomorrow (Tuesday)</h4>
                  <p className="text-brand-muted text-xs">All sessions conducted in English/Hindi via secure Zoom links.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 mt-4 max-h-[220px] overflow-y-auto pr-1">
                {mockTimes.map((time, idx) => (
                  <button
                    key={idx}
                    onClick={handleBookSlot}
                    className="w-full text-left p-3.5 rounded-lg border border-slate-200 hover:border-brand-secondary hover:bg-brand-bg font-semibold text-brand-primary text-sm transition-all duration-150 flex items-center justify-between group cursor-pointer"
                  >
                    {time}
                    <ArrowRight className="h-4 w-4 text-brand-muted group-hover:text-brand-secondary group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep('success')}
                className="w-full text-center text-xs text-brand-muted hover:underline py-2 block cursor-pointer"
              >
                Skip scheduling, contact me manually
              </button>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="p-8 text-center flex flex-col items-center justify-center min-h-[350px]">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-brand-primary">
              Session Successfully Booked!
            </h3>
            <p className="text-brand-muted text-sm sm:text-base mt-3 max-w-[400px]">
              A calendar invite with the Zoom conference details has been dispatched to <span className="font-semibold text-brand-primary">{leadData?.email || 'your email'}</span>.
            </p>
            <p className="text-brand-muted text-xs mt-2">
              Our strategist will review your studio portal ({leadData?.website || 'portfolio'}) prior to the session.
            </p>
            <Button
              onClick={handleClose}
              className="mt-8 px-8 py-5 bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold rounded-lg cursor-pointer"
            >
              Back to Showroom
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
