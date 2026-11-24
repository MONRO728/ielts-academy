-- ====================================================================
-- IELTS ACADEMY — PRODUCTION DATABASE SCHEMA WITH ROW LEVEL SECURITY
-- ====================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. ENUMS
CREATE TYPE user_role AS ENUM ('student', 'admin');

-- 3. PROFILES TABLE (Linked with Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    avatar_url TEXT,
    role user_role DEFAULT 'student'::user_role NOT NULL,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 4. MODULES TABLE
CREATE TABLE IF NOT EXISTS public.modules (
    id INT PRIMARY KEY, -- 1 through 7
    title TEXT NOT NULL,
    tagline TEXT NOT NULL,
    description TEXT NOT NULL,
    icon_name TEXT NOT NULL,
    order_index INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 5. LESSONS TABLE
CREATE TABLE IF NOT EXISTS public.lessons (
    id INT PRIMARY KEY, -- 1 through 21
    module_id INT NOT NULL REFERENCES public.modules(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    youtube_url TEXT NOT NULL,
    duration TEXT NOT NULL,
    summary TEXT NOT NULL,
    theory_content TEXT NOT NULL,
    key_points JSONB DEFAULT '[]'::jsonb NOT NULL,
    vocabulary JSONB DEFAULT '[]'::jsonb NOT NULL,
    order_index INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 6. QUESTIONS TABLE
CREATE TABLE IF NOT EXISTS public.questions (
    id INT PRIMARY KEY,
    module_id INT NOT NULL REFERENCES public.modules(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    options JSONB NOT NULL, -- Array of string choices
    correct_answer INT NOT NULL, -- 0-based index
    explanation TEXT NOT NULL,
    question_type TEXT DEFAULT 'multiple_choice' NOT NULL,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 7. LESSON PROGRESS TABLE (Student completed lessons)
CREATE TABLE IF NOT EXISTS public.lesson_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lesson_id INT NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
    completed_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    CONSTRAINT unique_user_lesson UNIQUE(user_id, lesson_id)
);

-- 8. MODULE PROGRESS / COMPLETION TABLE
CREATE TABLE IF NOT EXISTS public.module_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    module_id INT NOT NULL REFERENCES public.modules(id) ON DELETE CASCADE,
    is_unlocked BOOLEAN DEFAULT FALSE NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE NOT NULL,
    unlocked_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    completed_at TIMESTAMPTZ,
    CONSTRAINT unique_user_module UNIQUE(user_id, module_id)
);

-- 9. TEST ATTEMPTS TABLE
CREATE TABLE IF NOT EXISTS public.test_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    module_id INT NOT NULL REFERENCES public.modules(id) ON DELETE CASCADE,
    score INT NOT NULL,
    total INT NOT NULL,
    percentage INT NOT NULL,
    passed BOOLEAN NOT NULL,
    user_answers JSONB NOT NULL,
    attempt_number INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 10. CERTIFICATES TABLE
CREATE TABLE IF NOT EXISTS public.certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    certificate_id TEXT NOT NULL UNIQUE, -- E.g. IELTS-CERT-884920
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    student_name TEXT NOT NULL,
    course_name TEXT DEFAULT 'IELTS' NOT NULL,
    issued_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    is_valid BOOLEAN DEFAULT TRUE NOT NULL,
    CONSTRAINT unique_user_certificate UNIQUE(user_id)
);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.module_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.test_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- Helper function: Is user admin?
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'admin'::user_role
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 1. PROFILES POLICIES
CREATE POLICY "Users can view their own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = id OR public.is_admin());

CREATE POLICY "Users can update their own profile name" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = id);

-- 2. MODULES & LESSONS POLICIES (Publicly readable for study)
CREATE POLICY "Anyone can read modules" 
ON public.modules FOR SELECT 
TO authenticated, anon 
USING (true);

CREATE POLICY "Admins can insert or modify modules" 
ON public.modules FOR ALL 
USING (public.is_admin());

CREATE POLICY "Anyone can read lessons" 
ON public.lessons FOR SELECT 
TO authenticated, anon 
USING (true);

CREATE POLICY "Admins can insert or modify lessons" 
ON public.lessons FOR ALL 
USING (public.is_admin());

-- 3. QUESTIONS POLICIES
-- Students can read questions during test, but only admins can edit
CREATE POLICY "Authenticated users can read questions" 
ON public.questions FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Admins can manage questions" 
ON public.questions FOR ALL 
USING (public.is_admin());

-- 4. LESSON PROGRESS POLICIES
CREATE POLICY "Users can view and insert their own lesson progress" 
ON public.lesson_progress FOR ALL 
USING (auth.uid() = user_id OR public.is_admin())
WITH CHECK (auth.uid() = user_id);

-- 5. MODULE PROGRESS POLICIES
CREATE POLICY "Users can view and update their own module progress" 
ON public.module_progress FOR ALL 
USING (auth.uid() = user_id OR public.is_admin())
WITH CHECK (auth.uid() = user_id);

-- 6. TEST ATTEMPTS POLICIES
CREATE POLICY "Users can view and insert their own test attempts" 
ON public.test_attempts FOR ALL 
USING (auth.uid() = user_id OR public.is_admin())
WITH CHECK (auth.uid() = user_id);

-- 7. CERTIFICATES POLICIES
-- Public can verify certificate validity by certificate_id
CREATE POLICY "Public can verify valid certificates by id" 
ON public.certificates FOR SELECT 
TO authenticated, anon 
USING (is_valid = true);

CREATE POLICY "Users can view their own certificates" 
ON public.certificates FOR SELECT 
USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "System and users can insert certificate on full completion" 
ON public.certificates FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- ====================================================================
-- AUTOMATIC PROFILE TRIGGER ON AUTH REGISTRATION (Google OAuth)
-- ====================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url, role)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    new.raw_user_meta_data->>'avatar_url',
    'student'::user_role
  );

  -- Automatically initialize Module 1 as unlocked for the new student
  INSERT INTO public.module_progress (user_id, module_id, is_unlocked, is_completed)
  VALUES (new.id, 1, TRUE, FALSE);

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
