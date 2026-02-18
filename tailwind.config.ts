import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    // Custom breakpoints: small screen is <= 820px
    screens: {
      'sm': '640px',    // Small devices (kept for fine-tuning)
      'md': '821px',    // Medium devices start at 821px (820px and below = small screen)
      'lg': '1024px',   // Large devices
      'xl': '1280px',   // Extra large devices
      '2xl': '1536px',  // 2X Extra large devices
    },
    extend: {
      colors: {
        // Wine Country Palette
        burgundy: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a9bb',
          400: '#ec7896',
          500: '#e04d73',
          600: '#cc2d5a',
          700: '#ab2049',
          800: '#8f1d40',
          900: '#7a1c3b',
          950: '#450a1d',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#d4a005',
          600: '#b8860b',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfbf7',
          200: '#faf5eb',
          300: '#f5ead8',
          400: '#eedcbc',
          500: '#e5c99f',
          600: '#d4a96d',
          700: '#c08a4a',
          800: '#9f6f3c',
          900: '#825a34',
          950: '#462e19',
        },
        himalayan: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36aaf8',
          500: '#0c8ee9',
          600: '#0070c7',
          700: '#0159a1',
          800: '#064c85',
          900: '#0b406e',
          950: '#072949',
        },
        mountain: {
          50: '#f6f6f7',
          100: '#e2e3e5',
          200: '#c4c5cb',
          300: '#9fa0a9',
          400: '#7b7c87',
          500: '#60616c',
          600: '#4c4d56',
          700: '#3f4047',
          800: '#35353b',
          900: '#2e2f33',
          950: '#1a1a1d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        tibetan: ['Noto Serif Tibetan', 'serif'],
      },
      backgroundImage: {
        'mountain-pattern': "url('/images/mountain-silhouette.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-wine': 'linear-gradient(135deg, #7a1c3b 0%, #ab2049 50%, #450a1d 100%)',
        'gradient-himalayan': 'linear-gradient(180deg, #072949 0%, #0b406e 50%, #064c85 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
