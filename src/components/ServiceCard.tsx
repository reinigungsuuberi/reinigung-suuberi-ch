"use client";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  iconAlt?: string;
};

const ServiceCard = ({ icon, title, description, iconAlt }: ServiceCardProps) => {
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
};

export default ServiceCard;


