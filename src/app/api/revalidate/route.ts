import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Get the secret from the request (Storyblok webhook can send this)
    const body = await request.json();
    
    // Optional: Verify webhook secret
    const secret = request.headers.get('x-storyblok-webhook-secret');
    const expectedSecret = process.env.STORYBLOK_WEBHOOK_SECRET;
    
    if (expectedSecret && secret !== expectedSecret) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    // Get the story slug from the webhook payload
    const slug = body?.full_slug || body?.story?.full_slug;
    
    console.log('🔄 Revalidation triggered for:', slug || 'all pages');

    // Revalidate specific paths based on the story type
    if (slug) {
      // Revalidate the specific page
      revalidatePath(`/${slug}`);
      
      // Also revalidate homepage since it shows news/events/gallery
      if (slug.includes('news') || slug.includes('event') || slug.includes('gallery')) {
        revalidatePath('/');
      }
    } else {
      // Revalidate all main pages
      revalidatePath('/');
      revalidatePath('/news');
      revalidatePath('/events');
      revalidatePath('/about/gallery');
    }

    // Revalidate by tag if using fetch with tags
    revalidateTag('storyblok');

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      slug: slug || 'all'
    });
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json({ 
      message: 'Error revalidating', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}

// Also allow GET for manual revalidation (with secret)
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const path = request.nextUrl.searchParams.get('path') || '/';
  
  // Check for secret
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    revalidatePath(path);
    revalidateTag('storyblok');
    
    return NextResponse.json({ 
      revalidated: true, 
      path,
      now: Date.now() 
    });
  } catch (error) {
    return NextResponse.json({ 
      message: 'Error revalidating',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
