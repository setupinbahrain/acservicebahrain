"use client";

import React from 'react';

export default function WhatsAppButton({ 
  text = "Check Cost & Book via WhatsApp", 
  fullWidth = false 
}: { 
  text?: string, 
  fullWidth?: boolean 
}) {
  return (
    <a 
      href="https://wa.me/97333522205"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex justify-center items-center gap-2
        bg-green-500 hover:bg-green-600 active:bg-green-700
        text-white font-bold py-4 px-8 rounded-xl
        shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1
        ${fullWidth ? 'w-full' : ''}
      `}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
      </svg>
      {text}
    </a>
  );
}
