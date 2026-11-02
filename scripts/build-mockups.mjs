// Bager færdige device-mockups: skærmbilleder sat præcist ind i "portfolio mockup.png".
// Kør: node scripts/build-mockups.mjs   (efter node scripts/capture-screens.mjs)
// Output: public/portfolio-images/mockups/{slug}.webp
import sharp from 'sharp'
import path from 'node:path'
import { existsSync } from 'node:fs'

const W = 1536, H = 1024
const SCREENS = {
  desktop: { x: 387, y: 106, w: 918, h: 498 },
  tablet: { x: 111, y: 469, w: 508, h: 398 },
  mobile: { x: 1240, y: 468, w: 196, h: 433 },
}
const PAD = 8 // billedet går ind under rammen, så maskekanten aldrig viser tomrum
const SHOTS = 'public/portfolio-images/screens'

// slug -> fallback (bruges på alle skærme når der ikke er live-skærmbilleder)
const CASES = {
  'eskild-ebbesen': null,
  significanz: null,
  'christina-borreby': null,
  'kasha-hansen': null,
  'autentisk-indflydelse': null,
}

const base = await sharp('scripts/assets/frame-base.png').toBuffer()
const masks = {}
for (const dev of Object.keys(SCREENS)) {
  masks[dev] = await sharp(`scripts/assets/hole-mask-${dev}.png`).greyscale().raw().toBuffer()
}

for (const [slug, fallback] of Object.entries(CASES)) {
  const overlays = []
  for (const [dev, s] of Object.entries(SCREENS)) {
    const live = path.join(SHOTS, `${slug}-${dev}.webp`)
    const src = !fallback && existsSync(live) ? live : fallback
    if (!src) throw new Error(`Mangler skærmbillede for ${slug}/${dev}`)
    const shot = await sharp(src).resize(s.w + PAD * 2, s.h + PAD * 2, { fit: 'cover', position: 'top' }).toBuffer()
    const rgb = await sharp({ create: { width: W, height: H, channels: 3, background: '#0e0e0e' } })
      .composite([{ input: shot, left: s.x - PAD, top: s.y - PAD }]).removeAlpha().raw().toBuffer()
    // Hver enhed har sin egen maske → billedet vises kun inde i dens egen skærm
    const out = Buffer.alloc(W * H * 4)
    for (let i = 0; i < W * H; i++) {
      out[i * 4] = rgb[i * 3]; out[i * 4 + 1] = rgb[i * 3 + 1]; out[i * 4 + 2] = rgb[i * 3 + 2]; out[i * 4 + 3] = masks[dev][i]
    }
    overlays.push({ input: await sharp(out, { raw: { width: W, height: H, channels: 4 } }).png().toBuffer() })
  }
  await sharp(base).composite(overlays).webp({ quality: 93, effort: 6 })
    .toFile(`public/portfolio-images/mockups/${slug}.webp`)
  console.log('✓', slug)
}
