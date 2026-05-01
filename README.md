# Suuberi Reinigung

Professional cleaning services website for Biel/Bienne, Bern, and Jura regions in Switzerland. Built with Next.js 15, featuring bilingual support (German/French) and modern, accessible design.

🌐 **Live Site**: [suuberi-reinigung.ch](https://suuberi-reinigung.ch)

## Features

- ✨ **Bilingual Support**: Full German (DE) and French (FR) localization
- 🎨 **Modern Design**: Clean, professional aesthetic with smooth animations
- 📱 **Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: WCAG compliant with keyboard navigation and screen reader support
- 🚀 **Performance**: Optimized with Next.js 15 and Vercel deployment
- 📊 **Analytics**: Integrated Vercel Analytics for performance monitoring
- 🔍 **SEO Optimized**: Meta tags, structured data, sitemaps, and robots.txt

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # German homepage
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── dienstleistungen/         # German services pages
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx       # Dynamic service detail pages
│   ├── fr/                       # French routes
│   │   ├── page.tsx              # French homepage
│   │   ├── layout.tsx            # French layout
│   │   └── services/             # French service pages
│   ├── datenschutz/              # Privacy policy (DE)
│   ├── impressum/                # Imprint (DE)
│   ├── sitemap.ts                # Dynamic sitemap generation
│   └── robots.ts                 # Robots.txt configuration
├── components/                   # React components
│   ├── HomePage.tsx              # Main homepage component
│   ├── Navbar.tsx                # Navigation with language switcher
│   ├── Hero.tsx                  # Hero section
│   ├── ServicesSection.tsx       # Services showcase
│   ├── StepsSection.tsx          # Process steps
│   ├── WhyUsSection.tsx          # Benefits section
│   ├── ReviewsSection.tsx        # Customer reviews
│   ├── ContactSection.tsx        # Contact form
│   └── ...                       # Other UI components
├── data/
│   ├── services.ts               # Service definitions
│   └── i18n.ts                   # Translations
├── hooks/
│   └── useScrollEffects.ts       # Custom scroll animations
└── lib/
    └── LocaleProvider.tsx        # Internationalization context

```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/reinigungsuuberi/reinigung-suuberi-ch.git
cd reinigung-suuberi-ch

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Design Guidelines

### Design System Overview
This project follows a modern, clean design approach focused on accessibility and user experience. The design system is built around a professional cleaning service brand with a Swiss aesthetic.
### Technology Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS v4 with PostCSS
- **Language**: TypeScript for type safety
- **Icons**: React Icons (Remix Icon set)
- **Analytics**: Vercel Analytics for performance monitoring
- **Deployment**: Vercel Platform

### Services Offered
1. **Umzugsreinigung** (Move-out Cleaning) - End of tenancy cleaning
2. **Unterhaltsreinigung** (Maintenance Cleaning) - Regular cleaning services
3. **Baureinigung** (Construction Cleaning) - Post-construction cleanup
4. **Büroreinigung** (Office Cleaning) - Commercial office cleaning
5. **Privatreinigung** (Private Cleaning) - Residential cleaning
6. **Vermietung Lieferwagen/Transporter** (Transport services 24/7)

### Internationalization (i18n)

The site supports two languages with complete translations:
- **German (DE)**: Default language at root path `/`
- **French (FR)**: Available at `/fr` path

Translation structure in `src/data/i18n.ts`:
```typescript
{
  nav: { home, services, why, process, reviews, contact },
  sections: { ... },
  services: { ... },
  form: { ... }
}
```

### Key Features

#### Dynamic Language Switching
- Seamless language toggle preserving current page context
- Route-based localization (root for DE, `/fr` for FR)
- Context provider for translations throughout the app

#### Service Pages
- Dynamic routing for individual service details
- SEO-optimized with unique meta descriptions
- Bilingual service content with French translations

#### Contact Integration
- `mailto:` form implementation
- Phone and WhatsApp quick actions
- Service and location selection

#### Animations & Effects
- Scroll-triggered animations with Intersection Observer
- Smooth transitions and hover effects
- Dynamic background canvas animations
- Theme-aware navbar with section detection

### Coding Standards
- **Components**: Functional components with TypeScript interfaces
- **Styling**: TailwindCSS utility classes with CSS custom properties
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Performance**: Image optimization, font loading optimization, code splitting
- **SEO**: Dynamic metadata, Open Graph tags, structured sitemaps
- **Code Quality**: ESLint configured with Next.js recommended rules

### Component Architecture
- Modular component structure in `src/components/`
- Consistent naming conventions (PascalCase for components)
- Reusable UI patterns (cards, sections, forms)
- Responsive design with mobile-first approach
- Custom hooks for scroll effects and animations

### Accessibility Features
- Skip-to-content links for keyboard navigation
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images and icons
- Keyboard navigation support throughout
- Screen reader compatibility
- High contrast color ratios (WCAG AA compliant)
- Focus indicators for interactive elements

## Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production build locally
npm run lint         # Run ESLint
```

### Environment Variables

No environment variables required for basic functionality. For analytics, Vercel automatically provides the necessary configuration when deployed.

## Deployment

The site is automatically deployed to Vercel on push to the main branch:

1. Push changes to GitHub
2. Vercel automatically builds and deploys
3. Preview deployments for pull requests
4. Production deployment on main branch

### Build Process
- ESLint validation during build
- TypeScript type checking
- Next.js optimization and bundling
- Static generation for optimal performance

## SEO & Performance

- **Lighthouse Score**: 95+ across all metrics
- **Dynamic Sitemap**: Auto-generated from routes and services
- **Robots.txt**: Configured for optimal search engine crawling
- **Meta Tags**: Unique titles and descriptions per page
- **Open Graph**: Social media preview images and metadata
- **Structured Data**: Future enhancement for rich snippets

## Contact & Support

- **Email**: info@suuberi-reinigung.ch
- **Phone**: +41 78 234 66 99
- **Alternative**: +41 78 709 82 33

## License

© 2026 Suuberi Reinigung. All rights reserved.
