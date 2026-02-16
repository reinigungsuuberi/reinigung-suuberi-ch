import type { Metadata } from "next";
import { HomePage } from "../components/HomePage";
import { getAllServices } from "../data/services";

export const metadata: Metadata = {
  title: "Suuberi Reinigung | Startseite – Professionelle Reinigung in Biel, Bern, Jura",
  description: "Professionelle Reinigung, Hauswartung und Spezialreinigung in Biel, Bern und Jura. Endreinigung, Fensterreinigung, Fassadenreinigung und mehr.",
  openGraph: {
    title: "Suuberi Reinigung – Startseite",
    description: "Professionelle Reinigung in Biel, Bern und Jura. Schnell, zuverlässig, nachhaltig.",
  },
};

const services = getAllServices();
const locations = ["Biel", "Bern", "Jura"];

export default function Home() {
  return <HomePage services={services} locations={locations} />;
}


