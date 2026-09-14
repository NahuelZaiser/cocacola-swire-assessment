export type Stage =
  | 'intro'
  | 'sjt'
  | 'errors'
  | 'pallet'
  | 'story'
  | 'approach'
  | 'results';

export interface SjtOption {
  id: number;
  text: string;
  isBest: boolean;
  isWorst: boolean;
}

export interface SjtScenario {
  scenario: string;
  options: SjtOption[];
}

export interface ErrorItem {
  sku: string;
  desc: string;
  physDesc?: string;
  invQty: number;
  physQty: number;
  invLot: string;
  physLot: string;
  match: boolean;
  discrepancyType?: 'sku' | 'description' | 'quantity' | 'lot';
  reason?: string;
  invSkuPhys?: string;
}

export interface PalletItem {
  title: string;
  instruction: string;
  totalBoxes: number;
  boxesPerPallet: number;
  expectedFullPallets: number;
  expectedLeftoverBoxes: number;
  isHazard?: boolean;
  reason?: string;
  desc?: string;
}

export interface StoryOption {
  text: string;
  score: number;
}

export interface StoryQuestion {
  q: string;
  options: StoryOption[];
}

export interface ApproachPair {
  a: string;
  b: string;
  traitA: string;
  traitB: string;
}

export interface AssessmentAuditEntry {
  stage: 'sjt' | 'errors' | 'pallet' | 'story' | 'approach';
  stageLabel: string;
  question: string;
  userAnswer: string;
  correctAnswer?: string;
  isCorrect: boolean;
  detail?: string;
}

export interface TestState {
  currentStage: Stage;
  tabSwitches: number;
  auditEntries: AssessmentAuditEntry[];

  sjtIndex: number;
  sjtBestChoice: number | null;
  sjtWorstChoice: number | null;
  sjtTotalScore: number;

  errorQueue: ErrorItem[];
  errorIndex: number;
  errorHits: number;
  errorFalseAlarms: number;
  errorProcessed: number;
  errorResultsSnapshot: {
    errorHits: number;
    errorFalseAlarms: number;
    errorProcessed: number;
  } | null;

  palletItems: PalletItem[];
  palletIndex: number;
  palletCorrectAnswers: number;
  palletSelectedIds: Set<number>;

  storyIndex: number;
  storySelectedOpt: StoryOption | null;
  storyScore: number;

  approachIndex: number;
  approachSelectedChoice: 'A' | 'B' | null;
  approachTraits: string[];
}
