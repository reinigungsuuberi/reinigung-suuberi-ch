import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Suuberi Nettoyage – Notre offre",
  description: "Découvrez nos services de nettoyage professionnels: nettoyage régulier, fin de bail, industriel, vitres et façades à Bienne, Berne et Jura.",
  alternates: {
    canonical: "/fr/services",
    languages: {
      de: "https://suuberi-reinigung.ch/dienstleistungen",
      fr: "https://suuberi-reinigung.ch/fr/services",
      "x-default": "https://suuberi-reinigung.ch/dienstleistungen",
    },
  },
  openGraph: {
    title: "Services | Suuberi Nettoyage",
    description: "Solutions de nettoyage professionnelles pour chaque besoin.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
