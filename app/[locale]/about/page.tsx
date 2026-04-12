import { constructMetadata } from '../../../utils/seoMatrix';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';

export const metadata = constructMetadata({
  title: 'About Us | AC Service Bahrain',
  description: 'Learn about AC Service Bahrain. We are a registered HVAC workshop (CR 136016-1) providing certified diagnostic and repair operations across all 64 districts.',
  urlPath: '/about',
});

export default function AboutPage({ params }: { params: { locale: string } }) {
  const isArabic = params.locale === 'ar';
  
  return (
    <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">{isArabic ? 'معلومات عنا' : 'About AC Service Bahrain'}</h1>
      
      <div className="prose prose-lg text-slate-600 mb-12">
        <p>AC Service Bahrain is a technically advanced AC & HVAC repair network. We deploy certified HVAC engineers across all 64 districts in Bahrain, ensuring top-tier diagnostic services, transparent quotes, and unmatched repair quality.</p>
        
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Our Trust Signals</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>CR 136016-1:</strong> Registered Workshop (M SAEED WORKSHOP W.L.L)</li>
          <li><strong>30-Day Guarantee:</strong> A structured workmanship guarantee on all repairs.</li>
          <li><strong>64 Districts Covered:</strong> Fast response across all of Bahrain.</li>
          <li><strong>OEM Only:</strong> Genuine parts used for all major AC brands including Daikin, LG, Samsung, Carrier, and Hitachi.</li>
        </ul>
      </div>

      <FloatingWhatsApp />
    </div>
  );
}
