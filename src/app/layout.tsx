import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suuberi Reinigung - Professionelle Reinigungsdienste in der Schweiz",
  description: "Suuberi bietet professionelle Reinigungs- und Hauswartungsdienste in Basel, Biel, Solothurn, Bern und Zürich. Sauber, schnell und nachhaltig seit über 20 Jahren.",
  keywords: "Reinigung Basel, Hauswartung Bern, Endreinigung Zürich, Fensterreinigung, Fassadenreinigung, Gartenpflege",
  openGraph: {
    title: "Suuberi Reinigung - Professionelle Reinigungsdienste in der Schweiz",
    description: "Suuberi bietet professionelle Reinigungs- und Hauswartungsdienste in Basel, Biel, Solothurn, Bern und Zürich. Sauber, schnell und nachhaltig seit über 20 Jahren.",
    url: "https://suuberi-reinigung.ch",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suuberi Reinigung Logo",
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
    <html lang="de">
      <body className="antialiased text-text bg-background font-poppins">
        {children}
      </body>
    </html>
  );
}
