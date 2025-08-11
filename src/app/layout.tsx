import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suuberi-reinigung.ch"),
  title: {
    default:
      "Suuberi Reinigung | Reinigung Basel, Bern, Zürich – Hauswartung & Endreinigung",
    template: "%s | Suuberi Reinigung",
  },
  description:
    "Suuberi – professionelle Reinigung und Hauswartung in Basel, Biel, Solothurn, Bern und Zürich. Endreinigung, Unterhaltsreinigung, Industriereinigung, Fenster- & Fassadenreinigung.",
  keywords: [
    "Reinigung Basel",
    "Reinigung Bern",
    "Reinigung Zürich",
    "Hauswartung Bern",
    "Endreinigung Zürich",
    "Bauendreinigung",
    "Unterhaltsreinigung",
    "Industriereinigung",
    "Fensterreinigung",
    "Fassadenreinigung",
    "Spezialreinigung",
    "Gartenpflege",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://suuberi-reinigung.ch",
    title:
      "Suuberi Reinigung – Mehr als sauber. Reinigung und Hauswartung in der Schweiz",
    description:
      "Professionelle Reinigung in Basel, Biel, Solothurn, Bern und Zürich. Endreinigung, Unterhalt, Industrie, Fenster & Fassaden.",
    siteName: "Suuberi Reinigung",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Suuberi Reinigung – Mehr als sauber. Reinigung und Hauswartung in der Schweiz",
    description:
      "Professionelle Reinigung in Basel, Biel, Solothurn, Bern und Zürich.",
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
              '@type': 'LocalBusiness',
              name: 'Suuberi Reinigung',
              url: 'https://suuberi-reinigung.ch',
              areaServed: [
                'Basel',
                'Biel',
                'Solothurn',
                'Bern',
                'Zürich',
              ],
              description:
                'Professionelle Reinigungs- und Hauswartungsdienste in der Schweiz. Endreinigung, Unterhaltsreinigung, Industriereinigung, Fenster- & Fassadenreinigung.',
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-[var(--color-primary)] focus:px-3 focus:py-2 focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <Navbar />
        <div className="pt-16" id="main">
          {children}
        </div>
      </body>
    </html>
  );
}
