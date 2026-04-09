import React from 'react';

export default function ProceduralFAQ({ serviceName, cityName }: { serviceName: string, cityName: string }) {
  const faqData = [
    {
      q: `How fast can a certified ${serviceName} technician arrive in ${cityName}?`,
      a: `Our localized dispatch network allows us to reach anomalies in ${cityName} rapidly. For catastrophic failures, we prioritize emergency ${serviceName} route-mapping instantly.`
    },
    {
      q: `What dictates the exact cost of ${serviceName} in ${cityName}?`,
      a: `Financial envelopes are strictly tied to real-time structural load degradation and OEM part availability. We do not run blind quotes; we provide transparent ${serviceName} telemetry data.`
    },
    {
      q: `Do you service commercial and centralized units requiring ${serviceName}?`,
      a: `Absolutely. We operate across strict GCC thermodynamic MEP parameters, executing deep sub-cooling and inverter fault analysis regardless of commercial tonnage.`
    },
    {
      q: `Are your ${serviceName} engineers certified to handle Daikin, LG, and Carrier?`,
      a: `Yes, we maintain native hardware decoding capabilities for leading OEM manufacturers deployed across the ${cityName} district.`
    },
    {
      q: `How does the specific environment in ${cityName} affect my need for ${serviceName}?`,
      a: `The high ambient heat and salinity unique to ${cityName} rapidly degrades unprotected mechanical systems. Regular ${serviceName} prevents fatal locked-rotor failure.`
    },
    {
      q: `Do you utilize authentic OEM parts for ${serviceName}?`,
      a: `Strictly. We utilize authentic imported components to ensure your system's operational integrity is firmly maintained.`
    },
    {
      q: `Is there a reliable guarantee applied to your ${serviceName}?`,
      a: `Yes, we back our ${serviceName} deployments with strict engineering guarantees based on precise sub-system recalibration.`
    },
    {
      q: `How much downtime is expected during a standard ${serviceName}?`,
      a: `Downtime varies based on the physical extraction complexity, but our ${cityName} field engineers execute operations efficiently without cutting procedural corners.`
    },
    {
      q: `Can I request an emergency ${serviceName} dispatch via WhatsApp?`,
      a: `Yes. Simply select your failure parameters manually on our Diagnostic Calculator and route the encrypted envelope directly to our WhatsApp node.`
    },
    {
      q: `Does ${serviceName} involve deep refrigerant cycle diagnostics?`,
      a: `If the symptom dictates a thermodynamic failure, our ${serviceName} protocols automatically trigger rigorous superheat and sub-cooling analysis.`
    },
    {
      q: `How often should preventative ${serviceName} occur in ${cityName}?`,
      a: `Due to the harsh atmospheric variables in ${cityName}, operational baselines mandate thorough preventative checks biannually.`
    },
    {
      q: `What if my machinery throws a specific sub-system error code?`,
      a: `Provide the exact error code during your ${serviceName} WhatsApp assessment. Our engineers will cross-reference the exact OEM fault tree prior to dispatch.`
    },
    {
      q: `Are thermal load calculations involved in ${serviceName}?`,
      a: `Yes, matching kinetic load inputs is the core principle of a highly functional ${serviceName} deployment in ${cityName}.`
    },
    {
      q: `Do you check airflow statics during ${serviceName}?`,
      a: `Imbalanced airflow is the primary cause of frozen evaporator matrices. Static pressure balancing is integral to all mechanical checks.`
    },
    {
      q: `How is the power grid in ${cityName} impacting my system?`,
      a: `Inconsistent phase power destroys inverters. Part of our ${serviceName} encompasses Megger testing system stators to confirm electrical phase symmetry.`
    },
    {
      q: `Can improper ${serviceName} damage my compressor?`,
      a: `Yes. Inaccurate ${serviceName} applied by amateur technicians directly alters the thermal compression envelope, culminating in irreversible locked rotors.`
    },
    {
      q: `Do you resolve condensate drainage issues along with ${serviceName}?`,
      a: `Hydrostatic failures and bio-film obstructions are immediately purged as a standardized sub-task during your primary ${serviceName}.`
    },
    {
      q: `Is ${serviceName} possible on outdated or legacy machinery in ${cityName}?`,
      a: `We execute diagnostic retrofitting and engineering workarounds for legacy systems strictly when verified as structurally viable.`
    },
    {
      q: `Are toxic chemicals utilized during ${serviceName}?`,
      a: `We strictly utilize non-corrosive, EPA-compliant and chemically stable flushing agents during our internal mechanical clearing procedures.`
    },
    {
      q: `Why is ${serviceName} critical for minimizing long-term financial loss?`,
      a: `Bypassing ${serviceName} inherently forces surrounding sub-systems to operate under extreme compensatory loads, cascading damage exponentially across the hardware.`
    }
  ];

  // Schema generation
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="w-full my-16">
      {/* Invisible JSON-LD Schema explicitly ensuring Rank Math 100/100 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <h2 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight border-b-2 border-slate-100 pb-4">
        20 Vital Technical Inquiries Regarding {serviceName} in {cityName}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {faqData.map((faq, idx) => (
           <details key={idx} className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm open:bg-slate-50 transition-colors">
              <summary className="font-bold text-sm md:text-base text-slate-800 p-5 cursor-pointer list-none flex justify-between items-center group-open:text-primary transition-colors">
                 <span>{faq.q}</span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-open:-rotate-180 transition-transform flex-shrink-0 ml-4"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="px-5 pb-5 text-sm md:text-base text-slate-600 border-t border-slate-100 mt-2 pt-4">
                 {faq.a}
              </div>
           </details>
        ))}
      </div>
    </div>
  );
}
