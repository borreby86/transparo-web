const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const inputDir = path.join(__dirname, '../public/portfolio-images')

const images = [
  { name: 'Sundhed.webp', key: 'sundhed' },
  { name: 'WalterAI-Fodbold.webp', key: 'walterAI' },
  { name: 'Flotte-Foder.webp', key: 'flotteFoedder' },
  { name: 'Photograph.webp', key: 'photograph' },
  { name: 'Hest.webp', key: 'hest' },
  { name: 'Revy.webp', key: 'revy' },
]

async function generateBlurPlaceholders() {
  console.log('Generating blur placeholders...\n')

  const placeholders = {}

  for (const image of images) {
    const inputPath = path.join(inputDir, image.name)

    try {
      const { data, info } = await sharp(inputPath)
        .resize(20, 20, { fit: 'inside' })
        .blur(1)
        .toBuffer({ resolveWithObject: true })

      const base64 = `data:image/webp;base64,${data.toString('base64')}`
      placeholders[image.key] = base64

      console.log(`✓ ${image.name} -> ${image.key}`)
    } catch (error) {
      console.error(`✗ Error processing ${image.name}:`, error.message)
    }
  }

  // Generate TypeScript file
  const tsContent = `// Auto-generated blur placeholders for optimized image loading
// Generated on ${new Date().toISOString()}

export const blurDataURLs = ${JSON.stringify(placeholders, null, 2)} as const
`

  const outputPath = path.join(__dirname, '../data/blurPlaceholders.ts')
  fs.writeFileSync(outputPath, tsContent)

  console.log(`\n✅ Generated data/blurPlaceholders.ts with ${Object.keys(placeholders).length} placeholders`)
}

generateBlurPlaceholders()
