import { Timer } from './Timer';

interface HeaderProps {
  timerSeconds: number;
  timerActive: boolean;
}

export function Header({ timerSeconds, timerActive }: HeaderProps) {
  return (
    <header className="glass-header sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          <div className="flex items-center min-w-0">
            <div className="flex items-center justify-center min-w-0">
              <img
                src="./cocacola-transparent.png"
                alt="Coca-Cola"
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto max-w-[320px] object-contain select-none drop-shadow-sm"
              />
            </div>
          </div>
          <Timer seconds={timerSeconds} active={timerActive} />
        </div>
      </div>
    </header>
  );
}
