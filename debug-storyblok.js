// Debug test - checking Storyblok API directly
const { default: StoryblokClient } = require('storyblok-js-client');

const token = 'Vh35iNkFipBbd1955eRWUwtt';

// Test 1: Direct fetch (known working)
async function testDirectFetch() {
  console.log('=== TEST 1: Direct fetch API ===');
  const res = await fetch(`https://api.storyblok.com/v2/cdn/stories?token=${token}&version=published`);
  const data = await res.json();
  console.log('Direct fetch status:', res.status);
  console.log('Stories count:', data.stories?.length || 0);
  if (data.stories?.length > 0) {
    console.log('Story slugs:', data.stories.map(s => s.slug));
  }
}

// Test 2: Storyblok client with US region
async function testStoryblokClientUS() {
  console.log('\n=== TEST 2: Storyblok Client (US region) ===');
  const client = new StoryblokClient({
    accessToken: token,
    region: 'us',
  });
  
  try {
    const res = await client.get('cdn/stories', { version: 'published' });
    console.log('Client US - Success! Stories:', res.data.stories?.length || 0);
  } catch (e) {
    console.log('Client US - Error:', e.message, e.response);
  }
}

// Test 3: Storyblok client with EU region (should fail)
async function testStoryblokClientEU() {
  console.log('\n=== TEST 3: Storyblok Client (EU region) ===');
  const client = new StoryblokClient({
    accessToken: token,
    region: 'eu',
  });
  
  try {
    const res = await client.get('cdn/stories', { version: 'published' });
    console.log('Client EU - Success! Stories:', res.data.stories?.length || 0);
  } catch (e) {
    console.log('Client EU - Error:', e.message, e.response);
  }
}

// Test 4: Storyblok client with draft (should fail with public token)
async function testStoryblokClientDraft() {
  console.log('\n=== TEST 4: Storyblok Client (draft version) ===');
  const client = new StoryblokClient({
    accessToken: token,
    region: 'us',
  });
  
  try {
    const res = await client.get('cdn/stories', { version: 'draft' });
    console.log('Client Draft - Success! Stories:', res.data.stories?.length || 0);
  } catch (e) {
    console.log('Client Draft - Error:', e.message, e.response);
  }
}

// Test 5: Check environment variable
async function testEnvVar() {
  console.log('\n=== TEST 5: Environment Variables ===');
  console.log('STORYBLOK_API_TOKEN:', process.env.STORYBLOK_API_TOKEN || '(not set)');
  console.log('NEXT_PUBLIC_STORYBLOK_API_TOKEN:', process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN || '(not set)');
  console.log('STORYBLOK_REGION:', process.env.STORYBLOK_REGION || '(not set, defaults to us)');
}

async function runAll() {
  await testEnvVar();
  await testDirectFetch();
  await testStoryblokClientUS();
  await testStoryblokClientEU();
  await testStoryblokClientDraft();
}

runAll().catch(console.error);
