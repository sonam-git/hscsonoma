'use client';

import { storyblokInit, apiPlugin, SbBlokData, StoryblokComponent } from '@storyblok/react';
import { ReactNode } from 'react';

// Import Storyblok components
import Page from '@/components/storyblok/Page';
import Hero from '@/components/storyblok/Hero';
import Feature from '@/components/storyblok/Feature';
import Grid from '@/components/storyblok/Grid';
import TextSection from '@/components/storyblok/TextSection';
import CardGrid from '@/components/storyblok/CardGrid';
import NewsCard from '@/components/storyblok/NewsCard';
import EventCard from '@/components/storyblok/EventCard';
import TeamMember from '@/components/storyblok/TeamMember';
import CallToAction from '@/components/storyblok/CallToAction';
import ImageGallery from '@/components/storyblok/ImageGallery';

// New Storyblok components for CMS integration
import UpcomingEvent from '@/components/storyblok/UpcomingEvent';
import UpcomingEventsList from '@/components/storyblok/UpcomingEventsList';
import StoryblokGallery from '@/components/storyblok/StoryblokGallery';
import NewsItem from '@/components/storyblok/NewsItem';
import NewsList from '@/components/storyblok/NewsList';
import HeroSlideshow from '@/components/storyblok/HeroSlideshow';

// Define Storyblok components mapping
const components = {
  page: Page,
  hero: Hero,
  feature: Feature,
  grid: Grid,
  text_section: TextSection,
  card_grid: CardGrid,
  news_card: NewsCard,
  event_card: EventCard,
  team_member: TeamMember,
  cta: CallToAction,
  image_gallery: ImageGallery,
  // New CMS components
  upcoming_event: UpcomingEvent,
  upcoming_events_list: UpcomingEventsList,
  gallery: StoryblokGallery,
  gallery_image: StoryblokGallery, // For individual gallery images in a list
  news_item: NewsItem,
  news_list: NewsList,
  hero_slideshow: HeroSlideshow,
  hero_slide: HeroSlideshow, // For individual slides
};

// Initialize Storyblok only if token is available
const storyblokToken = process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN;

if (storyblokToken) {
  storyblokInit({
    accessToken: storyblokToken,
    use: [apiPlugin],
    components,
    apiOptions: {
      region: 'us',
    },
  });
} else {
  // Initialize without API plugin for static rendering
  storyblokInit({
    components,
  });
}

export function StoryblokProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

// Helper function to get Storyblok client
export function getStoryblokApi() {
  const storyblokApi = (global as any).storyblokApi;
  return storyblokApi;
}

// Types for Storyblok content
export interface StoryblokStory<T = any> {
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
  meta_data: Record<string, any> | null;
  group_id: string;
  first_published_at: string;
  release_id: number | null;
  lang: string;
  path: string | null;
  alternates: any[];
  default_full_slug: string | null;
  translated_slugs: any[] | null;
}

export interface StoryblokImage {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  filename: string;
  copyright: string;
  fieldtype: string;
}

export interface StoryblokLink {
  id: string;
  url: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
}

export interface PageContent {
  body: SbBlokData[];
  seo_title?: string;
  seo_description?: string;
  og_image?: StoryblokImage;
}

export interface NewsPostContent {
  title: string;
  excerpt: string;
  content: SbBlokData[];
  featured_image: StoryblokImage;
  category: string;
  author: string;
  published_date: string;
}

export interface EventContent {
  title: string;
  description: string;
  content: SbBlokData[];
  featured_image: StoryblokImage;
  event_date: string;
  event_time: string;
  location: string;
  registration_link?: StoryblokLink;
  is_past: boolean;
}

export interface TeamMemberContent {
  name: string;
  title: string;
  bio: string;
  photo: StoryblokImage;
  email?: string;
  role: 'founder' | 'executive' | 'advisory';
}

// Export StoryblokComponent for use in pages
export { StoryblokComponent };
export type { SbBlokData };
