import { forwardRef } from "react";
import ContactFormMailto from "./ContactFormMailto";
import { RiPhoneLine, RiWhatsappLine, RiMailLine } from "react-icons/ri";
import { useLocale } from "@/lib/LocaleProvider";
import { useScrollReveal } from "@/hooks/useScrollEffects";
import type { ServiceDetail } from "@/data/services";

type ContactSectionProps = {
  locations: string[];
  services: ServiceDetail[];
  formRef?: React.RefObject<HTMLDivElement | null>;
};

const ContactSection = forwardRef<HTMLDivElement, ContactSectionProps>(
  ({ locations, services, formRef }, ref) => {
    const { t } = useLocale();
    const contentRef = useScrollReveal();

  return (
    <section id="kontakt" className="relative min-h-screen py-32 sm:py-40 overflow-hidden snap-section flex items-center" ref={formRef}>
      {/* Liquid glass background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-teal-100/25 to-green-100/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="animate-in">
            <h2 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tighter mb-10">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {t.contact.intro.replace("{locations}", locations.join(", "))}
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              {t.contact.description}
            </p>
            <div className="flex items-center gap-6" aria-label={t.contact.quickContact}>
              <a
                href="tel:+41782346699"
                className="group relative inline-flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur-xl bg-white/60 border border-white/20 text-gray-900 hover:bg-white/70 transition-all shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-4 hover:-translate-y-1"
                aria-label={t.contact.callAriaLabel}
                tabIndex={0}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <RiPhoneLine className="h-7 w-7 relative z-10" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/41782346699"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur-xl bg-white/60 border border-white/20 text-gray-900 hover:bg-white/70 transition-all shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-4 hover:-translate-y-1"
                aria-label={t.contact.whatsappAriaLabel}
                tabIndex={0}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <RiWhatsappLine className="h-7 w-7 relative z-10" aria-hidden="true" />
              </a>
              <a
                href="mailto:info@suuberi-reinigung.ch"
                className="group relative inline-flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur-xl bg-white/60 border border-white/20 text-gray-900 hover:bg-white/70 transition-all shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-4 hover:-translate-y-1"
                aria-label={t.contact.emailAriaLabel}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <RiMailLine className="h-7 w-7 relative z-10" aria-hidden="true" />
              </a>
            </div>
          </div>
          <ContactFormMailto services={services.map((s) => ({ title: s.title }))} />
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;