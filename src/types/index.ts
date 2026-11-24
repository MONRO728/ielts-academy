export type UserRole = 'student' | 'admin';

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  password?: string;
  registeredAt: string;
}

export interface Lesson {
  id: number;
  title: string;
  youtubeUrl: string;
  duration: string;
  summary: string;
  theoryContent: string;
  keyPoints: string[];
  vocabulary: { word: string; translation: string; example: string }[];
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-based index
  explanation: string;
  type: 'multiple_choice' | 'true_false' | 'vocabulary' | 'strategy';
}

export interface Module {
  id: number;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  lessons: Lesson[];
  test: Question[];
}

export interface TestAttempt {
  id: string;
  userId: string;
  moduleId: number;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  attemptNumber: number;
  createdAt: string;
  userAnswers?: { [qId: number]: number };
}

export interface Certificate {
  id: string;
  certificateId: string;
  userId: string;
  studentName: string;
  courseName: string;
  issuedAt: string;
  isValid: boolean;
}

export interface UserProgress {
  userId: string;
  completedLessons: number[]; // Lesson IDs: 1 to 21
  completedModules: number[]; // Module IDs: 1 to 7
  unlockedModules: number[]; // Module IDs: 1 to 7 (Module 1 always)
  testScores: {
    [moduleId: number]: {
      score: number;
      total: number;
      percentage: number;
      passed: boolean;
      attempts: number;
      completedAt: string;
    };
  };
  certificateId?: string;
  certificateIssuedAt?: string;
}
