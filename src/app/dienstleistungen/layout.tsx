import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dienstleistungen | Suuberi Reinigung – Unser Angebot",
  description: "Entdecken Sie unser Angebot: Unterhaltsreinigung, Endreinigung, Industriereinigung, Fensterreinigung und Spezialreinigung in Biel, Bern und Jura.",
  alternates: {
    canonical: "/dienstleistungen",
    languages: {
      de: "https://suuberi-reinigung.ch/dienstleistungen",
      fr: "https://suuberi-reinigung.ch/fr/services",
      "x-default": "https://suuberi-reinigung.ch/dienstleistungen",
    },
  },
  openGraph: {
    title: "Dienstleistungen | Suuberi Reinigung",
    description: "Unterhaltsreinigung, Endreinigung, Industriereinigung, Fenster- und Fassadenreinigung sowie Spezialreinigung.",
  },
};

export default function DienstleistungenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
