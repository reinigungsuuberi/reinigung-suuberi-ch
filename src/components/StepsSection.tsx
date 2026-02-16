"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/LocaleProvider";

const StepsSection = () => {
  const { locale, t } = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Steps with background colors
  const steps = [
    {
      title: t.sections.processSteps[0],
      bg: "bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800",
      number: "01"
    },
    {
      title: t.sections.processSteps[1],
      bg: "bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800",
      number: "02"
    },
    {
      title: t.sections.processSteps[2],
      bg: "bg-gradient-to-br from-purple-600 via-violet-700 to-purple-800",
      number: "03"
    }
  ];

  // Cycle through steps with animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % steps.length);
        setIsVisible(true);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, [steps.length]);

  const currentStep = steps[currentIndex];
  
  // Determine theme name for navbar detection
  const themeName = currentIndex === 0 ? "blue" : currentIndex === 1 ? "emerald" : "purple";

  return (
    <section 
      id="ablauf" 
      data-theme={themeName}
      className={`relative min-h-screen py-32 sm:py-40 overflow-hidden transition-all duration-700 snap-section flex items-center ${currentStep.bg}`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Small label */}
          <p className="text-white/60 text-sm uppercase tracking-widest mb-8">
            {t.sections.process}
          </p>

          {/* Step number */}
          <p 
            className={`text-white/40 text-2xl sm:text-3xl font-light mb-4 transition-all duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentStep.number}
          </p>

          {/* Big animated step title - Instagram lyrics style */}
          <div className="h-32 sm:h-48 flex items-center justify-center">
            <h2 
              className={`text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight transition-all duration-300 text-center px-4 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {currentStep.title}
            </h2>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-3 mt-12">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => {
                    setCurrentIndex(idx);
                    setIsVisible(true);
                  }, 200);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Schritt ${idx + 1} anzeigen`}
              />
            ))}
          </div>

          {/* Subtitle */}
          <p className="mt-12 text-xl text-white/70 max-w-lg mx-auto">
            {locale === "fr" 
              ? "Un processus simple en trois étapes."
              : "Ein einfacher Prozess in drei Schritten."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;


