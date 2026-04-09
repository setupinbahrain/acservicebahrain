import React from 'react';

export default function ProceduralFAQAr({ serviceName, cityName }: { serviceName: string, cityName: string }) {
  const faqData = [
    {
      q: `شقد يآخذ وقت لين مايوصل الفني حق خدمة ${serviceName} في منطقة ${cityName}؟`,
      a: `فريق السستم عندنا متوزع في مناطق قريبة من ${cityName}. حق الحالات الطارئة ومشاكل ${serviceName} اللي تقطع الكهرباء، حنا نوجه أقرب سيارة مباشرة عشان نوصل بسرعة.`
    },
    {
      q: `شلون تحسبون التكلفة النهائية حق شغل ${serviceName} في ${cityName}؟`,
      a: `التكلفة نبنيها حرفياً على حجم ومستوى الخراب وتوفر القطع الأصلية للمكينة. إحنا ما نسعر بالهوى، ضروري نفحص المكينة وبعدين نوفر لك تسعيرة ${serviceName} واضحة جداً.`
    },
    {
      q: `هل تاخذون عقود تصليح أجهزة تجارية وأنظمة سنترال مركزية تخص ${serviceName}؟`,
      a: `أي أكيد، خبراتنا تشمل التكييف المركزي وأنظمة الدكتات والمجمعات الضخمة، ونوفر فحوصات حرارية وكهربائية حق الأعمال الكبيرة نفس ${serviceName} وأكبر.`
    },
    {
      q: `فنيينكم عندهم شهادات يقدرون يصلحون مكيفات دايكن، إل جي ومكيفات كاريير؟`,
      a: `نعم، فريقنا مهندس ومدرب بحيث يقرأ كودات اللوحة الإلكترونية الأصلية لماركات عريقة، ويقدر يكشف أي عطل سواء كان في الدايكن أو غيره داخل حدود ${cityName}.`
    },
    {
      q: `شلون يأثر الجو الرطب واللاهوب الخارجي في ${cityName} على المشكلة واحتياجي حق ${serviceName}؟`,
      a: `الملوحة والغبار القوي في ديرتنا ${cityName} تأكل الألمنيوم والنحاس بسرعة وتشل حركة الموتر، عشان جذي فحص وتنفيذ ${serviceName} ضروري لحماية المكينة من انها تقفل عليك وقت الحر.`
    },
    {
      q: `هل تستخدمون قطع غيار أصلية ومضمونة لما تسوون عملية ${serviceName}؟`,
      a: `أكيد 100%. مستحيل نركب قطعة تجارية تخرب شغلك وتضر سمعتنا. حنا نستورد السبير بارت (قطع الغيار) المضمونة حق تنفيذ ${serviceName} بكفاءة عالية.`
    },
    {
      q: `شلون عن الضمان على الشغل والتصليح المتعلق بـ ${serviceName}؟`,
      a: `نركب ونعطيك عليها فترة ضمان واضحة. ثقتنا في هندسة فنيينا وفي تركيبهم للقطع وقت الـ ${serviceName} تسمح لنا نقدم ضمان يخلي راسك مرتاح.`
    },
    {
      q: `هل المكيف ممكن يتأخر على مايتصلح وقت الشغل على ${serviceName}؟`,
      a: `حسب حجم وموقع المكينة وتكسيرها وصعوبة الفك، لكن بشكل عام الفنيين في ${cityName} متدربين يخلصون الشغل بدقة وبدون مماطلة في أسرع وقت وتأخير لا يذكر.`
    },
    {
      q: `هل أقدر أحجز موعد فحص طوارئ ${serviceName} من الواتساب على طول؟`,
      a: `أي نعم، تقدر تدخل تسعيرة الفحص السريع اللي موجودة في موقعنا وتختار المشكلة، وكل البيانات بتروح للواتساب مآلنا ونرسلك فني مباشرة.`
    },
    {
      q: `هل مشكلة ${serviceName} تشمل فحص الغاز ونقص الفريون والدورة الهندسية؟`,
      a: `طبعاً، إذا لاحظنا إن الخلل ميكانيكي وحراري، بروتوكولات الفحص عندنا لخدمة ${serviceName} تجبر الفنيين يشيكون ضغط الغاز والسب-كولنج عشان مايصير حك احتكاكي داخلي.`
    },
    {
      q: `كم مرة لازم اسوي صيانة دورية وتنظيف وقائي في أجواء ${cityName}؟`,
      a: `الرطوبة العالية في ${cityName} تتطلب تسوي فحص دوري وغسيل عميق مرتين في السنة كحد أدنى عشان ماطيح في مشاكل صيانة واصلاحات مكلفة نفس ${serviceName}.`
    },
    {
      q: `إيش أسوي لو طلعت لي علامة عطل أو لمبة تفرّ ومشكلة تخص ${serviceName}؟`,
      a: `صور كود العطل بالواتساب وارسله لنا وقت ما تطلب تحليل حق ${serviceName}. المهندس بيراجع الخريطة الإلكترونية حق ماركة مكينتك وبيعرف الخلل قبل مايطب البيت.`
    },
    {
      q: `هل تسوون حسابات لأحمال التكييف والحرارة قبل ${serviceName}؟`,
      a: `نعم، توزيع التبريد الصح وحساب الكفاءة الميكانيكية هي أهم شيء نرتكز عليه في أي عملية تخص ${serviceName} خصوصا في طقس ${cityName} القليل الرحمة.`
    },
    {
      q: `تفحصون وتتأكدون من سحب الهوا والدفع أثناء شغل ${serviceName}؟`,
      a: `أي أكيد، 90% من مشاكل تثليج المكيف تجي بسبب انسداد دفع الهواء. ضبط كمية الهواء المسحوب والمدفوع هو اساس الشغل الهندسي المتقن.`
    },
    {
      q: `ليش مرات الكهربا وتوصيلات ${cityName} تأثر وتسبب لي هالأعطال المتعلقة بـ ${serviceName}؟`,
      a: `الكهربا لما تنزل وتصعد فجأة تدمر الإنفرتر والدوائر الحساسة، عشان كذا نحنا نفحص قراءة التوصيلات والميجر اثناء عملية ${serviceName} عشان نأكد لك سلامة أسلاك البيت أو الشركة.`
    }
  ];

  // Schema generation internally translating properties securely
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="w-full my-16 text-right" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <h2 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight border-b-2 border-slate-100 pb-4">
        15 سؤال فني متكرر يهمك تعرفه عن {serviceName} في ديرتنا {cityName}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {faqData.map((faq, idx) => (
           <details key={idx} className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm open:bg-slate-50 transition-colors">
              <summary className="font-bold text-sm md:text-base text-slate-800 p-5 cursor-pointer list-none flex justify-between items-center group-open:text-primary transition-colors">
                 <span>{faq.q}</span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-open:rotate-180 transition-transform flex-shrink-0 mr-4"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="px-5 pb-5 text-sm md:text-base text-slate-600 border-t border-slate-100 mt-2 pt-4">
                 {faq.a}
              </div>
           </details>
        ))}
      </div>
    </div>
  );
}
