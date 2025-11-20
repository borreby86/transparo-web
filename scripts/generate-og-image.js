const sharp = require('sharp');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

async function generateOGImage() {
  try {
    console.log('\n🎨 GENERATING OG IMAGE\n' + '='.repeat(50));

    // Create a simple OG image with text overlay
    // Using the optimized hero image as a base
    const heroPath = path.join(PUBLIC_DIR, 'hero-optimized.jpg');
    const ogOutputPath = path.join(PUBLIC_DIR, 'og-image.jpg');

    // Create 1200x630 OG image from hero
    await sharp(heroPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center',
      })
      .jpeg({ quality: 85 })
      .toFile(ogOutputPath);

    console.log('✅ Generated og-image.jpg (1200x630)');

    // Create Twitter card image (same dimensions)
    const twitterOutputPath = path.join(PUBLIC_DIR, 'twitter-image.jpg');
    await sharp(heroPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center',
      })
      .jpeg({ quality: 85 })
      .toFile(twitterOutputPath);

    console.log('✅ Generated twitter-image.jpg (1200x630)');

    // Create apple-touch-icon from hero (180x180)
    const appleTouchPath = path.join(PUBLIC_DIR, 'apple-touch-icon.png');
    await sharp(heroPath)
      .resize(180, 180, {
        fit: 'cover',
        position: 'center',
      })
      .png()
      .toFile(appleTouchPath);

    console.log('✅ Generated apple-touch-icon.png (180x180)');

    // Create favicon-32x32
    const favicon32Path = path.join(PUBLIC_DIR, 'favicon-32x32.png');
    await sharp(heroPath)
      .resize(32, 32, {
        fit: 'cover',
        position: 'center',
      })
      .png()
      .toFile(favicon32Path);

    console.log('✅ Generated favicon-32x32.png');

    // Create favicon-16x16
    const favicon16Path = path.join(PUBLIC_DIR, 'favicon-16x16.png');
    await sharp(heroPath)
      .resize(16, 16, {
        fit: 'cover',
        position: 'center',
      })
      .png()
      .toFile(favicon16Path);

    console.log('✅ Generated favicon-16x16.png');

    // Create logo.png for schema (512x512)
    const logoPath = path.join(PUBLIC_DIR, 'logo.png');
    await sharp(heroPath)
      .resize(512, 512, {
        fit: 'cover',
        position: 'center',
      })
      .png()
      .toFile(logoPath);

    console.log('✅ Generated logo.png (512x512) for schema.org');

    console.log('\n📊 SUMMARY\n' + '='.repeat(50));
    console.log('✅ All meta images generated successfully!');
    console.log('\n📝 FILES CREATED:');
    console.log('  - og-image.jpg (1200x630) - Open Graph');
    console.log('  - twitter-image.jpg (1200x630) - Twitter Card');
    console.log('  - apple-touch-icon.png (180x180) - iOS');
    console.log('  - favicon-32x32.png - Desktop browsers');
    console.log('  - favicon-16x16.png - Desktop browsers');
    console.log('  - logo.png (512x512) - Schema.org');

    console.log('\n⚠️  NOTE: For a proper favicon.ico, use an online converter');
    console.log('   or design tool to convert favicon-32x32.png to .ico format');

  } catch (error) {
    console.error('❌ Error generating images:', error.message);
  }
}

generateOGImage().catch(console.error);
