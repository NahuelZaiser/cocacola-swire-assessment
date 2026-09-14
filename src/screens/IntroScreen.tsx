import {
  ClipboardCheck,
  ScanLine,
  PackageCheck,
  MessageSquare,
  Brain,
  ShieldCheck,
  Clock,
  AlertTriangle,
} from 'lucide-react';

interface IntroScreenProps {
  onStart: () => void;
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-200 bg-white/80 shadow-[0_0_28px_rgba(230,27,43,0.08)] mb-6 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-[#E61B2B]" />
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
              Sitio: swirecocacola.hirevue-app.com
            </span>
          </div>
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
            Entidad: Swire Coca-Cola | Coca-Cola
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.05em] text-slate-900 mb-4 leading-none">
            Evaluación de
            <span className="block text-[#B80D1A] mt-2">idoneidad operativa</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Esta evaluación forma parte del proceso de selección para roles operativos dentro de la red de
            distribución de Swire Coca-Cola. Tiene como objetivo medir su criterio de decisión, precisión en la
            revisión de inventario, capacidad de gestión bajo presión operativa y alineación con los estándares de
            seguridad y cumplimiento del negocio.
          </p>
        </div>

        <div className="surface-card p-6 sm:p-8 mb-6 border border-red-100 bg-gradient-to-br from-white via-red-50/40 to-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
          <h2 className="text-lg font-extrabold text-slate-900 mb-5 flex items-center gap-2">
            <ClipboardCheck className="w-5 h-5 text-[#E61B2B]" />
            Módulos de la evaluación
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: ClipboardCheck, title: 'Escenarios en el lugar de trabajo', short: 'SJT', desc: 'Leerás un escenario y seleccionarás la mejor respuesta según la situación.', time: '~4 min' },
              { icon: ScanLine, title: 'Check for Errors', short: 'Errors', desc: 'Completarás una tarea usando información de apoyo y detectarás discrepancias.', time: '~2 min' },
              { icon: PackageCheck, title: 'Cálculo de capacidad del pallet', short: 'Pallet', desc: 'Calcularás cuántos palets completos puedes formar y cuántas cajas quedan sueltas.', time: '~2 min' },
              { icon: MessageSquare, title: 'Tell Us Your Story', short: 'Story', desc: 'Leerás preguntas y elegirás la mejor respuesta de una lista de opciones.', time: '~6 min' },
              { icon: Brain, title: 'Describe Your Approach', short: 'Approach', desc: 'Seleccionarás cuál afirmación te describe mejor en una comparación directa.', time: '~14 min' },
            ].map((item, i) => (
              <div
                key={i}
                className="surface-card-hover flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-[0_16px_30px_rgba(15,23,42,0.06)] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#E61B2B]" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                    <span className="text-[10px] font-semibold text-[#E61B2B] px-1.5 py-0.5 rounded bg-red-50 border border-red-100">
                      {item.short}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-400 mb-1">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card p-6 mb-8 border-l-4 border-l-amber-400 bg-[#fffaf3]">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Reglas del entorno de evaluación</h3>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  Cada módulo representa un criterio operativo del puesto y cuenta con tiempo de respuesta definido.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  El cambio de pestaña, la pérdida de foco o la interrupción del entorno se registrará como incidencia de integridad.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  Se evaluará precisión, criterio de decisión y capacidad para priorizar riesgo, seguridad y cumplimiento operacional.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  Al concluir la evaluación, se entregará un informe consolidado con rendimiento global y KPIs por competencia.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button onClick={onStart} className="btn-primary inline-block max-w-xs">
            Iniciar evaluación
          </button>
          <p className="text-xs text-slate-400 mt-4">
            Al continuar aceptas las reglas del entorno de evaluación de Swire Coca-Cola.
          </p>
        </div>
      </div>
    </div>
  );
}
