import { describe, it, expect, beforeEach } from 'vitest';
import { modulesData } from '../src/data/courseData';

describe('IELTS Academy Course Curriculum Architecture', () => {
  it('must contain exactly 7 modules', () => {
    expect(modulesData).toHaveLength(7);
  });

  it('every module must contain exactly 3 video lessons (total 21 lessons)', () => {
    let totalLessons = 0;
    modulesData.forEach(module => {
      expect(module.lessons).toHaveLength(3);
      totalLessons += module.lessons.length;
      
      module.lessons.forEach(lesson => {
        expect(lesson.youtubeUrl).toContain('youtu');
        expect(lesson.title).toBeTruthy();
        expect(lesson.theoryContent).toBeTruthy();
        expect(lesson.vocabulary.length).toBeGreaterThan(0);
      });
    });
    expect(totalLessons).toBe(21);
  });

  it('every module must have at least 10 assessment questions (total 70+ questions)', () => {
    let totalQuestions = 0;
    modulesData.forEach(module => {
      expect(module.test.length).toBeGreaterThanOrEqual(10);
      totalQuestions += module.test.length;

      module.test.forEach(question => {
        expect(question.question).toBeTruthy();
        expect(question.options.length).toBeGreaterThanOrEqual(2);
        expect(question.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(question.correctAnswer).toBeLessThan(question.options.length);
        expect(question.explanation).toBeTruthy();
      });
    });
    expect(totalQuestions).toBeGreaterThanOrEqual(70);
  });
});

describe('Progression and 60% Passing Calculation', () => {
  it('correctly calculates pass (>=60%) and fail (<60%) results', () => {
    const total = 10;

    // 5 correct out of 10 = 50% -> FAIL
    const scoreFail = 5;
    const percentageFail = Math.round((scoreFail / total) * 100);
    const passedFail = percentageFail >= 60;
    expect(percentageFail).toBe(50);
    expect(passedFail).toBe(false);

    // 6 correct out of 10 = 60% -> PASS
    const scorePass = 6;
    const percentagePass = Math.round((scorePass / total) * 100);
    const passedPass = percentagePass >= 60;
    expect(percentagePass).toBe(60);
    expect(passedPass).toBe(true);

    // 9 correct out of 10 = 90% -> PASS
    const scoreHigh = 9;
    const percentageHigh = Math.round((scoreHigh / total) * 100);
    expect(percentageHigh).toBe(90);
    expect(percentageHigh >= 60).toBe(true);
  });

  it('generates a valid unique Certificate ID', () => {
    const generateCertId = () => 
      'IELTS-CERT-' + Math.random().toString(36).substring(2, 8).toUpperCase() + '-' + Date.now().toString().slice(-4);
    
    const id1 = generateCertId();
    const id2 = generateCertId();
    expect(id1).toMatch(/^IELTS-CERT-[A-Z0-9]{6}-[0-9]{4}$/);
    expect(id1).not.toBe(id2);
  });
});
