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
      title: `تصليح غسالات في البحرين | صيانة اتوماتيك، نص اتوماتيك ونشافة`,
      description: `خبراء تصليح الغسالات في البحرين للعلامات التجارية إل جي، سامسونج، ويرلبول وغيرها. إصلاح مشاكل عدم تصريف الماء، الأصوات المزعجة، واحتراق الموتور بتسعيرة فورية عبر الواتساب.`,
      urlPath: `/ar/services/washing-machine-repair`,
      locale: 'ar'
    });
  }

  return constructMetadata({
    title: `Washing Machine Repair Bahrain | Front & Top Load Experts`,
    description: `Expert washing machine repair in Bahrain. We fix LG, Samsung & all brands. From noisy spinning drums to blocked drain pumps, get an exact quote on WhatsApp.`,
    urlPath: `/en/services/washing-machine-repair`,
    locale: 'en'
  });
}

export default function WashingMachineRepairPage({ params }: { params: { locale: 'en'|'ar' } }) {
  const isArabic = params.locale === 'ar';

  const imgPrefix = getCDNImage(`main-service-washing-machine-repair`, 'Appliance Repair');

  return (
    <div className={`bg-slate-50 min-h-screen ${isArabic ? 'dir-rtl text-right font-arabic' : ''}`}>
      <section className="bg-secondary text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm font-bold tracking-widest text-[#00E5FF] uppercase mb-2 block">
            {isArabic ? 'صيانة الأجهزة الكهروميكانيكية المتطورة' : 'Appliance Electromechanical Services'}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-4 leading-tight">
             {isArabic ? `مهندسو تصليح الغسالات المعتمدون في البحرين` : `Trusted Washing Machine Diagnostics in Bahrain`}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
             {isArabic ? 
               `الغسالة التي لا تصرف الماء أو تصدر ضجيجاً عالياً عند العصر هي ليست صدفة بل عطل ميكانيكي بحت. مهندسونا المعتمدون يصلحون مضخات تصريف المياه، الموتور، ورمان البلي (البيرنق) في المنازل في كافة مدن البحرين.` : 
               `A washing machine that refuses to drain or sounds like a jet engine during the spin cycle is suffering from severe mechanical wear. Our engineers arrive with OEM drain pumps and tub bearings to restore perfect operation onsite.`
             }
          </p>
          <WhatsAppButton text={isArabic ? 'احصل على تسعيرة تصليح الغسالة بالواتساب' : 'Diagnose Your Washing Machine Fault on WhatsApp'} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative h-[500px] rounded-2xl overflow-hidden glass-panel group shadow-xl">
           <Image src={imgPrefix} alt="Testing drain pump and motor on washing machine" fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform duration-700" />
           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
             <div className="flex gap-2 mb-2">
               <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">Front Load</span>
               <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">Top Load</span>
               <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">Fully Automatic</span>
             </div>
             <p className="text-white text-sm opacity-90">{isArabic ? 'خبرة وتدريب عالي في المحركات المباشرة (Direct Drive)' : 'Highly trained in Direct Drive Motor Architecture'}</p>
           </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              {isArabic ? `جدول تشخيص أعطال الغسالات الآلية (اتوماتيك)` : `Washing Machine Fault Diagnosis & Cost Breakdown`}
            </h2>
            <div className={`prose prose-lg text-slate-600 ${isArabic ? 'max-w-none text-right' : ''}`}>
              <p className="leading-relaxed mb-6 font-medium">
                {isArabic ? 
                  `عندما تتوقف الغسالة عن الدوران، فغالباً اللوحة الأم السليمة أرسلت أمراً بحفظ السلامة لوجود انسداد أو تلف ميكانيكي. التشخيص الدقيق للبيرنق والمضخات هو كل شيء.` : 
                  `When a washer stops spinning, the PC board is usually restricting operation for safety due to a mechanical blockage. Accurate meter testing of drain pumps and motors is everything.`
                }
              </p>
              
              <div className="overflow-x-auto rounded-xl shadow-sm border border-slate-200 hide-scrollbar mt-6 mb-8">
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs text-white uppercase bg-slate-800">
                      <tr>
                          <th className="px-6 py-4 rounded-tl-xl">{isArabic ? 'الشكل التقريبي للعطل' : 'Technical Symptom'}</th>
                          <th className="px-6 py-4">{isArabic ? 'الحل الهندسي الميكانيكي' : 'Diagnostic Action'}</th>
                          <th className="px-6 py-4 rounded-tr-xl">{isArabic ? 'تكلفة الإصلاح الفنية' : 'Hardware Cost'}</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="bg-white border-b hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-slate-900 border-r border-slate-100">{isArabic ? 'الغسالة مليئة بالماء، تغسل بشكل طبيعي، ولكنها لا تقوم بتصريف المياه لبدأ العصر' : 'Drum is full of water; completes wash cycle but refuses to drain to start the spin'}</td>
                          <td className="px-6 py-4">{isArabic ? 'احتراق مضخة التصريف (Drain Pump) أو انسداد عنيف بسبب العملات أو الأوساخ. يتم فكه واستبداله.' : 'Failed Drain Pump motor or severe blockage from coins/debris. Requires pump replacement.'}</td>
                          <td className="px-6 py-4 font-mono text-primary font-bold">12 - 25 BHD</td>
                      </tr>
                      <tr className="bg-slate-50 border-b hover:bg-slate-100 transition-colors">
                          <td className="px-6 py-4 font-semibold text-slate-900 border-r border-slate-100">{isArabic ? 'صوت احتكاك أو طنين يشبه الطائرة أثناء مرحلة عصر الملابس بقوة' : 'Loud grinding or heavy roaring noise specifically during high-speed spin cycle'}</td>
                          <td className="px-6 py-4">{isArabic ? 'تلف البلي (الرولمان بيلينج - Bearings). يجب تفكيك الحوض كامل لاستخراجه بالكبس الميكانيكي.' : 'Shattered tub bearings. Requires complete dis-assembly of the tub and hydraulic pressing of new bearings.'}</td>
                          <td className="px-6 py-4 font-mono text-primary font-bold">25 - 45 BHD</td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-slate-900 border-r border-slate-100">{isArabic ? 'تسريب مياه ملحوظ من أسفل الغسالة أثناء التعبئة أو الغسيل' : 'Visible water pooling underneath the washer during fill or wash agitation'}</td>
                          <td className="px-6 py-4">{isArabic ? 'قطع في الرابر الأمامي (الجلدة) أو ثقب بخرطوم التصريف. يتم التبديل المباشر.' : 'Torn front door gasket (rubber seal) or cracked internal rubber hose. Requires part replacement.'}</td>
                          <td className="px-6 py-4 font-mono text-primary font-bold">15 - 28 BHD</td>
                      </tr>
                  </tbody>
                </table>
              </div>

               <p><strong>{isArabic ? 'لماذا تتفوق خدماتنا الميدانية:' : 'Why we excel in field repairs:'}</strong></p>
               <ul className={`mt-4 text-slate-700 space-y-3 font-medium list-none`}>
                 <li className="flex items-center gap-2">✓ {isArabic ? 'الفحص يتم بجهاز كهربائي دقيق (Multimeter) وليس بالتخمين العشوائي.' : 'We use sensitive OhmMeter readings to condemn parts, not blind guessing.'}</li>
                 <li className="flex items-center gap-2">✓ {isArabic ? 'نوفر قطع غيار مطابقة للمواصفات المصنعية (OEM) لغسالات إل جي وباناسونيك وسامسونج وغيرها.' : 'We rapidly source OEM matched pumps and belts to ensure factory-level integrity.'}</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Location Matrix */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
             {isArabic ? `فريق المهندسين متواجد لحل أعطال الغسالات في المقاطعات التالية:` : `Appliance Engineers are currently routed through these areas:`}
           </h2>
           <div className="flex flex-wrap justify-center gap-3">
             {cities.map(city => {
               const citySlug = city.toLowerCase().replace(/ /g, '-');
               return (
                 <a 
                   key={citySlug} 
                   href={`/${params.locale}/${citySlug}/washing-machine-repair`}
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
