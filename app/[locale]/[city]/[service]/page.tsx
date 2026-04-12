import React from 'react';
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import Image from 'next/image';
import { Metadata } from 'next';
import { cities } from '../../../../data/cities';
import { services } from '../../../../data/services';
import DiagnosticCalculator from '../../../../components/DiagnosticCalculator';
import DiagnosticCalculatorAr from '../../../../components/DiagnosticCalculatorAr';
import SEOAccordion from '../../../../components/SEOAccordion';
import SemanticEngine from '../../../../components/SemanticEngine';
import SemanticEngineAr from '../../../../components/SemanticEngineAr';
import FadeIn from '../../../../components/FadeIn';
import { getCDNImage } from '../../../../utils/imageMatrix';
import { arabicCities, arabicServices, translationMatrix } from '../../../../data/dictionary';

import { Metadata } from 'next';
import { constructMetadata } from '../../../../utils/seoMatrix';

export async function generateStaticParams() {
  const paths: { city: string; service: string }[] = [];
  cities.forEach((city) => {
    services.forEach((service) => {
      paths.push({
        city: city.toLowerCase().replace(/ /g, '-'),
        service: service.slug,
      });
    });
  });
  return paths;
}

export function generateMetadata({ params }: { params: { locale: string, city: string, service: string } }): Metadata {
  const slugCity = params.city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const serviceData = services.find(s => s.slug === params.service);
  const slugService = serviceData ? serviceData.name : params.service.replace('-', ' ');
  
  const isArabic = params.locale === 'ar';
  const cityName = isArabic ? (arabicCities[slugCity] || slugCity) : slugCity;
  const serviceName = isArabic ? (arabicServices[params.service] || slugService) : slugService;

  if (isArabic) {
    return constructMetadata({
      title: `دعم ${serviceName} في ${cityName} | مهندسون معتمدون بحرينياً`,
      description: `خدمات صيانة ${serviceName} عاجلة في ${cityName}. نحن نستخدم منظومة تشخيص ميكانيكية متقدمة لتسعير وفحص كافة أعطال المكيفات والأجهزة باحترافية عالية.`,
      urlPath: `/ar/${params.city}/${params.service}`,
      locale: 'ar'
    });
  }

  return constructMetadata({
    title: `Expert ${serviceName} in ${cityName}, Bahrain | AC Service Bahrain`,
    description: `Highly responsive ${serviceName.toLowerCase()} in ${cityName}. We utilize advanced diagnostic matrices to quote exact AC, HVAC, and Appliance repair logic accurately.`,
    urlPath: `/en/${params.city}/${params.service}`,
    locale: 'en'
  });
}

export default function DeepPolymorphicPage({ params }: { params: { locale: 'en'|'ar', city: string, service: string } }) {
  // Extract pure slugs
  const slugCity = params.city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const serviceData = services.find(s => s.slug === params.service);
  const slugService = serviceData ? serviceData.name : params.service.replace('-', ' ');
  
  // Real-time Dictionary Lookups
  const isArabic = params.locale === 'ar';
  const cityName = isArabic ? (arabicCities[slugCity] || slugCity) : slugCity;
  const serviceName = isArabic ? (arabicServices[params.service] || slugService) : slugService;

  const layoutVariant = (slugCity.length + slugService.length) % 5;
  const imgPrefix = getCDNImage(`seo-${params.city}-${params.service}`, serviceData?.category);

  return (
    <div className={`bg-slate-50 min-h-screen pt-4 ${isArabic ? 'dir-rtl text-right font-arabic' : ''}`}>

      {/* --- POLYMORPHIC HERO SECTION (5 DESIGNS) --- */}
      
      {/* Design 0: Dark Mode Split-Screen */}
      {layoutVariant === 0 && (
         <section className="bg-secondary text-white pt-24 pb-32 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-slate-900 to-primary/20 opacity-90 z-0"></div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
               <FadeIn direction="right">
                 <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block">{isArabic ? `قسم ${serviceData?.category} // ${cityName}` : `${serviceData?.category} // ${cityName}`}</span>
                 {/* Rank Math Optimization: Focus Keyword in H1 */}
                 <h1 className="text-5xl md:text-6xl font-extrabold mb-6 mt-4 leading-tight">
                   {isArabic ? `خدمات ${serviceName} احترافية في ${cityName}` : `Unmatched ${serviceName} in ${cityName}`}
                 </h1>
                 <p className="text-xl text-slate-300 mb-8 font-light">
                   {isArabic ? `دعم لوجستي ميكانيكي سريع مصمم خصيصاً للبنية التحتية في منطقة ${cityName}.` : `Rapid thermal and mechanical logistics engineered exclusively for the heavy infrastructure of the ${cityName} district.`}
                 </p>
               </FadeIn>
               <FadeIn direction="left" delay={0.2}>
                  {isArabic ? <DiagnosticCalculatorAr serviceName={serviceName} cityName={cityName} /> : <DiagnosticCalculator serviceName={serviceName} cityName={cityName} />}
               </FadeIn>
            </div>
         </section>
      )}

      {/* Design 1: Centered Glassmorphic */}
      {layoutVariant === 1 && (
         <section className="bg-[#0f172a] text-white pt-32 pb-40 px-4 relative overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 opacity-30 z-0 flex items-center justify-center">
               <div className="w-[800px] h-[800px] bg-primary rounded-full mix-blend-screen filter blur-[150px] animate-pulse"></div>
            </div>
            <FadeIn direction="up" className="relative z-10 max-w-4xl mx-auto">
                 <span className="bg-white/10 border border-white/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary mb-6 inline-block backdrop-blur-md">
                   {isArabic ? `طوارئ قسم ${serviceData?.category}: ${cityName}` : `Emergency ${serviceData?.category} Protocol: ${cityName}`}
                 </span>
                 {/* Rank Math H1 */}
                 <h1 className="text-5xl md:text-7xl font-extrabold mb-8 mt-4 tracking-tighter">
                   {isArabic ? `طاقم ${serviceName} معتمد في ${cityName}` : `Professional ${serviceName} in ${cityName}`}
                 </h1>
                 <p className="text-2xl text-slate-300 mb-12 font-medium max-w-2xl mx-auto">
                   {isArabic ? `دقة مطلقة. نصل إلى ${cityName} بكامل معداتنا لمعالجة أعطال التكييف والأجهزة على الفور.` : `Absolute precision. We deploy to ${cityName} equipped to resolve catastrophic system failures instantly.`}
                 </p>
                 <div className={`max-w-xl mx-auto ${isArabic ? 'text-right' : 'text-left'}`}>
                    {isArabic ? <DiagnosticCalculatorAr serviceName={serviceName} cityName={cityName} /> : <DiagnosticCalculator serviceName={serviceName} cityName={cityName} />}
                 </div>
            </FadeIn>
         </section>
      )}

      {/* Design 2: Left-Aligned Grid */}
      {layoutVariant === 2 && (
         <section className="bg-slate-50 text-slate-900 pt-24 pb-20 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10">
               <div className="col-span-12 md:col-span-7">
                 <FadeIn direction="left">
                   <h1 className="text-6xl font-black mb-6 leading-[1.1] tracking-tight">
                     {isArabic ? `طاقم ${serviceName} المحترف` : `Elite ${serviceName}`} <span className="text-primary block">{isArabic ? `في ${cityName}` : `in ${cityName}`}</span>
                   </h1>
                   <p className={`text-lg text-slate-500 mb-8 border-primary font-medium max-w-xl ${isArabic ? 'border-r-4 pr-4' : 'border-l-4 pl-4'}`}>
                     {isArabic ? `نؤمن منطقة ${cityName} بأعلى معايير الهندسة. لا نعتمد على التخمين، بل نقوم بتحليل دقيق ومباشر للظروف التشغيلية قبل البدء.` : `Securing the ${cityName} territory with certified engineering. We don't guess; we strictly analyze your ${serviceName.toLowerCase()} requirements via remote load calculations.`}
                   </p>
                 </FadeIn>
               </div>
               <div className="col-span-12 md:col-span-5 bg-white p-2 rounded-3xl shadow-2xl border border-slate-100">
                  <FadeIn direction="up" delay={0.3}>
                    {isArabic ? <DiagnosticCalculatorAr serviceName={serviceName} cityName={cityName} /> : <DiagnosticCalculator serviceName={serviceName} cityName={cityName} />}
                  </FadeIn>
               </div>
            </div>
         </section>
      )}

      {/* Design 3: Neo-Brutalist Grid */}
      {layoutVariant === 3 && (
         <section className="bg-white text-black pt-20 pb-20 border-b-[12px] border-black">
            <div className="max-w-[1400px] mx-auto px-4 grid md:grid-cols-2 gap-0 relative z-10">
               <div className={`border-black ${isArabic ? 'border-l-0 md:border-l-[8px] pl-0 md:pl-12' : 'border-r-0 md:border-r-[8px] pr-0 md:pr-12'}`}>
                 <FadeIn direction="down">
                   <span className="text-black bg-yellow-400 font-bold uppercase tracking-widest text-sm mb-6 inline-block py-2 px-4 shadow-[4px_4px_0_rgba(0,0,0,1)] border-2 border-black">
                     {isArabic ? `موقع التدخل: ${cityName}` : `Dispatch Node: ${cityName}`}
                   </span>
                   <h1 className="text-7xl font-black uppercase mb-8 leading-[0.9] tracking-tighter">
                     {serviceName} <br/> <span className="text-white custom-text-outline">{isArabic ? `في ${cityName}` : `in ${cityName}`}</span>
                   </h1>
                   <div className="relative w-full h-[300px] border-[8px] border-black shadow-[16px_16px_0_rgba(0,0,0,1)] mb-8 overflow-hidden z-20">
                      <Image src={imgPrefix} alt={`${serviceName} in ${cityName}`} fill style={{ objectFit: 'cover' }} className="grayscale brightness-110 contrast-125" />
                   </div>
                   <p className="text-2xl font-bold bg-black text-white p-6 shadow-[8px_8px_0_#38bdf8]">
                     {isArabic ? `سيطرة ميكانيكية مطلقة. نعالج الأعطال الهيكلية بدقة فائقة وضمان حقيقي داخل حدود ${cityName}.` : `Absolute mechanical authority. We resolve structural failures seamlessly in ${cityName}.`}
                   </p>
                 </FadeIn>
               </div>
               <div className={`${isArabic ? 'pr-0 md:pr-12' : 'pl-0 md:pl-12'} pt-12 md:pt-0`}>
                  <FadeIn direction="up" delay={0.2} className="border-[8px] border-black shadow-[16px_16px_0_rgba(0,0,0,1)] rounded-none overflow-hidden">
                    {isArabic ? <DiagnosticCalculatorAr serviceName={serviceName} cityName={cityName} /> : <DiagnosticCalculator serviceName={serviceName} cityName={cityName} />}
                  </FadeIn>
               </div>
            </div>
         </section>
      )}

      {/* Design 4: Hyper-Minimalist Apple Style */}
      {layoutVariant === 4 && (
         <section className="bg-[#fbfbfd] text-[#1d1d1f] pt-32 pb-32 px-4 flex flex-col items-center">
            <FadeIn direction="up" className="max-w-4xl mx-auto text-center">
               <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-4">
                 {isArabic ? `هندسة مخصصة لمدينة ${cityName}` : `Master Engineered for ${cityName}`}
               </span>
               <h1 className="text-6xl md:text-8xl font-semibold mb-6 tracking-[-0.03em]">
                 {serviceName}.<br/><span className="text-slate-400">{isArabic ? `تمت السيطرة.` : `Perfected.`}</span>
               </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} className="w-full max-w-6xl mx-auto mt-12 mb-20">
               <div className="relative w-full h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                 <Image src={imgPrefix} alt={serviceName} fill style={{ objectFit: 'cover' }} />
               </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="w-full max-w-xl mx-auto drop-shadow-2xl text-right">
                {isArabic ? <DiagnosticCalculatorAr serviceName={serviceName} cityName={cityName} /> : <DiagnosticCalculator serviceName={serviceName} cityName={cityName} />}
            </FadeIn>
         </section>
      )}


      {/* --- STRUCTURAL CONTENT SECTION (Rank Math Keyword Optimization H2) --- */}
      <section className="max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row gap-16 items-center">
         <FadeIn delay={0.2} direction="right" className="w-full md:w-1/2 relative h-[500px] rounded-[3rem] overflow-hidden glass-panel shadow-2xl">
            <Image src={imgPrefix} alt={`${serviceName} being performed by our dedicated technicians residing near ${cityName}`} fill style={{ objectFit: 'cover' }} className="hover:scale-105 transition-transform duration-[2000ms]" />
         </FadeIn>

         <FadeIn delay={0.4} direction="left" className="w-full md:w-1/2 prose prose-lg text-slate-700">
             {/* Rank Math density checking: injecting ServiceName + CityName cleanly */}
             <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">
               {isArabic ? `تفوق التقنية الميكانيكية لـ ${serviceName} داخل ${cityName}` : `Technical Dominance of ${serviceName} within ${cityName}`}
             </h2>
             
             {layoutVariant % 2 === 0 ? (
                <p>{isArabic ? `التخطيط المعماري للمنازل وجهد الكهرباء المتقلب يؤدي عادةً لسرعة تلف القطع التجارية البسيطة. نطبق في ${cityName} بروتوكولات مخصصة لاحتساب الجهد الكهربائي ومطابقة المعايير الصناعية لضمان عمر أطول لجهازك.` : `The unique urban layout and local power grid tolerances strictly mean that generic repairs often fail prematurely. Our localized ${serviceName} protocols ensure that electrical loading and mechanical stresses are calibrated specifically for properties in ${cityName}.`}</p>
             ) : (
                <p>{isArabic ? `تتعرض عقارات ${cityName} لتغيرات حرارية حادة ومعدلات رطوبة موضعية عالية قد تسبب أعطالًا متكررة. نحن نستخدم أجهزة تحليل متقدمة ومقاييس فحص تسرب لتقديم تجربة هندسية متكاملة.` : `Properties in ${cityName} face drastic thermal shifts and localized humidity spikes. A poorly executed implementation leaves you vulnerable. We utilize state-of-the-art diagnostic multimeters and airflow hoods to execute absolute ${serviceName} efficiency.`}</p>
             )}
             
             <div className={`bg-slate-100 p-8 rounded-2xl mt-8 border-primary ${isArabic ? 'border-r-4' : 'border-l-4'}`}>
                 <h3 className="font-bold text-xl mb-3 text-slate-900">{isArabic ? `الضمان الهندسي لـ ${cityName}` : `Our ${cityName} Guarantee`}</h3>
                 <p className="text-base text-slate-600 m-0">{isArabic ? `تُحسب التكلفة لدينا بدقة ومصداقية بناءً على أعطال فيزيائية حقيقية من خلال خوارزميات التسعير المباشر في واتساب. لا توجد مصاريف مخفية أو رسوم استغلال، فقط عملية واضحة ومهنية بالكامل.` : `We charge based on exact structural requirements via our proprietary WhatsApp algorithm. You will never face hidden fees or "upselling" tactics applied by amateur technicians navigating ${cityName}.`}</p>
             </div>
         </FadeIn>
      </section>

      {/* --- ALGORITHMIC 2,500+ WORD SEMANTIC ENGINEERING BRIEFING --- */}
      <section className="bg-slate-50 border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-4 relative z-10 py-8">
            <FadeIn direction="up">
               <SEOAccordion title={isArabic ? `اقرأ التقرير الهندسي الشامل لخدمة ${serviceName}` : `Read The Full Technical Engineering Brief For ${serviceName}`}>
                  {isArabic ? (
                    <SemanticEngineAr cityName={cityName} serviceName={serviceName} category={serviceData?.category || "HVAC"} />
                  ) : (
                    <SemanticEngine cityName={cityName} serviceName={serviceName} category={serviceData?.category || "HVAC"} />
                  )}
               </SEOAccordion>
            </FadeIn>
         </div>
      </section>

      {/* FAQs Removed to clear thin duplicate content penalty */}

      {/* --- NETWORK ACCORDION (14,000 internal links disguised cleanly) --- */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4">
             <FadeIn direction="up">
                 <div className="text-center mb-10">
                   <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">{isArabic ? `شبكة النشر الميدانية` : `Our Local Service Network`}</h2>
                   <p className="text-slate-500 max-w-2xl mx-auto">{isArabic ? `اكتشف نطاق تغطيتنا التشغيلية الصارمة. نعرض بشفافية نقاط الخدمة لدعم مجتمعنا بشكل احترافي وضمان تواجد هندسي فعلي في منطقتك.` : `Explore our strictly defined routing maps. Search engines and residential managers rely on these operational hubs to verify our local engineering presence.`}</p>
                 </div>
                 
                 <SEOAccordion title={isArabic ? `استعرض خدمات مساعدة متوفرة في ${cityName}` : `List Additional Services Available In ${cityName}`}>
                   <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                     {services.filter(s => s.slug !== params.service).map(latService => (
                        <li key={latService.slug}>
                          <a href={`/${params.locale}/${params.city}/${latService.slug}`} className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            {isArabic ? arabicServices[latService.slug] || latService.name : latService.name}
                          </a>
                        </li>
                     ))}
                   </ul>
                 </SEOAccordion>

                 <SEOAccordion title={isArabic ? `شاهد جميع مناطق الخدمة المخصصة لـ ${serviceName}` : `View All Delivery Zones For ${serviceName}`}>
                   <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                     {cities.filter(c => c.toLowerCase().replace(/ /g, '-') !== params.city).map(latCity => (
                        <li key={latCity}>
                          <a 
                            href={`/${params.locale}/${latCity.toLowerCase().replace(/ /g, '-')}/${params.service}`} 
                            className="text-sm text-slate-600 hover:text-primary transition-colors"
                          >
                            {isArabic ? arabicCities[latCity] || latCity : latCity} {isArabic ? `(تغطية مباشرة)` : `Region`}
                          </a>
                        </li>
                     ))}
                   </ul>
                 </SEOAccordion>
             </FadeIn>
          </div>
      </section>

      {/* --- E-E-A-T OUTBOUND LINKS --- */}
      <section className="bg-slate-900 py-16 text-center text-white border-b-8 border-primary">
        <FadeIn direction="up" className="max-w-3xl mx-auto px-4">
          <h2 className="font-bold text-slate-300 text-xs tracking-widest uppercase mb-6">{isArabic ? `المعايير التشغيلية والبروتوكولات الأجنبية` : `Official Engineering Guidelines`}</h2>
          <p className="text-slate-400 mb-8 font-light">{isArabic ? `لمعرفة المزيد حول ديناميكية الضغط والنظم الميكانيكية التي نستند إليها في ${cityName}، يرجى قراءة المعايير الهندسية المصدرية أدناه.` : `To understand the complex thermodynamics forming the basis of our ${cityName} operations, access the global authoritative standards.`}</p>
          <a 
            href={serviceData?.ext || "https://en.wikipedia.org/wiki/Heating,_ventilation,_and_air_conditioning"} 
            target="_blank" 
            rel="nofollow external noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-bold bg-white/10 border border-white/20 py-3 px-6 rounded-full hover:bg-primary transition-colors ${isArabic ? 'flex-row-reverse' : ''}`}
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
             {isArabic ? `اقرأ البروتوكول العالمي لأنظمة ${serviceData?.category}` : `Read the Official ${serviceData?.category} Global Protocols`}
          </a>
        </FadeIn>
      </section>

    </div>
  );
}
