import type { Metadata } from 'next';
import Image from 'next/image';
import '../globals.css';
import { services } from '../../data/services';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { translationMatrix } from '../../data/dictionary';
import Header from '../../components/Header';
import { constructMetadata } from '../../utils/seoMatrix';

export async function generateMetadata({ params }: { params: { locale: 'en' | 'ar' } }): Promise<Metadata> {
  const isArabic = params.locale === 'ar';
  if (isArabic) {
    return constructMetadata({
      title: 'صيانة مكيفات البحرين | خبراء التكييف المركزي والدكت',
      description: 'أفضل خدمات صيانة التكييف المعتمدة في البحرين. فحص احترافي، تصليح مكيفات مركزية، وتصنيع دكت متكامل. اتصل بنا للحصول على فحص ميكانيكي دقيق.',
      urlPath: '/ar',
      locale: 'ar'
    });
  }
  return constructMetadata({
    title: 'AC Service Bahrain | World-Class HVAC, AC & Ducting Specialists',
    description: 'Premium HVAC, AC repair, ducting, and commercial maintenance services across Bahrain. World-class diagnostics exactly when you need them.',
    urlPath: '/en',
    locale: 'en'
  });
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: 'en' | 'ar' };
}) {
  const dictionary = translationMatrix[params.locale] || translationMatrix['en'];
  const isArabic = params.locale === 'ar';

  return (
    <html lang={params.locale} dir={dictionary.dir}>
      <body className={`flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans ${isArabic ? 'font-arabic' : ''}`}>
        <Header locale={params.locale} />

        <main className="flex-grow">
          {children}
        </main>

        {/* Enhanced World-Class Footer */}
        <footer className="bg-secondary text-white pt-20 pb-10 border-t-[8px] border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                 <div className="relative w-10 h-10 bg-white rounded-lg p-1">
                   <Image src="/images/logo.webp" alt="AC Service Bahrain Brand Logo" fill style={{ objectFit: 'contain' }} />
                 </div>
                 <div className="text-xl font-extrabold tracking-tight">{isArabic ? 'صيانة التكييف' : 'AC Service'} <span className="text-primary">BH</span></div>
              </div>
              <p className={`text-sm text-slate-400 leading-relaxed mb-6 ${isArabic ? 'text-right' : ''}`}>
                {dictionary.footer_desc}
              </p>
              <div className={`flex items-center gap-4 text-slate-400 ${isArabic ? 'justify-start flex-row-reverse w-full' : ''}`}>
                <span className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-green-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg> 
                  {dictionary.verified}
                </span>
              </div>
            </div>

            <div className={`${isArabic ? 'text-right' : ''}`}>
              <h3 className="text-lg font-bold text-white mb-6">{isArabic ? 'الفحص الهندسي المتخصص' : 'Deep Diagnostics'}</h3>
              <ul className={`space-y-3 text-sm text-slate-400 flex flex-col ${isArabic ? 'items-end' : 'items-start'}`}>
                <li><a href={`/${params.locale}/services/vrf-vrv-system`} className="hover:text-primary transition-colors">{isArabic ? 'شبكات التكييف المركزي VRF/VRV' : 'VRF/VRV Central Networks'}</a></li>
                <li><a href={`/${params.locale}/services/hvac-ducting-contractor`} className="hover:text-primary transition-colors">{isArabic ? 'تصنيع وفحص مجاري الهواء (الدكت)' : 'Duct Fabrication & Check'}</a></li>
                <li><a href={`/${params.locale}/services/fridge-repair`} className="hover:text-primary transition-colors">{isArabic ? 'أنظمة التبريد المغلقة (الثلاجات)' : 'Sealed System Refrigerators'}</a></li>
                <li><a href={`/${params.locale}/services/washing-machine-repair`} className="hover:text-primary transition-colors">{isArabic ? 'ميكانيكا المحركات (الغسالات)' : 'Laundry Bearings & Motors'}</a></li>
              </ul>
            </div>

            <div className={`${isArabic ? 'text-right' : ''}`}>
              <h3 className="text-lg font-bold text-white mb-6">{isArabic ? 'التغطية الميدانية الرئيسية' : 'Primary Dispatches'}</h3>
              <ul className={`space-y-3 text-sm text-slate-400 flex flex-col ${isArabic ? 'items-end' : 'items-start'}`}>
                <li><a href={`/${params.locale}/areas/manama`} className="hover:text-primary transition-colors">{isArabic ? 'فرقة عمليات المنامة' : 'Manama Operations'}</a></li>
                <li><a href={`/${params.locale}/areas/riffa`} className="hover:text-primary transition-colors">{isArabic ? 'فرقة عمليات الرفاع' : 'Riffa Operations'}</a></li>
                <li><a href={`/${params.locale}/areas/seef`} className="hover:text-primary transition-colors">{isArabic ? 'عناصر الدعم في السيف' : 'Seef Operations'}</a></li>
                <li><a href={`/${params.locale}/areas/amwaj-islands`} className="hover:text-primary transition-colors">{isArabic ? 'تغطية جزر أمواج المركزية' : 'Amwaj Islands Network'}</a></li>
              </ul>
            </div>

            <div className={`${isArabic ? 'text-right' : ''}`}>
              <h3 className="text-lg font-bold text-white mb-6">{isArabic ? 'ضماننا وضوابط التكلفة الشفافة' : 'Our Transparent Guarantee'}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">{isArabic ? 'نحن لا نعتمد التخمين. جميع التكاليف تُعرض بشفافية تامة وتُبنى على معايير هندسية فيزيائية واضحة قبل البدء بأي عمل.' : 'We never proceed with arbitrary repairs. All costs are presented transparently based strictly on live engineering facts before the toolbelt opens.'}</p>
              <a 
                href="https://wa.link/acservicebahrain" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`bg-primary/10 text-primary px-6 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-colors border border-primary flex items-center justify-center gap-2 w-full ${isArabic ? 'flex-row-reverse' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                {isArabic ? 'افتح الواتساب للحجز المباشر' : 'Launch WhatsApp'}
              </a>
            </div>
            
          </div>
          
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-medium ${isArabic ? 'md:flex-row-reverse' : ''}`}>
             <div className="mb-4 md:mb-0">
               <div className="mb-1">&copy; {new Date().getFullYear()} {isArabic ? 'مجموعة خدمات تكييف البحرين. بنية هندسية احترافية.' : 'AC Service Bahrain. A Premier Service Framework.'}</div>
               <div className="text-slate-600 text-[11px]">{isArabic ? 'رقم السجل التجاري: 136016-1 (ورشة ام سعيد ذ.م.م)' : 'Commercial Registration: 136016-1 (M SAEED WORKSHOP W.L.L)'}</div>
             </div>
             <div className={`flex ${isArabic ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
                <a href="#" className="hover:text-white transition-colors">{isArabic ? 'شروط وضوابط الفحص' : 'Terms of Diagnostic Service'}</a>
                <a href="#" className="hover:text-white transition-colors">{isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
                <a href={`/${params.locale}/guides`} className="hover:text-white transition-colors">{isArabic ? 'مركز المعلومات الهندسي' : 'Knowledge Base'}</a>
             </div>
          </div>
        </footer>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
