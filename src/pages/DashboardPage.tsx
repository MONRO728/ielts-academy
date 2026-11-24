import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useCourse } from '../context/CourseContext';
import { modulesData } from '../data/courseData';
import { 
  BookOpen, 
  CheckCircle2, 
  Lock, 
  Award, 
  TrendingUp, 
  PlayCircle, 
  ArrowRight, 
  ShieldCheck,
  RotateCcw,
  Sparkles
} from 'lucide-react';

interface DashboardPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  const { currentUser } = useAuth();
  const { 
    progress, 
    isModuleCompleted, 
    isModuleUnlocked, 
    getOverallStats, 
    canGetCertificate,
    resetProgress 
  } = useCourse();

  const stats = getOverallStats();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-primary-950 to-slate-900 p-8 sm:p-10 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              IELTS Shaxsiy Ta'lim Paneli
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Xush kelibsiz, {currentUser?.fullName || "Talaba"}!
            </h1>
            <p className="text-slate-300 text-sm max-w-xl">
              IELTS imtihoniga tayyorgarlik darajangiz: barcha 7 modulni bosqichma-bosqich o'rganing va testlarni 60%+ natija bilan topshirib, sertifikatga ega bo'ling.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {canGetCertificate ? (
              <button
                onClick={() => onNavigate('certificate')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all flex items-center gap-2 animate-bounce"
              >
                <Award className="w-5 h-5" />
                Sertifikatni Ko'rish & Yuklash
              </button>
            ) : (
              <button
                onClick={() => onNavigate('modules')}
                className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                Darslarni Davom Ettirish
              </button>
            )}
          </div>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase">Umumiy Progress</span>
            <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{stats.coursePercentage}%</div>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-primary-600 h-full rounded-full transition-all duration-500" 
                style={{ width: `${stats.coursePercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase">Tugallangan Modullar</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {stats.completedModulesCount} <span className="text-base text-slate-400 font-normal">/ 7</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {7 - stats.completedModulesCount} ta modul qoldi
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase">O'rganilgan Darslar</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {stats.completedLessonsCount} <span className="text-base text-slate-400 font-normal">/ 21</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Barcha 21 ta video darsliklar
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase">Sertifikat Holati</span>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${canGetCertificate ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-400'}`}>
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className={`text-base sm:text-lg font-bold ${canGetCertificate ? 'text-amber-600' : 'text-slate-500'}`}>
              {canGetCertificate ? "Taqdim etildi 🎉" : "Modullarni kutilmoqda"}
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {canGetCertificate ? "Chop etishga tayyor" : "7 ta modul 60%+ kerak"}
            </p>
          </div>
        </div>
      </div>

      {/* Modules Progression Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Modullar Bo'yicha Progress</h2>
            <p className="text-xs text-slate-500">Ketma-ket ravishda barcha modullarni o'zlashtiring</p>
          </div>
          <button
            onClick={() => onNavigate('modules')}
            className="text-xs font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1"
          >
            Barchasini ko'rish <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modulesData.map(mod => {
            const unlocked = isModuleUnlocked(mod.id);
            const completed = isModuleCompleted(mod.id);
            const scoreData = progress.testScores[mod.id];

            return (
              <div
                key={mod.id}
                className={`rounded-2xl border transition-all p-6 flex flex-col justify-between ${
                  !unlocked 
                    ? 'bg-slate-50/70 border-slate-200/80 opacity-75' 
                    : completed
                      ? 'bg-white border-emerald-200/80 shadow-sm hover:border-emerald-300'
                      : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                      Modul {mod.id}
                    </span>
                    {completed ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Bajarildi ({scoreData?.percentage}%)
                      </span>
                    ) : unlocked ? (
                      <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-200">
                        Ochiq
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                        <Lock className="w-3 h-3" /> Qulflangan
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {mod.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2">
                    {mod.tagline}
                  </p>

                  <div className="pt-2 text-xs text-slate-600 flex items-center justify-between">
                    <span>3 ta video darslik</span>
                    {scoreData && (
                      <span className={`font-semibold ${scoreData.passed ? 'text-emerald-600' : 'text-rose-600'}`}>
                        Test: {scoreData.score}/{scoreData.total} ({scoreData.percentage}%)
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  {unlocked ? (
                    <button
                      onClick={() => onNavigate('module-learn', { moduleId: mod.id })}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        completed
                          ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          : 'bg-primary-600 hover:bg-primary-700 text-white shadow-sm'
                      }`}
                    >
                      {completed ? "Takrorlash & Test" : "Modulni O'rganish"}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <div className="w-full py-2.5 rounded-xl text-xs font-medium bg-slate-100 text-slate-400 text-center flex items-center justify-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" /> Oldingi modulni tugating
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Reset / Utilities */}
      <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Barcha natijalaringiz brauzeringiz xotirasida (LocalStorage) to'liq saqlanadi.</span>
        </div>
        <button
          onClick={() => {
            if (confirm("Haqiqatan ham ushbu hisob bo'yicha barcha o'quv natijalari va test ballarini qaytadan boshlamoqchimisiz?")) {
              resetProgress();
            }
          }}
          className="flex items-center gap-1 text-slate-400 hover:text-rose-600 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Progressni boshidan boshlash
        </button>
      </div>
    </div>
  );
};
