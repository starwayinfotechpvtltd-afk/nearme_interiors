// import React from 'react';
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
// import { faqsData } from '@/data/agencyData';

// export default function FaqAccordion() {
//   return (
//     <section className="py-20 bg-brand-bg">
//       <div className="max-w-3xl mx-auto px-4 sm:px-6">
//         <div className="text-center mb-12">
//           <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-secondary mb-3">
//             Answers & Insights
//           </h2>
//           <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-primary">
//             Frequently Asked Questions
//           </h3>
//         </div>

//         <Accordion className="space-y-4">
//           {faqsData.map((faq, idx) => (
//             <AccordionItem
//               key={faq.id}
//               value={`faq-${idx}`}
//               className="bg-white px-6 py-2 border border-slate-100 rounded-xl shadow-sm"
//             >
//               <AccordionTrigger className="font-heading font-bold text-brand-primary text-sm sm:text-base hover:no-underline text-left">
//                 {faq.question}
//               </AccordionTrigger>
//               <AccordionContent className="text-brand-muted text-xs sm:text-sm leading-relaxed mt-2 pt-2 border-t border-slate-100">
//                 {faq.answer}
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </div>
//     </section>
//   );
// }


'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    id: '1',
    question: 'Who do you work with?',
    answer:
      'We work with interior designers, interior design firms, home renovation companies, and architecture studios looking to get more clients online.',
  },
  {
    id: '2',
    question: 'How long does it take to see results?',
    answer:
      'Google Ads can start generating enquiries within a few weeks. SEO takes longer and usually starts showing noticeable results within 3 to 6 months.',
  },
  {
    id: '3',
    question: 'Can you help if I already have a website?',
    answer:
      'Yes. We can improve your existing website, optimize it for SEO, and turn it into a stronger lead-generation tool.',
  },
  {
    id: '4',
    question: 'What if I do not have a website or Google Business Profile?',
    answer:
      'No problem. We can build your website, set up your Google Business Profile, and create everything needed to grow your online presence.',
  },
  {
    id: '5',
    question: 'Will I get more leads?',
    answer:
      'Our goal is to help you generate more qualified enquiries from people actively looking for interior design services in your area.',
  },
  {
    id: '6',
    question: 'Do I need a large marketing budget?',
    answer:
      'No. We create a strategy based on your goals and budget, whether you are just starting out or looking to scale.',
  },
  {
    id: '7',
    question: 'How will I know what is being done?',
    answer:
      'You will receive regular updates, performance reports, and clear communication about what we are working on and the results being achieved.',
  },
  {
    id: '8',
    question: 'Do you manage SEO, Google Ads, and social media?',
    answer:
      'Yes. We can manage SEO, Google Ads, social media marketing, website optimization, and lead generation campaigns.',
  },
  {
    id: '9',
    question: 'Do you work with businesses outside my city?',
    answer:
      'Yes. We work with interior designers and design firms across different cities and regions.',
  },
  {
    id: '10',
    question: 'How do I get started?',
    answer:
      'Simply book a free consultation. We will review your business, discuss your goals, and recommend the best strategy for growth.',
  },
];


export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string>('1');

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? '' : id));

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* ── LEFT — sticky heading ── */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-secondary mb-4">
              Got Questions?
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary leading-tight mb-6">
              Interior Design<br />
              Marketing <span className="text-brand-secondary italic">FAQs</span>
            </h2>
            <p className="text-brand-muted text-[14px] lg:text-[15px] leading-relaxed mb-8">
              We know choosing a marketing partner is a big decision. Here are honest answers to the questions we hear most often from interior designers like you.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-brand-primary text-brand-primary font-bold text-[13px] hover:bg-brand-primary hover:text-white transition-all duration-200"
              >
                More Questions
              </a>
              <a
                href="#contact"
                className="inline-flex items-center text-brand-muted font-semibold text-[13px] hover:text-brand-primary transition-colors px-2"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* ── RIGHT — accordion ── */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-100">
              {FAQS.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id}>
                    <button
                      onClick={() => toggle(faq.id)}
                      className="w-full flex items-start justify-between gap-6 py-6 text-left cursor-pointer group"
                    >
                      <span className={`font-heading font-extrabold text-[16px] sm:text-[18px] lg:text-2xl leading-snug transition-colors duration-200 ${isOpen ? 'text-brand-primary' : 'text-brand-primary/90 group-hover:text-brand-primary'
                        }`}>
                        {faq.question}
                      </span>

                      {/* +/- icon */}
                      <span className={`shrink-0 mt-1 h-5 w-5 flex items-center justify-center transition-colors duration-200 ${isOpen ? 'text-brand-primary' : 'text-slate-400 group-hover:text-brand-primary'
                        }`}>
                        {isOpen
                          ? <Minus className="h-4 w-4" strokeWidth={2.5} />
                          : <Plus className="h-4 w-4" strokeWidth={2.5} />
                        }
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-brand-muted text-[15px] leading-relaxed max-w-2xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}