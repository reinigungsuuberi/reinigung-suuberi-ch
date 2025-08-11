"use client";

import { useRef } from "react";

type ContactFormMailtoProps = {
  services: { title: string }[];
};

const ContactFormMailto = ({ services }: ContactFormMailtoProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const data = new FormData(form);
        const name = String(data.get("name") || "");
        const email = String(data.get("email") || "");
        const phone = String(data.get("phone") || "");
        const message = String(data.get("message") || "");
        const service = String(data.get("service") || "");
        const detailed = data.get("detailed") ? "Ja" : "Nein";

        const subject = `Angebotsanfrage – Suuberi Reinigung`;
        const bodyLines = [
          "Hallo Suuberi,",
          "",
          `Name: ${name}`,
          `E-Mail: ${email}`,
          `Telefon: ${phone}`,
          service ? `Dienstleistung: ${service}` : "Dienstleistung: ",
          `Detailliertes Angebot: ${detailed}`,
          "",
          "Nachricht:",
          message,
          "",
          "Vielen Dank und freundliche Grüsse",
          name || "",
        ];
        const mailto = `mailto:info@suuberi-reinigung.ch?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
        window.location.href = mailto;
      }}
      className="rounded-xl bg-white p-6 shadow-sm border border-black/5"
      aria-label="Kontaktformular"
    >
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Ihr Name"
            className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            aria-required="true"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="name@beispiel.ch"
              className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              Telefonnummer
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+41 78 234 66 99"
              className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            />
          </div>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium">
            Dienstleistung
          </label>
          <select
            id="service"
            name="service"
            className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            defaultValue=""
          >
            <option value="" disabled>
              Bitte wählen
            </option>
            {services.map((s) => (
              <option key={s.title} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Beschreiben Sie Ihr Anliegen..."
            className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            aria-required="true"
          />
        </div>
        <label className="inline-flex items-center gap-2">
          <input
            id="detailed"
            name="detailed"
            type="checkbox"
            className="h-4 w-4 rounded border-black/20 text-[var(--color-primary)] focus:ring-[var(--color-secondary)]"
            aria-label="Detailliertes Angebot gewünscht"
          />
          <span className="text-sm">Detailliertes Angebot gewünscht</span>
        </label>
        <button
          type="submit"
          className="mt-2 inline-flex justify-center items-center gap-2 rounded-md bg-[var(--color-primary)] px-5 py-3 text-white font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]"
          aria-label="Standard-E-Mail mit Anfrage öffnen"
        >
          E-Mail mit Anfrage öffnen
        </button>
      </div>
    </form>
  );
};

export default ContactFormMailto;


