import StoryblokClient, { ISbStoriesParams } from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory',
  },
});

export async function getStory(slug: string, params: ISbStoriesParams = {}) {
  try {
    const { data } = await Storyblok.get(`cdn/stories/${slug}`, {
      version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
      ...params,
    });
    return data.story;
  } catch (error) {
    console.error('Error fetching story:', error);
    return null;
  }
}

export async function getStories(params: ISbStoriesParams = {}) {
  try {
    const { data } = await Storyblok.get('cdn/stories', {
      version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
      ...params,
    });
    return data.stories;
  } catch (error) {
    console.error('Error fetching stories:', error);
    return [];
  }
}

export async function getNewsArticles(page: number = 1, perPage: number = 10) {
  return getStories({
    starts_with: 'news/',
    sort_by: 'first_published_at:desc',
    per_page: perPage,
    page,
    is_startpage: false,
  });
}

export async function getEvents(params: { past?: boolean } = {}) {
  const stories = await getStories({
    starts_with: 'events/',
    sort_by: 'content.event_date:asc',
    is_startpage: false,
  });

  const now = new Date();
  
  if (params.past === true) {
    return stories.filter((story: any) => new Date(story.content.event_date) < now);
  } else if (params.past === false) {
    return stories.filter((story: any) => new Date(story.content.event_date) >= now);
  }
  
  return stories;
}

export async function getTeamMembers(role?: 'founder' | 'executive' | 'advisory') {
  const stories = await getStories({
    starts_with: 'team/',
    is_startpage: false,
  });

  if (role) {
    return stories.filter((story: any) => story.content.role === role);
  }

  return stories;
}

export function getImageUrl(image: { filename: string } | undefined, options?: string) {
  if (!image?.filename) return '/images/placeholder.jpg';
  
  const baseUrl = image.filename;
  if (options) {
    return `${baseUrl}/m/${options}`;
  }
  return baseUrl;
}

export default Storyblok;
