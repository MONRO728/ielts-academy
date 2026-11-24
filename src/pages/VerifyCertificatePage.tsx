import React, { useState, useEffect } from 'react';
import { certificateService } from '../services/certificateService';
import { 
  ShieldCheck, 
  Search, 
  Award, 
  XCircle, 
  Calendar, 
  User as UserIcon, 
  ArrowLeft,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface VerifyPageProps {
  initialId?: string;
  onNavigate: (page: string, params?: any) => void;
}

export const VerifyCertificatePage: React.FC<VerifyPageProps> = ({ initialId = '', onNavigate }) => {
  const [certId, setCertId] = useState(initialId);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    searched: boolean;
    found: boolean;
    certificate?: any;
    error?: string;
  }>({
    searched: false,
    found: false
  });

  const handleVerify = async (idToSearch: string) => {
    const clean = idToSearch.trim();
    if (!clean) return;

    setLoading(true);
    const res = await certificateService.verifyCertificate(clean);
    setResult({
      searched: true,
      found: res.found,
      certificate: res.certificate,
      error: res.error
    });
    setLoading(false);
  };

  useEffect(() => {
    if (initialId) {
      handleVerify(initialId);
    }
  }, [initialId]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Top Banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          IELTS Academy Rasmiy Tekshiruv Xizmati
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Sertifikat Haqiqiyligini Tekshirish
        </h1>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Bitiruvchiga berilgan unikal Sertifikat ID raqamini kiriting va uning haqiqiyligini tekshiring.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md max-w-xl mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleVerify(certId);
          }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              placeholder="Masalan: IELTS-CERT-884920"
              value={certId}
              onChange={(e) => setCertId(e.target.value.toUpperCase())}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-600 text-sm uppercase tracking-wider font-semibold"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
          >
            {loading ? "Tekshirilmoqda..." : "Tekshirish"}
          </button>
        </form>
      </div>

      {/* Verification Result Display */}
      {result.searched && (
        <div className="max-w-2xl mx-auto">
          {result.found && result.certificate ? (
            <div className="bg-white rounded-3xl border-2 border-emerald-500 p-8 shadow-xl space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    RASMAN TASDIQLANDI
                  </span>
                  <h2 className="text-xl font-extrabold text-slate-900 mt-1">
                    Sertifikat Haqiqiy va Faol
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1">
                  <span className="text-slate-400 text-xs block">Bitiruvchi (Talaba):</span>
                  <span className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-primary-600" />
                    {result.certificate.studentName}
                  </span>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1">
                  <span className="text-slate-400 text-xs block">O'quv kursi:</span>
                  <span className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-500" />
                    {result.certificate.courseName}
                  </span>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1">
                  <span className="text-slate-400 text-xs block">Sertifikat ID:</span>
                  <span className="font-mono font-bold text-slate-800">
                    {result.certificate.certificateId}
                  </span>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1">
                  <span className="text-slate-400 text-xs block">Berilgan sana:</span>
                  <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {result.certificate.issuedAt}
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-500 bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
                <span>IELTS Academy Markaziy Ma'lumotlar Bazasi</span>
                <span className="text-emerald-700 font-bold">100% Verified</span>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-rose-200 p-8 shadow-lg text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
                <XCircle className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Sertifikat Tasdiqlanmadi</h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                {result.error || "Kiritilgan ID raqamli sertifikat bazada mavjud emas yoki noto'g'ri kiritilgan. Iltimos, raqamni qayta tekshirib ko'ring."}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Return link */}
      <div className="text-center pt-4">
        <button
          onClick={() => onNavigate('landing')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-primary-600"
        >
          <ArrowLeft className="w-4 h-4" />
          Bosh Sahifaga Qaytish
        </button>
      </div>
    </div>
  );
};
