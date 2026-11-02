// Henter live-skærmbilleder af cases til device-mockups.
// Kør: node scripts/capture-screens.mjs [slug ...]
// Kræver Google Chrome (macOS) + puppeteer-core + sharp.
//
// Output pr. case (public/portfolio-images/screens/):
//   {slug}-desktop.webp   forside, første skærm        (bruges i bagte mockups)
//   {slug}-tablet.webp    UNDERSIDE, første skærm
//   {slug}-mobile.webp    forside, første skærm (+ statusbar-zone til dynamic island)
//   full/{slug}-{desktop|tablet|mobile}.webp   hele siden (bruges til scroll-ved-hover)
//   data/screenManifest.json   mål (css-px) på de lange billeder
import puppeteer from 'puppeteer-core'
import sharp from 'sharp'
import path from 'node:path'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'

const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const OUT = path.resolve('public/portfolio-images/screens')
const FULL = path.join(OUT, 'full')
mkdirSync(FULL, { recursive: true })

// slug -> { home, sub }. Tilføj nye cases her.
const SITES = {
  'eskild-ebbesen': { home: 'https://www.eskildebbesen.dk', sub: 'https://www.eskildebbesen.dk/foredrag' },
  significanz: { home: 'https://www.significanz.dk', sub: 'https://www.significanz.dk/about' },
  // focus: hvilket udsnit der bruges som første skærm i mockup (ellers toppen). { text, offset } = scroll til tekst, { y } = css-px
  'christina-borreby': {
    home: 'https://www.christinaborreby.dk',
    sub: 'https://www.christinaborreby.dk/lederudvikling-nordsjaelland',
    focus: { desktop: { text: 'Din facilitator', offset: 60 }, mobile: { text: 'Din facilitator', offset: 320 } },
  },
  'kasha-hansen': {
    home: 'https://kasha-website-nextjs.vercel.app/',
    sub: 'https://kasha-website-nextjs.vercel.app/om-kasha',
    focus: { desktop: { y: 240 }, tablet: { y: 200 }, mobile: { text: 'Velkommen', offset: 60 } },
  },
  'autentisk-indflydelse': { home: 'https://www.autentiskindflydelse.dk', sub: 'https://www.autentiskindflydelse.dk/ledergrupper' },
  'mind-balance-system': { home: 'https://mbs-executive.vercel.app/', sub: 'https://mbs-executive.vercel.app/methodology' },
}

// Viewports matcher proportionerne på skærmene i "portfolio mockup.png"
const DEVICES = {
  desktop: { page: 'home', vp: { width: 1440, height: 782, deviceScaleFactor: 1.5 } },
  tablet: { page: 'sub', vp: { width: 1180, height: 925, deviceScaleFactor: 1.25, hasTouch: true } },
  mobile: { page: 'home', vp: { width: 390, height: 805, deviceScaleFactor: 1.5, isMobile: true, hasTouch: true } },
}
const STATUS_BAR = 56 // css-px zone øverst på mobil (ligger bag dynamic island)
const MAX_PX = 15000 // maks pixelhøjde på de lange billeder

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const only = process.argv.slice(2)
const manifestPath = path.resolve('data/screenManifest.json')
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : {}

async function clean(page) {
  // Cookie-bannere
  await page.evaluate(() => {
    const re = /^(kun nødvendige|only necessary|afvis|decline|reject|accepter|accept|ok|tillad)/i
    for (const b of document.querySelectorAll('button, a[role=button]')) {
      if (re.test((b.textContent || '').trim())) { b.click(); break }
    }
  })
  await sleep(600)
  await page.evaluate(() => {
    // Marquee/uendelige animationer → stå på første ord
    document.querySelectorAll('[class*="marquee"]').forEach((el) => el.style.setProperty('animation', 'none', 'important'))
    // Fixed overlays (cookie, chat, flydende knapper) væk – men behold selve headeren
    for (const el of document.querySelectorAll('body *')) {
      const cs = getComputedStyle(el)
      if (cs.position !== 'fixed') continue
      const r = el.getBoundingClientRect()
      const isHeader = r.top <= 1 && r.width > innerWidth * 0.8 && r.height < 140
      if (!isHeader) el.style.setProperty('display', 'none', 'important')
    }
  })
}

async function withStatusBar(buf, scale) {
  const { data } = await sharp(buf).resize(1, 1, { fit: 'cover', position: 'top' }).raw().toBuffer({ resolveWithObject: true })
  return sharp(buf).extend({ top: Math.round(STATUS_BAR * scale), background: { r: data[0], g: data[1], b: data[2], alpha: 1 } })
}

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, protocolTimeout: 300000 })

for (const [slug, urls] of Object.entries(SITES)) {
  if (only.length && !only.includes(slug)) continue
  manifest[slug] ||= {}
  for (const [dev, cfg] of Object.entries(DEVICES)) {
    if (process.env.ONLY_DEVICE && process.env.ONLY_DEVICE !== dev) continue
    if (process.env.SKIP_EXISTING && manifest[slug][dev] && existsSync(path.join(FULL, `${slug}-${dev}.webp`))) { console.log('↷', slug, dev); continue }
    const page = await browser.newPage()
    const scale = cfg.vp.deviceScaleFactor
    try {
      await page.setViewport(cfg.vp)
      await page.goto(urls[cfg.page], { waitUntil: 'networkidle2', timeout: 60000 })
      await sleep(1500)
      await clean(page)
      await sleep(3500) // intro-animationer
      await clean(page) // overlays kan dukke op forsinket
      await sleep(400)

      // 1) Første skærm (evt. et bestemt udsnit af siden)
      const f = urls.focus?.[dev]
      if (f) {
        await page.evaluate((f) => {
          document.documentElement.style.scrollBehavior = 'auto'
          if (f.y !== undefined) return scrollTo(0, f.y)
          const el = [...document.querySelectorAll('h1,h2,h3,span,p,div')].find(
            (e) => e.children.length < 3 && e.textContent.trim().toUpperCase().startsWith(f.text.toUpperCase()),
          )
          if (el) scrollTo(0, el.getBoundingClientRect().top + scrollY - (f.offset ?? 0))
        }, f)
        await sleep(2500)
        await clean(page)
      }
      let first = sharp(await page.screenshot({ type: 'png' }))
      if (dev === 'mobile') first = await withStatusBar(await first.png().toBuffer(), scale)
      await first.webp({ quality: 90 }).toFile(path.join(OUT, `${slug}-${dev}.webp`))

      // 2) Hele siden: scroll igennem så lazy-load og scroll-reveals udløses
      await page.evaluate(async () => {
        document.documentElement.style.scrollBehavior = 'auto'
        const step = Math.round(innerHeight * 0.6)
        for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
          scrollTo(0, y); await new Promise((r) => setTimeout(r, 280))
        }
        scrollTo(0, document.documentElement.scrollHeight); await new Promise((r) => setTimeout(r, 600))
        await Promise.all([...document.images].map((i) => (i.complete ? 1 : new Promise((r) => { i.onload = i.onerror = r; setTimeout(r, 2500) }))))
        scrollTo(0, 0); await new Promise((r) => setTimeout(r, 1200))
      })
      await clean(page)
      await sleep(800)
      const cssH = await page.evaluate(() => document.documentElement.scrollHeight)
      const h = Math.min(cssH, Math.floor(MAX_PX / scale))
      let full = sharp(await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: cfg.vp.width, height: h }, captureBeyondViewport: true }))
      let outH = h
      if (dev === 'mobile') { full = await withStatusBar(await full.png().toBuffer(), scale); outH += STATUS_BAR }
      await full.webp({ quality: 82, effort: 5 }).toFile(path.join(FULL, `${slug}-${dev}.webp`))
      manifest[slug][dev] = { w: cfg.vp.width, h: outH }
      writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
      console.log('✓', slug, dev, `${cfg.vp.width}×${outH}`)
    } catch (e) {
      console.error('✗', slug, dev, e.message)
    } finally {
      await page.close()
    }
  }
}
await browser.close()
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
