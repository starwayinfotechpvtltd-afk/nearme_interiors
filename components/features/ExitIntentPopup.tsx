'use client';

import React, { useState, useEffect } from 'react';
import { X, BookOpen, Download, CheckCircle, Loader2 } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Only show once per session
    const hasShown = sessionStorage.getItem('exit_intent_shown');
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves out of top viewport boundary
      if (e.clientY < 20) {
        setIsOpen(true);
        sessionStorage.setItem('exit_intent_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError('Please provide your name and email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a valid email.');
      return;
    }
    setError('');
    setLoading(true);

    // Mock API post
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-brand-primary text-white border-slate-800 shadow-2xl rounded-2xl">
        {!success ? (
          <div className="p-8 relative">
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-2xl bg-brand-secondary/15 text-brand-secondary flex items-center justify-center mb-6">
                <BookOpen className="h-7 w-7" />
              </div>

              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-secondary">
                Wait, Don&apos;t Go Empty Handed
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold mt-2 leading-tight">
                Get the 7-Figure Design Studio Playbook
              </h3>
              <p className="text-slate-400 text-sm mt-3 max-w-[380px] leading-relaxed">
                Download our detailed digital marketing guide. Discover how top interior firms scale from referral dependency to premium automated discovery.
              </p>

              <form onSubmit={handleSubmit} className="w-full mt-6 space-y-3.5 text-left">
                <div className="space-y-1">
                  <Label htmlFor="exit-name" className="text-xs font-semibold uppercase tracking-wider text-slate-300">Your Name</Label>
                  <Input
                    id="exit-name"
                    placeholder="Anjali Sen"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-slate-900 border-slate-800 focus:border-brand-secondary py-5 text-white"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="exit-email" className="text-xs font-semibold uppercase tracking-wider text-slate-300">Email Address</Label>
                  <Input
                    id="exit-email"
                    type="email"
                    placeholder="name@studio.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-900 border-slate-800 focus:border-brand-secondary py-5 text-white"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="exit-website" className="text-xs font-semibold uppercase tracking-wider text-slate-300">Website URL (Optional)</Label>
                  <Input
                    id="exit-website"
                    placeholder="https://studio.com"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="bg-slate-900 border-slate-800 focus:border-brand-secondary py-5 text-white"
                  />
                </div>

                {error && <p className="text-xs text-red-400 font-medium">{error}</p>}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-white font-semibold py-6 rounded-lg text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-brand-secondary/20 transition-all duration-200"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Preparing Playbook...
                    </>
                  ) : (
                    <>
                      Download Free Playbook
                      <Download className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              <button
                onClick={() => setIsOpen(false)}
                className="text-xs text-slate-500 hover:text-slate-400 mt-4 underline cursor-pointer"
              >
                No thanks, I want to keep struggling for leads
              </button>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center flex flex-col items-center justify-center min-h-[350px]">
            <div className="h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-6">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h3 className="font-heading text-2xl font-bold">
              Playbook Access Ready!
            </h3>
            <p className="text-slate-400 text-sm mt-3 max-w-[350px] leading-relaxed">
              We&apos;ve sent the download credentials to <span className="font-semibold text-white">{email}</span>. Check your inbox (or spam) in 2 minutes.
            </p>
            <a
              href="https://s3.amazonaws.com/mock-playbooks/aura-arch-interior-marketing-playbook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-8 w-full bg-brand-secondary hover:bg-brand-secondary/90 text-white font-semibold py-3.5 rounded-lg text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
            >
              Direct PDF Download
              <Download className="h-4 w-4" />
            </a>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
