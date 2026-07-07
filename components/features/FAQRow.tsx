'use client';

import React, { useState, useRef } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  /** Section heading shown above the list, e.g. "The basics" */
  title?: string;
  /** Array of question/answer pairs */
  items: FAQItem[];
  /** Allow multiple items open at once (default: false) */
  allowMultiple?: boolean;
}

// ─── Single accordion row ─────────────────────────────────────────────────────

function FAQRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-t border-slate-200">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group w-full flex cursor-pointer items-center justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400 rounded-sm"
      >
        <span className="text-[18px] font-normal text-slate-800 leading-snug">
          {item.question}
        </span>

        {/* + / × icon */}
        <span
          aria-hidden="true"
          className="shrink-0 w-5 h-5 flex items-center justify-center text-slate-400 transition-transform duration-300 ease-in-out"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <svg
            viewBox="0 0 14 14"
            fill="none"
            className="w-[14px] h-[14px]"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
          >
            <line x1="7" y1="1" x2="7" y2="13" />
            <line x1="1" y1="7" x2="13" y2="7" />
          </svg>
        </span>
      </button>

      {/* Animated body */}
      <div
        ref={bodyRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen
            ? `${bodyRef.current?.scrollHeight ?? 500}px`
            : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="pb-5 text-[15px] text-slate-500 leading-relaxed max-w-2xl">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function FAQ({ title, items, allowMultiple = false }: FAQProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="w-full py-12 sm:py-16">
      <div className="max-w-7xl mx-auto lg:mx-0">
        {title && (
          <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
            {title}
          </h2>
        )}

        <div>
          {items.map((item, index) => (
            <FAQRow
              key={index}
              item={item}
              isOpen={openIndexes.has(index)}
              onToggle={() => toggle(index)}
            />
          ))}
          {/* Bottom border */}
          <div className="border-t border-slate-200" />
        </div>
      </div>
    </section>
  );
}