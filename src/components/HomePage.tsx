"use client";

import { useRef, useCallback } from "react";
import Hero from "./Hero";
import ServicesSection from "./ServicesSection";
import WhyUsSection from "./WhyUsSection";
import ReviewsSection from "./ReviewsSection";
import StepsSection from "./StepsSection";
import ContactSection from "./ContactSection";
import type { ServiceDetail } from "@/data/services";

type HomePageProps = {
  services: ServiceDetail[];
  locations: string[];
};

export function HomePage({ services, locations }: HomePageProps) {
  const formRef = useRef<HTMLDivElement | null>(null);

  const reviews = [
    {
      name: "Maria Schmidt",
      city: "Biel",
      rating: 5,
      text: "Ausgezeichnete Arbeit! Die Reinigung war gründlich und pünktlich. Sehr empfehlenswert!"
    },
    {
      name: "Thomas Müller",
      city: "Bern",
      rating: 5,
      text: "Professionelles Team, faire Preise und zuverlässiger Service. Wir sind sehr zufrieden."
    },
    {
      name: "Anna Weber",
      city: "Jura",
      rating: 5,
      text: "Suuberi hat unsere Büroräume perfekt gereinigt. Sauberkeit und Freundlichkeit in einem."
    }
  ];

  const handleScrollToForm = useCallback(() => {
    const formElement = formRef.current;
    if (!formElement) return;
    formElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <main className="font-sans">
      <Hero onCtaClick={handleScrollToForm} />
      <ServicesSection services={services} />
      <WhyUsSection />
      <StepsSection />
      <ReviewsSection reviews={reviews} />
      <ContactSection 
        locations={locations} 
        services={services}
        formRef={formRef}
      />
    </main>
  );
}
