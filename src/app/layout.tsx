import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { LocaleProviderWrapper } from "@/components/LocaleProviderWrapper";
import { SkipLink } from "@/components/SkipLink";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suuberi-reinigung.ch"),
  title: {
    default:
      "Suuberi Reinigung | Reinigung Biel, Bern, Jura – Hauswartung & Endreinigung",
    template: "%s | Suuberi Reinigung",
  },
  description:
    "Suuberi – professionelle Reinigung und Hauswartung in Biel, Bern und Jura. Endreinigung, Unterhaltsreinigung, Industriereinigung, Fenster- & Fassadenreinigung.",
  keywords: [
    "Reinigung Biel",
    "Reinigung Bern",
    "Reinigung Jura",
    "Hauswartung Bern",
    "Endreinigung Biel",
    "Bauendreinigung",
    "Unterhaltsreinigung",
    "Industriereinigung",
    "Fensterreinigung",
    "Fassadenreinigung",
    "Spezialreinigung",
    "Gartenpflege",
  ],
  alternates: {
    canonical: "/",
    languages: {
      de: "https://suuberi-reinigung.ch",
      fr: "https://suuberi-reinigung.ch/fr",
      "x-default": "https://suuberi-reinigung.ch",
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://suuberi-reinigung.ch",
    title:
      "Suuberi Reinigung – Mehr als sauber. Reinigung und Hauswartung in der Schweiz",
    description:
      "Professionelle Reinigung in Biel, Bern und Jura. Endreinigung, Unterhalt, Industrie, Fenster & Fassaden.",
    siteName: "Suuberi Reinigung",
    locale: "de_CH",
    images: [
      {
        url: "/img/suuberi-logo-schwarz.png",
        width: 512,
        height: 512,
        alt: "Suuberi Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Suuberi Reinigung – Mehr als sauber. Reinigung und Hauswartung in der Schweiz",
    description:
      "Professionelle Reinigung in Biel, Bern und Jura.",
    images: [
      {
        url: "/img/suuberi-logo-schwarz.png",
        alt: "Suuberi Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CleaningService',
              name: 'Suuberi Reinigung',
              url: 'https://suuberi-reinigung.ch',
              logo: 'https://suuberi-reinigung.ch/img/new.png',
              image: 'https://suuberi-reinigung.ch/img/suuberi-logo-schwarz.png',
              description: 'Professionelle Reinigung und Hauswartung in Biel, Bern und Jura. Endreinigung, Unterhaltsreinigung, Industriereinigung, Fenster- & Fassadenreinigung.',
              telephone: '+41 78 234 66 99',
              email: 'info@suuberi-reinigung.ch',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Biel/Bienne',
                addressRegion: 'BE',
                addressCountry: 'CH',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 47.1368,
                longitude: 7.2467,
              },
              areaServed: [
                { '@type': 'City', name: 'Biel/Bienne' },
                { '@type': 'City', name: 'Bern' },
                { '@type': 'AdministrativeArea', name: 'Jura' },
              ],
              priceRange: 'CHF 41 – CHF 2075',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '07:00',
                  closes: '19:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '08:00',
                  closes: '16:00',
                },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '3',
                bestRating: '5',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Reinigungsservices',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Unterhaltsreinigung' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Industriereinigung' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Endreinigung / Umzug' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bauendreinigung' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fenster-, Fassaden- & Storenreinigung' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Spezialreinigungen' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gartenpflege & Multiservices' } },
                ],
              },
              sameAs: [
                'https://wa.me/41782346699',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.variable}>
        <LocaleProviderWrapper>
          <SkipLink />
          <Navbar />
          <div className="pt-20 relative" id="main" role="main">
            {children}
          </div>
          <Footer />
        </LocaleProviderWrapper>
        <Analytics />
      </body>
    </html>
  );
}
