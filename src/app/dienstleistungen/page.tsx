"use client";

import Link from "next/link";
import Image from "next/image";
import { getAllServices } from "../../data/services";

// German taglines for services
const serviceGermanData: Record<string, {
  tagline: string;
  description: string;
}> = {
  "unterhaltsreinigung": {
    tagline: "Beständigkeit für Ihre Sauberkeit",
    description: "Eine saubere Umgebung, jeden Tag. Wir kommen nach Ihrem Rhythmus – wöchentlich, zweiwöchentlich oder monatlich – mit konstanter Qualität und einem festen Ansprechpartner."
  },
  "industriereinigung": {
    tagline: "Kraft für die Industrie",
    description: "Von Produktionshallen bis Lagerhäuser – wir meistern die Herausforderungen der industriellen Reinigung. Professionelle Ausrüstung, Sicherheitsstandards eingehalten, makellose Ergebnisse."
  },
  "endreinigung-umzug": {
    tagline: "Beruhigt ausziehen",
    description: "Übergeben Sie Ihre Wohnung in einwandfreiem Zustand. Wir reinigen jede Ecke, jede Fuge, jede Oberfläche – mit Abnahmegarantie auf Wunsch."
  },
  "bauendreinigung": {
    tagline: "Vom Chaos zum Glanz",
    description: "Nach den Bauarbeiten kommt die Sauberkeit. Wir entfernen Staub, Rückstände und Bauspuren für einen bezugsfertigen Raum."
  },
  "fenster-fassaden-storenreinigung": {
    tagline: "Licht zurückgewinnen",
    description: "Kristallklare Fenster, die Ihr Interieur aufwerten. Wir reinigen Fenster, Rahmen, Storen und Fassaden – von innen und aussen."
  },
  "spezialreinigungen": {
    tagline: "Massgeschneiderte Lösungen",
    description: "Teppiche, Polstermöbel, Naturstein, Tiefgaragen – jede Oberfläche verdient eine angepasste Behandlung. Wir finden die Lösung."
  },
  "gartenpflege-multiservices": {
    tagline: "Auch aussen zählt",
    description: "Rasenpflege, Heckenschnitt, Wegereinigung, Winterdienst. Ihre Aussenbereiche in guten Händen."
  }
};

const ServicesPage = () => {
  const services = getAllServices();

  return (
    <main className="bg-white">
      {/* Hero - Minimal Apple Style */}
      <section className="relative z-10 min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20">
        <div className="max-w-4xl">
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-4">
            Unsere Dienstleistungen
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
            Reinigung,{" "}
            <span className="text-gray-400">neu gedacht.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
            Professionelle Reinigungslösungen, konzipiert für jeden Raum, 
            jeden Bedarf, jede Anforderung. Einfach.
          </p>
        </div>
      </section>

      {/* Services List - Elegant Typography */}
      <section className="border-t border-gray-100">
        {services.map((service, index) => {
          const german = serviceGermanData[service.slug];
          return (
            <Link
              key={service.slug}
              href={`/dienstleistungen/${service.slug}`}
              className="group block border-b border-gray-100 transition-all duration-500 ease-out hover:bg-gray-50"
            >
              <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-16 transition-all duration-500 ease-out group-hover:py-16 md:group-hover:py-24">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                  {/* Left - Number & Title */}
                  <div className="flex-1">
                    <span className="text-sm text-gray-400 font-mono mb-4 block">
                      0{index + 1}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight group-hover:text-gray-700 transition-colors duration-500">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-lg text-gray-500 italic">
                      {german?.tagline || service.shortDescription}
                    </p>
                  </div>

                  {/* Right - Description */}
                  <div className="flex-1 md:max-w-md lg:max-w-lg transition-all duration-500 ease-out group-hover:scale-[1.02] origin-left">
                    <p className="text-gray-600 text-lg leading-relaxed transition-all duration-500 ease-out group-hover:text-gray-900">
                      {german?.description || service.shortDescription}
                    </p>
                    
                    {/* Arrow indicator */}
                    <div className="mt-6 flex items-center gap-2 text-gray-900 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-500">
                      <span className="text-sm font-medium">Mehr erfahren</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      {/* Bottom Statement */}
      <section className="bg-gray-900 text-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            Jeder Raum verdient{" "}
            <span className="text-gray-400">besondere Aufmerksamkeit.</span>
          </h2>
          <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto">
            Kontaktieren Sie uns, um Ihre Bedürfnisse zu besprechen. 
            Gemeinsam finden wir die perfekte Lösung.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Offerte anfragen
            </Link>
            <a
              href="tel:+41782346699"
              className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              078 234 66 99
            </a>
          </div>
        </div>
      </section>

      {/* Regions - Subtle */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24 border-t border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left relative z-10">
              <p className="text-gray-400 text-sm tracking-widest uppercase mb-6">
                Einsatzgebiete
              </p>
              <p className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-light">
                Biel/Bienne · Bern · Jura
              </p>
            </div>
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 z-10 pointer-events-none" style={{ boxShadow: 'inset 0 0 60px 40px white' }} />
              <Image
                src="/img/map.png"
                alt="Einsatzgebiete Karte"
                width={800}
                height={533}
                className="w-80 md:w-[600px] lg:w-[800px] h-auto"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;


