import { NextResponse } from 'next/server';
import { getHomeGallery } from '@/lib/storyblok-home';

export async function GET() {
  try {
    const images = await getHomeGallery(50); // Fetch up to 50 images
    
    // Transform to match the GalleryImage interface
    const formattedImages = images.map((img) => ({
      id: img.id,
      src: img.src,
      alt: img.alt,
      caption: img.caption || img.alt,
      category: img.category || 'Community',
    }));

    return NextResponse.json({ images: formattedImages });
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return NextResponse.json({ images: [] });
  }
}
