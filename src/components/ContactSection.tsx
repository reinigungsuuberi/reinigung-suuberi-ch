"use client";

import SectionHeading from "./SectionHeading";
import ContactFormMailto from "./ContactFormMailto";

type ContactSectionProps = {
  locations: string[];
  services: { title: string }[];
};

const ContactSection = ({ locations, services }: ContactSectionProps) => {
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
          </div>
          <ContactFormMailto services={services} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;