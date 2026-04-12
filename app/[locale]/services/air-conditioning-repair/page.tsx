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
      title: `تصليح مكيفات البحرين | صيانة مكيفات سبليت ومركزي فورية`,
      description: `خبراء تصليح المكيفات في كافة مناطق البحرين. نوفر صيانة شاملة لأعطال الكمبريسور، الكابستور، وتسريب الغاز مع قطع غيار أصلية 100% وتسعيرة فورية عبر الواتساب.`,
      urlPath: `/ar/services/air-conditioning-repair`,
      locale: 'ar'
    });
  }

  return constructMetadata({
    title: `Air Conditioning Repair Bahrain | Expert AC Technicians`,
    description: `Professional AC repair across all Bahrain districts. We fix faulty compressors, burnt capacitors, and PC boards with genuine OEM parts. Get a fixed price via WhatsApp now.`,
    urlPath: `/en/services/air-conditioning-repair`,
    locale: 'en'
  });
}

export default function ACRepairPage({ params }: { params: { locale: 'en'|'ar' } }) {
  const isArabic = params.locale === 'ar';

  const imgPrefix = getCDNImage(`main-service-air-conditioning-repair`, 'HVAC');

  return (
    <div className={`bg-slate-50 min-h-screen ${isArabic ? 'dir-rtl text-right font-arabic' : ''}`}>
      <section className="bg-secondary text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm font-bold tracking-widest text-[#00E5FF] uppercase mb-2 block">
            {isArabic ? 'فريق الدعم الفني للتكييف' : 'Advanced AC Support Team'}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-4 leading-tight">
             {isArabic ? `مهندسو تصليح المكيفات الأكثر اعتماداً في البحرين` : `Bahrain's Most Trusted AC Repair Engineers`}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
             {isArabic ? 
               `في درجات حرارة الصيف القاسية في البحرين، تعطل المكيف يعتبر حالة طوارئ. مهندسونا يصلون إليك مزودين بقطع الغيار الأصلية كالكابستور ومحركات المراوح لإصلاح العطل من الزيارة الأولى وبدون تأخير.` : 
               `In Bahrain's fierce summer heat, a broken AC is a mechanical emergency. Our engineers arrive fully equipped with OEM capacitors, PC boards, and motors to restore your cooling on the very first visit.`
             }
          </p>
          <WhatsAppButton text={isArabic ? 'احجز موعداً لتصليح مكيفك الآن' : 'Schedule Rapid AC Repair Now'} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative h-[500px] rounded-2xl overflow-hidden glass-panel group shadow-xl">
           <Image src={imgPrefix} alt="Engineer fixing AC compressor unit" fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform duration-700" />
           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
             <div className="flex gap-2 mb-2">
               <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">O General</span>
               <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">Pearl</span>
               <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">Daikin</span>
             </div>
             <p className="text-white text-sm opacity-90">{isArabic ? 'أجزاء وقطع غيار معتمدة للشركات الكبرى' : 'OEM Parts for all Major Brands'}</p>
           </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              {isArabic ? `جدول تشخيص أعطال المكيفات الشائعة وتكلفتها` : `Standard AC Repair Diagnostics & Pricing`}
            </h2>
            <div className={`prose prose-lg text-slate-600 ${isArabic ? 'max-w-none text-right' : ''}`}>
              <p className="leading-relaxed mb-6 font-medium">
                {isArabic ? 
                  `الكفاءة تكمن في التشخيص الدقيق. معرفة ما إذا كان العطل من "الكابستور" الكهربائي أم من "الكمبريسور" الميكانيكي هو ما يوفر مئات الدنانير من الاستغلال. تسعيرتنا ثابتة ومبنية على العطل.` : 
                  `Efficiency lies in correct diagnosis. Knowing the difference between a burnt $15 capacitor and a dead compressor saves you hundreds of dinars. Here is our exact diagnostic breakdown.`
                }
              </p>
              
              <div className="overflow-x-auto rounded-xl shadow-sm border border-slate-200 hide-scrollbar mt-6 mb-8">
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs text-white uppercase bg-slate-800">
                      <tr>
                          <th className="px-6 py-4 rounded-tl-xl">{isArabic ? 'وصف العطل' : 'Technical Symptom'}</th>
                          <th className="px-6 py-4">{isArabic ? 'الحل الهندسي' : 'Diagnostic Action'}</th>
                          <th className="px-6 py-4 rounded-tr-xl">{isArabic ? 'التكلفة التقديرية' : 'Hardware Cost'}</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="bg-white border-b hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-slate-900 border-r border-slate-100">{isArabic ? 'الوحدة الداخلية تعمل وتصدر هواء دافئ، ولا يوجد صوت رنين من الكمبريسور الخارجي' : 'Blowing warm air, outdoor fan spins but compressor is completely silent'}</td>
                          <td className="px-6 py-4">{isArabic ? 'احتراق الكابستور (المكثف الكهربائي). يتم استبداله بقطعة أصلية معدنية.' : 'Burnt Start/Run Capacitor. Requires replacement with standard metallic OEM part.'}</td>
                          <td className="px-6 py-4 font-mono text-primary font-bold">12 - 18 BHD</td>
                      </tr>
                      <tr className="bg-slate-50 border-b hover:bg-slate-100 transition-colors">
                          <td className="px-6 py-4 font-semibold text-slate-900 border-r border-slate-100">{isArabic ? 'المكيف يقطر مياه بكثافة داخل الغرفة' : 'Heavy water dripping continuously from the indoor split unit'}</td>
                          <td className="px-6 py-4">{isArabic ? 'انسداد في مجرى التصريف (الدرين) أو تراكم أوساخ في الحوض. يتطلب ضخ وتفريغ ضغط عالي.' : 'Blocked drain pipe or algae in drip pan. Requires high-pressure flush and chemical clean.'}</td>
                          <td className="px-6 py-4 font-mono text-primary font-bold">10 - 15 BHD</td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-slate-900 border-r border-slate-100">{isArabic ? 'انقطاع كهرباء الغرفة بالكامل بمجرد تشغيل المكيف (Tripping)' : 'Main circuit breaker trips immediately when AC turns on'}</td>
                          <td className="px-6 py-4">{isArabic ? 'تماس كهربائي (Short) في أسلاك الكمبريسور أو احتراق ملفه الداخلي. يتطلب تصوير ميجر (Megger).' : 'Dead short in compressor windings or melted wires. Requires full Megger test.'}</td>
                          <td className="px-6 py-4 font-mono text-primary font-bold">{isArabic ? 'تسعيرة بالواتساب' : 'Quoted Directly'}</td>
                      </tr>
                  </tbody>
                </table>
              </div>

               <p><strong>{isArabic ? 'لماذا يعتمد علينا عملائنا؟' : 'Why Clients Trust Our Diagnostics:'}</strong></p>
               <ul className={`mt-4 text-slate-700 space-y-3 font-medium list-none`}>
                 <li className="flex items-center gap-2">✓ {isArabic ? 'لا نطلب تغيير الكمبريسور أبداً إلا بعد فحصه هندسياً أمام عينيك.' : 'We never condemn a compressor without testing it in front of you.'}</li>
                 <li className="flex items-center gap-2">✓ {isArabic ? 'فريقنا مجهز بالكامل لغسيل وصيانة المكيفات في نفس يوم الحضور.' : 'Fully equipped trucks for same-day repair and chemical deep-cleaning.'}</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Location Matrix */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
             {isArabic ? `عناصر وتغطية تصليح المكيفات تشمل كافة المناطق:` : `Same-Day AC Repair Dispatched To:`}
           </h2>
           <div className="flex flex-wrap justify-center gap-3">
             {cities.map(city => {
               const citySlug = city.toLowerCase().replace(/ /g, '-');
               return (
                 <a 
                   key={citySlug} 
                   href={`/${params.locale}/${citySlug}/air-conditioning-repair`}
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
