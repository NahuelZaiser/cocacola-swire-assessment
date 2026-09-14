import { useMemo, useState } from 'react';
import { Package, Calculator, ArrowRight } from 'lucide-react';
import type { UseAssessmentReturn } from '@/hooks/useAssessment';

interface PalletScreenProps {
  ass: UseAssessmentReturn;
}

export function PalletScreen({ ass }: PalletScreenProps) {
  const [fullPallets, setFullPallets] = useState('');
  const [leftoverBoxes, setLeftoverBoxes] = useState('');
  const [error, setError] = useState<string | null>(null);

  const current = ass.palletItems[ass.palletIndex];
  const totalQuestions = ass.palletItems.length;
  const questionNumber = Math.min(ass.palletIndex + 1, totalQuestions);

  const prompt = useMemo(() => {
    if (!current) return null;
    return `${current.totalBoxes} cajas ÷ ${current.boxesPerPallet} cajas por pallet`;
  }, [current]);

  if (!current) return null;

  const handleSubmit = () => {
    if (!fullPallets.trim() || !leftoverBoxes.trim()) {
      setError('Completa los dos campos para continuar.');
      return;
    }

    const fullValue = Number(fullPallets);
    const leftoverValue = Number(leftoverBoxes);

    if (!Number.isFinite(fullValue) || !Number.isFinite(leftoverValue)) {
      setError('Ingresa solo números válidos.');
      return;
    }

    setError(null);
    ass.submitPalletAnswer(fullValue, leftoverValue);
    setFullPallets('');
    setLeftoverBoxes('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in">
      <div className="surface-card p-4 sm:p-5 mb-6 bg-gradient-to-r from-slate-50 via-white to-slate-50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <span className="badge-section">Fase 3 — Cálculo de pallet</span>
            <p className="text-slate-600 text-sm max-w-2xl">
              Calcula cuántos palets completos puedes armar y cuántas cajas quedan sueltas. La velocidad y la precisión son determinantes.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wide text-slate-600">
            <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1">Pregunta {questionNumber}/{totalQuestions}</span>
            <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1">Tiempo: 20s</span>
          </div>
        </div>
      </div>

      <div className="surface-card p-5 sm:p-7">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center">
            <Calculator className="w-5 h-5 text-slate-700" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Cálculo de capacidad</p>
            <h2 className="text-xl font-extrabold text-slate-900">{current.title}</h2>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
              <Package className="w-4 h-4 text-slate-600" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-2">Instrucción</p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{current.instruction}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <label className="block">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-2 block">Palets completos</span>
            <input
              type="number"
              inputMode="numeric"
              value={fullPallets}
              onChange={(e) => setFullPallets(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-lg font-bold text-slate-900 focus:border-[#E61B2B] focus:outline-none focus:ring-4 focus:ring-red-100"
              placeholder="Ej: 11"
            />
          </label>

          <label className="block">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-2 block">Cajas sueltas</span>
            <input
              type="number"
              inputMode="numeric"
              value={leftoverBoxes}
              onChange={(e) => setLeftoverBoxes(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-lg font-bold text-slate-900 focus:border-[#E61B2B] focus:outline-none focus:ring-4 focus:ring-red-100"
              placeholder="Ej: 10"
            />
          </label>
        </div>

        {error && (
          <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 font-medium">
            {error}
          </div>
        )}

        <div className="flex items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-medium">
            Cálculo de referencia: <span className="font-bold text-slate-700">{prompt}</span>
          </div>
          <button onClick={handleSubmit} className="btn-primary inline-flex items-center gap-2">
            Siguiente
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
