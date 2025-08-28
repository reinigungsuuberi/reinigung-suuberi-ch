"use client";

import Link from "next/link";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  iconAlt?: string;
  href?: string;
};

const ServiceCard = ({ icon, title, description, iconAlt, href }: ServiceCardProps) => {
  if (!href) {
    return (
      <article className="rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow transition">
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label={iconAlt || title}>
            {icon}
          </span>
          <h3 className="text-xl font-semibold text-[var(--foreground)]">{title}</h3>
        </div>
        <p className="mt-3 text-[var(--color-muted)]">{description}</p>
      </article>
    );
  }

  return (
    <Link
      href={href}
      className="block rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]"
      aria-label={`${title} – Details & Preise anzeigen`}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl" role="img" aria-label={iconAlt || title}>
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-[var(--foreground)]">{title}</h3>
      </div>
      <p className="mt-3 text-[var(--color-muted)]">{description}</p>
      <span className="mt-4 inline-flex items-center text-[var(--color-primary)]">Mehr erfahren →</span>
    </Link>
  );
};

export default ServiceCard;


