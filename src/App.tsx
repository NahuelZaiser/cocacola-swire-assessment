import { useCallback } from 'react';
import { Header } from '@/components/Header';
import { Stepper } from '@/components/Stepper';
import { AntiCheatBanner, TimeoutOverlay } from '@/components/Overlays';
import { IntroScreen } from '@/screens/IntroScreen';
import { SjtScreen } from '@/screens/SjtScreen';
import { ErrorsScreen } from '@/screens/ErrorsScreen';
import { PalletScreen } from '@/screens/PalletScreen';
import { StoryScreen } from '@/screens/StoryScreen';
import { ApproachScreen } from '@/screens/ApproachScreen';
import { ResultsScreen } from '@/screens/ResultsScreen';
import { useAssessment } from '@/hooks/useAssessment';

function App() {
  const ass = useAssessment();

  // Wire timeout callbacks so the hook can advance phases when timers expire
  ass.setCallbacks({
    onSjtTimeout: () => ass.advanceFromSjtToErrors(),
    onErrorsTimeout: () => ass.advanceFromErrorsToPallet(),
    onPalletTimeout: () => ass.advanceFromPalletToStory(),
    onStoryTimeout: () => ass.advanceFromStoryToApproach(),
    onApproachTimeout: () => ass.goToResults(),
  });

  const handleRestart = useCallback(() => {
    ass.resetAttemptState();
  }, [ass]);

  const stageStatusMap: Record<typeof ass.stage, string> = {
    intro: 'Preparación',
    sjt: 'Criterio operativo',
    errors: 'Verificación logística',
    pallet: 'Cálculo de pallet',
    story: 'Evaluación conductual',
    approach: 'Alineación cultural',
    results: 'Resultado final',
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-900">
      <div className="bg-[radial-gradient(circle_at_top,_rgba(230,27,43,0.2),transparent_28%),linear-gradient(180deg,#050505_0%,#111827_100%)]">
        <Header timerSeconds={ass.timeRemaining} timerActive={ass.timerActive} />
        <Stepper current={ass.stage} />

        <AntiCheatBanner message={ass.antiCheatMessage} />
        <TimeoutOverlay visible={ass.timeoutOverlay} />

        <main className="pb-10">
          {ass.stage === 'intro' && <IntroScreen onStart={ass.startAssessment} />}
          {ass.stage === 'sjt' && <SjtScreen ass={ass} />}
          {ass.stage === 'errors' && <ErrorsScreen ass={ass} />}
          {ass.stage === 'pallet' && <PalletScreen ass={ass} />}
          {ass.stage === 'story' && <StoryScreen ass={ass} />}
          {ass.stage === 'approach' && <ApproachScreen ass={ass} />}
          {ass.stage === 'results' && <ResultsScreen ass={ass} onRestart={handleRestart} />}
        </main>
      </div>
    </div>
  );
}

export default App;
