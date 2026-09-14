import { Clock } from 'lucide-react';

interface TimerProps {
  seconds: number;
  active: boolean;
}

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

export function Timer({ seconds, active }: TimerProps) {
  if (!active) return null;

  let stateClass = '';
  if (seconds <= 30) stateClass = 'timer-urgent';
  else if (seconds <= 60) stateClass = 'timer-warning';

  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white font-bold text-sm transition-all ${stateClass}`}
    >
      <Clock className="w-4 h-4" />
      <span className="mono tabular-nums">{formatTime(seconds)}</span>
    </div>
  );
}
