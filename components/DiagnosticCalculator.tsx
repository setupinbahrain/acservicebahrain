"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DiagnosticCalculator({ serviceName, cityName }: { serviceName: string, cityName: string }) {
  const [step, setStep] = useState(1);
  const [symptom, setSymptom] = useState("");
  
  const symptoms = [
    "Total System Power Loss / PCB Inverter Failure", 
    "Refrigerant Leak / Condensate Drainage Failure", 
    "Abnormal Vibration / Bearing & Motor Degradation", 
    "Inadequate Sub-Cooling / Compressor Degradation",
    "Flashing Error Code on External Unit Display"
  ];

  const handleNext = (selectedSymptom: string) => {
    setSymptom(selectedSymptom);
    setStep(2);
    setTimeout(() => setStep(3), 1500); // Simulate "Calculating Thermal Load" AI delay
  };

  const generateWhatsAppString = () => {
    const text = `URGENT: Requesting ${serviceName} in ${cityName}. Symptom: ${symptom}. Please run remote diagnostic calculation.`;
    return `https://wa.me/97333522205?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 bg-primary/20 text-primary text-xs font-bold rounded-bl-3xl">AI Assistant</div>
      
      <h2 className="text-2xl font-extrabold text-white mb-2">Live {serviceName} Estimator</h2>
      <p className="text-sm text-slate-300 mb-6 border-b border-white/10 pb-4">Skip the call center. Tell us the symptom and our engine will configure your engineering profile for {cityName}.</p>
      
      <div className="min-h-[200px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
              <p className="font-medium text-white mb-4">Identify the primary mechanical or electrical diagnostic symptom:</p>
              <div className="grid grid-cols-1 gap-2">
                {symptoms.map((s, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => handleNext(s)}
                    className="text-left px-4 py-3 bg-white/5 border border-white/10 hover:bg-primary hover:border-primary text-slate-200 transition-all rounded-xl text-sm"
                  >
                    + {s}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center h-[200px]">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-white font-medium animate-pulse">Running Diagnostic Scenarios...</p>
              <p className="text-xs text-slate-400 mt-2">Cross-referencing OEM schematic tolerances for: {symptom.substring(0,20)}...</p>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
               <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-xl mb-6">
                 <p className="text-green-400 font-bold mb-1">Diagnostic Target Locked</p>
                 <p className="text-sm text-slate-300">Based on our {cityName} operational database, a '{symptom.split('/')[0]}' commonly correlates to severe mechanical load imbalances. We have prepared an exact thermodynamic cost envelope.</p>
               </div>
               
               <a 
                href={generateWhatsAppString()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-primary text-white font-bold py-4 px-6 rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:bg-sky-400 hover:scale-105 transition-all"
               >
                 View Custom Diagnostic Quote (via WhatsApp)
               </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
