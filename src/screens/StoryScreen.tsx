import { MessageSquare, ChevronRight } from 'lucide-react';
import type { UseAssessmentReturn } from '@/hooks/useAssessment';

interface StoryScreenProps {
  ass: UseAssessmentReturn;
}

export function StoryScreen({ ass }: StoryScreenProps) {
  const question = ass.storyQuestionsRandom[ass.storyIndex];
  const total = ass.storyQuestionsRandom.length;
  if (!question) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in" key={ass.storyIndex}>
      <div className="flex items-center justify-between mb-4">
        <span className="badge-section">Fase 4 — Tell Us Your Story</span>
        <span className="text-sm font-bold text-slate-400 tabular-nums">
          {ass.storyIndex + 1} / {total}
        </span>
      </div>

      <div className="surface-card p-6 sm:p-8 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="w-5 h-5 text-[#E61B2B]" />
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pregunta de experiencia</span>
        </div>
        <p className="text-slate-800 text-base sm:text-lg leading-relaxed">{question.q}</p>
      </div>

      <div className="space-y-3 mb-6">
        {question.options.map((opt, idx) => {
          const isSelected = ass.storySelectedOpt === opt;
          return (
            <button
              key={idx}
              onClick={() => ass.selectStoryOption(opt)}
              className={`
                w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start gap-3 min-h-[44px] focus-ring
                ${isSelected ? 'opt-selected' : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-card'}
              `}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                  isSelected ? 'border-[#E61B2B] bg-[#E61B2B]' : 'border-slate-300'
                }`}
              >
                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
              </div>
              <p className={`text-sm sm:text-base ${isSelected ? 'text-slate-900 font-semibold' : 'text-slate-700'}`}>
                {opt.text}
              </p>
            </button>
          );
        })}
      </div>

      <button
        onClick={ass.nextStory}
        disabled={!ass.storySelectedOpt}
        className="btn-primary"
      >
        <span className="flex items-center justify-center gap-2">
          {ass.storyIndex === total - 1 ? 'Finalizar y ver resultados parciales' : 'Siguiente pregunta'}
          <ChevronRight className="w-4 h-4" />
        </span>
      </button>
    </div>
  );
}
