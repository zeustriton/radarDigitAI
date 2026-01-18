import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }

    const zai = await ZAI.create()

    const response = await zai.images.generations.create({
      prompt: prompt,
      size: '1024x1024'
    })

    const imageBase64 = response.data[0].base64
    const buffer = Buffer.from(imageBase64, 'base64')

    // Save image to public folder
    const timestamp = Date.now()
    const filename = `generated_logo_${timestamp}.png`
    const outputPath = path.join(process.cwd(), 'public', filename)
    fs.writeFileSync(outputPath, buffer)

    return NextResponse.json({
      success: true,
      imageUrl: `/${filename}`,
      path: outputPath
    })
  } catch (error: any) {
    console.error('Error generating image:', error)
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to generate image'
    }, { status: 500 })
  }
}
