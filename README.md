# Himalayan Sherpa Club of Sonoma - Website

A modern, fast, and SEO-optimized website for the Himalayan Sherpa Club of Sonoma, built with Next.js 14+, TypeScript, Tailwind CSS, and Storyblok CMS.

## 🏔️ About

The Himalayan Sherpa Club of Sonoma is a 501(c)(3) non-profit organization dedicated to preserving and promoting Sherpa culture, heritage, and values in the North Bay Area of California. This website serves as the digital home for the community, featuring events, news, membership information, and cultural resources.

## 🚀 Features

- **Next.js 14+** with App Router for optimal performance and SEO
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling with custom wine country + mountain theme
- **Storyblok CMS** for content management with live preview
- **SendGrid** integration for contact and membership forms
- **Dark/Light Theme** support with system preference detection
- **SEO Optimized** with meta tags, OG tags, sitemap, and robots.txt
- **Fully Responsive** design for all devices
- **Accessibility** focused implementation

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About section pages
│   ├── api/               # API routes (contact, membership)
│   ├── events/            # Events pages
│   ├── news/              # News pages
│   ├── contact/           # Contact page
│   ├── join-us/           # Membership page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── forms/             # Form components
│   ├── layout/            # Header, Footer
│   └── storyblok/         # Storyblok CMS components
├── lib/                   # Utility libraries
│   ├── storyblok.tsx      # Storyblok configuration
│   └── storyblok-client.ts # Storyblok API client
└── styles/                # Global styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Storyblok account (for CMS)
- SendGrid account (for email)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/hscsonoma.git
   cd hscsonoma
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` with your actual values:
   - `STORYBLOK_API_TOKEN` - Your Storyblok API token
   - `SENDGRID_API_KEY` - Your SendGrid API key
   - `ADMIN_EMAIL` - Email to receive form submissions
   - `FROM_EMAIL` - Email address for outgoing emails

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run postbuild` - Generate sitemap (runs after build)

## 🎨 Design System

### Colors

The design uses a wine country + Himalayan mountain theme:

- **Wine** - Primary brand color (burgundy tones)
- **Mountain** - Neutral grays for text and backgrounds
- **Earth** - Warm cream/beige for backgrounds
- **Gold** - Accent color for CTAs
- **Forest** - Secondary accent (green tones)

### Typography

- **Display Font**: Playfair Display - For headings and titles
- **Body Font**: Inter - For body text and UI elements

## 🔧 Configuration

### Storyblok Setup

1. Create a new Storyblok space
2. Add the following content types:
   - Page
   - News Post
   - Event
   - Team Member
3. Configure the preview URL in Storyblok settings
4. Add your API token to `.env.local`

### SendGrid Setup

1. Create a SendGrid account
2. Verify your sender email domain
3. Create an API key with "Mail Send" permissions
4. Add the API key to `.env.local`

## 📱 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, about, events, news |
| `/about` | About overview page |
| `/about/introduction` | Mission and introduction |
| `/about/history` | Club history timeline |
| `/about/culture` | Sherpa culture and traditions |
| `/about/founding-families` | Founding family stories |
| `/about/functional-bodies` | Leadership and committees |
| `/events` | Upcoming and past events |
| `/news` | News and community stories |
| `/news/[slug]` | Individual news articles |
| `/contact` | Contact form |
| `/join-us` | Membership application |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

## 📄 License

This project is proprietary and maintained by the Himalayan Sherpa Club of Sonoma.

## 📞 Contact

- Website: [himalayansherpaclubsonoma.org](https://www.himalayansherpaclubsonoma.org)
- Email: info@himalayansherpaclubsonoma.org
- Facebook: [@himalayansherpaclubsonoma](https://facebook.com/himalayansherpaclubsonoma)
