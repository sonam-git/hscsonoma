// Storyblok Content Types for HSC Website

// Base Storyblok Image type
export interface StoryblokAsset {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  is_external_url?: boolean;
}

// Base Storyblok Link type
export interface StoryblokLink {
  id: string;
  url: string;
  linktype: 'story' | 'url' | 'email';
  fieldtype: string;
  cached_url: string;
  target?: '_blank' | '_self';
}

// ===========================================
// 1. UPCOMING EVENTS
// ===========================================
export interface UpcomingEventBlok {
  _uid: string;
  component: 'upcoming_event';
  title: string;
  description: string;
  venue: string;
  price: string; // e.g., "Free", "$25", "$10-$50"
  date: string; // ISO date string
  time: string; // e.g., "6:00 PM - 9:00 PM"
  image: StoryblokAsset;
  registration_link?: StoryblokLink;
  is_featured?: boolean;
}

export interface UpcomingEventsListBlok {
  _uid: string;
  component: 'upcoming_events_list';
  title?: string;
  subtitle?: string;
  events: UpcomingEventBlok[];
  show_past_events?: boolean;
  max_events?: number;
}

// ===========================================
// 2. GALLERY
// ===========================================
export type GalleryCategory = 'cultural' | 'community' | 'sports';

export interface GalleryImageBlok {
  _uid: string;
  component: 'gallery_image';
  image: StoryblokAsset;
  caption?: string;
  category: GalleryCategory;
  date?: string;
}

export interface GalleryBlok {
  _uid: string;
  component: 'gallery';
  title?: string;
  subtitle?: string;
  images: GalleryImageBlok[];
  show_filter?: boolean;
  default_category?: GalleryCategory | 'all';
  columns?: '2' | '3' | '4';
}

// ===========================================
// 3. NEWS / COMMUNITY BUZZ
// ===========================================
export interface NewsItemBlok {
  _uid: string;
  component: 'news_item';
  title: string;
  date: string; // ISO date string
  image: StoryblokAsset;
  description: string;
  external_url?: StoryblokLink; // URL for "Read More" button
  category?: string;
  is_featured?: boolean;
}

export interface NewsListBlok {
  _uid: string;
  component: 'news_list';
  title?: string;
  subtitle?: string;
  news_items: NewsItemBlok[];
  show_category_filter?: boolean;
  max_items?: number;
}

// ===========================================
// 4. HERO SLIDES / VIDEOS
// ===========================================
export type HeroMediaType = 'image' | 'video';

export interface HeroSlideBlok {
  _uid: string;
  component: 'hero_slide';
  media_type: HeroMediaType;
  image?: StoryblokAsset;
  video_url?: string; // YouTube, Vimeo, or direct video URL
  video_file?: StoryblokAsset; // For uploaded videos
  title?: string;
  subtitle?: string;
  overlay_opacity?: number; // 0-100
  cta_text?: string;
  cta_link?: StoryblokLink;
}

export interface HeroSlideshowBlok {
  _uid: string;
  component: 'hero_slideshow';
  slides: HeroSlideBlok[];
  autoplay?: boolean;
  autoplay_interval?: number; // in seconds
  show_navigation?: boolean;
  show_dots?: boolean;
  height?: 'full' | 'large' | 'medium';
  tibetan_text?: string;
}

// ===========================================
// API Response Types
// ===========================================
export interface StoryblokStory<T = Record<string, unknown>> {
  name: string;
  created_at: string;
  published_at: string;
  id: number;
  uuid: string;
  content: T;
  slug: string;
  full_slug: string;
  sort_by_date: string | null;
  position: number;
  tag_list: string[];
  is_startpage: boolean;
  parent_id: number | null;
  meta_data: Record<string, unknown> | null;
  group_id: string;
  first_published_at: string;
  release_id: number | null;
  lang: string;
  path: string | null;
  alternates: Record<string, unknown>[];
  default_full_slug: string | null;
  translated_slugs: Record<string, unknown>[] | null;
}

export interface StoryblokResponse<T = Record<string, unknown>> {
  story: StoryblokStory<T>;
  cv: number;
  rels: Record<string, unknown>[];
  links: Record<string, unknown>[];
}

export interface StoryblokStoriesResponse<T = Record<string, unknown>> {
  stories: StoryblokStory<T>[];
  cv: number;
  rels: Record<string, unknown>[];
  links: Record<string, unknown>[];
}
