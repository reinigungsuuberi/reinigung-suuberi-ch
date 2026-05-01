export type Locale = "de" | "fr";

export const i18n = {
  de: {
    nav: {
      aboutUs: "Über uns",
      services: "Dienstleistungen",
      why: "Warum Suuberi?",
      process: "Ablauf",
      cta: "Angebot anfordern",
    },
    hero: {
      title: "Mehr als sauber – Suuberi.",
      subtitle: "Sauber. Schnell. Nachhaltig.",
      cta: "Jetzt Angebot anfordern",
      learnMore: "Mehr erfahren",
      ariaLabel: "Hero Bereich",
      imageAlt: "Reinigungsteam im Einsatz",
      ctaAriaLabel: "Jetzt Angebot anfordern",
      learnMoreAriaLabel: "Mehr erfahren zu unseren Dienstleistungen",
    },
    about: {
      title: "Über uns",
      intro: "Suuberi bietet professionelle Reinigungs- und Hauswartungsdienste in Biel, Bern und Jura. Unser Team arbeitet schnell, zuverlässig, mit umweltfreundlichen Reinigungsmitteln.",
      values: {
        speed: "Schnelligkeit",
        sustainability: "Nachhaltigkeit",
        discretion: "Diskretion",
        flexibility: "Flexibilität",
      },
      imageAlt: "Sauberer, moderner Büroraum",
      ariaLabel: "Unsere Werte",
    },
    contact: {
      title: "Kontaktformular",
      intro: "Wir sind in {locations} für Sie im Einsatz.",
      description:
        "Füllen Sie das Formular aus – wir melden uns zeitnah mit einem unverbindlichen Angebot.",
      quickContact: "Schnellkontakt",
      callAriaLabel: "Anrufen",
      whatsappAriaLabel: "WhatsApp Chat starten",
      emailAriaLabel: "E-Mail schreiben",
    },
    form: {
      name: "Name",
      namePlaceholder: "Ihr Name",
      email: "E-Mail",
      emailPlaceholder: "name@beispiel.ch",
      phone: "Telefonnummer",
      phonePlaceholder: "+41 78 234 66 99",
      service: "Dienstleistung",
      serviceSelect: "Bitte wählen",
      message: "Nachricht",
      messagePlaceholder: "Beschreiben Sie Ihr Anliegen...",
      detailedOffer: "Detailliertes Angebot gewünscht",
      submitButton: "E-Mail mit Anfrage öffnen",
      submitAriaLabel: "Standard-E-Mail mit Anfrage öffnen",
      formAriaLabel: "Kontaktformular",
      subject: "Angebotsanfrage – Suuberi Reinigung",
      greeting: "Hallo Suuberi,",
      thankYou: "Vielen Dank und freundliche Grüsse",
      labels: {
        name: "Name: ",
        email: "E-Mail: ",
        phone: "Telefon: ",
        service: "Dienstleistung: ",
        detailedOffer: "Detailliertes Angebot: ",
        message: "Nachricht:",
      },
      yes: "Ja",
      no: "Nein",
    },
    footer: {
      company: "Suuberi Reinigung",
      description: "Reinigung und Hauswartung in Biel, Bern und Jura. Endreinigung, Bauendreinigung, Fenster- & Fassadenreinigung, Spezialreinigung, Gartenpflege.",
      contact: "Kontakt",
      callAriaLabel: "Anrufen",
      whatsappAriaLabel: "WhatsApp Chat starten",
      emailAriaLabel: "E-Mail schreiben",
      emailLabel: "E-Mail:",
      phoneLabel: "Telefon:",
      regions: "Regionen: Biel · Bern · Jura",
      legal: "Rechtliches",
      privacy: "Datenschutz",
      imprint: "Impressum",
      tradingInformation: "Handelsregister: Suberi inh Boudova",
      alternativeContact: "Alternative Kontakt:",
      alternativePhone: "+41 78 709 82 33",
      alternativePhoneAriaLabel: "Alternative Telefonnummer 078 709 82 33 anrufen",
      copyright: "© 2025 Suuberi Reinigung. Alle Rechte vorbehalten.",
    },
    sections: {
      services: "Dienstleistungen",
      servicesSubtitle: "Alles aus einer Hand – zuverlässig, nachhaltig und fair.",
      why: "Warum Suuberi?",
      process: "In 3 Schritten zum Angebot",
      reviews: "Kundenbewertungen",
      reviewsRating: "von 5 Sternen",
      whyItems: [
        "Umweltfreundliche Produkte",
        "Schnelle Einsatzbereitschaft",
        "Flexible Verträge",
      ],
      processSteps: [
        "Kontakt aufnehmen",
        "Angebot erhalten",
        "Reinigung geniessen",
      ],
    },
    skipToContent: "Zum Inhalt springen",
    learnMore: "Mehr erfahren →",
    services: {
      "unterhaltsreinigung": {
        title: "Unterhaltsreinigung",
        shortDescription: "Regelmässige Reinigung für Büros, Praxen und Liegenschaften – zuverlässig und planbar."
      },
      "fahzeugevermietung": {
        title: "Fahzeugevermietung",
        shortDescription: "Professionelle Fahzeugvermietung für Geschäfts- und Privatbedarf."
      },
      "endreinigung-umzug": {
        title: "Endreinigung (Umzug)",
        shortDescription: "Gründliche Wohnungs- und Hausendreinigung inkl. Abnahmegarantie auf Wunsch."
      },
      "bauendreinigung": {
        title: "Bauendreinigung",
        shortDescription: "Baustaub adé: Reinigung nach Bau- und Renovationsarbeiten für den perfekten Erstbezug."
      },
      "fenster-fassaden-storenreinigung": {
        title: "Fenster-, Fassaden- & Storenreinigung",
        shortDescription: "Streifenfreie Fenster, gepflegte Fassaden und saubere Storen – innen und aussen."
      },
      "spezialreinigungen": {
        title: "Spezialreinigungen",
        shortDescription: "Von Teppichen über Polster bis hin zu Tiefgaragen – wir kümmern uns um Spezialfälle."
      },
      "gartenpflege-multiservices": {
        title: "Gartenpflege & Multiservices",
        shortDescription: "Rasen, Hecken, Wege, Winterdienst und kleine Reparaturen – alles aus einer Hand."
      }
    },
  },
  fr: {
    nav: {
      aboutUs: "À propos",
      services: "Services",
      why: "Pourquoi Suuberi?",
      process: "Processus",
      cta: "Demander un devis",
    },
    hero: {
      title: "Plus que propre – Suuberi.",
      subtitle: "Propre. Rapide. Durable.",
      cta: "Demander un devis maintenant",
      learnMore: "En savoir plus",
      ariaLabel: "Section héros",
      imageAlt: "Équipe de nettoyage en action",
      ctaAriaLabel: "Demander un devis maintenant",
      learnMoreAriaLabel: "En savoir plus sur nos services",
    },
    about: {
      title: "À propos",
      intro: "Suuberi propose des services professionnels de nettoyage et de conciergerie à Bienne, Berne et Jura. Notre équipe travaille rapidement, de manière fiable, avec des produits de nettoyage respectueux de l'environnement.",
      values: {
        speed: "Rapidité",
        sustainability: "Durabilité",
        discretion: "Discrétion",
        flexibility: "Flexibilité",
      },
      imageAlt: "Bureau propre et moderne",
      ariaLabel: "Nos valeurs",
    },
    contact: {
      title: "Formulaire de contact",
      intro: "Nous opérons dans {locations} pour vous.",
      description:
        "Remplissez le formulaire – nous vous répondrons rapidement avec une offre sans engagement.",
      quickContact: "Contact rapide",
      callAriaLabel: "Appeler",
      whatsappAriaLabel: "Démarrer une conversation WhatsApp",
      emailAriaLabel: "Envoyer un e-mail",
    },
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "E-mail",
      emailPlaceholder: "name@exemple.ch",
      phone: "Numéro de téléphone",
      phonePlaceholder: "+41 78 234 66 99",
      service: "Service",
      serviceSelect: "Veuillez sélectionner",
      message: "Message",
      messagePlaceholder: "Décrivez votre demande...",
      detailedOffer: "Devis détaillé souhaité",
      submitButton: "Ouvrir l'e-mail avec la demande",
      submitAriaLabel: "Ouvrir le formulaire e-mail standard avec la demande",
      formAriaLabel: "Formulaire de contact",
      subject: "Demande de devis – Suuberi Nettoyage",
      greeting: "Bonjour Suuberi,",
      thankYou: "Merci beaucoup et cordialement",
      labels: {
        name: "Nom: ",
        email: "E-mail: ",
        phone: "Téléphone: ",
        service: "Service: ",
        detailedOffer: "Devis détaillé: ",
        message: "Message:",
      },
      yes: "Oui",
      no: "Non",
    },
    footer: {
      company: "Suuberi Nettoyage",
      description: "Nettoyage et conciergerie à Bienne, Berne et Jura. Nettoyage de fin de bail, nettoyage de fin de construction, nettoyage de vitrages et de façades, nettoyage spécialisé, entretien de jardins.",
      contact: "Contact",
      callAriaLabel: "Appeler",
      whatsappAriaLabel: "Démarrer une conversation WhatsApp",
      emailAriaLabel: "Envoyer un e-mail",
      emailLabel: "E-mail:",
      phoneLabel: "Téléphone:",
      regions: "Régions: Bienne · Berne · Jura",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      imprint: "Mentions légales",
      tradingInformation: "Registre du commerce: Suberi inh Boudova",
      alternativeContact: "Contact alternatif:",
      alternativePhone: "+41 78 709 82 33",
      alternativePhoneAriaLabel: "Appeler le numéro de téléphone alternatif 078 709 82 33",
      copyright: "© 2025 Suuberi Nettoyage. Tous droits réservés.",
    },
    sections: {
      services: "Services",
      servicesSubtitle: "Tout sous un même toit – fiable, durable et juste.",
      why: "Pourquoi Suuberi?",
      process: "En 3 étapes pour une offre",
      reviews: "Évaluations des clients",
      reviewsRating: "sur 5 étoiles",
      whyItems: [
        "Produits respectueux de l'environnement",
        "Disponibilité rapide",
        "Contrats flexibles",
      ],
      processSteps: [
        "Prendre contact",
        "Recevoir une offre",
        "Profiter du nettoyage",
      ],
    },
    skipToContent: "Aller au contenu",
    learnMore: "En savoir plus →",
    services: {
      "unterhaltsreinigung": {
        title: "Nettoyage régulier",
        shortDescription: "Nettoyage régulier pour les bureaux, les cabinets et les propriétés – fiable et planifiable."
      },
      "fahzeugevermietung": {
        title: "Location de véhicules",
        shortDescription: "Location professionnelle de véhicules pour les besoins commerciaux et privés."
      },
      "endreinigung-umzug": {
        title: "Nettoyage de fin de bail",
        shortDescription: "Nettoyage en profondeur des appartements et maisons, y compris garantie de réception sur demande."
      },
      "bauendreinigung": {
        title: "Nettoyage de fin de construction",
        shortDescription: "Fini la poussière de construction : nettoyage après travaux de construction et rénovation pour la première occupation."
      },
      "fenster-fassaden-storenreinigung": {
        title: "Nettoyage des vitres, façades et stores",
        shortDescription: "Vitres sans traces, façades soignées et stores propres – intérieur et extérieur."
      },
      "spezialreinigungen": {
        title: "Nettoyages spécialisés",
        shortDescription: "Des tapis aux meubles rembourrés en passant par les parkings souterrains – nous nous occupons des cas spéciaux."
      },
      "gartenpflege-multiservices": {
        title: "Entretien des jardins et multiservices",
        shortDescription: "Pelouse, haies, chemins, service d'hiver et petites réparations – tout sous un même toit."
      }
    },
  }
};

export const getLocaleData = (locale: Locale) => i18n[locale];
