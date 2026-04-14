import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-mountain-900 to-green-800">
      <div className="flex flex-col items-center gap-6">
        {/* HSC Logo with pulse animation */}
        <div className="relative">
          {/* Glowing ring behind logo */}
          <div className="absolute inset-0 rounded-full bg-gold-400/20 blur-xl animate-pulse"></div>
          
          {/* Logo container with spinning border */}
          <div className="relative w-28 h-28 rounded-full bg-white/10 backdrop-blur-sm p-2">
            {/* Spinning border */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-gold-400 border-r-gold-400/50 animate-spin"></div>
            
            {/* Logo */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-white/90 flex items-center justify-center">
              <Image
                src="/images/logos/HSC-logo-dark-border.png"
                alt="HSC Logo"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Tibetan Text */}
        <p className="font-tibetan text-lg text-gold-400 animate-pulse">
          ༄༅། ཧི་མ་ལ་ཡ་ཤར་པ་སྐྱིད་སྡུག
        </p>

        {/* Club Name */}
        <div className="text-center">
          <h1 className="jaini-purva-regular text-2xl tracking-wider uppercase text-cream-50">
            Himalayan Sherpa Club
          </h1>
          <p className="text-cream-200/70 text-sm mt-1">of Sonoma</p>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden mt-2">
          <div className="h-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 rounded-full animate-loading-bar"></div>
        </div>

        {/* Loading text */}
        <p className="text-cream-200/60 text-sm">Loading...</p>
      </div>
    </div>
  );
}
