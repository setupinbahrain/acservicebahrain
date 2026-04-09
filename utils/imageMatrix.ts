// ----------------------------------------------------
// PHASE 11: PROCEDURAL DYNAMIC COMPOSITOR ROUTER
// ----------------------------------------------------
// Based on the strict absolute requirement that NO IMAGE duplicates anywhere
// across the 1,885 matrix URLs, we pipe all rendering logic into the Satori
// Next.js Edge Generation endpoint.

export function getCDNImage(seedString: string, category: string = 'HVAC Infrastructure'): string {
  
  // Extracting logical parameters safely to feed the Compositor API
  // `seedString` format: `seo-manama-fridge-repair`
  
  let cityStr = 'Bahrain';
  let serviceStr = 'HVAC Operations';

  if (seedString.includes('seo-')) {
     const parts = seedString.split('-');
     // Parts: ['seo', 'manama', 'fridge', 'repair']
     cityStr = parts[1] || 'Bahrain';
     serviceStr = parts.slice(2).join(' ') || 'Service Repair';
  } else if (seedString.includes('hero-home')) {
     cityStr = "Kingdom of Bahrain";
     serviceStr = "Appliance & MEP Network Core";
  } else if (seedString.includes('main-hub-')) {
     cityStr = seedString.replace('main-hub-', '');
     serviceStr = "Diagnostic Infrastructure";
  } else if (seedString.includes('main-service-')) {
     cityStr = "Bahrain";
     serviceStr = seedString.replace('main-service-', '').replace(/-/g, ' ');
  } else {
     // Clean up fallback grids
     if (seedString.includes('-')) {
         cityStr = seedString.split('-')[0];
         serviceStr = seedString.split('-')[1];
     }
  }

  // Capitalize format safely
  const formatText = (txt: string) => txt.replace(/\b\w/g, c => c.toUpperCase());
  
  // Assemble the exact API Route that compositors an absolute unique binary Graphic
  return `/api/dynamic-image?city=${encodeURIComponent(formatText(cityStr))}&service=${encodeURIComponent(formatText(serviceStr))}&category=${encodeURIComponent(category)}`;
}
