import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

async function generateLogo() {
  try {
    console.log('Generating logo for Radar DigitAI...');

    const zai = await ZAI.create();

    const response = await zai.images.generations.create({
      prompt: 'Modern minimalist logo featuring a radar scanning technology with digital circuits and AI brain elements, professional corporate design, blue and purple gradient, white background, clean geometric shapes, vector art style',
      size: '1024x1024'
    });

    const base64 = response?.data?.[0]?.base64;
    if (!base64) {
      console.error('No image data returned by the API');
      return;
    }

    const buffer = Buffer.from(base64, 'base64');
    const outputPath = path.join(__dirname, '..', 'public', 'logo_radar_digitai.png');
    fs.writeFileSync(outputPath, buffer);

    console.log('✅ Logo generated successfully:', outputPath);
    console.log('File size:', buffer.length, 'bytes');
  } catch (error: any) {
    console.error('❌ Error generating logo:', error?.message || error);
    process.exit(1);
  }
}

generateLogo();
