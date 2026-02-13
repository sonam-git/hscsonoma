# Quick Storyblok Setup for HSC Homepage

This is a simplified guide to get **Hero Image**, **Upcoming Events**, **News**, and **Gallery** working with Storyblok.

> **💡 Your Setup:** You're using **nested blocks** - one story (events, news, gallery) that contains multiple items inside.
> This is different from creating separate stories for each item, but the website supports both approaches!

---

## 1. Create Your Storyblok Space

1. Go to [storyblok.com](https://app.storyblok.com) and sign up/login
2. Create a new space called **"HSC Sonoma"**
3. **Important**: Select **Region: United States**

---

## 2. Get Your API Token

1. Go to **Settings** → **Access Tokens**
2. Copy the **Preview** token
3. Add to your `.env.local`:

```bash
STORYBLOK_API_TOKEN=your_preview_token_here
NEXT_PUBLIC_STORYBLOK_API_TOKEN=your_preview_token_here
```

---

## 3. Create These 4 Blocks in Block Library

Navigate to **Block Library** in Storyblok sidebar.

### Block 1: Hero Settings (`hero_settings`)

For homepage hero background image.

**Block Type:** Universal

| Field | Type | Required |
|-------|------|----------|
| `background_image` | Asset (Images) | ✅ |

**Steps:**
1. Click "New Block"
2. Name: `Hero Settings`
3. Technical name: `hero_settings`
4. Block type: **Universal**
5. Add field: `background_image` → Asset → Images only
6. Save

---

### Block 2: Upcoming Event (`upcoming_event`)

**Block Type:** Content Type (each event is a standalone entry)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | Text | ✅ | Event name |
| `description` | Textarea | ✅ | Event description |
| `date` | Date/Time | ✅ | Event date |
| `time` | Text | ✅ | e.g., "6:00 PM - 9:00 PM" |
| `venue` | Text | ✅ | Location |
| `price` | Text | ❌ | e.g., "Free", "$25" |
| `image` | Asset (Images) | ❌ | Event image |
| `registration_link` | Link | ❌ | Registration URL |
| `is_featured` | Boolean | ❌ | Featured event? |

**Steps:**
1. Click "New Block"
2. Name: `Upcoming Event`
3. Technical name: `upcoming_event`
4. Block type: **Content type**
5. Add all fields above
6. Save

---

### Block 3: News Item (`news_item`)

**Block Type:** Content Type (each article is a standalone entry)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | Text | ✅ | Article title |
| `description` | Textarea | ✅ | Excerpt |
| `date` | Date/Time | ✅ | Publish date |
| `image` | Asset (Images) | ❌ | Featured image |
| `category` | Single Option | ❌ | Community, Events, Culture, Announcements |
| `external_url` | Link | ❌ | Link to full article |
| `is_featured` | Boolean | ❌ | Featured article? |

**Steps:**
1. Click "New Block"
2. Name: `News Item`
3. Technical name: `news_item`
4. Block type: **Content type**
5. Add all fields above
6. For `category`, add options: Community, Events, Culture, Announcements
7. Save

---

### Block 4: Gallery Image (`gallery_image`)

**Block Type:** Content Type (each image is a standalone entry)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `image` | Asset (Images) | ✅ | The photo |
| `caption` | Text | ❌ | Photo caption |
| `category` | Single Option | ✅ | cultural, community, sports |
| `date` | Date | ❌ | When taken |

**Steps:**
1. Click "New Block"
2. Name: `Gallery Image`
3. Technical name: `gallery_image`
4. Block type: **Content type**
5. Add all fields above
6. For `category`, add options: cultural, community, sports
7. Save

---

## 4. Create Content Folders

In the **Content** section:

### Create Folders

1. **events/** - For upcoming events
   - Create folder: `events`
   - Default content type: `upcoming_event`

2. **news/** - For news articles
   - Create folder: `news`
   - Default content type: `news_item`

3. **gallery/** - For gallery images
   - Create folder: `gallery`
   - Default content type: `gallery_image`

4. **settings/** - For site settings
   - Create folder: `settings`
   - Create story: `hero` with `hero_settings` block

---

## 5. Add Your Content (Nested Blocks Approach)

Your current setup uses **nested blocks** - each content type (events, news, gallery) is a single story with multiple blocks inside.

### Add Hero Background (already working ✅)
- Hero image is managed in `settings` story
- No changes needed here

### Add Multiple Events

1. Go to **Content** → Click on **events** story
2. Find the **blocks field** (e.g., "Event Block")
3. Click **+ Add block** → Select `Upcoming Event`
4. Fill in event details (title, date, time, venue, description)
5. **Repeat step 3-4 for each additional event!**
6. **Save & Publish** the events story

**Your structure:**
```
� events (story with Upcoming Event content type)
└── Event Block (blocks field containing):
    ├── Upcoming Event: "Annual Lhosar 2026"
    ├── Upcoming Event: "Annual Phangi 2026"
    ├── Upcoming Event: "Community Picnic"
    └── Upcoming Event: "Cultural Night"
```

### Add Multiple News Articles

1. Go to **Content** → Click on **news** story
2. Find the **blocks field** (e.g., "News Block")
3. Click **+ Add block** → Select `News Item`
4. Fill in article details (title, description, date, category, image)
5. **Repeat step 3-4 for each additional article!**
6. **Save & Publish** the news story

**Your structure:**
```
� news (story with News content type)
└── News Block (blocks field containing):
    ├── News Item: "Fundraising Success"
    ├── News Item: "K2 Summit Story"
    └── News Item: "Benefit Event"
```

### Add Multiple Gallery Images

1. Go to **Content** → Click on **Gallery** story
2. Find the **blocks field** (e.g., "Gallery Block")
3. Click **+ Add block** → Select `Gallery Image`
4. Upload image, set category, add caption
5. **Repeat step 3-4 for each additional image!**
6. **Save & Publish** the Gallery story

**Your structure:**
```
� Gallery (story with Gallery Image content type)
└── Gallery Block (blocks field containing):
    ├── Gallery Image: "Losar Photo 1"
    ├── Gallery Image: "Losar Photo 2"
    ├── Gallery Image: "Community Event"
    └── Gallery Image: "Sports Day"
```

---

## 6. Verify It Works

1. Restart your dev server: `npm run dev`
2. Open your homepage
3. Content should now load from Storyblok!

**What gets fetched:**
- **Hero**: 1 background image from `settings/hero`
- **Events**: Up to 4 upcoming events (sorted by date, only future events)
- **News**: Up to 3 most recent news articles (sorted by date descending)
- **Gallery**: Up to 12 gallery images

**Note:** If Storyblok has no content, the fallback static data will be shown instead.

---

## How Many Items Show on the Homepage?

| Section | Max Items Shown | Sorted By |
|---------|-----------------|-----------|
| Hero | 1 image | N/A |
| Events | 4 events | Date (soonest first) |
| News | 3 articles | Date (newest first) |
| Gallery | 12 images | Date added |

> **Tip:** You can create more items than the max shown. The website will automatically pick the most relevant ones!

---

## Content Structure (Your Nested Blocks Setup)

```
📁 Content
├── � settings (Hero Settings) ← Hero background image ✅
├── � events (Upcoming Event) ← Contains multiple event blocks
│   └── [Event Block field with multiple Upcoming Event blocks]
├── � news (News) ← Contains multiple news blocks
│   └── [News Block field with multiple News Item blocks]
└── � Gallery (Gallery Image) ← Contains multiple gallery blocks
    └── [Gallery Block field with multiple Gallery Image blocks]
```

> **Key:** Each story contains a **blocks field** that holds multiple nested blocks. Add more blocks to show more items!

---

## How It Works

Your `page.tsx` now:

1. **Fetches data from Storyblok** on every request (with 60s cache)
2. **Falls back to static data** if Storyblok is empty or errors

```tsx
// This happens server-side
const [heroData, newsData, eventsData] = await Promise.all([
  getHomeHero(),      // → Hero background image
  getHomeNews(3),     // → Latest 3 news items
  getHomeEvents(4),   // → Next 4 upcoming events
]);
```

---

## Need Gallery on Homepage?

To add the gallery section, import and use:

```tsx
import { getHomeGallery } from '@/lib/storyblok-home';

// In your fetch:
const galleryData = await getHomeGallery(12);
```

Then render `galleryData` in a gallery component.

---

## Troubleshooting

**Content not showing?**
- Make sure content is **Published** (not just saved)
- Check that folder paths match: `events/`, `news/`, `gallery/`, `settings/hero`
- Restart dev server after adding `.env.local` changes

**Only showing 1 item when you added multiple?**
- Make sure you're adding **blocks** inside the story (not creating separate stories)
- Each block inside the blocks field = one item
- Check that all blocks have required fields filled in
- Make sure the story is **Published** (not just saved)

**Images not loading?**
- Storyblok domain is already configured in `next.config.js`
- Make sure image URLs start with `https://a.storyblok.com`

**Getting fallback data?**
- This means Storyblok API returned empty/error
- Check your API token is correct
- Check content is published

**Events not showing up?**
- Events must have a **future date** to appear (past events are filtered out)
- Make sure the `date` field is set correctly

---

## Summary: How to Add Multiple Items (Nested Blocks)

| To Add More... | Do This |
|----------------|---------|
| **Events** | Open `events` story → Add another `Upcoming Event` block → Save & Publish |
| **News Articles** | Open `news` story → Add another `News Item` block → Save & Publish |
| **Gallery Images** | Open `Gallery` story → Add another `Gallery Image` block → Save & Publish |

**Remember:** Each block inside a story = one item on your homepage. Add more blocks to show more items!
