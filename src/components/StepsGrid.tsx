"use client";

type Step = { step: number; title: string; icon: string };

const steps: Step[] = [
  { step: 1, title: "Kontakt aufnehmen", icon: "✉️" },
  { step: 2, title: "Angebot erhalten", icon: "📬" },
  { step: 3, title: "Reinigung geniessen", icon: "🏡" },
];

const StepsGrid = () => {
  return (
    <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((s) => (
        <li key={s.step} className="rounded-xl bg-white p-6 shadow-sm border border-black/5">
          <div className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden>
              {s.icon}
            </span>
            <p className="font-medium text-[var(--foreground)]">
              {s.step}. {s.title}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default StepsGrid;


