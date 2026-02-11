import { storyblokEditable, SbBlokData, StoryblokComponent } from '@storyblok/react';

interface PageProps {
  blok: {
    body: SbBlokData[];
    seo_title?: string;
    seo_description?: string;
  };
}

export default function Page({ blok }: PageProps) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
