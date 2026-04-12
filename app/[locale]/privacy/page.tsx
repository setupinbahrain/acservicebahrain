import { constructMetadata } from '../../../utils/seoMatrix';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';

export const metadata = constructMetadata({
  title: 'Privacy Policy | AC Service Bahrain',
  description: 'Privacy Policy outlining data handling for AC Service Bahrain under PDPL compliance.',
  urlPath: '/privacy',
});

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  const isArabic = params.locale === 'ar';
  
  return (
    <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">{isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}</h1>
      <div className="prose prose-lg text-slate-600">
        <p>AC Service Bahrain is committed to processing your personal data strictly for booking and maintaining your HVAC services.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">Data Collection</h2>
        <p>We primarily collect data through secure WhatsApp communication (phone number, address, unit photos) solely for resolving AC breakdowns.</p>
        <h2 className="text-xl font-bold mt-6 mb-2">Third Parties</h2>
        <p>Your details are never sold or shared with any unassociated third parties. Data is only accessible to technicians dispatched to you.</p>
      </div>
      <FloatingWhatsApp />
    </div>
  );
}
