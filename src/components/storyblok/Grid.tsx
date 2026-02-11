import { storyblokEditable, SbBlokData, StoryblokComponent } from '@storyblok/react';

interface GridProps {
  blok: {
    columns: '2' | '3' | '4';
    items: SbBlokData[];
    background?: 'white' | 'cream' | 'dark';
    padding?: 'small' | 'medium' | 'large';
  };
}

export default function Grid({ blok }: GridProps) {
  const columnClasses = {
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-2 lg:grid-cols-3',
    '4': 'md:grid-cols-2 lg:grid-cols-4',
  };

  const backgroundClasses = {
    white: 'bg-white',
    cream: 'bg-cream-50',
    dark: 'bg-mountain-900',
  };

  const paddingClasses = {
    small: 'py-12',
    medium: 'py-16',
    large: 'py-24',
  };

  return (
    <section
      {...storyblokEditable(blok)}
      className={`${backgroundClasses[blok.background || 'cream']} ${paddingClasses[blok.padding || 'medium']}`}
    >
      <div className="container-custom">
        <div className={`grid grid-cols-1 ${columnClasses[blok.columns]} gap-8`}>
          {blok.items?.map((item) => (
            <StoryblokComponent blok={item} key={item._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
