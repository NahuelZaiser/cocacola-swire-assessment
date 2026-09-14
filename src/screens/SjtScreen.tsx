import { Check, X } from 'lucide-react';
import type { UseAssessmentReturn } from '@/hooks/useAssessment';

interface SjtScreenProps {
  ass: UseAssessmentReturn;
}

export function SjtScreen({ ass }: SjtScreenProps) {
  const scenario = ass.sjtDatabase[ass.sjtIndex];
  const total = ass.sjtDatabase.length;
  const isLast = ass.sjtIndex === total - 1;
  const canProceed = ass.sjtBestChoice !== null && ass.sjtWorstChoice !== null && ass.sjtBestChoice !== ass.sjtWorstChoice;

  if (!scenario) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in" key={ass.sjtIndex}>
      <div className="flex items-center justify-between mb-4">
        <span className="badge-section">Fase 1 — Escenarios en el lugar de trabajo</span>
        <span className="text-sm font-bold text-slate-400 tabular-nums">
          {ass.sjtIndex + 1} / {total}
        </span>
      </div>

      <div className="surface-card p-6 sm:p-8 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
            <span className="text-[#E61B2B] font-extrabold text-sm">{ass.sjtIndex + 1}</span>
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Situación</span>
        </div>
        <p className="text-slate-800 text-base sm:text-lg leading-relaxed">{scenario.scenario}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
          Selecciona la mejor y la peor respuesta
        </h3>
        <div className="space-y-3">
          {scenario.options.map((opt) => {
            const isBest = ass.sjtBestChoice === opt.id;
            const isWorst = ass.sjtWorstChoice === opt.id;
            return (
              <div
                key={opt.id}
                className={`surface-card surface-card-hover p-4 sm:p-5 border-2 transition-all ${
                  isBest || isWorst ? 'opt-selected' : 'border-transparent'
                }`}
              >
                <p className="text-slate-700 text-sm sm:text-base mb-4 leading-relaxed">{opt.text}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => ass.setSjtChoice(opt.id, 'best')}
                    className={`
                      flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all min-h-[44px] focus-ring
                      ${isBest
                        ? 'bg-emerald-500 text-white shadow-[0_8px_16px_rgba(16,185,129,0.2)]'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 hover:-translate-y-px'
                      }
                    `}
                  >
                    <Check className="w-4 h-4" />
                    Mejor
                  </button>
                  <button
                    onClick={() => ass.setSjtChoice(opt.id, 'worst')}
                    className={`
                      flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all min-h-[44px] focus-ring
                      ${isWorst
                        ? 'bg-red-500 text-white shadow-[0_8px_16px_rgba(239,68,68,0.2)]'
                        : 'bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 hover:-translate-y-px'
                      }
                    `}
                  >
                    <X className="w-4 h-4" />
                    Peor
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={ass.nextSjt}
        disabled={!canProceed}
        className="btn-primary"
      >
        {isLast ? 'Confirmar y continuar a Errores' : 'Confirmar respuesta'}
      </button>
      {!canProceed && (
        <p className="text-center text-xs text-slate-400 mt-3">
          Selecciona una opción como Mejor y otra como Peor para continuar.
        </p>
      )}
    </div>
  );
}
