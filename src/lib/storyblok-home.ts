import StoryblokClient from 'storyblok-js-client';

// Type for nested block items
interface StoryblokBlock {
  _uid: string;
  component: string;
  title?: string;
  description?: string;
  date?: string;
  time?: string;
  venue?: string;
  price?: string;
  image?: { filename?: string; alt?: string };
  registration_link?: { cached_url?: string; url?: string };
  is_featured?: boolean;
  category?: string;
  external_url?: { cached_url?: string; url?: string };
  caption?: string;
}

// Type for Storyblok story responses (for separate stories approach)
interface StoryblokStory {
  uuid: string;
  slug: string;
  content: {
    component: string;
    title?: string;
    description?: string;
    date?: string;
    time?: string;
    venue?: string;
    image?: { filename?: string; alt?: string };
    registration_link?: { cached_url?: string; url?: string };
    is_featured?: boolean;
    category?: string;
    external_url?: { cached_url?: string; url?: string };
    caption?: string;
    // For nested blocks approach - these fields contain arrays of blocks
    event_block?: StoryblokBlock[];
    news_block?: StoryblokBlock[];
    gallery_block?: StoryblokBlock[];
    // Alternative field names
    events?: StoryblokBlock[];
    news?: StoryblokBlock[];
    gallery?: StoryblokBlock[];
    items?: StoryblokBlock[];
    body?: StoryblokBlock[];
  };
}

// Determine if we're in production or development
const isProduction = process.env.NODE_ENV === 'production';

// Get the access token - use public token for production, preview token for development
const accessToken = process.env.STORYBLOK_API_TOKEN || process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN;

// Log for debugging (will show in server logs)
if (!accessToken) {
  console.error('❌ STORYBLOK_API_TOKEN is not set! Storyblok content will not load.');
} else {
  console.log(`✅ Storyblok configured - Environment: ${isProduction ? 'PRODUCTION' : 'DEVELOPMENT'}, Token: ${accessToken.substring(0, 10)}...`);
}

// Initialize Storyblok client
// Note: Change region to 'eu' if your space is in Europe
const Storyblok = new StoryblokClient({
  accessToken: accessToken,
  region: (process.env.STORYBLOK_REGION as 'us' | 'eu') || 'us', // Set to 'eu' if your space is in Europe
});

// Use cv: Date.now() for fresh content in development
// In production, use a fixed cache version that updates periodically
const cv = Date.now();

// Content version: 'published' for production, 'draft' for development preview
const contentVersion = isProduction ? 'published' : 'draft';

// Common fetch options for all Storyblok requests
const sbParams = {
  cv,
  version: contentVersion as 'published' | 'draft',
};

// ===========================================
// TYPES
// ===========================================

export interface HomeHeroData {
  backgroundImage: string;
  backgroundAlt: string;
}

export interface HomeEventData {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  registrationUrl?: string;
  isFeatured?: boolean;
}

export interface HomeNewsData {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  slug: string;
  externalUrl?: string;
}

export interface HomeGalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: 'cultural' | 'community' | 'sports';
}

export interface HomePageContent {
  hero: HomeHeroData;
  events: HomeEventData[];
  news: HomeNewsData[];
  gallery: HomeGalleryImage[];
}

// ===========================================
// FALLBACK STATIC DATA
// ===========================================

const fallbackHero: HomeHeroData = {
  backgroundImage: '/images/hero/summitlegend.jpg',
  backgroundAlt: 'Summit Legend - Himalayan Mountains',
};

// Note: Events, News, and Gallery return empty arrays when no Storyblok content,
// so the UI can show appropriate "Stay Tuned" or "No content" messages

// ===========================================
// FETCH FUNCTIONS
// ===========================================

/**
 * Fetch hero background image from Storyblok
 */
export async function getHomeHero(): Promise<HomeHeroData> {
  try {
    // Try multiple possible locations for hero settings
    
    // 1. First try "settings" path (where hero settings are stored)
    try {
      const response = await Storyblok.get('cdn/stories/settings', sbParams);
      const content = response.data.story?.content;
      if (content?.background_image?.filename) {
        console.log('✅ Hero loaded from settings path');
        return {
          backgroundImage: content.background_image.filename,
          backgroundAlt: content.background_image.alt || 'Himalayan Mountains',
        };
      }
    } catch {
      // Path doesn't exist, try alternative
    }

    // 2. Try settings/hero path
    try {
      const response = await Storyblok.get('cdn/stories/settings/hero', sbParams);
      const content = response.data.story?.content;
      if (content?.background_image?.filename) {
        console.log('✅ Hero loaded from settings/hero path');
        return {
          backgroundImage: content.background_image.filename,
          backgroundAlt: content.background_image.alt || 'Himalayan Mountains',
        };
      }
    } catch {
      // Path doesn't exist, try alternative
    }

    // 3. Try just "hero" at root level
    try {
      const response = await Storyblok.get('cdn/stories/hero', sbParams);
      const content = response.data.story?.content;
      if (content?.background_image?.filename) {
        console.log('✅ Hero loaded from hero path');
        return {
          backgroundImage: content.background_image.filename,
          backgroundAlt: content.background_image.alt || 'Himalayan Mountains',
        };
      }
    } catch {
      // Path doesn't exist
    }

    // 4. Search for any story with Hero Settings or hero_settings component
    const response = await Storyblok.get('cdn/stories', {
      ...sbParams,
      filter_query: {
        component: { in: 'Hero Settings,hero_settings' }
      }
    });
    
    if (response.data.stories?.[0]?.content?.background_image?.filename) {
      const content = response.data.stories[0].content;
      console.log('✅ Hero loaded via component search');
      return {
        backgroundImage: content.background_image.filename,
        backgroundAlt: content.background_image.alt || 'Himalayan Mountains',
      };
    }
    
    console.log('⚠️ No hero found in Storyblok, using fallback');
    return fallbackHero;
  } catch (error) {
    console.log('Hero fetch error:', error);
    return fallbackHero;
  }
}

/**
 * Fetch upcoming events from Storyblok
 * Supports both: 
 * 1. Nested blocks approach (one "events" story with multiple event blocks inside)
 * 2. Separate stories approach (multiple stories, each is one event)
 */
export async function getHomeEvents(limit: number = 4): Promise<HomeEventData[]> {
  try {
    // APPROACH 1: Try to fetch "events" story with nested blocks first
    try {
      const response = await Storyblok.get('cdn/stories/events', sbParams);
      const content = response.data.story?.content;
      
      console.log('📦 Events story found!');
      console.log('📦 Events story content:', JSON.stringify(content, null, 2));
      
      // Find the blocks array - could be named various things
      // Check common field names and also look for any array field containing blocks
      let blocksArray = content?.event_block || content?.Event_Block || content?.events || content?.items || content?.body || [];
      
      // If still empty, search for any array field that might contain event blocks
      if (blocksArray.length === 0 && content) {
        for (const key of Object.keys(content)) {
          const value = content[key as keyof typeof content];
          if (Array.isArray(value) && value.length > 0) {
            console.log(`📦 Found array field: ${key} with ${value.length} items`);
            if (value[0]?.component) {
              blocksArray = value;
              console.log(`📦 Using blocks array from field: ${key}`);
              break;
            }
          }
        }
      }
      
      console.log(`📦 Blocks array has ${blocksArray.length} items`);
      
      // Filter for event components - be very flexible with naming
      const eventBlocks = blocksArray.filter((block: StoryblokBlock) => {
        const comp = block.component?.toLowerCase().replace(/[_\s-]/g, '');
        console.log(`📦 Block component: "${block.component}" -> normalized: "${comp}"`);
        return comp === 'upcomingevent' || comp === 'eventitem' || comp === 'event';
      });
      
      if (eventBlocks.length > 0) {
        console.log(`✅ Found ${eventBlocks.length} events in nested blocks`);
        
        const events: HomeEventData[] = eventBlocks
          .map((block: StoryblokBlock) => ({
            id: block._uid,
            title: block.title || '',
            date: block.date || '',
            time: block.time || 'TBD',
            location: block.venue || 'TBD',
            description: block.description || '',
            image: block.image?.filename,
            registrationUrl: block.registration_link?.cached_url || block.registration_link?.url,
            isFeatured: block.is_featured || false,
          }))
          // Filter to only show upcoming events
          .filter((event: HomeEventData) => {
            if (!event.date) return true; // Include events without dates
            return new Date(event.date) >= new Date();
          })
          .slice(0, limit);
        
        if (events.length > 0) {
          return events;
        }
      }
    } catch (e) {
      // events story doesn't exist, try other approaches
      console.log('📦 Events story not found at /events, error:', e);
    }

    // APPROACH 2: Search for separate stories with upcoming_event component
    const response = await Storyblok.get('cdn/stories', {
      ...sbParams,
      filter_query: {
        component: { in: 'upcoming_event,Upcoming Event,Event Item,event_item' }
      },
      sort_by: 'content.date:asc',
      per_page: limit + 10,
    });

    if (response.data.stories && response.data.stories.length > 0) {
      console.log(`✅ Found ${response.data.stories.length} event stories`);
      
      const events: HomeEventData[] = response.data.stories
        .map((story: StoryblokStory) => {
          const content = story.content;
          return {
            id: story.uuid,
            title: content.title || '',
            date: content.date || '',
            time: content.time || 'TBD',
            location: content.venue || 'TBD',
            description: content.description || '',
            image: content.image?.filename,
            registrationUrl: content.registration_link?.cached_url || content.registration_link?.url,
            isFeatured: content.is_featured || false,
          };
        })
        .filter((event: HomeEventData) => {
          if (!event.date) return true;
          return new Date(event.date) >= new Date();
        })
        .slice(0, limit);

      if (events.length > 0) {
        return events;
      }
    }

    console.log('⚠️ No events found in Storyblok, returning empty array for Stay Tuned UI');
    return [];
  } catch (error) {
    console.log('Events fetch error:', error);
    return [];
  }
}

/**
 * Fetch news items from Storyblok
 * Supports both: 
 * 1. Nested blocks approach (one "news" story with multiple news blocks inside)
 * 2. Separate stories approach (multiple stories, each is one news item)
 */
export async function getHomeNews(limit: number = 3): Promise<HomeNewsData[]> {
  try {
    // APPROACH 1: Try to fetch "news" story with nested blocks first
    try {
      const response = await Storyblok.get('cdn/stories/news', sbParams);
      const content = response.data.story?.content;
      
      console.log('📦 News story found!');
      console.log('📦 News story content:', JSON.stringify(content, null, 2));
      
      // Find the blocks array - could be named various things
      let blocksArray = content?.news_block || content?.News_Block || content?.news || content?.items || content?.body || [];
      
      // If still empty, search for any array field that might contain news blocks
      if (blocksArray.length === 0 && content) {
        for (const key of Object.keys(content)) {
          const value = content[key as keyof typeof content];
          if (Array.isArray(value) && value.length > 0) {
            console.log(`📦 Found array field: ${key} with ${value.length} items`);
            if (value[0]?.component) {
              blocksArray = value;
              console.log(`📦 Using blocks array from field: ${key}`);
              break;
            }
          }
        }
      }
      
      console.log(`📦 News blocks array has ${blocksArray.length} items`);
      
      // Filter for news_item components - be very flexible with naming
      const newsBlocks = blocksArray.filter((block: StoryblokBlock) => {
        const comp = block.component?.toLowerCase().replace(/[_\s-]/g, '');
        console.log(`📦 News block component: "${block.component}" -> normalized: "${comp}"`);
        return comp === 'newsitem' || comp === 'news' || comp === 'article';
      });
      
      if (newsBlocks.length > 0) {
        console.log(`✅ Found ${newsBlocks.length} news items in nested blocks`);
        
        const news: HomeNewsData[] = newsBlocks
          .filter((block: StoryblokBlock) => block.title && block.title.trim() !== '') // Only include items with valid titles
          .map((block: StoryblokBlock, index: number) => ({
            id: block._uid,
            title: block.title || '',
            excerpt: block.description || '',
            image: block.image?.filename || '/images/news/placeholder.jpg',
            category: block.category || 'News',
            date: block.date || '',
            slug: `news-${index}`,
            externalUrl: block.external_url?.cached_url || block.external_url?.url,
          }))
          .slice(0, limit);
        
        if (news.length > 0) {
          return news;
        }
      }
    } catch (e) {
      console.log('📦 News story not found at /news, error:', e);
    }

    // APPROACH 2: Search for separate stories with news_item component
    const response = await Storyblok.get('cdn/stories', {
      ...sbParams,
      filter_query: {
        component: { in: 'news_item,News Item,news,News' }
      },
      sort_by: 'content.date:desc',
      per_page: limit,
    });

    if (response.data.stories && response.data.stories.length > 0) {
      console.log(`✅ Found ${response.data.stories.length} news stories`);
      
      const news: HomeNewsData[] = response.data.stories
        .filter((story: StoryblokStory) => story.content?.title && story.content.title.trim() !== '') // Only include items with valid titles
        .map((story: StoryblokStory) => {
          const content = story.content;
          return {
            id: story.uuid,
            title: content.title || '',
            excerpt: content.description || '',
            image: content.image?.filename || '/images/news/placeholder.jpg',
            category: content.category || 'News',
            date: content.date || '',
            slug: story.slug,
            externalUrl: content.external_url?.cached_url || content.external_url?.url,
          };
        });

      if (news.length > 0) {
        return news;
      }
    }

    console.log('⚠️ No news found in Storyblok, returning empty array');
    return []; // Return empty array so UI can show "no news yet" message
  } catch (error) {
    console.log('News fetch error:', error);
    return []; // Return empty array on error
  }
}

/**
 * Fetch gallery images from Storyblok
 * Supports both: 
 * 1. Nested blocks approach (one "gallery" story with multiple gallery blocks inside)
 * 2. Separate stories approach (multiple stories, each is one gallery image)
 */
export async function getHomeGallery(limit: number = 12): Promise<HomeGalleryImage[]> {
  try {
    // APPROACH 1: Try to fetch "gallery" or "Gallery" story with nested blocks first
    const galleryPaths = ['cdn/stories/gallery', 'cdn/stories/Gallery'];
    
    for (const path of galleryPaths) {
      try {
        const response = await Storyblok.get(path, sbParams);
        const content = response.data.story?.content;
        
        console.log('📦 Gallery story content keys:', Object.keys(content || {}));
        
        // Find the blocks array - could be named various things
        let blocksArray = content?.gallery_block || content?.Gallery_Block || content?.gallery || content?.items || content?.body || [];
        
        // If still empty, search for any array field that might contain gallery blocks
        if (blocksArray.length === 0 && content) {
          for (const key of Object.keys(content)) {
            const value = content[key as keyof typeof content];
            if (Array.isArray(value) && value.length > 0 && value[0]?.component) {
              blocksArray = value;
              console.log(`📦 Found blocks array in field: ${key}`);
              break;
            }
          }
        }
        
        // Filter for gallery image/item components - be flexible with naming
        const galleryBlocks = blocksArray.filter((block: StoryblokBlock) => {
          const comp = block.component?.toLowerCase().replace(/[_\s-]/g, '');
          console.log(`📦 Gallery block component: "${block.component}" -> normalized: "${comp}"`);
          return comp === 'galleryimage' || comp === 'galleryitem' || comp === 'gallery';
        });
        
        if (galleryBlocks.length > 0) {
          console.log(`✅ Found ${galleryBlocks.length} gallery images in nested blocks`);
          
          const gallery: HomeGalleryImage[] = galleryBlocks
            .map((block: StoryblokBlock) => ({
              id: block._uid,
              src: block.image?.filename || '',
              alt: block.image?.alt || block.caption || '',
              caption: block.caption,
              category: (block.category as 'cultural' | 'community' | 'sports') || 'community',
            }))
            .filter((img: HomeGalleryImage) => img.src)
            .slice(0, limit);
          
          if (gallery.length > 0) {
            return gallery;
          }
        }
      } catch {
        // This path doesn't exist, try next
      }
    }

    // APPROACH 2: Search for separate stories with gallery_image component
    const response = await Storyblok.get('cdn/stories', {
      ...sbParams,
      filter_query: {
        component: { in: 'gallery_image,Gallery Image' }
      },
      sort_by: 'content.date:desc',
      per_page: limit,
    });

    if (response.data.stories && response.data.stories.length > 0) {
      console.log(`✅ Found ${response.data.stories.length} gallery stories`);
      
      const gallery: HomeGalleryImage[] = response.data.stories
        .map((story: StoryblokStory) => {
          const content = story.content;
          return {
            id: story.uuid,
            src: content.image?.filename || '',
            alt: content.image?.alt || content.caption || '',
            caption: content.caption,
            category: (content.category as 'cultural' | 'community' | 'sports') || 'community',
          };
        })
        .filter((img: HomeGalleryImage) => img.src);

      if (gallery.length > 0) {
        return gallery;
      }
    }

    console.log('⚠️ No gallery images found in Storyblok, returning empty array');
    return []; // Return empty array so section is hidden when no images
  } catch (error) {
    console.log('Gallery fetch error:', error);
    return []; // Return empty array on error
  }
}

/**
 * Fetch all homepage content at once
 */
export async function getHomePageContent(): Promise<HomePageContent> {
  const [hero, events, news, gallery] = await Promise.all([
    getHomeHero(),
    getHomeEvents(4),
    getHomeNews(3),
    getHomeGallery(12),
  ]);

  return {
    hero,
    events,
    news,
    gallery,
  };
}

// Helper to check if using Storyblok content
export async function hasStoryblokContent(contentType: 'events' | 'news' | 'gallery'): Promise<boolean> {
  try {
    const startsWithMap = {
      events: 'events/',
      news: 'news/',
      gallery: 'gallery/',
    };

    const response = await Storyblok.get('cdn/stories', {
      starts_with: startsWithMap[contentType],
      ...sbParams,
      per_page: 1,
    });

    return response.data.stories && response.data.stories.length > 0;
  } catch {
    return false;
  }
}
