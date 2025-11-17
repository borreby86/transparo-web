import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Transparo - Professionel Webudvikling Danmark'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A1628',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            transparo
          </h1>
          <p
            style={{
              fontSize: 40,
              color: '#D4AF37',
              marginTop: 0,
            }}
          >
            Unique designs • Built on trust
          </p>
          <p
            style={{
              fontSize: 28,
              color: '#ffffff',
              opacity: 0.8,
              marginTop: 40,
            }}
          >
            Professionel Webudvikling Danmark
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
