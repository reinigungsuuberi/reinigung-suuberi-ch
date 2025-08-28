"use client";

import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import { ServiceDetail } from "../data/services";

type ServicesSectionProps = {
  id?: string;
  services: ServiceDetail[];
};

const ServicesSection = ({ id = "dienstleistungen", services }: ServicesSectionProps) => {
  return (
    <section id={id} className="py-16 sm:py-20 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title="Dienstleistungen" subtitle="Alles aus einer Hand – zuverlässig, nachhaltig und fair." />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              icon={s.icon}
              title={s.title}
              description={s.shortDescription}
              iconAlt={s.alt || s.title}
              href={`/dienstleistungen/${s.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


