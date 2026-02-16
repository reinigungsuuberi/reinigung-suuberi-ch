"use client";

import { useRef } from "react";
import { useLocale } from "@/lib/LocaleProvider";

type ContactFormMailtoProps = {
  services: { title: string }[];
};

const ContactFormMailto = ({ services }: ContactFormMailtoProps) => {
  const { t } = useLocale();
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
        const detailed = data.get("detailed") ? t.form.yes : t.form.no;

        const subject = t.form.subject;
        const bodyLines = [
          t.form.greeting,
          "",
          `${t.form.labels.name}${name}`,
          `${t.form.labels.email}${email}`,
          `${t.form.labels.phone}${phone}`,
          service ? `${t.form.labels.service}${service}` : `${t.form.labels.service} `,
          `${t.form.labels.detailedOffer}${detailed}`,
          "",
          `${t.form.labels.message}`,
          message,
          "",
          t.form.thankYou,
          name || "",
        ];
        const mailto = `mailto:info@suuberi-reinigung.ch?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
        window.location.href = mailto;
      }}
      className="rounded-xl bg-white p-10 shadow-lg"
      aria-label={t.form.formAriaLabel}
    >
      <div className="grid grid-cols-1 gap-7">
        <div>
          <label htmlFor="name" className="block text-base font-semibold text-gray-900">
            {t.form.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t.form.namePlaceholder}
            className="mt-2 w-full rounded-lg border border-gray-300 px-5 py-4 text-base text-gray-900 placeholder-gray-400 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 transition"
            aria-required="true"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
          <div>
            <label htmlFor="email" className="block text-base font-semibold text-gray-900">
              {t.form.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={t.form.emailPlaceholder}
              className="mt-2 w-full rounded-lg border border-gray-300 px-5 py-4 text-base text-gray-900 placeholder-gray-400 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 transition"
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-base font-semibold text-gray-900">
              {t.form.phone}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder={t.form.phonePlaceholder}
              className="mt-2 w-full rounded-lg border border-gray-300 px-5 py-4 text-base text-gray-900 placeholder-gray-400 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 transition"
            />
          </div>
        </div>
        <div>
          <label htmlFor="service" className="block text-base font-semibold text-gray-900">
            {t.form.service}
          </label>
          <select
            id="service"
            name="service"
            className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-5 py-4 text-base text-gray-900 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 transition"
            defaultValue=""
          >
            <option value="" disabled>
              {t.form.serviceSelect}
            </option>
            {services.map((s) => (
              <option key={s.title} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-base font-semibold text-gray-900">
            {t.form.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder={t.form.messagePlaceholder}
            className="mt-2 w-full rounded-lg border border-gray-300 px-5 py-4 text-base text-gray-900 placeholder-gray-400 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 transition"
            aria-required="true"
          />
        </div>
        <label className="inline-flex items-center gap-3 cursor-pointer">
          <input
            id="detailed"
            name="detailed"
            type="checkbox"
            className="h-5 w-5 rounded border-gray-300 text-gray-900 focus:ring-gray-900 focus:ring-2 transition"
            aria-label={t.form.detailedOffer}
          />
          <span className="text-base text-gray-700 font-medium">{t.form.detailedOffer}</span>
        </label>
        <button
          type="submit"
          className="mt-4 inline-flex justify-center items-center gap-2 rounded-lg bg-gray-900 px-10 py-5 text-lg text-white font-semibold hover:bg-gray-800 active:bg-gray-950 shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          aria-label={t.form.submitAriaLabel}
        >
          {t.form.submitButton}
        </button>
      </div>
    </form>
  );
};

export default ContactFormMailto;


