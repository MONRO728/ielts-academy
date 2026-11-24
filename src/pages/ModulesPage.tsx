import React from 'react';
import { modulesData } from '../data/courseData';
import { useCourse } from '../context/CourseContext';
import { useAuth } from '../context/AuthContext';
import { 
  Lock, 
  CheckCircle2, 
  PlayCircle, 
  BookOpen, 
  Award, 
  ArrowRight,
  Headphones,
  PenTool,
  Mic,
  FileQuestion
} from 'lucide-react';

interface ModulesPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const ModulesPage: React.FC<ModulesPageProps> = ({ onNavigate }) => {
  const { currentUser } = useAuth();
  const { isModuleUnlocked, isModuleCompleted, progress } = useCourse();

  const getModuleIcon = (id: number) => {
    switch (id) {
      case 1: return BookOpen;
      case 2: return Headphones;
      case 3: return BookOpen;
      case 4: return PenTool;
      case 5: return PenTool;
      case 6: return Mic;
      case 7: return Award;
      default: return BookOpen;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">IELTS Kurs Modullari</h1>
        <p className="text-slate-600 text-sm">
          7 ta bosqichli ta'lim tizimi. Har bir modul 3 ta video dars, to'liq leksiya matni va 10 ta savolli imtihon testini o'z ichiga oladi.
        </p>
      </div>

      <div className="space-y-6">
        {modulesData.map(mod => {
          const unlocked = isModuleUnlocked(mod.id);
          const completed = isModuleCompleted(mod.id);
          const IconComp = getModuleIcon(mod.id);
          const scoreData = progress.testScores[mod.id];

          return (
            <div
              key={mod.id}
              className={`rounded-2xl border transition-all p-6 sm:p-7 ${
                !unlocked
                  ? 'bg-slate-50/60 border-slate-200/70 opacity-70'
                  : completed
                    ? 'bg-white border-emerald-200/90 shadow-sm'
                    : 'bg-white border-slate-200 shadow-md hover:border-primary-300'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 font-extrabold flex items-center justify-center text-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-primary-700 uppercase tracking-wider">
                          Modul {mod.id}
                        </span>
                        {completed ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3" /> Bajarildi ({scoreData?.percentage}%)
                          </span>
                        ) : unlocked ? (
                          <span className="text-[11px] font-semibold text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">
                            Ochiq
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                            <Lock className="w-3 h-3" /> Qulflangan
                          </span>
                        )}
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">
                        {mod.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                    {mod.description}
                  </p>

                  {/* Lessons List Preview */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                    {mod.lessons.map(lesson => (
                      <div 
                        key={lesson.id}
                        className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-start gap-2.5 text-xs"
                      >
                        <PlayCircle className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-800 line-clamp-1">{lesson.title}</p>
                          <p className="text-[11px] text-slate-400">{lesson.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Action Area */}
                <div className="flex lg:flex-col items-center justify-end gap-3 lg:w-48 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                  {unlocked ? (
                    <>
                      <button
                        onClick={() => {
                          if (!currentUser) {
                            onNavigate('login');
                          } else {
                            onNavigate('module-learn', { moduleId: mod.id });
                          }
                        }}
                        className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                          completed
                            ? 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                            : 'bg-primary-600 hover:bg-primary-700 text-white shadow-md shadow-primary-600/20'
                        }`}
                      >
                        <PlayCircle className="w-4 h-4" />
                        {completed ? "Darslarni Ko'rish" : "Modulni Boshlash"}
                      </button>

                      <button
                        onClick={() => {
                          if (!currentUser) {
                            onNavigate('login');
                          } else {
                            onNavigate('module-test', { moduleId: mod.id });
                          }
                        }}
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold border border-slate-300 hover:bg-slate-50 text-slate-700 flex items-center justify-center gap-1.5"
                      >
                        <FileQuestion className="w-3.5 h-3.5 text-primary-600" />
                        Modul Testi (10 savol)
                      </button>
                    </>
                  ) : (
                    <div className="w-full p-4 rounded-xl bg-slate-100 text-slate-400 text-center space-y-1">
                      <Lock className="w-5 h-5 mx-auto text-slate-400" />
                      <p className="text-xs font-medium">Qulflangan</p>
                      <p className="text-[10px] text-slate-400">Modul {mod.id - 1} testini 60%+ topshiring</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
