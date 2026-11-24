import React, { useState } from 'react';
import { modulesData } from '../data/courseData';
import { useCourse } from '../context/CourseContext';
import { 
  FileQuestion, 
  ArrowLeft, 
  CheckCircle, 
  AlertCircle, 
  HelpCircle,
  Sparkles
} from 'lucide-react';

interface ModuleTestPageProps {
  moduleId: number;
  onNavigate: (page: string, params?: any) => void;
}

export const ModuleTestPage: React.FC<ModuleTestPageProps> = ({ moduleId, onNavigate }) => {
  const currentModule = modulesData.find(m => m.id === moduleId) || modulesData[0];
  const { recordTestResult } = useCourse();

  // Selected answers: { [questionId: number]: optionIndex }
  const [answers, setAnswers] = useState<{ [qId: number]: number }>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const totalQuestions = currentModule.test.length;
  const answeredCount = Object.keys(answers).length;

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
    setErrorMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (answeredCount < totalQuestions) {
      setErrorMessage(`Iltimos, barcha ${totalQuestions} ta savolga javob belgilang. Hozircha ${answeredCount} tasiga javob berildi.`);
      return;
    }

    // Calculate score
    let correctCount = 0;
    currentModule.test.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount += 1;
      }
    });

    const result = recordTestResult(currentModule.id, correctCount, totalQuestions);

    onNavigate('test-results', {
      moduleId: currentModule.id,
      score: correctCount,
      total: totalQuestions,
      answers,
      unlockedNext: result.unlockedNext,
      passed: result.passed
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <button
          onClick={() => onNavigate('module-learn', { moduleId: currentModule.id })}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Darslarga Qaytish
        </button>

        <div className="text-right">
          <span className="text-xs text-slate-500">O'tish talabi: </span>
          <span className="text-xs font-bold text-emerald-600">60% (Kamida 6 ta to'g'ri javob)</span>
        </div>
      </div>

      {/* Test Title & Instructions */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wider">
          <FileQuestion className="w-4 h-4 text-primary-600" />
          Modul {currentModule.id} Bo'yicha Yakuniy Sinov
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {currentModule.title} — Baholash Testi
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Test 10 ta maxsus saralangan savoldan iborat. To'g'ri variantni tanlang va barcha savollarga javob berganingizdan so'ng "Natijani Tekshirish" tugmasini bosing.
        </p>

        {/* Live answered counter bar */}
        <div className="pt-3">
          <div className="flex justify-between text-xs text-slate-500 font-medium mb-1.5">
            <span>Javob berilgan savollar:</span>
            <span>{answeredCount} / {totalQuestions}</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-primary-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Questions Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {currentModule.test.map((question, qIdx) => {
          const selectedOption = answers[question.id];

          return (
            <div
              key={question.id}
              className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                selectedOption !== undefined 
                  ? 'bg-white border-primary-200 shadow-sm' 
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-primary-100 text-primary-800 text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                  {qIdx + 1}
                </span>
                <div className="space-y-4 flex-1">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {question.question}
                  </h3>

                  <div className="space-y-2.5">
                    {question.options.map((opt, optIdx) => {
                      const isSelected = selectedOption === optIdx;

                      return (
                        <label
                          key={optIdx}
                          onClick={() => handleSelectOption(question.id, optIdx)}
                          className={`w-full p-3.5 rounded-xl border text-xs sm:text-sm font-medium flex items-center gap-3 cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-primary-50/80 border-primary-500 text-primary-950 font-semibold ring-1 ring-primary-500'
                              : 'bg-slate-50/60 border-slate-200 hover:bg-slate-100/80 text-slate-700'
                          }`}
                        >
                          <input
                            type="radio"
                            name={`q_${question.id}`}
                            checked={isSelected}
                            onChange={() => {}}
                            className="w-4 h-4 text-primary-600 border-slate-300 focus:ring-primary-500"
                          />
                          <span className="flex-1">{opt}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Submit Bar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-4">
          <div className="text-xs text-slate-500">
            {answeredCount === totalQuestions ? (
              <span className="text-emerald-600 font-bold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Barcha savollar belgilandi!
              </span>
            ) : (
              <span>Qolgan savollar soni: {totalQuestions - answeredCount} ta</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-md shadow-primary-600/20 text-sm transition-all"
          >
            Natijani Tekshirish va Topshirish
          </button>
        </div>
      </form>
    </div>
  );
};
