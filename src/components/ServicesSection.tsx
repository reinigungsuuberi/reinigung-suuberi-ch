"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ServiceDetail } from "../data/services";
import { useLocale } from "@/lib/LocaleProvider";

// Image mapping for each service
const serviceImages: Record<string, string> = {
  "unterhaltsreinigung": "/img/regulier.jpg",
  "fahzeugevermietung": "/img/industriel.jpg",
  "endreinigung-umzug": "/img/fin_de_bail.jpg",
  "bauendreinigung": "/img/1.jpg",
  "fenster-fassaden-storenreinigung": "/img/vitres.jpg",
  "spezialreinigungen": "/img/specialise.jpg",
  "gartenpflege-multiservices": "/img/multiservice.jpg",
};

type ServicesSectionProps = {
  id?: string;
  services: ServiceDetail[];
};

const ServicesSection = ({ id = "dienstleistungen", services }: ServicesSectionProps) => {
  const { locale, t } = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Cycle through services with Instagram lyrics animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [services.length]);

  const currentService = services[currentIndex];
  const serviceTranslation = t.services[currentService?.slug as keyof typeof t.services];
  const displayTitle = serviceTranslation?.title || currentService?.title || "";

  return (
    <section id={id} className="relative min-h-screen py-32 sm:py-40 overflow-hidden bg-white snap-section flex items-center">
      {/* Dynamic Background Images */}
      <div className="absolute inset-0">
        {services.map((service, idx) => (
          <div
            key={service.slug}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              idx === currentIndex && isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={serviceImages[service.slug] || "/img/1.jpg"}
              alt={service.title}
              fill
              className="object-cover"
              priority={idx === 0}
            />
            <div className="absolute inset-0 bg-white/60" />
          </div>
        ))}
      </div>

      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-gray-100/50 to-gray-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-50/50 to-gray-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Small label */}
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-8">
            {t.sections.services}
          </p>

          {/* Big animated service title - Instagram lyrics style */}
          <div className="h-32 sm:h-48 flex items-center justify-center">
            <h2 
              className={`text-5xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight transition-all duration-300 text-center px-4 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {displayTitle}
            </h2>
          </div>

          {/* Service description */}
          <p 
            className={`text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {serviceTranslation?.shortDescription || currentService?.shortDescription}
          </p>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-12">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => {
                    setCurrentIndex(idx);
                    setIsVisible(true);
                  }, 150);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-gray-900 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={locale === "fr" ? `Voir le service ${idx + 1}` : `Service ${idx + 1} anzeigen`}
              />
            ))}
          </div>

          {/* CTA Link */}
          <a 
            href={locale === "fr" ? "/fr/services" : "/dienstleistungen"}
            className="inline-flex items-center gap-2 mt-10 text-gray-900 font-medium hover:gap-3 transition-all duration-300"
          >
            {locale === "fr" ? "Voir tous les services" : "Alle Dienstleistungen ansehen"}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


