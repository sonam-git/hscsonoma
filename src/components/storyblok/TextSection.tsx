import { storyblokEditable, renderRichText, SbBlokData } from '@storyblok/react';
import Image from 'next/image';

type TextSectionBlock = SbBlokData & {
  title?: string;
  subtitle?: string;
  content?: string | Record<string, unknown>;
  image?: {
    filename: string;
    alt: string;
  };
  image_position?: 'left' | 'right';
  background?: 'white' | 'cream' | 'dark';
  centered?: boolean;
};

interface TextSectionProps {
  blok: TextSectionBlock;
}

export default function TextSection({ blok }: TextSectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    cream: 'bg-cream-50',
    dark: 'bg-mountain-900 text-cream-100',
  };

  const hasImage = blok.image?.filename;
  const imageOnLeft = blok.image_position === 'left';
  const richTextContent = blok.content as Parameters<typeof renderRichText>[0] | undefined;

  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      className={`py-16 md:py-24 ${backgroundClasses[blok.background || 'white']}`}
    >
      <div className="container-custom">
        <div className={`${hasImage ? 'grid md:grid-cols-2 gap-12 items-center' : ''}`}>
          {/* Image (if on left) */}
          {hasImage && imageOnLeft && (
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={blok.image!.filename}
                alt={blok.image!.alt || ''}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className={blok.centered && !hasImage ? 'max-w-3xl mx-auto text-center' : ''}>
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
            {blok.content && (
              <div
                className={`prose prose-lg max-w-none ${
                  blok.background === 'dark' ? 'prose-invert' : 'prose-mountain'
                }`}
                dangerouslySetInnerHTML={{ __html: renderRichText(richTextContent) || '' }}
              />
            )}
          </div>

          {/* Image (if on right) */}
          {hasImage && !imageOnLeft && (
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={blok.image!.filename}
                alt={blok.image!.alt || ''}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
