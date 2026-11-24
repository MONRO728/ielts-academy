import React from 'react';
import { GraduationCap, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 no-print mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">IELTS Online Learning</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              IELTS xalqaro imtihoniga to'liq va tizimli tayyorgarlik ko'rish uchun mo'ljallangan interfaol o'quv platformasi. 
              7 ta bosqichli modul, 21 ta professional video darslik, nazariy ma'ruzalar, interfaol testlar va bitiruv sertifikati.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60 inline-flex">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Frontend Demo Auth & LocalStorage Persistent Platform</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Kurs Bo'limlari</h4>
            <ul className="space-y-2 text-sm">
              <li>1. IELTS Fundamentals</li>
              <li>2. Listening Mastery</li>
              <li>3. Reading Strategies</li>
              <li>4. Writing Task 1</li>
              <li>5. Writing Task 2 (Essays)</li>
              <li>6. Speaking Excellence</li>
              <li>7. Exam Preparation & Mock</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Imkoniyatlar</h4>
            <ul className="space-y-2 text-sm">
              <li>21 Ta Rasmiy Video Dars</li>
              <li>70+ Imtihon Test Savollari</li>
              <li>Ketma-ket Modul Ochildirish (60%+)</li>
              <li>Rasmiy Bitiruv Sertifikati (PDF/Chop etish)</li>
              <li>To'liq Xotiralash (LocalStorage)</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} IELTS Online Learning Platform. Barcha huquqlar himoyalangan.</p>
          <p className="flex items-center gap-1">
            Muvaffaqiyat sari intilayotgan barcha IELTS o'rganuvchilari uchun maxsus yaratildi
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
