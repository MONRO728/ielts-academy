import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCourse } from '../context/CourseContext';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  User as UserIcon, 
  LogOut, 
  LogIn, 
  UserPlus, 
  Menu, 
  X,
  LayoutDashboard,
  ShieldCheck,
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, params?: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const { currentUser, logout } = useAuth();
  const { canGetCertificate } = useCourse();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: string, params?: any) => {
    onNavigate(page, params);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => handleNav(currentUser ? 'dashboard' : 'landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-700 to-primary-500 flex items-center justify-center text-white shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">IELTS</span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-primary-100 text-primary-700">Academy</span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium -mt-1 hidden sm:block">Professional Onlayn Ta'lim</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => handleNav('landing')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'landing' ? 'text-primary-600 bg-primary-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Asosiy
            </button>
            <button
              onClick={() => handleNav('modules')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'modules' ? 'text-primary-600 bg-primary-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Kurs Rejasi (7 Modul)
            </button>
            <button
              onClick={() => handleNav('verify-cert')}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'verify-cert' ? 'text-primary-600 bg-primary-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Sertifikat Tekshirish
            </button>

            {currentUser && (
              <>
                <button
                  onClick={() => handleNav('dashboard')}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === 'dashboard' ? 'text-primary-600 bg-primary-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Boshqaruv Paneli
                </button>
                <button
                  onClick={() => handleNav('certificate')}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === 'certificate' 
                      ? 'text-amber-700 bg-amber-50' 
                      : canGetCertificate
                        ? 'text-amber-600 hover:bg-amber-50 font-semibold'
                        : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Award className={`w-4 h-4 ${canGetCertificate ? 'text-amber-500 animate-pulse' : ''}`} />
                  Sertifikat
                  {canGetCertificate && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                  )}
                </button>

                {currentUser.role === 'admin' && (
                  <button
                    onClick={() => handleNav('admin')}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
                      currentPage === 'admin' ? 'text-rose-700 bg-rose-50' : 'text-rose-600 hover:bg-rose-50'
                    }`}
                  >
                    <ShieldAlert className="w-4 h-4" />
                    Admin
                  </button>
                )}
              </>
            )}
          </nav>

          {/* User Auth Buttons Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {!currentUser ? (
              <>
                <button
                  onClick={() => handleNav('login')}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  Kirish
                </button>
                <button
                  onClick={() => handleNav('register')}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-sm hover:shadow transition-all"
                >
                  <UserPlus className="w-4 h-4" />
                  Ro'yxatdan o'tish
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
                <button
                  onClick={() => handleNav('profile')}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  title="Profil sozlamalari"
                >
                  {currentUser.avatarUrl ? (
                    <img src={currentUser.avatarUrl} alt="" className="w-8 h-8 rounded-full border border-slate-200" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center text-sm border border-primary-200">
                      {currentUser.fullName.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="text-sm font-medium text-slate-700 max-w-[130px] truncate">
                    {currentUser.fullName}
                  </span>
                </button>
                <button
                  onClick={async () => {
                    await logout();
                    handleNav('landing');
                  }}
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Chiqish"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2">
          <button
            onClick={() => handleNav('landing')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Asosiy
          </button>
          <button
            onClick={() => handleNav('modules')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Kurs Rejasi (7 Modul)
          </button>
          <button
            onClick={() => handleNav('verify-cert')}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Sertifikat Tekshirish
          </button>

          {!currentUser ? (
            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2">
              <button
                onClick={() => handleNav('login')}
                className="w-full py-2.5 text-center text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                Kirish
              </button>
              <button
                onClick={() => handleNav('register')}
                className="w-full py-2.5 text-center text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg"
              >
                Ro'yxatdan o'tish
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => handleNav('dashboard')}
                className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <LayoutDashboard className="w-4 h-4 text-primary-600" />
                Boshqaruv Paneli
              </button>
              <button
                onClick={() => handleNav('certificate')}
                className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <Award className="w-4 h-4 text-amber-500" />
                Sertifikat
              </button>
              {currentUser.role === 'admin' && (
                <button
                  onClick={() => handleNav('admin')}
                  className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-bold text-rose-600 hover:bg-rose-50"
                >
                  <ShieldAlert className="w-4 h-4" />
                  Admin Boshqaruvi
                </button>
              )}
              <div className="pt-2 border-t border-slate-200">
                <button
                  onClick={async () => {
                    await logout();
                    handleNav('landing');
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 rounded-lg"
                >
                  <LogOut className="w-4 h-4" />
                  Chiqish
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </header>
  );
};
