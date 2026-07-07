'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// ─── Types ─────────────────────────────────────────────────────────────────

export interface CTAInlineProps {
  /** Small label above the heading */
  eyebrow?: string;
  /** First line of the heading */
  headingLine1?: string;
  /** Word before the inline button, on the second line */
  headingLine2Start?: string;
  /** Label inside the pill button */
  buttonLabel?: string;
  /** Word after the inline button, on the second line */
  headingLine2End?: string;
  /** Where the button links */
  href?: string;
  /** Optional click handler (overrides href if provided) */
  onButtonClick?: () => void;
}

// ─── Animation Variants ─────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.78, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.34, 1.56, 0.64, 1], // spring overshoot
    },
  },
};

// ─── Inline Pill Button ─────────────────────────────────────────────────────

function InlinePill({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) {
  const inner = (
    <motion.span
      variants={pillVariants}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 360, damping: 22 }}
      className="
        inline-flex items-center gap-2
        bg-[#ECEA80] hover:bg-[#E5E268]
        text-slate-900
        rounded-full
        pl-4 pr-1.5 py-1
        text-[0.45em] sm:text-[0.42em] lg:text-[0.38em]
        font-medium
        leading-none
        align-middle
        relative -top-0.5 sm:-top-1
        cursor-pointer
        select-none
        transition-colors duration-200
        whitespace-nowrap
        group/pill
      "
    >
      {label}
      <motion.span
        className="
          inline-flex items-center justify-center
          w-7 h-7 sm:w-8 sm:h-8
          rounded-full bg-slate-900
          text-white
          shrink-0
        "
        whileHover={{ rotate: -40 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
      </motion.span>
    </motion.span>
  );

  if (onClick) {
    return (
      <button onClick={onClick} type="button" className="inline-block">
        {inner}
      </button>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {inner}
    </Link>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function CTAInline({
  eyebrow = 'see our seo platform in action',
  headingLine1 = "let's talk—book a",
  headingLine2Start = 'free',
  buttonLabel = 'Get a demo',
  headingLine2End = 'consultation',
  href = '/demo',
  onButtonClick,
}: CTAInlineProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section
      ref={ref}
      className="relative bg-[#EFEDE8] min-h-[320px] sm:min-h-[380px] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle radial vignette */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, #E8E5DE 0%, transparent 70%)',
        }}
      />

      <motion.div
        ref={undefined}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUpVariants}
          className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mb-6 sm:mb-8"
        >
          {eyebrow}
        </motion.p>

        {/* Heading */}
        <h2
          className="
            font-normal text-slate-900 leading-[1.1] tracking-[-0.025em]
            text-[2.6rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[5.2rem]
          "
        >
          {/* Line 1 */}
          <motion.span variants={fadeUpVariants} className="block">
            {headingLine1}
          </motion.span>

          {/* Line 2: text + pill + text */}
          <motion.span
            variants={fadeUpVariants}
            className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 mt-1"
          >
            <span>{headingLine2Start}</span>

            {/* Inline pill animates independently */}
            <InlinePill
              label={buttonLabel}
              href={href}
              onClick={onButtonClick}
            />

            <span>{headingLine2End}</span>
          </motion.span>
        </h2>
      </motion.div>
    </section>
  );
}