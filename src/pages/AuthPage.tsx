import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User as UserIcon, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface AuthPagesProps {
  mode: 'login' | 'register';
  onNavigate: (page: string) => void;
}

export const AuthPage: React.FC<AuthPagesProps> = ({ mode, onNavigate }) => {
  const { registerWithEmail, loginWithEmail, signInWithGoogle, isLiveSupabase } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);
    const res = await signInWithGoogle();
    setLoading(false);
    if (res.error) {
      setError(res.error);
    } else {
      onNavigate('dashboard');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (mode === 'register') {
      if (!fullName.trim()) {
        setError("Iltimos, to'liq ism-sharifingizni kiriting.");
        setLoading(false);
        return;
      }
      if (!email.trim()) {
        setError("Iltimos, elektron pochta (Gmail) manzilingizni kiriting.");
        setLoading(false);
        return;
      }
      const res = await registerWithEmail(fullName, email, password);
      setLoading(false);
      if (res.success) {
        onNavigate('dashboard');
      } else {
        setError(res.message || "Ro'yxatdan o'tishda xatolik yuz berdi.");
      }
    } else {
      if (!email.trim()) {
        setError("Iltimos, emailingizni kiriting.");
        setLoading(false);
        return;
      }
      const res = await loginWithEmail(email, password);
      setLoading(false);
      if (res.success) {
        onNavigate('dashboard');
      } else {
        setError(res.message || "Kirishda xatolik yuz berdi.");
      }
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {mode === 'register' ? "IELTS Academy'da Hisob Ochish" : "Tizimga Kirish"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {mode === 'register' 
                ? "Google yoki emailingiz orqali ro'yxatdan o'ting" 
                : "Google yoki ro'yxatdan o'tgan pochta orqali kiring"}
            </p>
          </div>

          {error && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl p-3.5 flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Real Google OAuth Login Button */}
          <div className="space-y-3">
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full py-3 px-4 border border-slate-300 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-all flex items-center justify-center gap-3 text-sm shadow-sm hover:shadow"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Google orqali {mode === 'register' ? "Ro'yxatdan o'tish" : "Kirish"}</span>
            </button>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink mx-4 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">yoki pochta orqali</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  To'liq Ism-sharifingiz (Sertifikat uchun)
                </label>
                <div className="relative">
                  <UserIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Masalan: Sardor Aliyev"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-600 text-sm"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Elektron pochta (Gmail)
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="nomingiz@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-600 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Parol
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  placeholder="Kamida 6 ta belgi"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-600 text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-md shadow-primary-600/20 transition-all flex items-center justify-center gap-2 text-sm mt-2 disabled:opacity-50"
            >
              {loading 
                ? "Bajarilmoqda..." 
                : mode === 'register' 
                  ? "Hisob Yaratish va Boshlash" 
                  : "Tizimga Kirish"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-600">
            {mode === 'register' ? (
              <p>
                Oldin ro'yxatdan o'tganmisiz?{' '}
                <button
                  onClick={() => onNavigate('login')}
                  className="text-primary-600 font-bold hover:underline"
                >
                  Tizimga kiring
                </button>
              </p>
            ) : (
              <p>
                Hisobingiz yo'qmi?{' '}
                <button
                  onClick={() => onNavigate('register')}
                  className="text-primary-600 font-bold hover:underline"
                >
                  Ro'yxatdan o'ting
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
