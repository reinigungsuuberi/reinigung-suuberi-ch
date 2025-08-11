"use client";

import { useMemo, useRef } from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WhyUsSection from "../components/WhyUsSection";
import ReviewsSection from "../components/ReviewsSection";
import StepsSection from "../components/StepsSection";
import ContactSection from "../components/ContactSection";

type Service = {
  title: string;
  description: string;
  icon: string;
  alt: string;
};

const services: Service[] = [
  {
    title: "Unterhaltsreinigung",
    description:
      "Regelmässige Reinigung für Büros, Praxen und Liegenschaften – zuverlässig und planbar.",
    icon: "🧹",
    alt: "Icon Unterhaltsreinigung",
  },
  {
    title: "Industriereinigung",
    description:
      "Professionelle Reinigung für Produktionsstätten, Lager und Werkhallen.",
    icon: "🏭",
    alt: "Icon Industriereinigung",
  },
  {
    title: "Endreinigung (Umzug)",
    description:
      "Gründliche Wohnungs- und Hausendreinigung inkl. Abnahmegarantie auf Wunsch.",
    icon: "📦",
    alt: "Icon Endreinigung",
  },
  {
    title: "Bauendreinigung",
    description:
      "Baustaub adé: Reinigung nach Bau- und Renovationsarbeiten für den perfekten Erstbezug.",
    icon: "🚧",
    alt: "Icon Bauendreinigung",
  },
  {
    title: "Fenster-, Fassaden- & Storenreinigung",
    description:
      "Streifenfreie Fenster, gepflegte Fassaden und saubere Storen – innen und aussen.",
    icon: "🪟",
    alt: "Icon Fenster- und Fassadenreinigung",
  },
  {
    title: "Spezialreinigungen",
    description:
      "Von Teppichen über Polster bis hin zu Tiefgaragen – wir kümmern uns um Spezialfälle.",
    icon: "✨",
    alt: "Icon Spezialreinigung",
  },
  {
    title: "Gartenpflege & Multiservices",
    description:
      "Rasen, Hecken, Wege, Winterdienst und kleine Reparaturen – alles aus einer Hand.",
    icon: "🌿",
    alt: "Icon Gartenpflege",
  },
];

type Review = {
  name: string;
  city: string;
  rating: number; // 1-5
  text: string;
};

const reviews: Review[] = [
  {
    name: "Anna M.",
    city: "Basel",
    rating: 5,
    text: "Sehr zuverlässig und gründlich – unsere Büros waren selten so sauber.",
  },
  {
    name: "Lukas M.",
    city: "Bern",
    rating: 5,
    text: "Schnelle Terminvergabe und top Ergebnis bei der Endreinigung.",
  },
  {
    name: "Sara M.",
    city: "Zürich",
    rating: 4,
    text: "Freundliches Team, nachhaltige Produkte und faire Preise.",
  },
];

const Home = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleScrollToForm = () => {
    const formElement = formRef.current;
    if (!formElement) return;
    formElement.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const locations = useMemo(
    () => ["Basel", "Biel", "Solothurn", "Bern", "Zürich"],
    []
  );


  return (
    <main className="font-sans">
      <Hero onCtaClick={handleScrollToForm} />

      <AboutSection />

      <ServicesSection services={services} />

      <WhyUsSection />

      <ReviewsSection reviews={reviews} />

      <StepsSection />

      <ContactSection locations={locations} services={services} />

  
    </main>
  );
};

export default Home;


