# Suuberi Reinigung
H
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Design Guidelines

### Design System Overview
This project follows a modern, clean design approach focused on accessibility and user experience. The design system is built around a professional cleaning service brand with a Swiss aesthetic.

### Color Palette
The project uses a carefully selected color scheme defined in CSS custom properties:

- **Primary (Green)**: `#2E7D32` - Main brand color, used for CTAs and primary elements
- **Secondary (Light Blue)**: `#4FC3F7` - Supporting color for secondary actions
- **Accent (Yellow)**: `#FDD835` - Highlight color for important information
- **Background**: `#FAFAFA` - Light, clean background
- **Foreground**: `#333333` - Primary text color
- **Surface**: `#FFFFFF` - Card and component backgrounds
- **Muted**: `#6b7280` - Secondary text and subtle elements

### Typography
- **Primary Font**: Inter (Google Fonts) - Clean, modern sans-serif optimized for web
- **Font Display**: `swap` for optimal loading performance
- **Language**: German (de_CH locale) with proper typography support

### Technology Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS v4 with PostCSS
- **Language**: TypeScript for type safety
- **Icons**: React Icons for consistent iconography
- **Analytics**: Vercel Analytics for performance monitoring

### Coding Standards
- **Components**: Functional components with TypeScript interfaces
- **Styling**: TailwindCSS classes only (no custom CSS unless necessary)
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support
- **Performance**: Next.js optimizations, font optimization, image optimization
- **SEO**: Structured data, meta tags, Open Graph, Twitter Cards

### Component Architecture
- Modular component structure in `src/components/`
- Consistent naming conventions (PascalCase for components)
- Reusable UI patterns (cards, sections, forms)
- Responsive design with mobile-first approach

### Accessibility Features
- Skip-to-content links
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
