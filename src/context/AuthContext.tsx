import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { User } from '../types';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  isLiveSupabase: boolean;
  signInWithGoogle: () => Promise<{ error?: string }>;
  registerWithEmail: (fullName: string, email: string, password?: string) => Promise<{ success: boolean; message?: string }>;
  loginWithEmail: (email: string, password?: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
  updateProfileName: (fullName: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_STORAGE_USERS = 'ielts_platform_users';
const LOCAL_STORAGE_SESSION = 'ielts_platform_current_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize and listen to auth state changes
  useEffect(() => {
    if (isSupabaseConfigured) {
      // 1. Get initial session from Supabase
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          syncSupabaseProfile(session.user);
        } else {
          setLoading(false);
        }
      });

      // 2. Listen to real-time auth changes
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          syncSupabaseProfile(session.user);
        } else {
          setCurrentUser(null);
          setLoading(false);
        }
      });

      return () => {
        subscription.unsubscribe();
      };
    } else {
      // Fallback for seamless offline local development if credentials aren't plugged in yet
      try {
        const saved = localStorage.getItem(LOCAL_STORAGE_SESSION);
        if (saved) {
          setCurrentUser(JSON.parse(saved));
        }
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    }
  }, []);

  const syncSupabaseProfile = async (sbUser: any) => {
    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', sbUser.id)
        .single();

      if (profile && !error) {
        setCurrentUser({
          id: profile.id,
          email: profile.email,
          fullName: profile.full_name,
          role: profile.role || 'student',
          avatarUrl: profile.avatar_url || sbUser.user_metadata?.avatar_url,
          registeredAt: profile.created_at
        });
      } else {
        // If profile row hasn't been triggered yet, construct from user metadata
        const userObj: User = {
          id: sbUser.id,
          email: sbUser.email || '',
          fullName: sbUser.user_metadata?.full_name || sbUser.user_metadata?.name || sbUser.email?.split('@')[0] || 'IELTS Student',
          role: 'student',
          avatarUrl: sbUser.user_metadata?.avatar_url,
          registeredAt: new Date().toISOString()
        };
        setCurrentUser(userObj);
      }
    } catch (err) {
      console.error("Error syncing profile:", err);
    } finally {
      setLoading(false);
    }
  };

  // Google OAuth Real Provider
  const signInWithGoogle = async (): Promise<{ error?: string }> => {
    if (!isSupabaseConfigured) {
      // Demo Google Mock Login when external Supabase project is not yet configured
      const demoUser: User = {
        id: 'google_user_' + Date.now(),
        email: 'student.google@gmail.com',
        fullName: 'Google Authenticated Learner',
        role: 'student',
        avatarUrl: 'https://lh3.googleusercontent.com/a/default-user=s96-c',
        registeredAt: new Date().toISOString()
      };
      setCurrentUser(demoUser);
      localStorage.setItem(LOCAL_STORAGE_SESSION, JSON.stringify(demoUser));
      return {};
    }

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/dashboard',
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
        }
      });

      if (error) {
        return { error: error.message };
      }
      return {};
    } catch (e: any) {
      return { error: e.message || 'Google OAuth bilan ulanishda xatolik yuz berdi.' };
    }
  };

  // Standard Email Authentication
  const registerWithEmail = async (fullName: string, email: string, password?: string) => {
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedName = fullName.trim();

    if (!trimmedEmail || !trimmedName) {
      return { success: false, message: "Ism va email manzilini kiriting." };
    }

    if (isSupabaseConfigured && password) {
      const { data, error } = await supabase.auth.signUp({
        email: trimmedEmail,
        password,
        options: {
          data: {
            full_name: trimmedName,
          }
        }
      });

      if (error) {
        return { success: false, message: error.message };
      }

      if (data.user) {
        syncSupabaseProfile(data.user);
      }
      return { success: true };
    } else {
      // Local development fallback
      const users: User[] = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS) || '[]');
      if (users.find(u => u.email === trimmedEmail)) {
        return { success: false, message: "Bu email bilan oldin ro'yxatdan o'tilgan." };
      }

      const newUser: User = {
        id: 'user_' + Date.now(),
        fullName: trimmedName,
        email: trimmedEmail,
        role: trimmedEmail.includes('admin') ? 'admin' : 'student',
        registeredAt: new Date().toISOString()
      };

      users.push(newUser);
      localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(users));
      localStorage.setItem(LOCAL_STORAGE_SESSION, JSON.stringify(newUser));
      setCurrentUser(newUser);
      return { success: true };
    }
  };

  const loginWithEmail = async (email: string, password?: string) => {
    const trimmedEmail = email.trim().toLowerCase();

    if (isSupabaseConfigured && password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: trimmedEmail,
        password
      });

      if (error) {
        return { success: false, message: error.message };
      }

      if (data.user) {
        syncSupabaseProfile(data.user);
      }
      return { success: true };
    } else {
      const users: User[] = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS) || '[]');
      const found = users.find(u => u.email === trimmedEmail);

      if (!found) {
        // Create demo account on the fly for effortless testing
        const autoUser: User = {
          id: 'user_' + Date.now(),
          fullName: trimmedEmail.split('@')[0],
          email: trimmedEmail,
          role: trimmedEmail.includes('admin') ? 'admin' : 'student',
          registeredAt: new Date().toISOString()
        };
        users.push(autoUser);
        localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(users));
        localStorage.setItem(LOCAL_STORAGE_SESSION, JSON.stringify(autoUser));
        setCurrentUser(autoUser);
        return { success: true };
      }

      localStorage.setItem(LOCAL_STORAGE_SESSION, JSON.stringify(found));
      setCurrentUser(found);
      return { success: true };
    }
  };

  const logout = async () => {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    setCurrentUser(null);
    localStorage.removeItem(LOCAL_STORAGE_SESSION);
  };

  const updateProfileName = async (fullName: string): Promise<boolean> => {
    if (!currentUser) return false;
    const trimmed = fullName.trim();

    if (isSupabaseConfigured) {
      const { error } = await supabase
        .from('profiles')
        .update({ full_name: trimmed, updated_at: new Date().toISOString() })
        .eq('id', currentUser.id);

      if (error) {
        console.error("Profile update failed:", error);
        return false;
      }
    }

    const updated = { ...currentUser, fullName: trimmed };
    setCurrentUser(updated);
    localStorage.setItem(LOCAL_STORAGE_SESSION, JSON.stringify(updated));
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        isLiveSupabase: isSupabaseConfigured,
        signInWithGoogle,
        registerWithEmail,
        loginWithEmail,
        logout,
        updateProfileName
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
