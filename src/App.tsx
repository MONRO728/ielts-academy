import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CourseProvider } from './context/CourseContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { LandingPage } from './pages/LandingPage';
import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';
import { ModulesPage } from './pages/ModulesPage';
import { ModuleLearnPage } from './pages/ModuleLearnPage';
import { ModuleTestPage } from './pages/ModuleTestPage';
import { TestResultsPage } from './pages/TestResultsPage';
import { CertificatePage } from './pages/CertificatePage';
import { ProfilePage } from './pages/ProfilePage';
import { VerifyCertificatePage } from './pages/VerifyCertificatePage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

interface NavigationState {
  page: string;
  params?: any;
}

const MainApp: React.FC = () => {
  const { currentUser, loading } = useAuth();
  const [navState, setNavState] = useState<NavigationState>(() => {
    // Check URL parameters (e.g. /verify/IELTS-CERT-123456)
    const path = window.location.pathname;
    if (path.startsWith('/verify')) {
      const parts = path.split('/');
      const certId = parts[2] || '';
      return { page: 'verify-cert', params: { certId } };
    }
    return { page: currentUser ? 'dashboard' : 'landing' };
  });

  const handleNavigate = (page: string, params?: any) => {
    setNavState({ page, params });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-600">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-xs font-semibold uppercase tracking-wider">IELTS Academy Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (navState.page) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'login':
        return <AuthPage mode="login" onNavigate={handleNavigate} />;
      case 'register':
        return <AuthPage mode="register" onNavigate={handleNavigate} />;
      case 'dashboard':
        return currentUser ? (
          <DashboardPage onNavigate={handleNavigate} />
        ) : (
          <AuthPage mode="login" onNavigate={handleNavigate} />
        );
      case 'modules':
        return <ModulesPage onNavigate={handleNavigate} />;
      case 'module-learn':
        return (
          <ModuleLearnPage
            moduleId={navState.params?.moduleId || 1}
            onNavigate={handleNavigate}
          />
        );
      case 'module-test':
        return (
          <ModuleTestPage
            moduleId={navState.params?.moduleId || 1}
            onNavigate={handleNavigate}
          />
        );
      case 'test-results':
        return (
          <TestResultsPage
            moduleId={navState.params?.moduleId || 1}
            score={navState.params?.score || 0}
            total={navState.params?.total || 10}
            answers={navState.params?.answers || {}}
            passed={navState.params?.passed ?? false}
            unlockedNext={navState.params?.unlockedNext ?? false}
            onNavigate={handleNavigate}
          />
        );
      case 'certificate':
        return <CertificatePage onNavigate={handleNavigate} />;
      case 'verify-cert':
        return (
          <VerifyCertificatePage
            initialId={navState.params?.certId || ''}
            onNavigate={handleNavigate}
          />
        );
      case 'admin':
        return <AdminDashboardPage onNavigate={handleNavigate} />;
      case 'profile':
        return currentUser ? (
          <ProfilePage />
        ) : (
          <AuthPage mode="login" onNavigate={handleNavigate} />
        );
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar currentPage={navState.page} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <CourseProvider>
        <MainApp />
      </CourseProvider>
    </AuthProvider>
  );
}
