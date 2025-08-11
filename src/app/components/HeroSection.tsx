import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image with cleaning team */}
      <Image
        src="/hero-background.jpg"
        alt="Suuberi Reinigungsteam in Aktion"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>

      {/* Hero content */}
      <div className="relative z-2 text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-wide">
          Mehr als sauber – Suuberi
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Sauber. Schnell. Nachhaltig. Seit über 20 Jahren.
        </p>

        {/* Call to action button that scrolls to contact form */}
        <a
          href="#contact"
          className="inline-block bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          Jetzt Angebot anfordern
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
