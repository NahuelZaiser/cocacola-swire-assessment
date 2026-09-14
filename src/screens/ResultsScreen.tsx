import { useEffect, useState, useMemo } from 'react';
import {
  Award,
  Target,
  ScanLine,
  PackageCheck,
  ShieldCheck,
  UserCheck,
  AlertTriangle,
  Printer,
  RotateCcw,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';
import type { UseAssessmentReturn } from '@/hooks/useAssessment';

interface ResultsScreenProps {
  ass: UseAssessmentReturn;
  onRestart: () => void;
}

function ScoreRing({ score }: { score: number }) {
  const [animScore, setAnimScore] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setAnimScore(score), 300);
    return () => clearTimeout(t);
  }, [score]);

  const clamped = Math.max(0, Math.min(100, animScore));
  const deg = (clamped / 100) * 360;
  const color = score >= 75 ? '#10B981' : score >= 50 ? '#F59E0B' : '#EF4444';
  const label = score >= 75 ? 'Apto — Recomendado' : score >= 50 ? 'Condicional' : 'No recomendado';

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-44 h-44 rounded-full flex items-center justify-center transition-all"
        style={{
          background: `conic-gradient(${color} ${deg}deg, #F1F5F9 ${deg}deg)`,
          transition: 'background 1s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="absolute inset-3 rounded-full bg-white flex flex-col items-center justify-center shadow-inner">
          <span className="text-4xl font-extrabold text-slate-900 tabular-nums">{animScore}</span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Puntaje Global</span>
        </div>
      </div>
      <div
        className="mt-4 px-4 py-1.5 rounded-full text-sm font-bold"
        style={{ backgroundColor: `${color}15`, color }}
      >
        {label}
      </div>
    </div>
  );
}

function KpiCard({
  icon: Icon,
  title,
  score,
  description,
  delay,
}: {
  icon: typeof Target;
  title: string;
  score: number;
  description: string;
  delay: number;
}) {
  const [animWidth, setAnimWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setAnimWidth(score), 100 + delay);
    return () => clearTimeout(t);
  }, [score, delay]);

  const color = score >= 75 ? '#10B981' : score >= 50 ? '#F59E0B' : '#EF4444';
  const bgColor = score >= 75 ? 'bg-emerald-50' : score >= 50 ? 'bg-amber-50' : 'bg-red-50';
  const TrendIcon = score >= 60 ? TrendingUp : TrendingDown;

  return (
    <div className="surface-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center`}>
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <div className="flex items-center gap-1.5">
          <TrendIcon className="w-3.5 h-3.5" style={{ color }} />
          <span className="text-2xl font-extrabold text-slate-900 tabular-nums">{score}</span>
          <span className="text-xs font-bold text-slate-400">/100</span>
        </div>
      </div>
      <h3 className="font-bold text-slate-900 text-sm mb-1">{title}</h3>
      <p className="text-xs text-slate-500 mb-3 leading-relaxed">{description}</p>
      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
        <div
          className="h-full rounded-full meter-fill-anim"
          style={{ width: `${animWidth}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function DiagnosticBox({
  icon: Icon,
  title,
  text,
  variant,
}: {
  icon: typeof Target;
  title: string;
  text: string;
  variant: 'success' | 'warning' | 'error';
}) {
  const styles = {
    success: { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'text-emerald-600', title: 'text-emerald-900' },
    warning: { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-600', title: 'text-amber-900' },
    error: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-600', title: 'text-red-900' },
  }[variant];

  return (
    <div className={`p-4 rounded-2xl border ${styles.bg} ${styles.border}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${styles.icon} flex-shrink-0 mt-0.5`} />
        <div>
          <h4 className={`font-bold text-sm ${styles.title} mb-1`}>{title}</h4>
          <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}

export function ResultsScreen({ ass, onRestart }: ResultsScreenProps) {
  const results = useMemo(() => ass.computeResults(), [ass]);

  const correctEntries = useMemo(() => ass.auditEntries.filter((entry) => entry.isCorrect), [ass.auditEntries]);
  const wrongEntries = useMemo(() => ass.auditEntries.filter((entry) => !entry.isCorrect), [ass.auditEntries]);

  const diagnostics = useMemo(() => {
    const items: { icon: typeof Target; title: string; text: string; variant: 'success' | 'warning' | 'error' }[] = [];

    if (results.sjtPct >= 75) {
      items.push({
        icon: Award,
        title: 'Criterio operativo sólido',
        text: 'Demuestras buen juicio ante escenarios críticos de ruta, priorizando seguridad y protocolo.',
        variant: 'success',
      });
    } else if (results.sjtPct < 50) {
      items.push({
        icon: AlertTriangle,
        title: 'Criterio operativo a reforzar',
        text: 'Se recomienda revisar los protocolos de seguridad, FIFO y manejo de imprevistos en góndola.',
        variant: 'warning',
      });
    }

    if (results.errorFalseAlarms > 3) {
      items.push({
        icon: ScanLine,
        title: 'Precisión logística',
        text: `${results.errorFalseAlarms} falsos positivos detectados. Se recomienda mayor atención al detalle en comparación de albaranes.`,
        variant: 'warning',
      });
    } else if (results.errorPct >= 70) {
      items.push({
        icon: ScanLine,
        title: 'Alta precisión de inventario',
        text: 'Excelente capacidad para detectar discrepancias entre registros del sistema y etiquetas físicas.',
        variant: 'success',
      });
    }

    if (results.safetyPct >= 80) {
      items.push({
        icon: ShieldCheck,
        title: 'Fuerte orientación a la seguridad',
        text: 'Tu perfil muestra un compromiso consistente con los protocolos de EPP y manejo seguro de carga.',
        variant: 'success',
      });
    } else if (results.safetyPct < 50) {
      items.push({
        icon: AlertTriangle,
        title: 'Seguridad laboral crítica',
        text: 'Se detectaron respuestas que comprometen la seguridad personal y la integridad de la carga.',
        variant: 'error',
      });
    }

    if (results.tabSwitches > 0) {
      items.push({
        icon: AlertTriangle,
        title: 'Integridad del proceso',
        text: `Se registraron ${results.tabSwitches} pérdidas de foco durante la evaluación. Esto se incluye en el reporte de auditoría.`,
        variant: 'warning',
      });
    }

    return items;
  }, [results]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in">
      {/* Print-only header */}
      <div className="hidden print:block mb-6">
        <h1 className="text-2xl font-bold">Reporte de Evaluación — Swire Coca-Cola</h1>
        <p className="text-sm text-slate-500">Fecha: {new Date().toLocaleDateString('es-MX')}</p>
      </div>

      <div className="text-center mb-8 no-print">
        <span className="badge-section">Informe final de evaluación</span>
      </div>

      {/* Global score */}
      <div className="surface-card p-6 sm:p-8 mb-6 bg-gradient-to-br from-white via-red-50/40 to-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center md:justify-start">
            <ScoreRing score={results.finalGlobalScore} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-[-0.03em]">
              Resumen ejecutivo de evaluación
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Este reporte consolida tu desempeño a través de 5 dimensiones críticas del puesto de
              Repositor/Merchandiser. El puntaje global pondera criterio operativo, precisión logística,
              inspección de seguridad, orientación a la seguridad y alineación cultural.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Fases completadas</p>
                <p className="text-lg font-extrabold text-slate-900">5 / 5</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Integridad</p>
                <p className="text-lg font-extrabold text-slate-900">
                  {results.tabSwitches === 0 ? 'Sin incidencias' : `${results.tabSwitches} alertas`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Grid */}
      <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 mt-8">
        Indicadores por Competencia
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="transform transition-all duration-200 hover:-translate-y-1">
          <KpiCard
            icon={Target}
            title="Criterio Operativo (SJT)"
            score={results.sjtPct}
            description="Capacidad de juicio ante escenarios críticos de ruta y góndola."
            delay={0}
          />
        </div>
        <div className="transform transition-all duration-200 hover:-translate-y-1">
          <KpiCard
            icon={ScanLine}
            title="Precisión Logística"
            score={results.errorPct}
            description="Detección de discrepancias entre sistema y etiquetas físicas."
            delay={100}
          />
        </div>
        <div className="transform transition-all duration-200 hover:-translate-y-1">
          <KpiCard
            icon={PackageCheck}
            title="Cálculo de Pallet"
            score={results.palletPct}
            description="Precisión en el cálculo de palets completos y cajas sobrantes."
            delay={200}
          />
        </div>
        <div className="transform transition-all duration-200 hover:-translate-y-1">
          <KpiCard
            icon={ShieldCheck}
            title="Orientación a Seguridad"
            score={results.safetyPct}
            description="Compromiso con EPP, protocolos ergonómicos y manejo seguro."
            delay={300}
          />
        </div>
        <div className="transform transition-all duration-200 hover:-translate-y-1">
          <KpiCard
            icon={UserCheck}
            title="Alineación Cultural"
            score={results.autonomyPct}
            description="Fit con valores de autonomía, resiliencia y ética de Swire."
            delay={400}
          />
        </div>
        <div className="transform transition-all duration-200 hover:-translate-y-1">
          <KpiCard
            icon={Award}
            title="Integridad del Proceso"
            score={results.integrityScore}
            description="Foco sostenido durante la evaluación sin cambios de ventana."
            delay={500}
          />
        </div>
      </div>

      {/* Diagnostic boxes */}
      <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 mt-8">
        Diagnóstico Detallado
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {diagnostics.length > 0 ? (
          diagnostics.map((d, i) => (
            <DiagnosticBox key={i} icon={d.icon} title={d.title} text={d.text} variant={d.variant} />
          ))
        ) : (
          <DiagnosticBox
            icon={Award}
            title="Evaluación balanceada"
            text="Tu desempeño se encuentra dentro de los parámetros esperados en todas las dimensiones evaluadas."
            variant="success"
          />
        )}
      </div>

      {/* Stats detail */}
      <div className="surface-card p-5 mb-8 bg-gradient-to-br from-slate-50 to-white">
        <h3 className="font-bold text-slate-900 text-sm mb-4">Métricas de Precisión</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Ítems procesados</p>
            <p className="text-xl font-extrabold text-slate-900 tabular-nums">{results.errorProcessed}</p>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 shadow-sm">
            <p className="text-[10px] uppercase font-bold text-emerald-600 mb-1">Aciertos</p>
            <p className="text-xl font-extrabold text-emerald-700 tabular-nums">{results.errorHits}</p>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-3 shadow-sm">
            <p className="text-[10px] uppercase font-bold text-red-600 mb-1">Falsos positivos</p>
            <p className="text-xl font-extrabold text-red-600 tabular-nums">{results.errorFalseAlarms}</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 shadow-sm">
            <p className="text-[10px] uppercase font-bold text-amber-600 mb-1">Alertas integridad</p>
            <p className="text-xl font-extrabold text-amber-600 tabular-nums">{results.tabSwitches}</p>
          </div>
        </div>
      </div>

      <div className="surface-card p-5 mb-8 border-dashed border-slate-300 bg-[linear-gradient(135deg,#fff,#f8fafc)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-[0.18em] text-slate-500 mb-2">Feedback final</p>
            <h3 className="font-bold text-slate-900 text-base mb-2">Documento de evaluación con respuestas correctas e incorrectas</h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
              Este reporte incluye cada respuesta registrada, cada escenario evaluado y una comparación clara entre lo que
              respondió el participante y la respuesta esperada en cada fase.
            </p>
          </div>
          <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-red-50 border border-red-100 text-[#E61B2B] font-bold">
            PDF
          </div>
        </div>
      </div>

      <div className="answer-grid grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        <div className="surface-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 text-base">Preguntas correctas</h3>
            <span className="rounded-full bg-emerald-100 text-emerald-700 px-2.5 py-1 text-xs font-bold">
              {correctEntries.length}
            </span>
          </div>
          <div className="answer-list-panel space-y-3 max-h-[500px] overflow-auto pr-1">
            {correctEntries.length > 0 ? (
              correctEntries.map((entry, index) => (
                <div key={`${entry.stage}-${index}`} className="answer-card rounded-2xl border border-emerald-200 bg-emerald-50 p-3">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-700">{entry.stageLabel}</span>
                    <span className="text-[10px] font-bold text-emerald-700">Correcto</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{entry.question}</p>
                  <p className="text-xs text-slate-600">Respuesta: {entry.userAnswer}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500">No hubo respuestas correctas registradas.</p>
            )}
          </div>
        </div>

        <div className="surface-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 text-base">Preguntas con error</h3>
            <span className="rounded-full bg-red-100 text-red-700 px-2.5 py-1 text-xs font-bold">
              {wrongEntries.length}
            </span>
          </div>
          <div className="answer-list-panel space-y-3 max-h-[500px] overflow-auto pr-1">
            {wrongEntries.length > 0 ? (
              wrongEntries.map((entry, index) => (
                <div key={`${entry.stage}-${index}`} className="answer-card rounded-2xl border border-red-200 bg-red-50 p-3">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-red-700">{entry.stageLabel}</span>
                    <span className="text-[10px] font-bold text-red-700">Revisión</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{entry.question}</p>
                  <p className="text-xs text-slate-600 mb-1">Tu respuesta: {entry.userAnswer}</p>
                  <p className="text-xs text-slate-600 mb-1">Respuesta esperada: {entry.correctAnswer}</p>
                  {entry.detail && <p className="text-[11px] text-red-700">Feedback: {entry.detail}</p>}
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500">No hubo errores en esta evaluación.</p>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 no-print">
        <button onClick={() => window.print()} className="btn-primary flex-1">
          <span className="flex items-center justify-center gap-2">
            <Printer className="w-4 h-4" />
            Exportar / Imprimir reporte
          </span>
        </button>
        <button
          onClick={onRestart}
          className="flex-1 py-4 px-6 rounded-full border-2 border-slate-300 text-slate-700 font-bold text-base hover:bg-slate-50 transition focus-ring min-h-[52px]"
        >
          <span className="flex items-center justify-center gap-2">
            <RotateCcw className="w-4 h-4" />
            Reiniciar evaluación
          </span>
        </button>
      </div>

      <p className="text-center text-xs text-slate-400 mt-6 no-print">
        Swire Coca-Cola — Enterprise Assessment Environment. Reporte generado automáticamente.
      </p>
    </div>
  );
}
