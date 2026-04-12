import { constructMetadata } from '../../../utils/seoMatrix';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';

export const metadata = constructMetadata({
  title: 'Terms of Diagnostic Service | AC Service Bahrain',
  description: 'Terms and conditions for AC and HVAC repair and diagnostic services provided by AC Service Bahrain.',
  urlPath: '/terms',
});

export default function TermsPage({ params }: { params: { locale: string } }) {
  const isArabic = params.locale === 'ar';
  
  return (
    <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">{isArabic ? 'شروط الخدمة' : 'Terms of Diagnostic Service'}</h1>
      <div className="prose prose-lg text-slate-600">
        <p>By booking a diagnostic service with AC Service Bahrain, you agree to the following terms regarding scheduling, parts usage, and payment.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">1. Quotes and Diagnoses</h2>
        <p>All exact costs must be approved by the customer before our engineers begin any repair process. A preliminary quote is provided via WhatsApp but is subject to physical diagnostic evaluation.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">2. Warranty</h2>
        <p>We supply a 30-day workmanship guarantee on our repairs. If the exact same part fails again through no external fault, it will be addressed at no cost.</p>
      </div>
      <FloatingWhatsApp />
    </div>
  );
}
