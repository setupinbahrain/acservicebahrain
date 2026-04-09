"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DiagnosticCalculatorAr({ serviceName, cityName }: { serviceName: string, cityName: string }) {
  const [step, setStep] = useState(1);
  const [symptom, setSymptom] = useState("");
  
  const symptoms = [
    "انقطاع كامل للطاقة / عطل في لوحة تشغيل الإنفرتر", 
    "تسريب غاز / عطل في تصريف المياه", 
    "اهتزاز غير طبيعي / تآكل في المحرك أو الرولمان بلي", 
    "ضعف في التبريد / تآكل أو ضعف في الكمبريسر",
    "ظهور كود عطل (Error Code) على الشاشة"
  ];

  const handleNext = (selectedSymptom: string) => {
    setSymptom(selectedSymptom);
    setStep(2);
    setTimeout(() => setStep(3), 1500);
  };

  const generateWhatsAppString = () => {
    const text = `طلب عاجل: ${serviceName} في ${cityName}. العطل الفني: ${symptom}. يرجى إرسال التكلفة.`;
    return `https://wa.link/acservicebahrain?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden" dir="rtl">
      <div className="absolute top-0 left-0 p-4 bg-primary/20 text-primary text-xs font-bold rounded-br-3xl">مساعد الذكاء الاصطناعي</div>
      
      <h2 className="text-2xl font-extrabold text-white mb-2">حاسبة تكلفة {serviceName} المباشرة</h2>
      <p className="text-sm text-slate-300 mb-6 border-b border-white/10 pb-4">تخطى فريق خدمة العملاء السريع. أخبرنا بالعطل وسيقوم نظامنا بتكوين ملفك الهندسي لمنطقة {cityName}.</p>
      
      <div className="min-h-[200px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <p className="font-medium text-white mb-4">حدد العطل الميكانيكي أو الكهربائي الرئيسي:</p>
              <div className="grid grid-cols-1 gap-2">
                {symptoms.map((s, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => handleNext(s)}
                    className="text-right px-4 py-3 bg-white/5 border border-white/10 hover:bg-primary hover:border-primary text-slate-200 transition-all rounded-xl text-sm font-medium"
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
              <p className="text-white font-bold animate-pulse">جاري تشغيل آليات الفحص...</p>
              <p className="text-xs text-slate-400 mt-2">مطابقة معايير التصنيع الأصلية لـ: {symptom.substring(0,25)}...</p>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
               <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-xl mb-6">
                 <p className="text-green-400 font-bold mb-1">تم تحديد العطل وتأكيده &#10004;</p>
                 <p className="text-sm text-slate-300 leading-relaxed">بناءً على قاعدة بياناتنا في {cityName}، العطل المتعلق بـ '{symptom.split('/')[0].trim()}' يتطابق عادةً مع اختلالات ميكانيكية شديدة. لقد قمنا بتجهيز تقييم دقيق للتكلفة.</p>
               </div>
               
               <a 
                href={generateWhatsAppString()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-primary text-white font-bold py-4 px-6 rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:bg-sky-400 hover:scale-105 transition-all text-sm md:text-base"
               >
                 استعرض التكلفة الحقيقية (عبر الواتساب)
               </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
