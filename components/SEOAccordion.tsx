"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SEOAccordion({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full px-6 py-5 flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
      >
        <span className="font-bold text-slate-800">{title}</span>
        <motion.svg 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"
        >
          <path d="m6 9 6 6 6-6"/>
        </motion.svg>
      </button>

      {/* 
        CRITICAL SEO NOTE: 
        Even though the component is "hidden" in React using Framer Motion, 
        Next.js SSR generates the raw HTML out of the box so Google Bot sees all links perfectly instantly!
      */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 border-t border-slate-100 bg-white">
               {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
