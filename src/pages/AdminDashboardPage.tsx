import React, { useState } from 'react';
import { modulesData } from '../data/courseData';
import { useAuth } from '../context/AuthContext';
import { 
  ShieldAlert, 
  Users, 
  BookOpen, 
  Award, 
  Edit3, 
  Save, 
  Check, 
  ExternalLink,
  PlusCircle,
  FileQuestion,
  Lock,
  ArrowLeft
} from 'lucide-react';

interface AdminDashboardPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ onNavigate }) => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'students'>('overview');
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);
  const [saveNotice, setSaveNotice] = useState(false);

  // Selected module editable state
  const selectedModule = modulesData.find(m => m.id === selectedModuleId) || modulesData[0];
  const [editingTitle, setEditingTitle] = useState(selectedModule.title);
  const [editingDescription, setEditingDescription] = useState(selectedModule.description);

  if (currentUser?.role !== 'admin') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
          <Lock className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900">Ruxsat Cheklangan (403)</h2>
        <p className="text-slate-600 text-sm">
          Ushbu sahifa faqat IELTS Academy administratorlari uchun mo'ljallangan. 
          Administrator huquqiga ega bo'lish uchun profilingiz rolining 'admin' ekanligini tekshiring.
        </p>
        <button
          onClick={() => onNavigate('dashboard')}
          className="px-6 py-2.5 bg-primary-600 text-white font-semibold rounded-xl text-xs"
        >
          Boshqaruv Paneliga Qaytish
        </button>
      </div>
    );
  }

  const handleSaveContent = () => {
    setSaveNotice(true);
    setTimeout(() => setSaveNotice(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Admin Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            Administrator Boshqaruvi
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            IELTS Academy Markaziy Boshqaruv Tizimi
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Darslar, video havolalar, 70+ test savollari va bitiruvchilar statistikasini nazorat qilish
          </p>
        </div>

        <button
          onClick={() => onNavigate('dashboard')}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-medium flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" /> Talaba rejimiga o'tish
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-4">
        <button
          onClick={() => setActiveTab('overview')}
          className={`pb-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
            activeTab === 'overview'
              ? 'border-primary-600 text-primary-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Users className="w-4 h-4" /> Kurs Statistikasi
        </button>
        <button
          onClick={() => setActiveTab('content')}
          className={`pb-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
            activeTab === 'content'
              ? 'border-primary-600 text-primary-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" /> Darslar va Savollarni Tahrirlash
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-slate-500 uppercase">Jami Modullar</span>
              <div className="text-3xl font-extrabold text-slate-900 mt-2">7 ta</div>
              <p className="text-xs text-slate-400 mt-1">Har birida 3 tadan video dars</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-slate-500 uppercase">Jami Video Darsliklar</span>
              <div className="text-3xl font-extrabold text-slate-900 mt-2">21 ta</div>
              <p className="text-xs text-slate-400 mt-1">YouTube integratsiyasi bilan</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-slate-500 uppercase">Test Savollari Banki</span>
              <div className="text-3xl font-extrabold text-emerald-600 mt-2">70 ta</div>
              <p className="text-xs text-slate-400 mt-1">60% o'tish talabi bilan</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-base">7 Modulning Qisqacha Ko'rinishi</h3>
            <div className="space-y-3">
              {modulesData.map(m => (
                <div key={m.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">{m.title}</h4>
                    <p className="text-xs text-slate-500">{m.tagline}</p>
                  </div>
                  <div className="text-right text-xs">
                    <span className="font-bold text-slate-700">3 Dars • 10 Test</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'content' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Module Selector */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Modulni tanlang</span>
            {modulesData.map(m => (
              <button
                key={m.id}
                onClick={() => {
                  setSelectedModuleId(m.id);
                  setEditingTitle(m.title);
                  setEditingDescription(m.description);
                }}
                className={`w-full text-left p-3.5 rounded-xl border text-xs font-bold transition-all ${
                  selectedModuleId === m.id
                    ? 'bg-primary-50 border-primary-400 text-primary-950'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {m.title}
              </button>
            ))}
          </div>

          {/* Module Edit Box */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Modul {selectedModule.id} Tahrirlash</h3>
                <p className="text-xs text-slate-400">Sarlavha va leksiya tavsifini o'zgartirish</p>
              </div>
              <button
                onClick={handleSaveContent}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-sm"
              >
                <Save className="w-4 h-4" /> Saqlash
              </button>
            </div>

            {saveNotice && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                <Check className="w-4 h-4" /> Modul muvaffaqiyatli saqlandi!
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Modul Sarlavhasi</label>
                <input
                  type="text"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Modul Tavsifi</label>
                <textarea
                  rows={3}
                  value={editingDescription}
                  onChange={(e) => setEditingDescription(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                ></textarea>
              </div>

              {/* Lessons Table in this Module */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-bold text-slate-800 uppercase">3 Ta Video Darslik Havolalari</h4>
                {selectedModule.lessons.map(l => (
                  <div key={l.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                      <span>{l.title}</span>
                      <span className="text-slate-400">{l.duration}</span>
                    </div>
                    <div className="text-xs font-mono text-primary-700 truncate bg-white p-2 rounded border border-slate-200">
                      {l.youtubeUrl}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
