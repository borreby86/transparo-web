import Image from 'next/image'

/**
 * Viser en case på iMac + iPad + iPhone som ét færdigbagt billede.
 * Billedet genereres med: node scripts/capture-screens.mjs && node scripts/build-mockups.mjs
 * → /public/portfolio-images/mockups/{slug}.webp  (1536×1024)
 */
// Fader billedets kanter ud, så der ikke ses en kant mod baggrunden
const FEATHER =
  'linear-gradient(to right, transparent, #000 7%, #000 93%, transparent), linear-gradient(to bottom, transparent, #000 9%, #000 91%, transparent)'

interface Props {
  slug: string
  title: string
  priority?: boolean
}

export function DeviceShowcase({ slug, title, priority }: Props) {
  return (
    <Image
      src={`/portfolio-images/mockups/${slug}.webp`}
      alt={`${title} – vist på computer, tablet og mobil`}
      width={1536}
      height={1024}
      quality={90}
      priority={priority}
      className="w-full h-auto"
      style={{ WebkitMaskImage: FEATHER, maskImage: FEATHER, WebkitMaskComposite: 'source-in', maskComposite: 'intersect' }}
      sizes="(max-width: 768px) 100vw, 700px"
    />
  )
}
