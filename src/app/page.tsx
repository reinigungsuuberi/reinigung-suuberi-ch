"use client";

import { useMemo, useRef } from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WhyUsSection from "../components/WhyUsSection";
import ReviewsSection from "../components/ReviewsSection";
import StepsSection from "../components/StepsSection";
import ContactSection from "../components/ContactSection";
import { getAllServices } from "../data/services";

const services = getAllServices();

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

      <ContactSection locations={locations} services={services.map((s) => ({ title: s.title }))} />

  
    </main>
  );
};

export default Home;


