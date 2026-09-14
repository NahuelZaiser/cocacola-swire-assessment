import { useCallback, useEffect, useRef, useState } from 'react';
import type { TestState, Stage, StoryOption, AssessmentAuditEntry } from '@/types';
import { masterSjtBank } from '@/data/sjtBank';
import { errorMasterBank } from '@/data/errorBank';
import { palletQuestionBank } from '@/data/palletBank';
import { storyQuestions } from '@/data/storyBank';
import { approachPairs } from '@/data/approachBank';
import { shuffleArray } from '@/utils/shuffle';

interface TimerCallbacks {
  onSjtTimeout: () => void;
  onErrorsTimeout: () => void;
  onPalletTimeout: () => void;
  onStoryTimeout: () => void;
  onApproachTimeout: () => void;
}

export function useAssessment() {
  const [stage, setStage] = useState<Stage>('intro');
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [tabSwitches, setTabSwitches] = useState(0);
  const [antiCheatMessage, setAntiCheatMessage] = useState<string | null>(null);
  const [timeoutOverlay, setTimeoutOverlay] = useState(false);

  const stateRef = useRef<TestState>({
    currentStage: 'intro',
    tabSwitches: 0,
    auditEntries: [],
    sjtIndex: 0,
    sjtBestChoice: null,
    sjtWorstChoice: null,
    sjtTotalScore: 0,
    errorQueue: [],
    errorIndex: 0,
    errorHits: 0,
    errorFalseAlarms: 0,
    errorProcessed: 0,
    errorResultsSnapshot: null,
    palletItems: [],
    palletIndex: 0,
    palletCorrectAnswers: 0,
    palletSelectedIds: new Set(),
    storyIndex: 0,
    storySelectedOpt: null,
    storyScore: 0,
    approachIndex: 0,
    approachSelectedChoice: null,
    approachTraits: [],
  });

  const [sjtDatabase, setSjtDatabase] = useState(() => shuffleArray(masterSjtBank).slice(0, 4));
  const [storyQuestionsRandom, setStoryQuestionsRandom] = useState(() => shuffleArray(storyQuestions));
  const [approachPairsRandom, setApproachPairsRandom] = useState(() => shuffleArray(approachPairs));
  const [, forceTick] = useState(0);

  const reRender = useCallback(() => forceTick((t) => t + 1), []);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cbRef = useRef<TimerCallbacks | null>(null);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setTimerActive(false);
  }, []);

  const startStageTimer = useCallback(
    (durationSeconds: number, onTimeout: () => void) => {
      stopTimer();
      setTimeRemaining(durationSeconds);
      setTimerActive(true);
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            stopTimer();
            setTimeoutOverlay(true);
            setTimeout(() => {
              setTimeoutOverlay(false);
              onTimeout();
            }, 1500);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    },
    [stopTimer],
  );

  const setCallbacks = useCallback((cbs: TimerCallbacks) => {
    cbRef.current = cbs;
  }, []);

  const buildErrorQueue = useCallback(() => {
    const totalScenarioCount = 20;
    const matchTarget = 8;
    const mismatchTarget = totalScenarioCount - matchTarget;

    const pickUniqueBySku = (items: typeof errorMasterBank, limit: number) => {
      const seen = new Set<string>();
      const selected: typeof errorMasterBank = [];

      for (const item of shuffleArray(items)) {
        if (seen.has(item.sku)) continue;
        seen.add(item.sku);
        selected.push(item);
        if (selected.length >= limit) break;
      }

      return selected;
    };

    const matches = pickUniqueBySku(errorMasterBank.filter((item) => item.match), matchTarget);
    const sku = pickUniqueBySku(errorMasterBank.filter((item) => item.discrepancyType === 'sku'), 3);
    const description = pickUniqueBySku(errorMasterBank.filter((item) => item.discrepancyType === 'description'), 3);
    const quantity = pickUniqueBySku(errorMasterBank.filter((item) => item.discrepancyType === 'quantity'), 3);
    const lot = pickUniqueBySku(errorMasterBank.filter((item) => item.discrepancyType === 'lot'), 3);

    const mismatches = shuffleArray([...sku, ...description, ...quantity, ...lot]);
    const uniqueMismatches: typeof errorMasterBank = [];
    const mismatchSkuSeen = new Set<string>();

    for (const item of mismatches) {
      if (mismatchSkuSeen.has(item.sku)) continue;
      mismatchSkuSeen.add(item.sku);
      uniqueMismatches.push(item);
      if (uniqueMismatches.length >= mismatchTarget) break;
    }

    if (matches.length !== matchTarget || uniqueMismatches.length !== mismatchTarget) {
      throw new Error(`Error bank generation failed. Expected ${matchTarget} matches and ${mismatchTarget} mismatches, got ${matches.length} and ${uniqueMismatches.length}.`);
    }

    const finalQueue = shuffleArray([...matches, ...uniqueMismatches]);
    const finalUniqueQueue: typeof errorMasterBank = [];
    const finalSeen = new Set<string>();

    for (const item of finalQueue) {
      if (finalSeen.has(item.sku)) continue;
      finalSeen.add(item.sku);
      finalUniqueQueue.push(item);
      if (finalUniqueQueue.length >= totalScenarioCount) break;
    }

    if (finalUniqueQueue.length !== totalScenarioCount) {
      throw new Error(`Final queue size mismatch. Expected ${totalScenarioCount}, got ${finalUniqueQueue.length}.`);
    }

    const matchCount = finalUniqueQueue.filter((item) => item.match).length;
    if (matchCount !== matchTarget) {
      throw new Error(`Final queue match count mismatch. Expected ${matchTarget}, got ${matchCount}.`);
    }

    return finalUniqueQueue;
  }, []);

  const buildPalletSet = useCallback(() => {
    const totalScenarioCount = 7;
    const shuffledPool = shuffleArray([...palletQuestionBank]);
    const finalSet = shuffledPool.slice(0, totalScenarioCount);

    if (finalSet.length !== totalScenarioCount) {
      throw new Error(`Pallet bank generation failed. Expected ${totalScenarioCount} scenarios, got ${finalSet.length}.`);
    }

    return finalSet;
  }, []);

  const persistErrorMetrics = useCallback(() => {
    stateRef.current.errorResultsSnapshot = {
      errorHits: stateRef.current.errorHits,
      errorFalseAlarms: stateRef.current.errorFalseAlarms,
      errorProcessed: stateRef.current.errorProcessed,
    };
  }, []);

  const appendAuditEntry = useCallback((entry: AssessmentAuditEntry) => {
    stateRef.current.auditEntries = [...stateRef.current.auditEntries, entry];
  }, []);

  const resetAttemptState = useCallback(() => {
    stopTimer();
    setTabSwitches(0);
    setAntiCheatMessage(null);
    setTimeoutOverlay(false);

    const fresh = shuffleArray(masterSjtBank).slice(0, 4);
    setSjtDatabase(fresh);
    setStoryQuestionsRandom(shuffleArray(storyQuestions));
    setApproachPairsRandom(shuffleArray(approachPairs));

    stateRef.current = {
      currentStage: 'intro',
      tabSwitches: 0,
      auditEntries: [],
      sjtIndex: 0,
      sjtBestChoice: null,
      sjtWorstChoice: null,
      sjtTotalScore: 0,
      errorQueue: [],
      errorIndex: 0,
      errorHits: 0,
      errorFalseAlarms: 0,
      errorProcessed: 0,
      errorResultsSnapshot: null,
      palletItems: [],
      palletIndex: 0,
      palletCorrectAnswers: 0,
      palletSelectedIds: new Set(),
      storyIndex: 0,
      storySelectedOpt: null,
      storyScore: 0,
      approachIndex: 0,
      approachSelectedChoice: null,
      approachTraits: [],
    };
    setStage('intro');
    reRender();
  }, [stopTimer, reRender]);

  // Anti-cheat listeners
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && stateRef.current.currentStage !== 'intro' && stateRef.current.currentStage !== 'results') {
        const count = stateRef.current.tabSwitches + 1;
        stateRef.current.tabSwitches = count;
        setTabSwitches(count);
        setAntiCheatMessage(
          `Advertencia: Pérdida de foco detectada (${count}). El sistema HireVue registra cambios de ventana como penalización en el reporte.`,
        );
        setTimeout(() => setAntiCheatMessage(null), 5000);
      }
    };
    const handleBlur = () => {
      if (stateRef.current.currentStage !== 'intro' && stateRef.current.currentStage !== 'results') {
        const count = stateRef.current.tabSwitches + 1;
        stateRef.current.tabSwitches = count;
        setTabSwitches(count);
        setAntiCheatMessage(
          `Advertencia: Pérdida de foco detectada (${count}). El sistema HireVue registra cambios de ventana como penalización en el reporte.`,
        );
        setTimeout(() => setAntiCheatMessage(null), 5000);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('blur', handleBlur);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  // Keyboard shortcuts for errors phase
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (stateRef.current.currentStage === 'errors') {
        if (e.key === 'ArrowLeft') submitErrorChoice(true);
        else if (e.key === 'ArrowRight') submitErrorChoice(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // ---- Navigation ----
  const showScreen = useCallback((s: Stage) => {
    stateRef.current.currentStage = s;
    setStage(s);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const startAssessment = useCallback(() => {
    resetAttemptState();
    showScreen('sjt');
    if (cbRef.current) startStageTimer(240, cbRef.current.onSjtTimeout);
    stateRef.current.sjtBestChoice = null;
    stateRef.current.sjtWorstChoice = null;
    reRender();
  }, [resetAttemptState, showScreen, startStageTimer, reRender]);

  // ---- SJT ----
  const setSjtChoice = useCallback(
    (optId: number, type: 'best' | 'worst') => {
      if (type === 'best') {
        if (stateRef.current.sjtWorstChoice === optId) stateRef.current.sjtWorstChoice = null;
        stateRef.current.sjtBestChoice = optId;
      } else {
        if (stateRef.current.sjtBestChoice === optId) stateRef.current.sjtBestChoice = null;
        stateRef.current.sjtWorstChoice = optId;
      }
      reRender();
    },
    [reRender],
  );

  const nextSjt = useCallback(() => {
    const current = sjtDatabase[stateRef.current.sjtIndex];
    const bestOpt = current.options.find((o) => o.id === stateRef.current.sjtBestChoice);
    const worstOpt = current.options.find((o) => o.id === stateRef.current.sjtWorstChoice);
    const isCorrect = Boolean(bestOpt && worstOpt && bestOpt.id !== worstOpt.id && bestOpt.isBest && worstOpt.isWorst);
    const points = isCorrect ? 100 : 0;

    appendAuditEntry({
      stage: 'sjt',
      stageLabel: 'Criterio operativo',
      question: current.scenario,
      userAnswer: `${bestOpt?.text ?? 'No seleccionada'} | ${worstOpt?.text ?? 'No seleccionada'}`,
      correctAnswer: `${current.options.find((o) => o.isBest)?.text ?? ''} | ${current.options.find((o) => o.isWorst)?.text ?? ''}`,
      isCorrect,
      detail: `Puntaje: ${points}/100`,
    });

    stateRef.current.sjtTotalScore += points;
    stateRef.current.sjtIndex++;
    stateRef.current.sjtBestChoice = null;
    stateRef.current.sjtWorstChoice = null;
    if (stateRef.current.sjtIndex < sjtDatabase.length) {
      reRender();
    } else {
      advanceFromSjtToErrors();
    }
  }, [appendAuditEntry, sjtDatabase, reRender]);

  const advanceFromSjtToErrors = useCallback(() => {
    stopTimer();
    showScreen('errors');
    stateRef.current.errorQueue = buildErrorQueue();
    stateRef.current.errorIndex = 0;
    stateRef.current.errorHits = 0;
    stateRef.current.errorFalseAlarms = 0;
    stateRef.current.errorProcessed = 0;
    stateRef.current.errorResultsSnapshot = null;
    if (cbRef.current) startStageTimer(120, cbRef.current.onErrorsTimeout);
    reRender();
  }, [buildErrorQueue, stopTimer, showScreen, startStageTimer, reRender]);

  // ---- Errors ----
  const advanceFromErrorsToPallet = useCallback(() => {
    persistErrorMetrics();
    stopTimer();
    showScreen('pallet');
    stateRef.current.palletItems = buildPalletSet();
    stateRef.current.palletIndex = 0;
    stateRef.current.palletCorrectAnswers = 0;
    stateRef.current.palletSelectedIds = new Set();
    if (cbRef.current) startStageTimer(120, cbRef.current.onPalletTimeout);
    reRender();
  }, [buildPalletSet, persistErrorMetrics, stopTimer, showScreen, startStageTimer, reRender]);

  const submitErrorChoice = useCallback(
    (userSaysMatch: boolean) => {
      if (stateRef.current.currentStage !== 'errors') return;
      const currentItem = stateRef.current.errorQueue[stateRef.current.errorIndex];
      if (!currentItem) return;
      stateRef.current.errorProcessed++;
      const isActualMatch = currentItem.match;
      const answeredCorrectly = userSaysMatch === isActualMatch;
      if (answeredCorrectly) {
        stateRef.current.errorHits++;
      } else {
        stateRef.current.errorFalseAlarms++;
      }

      appendAuditEntry({
        stage: 'errors',
        stageLabel: 'Verificación logística',
        question: `${currentItem.sku} · ${currentItem.desc}`,
        userAnswer: userSaysMatch ? 'Coinciden' : 'Discrepancia',
        correctAnswer: isActualMatch ? 'Coinciden' : 'Discrepancia',
        isCorrect: answeredCorrectly,
        detail: currentItem.discrepancyType ? `Tipo de discrepancia: ${currentItem.discrepancyType}` : undefined,
      });

      stateRef.current.errorIndex++;
      persistErrorMetrics();
      if (stateRef.current.errorIndex >= stateRef.current.errorQueue.length) {
        advanceFromErrorsToPallet();
      } else {
        reRender();
      }
    },
    [appendAuditEntry, persistErrorMetrics, reRender],
  );

  // ---- Pallet ----
  const advanceFromPalletToStory = useCallback(() => {
    stopTimer();
    showScreen('story');
    stateRef.current.storyIndex = 0;
    stateRef.current.storySelectedOpt = null;
    stateRef.current.storyScore = 0;
    if (cbRef.current) startStageTimer(360, cbRef.current.onStoryTimeout);
    reRender();
  }, [stopTimer, showScreen, startStageTimer, reRender]);

  const submitPalletAnswer = useCallback(
    (fullPallets: number, leftoverBoxes: number) => {
      const current = stateRef.current.palletItems[stateRef.current.palletIndex];
      if (!current) return;

      const isCorrect =
        fullPallets === current.expectedFullPallets && leftoverBoxes === current.expectedLeftoverBoxes;

      if (isCorrect) {
        stateRef.current.palletCorrectAnswers += 1;
      }

      appendAuditEntry({
        stage: 'pallet',
        stageLabel: 'Cálculo de pallet',
        question: current.instruction,
        userAnswer: `${fullPallets} palets completos · ${leftoverBoxes} cajas sueltas`,
        correctAnswer: `${current.expectedFullPallets} palets completos · ${current.expectedLeftoverBoxes} cajas sueltas`,
        isCorrect,
        detail: `Total: ${current.totalBoxes} cajas / ${current.boxesPerPallet} por pallet`,
      });

      stateRef.current.palletIndex += 1;
      const hasMoreQuestions = stateRef.current.palletIndex < stateRef.current.palletItems.length;

      if (hasMoreQuestions) {
        reRender();
        return;
      }

      advanceFromPalletToStory();
    },
    [appendAuditEntry, reRender],
  );

  const finishPalletManual = useCallback(() => {
    advanceFromPalletToStory();
  }, [advanceFromPalletToStory]);

  // ---- Story ----
  const selectStoryOption = useCallback(
    (opt: StoryOption) => {
      stateRef.current.storySelectedOpt = opt;
      reRender();
    },
    [reRender],
  );

  const nextStory = useCallback(() => {
    if (!stateRef.current.storySelectedOpt) return;
    const currentQuestion = storyQuestionsRandom[stateRef.current.storyIndex];
    const bestOption = currentQuestion.options.reduce((best, option) => (option.score > best.score ? option : best));
    const isCorrect = stateRef.current.storySelectedOpt.score === bestOption.score;

    appendAuditEntry({
      stage: 'story',
      stageLabel: 'Historia / conducta',
      question: currentQuestion.q,
      userAnswer: stateRef.current.storySelectedOpt.text,
      correctAnswer: bestOption.text,
      isCorrect,
      detail: `Puntaje atribuido: ${stateRef.current.storySelectedOpt.score}`,
    });

    stateRef.current.storyScore += stateRef.current.storySelectedOpt.score;
    stateRef.current.storyIndex++;
    stateRef.current.storySelectedOpt = null;
    if (stateRef.current.storyIndex < storyQuestionsRandom.length) {
      reRender();
    } else {
      advanceFromStoryToApproach();
    }
  }, [appendAuditEntry, storyQuestionsRandom, reRender]);

  const advanceFromStoryToApproach = useCallback(() => {
    stopTimer();
    showScreen('approach');
    stateRef.current.approachIndex = 0;
    stateRef.current.approachSelectedChoice = null;
    stateRef.current.approachTraits = [];
    if (cbRef.current) startStageTimer(840, cbRef.current.onApproachTimeout);
    reRender();
  }, [stopTimer, showScreen, startStageTimer, reRender]);

  // ---- Approach ----
  const selectApproachPair = useCallback(
    (choice: 'A' | 'B') => {
      stateRef.current.approachSelectedChoice = choice;
      reRender();
    },
    [reRender],
  );

  const goToResults = useCallback(() => {
    stopTimer();
    showScreen('results');
    reRender();
  }, [stopTimer, showScreen, reRender]);

  const confirmApproachPair = useCallback(() => {
    const current = approachPairsRandom[stateRef.current.approachIndex];
    const trait = stateRef.current.approachSelectedChoice === 'A' ? current.traitA : current.traitB;
    stateRef.current.approachTraits.push(trait);
    stateRef.current.approachIndex++;
    stateRef.current.approachSelectedChoice = null;
    if (stateRef.current.approachIndex < approachPairsRandom.length) {
      reRender();
    } else {
      goToResults();
    }
  }, [approachPairsRandom, reRender, goToResults]);

  // ---- Results computation ----
  const computeResults = useCallback(() => {
    const s = stateRef.current;
    const errorMetrics = s.errorResultsSnapshot ?? {
      errorHits: s.errorHits,
      errorFalseAlarms: s.errorFalseAlarms,
      errorProcessed: s.errorProcessed,
    };

    const sjtPct = Math.round(s.sjtTotalScore / sjtDatabase.length);

    let rawErrorScore = 0;
    if (errorMetrics.errorProcessed > 0) {
      const hitRate = (errorMetrics.errorHits / errorMetrics.errorProcessed) * 100;
      const falseAlarmRate = (errorMetrics.errorFalseAlarms / errorMetrics.errorProcessed) * 100;
      rawErrorScore = Math.round(Math.max(0, hitRate - falseAlarmRate * 0.6));
    }
    const errorPct = Math.max(0, Math.min(100, rawErrorScore));

    const palletPct = s.palletItems.length > 0 ? Math.round((s.palletCorrectAnswers / s.palletItems.length) * 100) : 0;

    let safetyScore = 60;
    if (s.approachTraits.includes('safety')) safetyScore += 25;
    if (s.approachTraits.includes('unsafe')) safetyScore -= 40;
    if (sjtPct >= 80) safetyScore += 15;
    const safetyPct = Math.max(0, Math.min(100, safetyScore));

    const autonomyPct = Math.round(s.storyScore / storyQuestionsRandom.length);

    const integrityPenalty = Math.min(60, s.tabSwitches * 15);
    const integrityScore = Math.max(0, 100 - integrityPenalty);

    const weighted =
      sjtPct * 0.25 +
      errorPct * 0.25 +
      palletPct * 0.2 +
      safetyPct * 0.15 +
      autonomyPct * 0.15;
    const finalGlobalScore = Math.max(0, Math.round(weighted - integrityPenalty * 0.2));

    return {
      sjtPct,
      errorPct,
      palletPct,
      safetyPct,
      autonomyPct,
      integrityScore,
      finalGlobalScore,
      tabSwitches: s.tabSwitches,
      errorProcessed: errorMetrics.errorProcessed,
      errorHits: errorMetrics.errorHits,
      errorFalseAlarms: errorMetrics.errorFalseAlarms,
    };
  }, [sjtDatabase, storyQuestionsRandom]);

  const s = stateRef.current;

  return {
    stage,
    timeRemaining,
    timerActive,
    tabSwitches,
    antiCheatMessage,
    timeoutOverlay,
    auditEntries: stateRef.current.auditEntries,
    setCallbacks,
    resetAttemptState,
    startAssessment,
    stopTimer,

    // SJT
    sjtDatabase,
    sjtIndex: s.sjtIndex,
    sjtBestChoice: s.sjtBestChoice,
    sjtWorstChoice: s.sjtWorstChoice,
    setSjtChoice,
    nextSjt,

    // Errors
    errorQueue: s.errorQueue,
    errorIndex: s.errorIndex,
    errorHits: s.errorHits,
    errorFalseAlarms: s.errorFalseAlarms,
    errorProcessed: s.errorProcessed,
    submitErrorChoice,
    advanceFromSjtToErrors,
    advanceFromErrorsToPallet,

    // Pallet
    palletItems: s.palletItems,
    palletIndex: s.palletIndex,
    palletCorrectAnswers: s.palletCorrectAnswers,
    palletSelectedIds: s.palletSelectedIds,
    submitPalletAnswer,
    finishPalletManual,
    advanceFromPalletToStory,

    // Story
    storyQuestionsRandom,
    storyIndex: s.storyIndex,
    storySelectedOpt: s.storySelectedOpt,
    selectStoryOption,
    nextStory,
    advanceFromStoryToApproach,

    // Approach
    approachPairsRandom,
    approachIndex: s.approachIndex,
    approachSelectedChoice: s.approachSelectedChoice,
    selectApproachPair,
    confirmApproachPair,

    // Results
    computeResults,
    goToResults,
  };
}

export type UseAssessmentReturn = ReturnType<typeof useAssessment>;
