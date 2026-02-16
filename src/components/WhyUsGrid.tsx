"use client";

import { useLocale } from "@/lib/LocaleProvider";
import GeometricIcon from "./GeometricIcon";
import { useScrollReveal } from "@/hooks/useScrollEffects";

type WhyItem = { label: string; iconType: "eco" | "speed" | "flexibility" };

const WhyUsGrid = () => {
  const { t } = useLocale();
  const ref = useScrollReveal();
  
  const items: WhyItem[] = [
    { label: t.sections.whyItems[0], iconType: "eco" },
    { label: t.sections.whyItems[1], iconType: "speed" },
    { label: t.sections.whyItems[2], iconType: "flexibility" },
  ];

  const dotColors = [
    "bg-emerald-400",
    "bg-cyan-400",
    "bg-pink-400",
  ];

  return (
    <div ref={ref} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
      {items.map((item, idx) => (
        <div key={item.label} className="group relative">
          {/* Clean glass card */}
          <div className="relative backdrop-blur-xl bg-white/80 border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center mb-5 text-gray-800" aria-hidden>
              <GeometricIcon type={item.iconType} className="h-10 w-10" />
            </div>
            
            {/* Label */}
            <p className="font-semibold text-gray-900">{item.label}</p>

            {/* Floating accent dot */}
            <div className={`absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full ${dotColors[idx]} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUsGrid;


