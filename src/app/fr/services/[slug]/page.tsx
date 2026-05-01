import type { Metadata } from "next";
import Link from "next/link";
import { getServiceBySlug, getAllServices } from "@/data/services";

// French translations
const serviceFrenchData: Record<string, {
  title: string;
  tagline: string;
  intro: string;
  highlights: string[];
}> = {
  "unterhaltsreinigung": {
    title: "Nettoyage régulier",
    tagline: "La constance au service de la propreté",
    intro: "Un environnement propre, chaque jour. Nous intervenons selon votre rythme – hebdomadaire, bimensuel ou mensuel – avec une qualité constante et un interlocuteur dédié.",
    highlights: [
      "Intervalles flexibles selon vos besoins",
      "Interlocuteur fixe pour votre objet",
      "Produits de nettoyage écologiques",
      "Checklists détaillées pour chaque nettoyage"
    ]
  },
  "fahzeugevermietung": {
    title: "Location de véhicules",
    tagline: "La mobilité à votre service",
    intro: "Des petites voitures aux utilitaires – nous mettons à disposition une flotte adaptée à vos besoins. Professionnel, fiable, économique.",
    highlights: [
      "Large choix de véhicules",
      "Prix compétitifs",
      "Réservation rapide et facile",
      "Service client professionnel"
    ]
  },
  "endreinigung-umzug": {
    title: "Nettoyage de fin de bail",
    tagline: "Partir l'esprit tranquille",
    intro: "Remettez votre logement dans un état irréprochable. Nous nettoyons chaque recoin, chaque joint, chaque surface – avec garantie de remise sur demande.",
    highlights: [
      "Garantie de remise sur demande",
      "Nettoyage complet de toutes les pièces",
      "Fenêtres et cadres inclus",
      "Garantie de date pour votre déménagement"
    ]
  },
  "bauendreinigung": {
    title: "Nettoyage de fin de chantier",
    tagline: "Du chaos à l'éclat",
    intro: "Après les travaux, place à la propreté. Nous éliminons poussière, résidus et traces de construction pour un espace prêt à vivre.",
    highlights: [
      "Nettoyage grossier et fin",
      "Élimination de la poussière de chantier",
      "Nettoyage des fenêtres et cadres",
      "Coordination avec l'avancement du chantier"
    ]
  },
  "fenster-fassaden-storenreinigung": {
    title: "Vitres, façades & stores",
    tagline: "La lumière retrouvée",
    intro: "Des vitres cristallines qui subliment votre intérieur. Nous nettoyons fenêtres, cadres, stores et façades – de l'intérieur comme de l'extérieur.",
    highlights: [
      "Nettoyage sans traces",
      "Intérieur et extérieur",
      "Cadres et joints inclus",
      "Travail en hauteur avec concept de sécurité"
    ]
  },
  "spezialreinigungen": {
    title: "Nettoyages spéciaux",
    tagline: "Solutions sur mesure",
    intro: "Tapis, meubles rembourrés, pierre naturelle, parkings souterrains – chaque surface mérite un traitement adapté. Nous trouvons la solution.",
    highlights: [
      "Procédés respectueux des matériaux",
      "Élimination professionnelle des taches",
      "Différentes techniques spéciales",
      "Conseil individuel"
    ]
  },
  "gartenpflege-multiservices": {
    title: "Jardin & multiservices",
    tagline: "L'extérieur compte aussi",
    intro: "Entretien du gazon, taille des haies, nettoyage des chemins, service hivernal. Vos espaces extérieurs entre de bonnes mains.",
    highlights: [
      "Forfaits d'entretien saisonniers",
      "Élimination incluse",
      "Service hivernal disponible",
      "Petites réparations possibles"
    ]
  }
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const french = serviceFrenchData[slug];

  if (!service) {
    return { title: "Service non trouvé" };
  }

  return {
    title: `${french?.title || service.title} | Suuberi Nettoyage`,
    description: french?.intro || service.shortDescription,
  };
}

const ServiceDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const french = serviceFrenchData[slug];
  const allServices = getAllServices();
  const currentIndex = allServices.findIndex(s => s.slug === slug);
  const nextService = allServices[(currentIndex + 1) % allServices.length];
  const nextFrench = serviceFrenchData[nextService.slug];

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-900">Service non trouvé</h1>
          <Link href="/fr/services" className="mt-6 inline-block text-gray-600 hover:text-gray-900">
            ← Retour aux services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-16 border-b border-gray-100">
        <Link 
          href="/fr/services" 
          className="text-gray-400 hover:text-gray-600 text-sm mb-8 inline-flex items-center gap-2 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Tous les services
        </Link>
        
        <div className="max-w-4xl">
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-4">
            {french?.tagline || service.shortDescription}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-tight break-words">
            {french?.title || service.title}
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 border-b border-gray-100">
        <div className="max-w-3xl">
          <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light">
            {french?.intro || service.intro}
          </p>
        </div>
      </section>

      {/* What's Included */}
      {french?.highlights && french.highlights.length > 0 && (
        <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 border-b border-gray-100">
          <div className="max-w-4xl">
            <h2 className="text-sm text-gray-400 tracking-widest uppercase mb-12">
              Ce qui est inclus
            </h2>
            <div className="space-y-8">
              {french.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-6">
                  <span className="text-gray-300 font-mono text-sm mt-1">
                    0{index + 1}
                  </span>
                  <p className="text-xl md:text-2xl text-gray-900 font-light">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl">
          <h2 className="text-sm text-gray-400 tracking-widest uppercase mb-12">
            Comment ça marche
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Contact", desc: "Décrivez-nous votre besoin par téléphone, e-mail ou formulaire." },
              { step: "02", title: "Devis", desc: "Nous vous envoyons une offre personnalisée et sans engagement." },
              { step: "03", title: "Réalisation", desc: "Nous effectuons le nettoyage avec professionnalisme et ponctualité." },
            ].map((item) => (
              <div key={item.step}>
                <span className="text-gray-300 font-mono text-sm">{item.step}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-gray-900 text-white">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Intéressé par ce service?
          </h2>
          <p className="mt-6 text-xl text-gray-400">
            Contactez-nous pour un devis gratuit et sans engagement.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/fr#kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all"
            >
              Demander un devis
            </Link>
            <a
              href="tel:+41782346699"
              className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-full border border-white/30 hover:bg-white/10 transition-all"
            >
              078 234 66 99
            </a>
          </div>
        </div>
      </section>

      {/* Next Service */}
      <Link 
        href={`/fr/services/${nextService.slug}`}
        className="group block py-16 md:py-24 px-6 md:px-12 lg:px-24 border-t border-gray-100 hover:bg-gray-50 transition-colors"
      >
        <div className="max-w-4xl flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm mb-2">Service suivant</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
              {nextFrench?.title || nextService.title}
            </h3>
          </div>
          <svg className="w-8 h-8 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </Link>
    </main>
  );
};

export default ServiceDetailPage;
