import React, { useState } from 'react';
import { modulesData, extractYoutubeId } from '../data/courseData';
import { useCourse } from '../context/CourseContext';
import { 
  PlayCircle, 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft, 
  ExternalLink, 
  BookOpen, 
  FileQuestion, 
  ArrowLeft,
  Check,
  AlertCircle,
  Lightbulb
} from 'lucide-react';

interface ModuleLearnPageProps {
  moduleId: number;
  onNavigate: (page: string, params?: any) => void;
}

export const ModuleLearnPage: React.FC<ModuleLearnPageProps> = ({ moduleId, onNavigate }) => {
  const currentModule = modulesData.find(m => m.id === moduleId) || modulesData[0];
  const { markLessonComplete, isLessonCompleted, isModuleEligibleForTest, progress } = useCourse();

  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const currentLesson = currentModule.lessons[activeLessonIndex];
  const isCurrentCompleted = isLessonCompleted(currentLesson.id);
  const eligibleForTest = isModuleEligibleForTest(currentModule.id);

  const youtubeVideoId = extractYoutubeId(currentLesson.youtubeUrl);

  const handleNextLesson = () => {
    if (activeLessonIndex < currentModule.lessons.length - 1) {
      setActiveLessonIndex(prev => prev + 1);
    }
  };

  const handlePrevLesson = () => {
    if (activeLessonIndex > 0) {
      setActiveLessonIndex(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <button
          onClick={() => onNavigate('modules')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Barcha Modullarga Qaytish
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Modul {currentModule.id} / 7:</span>
          <span className="text-xs font-bold text-slate-800">{currentModule.title}</span>
        </div>

        {/* Go to Test Button */}
        <div>
          <button
            onClick={() => onNavigate('module-test', { moduleId: currentModule.id })}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              eligibleForTest 
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 animate-pulse'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <FileQuestion className="w-4 h-4" />
            Modul Testini Topshirish (10 savol)
          </button>
        </div>
      </div>

      {/* Main Grid: Lessons Tabs & Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Video & Lecture Text (Col 8) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Video Player Box */}
          <div className="bg-black rounded-2xl overflow-hidden shadow-xl aspect-video relative group">
            {youtubeVideoId ? (
              <iframe
                className="w-full h-full border-0"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
                title={currentLesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                <PlayCircle className="w-12 h-12 mb-3 text-slate-500" />
                <p className="text-sm font-semibold text-white">Video pleer yuklanmadi</p>
                <p className="text-xs text-slate-400 mt-1">Ushbu videoni YouTube da to'g'ridan-to'g'ri ko'rishingiz mumkin.</p>
              </div>
            )}
          </div>

          {/* Video Fallback & Open in YouTube button */}
          <div className="flex items-center justify-between text-xs bg-slate-100 p-3 rounded-xl border border-slate-200">
            <span className="text-slate-600">
              Video ijro etilmayotgan bo'lsa yoki brauzer cheklovi bo'lsa:
            </span>
            <a
              href={currentLesson.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-primary-700 hover:text-primary-800 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm"
            >
              YouTube da ochish <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Action Row: Complete Lesson & Navigation */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => markLessonComplete(currentLesson.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  isCurrentCompleted
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-primary-600 hover:bg-primary-700 text-white shadow-md'
                }`}
              >
                {isCurrentCompleted ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-700" />
                    Dars O'zlashtirildi
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Darsni Tugatdim deb Belgilash
                  </>
                )}
              </button>
              {isCurrentCompleted && (
                <span className="text-[11px] text-slate-400">Progress saqlandi</span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevLesson}
                disabled={activeLessonIndex === 0}
                className="px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" /> Oldingi
              </button>
              <button
                onClick={handleNextLesson}
                disabled={activeLessonIndex === currentModule.lessons.length - 1}
                className="px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 flex items-center gap-1"
              >
                Keyingi <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Lecture Text & Theory Content */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-primary-600 mb-1">
                <BookOpen className="w-4 h-4" />
                Nazariy Ma'ruza Matni
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {currentLesson.title}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Davomiyligi: {currentLesson.duration} • Qisqacha: {currentLesson.summary}
              </p>
            </div>

            {/* Formatted Theory */}
            <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed whitespace-pre-line border-t border-slate-100 pt-4">
              {currentLesson.theoryContent}
            </div>

            {/* Key Takeaways */}
            <div className="bg-primary-50/70 border border-primary-200/80 rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary-900 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-primary-600" />
                Muhim Imtihon Eslatmalari (Key Points)
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-primary-950">
                {currentLesson.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Essential Vocabulary */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Ushbu Darsning Asosiy Akademik Lug'ati
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentLesson.vocabulary.map((vocab, vIdx) => (
                  <div key={vIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">{vocab.word}</div>
                    <div className="text-xs text-primary-700 font-medium">{vocab.translation}</div>
                    <div className="text-[11px] text-slate-500 italic mt-1">"{vocab.example}"</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Module Lessons Navigation (Col 4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
            <div>
              <span className="text-xs font-bold text-primary-600 uppercase">Modul Tarkibi</span>
              <h3 className="font-bold text-slate-900 text-base">3 Ta Video Darslik</h3>
            </div>

            <div className="space-y-2.5">
              {currentModule.lessons.map((lesson, idx) => {
                const completed = isLessonCompleted(lesson.id);
                const isActive = idx === activeLessonIndex;

                return (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveLessonIndex(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                      isActive
                        ? 'bg-primary-50 border-primary-300 ring-2 ring-primary-500/20'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                      completed 
                        ? 'bg-emerald-500 text-white' 
                        : isActive 
                          ? 'bg-primary-600 text-white' 
                          : 'bg-slate-100 text-slate-600'
                    }`}>
                      {completed ? <Check className="w-4 h-4" /> : idx + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-bold truncate ${isActive ? 'text-primary-950' : 'text-slate-800'}`}>
                        {lesson.title}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{lesson.duration}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Test Eligibility Notice & Action */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Modul testi holati:</span>
                <span className={`font-bold ${eligibleForTest ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {eligibleForTest ? "Topshirishga tayyor" : "3 ta darsni yakunlang"}
                </span>
              </div>

              <button
                onClick={() => onNavigate('module-test', { moduleId: currentModule.id })}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <FileQuestion className="w-4 h-4 text-emerald-400" />
                Modul Testini Ochish
              </button>
            </div>
          </div>

          {/* Module 60% Passing Policy */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              Imtihon Talabi:
            </div>
            <p className="leading-relaxed text-[11px] text-amber-900">
              Ushbu modulni to'liq tamomlash va keyingi modulni ochish uchun 10 ta savoldan kamida 6 tasiga (60%) to'g'ri javob berishingiz kerak. Natija qoniqarsiz bo'lsa, qayta topshirish mumkin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
