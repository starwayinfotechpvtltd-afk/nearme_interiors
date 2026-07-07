'use client';

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 md:bottom-6 right-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="mb-2 bg-white text-brand-primary text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-1.5"
          >
            <span>Ask us anything on WhatsApp</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setVisible(false);
              }}
              className="text-slate-400 hover:text-slate-600 transition-colors p-0.5 rounded cursor-pointer"
            >
              <X className="h-3 w-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/919876543210?text=Hi%20Aura%20%26%20Arch%2C%20I'd%20like%20to%20learn%20more%20about%20your%20digital%20marketing%20services%20for%20my%20interior%20design%20studio."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-2xl hover:shadow-green-500/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer relative"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full border border-green-500 animate-ping opacity-75"></span>
        <MessageSquare className="h-6 w-6 relative z-10" />
      </a>
    </div>
  );
}
