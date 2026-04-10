import React from 'react';
import Image from 'next/image';
import { services } from '../../../../data/services';
import { cities } from '../../../../data/cities';
import WhatsAppButton from '../../../../components/WhatsAppButton';
import ProceduralFAQ from '../../../../components/ProceduralFAQ';
import ProceduralFAQAr from '../../../../components/ProceduralFAQAr';
import { getCDNImage } from '../../../../utils/imageMatrix';
import { arabicCities, arabicServices } from '../../../../data/dictionary';
import { Metadata } from 'next';
import { constructMetadata } from '../../../../utils/seoMatrix';

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { locale: 'en'|'ar', service: string } }): Metadata {
  const isArabic = params.locale === 'ar';
  const serviceData = services.find(s => s.slug === params.service);
  const nameEnglish = serviceData ? serviceData.name : params.service.replace('-', ' ');
  const serviceName = isArabic ? (arabicServices[params.service] || nameEnglish) : nameEnglish;
  const slugService = params.service;
  
  if (isArabic) {
    return constructMetadata({
      title: `خبراء ${serviceName} في البحرين | استشارة مباشرة عن طريق الواتساب`,
      description: `صيانة متخصصة ودقيقة لـ ${serviceName} في البحرين. نقدم فحصا ميكانيكياً احترافياً لمعرفة التكاليف الحقيقية في سرية ووضوح فوراً عبر الواتساب.`,
      urlPath: `/ar/services/${slugService}`,
      locale: 'ar'
    });
  }

  return constructMetadata({
    title: `Professional ${nameEnglish} in Bahrain | Direct WhatsApp Quotes`,
    description: `Expert ${nameEnglish} and related ${serviceData?.category || 'HVAC'} maintenance in Bahrain. Highly localized, precision diagnostics. Find out your true cost instantly on WhatsApp.`,
    urlPath: `/en/services/${slugService}`,
    locale: 'en'
  });
}

export default function ServicePage({ params }: { params: { locale: 'en'|'ar', service: string } }) {
  const isArabic = params.locale === 'ar';
  const serviceData = services.find(s => s.slug === params.service);
  const slugService = serviceData ? serviceData.name : params.service.replace('-', ' ');
  const serviceName = isArabic ? (arabicServices[params.service] || slugService) : slugService;

  // Reliable procedural remote CDN selection based on service seed
  const imgPrefix = getCDNImage(`main-service-${params.service}`, serviceData?.category);

  return (
    <div className={`bg-slate-50 min-h-screen ${isArabic ? 'dir-rtl text-right font-arabic' : ''}`}>
      <section className="bg-secondary text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm font-bold tracking-widest text-primary uppercase mb-2 block">
            {isArabic ? (serviceData?.category === 'HVAC' ? 'أنظمة تكييف متقدمة' : 'خدمات المعايرة الاحترافية') : (serviceData?.category || 'Specialized Servicing')}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-4 leading-tight">
             {isArabic ? `مهندسون وخبراء ${serviceName} في البحرين` : `${serviceName} Experts in Bahrain`}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
             {isArabic ? 
               `سواء كنت بحاجة لتدخل ميكانيكي طارئ في منشأتك التجارية أو معايرة دقيقة لتكييف وأجهزة منزلك، مهندسونا المعتمدون ينفذون خدمة ${serviceName} بأقصى معايير الكفاءة الهندسية المتبعة دولياً.` : 
               `Whether you need emergency intervention for your commercial facility or precise calibration for your residential setup, our certified technicians execute ${serviceName.toLowerCase()} with absolute structural integrity.`
             }
          </p>
          <WhatsAppButton text={isArabic ? 'تحدث لمهندسنا فوراً حول العطل الميكانيكي المتواجد لديك' : 'Consult a Technician About Your System Failure'} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden glass-panel group shadow-xl">
           <Image src={imgPrefix} alt={`${serviceName} implementation in Bahrain`} fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              {isArabic ? `تحليل هندسي مباشر: فهم آليات وتقنيات ${serviceName}` : `Technical Breakdown: Understanding ${serviceName}`}
            </h2>
            <div className={`prose prose-lg text-slate-600 ${isArabic ? 'max-w-none text-right' : ''}`}>
              <p className="leading-relaxed">
                {isArabic ? 
                  `عند البحث عن أفضل الحلول والممارسات المتعلقة بخدمة الميكانيكا المطلوبة، فإن الدقة الهندسية هي العامل الوحيد الحاسم. تركيب وفحص مجاري هواء التكييف الدكت، تعديل ضخ غازات التبريد، ومعايرة تدفق الهواء ليست مجرد مهام ارتجالية لفنيين هواة. أي خطأ طفيف في تقدير أحمال العمل أو الضغط الحراري سيؤدي لا محالة إلى تفاقم الأزمة (كأن تتجمد الأنابيب النحاسية المخصصة للتبريد أو يحترق الكمبريسر الأساسي بقوة).` : 
                  `When searching for ${serviceName}, structural accuracy is everything. Duct fabrication, refrigerant metering, and airflow balancing are not amateur tasks. A slight miscalculation in your MEP load or static pressure causes frozen evaporator coils and prematurely burnt compressor units.`
                }
              </p>
              <br/>
              <p><strong>{isArabic ? 'منهجيتنا وبروتوكول العمل الدقيق لدينا:' : 'Our Procedural Approach:'}</strong></p>
              <ul className={`mt-4 text-slate-700 space-y-3 font-medium list-none`}>
                <li className="flex items-center gap-2">{isArabic ? '١. قراءة وتشخيص معطيات المقاييس الكهربائية والحرارية للوحدة المعطلة.' : '1. Immediate thermal and electrical diagnostics.'}</li>
                <li className="flex items-center gap-2">{isArabic ? '٢. عزل فعلي لنظم العطل المتسببة بالقصور (مثل الصمامات التالفة، المراوح، أو اللوحات الأم).' : '2. Isolation of the faulty subsystem (e.g., expansion valve, blower motor, or control mechanism).'}</li>
                <li className="flex items-center gap-2">{isArabic ? '٣. عرض شفّاف كلياً للتكلفة المالية اللازمة عن طريق إرسالها كتابياً عبر منصتنا الواضحة في واتساب.' : '3. Transparent cost estimation quoted securely via our centralized WhatsApp interface.'}</li>
                <li className="flex items-center gap-2">{isArabic ? '٤. فحص توازن هوائي ديناميكي أخيرة لتصحيح كافة المخرجات وضمان الجودة.' : '4. Precise correction followed by a rigorous post-repair air balance check.'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signal / Cost Element */}
       <section className="bg-slate-100 py-16 px-4 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {isArabic ? 'لماذا تختلف التكلفة التشغيلية من نظام لآخر؟' : 'Why is Cost Determined Case by Case?'}
          </h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            {isArabic ? 
              `في عالم هندسة التكييف المركزي والأجهزة المنزلية المتقدمة التابعة لها، غالباً ما تكون التوقعات والتسعيرات الجاهزة السريعة مجرد حيل تسويقية تهدف للاستدراج وزيادة التكلفة من الداخل لاحقاً. لكشف التكلفة الحقيقية، نطلب منك تزويد فريقنا المرابط بالأدلة المرئية والأعطال الملموسة عبر حسابنا في واتساب لنصوغ لك تسعيرة فنية حقيقية لا تتغير.` : 
              `In Central AC and intensive HVAC environments, standard price books are usually scams designed to up-charge later. We require visual evidence and exact symtoms sent to our engineers on WhatsApp to give you highly accurate, honest pricing ranges.`
            }
          </p>
          <WhatsAppButton text={isArabic ? `احصل على التسعيرة الدقيقة لخدمة ${serviceName}` : `Price Check for ${serviceName}`} />
        </div>
      </section>

      {/* Internal Location Matrix */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
             {isArabic ? `مركز التدخل الهيكلي السريع متواجد وقادر على نشر خدمات ${serviceName} في هذه المناطق:` : `We Deploy ${serviceName} To These Local Sectors:`}
           </h2>
           <div className="flex flex-wrap justify-center gap-3">
             {cities.map(city => {
               const citySlug = city.toLowerCase().replace(/ /g, '-');
               return (
                 <a 
                   key={citySlug} 
                   href={`/${params.locale}/${citySlug}/${params.service}`}
                   className="bg-slate-50 border border-slate-200 hover:border-primary hover:bg-primary hover:text-white transition-all text-slate-600 text-sm py-2 px-4 rounded-full font-medium"
                 >
                   {isArabic ? arabicCities[city] || city : city}
                 </a>
               );
             })}
           </div>
        </div>
      </section>

      {/* --- ALL-PAGES REQUIREMENT: THE 20-FAQ Procedural Generator --- */}
      <section className="bg-slate-50 border-t border-slate-200 py-16">
         <div className="max-w-6xl mx-auto px-4 relative z-10">
            {isArabic ? (
              <ProceduralFAQAr serviceName={serviceName} cityName="جميع المقاطعات" />
            ) : (
              <ProceduralFAQ serviceName={serviceName} cityName="Bahrain" />
            )}
         </div>
      </section>
    </div>
  );
}
