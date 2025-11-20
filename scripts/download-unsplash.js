const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const UNSPLASH_DIR = path.join(PUBLIC_DIR, 'images', 'unsplash');

// Create directory if it doesn't exist
if (!fs.existsSync(UNSPLASH_DIR)) {
  fs.mkdirSync(UNSPLASH_DIR, { recursive: true });
}

const unsplashImages = [
  // WhyUsSection
  { url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80', name: 'why-us-1' },
  { url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80', name: 'why-us-2' },
  { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', name: 'why-us-3' },
  { url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80', name: 'why-us-4' },

  // TeamSection
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', name: 'team-1' },
  { url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80', name: 'team-2' },
  { url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80', name: 'team-3' },
  { url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80', name: 'team-4' },

  // CaseStudySection
  { url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop', name: 'case-1' },
  { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop', name: 'case-2' },

  // Proces page
  { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', name: 'proces-1' },
  { url: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?w=800&q=80', name: 'proces-2' },
  { url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80', name: 'proces-3' },
  { url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', name: 'proces-4' },
  { url: 'https://images.unsplash.com/photo-1576444356170-66073046b1bc?w=800&q=80', name: 'proces-5' },
  { url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80', name: 'proces-6' },

  // PackageDetailView
  { url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80', name: 'package-1' },
  { url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80', name: 'package-2' },
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => {
        const buffer = Buffer.concat(chunks);
        resolve(buffer);
      });
    }).on('error', reject);
  });
}

async function optimizeAndSave(buffer, name) {
  try {
    const image = sharp(buffer);
    const metadata = await image.metadata();

    console.log(`📸 Processing: ${name}`);
    console.log(`   Original: ${metadata.format} | ${metadata.width}x${metadata.height} | ${(buffer.length / 1024).toFixed(2)}KB`);

    // Save as WebP
    const outputPath = path.join(UNSPLASH_DIR, `${name}.webp`);
    await image
      .webp({ quality: 80 })
      .toFile(outputPath);

    const outputSize = (fs.statSync(outputPath).size / 1024).toFixed(2);
    const savings = ((1 - outputSize / (buffer.length / 1024)) * 100).toFixed(1);

    console.log(`   ✅ Optimized: WebP | ${outputSize}KB | Saved ${savings}%\n`);

    return { success: true };
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}\n`);
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('\n🌐 DOWNLOADING AND OPTIMIZING UNSPLASH IMAGES\n' + '='.repeat(50));
  console.log(`Target directory: ${UNSPLASH_DIR}\n`);

  let succeeded = 0;
  let failed = 0;

  for (const { url, name } of unsplashImages) {
    try {
      const buffer = await downloadImage(url, name);
      const result = await optimizeAndSave(buffer, name);

      if (result.success) {
        succeeded++;
      } else {
        failed++;
      }
    } catch (error) {
      console.error(`❌ Failed to process ${name}:`, error.message);
      failed++;
    }
  }

  console.log('\n📊 SUMMARY\n' + '='.repeat(50));
  console.log(`✅ Succeeded: ${succeeded}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`\n✨ All images downloaded and optimized!`);
  console.log('\n📝 NEXT STEP: Update component references to use local images');
}

main().catch(console.error);
