import StoryblokClient from 'storyblok-js-client';
import {
  UpcomingEventBlok,
  GalleryImageBlok,
  NewsItemBlok,
  HeroSlideBlok,
  StoryblokStory,
  GalleryCategory,
} from '@/types/storyblok';

// Initialize Storyblok client
const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_API_TOKEN || process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  region: 'us',
});

// Cache version for revalidation
const cv = Date.now();

// ===========================================
// 1. UPCOMING EVENTS API
// ===========================================
export interface FetchedEvent {
  id: string;
  title: string;
  description: string;
  venue: string;
  price: string;
  date: string;
  time: string;
  image: string;
  imageAlt: string;
  registrationUrl?: string;
  isFeatured: boolean;
  isPast: boolean;
}

export async function getUpcomingEvents(options?: {
  includePast?: boolean;
  limit?: number;
  featured?: boolean;
}): Promise<FetchedEvent[]> {
  try {
    const response = await Storyblok.get('cdn/stories', {
      starts_with: 'events/',
      content_type: 'upcoming_event',
      cv,
      sort_by: 'content.date:asc',
    });

    const events: FetchedEvent[] = response.data.stories.map(
      (story: StoryblokStory<UpcomingEventBlok>) => {
        const content = story.content;
        const eventDate = new Date(content.date);
        const isPast = eventDate < new Date();

        return {
          id: story.uuid,
          title: content.title,
          description: content.description,
          venue: content.venue,
          price: content.price || 'Free',
          date: content.date,
          time: content.time,
          image: content.image?.filename || '',
          imageAlt: content.image?.alt || content.title,
          registrationUrl: content.registration_link?.cached_url,
          isFeatured: content.is_featured || false,
          isPast,
        };
      }
    );

    // Filter based on options
    let filteredEvents = events;

    if (!options?.includePast) {
      filteredEvents = filteredEvents.filter((e) => !e.isPast);
    }

    if (options?.featured) {
      filteredEvents = filteredEvents.filter((e) => e.isFeatured);
    }

    if (options?.limit) {
      filteredEvents = filteredEvents.slice(0, options.limit);
    }

    return filteredEvents;
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    return [];
  }
}

// ===========================================
// 2. GALLERY API
// ===========================================
export interface FetchedGalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  date?: string;
}

export async function getGalleryImages(options?: {
  category?: GalleryCategory;
  limit?: number;
}): Promise<FetchedGalleryImage[]> {
  try {
    const response = await Storyblok.get('cdn/stories', {
      starts_with: 'gallery/',
      content_type: 'gallery_image',
      cv,
      sort_by: 'content.date:desc',
    });

    const images: FetchedGalleryImage[] = response.data.stories.map(
      (story: StoryblokStory<GalleryImageBlok>) => {
        const content = story.content;
        return {
          id: story.uuid,
          src: content.image?.filename || '',
          alt: content.image?.alt || content.caption || '',
          caption: content.caption || '',
          category: content.category,
          date: content.date,
        };
      }
    );

    // Filter by category
    let filteredImages = images;

    if (options?.category) {
      filteredImages = filteredImages.filter((img) => img.category === options.category);
    }

    if (options?.limit) {
      filteredImages = filteredImages.slice(0, options.limit);
    }

    return filteredImages;
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
}

// ===========================================
// 3. NEWS API
// ===========================================
export interface FetchedNewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  description: string;
  externalUrl?: string;
  category?: string;
  isFeatured: boolean;
}

export async function getNewsItems(options?: {
  category?: string;
  limit?: number;
  featured?: boolean;
}): Promise<FetchedNewsItem[]> {
  try {
    const response = await Storyblok.get('cdn/stories', {
      starts_with: 'news/',
      content_type: 'news_item',
      cv,
      sort_by: 'content.date:desc',
    });

    const newsItems: FetchedNewsItem[] = response.data.stories.map(
      (story: StoryblokStory<NewsItemBlok>) => {
        const content = story.content;
        return {
          id: story.uuid,
          title: content.title,
          date: content.date,
          image: content.image?.filename || '',
          imageAlt: content.image?.alt || content.title,
          description: content.description,
          externalUrl: content.external_url?.cached_url || content.external_url?.url,
          category: content.category,
          isFeatured: content.is_featured || false,
        };
      }
    );

    // Filter based on options
    let filteredNews = newsItems;

    if (options?.category) {
      filteredNews = filteredNews.filter((n) => n.category === options.category);
    }

    if (options?.featured) {
      filteredNews = filteredNews.filter((n) => n.isFeatured);
    }

    if (options?.limit) {
      filteredNews = filteredNews.slice(0, options.limit);
    }

    return filteredNews;
  } catch (error) {
    console.error('Error fetching news items:', error);
    return [];
  }
}

// ===========================================
// 4. HERO SLIDES API
// ===========================================
export interface FetchedHeroSlide {
  id: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  mediaAlt?: string;
  title?: string;
  subtitle?: string;
  overlayOpacity: number;
  ctaText?: string;
  ctaUrl?: string;
}

export async function getHeroSlides(): Promise<FetchedHeroSlide[]> {
  try {
    const response = await Storyblok.get('cdn/stories/home', {
      cv,
      resolve_relations: 'hero_slideshow.slides',
    });

    const story = response.data.story;
    const heroSlideshow = story.content.body?.find(
      (blok: { component: string }) => blok.component === 'hero_slideshow'
    );

    if (!heroSlideshow?.slides) {
      return [];
    }

    const slides: FetchedHeroSlide[] = heroSlideshow.slides.map(
      (slide: HeroSlideBlok) => {
        let mediaSrc = '';
        
        if (slide.media_type === 'video') {
          mediaSrc = slide.video_url || slide.video_file?.filename || '';
        } else {
          mediaSrc = slide.image?.filename || '';
        }

        return {
          id: slide._uid,
          mediaType: slide.media_type || 'image',
          mediaSrc,
          mediaAlt: slide.image?.alt,
          title: slide.title,
          subtitle: slide.subtitle,
          overlayOpacity: slide.overlay_opacity ?? 60,
          ctaText: slide.cta_text,
          ctaUrl: slide.cta_link?.cached_url,
        };
      }
    );

    return slides;
  } catch (error) {
    console.error('Error fetching hero slides:', error);
    return [];
  }
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

// Get optimized image URL from Storyblok
export function getStoryblokImageUrl(
  filename: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'png' | 'jpg';
  }
): string {
  if (!filename) return '';
  
  const params: string[] = [];
  
  if (options?.width) params.push(`${options.width}x0`);
  else if (options?.height) params.push(`0x${options.height}`);
  
  if (options?.quality) params.push(`filters:quality(${options.quality})`);
  if (options?.format) params.push(`filters:format(${options.format})`);
  
  if (params.length === 0) return filename;
  
  // Storyblok image service URL format
  const baseUrl = filename.replace('//a.storyblok.com', '//img2.storyblok.com');
  return `${baseUrl}/m/${params.join('/')}`;
}

// Format date for display
export function formatEventDate(dateString: string): {
  day: number;
  month: string;
  year: number;
  full: string;
} {
  const date = new Date(dateString);
  return {
    day: date.getDate(),
    month: date.toLocaleDateString('en-US', { month: 'short' }),
    year: date.getFullYear(),
    full: date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };
}

// Check if event is upcoming
export function isUpcomingEvent(dateString: string): boolean {
  return new Date(dateString) >= new Date();
}
