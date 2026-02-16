"use client";

import { useLocale } from "@/lib/LocaleProvider";
import { useScrollReveal } from "@/hooks/useScrollEffects";

type Step = { step: number; title: string };

const StepsGrid = () => {
  const { t } = useLocale();
  const ref = useScrollReveal<HTMLOListElement>();
  
  const steps: Step[] = [
    { step: 1, title: t.sections.processSteps[0] },
    { step: 2, title: t.sections.processSteps[1] },
    { step: 3, title: t.sections.processSteps[2] },
  ];

  return (
    <ol ref={ref} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
      {steps.map((s, idx) => (
        <li key={s.step} className="flex flex-col items-start gap-4 group">
          {/* Liquid glass card */}
          <div className="relative backdrop-blur-xl bg-white/60 border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/70 w-full">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl font-bold text-white">{s.step}</span>
              </div>
              <p className="font-semibold text-lg text-gray-900 leading-relaxed group-hover:text-gray-800 transition-colors">
                {s.title}
              </p>
            </div>

            {/* Connecting line for desktop */}
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute top-20 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-x-4"></div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default StepsGrid;


