import { ChevronRight } from 'lucide-react';
import type { UseAssessmentReturn } from '@/hooks/useAssessment';

interface ApproachScreenProps {
  ass: UseAssessmentReturn;
}

export function ApproachScreen({ ass }: ApproachScreenProps) {
  const pair = ass.approachPairsRandom[ass.approachIndex];
  const total = ass.approachPairsRandom.length;
  if (!pair) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in" key={ass.approachIndex}>
      <div className="flex items-center justify-between mb-4">
        <span className="badge-section">Fase 5 — Describe Your Approach</span>
        <span className="text-sm font-bold text-slate-400 tabular-nums">
          {ass.approachIndex + 1} / {total}
        </span>
      </div>

      <p className="text-slate-600 text-sm mb-6 max-w-2xl">
        De cada par de afirmaciones, elige la que mejor describe tu forma de trabajar. No hay respuestas correctas o
        incorrectas — responde con honestidad y con base en tu estilo real de operación.
      </p>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <button
          onClick={() => ass.selectApproachPair('A')}
          className={`
            text-left p-5 sm:p-6 rounded-2xl border-2 transition-all flex items-start gap-4 min-h-[88px] focus-ring
            ${ass.approachSelectedChoice === 'A' ? 'opt-selected' : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-card'}
          `}
        >
          <div
            className={`w-7 h-7 rounded-full border-2 flex-shrink-0 flex items-center justify-center font-extrabold text-sm transition-all ${
              ass.approachSelectedChoice === 'A' ? 'border-[#E61B2B] bg-[#E61B2B] text-white' : 'border-slate-300 text-slate-400'
            }`}
          >
            A
          </div>
          <p className={`text-sm sm:text-base leading-relaxed ${ass.approachSelectedChoice === 'A' ? 'text-slate-900 font-semibold' : 'text-slate-700'}`}>
            {pair.a}
          </p>
        </button>

        <button
          onClick={() => ass.selectApproachPair('B')}
          className={`
            text-left p-5 sm:p-6 rounded-2xl border-2 transition-all flex items-start gap-4 min-h-[88px] focus-ring
            ${ass.approachSelectedChoice === 'B' ? 'opt-selected' : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-card'}
          `}
        >
          <div
            className={`w-7 h-7 rounded-full border-2 flex-shrink-0 flex items-center justify-center font-extrabold text-sm transition-all ${
              ass.approachSelectedChoice === 'B' ? 'border-[#E61B2B] bg-[#E61B2B] text-white' : 'border-slate-300 text-slate-400'
            }`}
          >
            B
          </div>
          <p className={`text-sm sm:text-base leading-relaxed ${ass.approachSelectedChoice === 'B' ? 'text-slate-900 font-semibold' : 'text-slate-700'}`}>
            {pair.b}
          </p>
        </button>
      </div>

      <button
        onClick={ass.confirmApproachPair}
        disabled={!ass.approachSelectedChoice}
        className="btn-primary"
      >
        <span className="flex items-center justify-center gap-2">
          {ass.approachIndex === total - 1 ? 'Finalizar evaluación' : 'Siguiente par'}
          <ChevronRight className="w-4 h-4" />
        </span>
      </button>
    </div>
  );
}
