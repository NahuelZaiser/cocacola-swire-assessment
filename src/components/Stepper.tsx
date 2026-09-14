import { Check } from 'lucide-react';
import type { Stage } from '@/types';

interface StepperProps {
  current: Stage;
}

const STEPS: { key: Stage; label: string; shortLabel: string }[] = [
  { key: 'sjt', label: 'Escenarios operativos', shortLabel: 'SJT' },
  { key: 'errors', label: 'Revisión de discrepancias', shortLabel: 'Errors' },
  { key: 'pallet', label: 'Cálculo de pallet', shortLabel: 'Pallet' },
  { key: 'story', label: 'Historia operativa', shortLabel: 'Story' },
  { key: 'approach', label: 'Enfoque de trabajo', shortLabel: 'Approach' },
];

const STEP_ORDER: Stage[] = ['sjt', 'errors', 'pallet', 'story', 'approach'];

export function Stepper({ current }: StepperProps) {
  if (current === 'intro' || current === 'results') return null;

  const currentIdx = STEP_ORDER.indexOf(current);

  return (
    <div className="border-b border-white/10 bg-[#090909]/85 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          {STEPS.map((step, idx) => {
            const isCompleted = idx < currentIdx;
            const isActive = idx === currentIdx;
            return (
              <div key={step.key} className="flex items-center flex-1 last:flex-none min-w-0">
                <div className="flex flex-col items-center gap-1.5 min-w-0 w-full">
                  <div
                    className={`
                      flex items-center justify-center w-9 h-9 rounded-full border-2 font-bold text-sm transition-all duration-200
                      ${isCompleted ? 'bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-500/20' : ''}
                      ${isActive ? 'bg-[#1f1113] border-[#E61B2B] text-[#FECACA] shadow-[0_0_0_4px_rgba(230,27,43,0.14)] scale-[1.03]' : ''}
                      ${!isCompleted && !isActive ? 'bg-white/5 border-white/10 text-slate-400' : ''}
                    `}
                  >
                    {isCompleted ? <Check className="w-5 h-5" /> : idx + 1}
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs font-semibold truncate ${
                      isActive ? 'text-[#FCA5A5]' : isCompleted ? 'text-emerald-400' : 'text-slate-400'
                    }`}
                  >
                    {step.shortLabel}
                  </span>
                </div>
                {idx < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 sm:mx-3 mb-5 rounded-full transition-all duration-300 ${
                      idx < currentIdx ? 'bg-emerald-500' : 'bg-white/10'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
