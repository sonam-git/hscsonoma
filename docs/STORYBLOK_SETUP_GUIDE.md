# Storyblok CMS Setup Guide for HSC Sonoma

This guide walks you through setting up your Storyblok space to work with the Himalayan Sherpa Club website. Follow each step carefully to create all the required block types and content structures.

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Create a Storyblok Space](#2-create-a-storyblok-space)
3. [Configure API Tokens](#3-configure-api-tokens)
4. [Create Block Library](#4-create-block-library)
   - [Page Block](#41-page-block-root-content-type)
   - [Hero Block](#42-hero-block)
   - [Hero Slideshow Block](#43-hero-slideshow-block)
   - [Feature Block](#44-feature-block)
   - [Grid Block](#45-grid-block)
   - [Text Section Block](#46-text-section-block)
   - [Card Grid Block](#47-card-grid-block)
   - [Call to Action Block](#48-call-to-action-cta-block)
   - [Image Gallery Block](#49-image-gallery-block)
   - [Gallery Block (Advanced)](#410-gallery-block-advanced)
   - [News Item Block](#411-news-item-block)
   - [News List Block](#412-news-list-block)
   - [News Card Block](#413-news-card-block)
   - [Upcoming Event Block](#414-upcoming-event-block)
   - [Upcoming Events List Block](#415-upcoming-events-list-block)
   - [Event Card Block](#416-event-card-block)
   - [Team Member Block](#417-team-member-block)
5. [Create Content Types (Folders)](#5-create-content-types-folders)
6. [Visual Editor Setup](#6-visual-editor-setup)
7. [Content Migration](#7-content-migration)
8. [Testing & Verification](#8-testing--verification)

---

## 1. Prerequisites

Before starting, ensure you have:

- A Storyblok account (sign up at [storyblok.com](https://www.storyblok.com))
- Access to your HSC Sonoma codebase
- Your `.env.local` file ready for API tokens

---

## 2. Create a Storyblok Space

1. Log in to [Storyblok](https://app.storyblok.com)
2. Click **"Create new space"**
3. Enter space name: `HSC Sonoma` or `Himalayan Sherpa Club`
4. Select **Region: United States** (important for API configuration)
5. Choose the **Free** plan to start (upgrade as needed)
6. Click **Create Space**

---

## 3. Configure API Tokens

### Get Your API Tokens

1. In your Storyblok space, go to **Settings** → **Access Tokens**
2. You'll see a **Preview** token (for draft content) and need to create a **Public** token

### Create Public Token (for production)

1. Click **Generate new token**
2. Name: `public`
3. Access Level: `public`
4. Copy this token

### Update Your Environment

Add these to your `.env.local` file:

```bash
# Storyblok API Tokens
STORYBLOK_API_TOKEN=your_preview_token_here
NEXT_PUBLIC_STORYBLOK_API_TOKEN=your_public_token_here
```

---

## 4. Create Block Library

Navigate to **Block Library** in your Storyblok sidebar. Create each block type below.

### 4.1 Page Block (Root Content Type)

This is the main content type for pages.

**Technical Name:** `page`

| Field Name | Field Type | Required | Notes |
|------------|------------|----------|-------|
| `body` | Blocks | ✅ | Allow all content blocks |
| `seo_title` | Text | ❌ | SEO meta title |
| `seo_description` | Textarea | ❌ | SEO meta description |
| `og_image` | Asset (Images) | ❌ | Open Graph image |

**Settings:**
- ✅ Mark as **Content Type** (not nestable)
- Set as the default content type for the root folder

---

### 4.2 Hero Block

A full-width hero section with background image and call-to-action buttons.

**Technical Name:** `hero`

| Field Name | Field Type | Required | Default | Notes |
|------------|------------|----------|---------|-------|
| `title` | Text | ✅ | - | Main heading |
| `subtitle` | Textarea | ❌ | - | Supporting text |
| `tibetan_text` | Text | ❌ | - | Tibetan script display |
| `background_image` | Asset (Images) | ❌ | - | Hero background |
| `primary_button_text` | Text | ❌ | - | Primary CTA text |
| `primary_button_link` | Link | ❌ | - | Primary CTA URL |
| `secondary_button_text` | Text | ❌ | - | Secondary CTA text |
| `secondary_button_link` | Link | ❌ | - | Secondary CTA URL |
| `overlay_opacity` | Number | ❌ | `60` | 0-100, overlay darkness |
| `height` | Single Option | ❌ | `large` | Options: `full`, `large`, `medium` |

**Height Options:**
- `full` - Full viewport height
- `large` - 85% viewport height (default)
- `medium` - 60% viewport height

---

### 4.3 Hero Slideshow Block

An auto-playing slideshow hero with support for images and videos.

**Technical Name:** `hero_slideshow`

| Field Name | Field Type | Required | Default | Notes |
|------------|------------|----------|---------|-------|
| `slides` | Blocks | ✅ | - | Contains `hero_slide` blocks |
| `autoplay` | Boolean | ❌ | `true` | Auto-advance slides |
| `autoplay_interval` | Number | ❌ | `5` | Seconds between slides |
| `show_navigation` | Boolean | ❌ | `true` | Show prev/next arrows |
| `show_dots` | Boolean | ❌ | `true` | Show slide indicators |
| `height` | Single Option | ❌ | `large` | `full`, `large`, `medium` |
| `tibetan_text` | Text | ❌ | - | Tibetan script display |

#### Hero Slide Block (Nested)

**Technical Name:** `hero_slide`

| Field Name | Field Type | Required | Notes |
|------------|------------|----------|-------|
| `media_type` | Single Option | ✅ | Options: `image`, `video` |
| `image` | Asset (Images) | ❌ | For image slides |
| `video_url` | Text | ❌ | YouTube/Vimeo URL or direct video |
| `video_file` | Asset (Videos) | ❌ | Direct video upload |
| `title` | Text | ❌ | Slide title overlay |
| `subtitle` | Textarea | ❌ | Slide subtitle |
| `overlay_opacity` | Number | ❌ | 0-100 |
| `cta_text` | Text | ❌ | Button text |
| `cta_link` | Link | ❌ | Button URL |

---

### 4.4 Feature Block

A feature card with icon, title, and description.

**Technical Name:** `feature`

| Field Name | Field Type | Required | Notes |
|------------|------------|----------|-------|
| `title` | Text | ✅ | Feature title |
| `description` | Textarea | ✅ | Feature description |
| `icon` | Asset (Images) | ❌ | Custom icon image |
| `icon_name` | Single Option | ❌ | Built-in icon: `community`, `culture`, `mountain`, `heart`, `calendar`, `star` |
| `link` | Link | ❌ | Optional link |

**Icon Options:**
- `community` - People/group icon
- `culture` - Globe icon
- `mountain` - Mountain icon
- `heart` - Heart icon
- `calendar` - Calendar icon
- `star` - Star icon (default)

---

### 4.5 Grid Block

A flexible grid layout container for other blocks.

**Technical Name:** `grid`

| Field Name | Field Type | Required | Default | Notes |
|------------|------------|----------|---------|-------|
| `columns` | Single Option | ✅ | `3` | Options: `2`, `3`, `4` |
| `items` | Blocks | ✅ | - | Nested content blocks (features, cards, etc.) |
| `background` | Single Option | ❌ | `cream` | `white`, `cream`, `dark` |
| `padding` | Single Option | ❌ | `medium` | `small`, `medium`, `large` |

---

### 4.6 Text Section Block

Rich text content section with optional image.

**Technical Name:** `text_section`

| Field Name | Field Type | Required | Default | Notes |
|------------|------------|----------|---------|-------|
| `title` | Text | ❌ | - | Section heading |
| `subtitle` | Text | ❌ | - | Small label above title |
| `content` | Richtext | ✅ | - | Main content (supports formatting) |
| `image` | Asset (Images) | ❌ | - | Optional side image |
| `image_position` | Single Option | ❌ | `right` | `left`, `right` |
| `background` | Single Option | ❌ | `white` | `white`, `cream`, `dark` |
| `centered` | Boolean | ❌ | `false` | Center text when no image |

---

### 4.7 Card Grid Block

A section containing a grid of cards with optional header.

**Technical Name:** `card_grid`

| Field Name | Field Type | Required | Default | Notes |
|------------|------------|----------|---------|-------|
| `title` | Text | ❌ | - | Section title |
| `subtitle` | Text | ❌ | - | Label above title |
| `cards` | Blocks | ✅ | - | Card blocks (news_card, event_card, etc.) |
| `columns` | Single Option | ❌ | `3` | `2`, `3`, `4` |
| `background` | Single Option | ❌ | `cream` | `white`, `cream`, `dark` |
| `show_more_text` | Text | ❌ | - | "View All" button text |
| `show_more_link` | Link | ❌ | - | "View All" button URL |

---

### 4.8 Call to Action (CTA) Block

A prominent section encouraging user action.

**Technical Name:** `cta`

| Field Name | Field Type | Required | Notes |
|------------|------------|----------|-------|
| `title` | Text | ✅ | CTA heading |
| `description` | Textarea | ✅ | Supporting text |
| `background_image` | Asset (Images) | ❌ | Optional background |
| `primary_button_text` | Text | ✅ | Main button text |
| `primary_button_link` | Link | ✅ | Main button URL |
| `secondary_button_text` | Text | ❌ | Secondary button text |
| `secondary_button_link` | Link | ❌ | Secondary button URL |
| `style` | Single Option | ❌ | Style: `default`, `wine`, `mountain` |

**Style Options:**
- `default` - Burgundy gradient
- `wine` - Burgundy to forest gradient
- `mountain` - Himalayan blue gradient

---

### 4.9 Image Gallery Block

Simple image gallery with lightbox.

**Technical Name:** `image_gallery`

| Field Name | Field Type | Required | Default | Notes |
|------------|------------|----------|---------|-------|
| `title` | Text | ❌ | - | Gallery title |
| `images` | Multi-Asset (Images) | ✅ | - | Gallery images |
| `columns` | Single Option | ❌ | `3` | `2`, `3`, `4` |

---

### 4.10 Gallery Block (Advanced)

Advanced gallery with category filtering.

**Technical Name:** `gallery`

| Field Name | Field Type | Required | Default | Notes |
|------------|------------|----------|---------|-------|
| `title` | Text | ❌ | - | Gallery title |
| `subtitle` | Textarea | ❌ | - | Gallery description |
| `images` | Blocks | ✅ | - | Contains `gallery_image` blocks |
| `show_filter` | Boolean | ❌ | `true` | Show category filter |
| `default_category` | Single Option | ❌ | `all` | `all`, `cultural`, `community`, `sports` |
| `columns` | Single Option | ❌ | `3` | `2`, `3`, `4` |

#### Gallery Image Block (Nested)

**Technical Name:** `gallery_image`

| Field Name | Field Type | Required | Notes |
|------------|------------|----------|-------|
| `image` | Asset (Images) | ✅ | The image |
| `caption` | Text | ❌ | Image caption |
| `category` | Single Option | ✅ | `cultural`, `community`, `sports` |
| `date` | Date | ❌ | When photo was taken |

---

### 4.11 News Item Block

A news article card for lists/grids.

**Technical Name:** `news_item`

| Field Name | Field Type | Required | Notes |
|------------|------------|----------|-------|
| `title` | Text | ✅ | Article title |
| `date` | Date/Time | ✅ | Publication date |
| `image` | Asset (Images) | ❌ | Featured image |
| `description` | Textarea | ✅ | Short excerpt |
| `external_url` | Link | ❌ | Link to full article |
| `category` | Single Option | ❌ | Options: `Community`, `Events`, `Culture`, `Announcements` |
| `is_featured` | Boolean | ❌ | Highlight as featured |

---

### 4.12 News List Block

Container for displaying multiple news items.

**Technical Name:** `news_list`

| Field Name | Field Type | Required | Default | Notes |
|------------|------------|----------|---------|-------|
| `title` | Text | ❌ | - | Section title |
| `subtitle` | Textarea | ❌ | - | Section description |
| `news_items` | Blocks | ✅ | - | Contains `news_item` blocks |
| `show_category_filter` | Boolean | ❌ | `false` | Show filter buttons |
| `max_items` | Number | ❌ | - | Limit displayed items |

---

### 4.13 News Card Block

For linking to full news post pages.

**Technical Name:** `news_card`

| Field Name | Field Type | Required | Notes |
|------------|------------|----------|-------|
| `title` | Text | ✅ | Article title |
| `excerpt` | Textarea | ✅ | Short summary |
| `featured_image` | Asset (Images) | ❌ | Card image |
| `category` | Text | ❌ | Category label |
| `published_date` | Date/Time | ✅ | Publication date |
| `slug` | Text | ✅ | URL slug for `/news/[slug]` |

---

### 4.14 Upcoming Event Block

An event card with full details.

**Technical Name:** `upcoming_event`

| Field Name | Field Type | Required | Notes |
|------------|------------|----------|-------|
| `title` | Text | ✅ | Event name |
| `description` | Textarea | ✅ | Event description |
| `venue` | Text | ✅ | Location name |
| `price` | Text | ❌ | Ticket price or "Free" |
| `date` | Date/Time | ✅ | Event date |
| `time` | Text | ✅ | Event time (e.g., "2:00 PM - 5:00 PM") |
| `image` | Asset (Images) | ❌ | Event image |
| `registration_link` | Link | ❌ | Registration/ticket URL |
| `is_featured` | Boolean | ❌ | Highlight as featured |

---

### 4.15 Upcoming Events List Block

Container for displaying multiple events.

**Technical Name:** `upcoming_events_list`

| Field Name | Field Type | Required | Default | Notes |
|------------|------------|----------|---------|-------|
| `title` | Text | ❌ | - | Section title |
| `subtitle` | Textarea | ❌ | - | Section description |
| `events` | Blocks | ✅ | - | Contains `upcoming_event` blocks |
| `show_past_events` | Boolean | ❌ | `false` | Include past events |
| `max_events` | Number | ❌ | - | Limit displayed events |

---

### 4.16 Event Card Block

For linking to full event detail pages.

**Technical Name:** `event_card`

| Field Name | Field Type | Required | Notes |
|------------|------------|----------|-------|
| `title` | Text | ✅ | Event name |
| `description` | Textarea | ✅ | Short description |
| `featured_image` | Asset (Images) | ❌ | Card image |
| `event_date` | Date/Time | ✅ | Event date |
| `event_time` | Text | ✅ | Event time |
| `location` | Text | ✅ | Venue |
| `slug` | Text | ✅ | URL slug for `/events/[slug]` |
| `is_past` | Boolean | ❌ | Mark as past event |

---

### 4.17 Team Member Block

A team/staff profile card.

**Technical Name:** `team_member`

| Field Name | Field Type | Required | Notes |
|------------|------------|----------|-------|
| `name` | Text | ✅ | Full name |
| `title` | Text | ✅ | Position/role title |
| `bio` | Textarea | ❌ | Short biography |
| `photo` | Asset (Images) | ❌ | Profile photo |
| `email` | Text | ❌ | Contact email |
| `role` | Single Option | ✅ | `founder`, `executive`, `advisory` |

**Role Options:**
- `founder` - Founder Member (gold badge)
- `executive` - Executive Member (burgundy badge)
- `advisory` - Advisory Board (green badge)

---

## 5. Create Content Types (Folders)

Set up your content structure in Storyblok:

### Folder Structure

```
📁 Home (slug: "home")
   └── Content Type: page
   
📁 About (slug: "about")
   └── Content Type: page
   
📁 Events (slug: "events")
   └── Content Type: page
   └── 📁 [Individual Events as stories]
   
📁 News (slug: "news")
   └── Content Type: page
   └── 📁 [Individual Articles as stories]
   
📁 Gallery (slug: "gallery")
   └── Content Type: page
   
📁 Contact (slug: "contact")
   └── Content Type: page
   
📁 Membership (slug: "membership")
   └── Content Type: page
```

### Creating Folders

1. In **Content**, click **Create new** → **Folder**
2. Name the folder and set the slug
3. Set the default content type to `page`
4. Repeat for each section

---

## 6. Visual Editor Setup

Configure the Visual Editor for live preview editing.

### Configure Preview URL

1. Go to **Settings** → **Visual Editor**
2. Set the **Preview URL**: `https://localhost:3000/` (or your dev URL)
3. For production, update to your deployed URL

### Enable Live Preview in Next.js

Your codebase already includes the `StoryblokProvider`. Ensure it wraps your app in `src/app/layout.tsx`:

```tsx
import { StoryblokProvider } from '@/lib/storyblok';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StoryblokProvider>
          {children}
        </StoryblokProvider>
      </body>
    </html>
  );
}
```

---

## 7. Content Migration

### Homepage Example

1. Navigate to **Content** → **Home**
2. Open the story or create new
3. Add blocks to the `body` field:
   - Add `hero` or `hero_slideshow` block
   - Add `grid` with `feature` blocks
   - Add `card_grid` with `news_item` blocks
   - Add `upcoming_events_list` with `upcoming_event` blocks
   - Add `cta` block

### Sample Hero Block Content

```
title: "Welcome to Himalayan Sherpa Club"
subtitle: "Preserving Sherpa heritage and building community in Sonoma County"
tibetan_text: "བོད་སྐད་"
background_image: [upload mountain image]
primary_button_text: "Join Our Community"
primary_button_link: /membership
secondary_button_text: "Learn More"
secondary_button_link: /about
overlay_opacity: 60
height: large
```

---

## 8. Testing & Verification

### Checklist

- [ ] All blocks created in Block Library
- [ ] API tokens configured in `.env.local`
- [ ] Content structure (folders) created
- [ ] At least one page with content exists
- [ ] Visual Editor preview URL configured
- [ ] Local dev server running (`npm run dev`)
- [ ] No console errors related to Storyblok

### Testing Steps

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open Storyblok Visual Editor and navigate to a page

3. Verify live preview shows your content

4. Make an edit in Storyblok and confirm it reflects in preview

5. Publish changes and verify on production

### Troubleshooting

**"Component not found" errors:**
- Verify the technical name in Storyblok matches exactly with `src/lib/storyblok.tsx`
- Component names are case-sensitive and use underscores

**Images not loading:**
- Ensure you're using the Storyblok image URL
- Check that Next.js config allows Storyblok domain:

```js
// next.config.js
module.exports = {
  images: {
    domains: ['a.storyblok.com'],
  },
}
```

**API errors:**
- Verify your token is correct
- Check the region setting matches your space (US)
- Ensure content is published (not just draft)

---

## Component Technical Name Reference

| Display Name | Technical Name |
|--------------|----------------|
| Page | `page` |
| Hero | `hero` |
| Hero Slideshow | `hero_slideshow` |
| Hero Slide | `hero_slide` |
| Feature | `feature` |
| Grid | `grid` |
| Text Section | `text_section` |
| Card Grid | `card_grid` |
| Call to Action | `cta` |
| Image Gallery | `image_gallery` |
| Gallery | `gallery` |
| Gallery Image | `gallery_image` |
| News Item | `news_item` |
| News List | `news_list` |
| News Card | `news_card` |
| Upcoming Event | `upcoming_event` |
| Upcoming Events List | `upcoming_events_list` |
| Event Card | `event_card` |
| Team Member | `team_member` |

---

## Need Help?

- [Storyblok Documentation](https://www.storyblok.com/docs/guide/introduction)
- [Next.js + Storyblok Guide](https://www.storyblok.com/tp/nextjs-headless-cms-ultimate-tutorial)
- Check component implementations in `/src/components/storyblok/`

---

*Last updated: $(date)*
