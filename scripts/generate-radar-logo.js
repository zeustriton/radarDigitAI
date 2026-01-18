const ZAI = require('z-ai-web-dev-sdk');
const fs = require('fs');
const path = require('path');

async function generateLogo() {
  try {
    console.log('Generating logo for Radar DigitAI...');

    const zai = await ZAI.create();

    const response = await zai.images.generations.create({
      prompt: 'Modern minimalist logo featuring a radar scanning technology with digital circuits and AI brain elements, professional corporate design, blue and purple gradient, white background, clean geometric shapes, vector art style',
      size: '1024x1024'
    });

    const imageBase64 = response.data[0].base64;
    const buffer = Buffer.from(imageBase64, 'base64');

    const outputPath = path.join(__dirname, '..', 'public', 'logo_radar_digitai.png');
    fs.writeFileSync(outputPath, buffer);

    console.log('✅ Logo generated successfully:', outputPath);
    console.log('File size:', buffer.length, 'bytes');
  } catch (error) {
    console.error('❌ Error generating logo:', error.message);
    process.exit(1);
  }
}

generateLogo();
