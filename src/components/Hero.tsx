"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/LocaleProvider";

type HeroProps = {
  onCtaClick: () => void;
};

const Hero = ({ onCtaClick }: HeroProps) => {
  const { locale } = useLocale();
  
  const fullTitle = locale === "fr" 
    ? "Nettoyage professionnel à Bienne, Jura & Berne" 
    : "Professionelle Reinigung in Biel, Jura & Bern";
  
  const [displayedText, setDisplayedText] = useState("");
  const [showButtons, setShowButtons] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setShowButtons(false);
    setIsTypingComplete(false);
    
    let currentIndex = 0;
    const typingSpeed = 40;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullTitle.length) {
        setDisplayedText(fullTitle.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
        setTimeout(() => setShowButtons(true), 200);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [fullTitle]);
  
  return (
    <section className="relative min-h-screen overflow-hidden snap-section flex items-center -mt-20">
      {/* Video Background - scaled slightly to hide edge artifacts */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        poster="/img/suuberi-logo-schwarz.png"
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
      >
        <source src="https://res.cloudinary.com/dpbdk3pzz/video/upload/q_auto/video_cr2zwy.mp4" type="video/mp4" />
        <source src="https://res.cloudinary.com/dpbdk3pzz/video/upload/q_auto,f_auto/video_cr2zwy" type="video/webm" />
        Professionelle Reinigung – Suuberi Reinigung
      </video>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 z-[1] bg-white/70" />
      {/* Soft edge vignette to blend video into background */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          boxShadow: "inset 0 0 80px 40px rgba(255,255,255,1)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter bg-gradient-to-r from-green-800 via-emerald-600 to-teal-700 bg-[length:200%_100%] animate-gradient-x bg-clip-text text-transparent">
            {displayedText}
            {!isTypingComplete && (
              <span className="inline-block w-[3px] h-[1em] bg-emerald-700 ml-1 animate-pulse" />
            )}
          </h1>
          <p className={`mt-8 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl transition-all duration-500 ${
            isTypingComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            {locale === "fr" ? "Fiable, durable et équitable. Nous nous occupons de votre propreté." : "Zuverlässig, nachhaltig und fair. Wir kümmern uns um Ihre Sauberkeit."}
          </p>
          
          {/* CTAs */}
          <div className={`mt-10 flex flex-col sm:flex-row gap-5 transition-all duration-700 ${
            showButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <button
              onClick={onCtaClick}
              className="group relative px-8 py-4 font-semibold text-base rounded-full transition-all duration-500 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-4 hover:-translate-y-1 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-800 via-emerald-600 to-teal-700 bg-[length:200%_100%] animate-gradient-x" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </span>
              <span className="relative z-10 text-white">
                {locale === "fr" ? "Demander un devis" : "Offerte anfragen"}
              </span>
            </button>
            <a
              href="tel:+41782346699"
              className="group relative px-8 py-4 font-semibold text-base rounded-full transition-all duration-500 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-4 text-center hover:-translate-y-1 overflow-hidden border-2 border-green-800 bg-white/50 backdrop-blur-sm"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-800 via-emerald-600 to-teal-700 bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-200" />
              </span>
              <span className="relative z-10 text-green-900 group-hover:text-white transition-colors duration-500">
                {locale === "fr" ? "Appeler maintenant" : "Jetzt anrufen"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


