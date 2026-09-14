import { useEffect, useState } from 'react';
import { AlertTriangle, ShieldAlert, Clock } from 'lucide-react';

export function AntiCheatBanner({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-2rem)] max-w-lg fade-in">
      <div className="flex items-start gap-3 bg-amber-50 border border-amber-300 rounded-2xl px-4 py-3 shadow-lg">
        <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800 font-medium">{message}</p>
      </div>
    </div>
  );
}

export function TimeoutOverlay({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm fade-in">
      <div className="bg-white rounded-3xl p-8 max-w-md mx-4 text-center shadow-2xl">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
          <Clock className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="text-xl font-extrabold text-slate-900 mb-2">Tiempo agotado</h3>
        <p className="text-slate-600 text-sm">
          La fase ha concluido por límite de tiempo. El sistema avanzará automáticamente a la siguiente sección.
        </p>
      </div>
    </div>
  );
}

export function Toast({ message, type = 'info' }: { message: string; type?: 'info' | 'success' | 'error' }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  const colors = {
    info: 'bg-slate-800 text-white',
    success: 'bg-emerald-600 text-white',
    error: 'bg-red-600 text-white',
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] fade-in">
      <div className={`px-5 py-3 rounded-full shadow-lg text-sm font-semibold ${colors[type]}`}>
        {message}
      </div>
    </div>
  );
}

export function ConfirmModal({
  visible,
  title,
  message,
  confirmLabel,
  onConfirm,
  onCancel,
}: {
  visible: boolean;
  title: string;
  message: string;
  confirmLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-[65] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm fade-in">
      <div className="bg-white rounded-3xl p-6 max-w-sm mx-4 shadow-2xl">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-lg">{title}</h3>
            <p className="text-sm text-slate-600 mt-1">{message}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3 rounded-full border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition focus-ring"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-full bg-[#E61B2B] text-white font-bold text-sm hover:bg-[#B80D1A] transition focus-ring"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
