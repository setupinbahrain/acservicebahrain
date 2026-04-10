import React from 'react';
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
          {isArabic ? 'ما هي العوامل الهندسية التي تحدد التكلفة النهائية؟' : 'What Influences the Final Repair Bill?'}
        </h3>
        <ul className={`space-y-3 mb-8 text-slate-700 list-none ${isArabic ? 'pr-0' : ''}`}>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">{isArabic ? '•' : '•'}</span>
            <span>
              <strong>{isArabic ? 'نوع القطع وأصالتها (التجاري مقارنةً بالوكيل):' : 'Component Economics (OEM vs Aftermarket):'}</strong> {isArabic ? 'يختلف تركيب كمبريسر تكييف أصلي بضمان الشركة المصنعة عن استخدام قطع تجارية رخيصة لخفض التكلفة ظاهرياً.' : 'Installing a genuine LG compressor matrix costs differently than utilizing generic high-efficiency run capacitors.'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">{isArabic ? '•' : '•'}</span>
            <span>
               <strong>{isArabic ? 'فيزياء التبريد ونوع الفريون:' : 'Refrigerant Thermodynamics:'}</strong> {isArabic ? 'غاز الفريون عالي الجودة المخصص لبعض مكيفات الانفرتر حساس في سعره. نحن نقوم بتعبئته بدقة وحسابه بالجرام لضمان الوصول لمرحلة التبريد المطلوبة دون زيادة أو نقصان.' : 'High-grade R-410A gas required for split AC units fluctuates in market price. We charge exactly by the volumetric pound required to achieve perfect sub-cooling balancing.'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">{isArabic ? '•' : '•'}</span>
            <span>
               <strong>{isArabic ? 'هندسة مسارات التهوية (الدكت):' : 'Ducting and Fabrication Overhead:'}</strong> {isArabic ? 'أي تعديل في مجاري الدكت المركزي يتطلب استخدام حديد مجلفن وعوازل كثيفة تتغير أسعارها بناءً على المورد المحلي المعتمد وتكلفة المواد الهيكلية.' : 'Modifications requiring custom sheet metal duct fabrication (MEP scope) carry strict structural material costs.'}
            </span>
          </li>
        </ul>

         <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-10">
            <h4 className="font-bold text-lg mb-2 text-slate-900">
               {isArabic ? 'احصل على العرض الشامل الخاص بأسعار الصيانة' : 'Get Your Exact Assessment Instantly'}
            </h4>
            <p className="mb-4 text-sm text-slate-600 leading-relaxed">
               {isArabic ? 'التقط صورة لملصق البيانات الخاص بوحدتك التالفة، قم بتسجيل فيديو قصير يوضح المشكلة (مثل تسريب مياه أو ضوضاء مزعجة)، وشاركنا إياها مع موقعك للحصول على عرض مباشر.' : 'Snap a photo of the unit\'s brand tag, take a short video of the symptom (e.g. leaking water, strange noise), and drop us a pin of your location.'}
            </p>
            <WhatsAppButton text={isArabic ? 'اطلب معاينة وتقرير فحص هندسي' : 'Request Transparent Quotation'} />
         </div>
      </div>
    </div>
  );
}
