import React from 'react';
import WhatsAppButton from '../../../components/WhatsAppButton';
import { services } from '../../../data/services';
import { arabicServices } from '../../../data/dictionary';
import { Metadata } from 'next';

export function generateMetadata({ params }: { params: { locale: 'en'|'ar' } }): Metadata {
  const isArabic = params.locale === 'ar';
  
  if (isArabic) {
     return {
       title: 'أدلة الفحص الهندسي: صيانة التكييف المركزي والدكت',
       description: 'مصادر هندسية وتقارير فحص للتعامل مع أعطال الكمبريسر، وحدات التكييف المائي، والمكيفات المركزية في البحرين.',
     };
  }

  return {
    title: 'Diagnostic Guides: HVAC, Central AC & Ducting Troubleshooting',
    description: 'Self-help technical resources and diagnostic configurations for major VRF, Compressor, and MEP Central Cooling failures in Bahrain.',
  };
}

export default function GuidesPage({ params }: { params: { locale: 'en'|'ar' } }) {
  const isArabic = params.locale === 'ar';

  return (
    <div className={`bg-slate-50 py-24 min-h-screen ${isArabic ? 'dir-rtl text-right font-arabic' : ''}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 text-center">
          {isArabic ? 'العمليات الميكانيكية: أدلة وتقارير صيانة التكييف' : 'Technical Operations: HVAC Guides & Troubleshooting'}
        </h1>
        <p className="text-xl text-slate-500 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          {isArabic ? 
            'نحن نؤمن بأهمية توعية عملائنا فنياً. تجد أدناه الفهرس الإرشادي الكامل لأنظمة الميكانيكا ومصطلحات التكييف الدقيقة التي نتعامل معها يومياً في العقارات السكنية أو المشاريع التجارية الكبرى.' : 
            'We strictly believe in educating our clients. Below is the full syllabus of subsystems and specific HVAC terminology we specialize across residential and high-tier MEP scopes.'
          }
        </p>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
                <h2 className={`text-2xl font-bold bg-secondary text-white py-3 px-6 rounded-t-xl ${isArabic ? 'text-right' : ''}`}>
                  {isArabic ? 'كافة الاختصاصات الفنية المتوفرة' : 'All Targeted Competencies'}
                </h2>
                <div className={`bg-white p-6 rounded-b-xl shadow-sm border border-slate-200 border-t-0 grid grid-cols-1 sm:grid-cols-2 gap-4 ${isArabic ? 'text-right' : ''}`}>
                    {services.map(service => (
                       <a key={service.slug} href={`/${params.locale}/services/${service.slug}`} className={`text-primary hover:text-sky-600 font-medium text-sm flex items-center gap-2 ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
                          <span className="w-2 h-2 rounded-full bg-primary block"></span>
                          {isArabic ? arabicServices[service.slug] || service.name : service.name}
                       </a>
                    ))}
                </div>
            </div>

            <div>
                <div className={`bg-white p-6 rounded-xl shadow-md border border-slate-100 sticky top-24 ${isArabic ? 'text-right' : ''}`}>
                    <h3 className="font-bold text-xl mb-4 border-b border-slate-100 pb-2">
                      {isArabic ? 'التدخل السريع والتعامل مع الطوارئ' : 'Emergency Fault Resolution'}
                    </h3>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                        {isArabic ? 
                          'قبل التدخل أو العبث باللوحات الرئيسية للتكييف المركزي أو أنظمة التبريد المغلقة، تأكد أولاً من فصل التيار الكهربائي الرئيسي. فحص أعطال الكمبريسر الميكانيكية يتطلب معدات احترافية معيارية معتمدة.' : 
                          'Before attempting any mechanical adjustments to high-static ducting, central AC mainboards, or sealed refrigerant systems, cut the breaker. Diagnosing a shattered compressor requires certified equipment.'
                        }
                    </p>
                    <WhatsAppButton text={isArabic ? 'استدعاء فرقة الفحص الميكانيكي فوراً' : 'Immediate Tech Dispatch'} fullWidth />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
