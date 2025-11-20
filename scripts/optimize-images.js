const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Configuration
const CONFIG = {
  quality: {
    webp: 80,
    jpeg: 75,
  },
  maxWidth: 1920,
  hero: {
    maxWidth: 1920,
    quality: 75,
  },
  portfolio: {
    maxWidth: 1200,
    quality: 80,
  },
  mockup: {
    maxWidth: 1400,
    quality: 80,
  },
};

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const { maxWidth = 1920, quality = 80, format = 'webp' } = options;

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`📸 Processing: ${path.basename(inputPath)}`);
    console.log(`   Original: ${metadata.format} | ${metadata.width}x${metadata.height} | ${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)}MB`);

    // Resize if needed
    if (metadata.width > maxWidth) {
      image.resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
    }

    // Convert and optimize
    if (format === 'webp') {
      await image.webp({ quality }).toFile(outputPath);
    } else if (format === 'jpeg') {
      await image.jpeg({ quality, progressive: true }).toFile(outputPath);
    }

    const outputSize = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
    const savings = ((1 - outputSize / (fs.statSync(inputPath).size / 1024 / 1024)) * 100).toFixed(1);

    console.log(`   ✅ Optimized: ${format.toUpperCase()} | ${outputSize}MB | Saved ${savings}%\n`);

    return { success: true, originalSize: fs.statSync(inputPath).size, newSize: fs.statSync(outputPath).size };
  } catch (error) {
    console.error(`   ❌ Error processing ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function optimizeHeroImage() {
  console.log('\n🎨 OPTIMIZING HERO IMAGE\n' + '='.repeat(50));

  const heroPath = path.join(PUBLIC_DIR, 'Hero img.jpg');
  if (!fs.existsSync(heroPath)) {
    console.log('⚠️  Hero img.jpg not found');
    return;
  }

  // Create WebP version
  await optimizeImage(
    heroPath,
    path.join(PUBLIC_DIR, 'hero-optimized.webp'),
    { maxWidth: CONFIG.hero.maxWidth, quality: CONFIG.hero.quality, format: 'webp' }
  );

  // Create optimized JPEG fallback
  await optimizeImage(
    heroPath,
    path.join(PUBLIC_DIR, 'hero-optimized.jpg'),
    { maxWidth: CONFIG.hero.maxWidth, quality: CONFIG.hero.quality, format: 'jpeg' }
  );
}

async function optimizePortfolioImages() {
  console.log('\n🖼️  OPTIMIZING PORTFOLIO IMAGES\n' + '='.repeat(50));

  const portfolioDir = path.join(PUBLIC_DIR, 'portfolio-images');
  if (!fs.existsSync(portfolioDir)) {
    console.log('⚠️  portfolio-images directory not found');
    return;
  }

  const files = fs.readdirSync(portfolioDir);
  const pngFiles = files.filter(f => f.endsWith('.png'));

  for (const file of pngFiles) {
    const inputPath = path.join(portfolioDir, file);
    const baseName = path.parse(file).name;
    const outputPath = path.join(portfolioDir, `${baseName}.webp`);

    await optimizeImage(inputPath, outputPath, {
      maxWidth: CONFIG.portfolio.maxWidth,
      quality: CONFIG.portfolio.quality,
      format: 'webp',
    });
  }
}

async function optimizeCaseStudyMockups() {
  console.log('\n📱 OPTIMIZING CASE STUDY MOCKUPS\n' + '='.repeat(50));

  const casesDir = path.join(PUBLIC_DIR, 'images', 'cases');
  if (!fs.existsSync(casesDir)) {
    console.log('⚠️  images/cases directory not found');
    return;
  }

  const files = fs.readdirSync(casesDir);
  const pngFiles = files.filter(f => f.endsWith('.png'));

  for (const file of pngFiles) {
    const inputPath = path.join(casesDir, file);
    const baseName = path.parse(file).name;
    const outputPath = path.join(casesDir, `${baseName}.webp`);

    await optimizeImage(inputPath, outputPath, {
      maxWidth: CONFIG.mockup.maxWidth,
      quality: CONFIG.mockup.quality,
      format: 'webp',
    });
  }
}

async function generateReport(results) {
  const totalOriginal = results.reduce((sum, r) => sum + (r.originalSize || 0), 0);
  const totalNew = results.reduce((sum, r) => sum + (r.newSize || 0), 0);
  const savings = ((1 - totalNew / totalOriginal) * 100).toFixed(1);

  console.log('\n📊 OPTIMIZATION SUMMARY\n' + '='.repeat(50));
  console.log(`Total Original Size: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total Optimized Size: ${(totalNew / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total Savings: ${savings}% (${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)}MB)`);
  console.log(`\n✅ Optimization complete!`);
}

async function main() {
  console.log('\n🚀 TRANSPARO IMAGE OPTIMIZATION TOOL\n' + '='.repeat(50));

  const results = [];

  await optimizeHeroImage();
  await optimizePortfolioImages();
  await optimizeCaseStudyMockups();

  console.log('\n✨ All images optimized!');
  console.log('\n📝 NEXT STEPS:');
  console.log('1. Review the optimized images');
  console.log('2. Update image references in components to use .webp versions');
  console.log('3. Delete original PNG files after confirming quality');
  console.log('4. Test the website to ensure all images load correctly\n');
}

main().catch(console.error);
