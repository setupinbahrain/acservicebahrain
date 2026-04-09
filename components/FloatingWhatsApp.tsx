"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.link/acservicebahrain";

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center p-4 bg-green-500 rounded-full shadow-[0_8px_30px_rgba(34,197,94,0.5)] hover:bg-green-400 transition-colors group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Pulsing ring */}
        <span className="absolute w-full h-full bg-green-500 rounded-full opacity-50 animate-ping"></span>
        
        {/* SVG WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10"
        >
          <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="absolute right-20 bg-slate-900 text-white text-sm font-bold py-2 px-4 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-xl border border-slate-700">
          Instant Diagnostic Chat
          <span className="absolute top-1/2 -right-2 -mt-1 w-2 h-2 bg-slate-900 rotate-45 border-r border-t border-slate-700"></span>
        </span>
      </motion.a>
    </div>
  );
}
