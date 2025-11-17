const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const inputDir = path.join(__dirname, '../public/portfolio-images')
const outputDir = inputDir // Same directory

const images = [
  'Flotte-Foder.png',
  'Hest.png',
  'Photograph.png',
  'Revy.png',
  'Sundhed.png',
  'WalterAI-Fodbold.png',
]

async function convertImages() {
  console.log('Converting images to WebP...\n')

  for (const image of images) {
    const inputPath = path.join(inputDir, image)
    const outputPath = path.join(outputDir, image.replace('.png', '.webp'))

    try {
      const metadata = await sharp(inputPath).metadata()
      console.log(`Converting ${image}:`)
      console.log(`  Original: ${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)} MB`)

      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath)

      const newSize = fs.statSync(outputPath).size
      const reduction = ((1 - newSize / fs.statSync(inputPath).size) * 100).toFixed(1)

      console.log(`  WebP: ${(newSize / 1024 / 1024).toFixed(2)} MB`)
      console.log(`  Reduction: ${reduction}%\n`)
    } catch (error) {
      console.error(`Error converting ${image}:`, error.message)
    }
  }

  console.log('✅ Conversion complete!')
}

convertImages()
