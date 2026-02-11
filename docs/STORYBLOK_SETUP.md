# Storyblok CMS Integration Guide

This guide explains how to set up Storyblok content types for the Himalayan Sherpa Club website.

## Content Types Overview

The website integrates 4 main content types from Storyblok:

1. **Upcoming Events** - Community events with full details
2. **Gallery** - Photo gallery with category filtering
3. **News/Community Buzz** - News articles with external links
4. **Hero Slideshow** - Homepage hero with images/videos

---

## 1. Upcoming Events

### Schema: `upcoming_event`

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `title` | Text | Event name | ✅ |
| `description` | Textarea | Event description | ✅ |
| `venue` | Text | Event location/venue | ✅ |
| `price` | Text | Ticket price (e.g., "Free", "$25", "$10-$50") | |
| `date` | Datetime | Event date | ✅ |
| `time` | Text | Event time (e.g., "6:00 PM - 9:00 PM") | ✅ |
| `image` | Asset (Image) | Event featured image | ✅ |
| `registration_link` | Link | Registration/ticket URL | |
| `is_featured` | Boolean | Highlight as featured event | |

### Schema: `upcoming_events_list`

| Field | Type | Description |
|-------|------|-------------|
| `title` | Text | Section title |
| `subtitle` | Text | Section subtitle |
| `events` | Blocks (upcoming_event) | List of events |
| `show_past_events` | Boolean | Show past events |
| `max_events` | Number | Maximum events to display |

### Folder Structure in Storyblok
```
📁 events/
  ├── annual-losar-2026
  ├── labor-day-picnic-2026
  └── ...
```

---

## 2. Gallery

### Schema: `gallery_image`

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `image` | Asset (Image) | Gallery image | ✅ |
| `caption` | Text | Image caption | |
| `category` | Single-Option | cultural, community, sports | ✅ |
| `date` | Datetime | Photo date | |

**Category Options:**
- `cultural` - Cultural events, traditional celebrations
- `community` - Community gatherings, picnics, meetings
- `sports` - Sports events, soccer, volleyball

### Schema: `gallery`

| Field | Type | Description |
|-------|------|-------------|
| `title` | Text | Gallery title |
| `subtitle` | Text | Gallery subtitle |
| `images` | Blocks (gallery_image) | List of images |
| `show_filter` | Boolean | Show category filter (default: true) |
| `default_category` | Single-Option | Default filter (all, cultural, community, sports) |
| `columns` | Single-Option | Grid columns (2, 3, 4) |

### Folder Structure in Storyblok
```
📁 gallery/
  ├── losar-2025-photos
  ├── labor-day-volleyball
  └── hsfc-soccer-match
```

---

## 3. News / Community Buzz

### Schema: `news_item`

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `title` | Text | Article title | ✅ |
| `date` | Datetime | Publication date | ✅ |
| `image` | Asset (Image) | Featured image | ✅ |
| `description` | Textarea | Article summary/excerpt | ✅ |
| `external_url` | Link | "Read More" URL (external article) | |
| `category` | Text | Article category | |
| `is_featured` | Boolean | Feature this article | |

### Schema: `news_list`

| Field | Type | Description |
|-------|------|-------------|
| `title` | Text | Section title |
| `subtitle` | Text | Section subtitle |
| `news_items` | Blocks (news_item) | List of news articles |
| `show_category_filter` | Boolean | Show category filter |
| `max_items` | Number | Maximum items to display |

### Folder Structure in Storyblok
```
📁 news/
  ├── sherpa-heritage-month
  ├── hsfc-wins-tournament
  └── community-donation-drive
```

---

## 4. Hero Slideshow (Images/Videos)

### Schema: `hero_slide`

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `media_type` | Single-Option | image, video | ✅ |
| `image` | Asset (Image) | Hero image (if media_type = image) | |
| `video_url` | Text | YouTube/Vimeo URL (if media_type = video) | |
| `video_file` | Asset (Video) | Uploaded video file | |
| `title` | Text | Slide title overlay | |
| `subtitle` | Text | Slide subtitle | |
| `overlay_opacity` | Number | Background overlay (0-100) | |
| `cta_text` | Text | Call-to-action button text | |
| `cta_link` | Link | Call-to-action URL | |

**Video URL Support:**
- YouTube: `https://youtube.com/watch?v=VIDEO_ID` or `https://youtu.be/VIDEO_ID`
- Vimeo: `https://vimeo.com/VIDEO_ID`
- Direct: Any MP4/WebM URL

### Schema: `hero_slideshow`

| Field | Type | Description |
|-------|------|-------------|
| `slides` | Blocks (hero_slide) | Slideshow slides |
| `autoplay` | Boolean | Auto-advance slides (default: true) |
| `autoplay_interval` | Number | Seconds between slides (default: 5) |
| `show_navigation` | Boolean | Show prev/next arrows (default: true) |
| `show_dots` | Boolean | Show dot indicators (default: true) |
| `height` | Single-Option | full, large, medium |
| `tibetan_text` | Text | Tibetan script overlay text |

---

## Setting Up in Storyblok

### Step 1: Create Content Types

1. Go to Storyblok → Block Library
2. Create each schema listed above
3. Add the fields with correct types

### Step 2: Create Folders

1. Go to Content
2. Create folders: `events`, `gallery`, `news`
3. Add content entries in each folder

### Step 3: Environment Variables

Add to `.env.local`:
```env
STORYBLOK_API_TOKEN=your_preview_token
NEXT_PUBLIC_STORYBLOK_API_TOKEN=your_public_token
```

### Step 4: Fetching Data

Use the API functions in `src/lib/storyblok-api.ts`:

```typescript
import { getUpcomingEvents, getGalleryImages, getNewsItems, getHeroSlides } from '@/lib/storyblok-api';

// Get upcoming events
const events = await getUpcomingEvents({ limit: 5 });

// Get gallery images by category
const culturalImages = await getGalleryImages({ category: 'cultural' });

// Get featured news
const featuredNews = await getNewsItems({ featured: true, limit: 3 });

// Get hero slides
const heroSlides = await getHeroSlides();
```

---

## Component Usage

### In a page:

```tsx
import { getUpcomingEvents } from '@/lib/storyblok-api';
import UpcomingEvent from '@/components/storyblok/UpcomingEvent';

export default async function EventsPage() {
  const events = await getUpcomingEvents();

  return (
    <section>
      {events.map((event) => (
        <UpcomingEvent key={event.id} blok={event} />
      ))}
    </section>
  );
}
```

### Using StoryblokComponent:

```tsx
import { StoryblokComponent } from '@storyblok/react';

export default function Page({ story }) {
  return (
    <main>
      {story.content.body?.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
}
```

---

## Image Optimization

Use the helper function for optimized images:

```typescript
import { getStoryblokImageUrl } from '@/lib/storyblok-api';

// Get optimized thumbnail
const thumbUrl = getStoryblokImageUrl(image.filename, {
  width: 400,
  quality: 80,
  format: 'webp'
});
```

---

## Notes

- All dates should be in ISO format
- Images will be automatically optimized via Storyblok's image service
- Videos support YouTube, Vimeo, and direct MP4/WebM URLs
- The gallery supports touch swipe on mobile devices
- The hero slideshow pauses on hover
