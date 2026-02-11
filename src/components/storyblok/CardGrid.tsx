import { storyblokEditable, SbBlokData, StoryblokComponent } from '@storyblok/react';

interface CardGridProps {
  blok: {
    title?: string;
    subtitle?: string;
    cards: SbBlokData[];
    columns?: '2' | '3' | '4';
    background?: 'white' | 'cream' | 'dark';
    show_more_link?: {
      cached_url: string;
    };
    show_more_text?: string;
  };
}

export default function CardGrid({ blok }: CardGridProps) {
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

  return (
    <section
      {...storyblokEditable(blok)}
      className={`py-16 md:py-24 ${backgroundClasses[blok.background || 'cream']}`}
    >
      <div className="container-custom">
        {/* Header */}
        {(blok.title || blok.subtitle) && (
          <div className="text-center mb-12">
            {blok.subtitle && (
              <p className="text-burgundy-600 font-medium mb-2 uppercase tracking-wide text-sm">
                {blok.subtitle}
              </p>
            )}
            {blok.title && (
              <h2 className={`section-title ${blok.background === 'dark' ? 'text-cream-100' : ''}`}>
                {blok.title}
              </h2>
            )}
          </div>
        )}

        {/* Cards Grid */}
        <div className={`grid grid-cols-1 ${columnClasses[blok.columns || '3']} gap-8`}>
          {blok.cards?.map((card) => (
            <StoryblokComponent blok={card} key={card._uid} />
          ))}
        </div>

        {/* Show More Link */}
        {blok.show_more_link?.cached_url && blok.show_more_text && (
          <div className="text-center mt-12">
            <a
              href={`/${blok.show_more_link.cached_url}`}
              className="btn-secondary"
            >
              {blok.show_more_text}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
