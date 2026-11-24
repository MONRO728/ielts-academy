import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCourse } from '../context/CourseContext';
import { 
  User as UserIcon, 
  Mail, 
  Award, 
  Calendar, 
  Save, 
  Check, 
  ShieldCheck, 
  RotateCcw,
  BookOpen
} from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { currentUser, updateProfileName } = useAuth();
  const { progress, resetProgress, canGetCertificate } = useCourse();

  const [name, setName] = useState(currentUser?.fullName || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      await updateProfileName(name.trim());
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Talaba Profili</h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Shaxsiy ma'lumotlaringizni yangilang va bitiruv sertifikatida chiqadigan to'liq ismingizni sozlang.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Profile Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary-100 text-primary-700 font-extrabold text-2xl flex items-center justify-center border-2 border-primary-200">
            {currentUser?.fullName.charAt(0).toUpperCase() || 'U'}
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">{currentUser?.fullName}</h3>
            <p className="text-xs text-slate-400">{currentUser?.email}</p>
          </div>

          <div className="pt-3 border-t border-slate-100 text-left space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Ro'yxatdan o'tgan sana: {currentUser?.registeredAt ? new Date(currentUser.registeredAt).toLocaleDateString() : 'Bugun'}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-slate-400" />
              <span>O'zlashtirilgan modullar: {progress.completedModules.length} / 7</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Sertifikat: {canGetCertificate ? 'Mavjud ✅' : 'Kutilmoqda'}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Edit Profile Form */}
        <div className="md:col-span-2 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
            Ism-sharifni O'zgartirish
          </h2>

          {savedSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Profil ma'lumotlari muvaffaqiyatli yangilandi va sertifikatga biriktirildi!</span>
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                To'liq Ism-sharifingiz (Sertifikatda chop etiladi)
              </label>
              <div className="relative">
                <UserIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-600 text-sm"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Ushbu ism bitiruv sertifikatingiz markazida aks etadi.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Elektron pochta (O'zgartirib bo'lmaydi)
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  disabled
                  value={currentUser?.email || ''}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 text-sm cursor-not-allowed"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              O'zgarishlarni Saqlash
            </button>
          </form>

          {/* Account Management & Progress Reset */}
          <div className="pt-6 border-t border-slate-100 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              O'quv Ma'lumotlarini Boshqarish
            </h3>
            <p className="text-xs text-slate-500">
              Agar barcha testlarni va modullarni boshidan qayta topshirmoqchi bo'lsangiz, quyidagi tugmani bosishingiz mumkin:
            </p>
            <button
              onClick={() => {
                if (confirm("Ushbu hisob bo'yicha barcha yechilgan darslar va test ballarini tozalashni tasdiqlaysizmi?")) {
                  resetProgress();
                  alert("Barcha natijalar tozalandi. Modul 1 dan qayta boshlashingiz mumkin.");
                }
              }}
              className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              O'quv Progressini Nollash (Reset)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
