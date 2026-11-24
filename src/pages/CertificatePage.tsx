import React, { useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCourse } from '../context/CourseContext';
import { 
  Printer, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Download, 
  ArrowLeft,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface CertificatePageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const CertificatePage: React.FC<CertificatePageProps> = ({ onNavigate }) => {
  const { currentUser } = useAuth();
  const { progress, canGetCertificate } = useCourse();
  const certificateRef = useRef<HTMLDivElement>(null);

  const studentName = currentUser?.fullName || "IELTS Learner";
  const certificateId = progress.certificateId || "IELTS-CERT-884920";
  const issueDate = progress.certificateIssuedAt || new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  if (!canGetCertificate) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-amber-100 text-amber-700 flex items-center justify-center">
          <Award className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Sertifikat Hali Qulflangan
        </h1>
        <p className="text-slate-600 text-sm max-w-lg mx-auto">
          Rasmiy bitiruv sertifikatini qo'lga kiritish uchun barcha 7 modulni to'liq o'rganishingiz va har bir modul testidan kamida 60% to'plashingiz talab etiladi.
        </p>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl max-w-md mx-auto text-xs text-slate-600 space-y-2 text-left">
          <div className="font-bold text-slate-800">Sizning joriy holatingiz:</div>
          <div className="flex justify-between">
            <span>Tugallangan modullar:</span>
            <span className="font-bold text-primary-600">{progress.completedModules.length} / 7 ta</span>
          </div>
          <div className="flex justify-between">
            <span>O'zlashtirilgan darslar:</span>
            <span className="font-bold text-primary-600">{progress.completedLessons.length} / 21 ta</span>
          </div>
        </div>

        <button
          onClick={() => onNavigate('modules')}
          className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md"
        >
          O'qishni Davom Ettirish
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner and Actions */}
      <div className="no-print flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <button
            onClick={() => onNavigate('dashboard')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-primary-600 transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Boshqaruv Paneliga Qaytish
          </button>
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            Rasmiy Bitiruv Sertifikati
          </h1>
          <p className="text-xs text-slate-500">
            Siz 7 ta modul va 21 ta darslikni to'liq tamomladingiz. Sertifikatni chop etishingiz yoki PDF qilib saqlashingiz mumkin.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md flex items-center gap-2 transition-all"
          >
            <Printer className="w-4 h-4" />
            Chop Etish / PDF Yuklash
          </button>
        </div>
      </div>

      {/* External reference note */}
      <div className="no-print bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-xs text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <span className="font-bold">Dizayn andozasi: </span>
          Maroon & Gold Elegant Professional dizayni asosida yaratilgan rasmiy HTML/CSS sertifikati.
        </div>
        <a
          href="https://canva.link/v1r1hu1itex8hst"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-bold text-amber-800 hover:underline shrink-0"
        >
          Canva andozasini ko'rish <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Actual Certificate Document (Optimized for Screen & Print) */}
      <div className="overflow-x-auto pb-4">
        <div 
          ref={certificateRef}
          className="min-w-[850px] w-full bg-[#fdfbf7] text-slate-900 p-12 sm:p-16 rounded-3xl border-8 border-double border-[#8b1528] shadow-2xl relative overflow-hidden select-none"
          style={{
            boxShadow: '0 25px 50px -12px rgba(139, 21, 40, 0.15)'
          }}
        >
          {/* Elegant Corner Ornaments */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#d4af37]"></div>
          <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#d4af37]"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#d4af37]"></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[#d4af37]"></div>

          {/* Watermark Crest */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <Award className="w-[500px] h-[500px] text-[#8b1528]" />
          </div>

          <div className="relative z-10 text-center space-y-6">
            {/* Top Emblem */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#8b1528] to-[#ab1f34] flex items-center justify-center text-[#f6ca56] shadow-md border-2 border-[#d4af37]">
                <Award className="w-8 h-8" />
              </div>
            </div>

            {/* Certificate Header */}
            <div>
              <p className="tracking-[0.3em] uppercase text-xs font-bold text-[#8b1528]">
                Certificate of Completion
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-wider certificate-font mt-1">
                IELTS ONLINE LEARNING PLATFORM
              </h2>
              <div className="w-32 h-1 bg-[#d4af37] mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Recipient Notice */}
            <div className="space-y-2 pt-2">
              <p className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                This certificate is proudly presented to
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#8b1528] tracking-wide certificate-font underline decoration-[#d4af37] underline-offset-8">
                {studentName}
              </h3>
            </div>

            {/* Course Accomplishment Statement */}
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed pt-2">
              has successfully fulfilled all curriculum requirements, mastered all 7 learning modules (Listening, Reading, Writing Task 1, Writing Task 2, Speaking, and Exam Strategies), passed all assessment tests with a minimum passing grade of 60%, and demonstrated excellence in comprehensive IELTS preparation.
            </p>

            {/* Signatures & Seal Row */}
            <div className="pt-10 grid grid-cols-3 items-end max-w-2xl mx-auto border-t border-slate-200 mt-6">
              <div className="text-center space-y-1">
                <div className="font-serif italic text-base text-slate-800">Academic Director</div>
                <div className="w-32 h-[1px] bg-slate-400 mx-auto"></div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">IELTS Board</div>
              </div>

              {/* Gold Certified Seal */}
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-[#d4af37] bg-gradient-to-b from-[#f6ca56]/20 to-[#d4af37]/40 flex flex-col items-center justify-center text-center p-2 shadow-inner">
                  <ShieldCheck className="w-6 h-6 text-[#8b1528]" />
                  <span className="text-[8px] font-extrabold uppercase tracking-tighter text-[#8b1528]">VERIFIED</span>
                </div>
              </div>

              <div className="text-center space-y-1">
                <div className="font-serif italic text-base text-slate-800">Lead Instructor</div>
                <div className="w-32 h-[1px] bg-slate-400 mx-auto"></div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">IELTS Program</div>
              </div>
            </div>

            {/* Certificate ID & Verification */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 max-w-2xl mx-auto">
              <span>Certificate ID: <strong className="text-slate-600">{certificateId}</strong></span>
              <span>Issue Date: <strong className="text-slate-600">{issueDate}</strong></span>
              <span>Status: <strong className="text-emerald-700">Official Graduate</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
