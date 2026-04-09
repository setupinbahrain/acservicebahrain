import type { Metadata } from 'next';
import Image from 'next/image';
import '../globals.css';
import { services } from '../../data/services';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { translationMatrix } from '../../data/dictionary';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export async function generateMetadata({ params }: { params: { locale: 'en' | 'ar' } }): Promise<Metadata> {
  const isArabic = params.locale === 'ar';
  if (isArabic) {
    return {
      title: 'صيانة مكيفات البحرين | خبراء التكييف المركزي والدكت',
      description: 'أفضل خدمات صيانة التكييف المعتمدة في البحرين. فحص احترافي، تصليح مكيفات مركزية، وتصنيع دكت متكامل. اتصل بنا للحصول على فحص ميكانيكي دقيق.',
    };
  }
  return {
    title: 'AC Service Bahrain | World-Class HVAC, AC & Ducting Specialists',
    description: 'Premium HVAC, AC repair, ducting, and commercial maintenance services across Bahrain. World-class diagnostics exactly when you need them.',
  };
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
        {/* World-Class Premium Header */}
        <header className="bg-secondary text-white sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
            
            {/* Logo */}
            <a href={`/${params.locale}/`} className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <div className="relative w-12 h-12">
                 <Image src="/images/logo.webp" alt="AC Service Bahrain Logo" fill style={{ objectFit: 'contain' }} />
              </div>
              <div className={`text-2xl font-extrabold tracking-tight ${isArabic ? 'text-right' : ''}`}>
                 {isArabic ? (
                    <>صيانة التكييف <span className="text-primary font-medium">البحرين</span></>
                 ) : (
                    <>AC Service <span className="text-primary font-medium">Bahrain</span></>
                 )}
              </div>
            </a>

            {/* Premium Navigation Logic */}
            <nav className={`hidden md:flex font-medium items-center ${isArabic ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
              <a href={`/${params.locale}/`} className="px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">{dictionary.home}</a>
              
              {/* Dropdown 1: Core Services */}
              <div className="relative group px-1 py-4">
                <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-white">
                  {dictionary.services}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down opacity-50 group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <div className={`absolute top-14 ${isArabic ? 'right-0' : 'left-0'} w-64 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 overflow-hidden z-50`}>
                   <div className="p-2 space-y-1">
                      <a href={`/${params.locale}/services/air-conditioning-repair`} className={`block px-4 py-3 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium ${isArabic ? 'text-right' : ''}`}>{isArabic ? 'تصليح مكيفات سبليت' : 'Split AC Repair'}</a>
                      <a href={`/${params.locale}/services/fridge-repair`} className={`block px-4 py-3 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium ${isArabic ? 'text-right' : ''}`}>{isArabic ? 'تصليح ثلاجات وفريزرات' : 'Fridge & Freezers'}</a>
                      <a href={`/${params.locale}/services/washing-machine-repair`} className={`block px-4 py-3 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium ${isArabic ? 'text-right' : ''}`}>{isArabic ? 'تصليح غسالات' : 'Washing Machines'}</a>
                      <a href={`/${params.locale}/services/hvac-repair`} className={`block px-4 py-3 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium ${isArabic ? 'text-right' : ''}`}>{isArabic ? 'صيانة تكييف تجاري' : 'Commercial HVAC'}</a>
                      <a href={`/${params.locale}/services/ducted-ac`} className={`block px-4 py-3 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium ${isArabic ? 'text-right' : ''}`}>{isArabic ? 'مكيفات مركزية ووحدات دكت' : 'Central & Ducted AC'}</a>
                   </div>
                   <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
                     <a href={`/${params.locale}/#services-grid`} className="text-primary font-bold text-sm hover:underline">{isArabic ? 'عرض جميع خدمات الصيانة الـ 28' : 'View All 28 Services'} &rarr;</a>
                   </div>
                </div>
              </div>

              {/* Dropdown 2: Coverage Areas */}
              <div className="relative group px-1 py-4">
                <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-white">
                  {dictionary.locations}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down opacity-50 group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <div className={`absolute top-14 ${isArabic ? '-right-32' : '-left-32'} w-[600px] bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 overflow-hidden z-50 p-6`}>
                   <h4 className={`text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 ${isArabic ? 'text-right' : ''}`}>{isArabic ? 'اختر منطقتك لعرض الخدمات الهندسية المتوفرة' : 'Select A District To See Local Services'}</h4>
                   <div className="grid grid-cols-3 gap-2">
                      {[ 
                        {en: "Manama", ar: "المنامة"}, {en: "Riffa", ar: "الرفاع"}, {en: "Muharraq", ar: "المحرق"}, 
                        {en: "Seef", ar: "السيف"}, {en: "Juffair", ar: "الجفير"}, {en: "Saar", ar: "سار"}, 
                        {en: "Amwaj Islands", ar: "جزر أمواج"}, {en: "Hamad Town", ar: "مدينة حمد"}, {en: "Isa Town", ar: "مدينة عيسى"} 
                      ].map(city => (
                        <a key={city.en} href={`/${params.locale}/areas/${city.en.toLowerCase().replace(/ /g, '-')}`} className={`block px-3 py-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium text-sm ${isArabic ? 'text-right' : ''}`}>
                          {isArabic ? city.ar : city.en}
                        </a>
                      ))}
                   </div>
                   <div className="mt-6 text-center">
                     <a href={`/${params.locale}/#areas-grid`} className="text-primary font-bold text-sm bg-slate-50 py-2 px-6 rounded-full hover:bg-primary hover:text-white transition-colors">{isArabic ? 'تصفح تغطيتنا لجميع مناطق البحرين الـ 64' : 'See all 64 Areas coverage'}</a>
                   </div>
                </div>
              </div>

              <a href={`/${params.locale}/guides`} className="px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">{dictionary.guides}</a>
              <a href={`/${params.locale}/cost`} className={`px-6 py-2 bg-primary/20 text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors border border-primary/50 ${isArabic ? 'mr-2' : 'ml-2'}`}>{dictionary.pricing}</a>
              
              <LanguageSwitcher />
            </nav>
          </div>
        </header>

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
                href="https://wa.me/97333522205" 
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
