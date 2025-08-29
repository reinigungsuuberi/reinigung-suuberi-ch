"use client";

import SectionHeading from "./SectionHeading";
import ContactFormMailto from "./ContactFormMailto";
import { useEffect, useState } from "react";
import { RiPhoneLine, RiWhatsappLine, RiMailLine } from "react-icons/ri";

type ContactSectionProps = {
  locations: string[];
  services: { title: string }[];
};

const ContactSection = ({ locations, services }: ContactSectionProps) => {
  const [defaultServiceTitle, setDefaultServiceTitle] = useState<string>("");

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const fromQuery = params.get("service") || "";
      if (fromQuery) {
        setDefaultServiceTitle(fromQuery);
        return;
      }
      const hash = window.location.hash || ""; // e.g. #kontakt
      if (hash.includes("service=")) {
        const after = hash.split("?")[1] || "";
        const sp = new URLSearchParams(after);
        const fromHash = sp.get("service") || "";
        if (fromHash) setDefaultServiceTitle(fromHash);
      }
    } catch {}
  }, []);

  return (
    <section id="kontakt" className="py-16 sm:py-20 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <SectionHeading title="Kontaktformular" align="left" />
            <p className="mt-3 text-[var(--foreground)]">
              Wir sind in {locations.join(", ")} für Sie im Einsatz.
            </p>
            <p className="mt-2 text-[var(--color-muted)]">
              Füllen Sie das Formular aus – wir melden uns zeitnah mit einem
              unverbindlichen Angebot.
            </p>
            <div className="mt-4 flex items-center gap-2" aria-label="Schnellkontakt">
              <a
                href="tel:+41782346699"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white text-[var(--foreground)] shadow-sm hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                aria-label="Anrufen"
                tabIndex={0}
              >
                <RiPhoneLine className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/41782346699"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white text-[var(--foreground)] shadow-sm hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                aria-label="WhatsApp Chat starten"
                tabIndex={0}
              >
                <RiWhatsappLine className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:info@suuberi-reinigung.ch"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white text-[var(--foreground)] shadow-sm hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                aria-label="E-Mail schreiben"
                tabIndex={0}
              >
                <RiMailLine className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          <ContactFormMailto services={services} defaultServiceTitle={defaultServiceTitle} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;