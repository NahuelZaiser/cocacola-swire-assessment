import { Timer } from './Timer';

interface HeaderProps {
  timerSeconds: number;
  timerActive: boolean;
}

export function Header({ timerSeconds, timerActive }: HeaderProps) {
  return (
    <header className="glass-header sticky top-0 z-50 border-b border-red-100 bg-white/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          <div className="flex items-center min-w-0">
            <div className="flex items-center justify-center min-w-0 rounded-full bg-white px-2 py-1 shadow-[0_0_18px_rgba(230,27,43,0.08)] ring-1 ring-red-100">
              <img
                src="./cocacola-transparent.png"
                alt="Coca-Cola"
                className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto max-w-[260px] object-contain select-none"
              />
            </div>
          </div>
          <Timer seconds={timerSeconds} active={timerActive} />
        </div>
      </div>
    </header>
  );
}
