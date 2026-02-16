"use client";

import { useScrollReveal } from "@/hooks/useScrollEffects";
import { useLocale } from "@/lib/LocaleProvider";

const AboutSection = () => {
  const ref = useScrollReveal();
  
  const { locale, t } = useLocale();
  
  const whyChooseUs = [
    {
      title: locale === "fr" ? "Expertise professionnelle" : "Professionelle Expertise",
      description: locale === "fr" ? "Plus de 15 ans d'expérience dans le nettoyage et l'entretien des bâtiments avec du personnel formé." : "Über 15 Jahre Erfahrung in Reinigung und Hauswartung mit geschultem Personal."
    },
    {
      title: locale === "fr" ? "Respectueux de l'environnement" : "Umweltfreundlich",
      description: locale === "fr" ? "Produits de nettoyage durables et approche respectueuse de l'environnement." : "Nachhaltige Reinigungsmittel und umweltbewusste Arbeitsweise."
    },
    {
      title: locale === "fr" ? "Fiable & Ponctuel" : "Zuverlässig & Pünktlich",
      description: locale === "fr" ? "Personnes de contact fixes et services clairement définis pour votre sécurité." : "Feste Kontaktpersonen und klar definierte Leistungen für Ihre Sicherheit."
    },
    {
      title: locale === "fr" ? "Prix transparents" : "Transparente Preise",
      description: locale === "fr" ? "Tarification équitable sans coûts cachés. Offres sur demande." : "Faire Preisgestaltung ohne versteckte Kosten. Offerten auf Anfrage."
    }
  ];

  return (
    <section id="ueber-uns" className="relative py-24 sm:py-48 overflow-hidden">
      {/* Liquid glass background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 animate-in">
          <h2 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tighter mb-8">
            {t.sections.why}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {locale === "fr" ? "Nous offrons plus qu'un simple nettoyage – nous offrons fiabilité et professionnalisme." : "Wir bieten mehr als nur Reinigung – wir bieten Zuverlässigkeit und Professionalität."}
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="group relative">
              {/* Liquid glass card */}
              <div className="relative backdrop-blur-xl bg-white/60 border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/70">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Floating accent */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


