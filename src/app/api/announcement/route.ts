import { NextResponse } from 'next/server';
import StoryblokClient from 'storyblok-js-client';

// Initialize Storyblok client with region support
const region = (process.env.STORYBLOK_REGION as 'us' | 'eu') || 'us';

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_API_TOKEN || process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN || '',
  region: region,
});

export interface AnnouncementData {
  image: string | null;
  alt?: string;
}

export async function GET() {
  try {
    // Fetch the announcement story from Storyblok
    const response = await Storyblok.get('cdn/stories/announcement', {
      version: 'published',
      cv: Date.now(), // Cache version for fresh content
    });

    const story = response.data.story;
    
    console.log('📢 Announcement story:', JSON.stringify(story, null, 2));
    
    // Check if story exists and has content
    if (!story || !story.content) {
      console.log('⚠️ No announcement story found');
      return NextResponse.json({ image: null });
    }

    const content = story.content;
    
    // Try to find the image - could be directly on content or nested in a block
    let imageData = null;
    
    // 1. Direct image property on content
    if (content.image?.filename) {
      imageData = content.image;
      console.log('✅ Found direct image on content');
    }
    
    // 2. Check for nested blocks (announcement_block, body, items, etc.)
    if (!imageData) {
      const blockArrays = ['announcement_block', 'Announcement_Block', 'body', 'items', 'blocks'];
      for (const key of blockArrays) {
        const blocks = content[key];
        if (Array.isArray(blocks) && blocks.length > 0) {
          // Find first block with an image
          for (const block of blocks) {
            if (block.image?.filename) {
              imageData = block.image;
              console.log(`✅ Found image in block array: ${key}`);
              break;
            }
          }
          if (imageData) break;
        }
      }
    }
    
    // 3. Search any array field for image
    if (!imageData) {
      for (const key of Object.keys(content)) {
        const value = content[key];
        if (Array.isArray(value) && value.length > 0 && value[0]?.image?.filename) {
          imageData = value[0].image;
          console.log(`✅ Found image in array field: ${key}`);
          break;
        }
      }
    }
    
    if (!imageData) {
      console.log('⚠️ No image found in announcement');
      return NextResponse.json({ image: null });
    }

    // Return the announcement data
    return NextResponse.json({
      image: imageData.filename,
      alt: imageData.alt || 'Special Announcement',
    });

  } catch (error) {
    console.error('Error fetching announcement:', error);
    // Return null image if there's an error (announcement won't show)
    return NextResponse.json({ image: null });
  }
}

// Enable revalidation every 60 seconds
export const revalidate = 60;