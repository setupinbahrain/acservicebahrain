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
             <div className={`flex flex-wrap gap-4 ${isArabic ? 'md:space-x-reverse md:space-x-4 flex-row-reverse' : 'md:space-x-4'}`}>
                <a href={`/${params.locale}/about`} className="hover:text-white transition-colors">{isArabic ? 'عن الشركة' : 'About Us'}</a>
                <a href={`/${params.locale}/terms`} className="hover:text-white transition-colors">{isArabic ? 'شروط وضوابط الفحص' : 'Terms of Diagnostic Service'}</a>
                <a href={`/${params.locale}/privacy`} className="hover:text-white transition-colors">{isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
                <a href={`/${params.locale}/guides`} className="hover:text-white transition-colors">{isArabic ? 'مركز المعلومات الهندسي' : 'Knowledge Base'}</a>
             </div>
          </div>
        </footer>
        <FloatingWhatsApp />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "AC Service Bahrain",
                "legalName": "M SAEED WORKSHOP W.L.L",
                "identifier": "CR-136016-1",
                "url": "https://acservicebahrain.com",
                "telephone": "+97334468625",
                "email": "info@acservicebahrain.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "BH",
                  "addressLocality": "Manama",
                  "addressRegion": "Capital Governorate"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Bahrain"
                },
                "openingHoursSpecification": [{
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Saturday","Sunday"],
                  "opens": "08:00",
                  "closes": "20:00"
                }],
                "sameAs": ["https://wa.link/acservicebahrain"],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "HVAC & Appliance Repair Services",
                  "numberOfItems": 28
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Air Conditioning Repair in Bahrain",
                "description": "Professional AC repair service covering all 64 districts of Bahrain. Certified engineers, OEM parts, transparent WhatsApp quotes.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "AC Service Bahrain"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Bahrain"
                },
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "BHD",
                  "priceRange": "15-280",
                  "availability": "https://schema.org/InStock"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much does AC repair cost in Bahrain?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "AC repair costs in Bahrain range from BHD 8 for a simple capacitor replacement to BHD 280+ for a full compressor replacement. Gas top-ups typically cost BHD 15–35 depending on the volume required. We provide an exact quote via WhatsApp before any work begins."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer same-day AC repair in Bahrain?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We offer same-day AC repair across all 64 districts of Bahrain, 7 days a week. Message us on WhatsApp with your location and fault description for the fastest dispatch."
                    }
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://acservicebahrain.com/en"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://acservicebahrain.com/en/guides"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Air Conditioning Repair",
                    "item": "https://acservicebahrain.com/en/services/air-conditioning-repair"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "AC Service Bahrain",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "bestRating": "5",
                  "worstRating": "1",
                  "ratingCount": 47
                },
                "review": [{
                  "@type": "Review",
                  "author": {"@type": "Person", "name": "Ahmed Al-Dosari"},
                  "reviewRating": {"@type": "Rating", "ratingValue": "5"},
                  "reviewBody": "AC compressor replaced in Seef. Same-day service, genuine LG parts. Very professional team."
                }]
              }
            ])
          }}
        />
      </body>
    </html>
  );
}
