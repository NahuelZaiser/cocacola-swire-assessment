import { ArrowLeft, ArrowRight, FileCheck, FileX, Check, X } from 'lucide-react';
import type { UseAssessmentReturn } from '@/hooks/useAssessment';

interface ErrorsScreenProps {
  ass: UseAssessmentReturn;
}

export function ErrorsScreen({ ass }: ErrorsScreenProps) {
  const item = ass.errorQueue[ass.errorIndex];
  const total = ass.errorQueue.length;
  if (!item) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in" key={ass.errorIndex}>
      <div className="surface-card p-4 sm:p-5 mb-5 bg-slate-50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <span className="badge-section">Fase 2 — Check for Errors</span>
            <p className="text-slate-600 text-sm max-w-2xl">
              Verifique la trazabilidad del pallet contra el remito digital. Confirme si la etiqueta física coincide con
              SKU, descripción, cantidad y lote antes de liberar la carga.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wide text-slate-600">
            <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1">Remito: RT-48291</span>
            <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1">Pallet: P-2048</span>
            <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1">DC Norte</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold text-slate-400 tabular-nums">
          {ass.errorIndex + 1} / {total}
        </span>
      </div>

      <p className="text-slate-600 text-sm mb-6 max-w-2xl">
        Compara el registro del sistema contra la etiqueta física del pallet. Presiona{' '}
        <kbd className="mono text-xs px-2 py-0.5 rounded bg-slate-100 border border-slate-300">COINCIDEN</kbd> si son
        idénticos, o <kbd className="mono text-xs px-2 py-0.5 rounded bg-slate-100 border border-slate-300">DISCREPANCIA</kbd> si hay alguna diferencia. Esta simulación puede estar cronometrada.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* System record */}
        <div className="surface-card overflow-hidden">
          <div className="bg-slate-800 text-white px-5 py-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Sistema · Remito Digital</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">WMS-01</span>
          </div>
          <div className="p-5 space-y-3">
            <div>
              <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">SKU</p>
              <p className="mono text-sm font-bold text-slate-900">{item.sku}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">Descripción</p>
              <p className="text-sm text-slate-700">{item.desc}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">Cantidad</p>
                <p className="mono text-xl font-bold text-slate-900">{item.invQty}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">Lote</p>
                <p className="mono text-sm font-bold text-slate-900">{item.invLot}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Physical label */}
        <div className="surface-card overflow-hidden border-2 border-dashed border-slate-300">
          <div className="bg-slate-100 text-slate-700 px-5 py-3 flex items-center justify-between gap-2 border-b border-slate-300">
            <div className="flex items-center gap-2">
              <FileX className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Etiqueta Física · Pallet</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Label-02</span>
          </div>
          <div className="p-5 space-y-3">
            <div>
              <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">SKU</p>
              <p className="mono text-sm font-bold text-slate-900">{item.invSkuPhys || item.sku}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">Descripción</p>
              <p className="text-sm text-slate-700">{item.physDesc ?? item.desc}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">Cantidad</p>
                <p className="mono text-xl font-bold text-slate-900">{item.physQty}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">Lote</p>
                <p className="mono text-sm font-bold text-slate-900">{item.physLot}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <button
          onClick={() => ass.submitErrorChoice(true)}
          className="flex flex-col items-center justify-center gap-2 min-h-[54px] py-4 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-emerald-700 font-extrabold text-base sm:text-lg transition-all hover:bg-emerald-100 hover:border-emerald-300 hover:-translate-y-px focus-ring"
        >
          <span className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            COINCIDEN
          </span>
          <span className="mono text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-800">
            [ ← ]
          </span>
        </button>
        <button
          onClick={() => ass.submitErrorChoice(false)}
          className="flex flex-col items-center justify-center gap-2 min-h-[54px] py-4 rounded-2xl bg-red-50 border-2 border-red-200 text-red-700 font-extrabold text-base sm:text-lg transition-all hover:bg-red-100 hover:border-red-300 hover:-translate-y-px focus-ring"
        >
          <span className="flex items-center gap-2">
            <X className="w-5 h-5" />
            DISCREPANCIA
          </span>
          <span className="mono text-[10px] font-bold px-2 py-0.5 rounded bg-red-200 text-red-800">
            [ → ]
          </span>
        </button>
      </div>

      <div className="hidden sm:flex items-center justify-center gap-6 mt-6 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <ArrowLeft className="w-3 h-3" /> Tecla izquierda = Coinciden
        </span>
        <span className="flex items-center gap-1.5">
          Tecla derecha = Discrepancia <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}
