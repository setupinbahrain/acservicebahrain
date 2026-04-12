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
      title: `عقود صيانة التكييف المركزي HVAC في البحرين | خدمات للشركات والمباني`,
      description: `مهندسو صيانة التكييف المركزي وأنظمة الـ HVAC في البحرين. نقدم عقود صيانة سنوية (AMC) دقيقة للشركات والمباني، وتنظيف وتطهير مجاري الدكت، وصيانة أنظمة التبريد التجارية.`,
      urlPath: `/ar/services/hvac-maintenance`,
      locale: 'ar'
    });
  }

  return constructMetadata({
    title: `Commercial HVAC Maintenance & AMC Contracts in Bahrain`,
    description: `Leading HVAC maintenance contractors in Bahrain. We provide heavy-duty Central AC servicing, duct cleaning, VRF system calibration, and corporate Annual Maintenance Contracts (AMC).`,
    urlPath: `/en/services/hvac-maintenance`,
    locale: 'en'
  });
}

export default function HVACMaintenancePage({ params }: { params: { locale: 'en'|'ar' } }) {
  const isArabic = params.locale === 'ar';

  const imgPrefix = getCDNImage(`main-service-hvac-maintenance`, 'HVAC');

  return (
    <div className={`bg-slate-50 min-h-screen ${isArabic ? 'dir-rtl text-right font-arabic' : ''}`}>
      <section className="bg-secondary text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm font-bold tracking-widest text-[#00E5FF] uppercase mb-2 block">
            {isArabic ? 'هندسة الهواء والتكييف التجاري' : 'Commercial MEP & HVAC Infrastructure'}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-4 leading-tight">
             {isArabic ? `عقود صيانة التكييف المركزي وأنظمة HVAC في البحرين` : `Corporate HVAC Maintenance & Central AC Engineering Bahrain`}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
             {isArabic ? 
               `الشركات والمباني الكبرى لا تحتمل أعطال التكييف. نحن نوفر عقود صيانة سنوية (AMC) مخصصة لحماية أنظمة الـ VRF، والمبردات الكبيرة (Chillers)، والمكيفات المركزية بكفاءة وتدخل استباقي.` : 
               `Commercial facilities cannot afford HVAC downtime. Our engineering teams provide proactive Annual Maintenance Contracts (AMC) designed to secure VRF networks, heavy-tonnage Package Units, and central chilled-water systems.`
             }
          </p>
          <WhatsAppButton text={isArabic ? 'استفسر عن عقود الصيانة التجارية الآن' : 'Request Corporate AMC HVAC Quotation'} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative h-[500px] rounded-2xl overflow-hidden glass-panel group shadow-xl">
           <Image src={imgPrefix} alt="HVAC engineer performing maintenance on central unit" fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform duration-700" />
           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
             <div className="flex gap-2 mb-2">
               <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">VRF/VRV</span>
               <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">Package Units</span>
               <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">AHU / FCU</span>
             </div>
             <p className="text-white text-sm opacity-90">{isArabic ? 'تغطية كاملة للمعدات الصناعية والتجارية' : 'Full structural coverage for industrial-grade systems'}</p>
           </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              {isArabic ? `آلية التقييم الهندسي وتكاليف عقود الصيانة` : `Structural HVAC Assessments & AMC Pricing Matrix`}
            </h2>
            <div className={`prose prose-lg text-slate-600 ${isArabic ? 'max-w-none text-right' : ''}`}>
              <p className="leading-relaxed mb-6 font-medium">
                {isArabic ? 
                  `صيانة التكييف المركزي ليست مجرد غسيل للفلاتر. هي معايرة ضغط ديناميكية، قياس سحب الأمبير تحت الحمل، وتنظيف كيميائي للمبادلات الحرارية لمنع انهيار المنظومة التجارية.` : 
                  `Commercial HVAC maintenance is not merely washing filters. It demands dynamic pressure calibration, load amperage metering, and deep chemical descaling of condenser coils to prevent catastrophic multi-unit failure.`
                }
              </p>
              
              <div className="overflow-x-auto rounded-xl shadow-sm border border-slate-200 hide-scrollbar mt-6 mb-8">
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs text-white uppercase bg-slate-800">
                      <tr>
                          <th className="px-6 py-4 rounded-tl-xl">{isArabic ? 'نطاق وتصنيف الخدمة' : 'Service Classification'}</th>
                          <th className="px-6 py-4">{isArabic ? 'الهيكلية التنفيذية' : 'Execution Scope'}</th>
                          <th className="px-6 py-4 rounded-tr-xl">{isArabic ? 'هيكل التكلفة' : 'Cost Structure'}</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="bg-white border-b hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-slate-900 border-r border-slate-100">{isArabic ? 'صيانة كيميائية فردية (Package Unit)' : 'One-Off Deep Chemical Clean (Package Unit)'}</td>
                          <td className="px-6 py-4">{isArabic ? 'غسيل كيميائي عالي الضغط، تعقيم مجرى الدكت، فحص الغاز الكهربائي' : 'High-pressure alkaline chemical wash, duct sterilization, and Freon pressure analysis.'}</td>
                          <td className="px-6 py-4 font-mono text-primary font-bold">25 - 60 BHD</td>
                      </tr>
                      <tr className="bg-slate-50 border-b hover:bg-slate-100 transition-colors">
                          <td className="px-6 py-4 font-semibold text-slate-900 border-r border-slate-100">{isArabic ? 'عقد صيانة سنوي (AMC) لفيلات أو مقاهي' : 'Annual Maintenance Contract (AMC) for Villas/Cafes'}</td>
                          <td className="px-6 py-4">{isArabic ? '٤ زيارات دورية، استجابة طوارئ خلال ٢٤ ساعة، خصم على قطع الغيار الميكانيكية.' : '4 Scheduled rigorous visits, 24-hr emergency dispatch, and heavily discounted OEM parts.'}</td>
                          <td className="px-6 py-4 font-mono text-primary font-bold">{isArabic ? 'حسب عدد الأطنان' : 'Tonnage Based'}</td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-slate-900 border-r border-slate-100">{isArabic ? 'تصحيح عزل الدكت المركزي (Duct Insulation)' : 'Central Duct Air-Leak & Insulation Repair'}</td>
                          <td className="px-6 py-4">{isArabic ? 'تصحيح تكثف قطرات الماء، إعادة العزل الحراري لمجاري الهواء لمنع هدر الطاقة.' : 'Fixing condensation drips, re-insulating exposed AC ducts, and sealing static air drops.'}</td>
                          <td className="px-6 py-4 font-mono text-primary font-bold">{isArabic ? 'مبني على المقايسة' : 'Custom Estimate'}</td>
                      </tr>
                  </tbody>
                </table>
              </div>

               <p><strong>{isArabic ? 'مزايا عقود الصيانة السنوية (AMC) للشركات:' : 'Why Corporate Entities Choose Our AMC:'}</strong></p>
               <ul className={`mt-4 text-slate-700 space-y-3 font-medium list-none`}>
                 <li className="flex items-center gap-2">✓ {isArabic ? 'خفض استهلاك الكهرباء بنسبة تصل إلى ١٥٪ بعد الغسيل الكيميائي المكثف للمكثفات.' : 'Immediate electrical consumption reduction (up to 15%) post chemical coil descale.'}</li>
                 <li className="flex items-center gap-2">✓ {isArabic ? 'تقارير هندسية موثقة بعد كل زيارة ترفع للإدارة العليا بحالة الأصول الكهروميكانيكية.' : 'Detailed Mechanical Integrity Reports submitted to management after every cycle.'}</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Location Matrix */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
             {isArabic ? `مشاريع التكييف التجاري المنجزة تغطي هذه القطاعات جغرافياً:` : `Corporate HVAC Logistics & Engineering Zones:`}
           </h2>
           <div className="flex flex-wrap justify-center gap-3">
             {cities.map(city => {
               const citySlug = city.toLowerCase().replace(/ /g, '-');
               return (
                 <a 
                   key={citySlug} 
                   href={`/${params.locale}/${citySlug}/hvac-maintenance`}
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
