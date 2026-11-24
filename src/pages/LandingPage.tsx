import React from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Award, 
  BookOpen, 
  Headphones, 
  PenTool, 
  Mic, 
  Sparkles,
  Lock,
  ChevronRight
} from 'lucide-react';
import { modulesData } from '../data/courseData';
import { useAuth } from '../context/AuthContext';

interface LandingPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const { currentUser } = useAuth();

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-primary-50/70 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-primary-600" />
                Interfaol 7 Modullik IELTS Onlayn Kursi
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                IELTS 7.5+ Maqsadingizga <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">Tizimli va Ishonchli</span> Yetishing
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Listening, Reading, Writing va Speaking bo'yicha 21 ta chuqurlashtirilgan video darslik, nazariy tahlillar, interfaol modul testlari va rasmiy bitiruv sertifikati.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
                {!currentUser ? (
                  <>
                    <button
                      onClick={() => onNavigate('register')}
                      className="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 text-base group"
                    >
                      Hoziroq O'qishni Boshlash
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => onNavigate('login')}
                      className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold rounded-xl transition-all text-base"
                    >
                      Mavjud Hisobga Kirish
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => onNavigate('dashboard')}
                    className="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 text-base"
                  >
                    Mening Boshqaruv Panelim
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Badges */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <div className="text-2xl font-bold text-slate-900">7</div>
                  <div className="text-xs text-slate-500 font-medium">To'liq Modullar</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">21</div>
                  <div className="text-xs text-slate-500 font-medium">Video Darslar</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">60%+</div>
                  <div className="text-xs text-slate-500 font-medium">O'tish Balı & Sertifikat</div>
                </div>
              </div>
            </div>

            {/* Visual Hero Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary-200/50 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-amber-200/40 rounded-full blur-3xl -z-10"></div>
                
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Ketma-ket O'quv Rejasi</h4>
                        <p className="text-xs text-slate-500">Progressiv ta'lim tizimi</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                      Faol
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">1</span>
                        <div>
                          <p className="text-xs font-semibold text-slate-800">IELTS Fundamentals</p>
                          <p className="text-[11px] text-slate-500">3 video dars • 10 ta test</p>
                        </div>
                      </div>
                      <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">Ochiq</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50/60 border border-slate-100 flex items-center justify-between opacity-80">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold">2</span>
                        <div>
                          <p className="text-xs font-semibold text-slate-700">IELTS Listening</p>
                          <p className="text-[11px] text-slate-400">3 video dars • 10 ta test</p>
                        </div>
                      </div>
                      <Lock className="w-4 h-4 text-slate-400" />
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50/60 border border-slate-100 flex items-center justify-between opacity-80">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold">3</span>
                        <div>
                          <p className="text-xs font-semibold text-slate-700">IELTS Reading</p>
                          <p className="text-[11px] text-slate-400">3 video dars • 10 ta test</p>
                        </div>
                      </div>
                      <Lock className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-amber-100/60 border border-amber-200/80 flex items-center gap-3">
                    <Award className="w-8 h-8 text-amber-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-amber-900">Bitiruv Sertifikati</p>
                      <p className="text-[11px] text-amber-700">7 ta modulni 60%+ bilan tugatgandan so'ng rasman taqdim etiladi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights / Modules Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-primary-600">Mukammal Dastur</h2>
          <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">7 Ta Moduldan Iborat To'liq Tayyorgarlik</h3>
          <p className="text-slate-600 text-sm sm:text-base">
            Har bir modul 3 ta video dars, to'liq leksiya matni, lug'at boyligi va bilimlarni mustahkamlovchi 10 ta savolli imtihon testini o'z ichiga oladi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modulesData.map((m, index) => {
            const icons = [BookOpen, Headphones, BookOpen, PenTool, PenTool, Mic, Award];
            const IconComponent = icons[index % icons.length];
            return (
              <div 
                key={m.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-primary-100 text-primary-700 font-bold flex items-center justify-center text-sm">
                      {m.id}
                    </span>
                    <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                      3 Video Dars
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1.5">{m.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{m.tagline}</p>
                  </div>
                  <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5">
                    <div className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <IconComponent className="w-3.5 h-3.5 text-primary-600" />
                      Dars mavzulari:
                    </div>
                    {m.lessons.map(l => (
                      <div key={l.id} className="truncate text-slate-500 text-[11px]">
                        • {l.title}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> 10 ta test savoli
                  </span>
                  <button
                    onClick={() => {
                      if (!currentUser) {
                        onNavigate('register');
                      } else {
                        onNavigate('modules');
                      }
                    }}
                    className="text-xs font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1"
                  >
                    Batafsil <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Rules & Methodology */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-bold text-lg text-white">Ketma-ket O'qish Tizimi</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Modullar bosqichma-bosqich ochiladi. Oldingi modulning barcha 3 ta darsini ko'rib, testini topshirmasdan turib keyingi modulga o'tib bo'lmaydi.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-bold text-lg text-white">60% O'tish Mezoni</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Har bir modul oxirida 10 ta savolli imtihon mavjud. Keyingi modulni ochish uchun kamida 6 ta savolga (60%) to'g'ri javob berishingiz kerak. Qayta topshirish cheksiz!
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-bold text-lg text-white">Rasmiy Sertifikat</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                7 ta modulni to'liq yakunlagach, sizning ism-sharifingiz, maxsus ID raqami va sanasi ko'rsatilgan professional bitiruv sertifikati avtomatik shakllanadi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-3xl p-8 sm:p-12 text-center text-white space-y-6 shadow-xl shadow-primary-900/20">
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto">
            IELTS Tayyorgarligingizni Bugun Boshlang!
          </h3>
          <p className="text-primary-100 text-sm sm:text-base max-w-xl mx-auto">
            Platformada bepul ro'yxatdan o'ting, 1-modulni hoziroq oching va ingliz tilidagi natijalaringizni yangi bosqichga olib chiqing.
          </p>
          <div>
            <button
              onClick={() => onNavigate(!currentUser ? 'register' : 'dashboard')}
              className="px-8 py-3.5 bg-white text-primary-900 hover:bg-primary-50 font-bold rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              {!currentUser ? "Bepul Ro'yxatdan O'tish" : "O'qishni Davom Ettirish"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
