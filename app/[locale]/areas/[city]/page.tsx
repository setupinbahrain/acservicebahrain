import React from 'react';
import Image from 'next/image';
import { cities } from '../../../../data/cities';
import { services } from '../../../../data/services';
import WhatsAppButton from '../../../../components/WhatsAppButton';
import { getCDNImage } from '../../../../utils/imageMatrix';
import { arabicCities, arabicServices } from '../../../../data/dictionary';
import { Metadata } from 'next';
import { constructMetadata } from '../../../../utils/seoMatrix';


export function generateMetadata({ params }: { params: { locale: 'en'|'ar', city: string } }): Metadata {
  const isArabic = params.locale === 'ar';
  const slugCity = params.city.toLowerCase().replace(/ /g, '-');
  const cityNameEnglish = params.city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const cityName = isArabic ? (arabicCities[cityNameEnglish] || cityNameEnglish) : cityNameEnglish;

  if (isArabic) {
    return constructMetadata({
      title: `خبراء التكييف المركزي وصيانة الأعطال في ${cityName}، البحرين`,
      description: `خدمات تكييف وتأسيس مجاري الهواء (الدكت) من النخبة في ${cityName}. تشخيص فني سريع وشفاف لحالتك الميكانيكية المخصصة. احجز موعدك فوراً عبر الواتساب.`,
      urlPath: `/ar/areas/${slugCity}`,
      locale: 'ar'
    });
  }

  return constructMetadata({
    title: `Expert HVAC & Central AC Repair in ${cityName}, Bahrain`,
    description: `Leading MEP, Central AC, & Ducting services in ${cityName}. Fast, honest assessments via WhatsApp case-by-case routing. Optimize your cooling today!`,
    urlPath: `/en/areas/${slugCity}`,
    locale: 'en'
  });
}

export default function CityPage({ params }: { params: { locale: 'en'|'ar', city: string } }) {
  const isArabic = params.locale === 'ar';
  const slugCity = params.city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const cityName = isArabic ? (arabicCities[slugCity] || slugCity) : slugCity;

  // Reliable procedural remote CDN selection based on city seed
  const imgPrefix = getCDNImage(`main-hub-${slugCity}`);

  return (
    <div className={`bg-slate-50 min-h-screen ${isArabic ? 'dir-rtl text-right font-arabic' : ''}`}>
      {/* City Hero */}
      <section className="relative bg-secondary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={getCDNImage('technician-working')} alt={`HVAC Technician serving ${cityName}`} fill style={{ objectFit: "cover" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 mt-12 leading-tight">
            {isArabic ? (
              <>نخبة خدمات التكييف المركزي الفائقة في <span className="text-primary">{cityName}</span></>
            ) : (
              <>Top-Tier HVAC & Air Conditioning in <span className="text-primary">{cityName}</span></>
            )}
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-slate-300 mb-8 leading-relaxed">
            {isArabic ? 
              `تشخيص فني ميكانيكي سريع وشفاف لمشاريع التبريد العملاقة، أنظمة VRF وأعطال التكييف المركزي. نحن نخدم كافة الأحياء السكنية والقطاعات التجارية بنطاق عمل ${cityName}.` : 
              `Fast, transparent, case-by-case technical diagnostics for MEP Projects, VRF Systems, and Central Cooling. Serving the entire residential and commercial district of ${cityName}.`
            }
          </p>
          <WhatsAppButton text={isArabic ? `احجز خدمة صيانة عاجلة في ${cityName}` : `Book Service in ${cityName}`} />
        </div>
      </section>

      {/* Main AEO Content Pillar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="prose prose-lg text-slate-700">
            <h2 className={`text-3xl font-bold text-slate-900 border-primary mb-6 ${isArabic ? 'border-r-4 pr-4' : 'border-l-4 pl-4'}`}>
              {isArabic ? `لماذا يتطلب مناخ ${cityName} أنظمة تكييف عالية المرونة والكفاءة؟` : `Why ${cityName}'s Climate Requires Heavy-Duty HVAC Resilience`}
            </h2>
            <p className="leading-relaxed">
              {isArabic ? 
                `الإقامة أو العمل في منطقة ${cityName} يترافق مع متطلبات تبريد مركزية صارمة. المزيج القاسي من الرطوبة الخانقة والحرارة المرتفعة مع الغبار المحمول جواً يزعزع أنظمة التبريد التجارية والسكنية بشكل أسرع من المعتاد. نحن لا نتهرب باقتراحات سطحية كـ"تعبئة غاز التكييف" العشوائية؛ نحن نستأصل العطل من الجذور عن طريق تقييم شامل لقوة دفع الهواء وفحص مبخر التكييف، لضمان تنفس عقارك بهواء نقي ومستمر.` : 
                `Residing in ${cityName} comes with massive cooling requirements. The combination of high local humidity and abrasive airborne dust rapidly destabilizes standard refrigeration systems. We don't just treat symptoms with quick gas top-ups; we perform extensive air balancing, clean ductwork safely, and repair central AC evaporators so your commercial or residential property breathes securely.`
              }
            </p>
            <ul className={`space-y-3 mt-4 list-none text-slate-700 ${isArabic ? 'marker:text-primary pr-0' : 'list-inside marker:text-primary'}`}>
              <li className="flex items-center gap-2">{isArabic ? '✅ صيانة شاملة لوحدات مناولة الهواء FCU و AHU' : '• Comprehensive FCU and AHU Servicing'}</li>
              <li className="flex items-center gap-2">{isArabic ? '✅ فحص دقيق وأنظمة تشخيص متطورة للتكييف المائي (Chilled Water)' : '• Chilled Water AC System diagnostics'}</li>
              <li className="flex items-center gap-2">{isArabic ? '✅ معايرة هندسية لمسارات هواء الدكت (MEP) وفحص أضرار العوازل' : '• Complete MEP ducting alignment and insulation checks'}</li>
            </ul>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden glass-panel group shadow-xl">
            <Image src={imgPrefix} alt={`Commercial VRF install in ${cityName}`} fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* Pricing Module */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            {isArabic ? 'التقييم الشفاف للتكلفة: كل عطل ميكانيكي يتطلب حلاً مستقلاً' : 'Transparent Cost Assessments: Case by Case'}
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
             {isArabic ? 
               `كل عطل في نظام المكيفات المركزية أو الأجهزة، كل تسرب في غاز الفريون، وكل خلل ببرمجيات VRV يمثل تحديًا هندسيًا خاصًا. نحن نرفض الأسعار الموحدة الخادعة. نقوم بتحليل شكواك فوراً وبحرفية عبر الواتساب ونوفر دليلاً دقيقاً لحالة نظامك المعطّل في ${cityName} لتكون أنت المسيطر على كافة التكاليف والمخاطر.` : 
               `Every HVAC failure, duct leak, and VRV fault presents unique challenges. We do not provide misleading flat-rates or hidden fees. We analyze multimedia evidence via WhatsApp and provide you with an exact, case-by-case cost assessment before we proceed. You are in total control in ${cityName}.`
             }
          </p>
          <WhatsAppButton text={isArabic ? 'احصل على العرض الشامل المخصص لكسابقتك الهندسية الآن' : 'Get Your Custom Diagnostic Code Now'} />
        </div>
      </section>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-4">
        <div className="relative h-64 rounded-xl overflow-hidden shadow-lg"><Image src={getCDNImage(`${slugCity}-duct`)} alt={`Ducting Repair ${cityName}`} fill style={{objectFit: 'cover'}}/></div>
        <div className="relative h-64 rounded-xl overflow-hidden shadow-lg"><Image src={getCDNImage(`${slugCity}-vent`)} alt={`Ventilation maintenance ${cityName}`} fill style={{objectFit: 'cover'}}/></div>
        <div className="relative h-64 rounded-xl overflow-hidden shadow-lg"><Image src={getCDNImage(`${slugCity}-mep`)} alt={`MEP contractor ${cityName}`} fill style={{objectFit: 'cover'}}/></div>
      </div>

      {/* Internal SEO Interlinking Matrix */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className={`text-2xl font-bold text-slate-800 mb-6 ${isArabic ? 'text-right' : ''}`}>
             {isArabic ? `قائمة الخدمات الفنية المتوفرة بشكل مخصص في ${cityName}` : `Specific Services Offered in ${cityName}`}
           </h2>
           <div className={`flex flex-wrap gap-3 ${isArabic ? 'flex-row-reverse' : ''}`}>
             {services.map(service => {
                const localizedServiceName = isArabic ? arabicServices[service.slug] || service.name : service.name;
                return (
                  <a 
                    key={service.slug} 
                    href={`/${params.locale}/${params.city}/${service.slug}`}
                    className="bg-slate-50 border border-slate-200 hover:border-primary hover:text-primary transition-colors text-slate-600 text-sm py-2 px-4 rounded-full font-medium"
                  >
                    {isArabic ? `${localizedServiceName} ميدانياً في ${cityName}` : `${service.name} in ${cityName}`}
                  </a>
                )
             })}
           </div>
        </div>
      </section>

      {/* FAQs Removed to clear thin duplicate content penalty */}
    </div>
  );
}
