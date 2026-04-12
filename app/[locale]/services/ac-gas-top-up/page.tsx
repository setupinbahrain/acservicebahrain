import React from 'react';
import Image from 'next/image';
import { cities } from '../../../../data/cities';
import WhatsAppButton from '../../../../components/WhatsAppButton';
import { getCDNImage } from '../../../../utils/imageMatrix';
import { arabicCities, arabicServices } from '../../../../data/dictionary';
import { Metadata } from 'next';
import { constructMetadata } from '../../../../utils/seoMatrix';

export function generateMetadata({ params }: { params: { locale: 'en'|'ar' } }): Metadata {
  const isArabic = params.locale === 'ar';
  
  if (isArabic) {
    return constructMetadata({
      title: `تعبئة غاز المكيف في البحرين (R22/R410a) | معالجة تسريب الغاز والتعبئة الفورية`,
      description: `خدمة تعبئة وتصليح تسريب غاز المكيفات (شباك، سبليت، مركزي) في البحرين. نقدم فحص تسريب دقيق بغاز النيتروجين، وتعبئة الفريون الأصلي مع كفالة ميكانيكية حقيقية 100%.`,
      urlPath: `/ar/services/ac-gas-top-up`,
      locale: 'ar'
    });
  }

  return constructMetadata({
    title: `AC Gas Refill & Top-Up Service Bahrain | R22 & R410A Original Refrigerant`,
    description: `Professional AC Gas Top-Up and Leak Repair in Bahrain. We strictly use genuine Freon gas under exact manifold gauge pressures. Zero short-cuts. Get your fixed WhatsApp price.`,
    urlPath: `/en/services/ac-gas-top-up`,
    locale: 'en'
  });
}

export default function ACGasTopUpPage({ params }: { params: { locale: 'en'|'ar' } }) {
  const isArabic = params.locale === 'ar';

  const imgPrefix = getCDNImage(`main-service-ac-gas-top-up`, 'HVAC');

  return (
    <div className={`bg-slate-50 min-h-screen ${isArabic ? 'dir-rtl text-right font-arabic' : ''}`}>
      <section className="bg-secondary text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm font-bold tracking-widest text-[#00E5FF] uppercase mb-2 block">
            {isArabic ? 'ميكانيكا غاز التبريد الفريون' : 'Refrigerant System Mechanics'}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-4 leading-tight">
             {isArabic ? `خبراء تعبئة غاز التكييف والفحص بالنيتروجين في البحرين` : `AC Gas Top-up & Nitrogen Leak Defense Teams in Bahrain`}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
             {isArabic ? 
               `لا يتبخر غاز الفريون أبداً من نفسه. إذا كان مكيفك يفتقر للغاز، فهناك ثقب مؤكد. فريقنا الهندسي يستخدم ضغط النيتروجين لكشف ومعالجة أصغر الثقوب قبل تعبئة غاز R410A أو R22 لضمان عدم هروب الغاز مجدداً في الصيف القاسي.` : 
               `Freon gas does not evaporate naturally. If your AC is out of gas, you have an active copper leak. We deploy high-pressure Nitrogen to isolate and weld the fracture before permanently recharging the system with authentic refrigerants.`
             }
          </p>
          <WhatsAppButton text={isArabic ? 'تحدث للمهندس الفني الآن حول تكلفة تعبئة الغاز' : 'Launch WhatsApp for Freon Recharge Pricing'} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative h-[500px] rounded-2xl overflow-hidden glass-panel group shadow-xl">
           <Image src={imgPrefix} alt="HVAC manifold gauges performing AC Gas Recharge" fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform duration-700" />
           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
             <div className="flex gap-2 mb-2">
               <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">R410A</span>
               <span className="bg-green-600 text-white text-xs px-2 py-1 rounded font-bold">R22</span>
             </div>
             <p className="text-white text-sm opacity-90">{isArabic ? 'عدادات قياس الضغط الاحترافية الدقيقة' : 'Precision Manifold Gauge Calibration'}</p>
           </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              {isArabic ? `جدول الفحص والتكاليف لمعالجة تسريب غاز التكييف` : `AC Gas Refrigerant Diagnostic Matrix & Cost Table`}
            </h2>
            <div className={`prose prose-lg text-slate-600 ${isArabic ? 'max-w-none text-right' : ''}`}>
              <p className="leading-relaxed mb-6 font-medium">
                {isArabic ? 
                  `احذر من العمالة التي تعرض "تعبئة الغاز" فقط دون فحص تسريب. الغاز سيتسرب مجدداً خلال أسابيع! نحن نضمن الفحص الهندسي الموثق لتوفير أموالك.` : 
                  `Avoid generic handymen who blindly top-up gas without isolating the fracture. The gas will escape again in exactly 14 days! Our technicians weld the root cause.`
                }
              </p>
              
              <div className="overflow-x-auto rounded-xl shadow-sm border border-slate-200 hide-scrollbar mt-6 mb-8">
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs text-white uppercase bg-slate-800">
                      <tr>
                          <th className="px-6 py-4 rounded-tl-xl">{isArabic ? 'المشكلة (العرض الفني)' : 'Technical Symptom'}</th>
                          <th className="px-6 py-4">{isArabic ? 'التشخيص المنطقي' : 'Diagnostic Action'}</th>
                          <th className="px-6 py-4 rounded-tr-xl">{isArabic ? 'توضيح التكلفة' : 'Cost Benchmark'}</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="bg-white border-b hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-slate-900 border-r border-slate-100">{isArabic ? 'المكيف يعمل والكمبروسر يهتز لكن الهواء بدرجة حرارة الغرفة (لا برودة)' : 'No cooling, compressor running, room temp blowing'}</td>
                          <td className="px-6 py-4">{isArabic ? 'نقص جزئي بالغاز. يتطلب تعديل الضغط بتعبئة المتبقي من غاز R22 أو R410A' : 'Partial gas depletion. Requires R22/R410A Top-Up via Manifold Gauge'}</td>
                          <td className="px-6 py-4 font-mono text-primary font-bold">15 - 25 BHD</td>
                      </tr>
                      <tr className="bg-slate-50 border-b hover:bg-slate-100 transition-colors">
                          <td className="px-6 py-4 font-semibold text-slate-900 border-r border-slate-100">{isArabic ? 'تكدس وتجمد الجليد بشكل واضح على الأنابيب النحاسية النحيفة للوحدة الخارجية' : 'Solid white ice formation on thin exterior copper pipe'}</td>
                          <td className="px-6 py-4">{isArabic ? 'نقص شديد (أكثر من 50%) أو انسداد في الفلتر. يتطلب فحص النيتروجين' : 'Severe gas deficit (<50%). High-Pressure Nitrogen Trace required'}</td>
                          <td className="px-6 py-4 font-mono text-primary font-bold">25 - 35 BHD</td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-slate-900 border-r border-slate-100">{isArabic ? 'آثار زيت تشحيم داكن على إحدى صمامات الربط أو حول المكثف' : 'Dark oil spots near connection valves or condenser'}</td>
                          <td className="px-6 py-4">{isArabic ? 'تسريب واضح! يجب قص ولحام الأنبوب النحاسي المتضرر + تعبئة غاز شاملة كاملة 100%' : 'Major open fracture! Requires Copper Welding + 100% Full Gas Vacuum & Recharge'}</td>
                          <td className="px-6 py-4 font-mono text-primary font-bold">{isArabic ? 'يحدد عبر الواتساب بدقة' : 'Quoted via WhatsApp'}</td>
                      </tr>
                  </tbody>
                </table>
              </div>

               <p><strong>{isArabic ? 'بروتوكول السلامة لغاز المكيفات:' : 'Refrigerant Safety Protocol:'}</strong></p>
               <ul className={`mt-4 text-slate-700 space-y-3 font-medium list-none`}>
                 <li className="flex items-center gap-2">✓ {isArabic ? 'تفريغ وتنسيم دائرة التبريد بواسطة جهاز طرد هواء مُتخصص (Vacuum Pump).' : 'Flushing system humidity using industrial 2-stage Vacuum Pumps.'}</li>
                 <li className="flex items-center gap-2">✓ {isArabic ? 'معايرة الضغط حسب الكتالوج الهندسي للشركة المصنعة للضاغط.' : 'Calibrating gauge pressures strictly to OEM Data plate specifications.'}</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Location Matrix */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
             {isArabic ? `فِرق استبدال وضخ الغاز تعمل بكامل طاقاتها في المناطق التالية:` : `Rapid Refrigerant Dispatch Teams active in:`}
           </h2>
           <div className="flex flex-wrap justify-center gap-3">
             {cities.map(city => {
               const citySlug = city.toLowerCase().replace(/ /g, '-');
               return (
                 <a 
                   key={citySlug} 
                   href={`/${params.locale}/${citySlug}/ac-gas-top-up`}
                   className="bg-slate-50 border border-slate-200 hover:border-[#00E5FF] hover:bg-[#00E5FF] hover:text-slate-900 transition-all text-slate-600 text-sm py-2 px-4 rounded-full font-medium shadow-sm"
                 >
                   {isArabic ? arabicCities[city] || city : city}
                 </a>
               );
             })}
           </div>
        </div>
      </section>
    </div>
  );
}
