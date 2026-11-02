// Klipper fremhævede sektioner ud af helside-skærmbillederne (til case-siderne).
// Kør efter capture-screens. y/h er i pixels af det lange billede (desktop = 1440 css-px × 1.5).
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'

const CROPS = {
  'eskild-ebbesen': [
    { name: 'hero', y: 0, h: 1630 },
    { name: 'ydelser', y: 1640, h: 1610 },
    { name: 'filosofi', y: 5865, h: 940 },
    { name: 'troverdighed', y: 6800, h: 1560 },
  ],
  significanz: [
    { name: 'hero', y: 0, h: 1173 },
    { name: 'fokusomraader', y: 1173, h: 1047 },
    { name: 'dna', y: 2220, h: 1461 },
    { name: 'netvaerk', y: 3681, h: 1401 },
  ],
  'christina-borreby': [
    { name: 'hero', y: 0, h: 1173 },
    { name: 'veje-ind', y: 1173, h: 1962 },
    { name: 'hvorfor-heste', y: 3135, h: 1143 },
    { name: 'udtalelser', y: 4278, h: 980 },
  ],
  'kasha-hansen': [
    { name: 'hero', y: 0, h: 1825 },
    { name: 'tre-veje', y: 3265, h: 1877 },
    { name: 'paradigmeskift', y: 7044, h: 1260 },
    { name: 'klienter', y: 8303, h: 1428 },
  ],
  'autentisk-indflydelse': [
    { name: 'hero', y: 0, h: 1461 },
    { name: 'konceptet', y: 1461, h: 1703 },
    { name: 'malgrupper', y: 3164, h: 1616 },
    { name: 'hvorfor-heste', y: 5571, h: 1845 },
  ],
}

for (const [slug, crops] of Object.entries(CROPS)) {
  const src = `public/portfolio-images/screens/full/${slug}-desktop.webp`
  const { width } = await sharp(src).metadata()
  for (const c of crops) {
    mkdirSync(`public/portfolio-images/cases/${slug}`, { recursive: true })
    const out = `public/portfolio-images/cases/${slug}/${c.name}.webp`
    await sharp(src).extract({ left: 0, top: c.y, width, height: c.h }).webp({ quality: 86 }).toFile(out)
    console.log('✓', out)
  }
}
