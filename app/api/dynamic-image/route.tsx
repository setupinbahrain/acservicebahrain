import { ImageResponse } from 'next/og';

export const runtime = 'edge'; // Enables supreme high-performance Next.js rendering

export async function GET(request: Request) {
  try {
    const { searchParams, origin } = new URL(request.url);
    const city = searchParams.get('city') || 'Bahrain';
    const service = searchParams.get('service') || 'MEP Engineering';
    const category = searchParams.get('category') || 'HVAC';

    // Route deeply to the correct physical AI asset background
    let filename = 'hvac-tech.png';
    const lowerCategory = category.toLowerCase();
    const lowerService = service.toLowerCase();

    if (lowerCategory.includes('appliance')) {
        filename = (lowerService.includes('wash') || lowerService.includes('dry')) ? 'appliance-washer.png' : 'appliance-fridge.png';
    } else if (lowerCategory.includes('commercial') || lowerCategory.includes('central') || lowerCategory.includes('gcc')) {
        filename = 'commercial-chiller.png';
    } else if (lowerCategory.includes('duct') || lowerCategory.includes('ventilation')) {
        filename = (lowerService.includes('ventilation') || lowerService.includes('exhaust')) ? 'ventilation.png' : 'ducting.png';
    } else if (lowerService.includes('hub') || lowerService.includes('network')) {
        filename = 'hero-hub.png';
    }

    const imageUrl = `${origin}/images/AI/${filename}`;

    return new ImageResponse(
      (
        <div style={{
            display: 'flex', width: '100%', height: '100%', backgroundColor: '#0f172a',
            position: 'relative'
        }}>
          {/* Base AI Graphic strictly rendered underneath */}
          <img src={imageUrl} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
          
          {/* High-End Technical Overlay Grid */}
          <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              display: 'flex', flexDirection: 'column', 
              background: 'linear-gradient(to bottom right, rgba(15, 23, 42, 0.9), rgba(2, 6, 23, 0.2))',
              padding: 80,
              justifyContent: 'flex-end'
          }}>
             {/* Engineering Readout Top */}
             <div style={{ position: 'absolute', top: 40, left: 80, display: 'flex', gap: 40, color: 'rgba(255,255,255,0.4)', fontSize: 24, fontWeight: 'bold' }}>
                <span style={{ letterSpacing: '0.1em' }}>SYS: ONLINE</span>
                <span style={{ letterSpacing: '0.1em' }}>GRID: STABILIZED</span>
                <span style={{ letterSpacing: '0.1em' }}>T.LOAD: OPTIMAL</span>
             </div>

              {/* Category Matrix UI Bar */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
                  <div style={{ width: 20, height: 20, background: '#38bdf8', marginRight: 16 }}></div>
                  <span style={{ fontSize: 32, letterSpacing: '0.2em', color: '#38bdf8', textTransform: 'uppercase', fontWeight: 800 }}>
                    {category} // DIAGNOSTIC MATRIX
                  </span>
              </div>
              
              {/* Bespoke Dynamic Service Text strictly stamping uniqueness */}
              <h1 style={{
                  fontSize: 90, fontWeight: 900, color: 'white', lineHeight: 1.1, margin: '0 0 32px 0', textTransform: 'uppercase', maxWidth: '85%'
              }}>
                 {service}
              </h1>

              {/* Bespoke City Stamping Overlay Engine */}
              <div style={{ display: 'flex' }}>
                 <div style={{ display: 'flex', background: 'white', padding: '16px 40px', alignItems: 'center' }}>
                     <span style={{ fontSize: 36, fontWeight: 900, color: 'black', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                         DISPATCH SECTOR: {city}
                     </span>
                 </div>
              </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    // Failsafe rendering if edge architecture breaks locally
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
