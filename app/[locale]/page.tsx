import React from 'react';
import Image from 'next/image';
import { cities } from '../../data/cities';
import { services } from '../../data/services';
import WhatsAppButton from '../../components/WhatsAppButton';
import ProceduralFAQ from '../../components/ProceduralFAQ';
import ProceduralFAQAr from '../../components/ProceduralFAQAr';
import { getCDNImage } from '../../utils/imageMatrix';
import { arabicCities, arabicServices } from '../../data/dictionary';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: 'en' | 'ar' } }): Promise<Metadata> {
  const isArabic = params.locale === 'ar';
  if (isArabic) {
    return {
      title: 'أفضل شركة صيانة مكيفات في البحرين | تصليح التكييف المركزي والأجهزة',
      description: 'نظام متكامل لخدمات صيانة المكيفات المركزية والأجهزة المنزلية في البحرين. دقة هندسية عالية وتغطية شاملة للمقاطعات السكنية والتجارية.',
    };
  }
  return {
    title: 'Top Rated AC Repair & HVAC Maintenance in Bahrain',
    description: 'Bahrain’s elite HVAC, AC & Appliance network. Engineered precision, advanced remote diagnostics, and complete GCC commercial coverage.',
  };
}

export default function Home({ params }: { params: { locale: 'en' | 'ar' } }) {
  const isArabic = params.locale === 'ar';

  return (
    <div className={`bg-slate-50 ${isArabic ? 'dir-rtl text-right font-arabic' : ''}`}>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={getCDNImage('bahrain-home-hero')} alt="HVAC Repair Network Bahrain" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            {isArabic ? (
              <>شبكة <span className="text-primary">التكييف المركزي والأجهزة المنزلية</span> الأفضل في البحرين</>
            ) : (
              <>Bahrain’s Elite <span className="text-primary">HVAC, AC & Appliance</span> Network</>
            )}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-slate-300 mb-10 leading-relaxed font-light">
            {isArabic ? 
              'دقة هندسية، فحص عن بعد متقدم، وتغطية تجارية شاملة. من أنظمة التبريد المركزية VRF إلى فحص وتصنيع الدكتات، مهندسونا مستعدون دائماً للتدخل السريع.' : 
              'Engineered precision, advanced remote diagnostics, and complete GCC commercial coverage. From VRF Central Cooling to localized duct inspections, our verified technicians are on standby.'
            }
          </p>
          <div className="flex justify-center gap-4">
             <WhatsAppButton text={isArabic ? "احصل على دعم هندسي وفني فوري" : "Get Immediate Technical Support"} />
          </div>
        </div>
      </section>

      {/* Services Grid (Spoke Hub) */}
      <section className="max-w-7xl mx-auto px-4 py-20 pb-12">
        <h2 className={`text-3xl font-bold text-slate-900 border-primary mb-10 ${isArabic ? 'border-r-4 pr-4' : 'border-l-4 pl-4'}`}>
          {isArabic ? 'تخصصاتنا الهندسية الأساسية' : 'Our Core Specialties'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 12).map(service => (
            <a href={`/${params.locale}/services/${service.slug}`} key={service.slug} className="group bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-xl hover:border-primary transition-all">
              <h3 className="font-bold text-lg text-slate-800 mb-2 truncate group-hover:text-primary transition-colors">
                {isArabic ? (arabicServices[service.slug] || service.name) : service.name}
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                {isArabic && service.category === "HVAC" ? "أنظمة تكييف متقدمة" : 
                 isArabic && service.category === "Appliance" ? "أجهزة منزلية" :
                 isArabic && service.category === "Chiller" ? "مبردات صناعية" :
                 service.category}
              </p>
            </a>
          ))}
        </div>
        <div className="text-center mt-10">
            <a href={`/${params.locale}/guides`} className="text-primary font-bold hover:underline">
               {isArabic ? 'عرض تقارير وأدلة صيانة التكييف والدكت المتخصصة' : 'View all specific HVAC & Ducting Troubleshooting Guides'} &rarr;
            </a>
        </div>
      </section>

      {/* City Hub Grid */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className={`text-3xl font-bold text-slate-900 border-primary mb-10 ${isArabic ? 'border-r-4 pr-4' : 'border-l-4 pl-4'}`}>
             {isArabic ? 'تغطية ميدانية هندسية لكافة مناطق البحرين' : 'Comprehensive Local Bahrain Coverage'}
           </h2>
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
             {cities.slice(0, 24).map(city => {
               const citySlug = city.toLowerCase().replace(/ /g, '-');
               return (
                 <a href={`/${params.locale}/areas/${citySlug}`} key={citySlug} className="bg-white py-3 px-4 rounded-lg text-sm font-medium text-slate-600 shadow-sm hover:shadow hover:bg-primary hover:text-white transition-all text-center truncate">
                   {isArabic ? (arabicCities[city] || city) : city}
                 </a>
               );
             })}
           </div>
           <p className="text-center mt-8 text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
             {isArabic ? 'عملياتنا تغطّي جميع مقاطعات ومناطق البحرين الـ 64 الفرعية. إذا لم تجد منطقتك ضمن القائمة أعلاه، تأكد مسبقاً أننا نوفر عمليات إرسال وتدخل سريع لأي موقع فورياً.' : 'We cover ALL 64 micro-districts. If your city isn\'t listed here, rest assured we provide rapid dispatch.'}
           </p>
        </div>
      </section>
      
      {/* Central WhatsApp Logic */}
       <section className="bg-white py-20 border-b border-secondary/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
              {isArabic ? 'لا للوسطاء. تحدث مباشرة مع المهندسين' : 'Cut The Middleman. Speak to Technicians.'}
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
               {isArabic ? 'توقف عن إضاعة الوقت مع موظفي استقبال غير مختصين لا يدركون الفارق بين أعطال أنظمة الـ FCU وضعف كفاءة تبريد التكييف. احصل على استشارة تشخيصية ميكانيكية عالية الدقة ومباشرة عبر الواتساب.' : 'Stop talking to receptionists who don\'t understand the difference between an FCU issue and a Chilled Water AC leak. Secure a highly-technical diagnostic consultation instantly.'}
            </p>
            <WhatsAppButton text={isArabic ? 'إبدأ التقييم الهندسي عبر الواتساب' : 'Initiate WhatsApp Secure Chat'} fullWidth />
          </div>
       </section>

      {/* --- ALL-PAGES REQUIREMENT: THE 20-FAQ Procedural Generator --- */}
      <section className="bg-slate-50 border-t border-slate-200 py-16">
         <div className="max-w-6xl mx-auto px-4 relative z-10">
            {isArabic ? (
              <ProceduralFAQAr serviceName="خدمات التكييف المركزية والعامة" cityName="البحرين" />
            ) : (
              <ProceduralFAQ serviceName="Premium HVAC Servicing" cityName="Bahrain" />
            )}
         </div>
      </section>

    </div>
  );
}
