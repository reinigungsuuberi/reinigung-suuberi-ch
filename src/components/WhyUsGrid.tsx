"use client";

type WhyItem = { label: string; icon: string };

const items: WhyItem[] = [
  { label: "20+ Jahre Erfahrung", icon: "🏆" },
  { label: "Umweltfreundliche Produkte", icon: "🌿" },
  { label: "Schnelle Einsatzbereitschaft", icon: "⏱️" },
  { label: "Flexible Verträge", icon: "📄" },
];

const WhyUsGrid = () => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl bg-white p-6 shadow-sm border border-black/5 text-center"
        >
          <div className="text-3xl" aria-hidden>
            {item.icon}
          </div>
          <p className="mt-3 font-medium text-[var(--foreground)]">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyUsGrid;


