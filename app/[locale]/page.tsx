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
import { constructMetadata } from '../../utils/seoMatrix';

export async function generateMetadata({ params }: { params: { locale: 'en' | 'ar' } }): Promise<Metadata> {
  const isArabic = params.locale === 'ar';
  if (isArabic) {
    return constructMetadata({
      title: 'أفضل شركة صيانة مكيفات في البحرين | تصليح التكييف المركزي والأجهزة',
      description: 'نظام متكامل لخدمات صيانة المكيفات المركزية والأجهزة المنزلية في البحرين. دقة هندسية عالية وتغطية شاملة للمقاطعات السكنية والتجارية.',
      urlPath: '/ar',
      locale: 'ar'
    });
  }
  return constructMetadata({
    title: 'Top Rated AC Repair & HVAC Maintenance in Bahrain',
    description: 'Bahrain’s elite HVAC, AC & Appliance network. Engineered precision, advanced remote diagnostics, and complete GCC commercial coverage.',
    urlPath: '/en',
    locale: 'en'
  });
}

export default function Home({ params }: { params: { locale: 'en' | 'ar' } }) {
  const isArabic = params.locale === 'ar';

  return (
    <div className={`bg-slate-50 ${isArabic ? 'dir-rtl text-right font-arabic' : ''}`}>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={getCDNImage('bahrain-home-hero')} alt="AC Service Bahrain Network" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            {isArabic ? (
              <>الشبكة الأكثر تقدماً تقنياً لصيانة وتصليح <span className="text-primary">مكيفات البحرين</span></>
            ) : (
              <>Bahrain's Most Technically Advanced <span className="text-primary">AC & HVAC</span> Repair Network</>
            )}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-slate-300 mb-10 leading-relaxed font-light">
            {isArabic ? 
              'عندما يتعطل مكيفك في حرارة الصيف التي تصل إلى 45 درجة مئوية، كل ساعة تهم. ننشر مهندسي التكييف المعتمدين في جميع مقاطعات البحرين الـ 64 مع تقييم وتسعير شفاف عبر الواتساب.' : 
              'When your AC fails in Bahrain\'s 45°C summer heat, every hour matters. We deploy certified HVAC engineers across all 64 districts — with WhatsApp-first diagnostics and transparent pricing. No guesswork. Just honest repair.'
            }
          </p>
          <div className="flex justify-center gap-4">
             <WhatsAppButton text={isArabic ? "📱 احصل على فحص مجاني عبر الواتساب" : "📱 Get WhatsApp Diagnosis — Free"} />
          </div>
        </div>
      </section>

      {/* Trust Bar (Under Hero) */}
      <section className="bg-slate-900 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-between items-center gap-8 text-center sm:text-left">
            <div className="flex-1 min-w-[200px]">
              <div className="font-sans text-2xl font-bold text-amber-500">CR 136016-1</div>
              <div className="text-xs text-slate-300 mt-1 uppercase tracking-wider">{isArabic ? 'ورشة مسجلة' : 'Registered Workshop'}</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="font-sans text-2xl font-bold text-amber-500">30-Day</div>
              <div className="text-xs text-slate-300 mt-1 uppercase tracking-wider">{isArabic ? 'ضمان جودة العمل' : 'Workmanship Guarantee'}</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="font-sans text-2xl font-bold text-amber-500">64</div>
              <div className="text-xs text-slate-300 mt-1 uppercase tracking-wider">{isArabic ? 'مقاطعة مغطاة' : 'Districts Covered'}</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="font-sans text-2xl font-bold text-amber-500">OEM Only</div>
              <div className="text-xs text-slate-300 mt-1 uppercase tracking-wider">{isArabic ? 'قطع غيار أصلية' : 'Genuine Parts Used'}</div>
            </div>
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
      
      {/* New Context Sections (Playbook) */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6">
                {isArabic ? 'لماذا تتلف أنظمة التكييف في البحرين بشكل أسرع' : 'Why Bahrain\'s Climate Destroys AC Systems Faster'}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {isArabic ? 
                  'تتجاوز درجة الحرارة في البحرين بانتظام 45 درجة مئوية خلال الصيف، مع رطوبة عالية وأملاح جوية تؤدي لتآكل مبدلات الحرارة. لذلك، نحن نقوم بتشخيص أعمق من مجرد تعبئة غاز.' :
                  'Bahrain\'s ambient temperature regularly exceeds 45°C between May and September. Combined with coastal humidity of 70–90% and airborne salt particles from the Arabian Gulf, HVAC systems operate under extreme mechanical stress. This is why we see compressor burnout in units that are only 2–3 years old.'
                }
              </p>
              <WhatsAppButton text={isArabic ? "📋 أرسل كود العطل عبر الواتساب" : "📋 Send Us Your Error Code on WhatsApp"} fullWidth />
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6">
                {isArabic ? 'كيف نعمل — 3 خطوات لنظام سليم' : 'How It Works — 3 Steps to a Fixed System'}
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <strong className="text-primary block mb-1">Step 1: WhatsApp Your Fault</strong>
                  <p className="text-sm text-slate-600">Send us a photo of your unit and a short video of the symptom. Senior engineer responds within 30 mins.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <strong className="text-primary block mb-1">Step 2: Receive a Transparent Quote</strong>
                  <p className="text-sm text-slate-600">Before any technician leaves, you receive a case-specific cost range. No surprises.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <strong className="text-primary block mb-1">Step 3: Precision Repair</strong>
                  <p className="text-sm text-slate-600">Our technician executes the repair and runs a full air balance test before marking the job complete.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Central WhatsApp Logic */}
       <section className="bg-slate-800 text-white py-20 border-b-8 border-primary">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold mb-6">
              {isArabic ? 'لا للوسطاء. تحدث مباشرة مع المهندسين' : 'Cut The Middleman. Speak to Technicians directly.'}
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light">
               {isArabic ? 'توقف عن إضاعة الوقت. احصل على استشارة تشخيصية ميكانيكية عالية الدقة ومباشرة عبر الواتساب.' : 'Stop talking to receptionists. Secure a highly-technical diagnostic consultation instantly over WhatsApp.'}
            </p>
            <WhatsAppButton text={isArabic ? 'إبدأ التقييم الهندسي عبر الواتساب' : 'Initiate WhatsApp Secure Chat'} fullWidth={false} />
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
