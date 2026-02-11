import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';

interface ImageGalleryProps {
  blok: {
    title?: string;
    images: Array<{
      filename: string;
      alt: string;
      _uid: string;
    }>;
    columns?: '2' | '3' | '4';
  };
}

export default function ImageGallery({ blok }: ImageGalleryProps) {
  const columnClasses = {
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-2 lg:grid-cols-3',
    '4': 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section
      {...storyblokEditable(blok)}
      className="py-16 bg-cream-50"
    >
      <div className="container-custom">
        {blok.title && (
          <h2 className="section-title text-center mb-12">{blok.title}</h2>
        )}
        
        <div className={`grid grid-cols-1 ${columnClasses[blok.columns || '3']} gap-4`}>
          {blok.images?.map((image, index) => (
            <div
              key={image._uid || index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <Image
                src={image.filename}
                alt={image.alt || ''}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mountain-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
