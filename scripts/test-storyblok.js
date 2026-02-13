// Run this with: node scripts/test-storyblok.js
// Make sure to set STORYBLOK_API_TOKEN environment variable first

const StoryblokClient = require('storyblok-js-client');

const token = process.env.STORYBLOK_API_TOKEN || process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN;

if (!token) {
  console.log('❌ No API token found. Set STORYBLOK_API_TOKEN environment variable.');
  process.exit(1);
}

const Storyblok = new StoryblokClient({
  accessToken: token,
  region: process.env.STORYBLOK_REGION || 'us',
});

async function testStoryblok() {
  console.log('🔍 Testing Storyblok connection...\n');

  // 1. List all stories
  console.log('=== ALL STORIES ===');
  try {
    const allStories = await Storyblok.get('cdn/stories', { cv: Date.now() });
    console.log(`Found ${allStories.data.stories.length} stories:\n`);
    
    for (const story of allStories.data.stories) {
      console.log(`📄 ${story.full_slug}`);
      console.log(`   Component: ${story.content?.component}`);
      console.log(`   Content keys: ${Object.keys(story.content || {}).join(', ')}`);
      console.log('');
    }
  } catch (e) {
    console.log('Error listing stories:', e.message);
  }

  // 2. Get events story specifically
  console.log('\n=== EVENTS STORY ===');
  try {
    const eventsStory = await Storyblok.get('cdn/stories/events', { cv: Date.now() });
    console.log('Events story content:');
    console.log(JSON.stringify(eventsStory.data.story.content, null, 2));
  } catch (e) {
    console.log('Error fetching events story:', e.message);
  }

  // 3. Get news story specifically
  console.log('\n=== NEWS STORY ===');
  try {
    const newsStory = await Storyblok.get('cdn/stories/news', { cv: Date.now() });
    console.log('News story content:');
    console.log(JSON.stringify(newsStory.data.story.content, null, 2));
  } catch (e) {
    console.log('Error fetching news story:', e.message);
  }

  // 4. Get Gallery story specifically
  console.log('\n=== GALLERY STORY ===');
  try {
    const galleryStory = await Storyblok.get('cdn/stories/gallery', { cv: Date.now() });
    console.log('Gallery story content:');
    console.log(JSON.stringify(galleryStory.data.story.content, null, 2));
  } catch (e) {
    // Try capitalized version
    try {
      const galleryStory = await Storyblok.get('cdn/stories/Gallery', { cv: Date.now() });
      console.log('Gallery story content (from /Gallery):');
      console.log(JSON.stringify(galleryStory.data.story.content, null, 2));
    } catch (e2) {
      console.log('Error fetching gallery story:', e.message);
    }
  }
}

testStoryblok().catch(console.error);
