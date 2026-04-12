import React from 'react';
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import WhatsAppButton from '../../../components/WhatsAppButton';
import { Metadata } from 'next';
import { constructMetadata } from '../../../utils/seoMatrix';

export function generateMetadata({ params }: { params: { locale: 'en'|'ar' } }): Metadata {
  const isArabic = params.locale === 'ar';
  
  if (isArabic) {
     return constructMetadata({
       title: 'دليل أسعار صيانة وتشخيص التكييف في البحرين | تسعير شفاف',
       description: 'اكتشف كيف نقوم بتسعير تقارير فحص التكييف الميكانيكي، تصنيع الدكت المركزي، وقطع التكييف بأسلوب فردي شفاف عبر الواتساب.',
       urlPath: '/ar/cost',
       locale: 'ar'
     });
  }

  return constructMetadata({
    title: 'HVAC & AC Repair Costs in Bahrain | Transparent Pricing',
    description: 'Understand exactly how we quote HVAC repairs, MEP ducting work, and commercial Central AC components case-by-case over WhatsApp.',
    urlPath: '/en/cost',
    locale: 'en'
  });
}

export default function CostPage({ params }: { params: { locale: 'en'|'ar' } }) {
  const isArabic = params.locale === 'ar';

  return (
    <div className={`max-w-4xl mx-auto px-4 py-24 min-h-screen ${isArabic ? 'dir-rtl text-right font-arabic' : ''}`}>
      <h1 className={`text-4xl font-extrabold text-slate-900 mb-8 border-primary ${isArabic ? 'border-r-4 pr-6' : 'border-l-4 pl-6'}`}>
        {isArabic ? 'آلية عمل التسعير الهندسي الشفاف' : 'Transparent Cost Mechanics'}
      </h1>
      
      <div className="prose prose-lg text-slate-700 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 max-w-none">
        <p className="lead text-xl font-medium text-slate-600 mb-8 leading-relaxed">
          {isArabic ? 
            'قطاع صيانة التكييف التجاري والأجهزة في البحرين يعاني من عشوائية التسعير. نحن لا نعتمد "التسعيرة الموحدة" السطحية والمخادعة. جميع الأعمال تسعّر بناءً على فحص فعلي وحالة فيزيائية حقيقية، لا يوجد تلاعب.' : 
            'The Appliance and HVAC repair industry in Bahrain is fundamentally broken by "flat-rate" scams. At AC Service Bahrain, we do not bait-and-switch. We quote exactly what is needed, case by case.'
          }
        </p>
        
        <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">
          {isArabic ? 'لماذا نلتزم بالتسعير وتقديم الاستشارات مباشرة عبر الواتساب؟' : 'Why We Quote exclusively via WhatsApp'}
        </h3>
        <p className="leading-relaxed">
          {isArabic ? 
            'لا يوجد احتراقان متطابقان للكمبريسر. إذا كان مكيفك المركزي لا يبرد، قد يكون العطل تسريباً معقداً أو ببساطة احتراق بورد إلكتروني بسيط. من خلال استلامنا لمعلوماتك والصور الأولية عبر حسابنا في الواتساب، يستطيع كبار مهندسينا تقدير حجم التكلفة المبدئي بدقة متناهية قبل أن نتحرك إلى موقعك.' : 
            'No two compressor failures are identical. If your VRF system isn\'t cooling, the issue could be a completely shattered expansion valve (an expensive mechanical fix) or simply a failed thermostat node (a rapid electrical fix). By analyzing your specific fault description, error codes, and multimedia files securely on WhatsApp, our senior technicians can accurately estimate the diagnostic range before we even start the van.'
          }
        </p>

        <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">
          {isArabic ? 'تكاليف إصلاح التكييف في البحرين — أسعار واقعية بالدينار البحريني' : 'AC & HVAC Repair Costs in Bahrain — Honest BHD Price Ranges'}
        </h3>
        <p className="leading-relaxed mb-6">
          {isArabic ? 
            'الأسعار أدناه هي تقديرات مبدئية للإصلاحات الأكثر شيوعاً التي نقوم بها. التكلفة الدقيقة الخاصة بك تأكد دائماً عبر الواتساب قبل بدء العمل.' : 
            'Below are realistic price ranges for the most common repairs we perform across Bahrain. These are starting-point estimates — the exact cost for your specific unit is always confirmed via WhatsApp before any work begins.'
          }
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-slate-200">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="py-3 px-4 text-left font-bold">{isArabic ? 'نوع الخدمة' : 'Service Type'}</th>
                <th className="py-3 px-4 text-left font-bold">{isArabic ? 'متوسط السعر (BHD)' : 'Typical Range (BHD)'}</th>
                <th className="py-3 px-4 text-left font-bold">{isArabic ? 'عوامل التكلفة' : 'Key Variables'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600 border-b border-slate-200">
              <tr><td className="py-2 px-4 font-bold text-slate-800">AC Gas Top-Up (R-410A)</td><td className="py-2 px-4 font-bold text-primary">15 – 35</td><td className="py-2 px-4 text-sm">Volume of gas required</td></tr>
              <tr><td className="py-2 px-4 font-bold text-slate-800">Run Capacitor Replacement</td><td className="py-2 px-4 font-bold text-primary">8 – 22</td><td className="py-2 px-4 text-sm">Brand and capacitor spec</td></tr>
              <tr><td className="py-2 px-4 font-bold text-slate-800">PCB / Control Board</td><td className="py-2 px-4 font-bold text-primary">35 – 95</td><td className="py-2 px-4 text-sm">Brand, OEM vs aftermarket</td></tr>
              <tr><td className="py-2 px-4 font-bold text-slate-800">Compressor Replacement</td><td className="py-2 px-4 font-bold text-primary">90 – 280</td><td className="py-2 px-4 text-sm">Tonnage, brand, part availability</td></tr>
              <tr><td className="py-2 px-4 font-bold text-slate-800">Annual AC Service (per unit)</td><td className="py-2 px-4 font-bold text-primary">20 – 45</td><td className="py-2 px-4 text-sm">Unit size and condition</td></tr>
              <tr><td className="py-2 px-4 font-bold text-slate-800">Fridge Sealed System Repair</td><td className="py-2 px-4 font-bold text-primary">25 – 80</td><td className="py-2 px-4 text-sm">Fault type, brand</td></tr>
              <tr><td className="py-2 px-4 font-bold text-slate-800">Washing Machine Drum Bearing</td><td className="py-2 px-4 font-bold text-primary">30 – 65</td><td className="py-2 px-4 text-sm">Access complexity, brand</td></tr>
              <tr><td className="py-2 px-4 font-bold text-slate-800">VRF System Diagnostic</td><td className="py-2 px-4 font-bold text-primary">45 – 120</td><td className="py-2 px-4 text-sm">System tonnage, fault complexity</td></tr>
            </tbody>
          </table>
        </div>

         <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-10">
            <h4 className="font-bold text-lg mb-2 text-slate-900">
               {isArabic ? 'احصل على العطاء الشامل الخاص بأسعار الصيانة' : 'Get Your Exact Assessment Instantly'}
            </h4>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
               {isArabic ? 'التقط صورة لملصق البيانات الخاص بوحدتك التالفة، قم بتسجيل فيديو قصير يوضح المشكلة (مثل تسريب مياه أو ضوضاء مزعجة)، وشاركنا إياها عبر الواتساب للحصول على تفصيل دقيق للتكلفة.' : 'Snap a photo of the unit\'s brand tag, take a short video of the symptom (e.g. leaking water, strange noise), and drop us a WhatsApp for an exact quote.'}
            </p>
            <WhatsAppButton text={isArabic ? 'اطلب تسعيرة شفافة لا تلزمك بشيء' : 'Request Transparent Quotation'} />
         </div>
      </div>
    </div>
  );
}
