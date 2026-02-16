"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/LocaleProvider";

const WhyUsSection = () => {
  const { locale } = useLocale();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const words = locale === "fr" 
    ? ["Fiable.", "Durable.", "Équitable.", "Professionnel.", "Rapide.", "Suuberi."]
    : ["Zuverlässig.", "Nachhaltig.", "Fair.", "Professionell.", "Schnell.", "Suuberi."];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="warum" className="relative min-h-screen py-32 sm:py-40 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 snap-section flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Small label */}
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-8">
            {locale === "fr" ? "Pourquoi Suuberi?" : "Warum Suuberi?"}
          </p>

          {/* Big animated word - Instagram lyrics style */}
          <div className="h-32 sm:h-48 flex items-center justify-center">
            <h2 
              className={`text-6xl sm:text-8xl lg:text-9xl font-black text-white tracking-tight transition-all duration-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {words[currentWordIndex]}
            </h2>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-12">
            {words.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentWordIndex
                    ? "bg-white scale-125"
                    : "bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* Subtitle */}
          <p className="mt-12 text-xl text-gray-400 max-w-lg mx-auto">
            {locale === "fr" 
              ? "Nous offrons plus qu'un simple nettoyage – nous offrons fiabilité et professionnalisme."
              : "Wir bieten mehr als nur Reinigung – wir bieten Zuverlässigkeit und Professionalität."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;


