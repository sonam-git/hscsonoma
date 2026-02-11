import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';

interface TeamMemberProps {
  blok: {
    name: string;
    title: string;
    bio?: string;
    photo?: {
      filename: string;
      alt: string;
    };
    email?: string;
    role: 'founder' | 'executive' | 'advisory';
  };
}

export default function TeamMember({ blok }: TeamMemberProps) {
  const roleColors = {
    founder: 'bg-gold-100 text-gold-800',
    executive: 'bg-burgundy-100 text-burgundy-800',
    advisory: 'bg-forest-100 text-forest-800',
  };

  const roleLabels = {
    founder: 'Founder Member',
    executive: 'Executive Member',
    advisory: 'Advisory Board',
  };

  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
    >
      {/* Photo */}
      <div className="relative aspect-square overflow-hidden">
        {blok.photo?.filename ? (
          <Image
            src={blok.photo.filename}
            alt={blok.photo.alt || blok.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-cream-200 to-cream-300 flex items-center justify-center">
            <svg className="w-24 h-24 text-cream-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
        
        {/* Role Badge */}
        <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full ${roleColors[blok.role]}`}>
          {roleLabels[blok.role]}
        </span>
      </div>

      {/* Info */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-mountain-900 mb-1">
          {blok.name}
        </h3>
        <p className="text-burgundy-600 font-medium mb-3">
          {blok.title}
        </p>
        
        {blok.bio && (
          <p className="text-mountain-600 text-sm line-clamp-3 mb-4">
            {blok.bio}
          </p>
        )}

        {blok.email && (
          <a
            href={`mailto:${blok.email}`}
            className="inline-flex items-center justify-center text-sm text-mountain-500 hover:text-burgundy-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact
          </a>
        )}
      </div>
    </div>
  );
}
