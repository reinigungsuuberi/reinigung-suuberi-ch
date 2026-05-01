export type PriceRange = {
  min: number;
  max: number;
  currency?: string; // default CHF
};

export type PriceItem = {
  label: string;
  priceText: string; // e.g., "350 – 665 CHF pauschal"
};

export type PriceSection = {
  title: string;
  range?: PriceRange;
  items?: PriceItem[];
  note?: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  iconType?: "broom" | "factory" | "home" | "construction" | "window" | "sparkle" | "garden";
  alt: string;
  intro: string;
  highlights: string[];
  priceSections: PriceSection[];
};

export const servicesData: ServiceDetail[] = [
  {
    slug: "unterhaltsreinigung",
    title: "Unterhaltsreinigung",
    shortDescription:
      "Regelmässige Reinigung für Büros, Praxen und Liegenschaften – zuverlässig und planbar.",
    icon: "🧹",
    iconType: "broom",
    alt: "Icon Unterhaltsreinigung",
    intro:
      "Sauberkeit im Alltag: Wir reinigen regelmässig – wöchentlich, zweiwöchentlich oder nach Vereinbarung. Ideal für Privat- und Geschäftskunden.",
    highlights: [
      "Individuelle Intervalle (wöchentlich/14-tägig/monatlich)",
      "Reinigungsmittel auf Wunsch inkl.",
      "Fixe Kontaktperson und klare Checklisten",
    ],
    priceSections: [
      {
        title: "Richtpreis pro Einsatz",
        range: { min: 41, max: 465, currency: "CHF" },
        note:
          "Richtwerte für Unterhaltsreinigung je nach Objektgrösse und Leistungsumfang.",
      },
    ],
  },
  {
    slug: "fahzeugevermietung",
    title: "Fahzeugevermietung",
    shortDescription:
      "Professionelle Fahzeugvermietung für Geschäfts- und Privatbedarf.",
    icon: "🚗",
    iconType: "factory",
    alt: "Icon Fahzeugevermietung",
    intro:
      "Flexible Fahrzeugvermietung für Ihre Bedürfnisse – wirtschaftlich, zuverlässig und mit einer Flotte für jeden Einsatz.",
    highlights: [
      "Große Flottenauswahl",
      "Wettbewerbsfähige Preise",
      "Schnelle und einfache Buchung",
    ],
    priceSections: [
      {
        title: "Preisgestaltung",
        note:
          "Fahzeugevermietung variiert je nach Fahrzeugtyp und Vermietungsdauer – wir erstellen eine Offerte nach Ihren Anforderungen.",
      },
    ],
  },
  {
    slug: "endreinigung-umzug",
    title: "Endreinigung (Umzug)",
    shortDescription:
      "Gründliche Wohnungs- und Hausendreinigung inkl. Abnahmegarantie auf Wunsch.",
    icon: "📦",
    iconType: "home",
    alt: "Icon Endreinigung",
    intro:
      "Wir übergeben besenrein – inkl. Küche, Bad, Fenster und auf Wunsch Abnahmegarantie.",
    highlights: [
      "Gründliche Reinigung aller Räume",
      "Fenster und Rahmen inklusive",
      "Optional Abnahmegarantie",
    ],
    priceSections: [
      {
        title: "Richtpreis – Wohnungsendreinigung",
        range: { min: 600, max: 950, currency: "CHF" },
        note: "Übliche Spanne gemäss Marktübersicht.",
      },
      {
        title: "Pauschalen nach Wohnungsgrösse",
        items: [
          { label: "1 – 1.5 Zimmer", priceText: "350 – 665 CHF (pauschal)" },
          { label: "2 – 2.5 Zimmer", priceText: "450 – 865 CHF (pauschal)" },
          { label: "3 – 3.5 Zimmer", priceText: "600 – 1260 CHF (pauschal)" },
          { label: "4 – 4.5 Zimmer", priceText: "860 – 1460 CHF (pauschal)" },
          { label: "5 – 5.5 Zimmer", priceText: "950 – 1750 CHF (pauschal)" },
          { label: "Andere Wohnungen & Häuser", priceText: "auf Anfrage" },
        ],
        note:
          "Richtwerte – abhängig von Fläche, Möblierung, Bodenbelägen und Aufwand.",
      },
    ],
  },
  {
    slug: "bauendreinigung",
    title: "Bauendreinigung",
    shortDescription:
      "Baustaub adé: Reinigung nach Bau- und Renovationsarbeiten für den perfekten Erstbezug.",
    icon: "🚧",
    iconType: "construction",
    alt: "Icon Bauendreinigung",
    intro:
      "Von Grobreinigung bis Feinreinigung – wir bereiten Neu- und Umbauten bezugsfertig vor.",
    highlights: [
      "Entfernung von Baustaub und -rückständen",
      "Feinreinigung für Erstbezug",
      "Flexible Termine nach Baufortschritt",
    ],
    priceSections: [
      {
        title: "Richtpreis – Baureinigung",
        range: { min: 994.5, max: 2075, currency: "CHF" },
        note: "Je nach Fläche, Bauzustand und gewünschtem Umfang.",
      },
    ],
  },
  {
    slug: "fenster-fassaden-storenreinigung",
    title: "Fenster-, Fassaden- & Storenreinigung",
    shortDescription:
      "Streifenfreie Fenster, gepflegte Fassaden und saubere Storen – innen und aussen.",
    icon: "🪟",
    iconType: "window",
    alt: "Icon Fenster- und Fassadenreinigung",
    intro:
      "Glasklare Sicht: Wir reinigen Fenster, Rahmen, Storen und auf Wunsch auch Fassaden.",
    highlights: [
      "Innen- und Aussenreinigung",
      "Storen, Rahmen und Falzen inklusive",
      "Sicherheitskonzept für Höhenarbeit",
    ],
    priceSections: [
      {
        title: "Richtpreis – Fensterreinigung",
        range: { min: 370, max: 669.5, currency: "CHF" },
        note: "Abhängig von Anzahl/Grösse der Fenster und Zugänglichkeit.",
      },
      {
        title: "Fassade & Spezialflächen",
        note: "Auf Anfrage – wir beraten individuell nach Objekt.",
      },
    ],
  },
  {
    slug: "spezialreinigungen",
    title: "Spezialreinigungen",
    shortDescription:
      "Von Teppichen über Polster bis hin zu Tiefgaragen – wir kümmern uns um Spezialfälle.",
    icon: "✨",
    iconType: "sparkle",
    alt: "Icon Spezialreinigung",
    intro:
      "Für besondere Anforderungen: Teppich-, Polster-, Stein- und Tiefgaragenreinigung sowie weitere Spezialfälle.",
    highlights: [
      "Materialschonende Verfahren",
      "Fleckentfernung und Pflege",
      "Termin-flexibel",
    ],
    priceSections: [
      {
        title: "Preisgestaltung",
        note: "Auf Anfrage – abhängig von Material, Fläche und Verfahren.",
      },
    ],
  },
  {
    slug: "gartenpflege-multiservices",
    title: "Gartenpflege & Multiservices",
    shortDescription:
      "Rasen, Hecken, Wege, Winterdienst und kleine Reparaturen – alles aus einer Hand.",
    icon: "🌿",
    iconType: "garden",
    alt: "Icon Gartenpflege",
    intro:
      "Aussenanlagen gepflegt: Rasenmähen, Heckenschnitt, Laub, Wegepflege und kleine Hauswartungen.",
    highlights: [
      "Saisonale Pakete möglich",
      "Entsorgung inklusive auf Wunsch",
      "Transparente Abrechnung",
    ],
    priceSections: [
      {
        title: "Richtpreis – Gartenpflege",
        range: { min: 394.5, max: 1300, currency: "CHF" },
        note: "Spanne je nach Flächengrösse und Leistung.",
      },
    ],
  },
];

export const getAllServices = (): ServiceDetail[] => servicesData;

export const getServiceBySlug = (slug: string): ServiceDetail | undefined =>
  servicesData.find((s) => s.slug === slug);

export const getAllServiceTitles = (): { title: string }[] =>
  servicesData.map((s) => ({ title: s.title }));


