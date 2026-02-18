"use client";

import Link from "next/link";
import { useLocale } from "@/lib/LocaleProvider";
import GeometricIcon from "./GeometricIcon";
import { useScrollReveal } from "@/hooks/useScrollEffects";

type ServiceCardProps = {
  icon: string;
  iconType?: "broom" | "factory" | "home" | "construction" | "window" | "sparkle" | "garden";
  title: string;
  description: string;
  iconAlt?: string;
  href?: string;
  className?: string;
};

const ServiceCard = ({ icon, iconType, title, description, href, className }: ServiceCardProps) => {
  const { t } = useLocale();
  const ref = useScrollReveal();
  
  if (!href) {
    return (
      <article ref={ref} className={`pb-8 border-b border-gray-200 last:border-b-0 ${className || ''}`}>
        {iconType ? (
          <div className="inline-flex mb-6 text-gray-900" aria-hidden>
            <GeometricIcon type={iconType} className="h-12 w-12" />
          </div>
        ) : (
          <div className="text-5xl mb-6">{icon}</div>
        )}
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
      </article>
    );
  }

  return (
    <div ref={ref} className={className}>
      <Link
        href={href}
        className="block p-8 h-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-4 rounded-2xl group"
        aria-label={`${title} – ${t.learnMore}`}
      >
        {/* Icon in bordered box */}
        <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-gray-200 rounded-xl mb-6 group-hover:border-gray-300 transition-colors" aria-hidden>
          {iconType ? (
            <GeometricIcon type={iconType} className="h-10 w-10 text-gray-800" />
          ) : (
            <span className="text-3xl">{icon}</span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        <div className="inline-flex items-center text-gray-900 font-medium group-hover:text-gray-700 transition-colors">
          {t.learnMore}
          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;


