"use client";

import Image from "next/image";
import { RiPhoneLine, RiWhatsappLine, RiMailLine, RiMapPinLine, RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";
import { useLocale } from "@/lib/LocaleProvider";

const Footer = () => {
    const { locale, t } = useLocale();
    const baseUrl = locale === "fr" ? "/fr" : "";
    return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Section - Logo and tagline */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/img/new.png"
              alt="Suuberi Logo"
              width={200}
              height={200}
              className="h-28 w-auto brightness-0 invert mx-auto"
            />
          </Link>
          <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {locale === "fr" ? "Fiable. Durable. Équitable." : "Zuverlässig. Nachhaltig. Fair."}
          </p>
          <p className="text-gray-400 max-w-md mx-auto">
            {t.footer.description}
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold text-lg mb-6">{t.footer.contact}</h3>
            <div className="flex justify-center md:justify-start gap-4 mb-6">
              <a
                href="tel:+41782346699"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                aria-label={t.footer.callAriaLabel}
              >
                <RiPhoneLine className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/41782346699"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                aria-label={t.footer.whatsappAriaLabel}
              >
                <RiWhatsappLine className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@suuberi-reinigung.ch"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                aria-label={t.footer.emailAriaLabel}
              >
                <RiMailLine className="h-5 w-5" />
              </a>
            </div>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="mailto:info@suuberi-reinigung.ch" className="hover:text-white transition-colors">
                  info@suuberi-reinigung.ch
                </a>
              </li>
              <li>
                <a href="tel:+41782346699" className="hover:text-white transition-colors">
                  +41 78 234 66 99
                </a>
              </li>
            </ul>
          </div>

          {/* Regions */}
          <div className="text-center">
            <h3 className="text-white font-semibold text-lg mb-6">
              {locale === "fr" ? "Régions" : "Regionen"}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Biel", "Bern", "Jura"].map((region) => (
                <span 
                  key={region}
                  className="px-4 py-2 rounded-full bg-white/10 text-gray-300 text-sm"
                >
                  <RiMapPinLine className="inline-block mr-1 h-4 w-4" />
                  {region}
                </span>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold text-lg mb-6">{t.footer.legal}</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href={`${baseUrl}/datenschutz`}
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  {t.footer.privacy}
                  <RiArrowRightLine className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link 
                  href={`${baseUrl}/impressum`}
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  {t.footer.imprint}
                  <RiArrowRightLine className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Suuberi Reinigung. {locale === "fr" ? "Tous droits réservés." : "Alle Rechte vorbehalten."}
          </p>
          <p className="text-xs text-gray-600">
            {t.footer.tradingInformation}
          </p>
        </div>
      </div>
    </footer>
    );
  }

export default Footer;