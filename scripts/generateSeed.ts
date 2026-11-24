import { modulesData } from '../src/data/courseData';
import * as fs from 'fs';
import * as path from 'path';

// Generate SQL Seed File
let sql = `-- ====================================================================
-- IELTS ACADEMY — AUTOMATIC SEED FOR 7 MODULES, 21 LESSONS, 70 QUESTIONS
-- ====================================================================

-- 1. Seed Modules
`;

modulesData.forEach((mod, idx) => {
  sql += `INSERT INTO public.modules (id, title, tagline, description, icon_name, order_index)
VALUES (${mod.id}, ${escapeSql(mod.title)}, ${escapeSql(mod.tagline)}, ${escapeSql(mod.description)}, ${escapeSql(mod.iconName)}, ${idx + 1})
ON CONFLICT (id) DO UPDATE SET 
  title = EXCLUDED.title,
  tagline = EXCLUDED.tagline,
  description = EXCLUDED.description,
  icon_name = EXCLUDED.icon_name;

`;
});

sql += `\n-- 2. Seed Lessons\n`;
modulesData.forEach(mod => {
  mod.lessons.forEach((l, lIdx) => {
    sql += `INSERT INTO public.lessons (id, module_id, title, youtube_url, duration, summary, theory_content, key_points, vocabulary, order_index)
VALUES (${l.id}, ${mod.id}, ${escapeSql(l.title)}, ${escapeSql(l.youtubeUrl)}, ${escapeSql(l.duration)}, ${escapeSql(l.summary)}, ${escapeSql(l.theoryContent)}, '${JSON.stringify(l.keyPoints).replace(/'/g, "''")}'::jsonb, '${JSON.stringify(l.vocabulary).replace(/'/g, "''")}'::jsonb, ${lIdx + 1})
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  youtube_url = EXCLUDED.youtube_url,
  duration = EXCLUDED.duration,
  summary = EXCLUDED.summary,
  theory_content = EXCLUDED.theory_content,
  key_points = EXCLUDED.key_points,
  vocabulary = EXCLUDED.vocabulary;

`;
  });
});

sql += `\n-- 3. Seed Questions\n`;
modulesData.forEach(mod => {
  mod.test.forEach(q => {
    sql += `INSERT INTO public.questions (id, module_id, question, options, correct_answer, explanation, question_type)
VALUES (${q.id}, ${mod.id}, ${escapeSql(q.question)}, '${JSON.stringify(q.options).replace(/'/g, "''")}'::jsonb, ${q.correctAnswer}, ${escapeSql(q.explanation)}, ${escapeSql(q.type)})
ON CONFLICT (id) DO UPDATE SET
  question = EXCLUDED.question,
  options = EXCLUDED.options,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  question_type = EXCLUDED.question_type;

`;
  });
});

function escapeSql(str: string): string {
  return `'${str.replace(/'/g, "''")}'`;
}

const outputPath = path.join(process.cwd(), 'supabase', 'seed.sql');
fs.writeFileSync(outputPath, sql, 'utf-8');
console.log('Seed SQL file successfully generated at:', outputPath);
