import type { Metadata } from "next";
import { i18n } from "@/data/i18n";

const frenchData = i18n.fr;

export const metadata: Metadata = {
  metadataBase: new URL("https://suuberi-reinigung.ch"),
  title: {
    default: "Suuberi Nettoyage | Nettoyage Bienne, Berne, Jura – Conciergerie & Nettoyage de fin de bail",
    template: "%s | Suuberi Nettoyage",
  },
  description: frenchData.footer.description,
  keywords: [
    "Nettoyage Bienne",
    "Nettoyage Berne",
    "Nettoyage Jura",
    "Conciergerie Berne",
    "Nettoyage de fin de bail Bienne",
    "Nettoyage de fin de construction",
    "Nettoyage régulier",
    "Location de véhicules",
    "Nettoyage de vitrages",
    "Nettoyage de façades",
    "Nettoyage spécialisé",
    "Entretien de jardins",
  ],
  alternates: {
    languages: {
      de: "https://suuberi-reinigung.ch",
      fr: "https://suuberi-reinigung.ch/fr",
      "x-default": "https://suuberi-reinigung.ch",
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://suuberi-reinigung.ch/fr",
    title: "Suuberi Nettoyage – Plus que propre. Nettoyage et conciergerie en Suisse",
    description: "Nettoyage professionnel à Bienne, Berne et Jura. Nettoyage de fin de bail, entretien, industrie, vitrages et façades.",
    siteName: "Suuberi Nettoyage",
    locale: "fr_CH",
    images: [
      {
        url: "/img/suuberi-logo-schwarz.png",
        width: 512,
        height: 512,
        alt: "Logo Suuberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suuberi Nettoyage – Plus que propre. Nettoyage et conciergerie en Suisse",
    description: "Nettoyage professionnel à Bienne, Berne et Jura.",
    images: [
      {
        url: "/img/suuberi-logo-schwarz.png",
        alt: "Logo Suuberi",
      },
    ],
  },
};

export default function FrenchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
