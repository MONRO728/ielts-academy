import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { UserProgress } from '../types';
import { modulesData } from '../data/courseData';
import { useAuth } from './AuthContext';

interface CourseContextType {
  progress: UserProgress;
  markLessonComplete: (lessonId: number) => void;
  recordTestResult: (moduleId: number, score: number, total: number) => { passed: boolean; unlockedNext: boolean };
  isLessonCompleted: (lessonId: number) => boolean;
  isModuleCompleted: (moduleId: number) => boolean;
  isModuleUnlocked: (moduleId: number) => boolean;
  isModuleEligibleForTest: (moduleId: number) => boolean;
  canGetCertificate: boolean;
  resetProgress: () => void;
  getOverallStats: () => {
    completedLessonsCount: number;
    completedModulesCount: number;
    coursePercentage: number;
    latestScore: number | null;
  };
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const userId = currentUser ? currentUser.id : 'guest_user';
  const storageKey = `ielts_progress_${userId}`;

  const defaultProgress: UserProgress = {
    userId,
    completedLessons: [],
    completedModules: [],
    unlockedModules: [1], // Module 1 always unlocked
    testScores: {},
  };

  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.unlockedModules || !parsed.unlockedModules.includes(1)) {
          parsed.unlockedModules = [1];
        }
        return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return defaultProgress;
  });

  // Reload progress when active user changes
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`ielts_progress_${userId}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.unlockedModules || !parsed.unlockedModules.includes(1)) {
          parsed.unlockedModules = [1];
        }
        setProgress(parsed);
      } else {
        setProgress({
          userId,
          completedLessons: [],
          completedModules: [],
          unlockedModules: [1],
          testScores: {}
        });
      }
    } catch {
      setProgress(defaultProgress);
    }
  }, [userId]);

  // Persist progress to local storage
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  }, [progress, storageKey]);

  const isLessonCompleted = useCallback((lessonId: number) => {
    return progress.completedLessons.includes(lessonId);
  }, [progress.completedLessons]);

  const isModuleCompleted = useCallback((moduleId: number) => {
    return progress.completedModules.includes(moduleId);
  }, [progress.completedModules]);

  const isModuleUnlocked = useCallback((moduleId: number) => {
    if (moduleId === 1) return true;
    return progress.unlockedModules.includes(moduleId);
  }, [progress.unlockedModules]);

  const isModuleEligibleForTest = useCallback((moduleId: number) => {
    const mod = modulesData.find(m => m.id === moduleId);
    if (!mod) return false;
    return mod.lessons.every(l => progress.completedLessons.includes(l.id));
  }, [progress.completedLessons]);

  const markLessonComplete = (lessonId: number) => {
    setProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId]
      };
    });
  };

  const recordTestResult = (moduleId: number, score: number, total: number) => {
    const percentage = Math.round((score / total) * 100);
    const passed = percentage >= 60;
    let unlockedNext = false;

    setProgress(prev => {
      const existingAttempts = prev.testScores[moduleId]?.attempts || 0;
      const updatedScores = {
        ...prev.testScores,
        [moduleId]: {
          score,
          total,
          percentage,
          passed,
          attempts: existingAttempts + 1,
          completedAt: new Date().toISOString()
        }
      };

      const updatedCompletedModules = [...prev.completedModules];
      const updatedUnlockedModules = [...prev.unlockedModules];

      if (passed) {
        if (!updatedCompletedModules.includes(moduleId)) {
          updatedCompletedModules.push(moduleId);
        }

        const nextModuleId = moduleId + 1;
        if (nextModuleId <= 7 && !updatedUnlockedModules.includes(nextModuleId)) {
          updatedUnlockedModules.push(nextModuleId);
          unlockedNext = true;
        }
      }

      // Check certificate eligibility
      let certificateId = prev.certificateId;
      let certificateIssuedAt = prev.certificateIssuedAt;
      if (updatedCompletedModules.length >= 7 && !certificateId) {
        certificateId = 'IELTS-CERT-' + Math.random().toString(36).substring(2, 8).toUpperCase() + '-' + Date.now().toString().slice(-4);
        certificateIssuedAt = new Date().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
      }

      return {
        ...prev,
        testScores: updatedScores,
        completedModules: updatedCompletedModules,
        unlockedModules: updatedUnlockedModules,
        certificateId,
        certificateIssuedAt
      };
    });

    return { passed, unlockedNext };
  };

  const canGetCertificate = progress.completedModules.length >= 7;

  const resetProgress = () => {
    const reset = {
      userId,
      completedLessons: [],
      completedModules: [],
      unlockedModules: [1],
      testScores: {}
    };
    setProgress(reset);
    localStorage.setItem(storageKey, JSON.stringify(reset));
  };

  const getOverallStats = () => {
    const completedLessonsCount = progress.completedLessons.length;
    const completedModulesCount = progress.completedModules.length;
    const coursePercentage = Math.round((completedLessonsCount / 21) * 60 + (completedModulesCount / 7) * 40);

    const scoresList = Object.values(progress.testScores);
    const latestScore = scoresList.length > 0 ? scoresList[scoresList.length - 1].percentage : null;

    return {
      completedLessonsCount,
      completedModulesCount,
      coursePercentage: Math.min(100, coursePercentage),
      latestScore
    };
  };

  return (
    <CourseContext.Provider value={{
      progress,
      markLessonComplete,
      recordTestResult,
      isLessonCompleted,
      isModuleCompleted,
      isModuleUnlocked,
      isModuleEligibleForTest,
      canGetCertificate,
      resetProgress,
      getOverallStats
    }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
};
