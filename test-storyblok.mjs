// Test script to verify Storyblok API token
const token = 'Vh35iNkFipBbd1955eRWUwtt';

async function testAPI() {
  console.log('Testing Storyblok API...\n');
  
  // Test US region
  console.log('1. Testing US region (api.storyblok.com):');
  try {
    const usResponse = await fetch(`https://api.storyblok.com/v2/cdn/stories?token=${token}&version=published`);
    const usData = await usResponse.json();
    console.log('   Status:', usResponse.status);
    console.log('   Response:', JSON.stringify(usData).substring(0, 200));
  } catch (e) {
    console.log('   Error:', e.message);
  }
  
  console.log('\n2. Testing EU region (api-eu.storyblok.com):');
  try {
    const euResponse = await fetch(`https://api-eu.storyblok.com/v2/cdn/stories?token=${token}&version=published`);
    const euData = await euResponse.json();
    console.log('   Status:', euResponse.status);
    console.log('   Response:', JSON.stringify(euData).substring(0, 200));
  } catch (e) {
    console.log('   Error:', e.message);
  }
  
  // Test with draft version
  console.log('\n3. Testing with version=draft (US):');
  try {
    const draftResponse = await fetch(`https://api.storyblok.com/v2/cdn/stories?token=${token}&version=draft`);
    const draftData = await draftResponse.json();
    console.log('   Status:', draftResponse.status);
    console.log('   Response:', JSON.stringify(draftData).substring(0, 200));
  } catch (e) {
    console.log('   Error:', e.message);
  }
}

testAPI();
