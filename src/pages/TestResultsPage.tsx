import React from 'react';
import { modulesData } from '../data/courseData';
import { useCourse } from '../context/CourseContext';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  Award, 
  BookOpen, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface TestResultsPageProps {
  moduleId: number;
  score: number;
  total: number;
  answers: { [qId: number]: number };
  passed: boolean;
  unlockedNext: boolean;
  onNavigate: (page: string, params?: any) => void;
}

export const TestResultsPage: React.FC<TestResultsPageProps> = ({
  moduleId,
  score,
  total,
  answers,
  passed,
  unlockedNext,
  onNavigate
}) => {
  const currentModule = modulesData.find(m => m.id === moduleId) || modulesData[0];
  const { canGetCertificate } = useCourse();
  const percentage = Math.round((score / total) * 100);

  React.useEffect(() => {
    if (passed) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.log(e);
      }
    }
  }, [passed]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Result Card */}
      <div className={`p-8 sm:p-10 rounded-3xl border shadow-xl text-center space-y-6 ${
        passed 
          ? 'bg-gradient-to-b from-emerald-50/60 via-white to-white border-emerald-200' 
          : 'bg-gradient-to-b from-rose-50/60 via-white to-white border-rose-200'
      }`}>
        <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-white shadow-lg">
          {passed ? (
            <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-emerald-500/30">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-2xl bg-rose-500 flex items-center justify-center shadow-rose-500/30">
              <XCircle className="w-10 h-10 text-white" />
            </div>
          )}
        </div>

        <div className="space-y-2">
          <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
            passed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
          }`}>
            {passed ? "Muvaffaqiyatli topshirildi (PASS)" : "Qoniqarsiz natija (FAIL)"}
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900">
            {passed ? "Tabriklaymiz! Siz testdan o'tdingiz!" : "Afsuski, o'tish baliga yetmadi"}
          </h1>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            {passed 
              ? `Siz 60% lik talabni bajardingiz (${percentage}%). ${unlockedNext ? `Keyingi Modul ${moduleId + 1} muvaffaqiyatli ochildi!` : ''}`
              : `O'tish uchun kamida 60% (6 ta to'g'ri javob) talab etiladi. Siz ${score}/${total} (${percentage}%) to'pladingiz. Darslarni qayta ko'rib, testni bemalol qayta topshirishingiz mumkin.`}
          </p>
        </div>

        {/* Score Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md mx-auto pt-2">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="text-xs text-slate-500">To'g'ri Javoblar</div>
            <div className="text-xl font-extrabold text-slate-900">{score} / {total}</div>
          </div>
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="text-xs text-slate-500">Foiz Natijasi</div>
            <div className={`text-xl font-extrabold ${passed ? 'text-emerald-600' : 'text-rose-600'}`}>
              {percentage}%
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="text-xs text-slate-500">Holat</div>
            <div className="text-xl font-extrabold text-slate-900">{passed ? "O'TDINGIZ" : "QAYTA TOPSHIRISH"}</div>
          </div>
        </div>

        {/* Actions Button Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-slate-100">
          <button
            onClick={() => onNavigate('module-test', { moduleId })}
            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs sm:text-sm flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Testni Qayta Topshirish
          </button>

          {passed && moduleId < 7 && (
            <button
              onClick={() => onNavigate('module-learn', { moduleId: moduleId + 1 })}
              className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2"
            >
              Keyingi Modulga O'tish ({moduleId + 1}-Modul)
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {canGetCertificate && (
            <button
              onClick={() => onNavigate('certificate')}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md flex items-center gap-2 animate-pulse"
            >
              <Award className="w-4 h-4" />
              Sertifikatni Ochish
            </button>
          )}

          <button
            onClick={() => onNavigate('dashboard')}
            className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm"
          >
            Boshqaruv Paneliga Qaytish
          </button>
        </div>
      </div>

      {/* Answers & Detailed Explanations Breakdown */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Savollar Tahlili va To'g'ri Javoblar Izohi
        </h2>
        <p className="text-xs text-slate-500">
          Xatolaringizni o'rganing va bilimingizni mustahkamlang:
        </p>

        <div className="space-y-4">
          {currentModule.test.map((question, qIdx) => {
            const userAnswer = answers[question.id];
            const isCorrect = userAnswer === question.correctAnswer;

            return (
              <div
                key={question.id}
                className={`p-6 rounded-2xl border transition-all ${
                  isCorrect 
                    ? 'bg-emerald-50/40 border-emerald-200' 
                    : 'bg-rose-50/40 border-rose-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    isCorrect ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                  }`}>
                    {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                  </div>

                  <div className="space-y-3 flex-1">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      {qIdx + 1}. {question.question}
                    </h3>

                    <div className="space-y-1.5 text-xs">
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700">
                        <span className="font-semibold text-slate-500">Sizning tanlovingiz: </span>
                        <span className={isCorrect ? 'font-bold text-emerald-700' : 'font-bold text-rose-700'}>
                          {userAnswer !== undefined ? question.options[userAnswer] : "Javob berilmagan"}
                        </span>
                      </div>

                      {!isCorrect && (
                        <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold">
                          <span className="text-slate-500">To'g'ri javob: </span>
                          <span>{question.options[question.correctAnswer]}</span>
                        </div>
                      )}
                    </div>

                    <div className="bg-white/80 p-3 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-800">Tushuntirish: </span>
                        <span>{question.explanation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
