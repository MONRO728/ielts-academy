# IELTS Academy — Production E-Learning Platform

**IELTS Academy** — bu IELTS xalqaro imtihoniga to'liq tayyorgarlik ko'rish uchun mo'ljallangan, ishlab chiqarishga (Production) tayyor, zamonaviy full-stack arxitekturaga ega elektron ta'lim platformasi.

---

## 🏛️ Loyiha Arxitekturasi

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, React Router, Lucide Icons, Canvas Confetti.
- **Backend & Database:** Supabase PostgreSQL, Supabase Auth (Google OAuth), Row Level Security (RLS) qoidalari.
- **Testlash (QA):** Vitest, React Testing Library, JSDOM.
- **Xavfsizlik:** RLS politsiyalari orqali ma'lumotlar faqat o'z egasiga yoki administratorga ochiq, sertifikatlar esa ommaviy tekshirish uchun faqat tasdiqlangan ID bo'yicha cheklangan ma'lumotlarni qaytaradi.

---

## 🚀 Qanday Ishga Tushiriladi? (Local Development)

### 1. Bog'liqliklarni o'rnatish
```bash
npm install
```

### 2. Mahalliy serverni ishga tushirish
```bash
npm run dev
```
Brauzerda `http://localhost:5173` manzilini oching.

### 3. Avtomatlashtirilgan testlarni ishga tushirish
```bash
npm test
```

### 4. Ishlab chiqarish (Production build) tekshiruvi
```bash
npm run build
npm run preview
```

---

## 🔑 Supabase va Google OAuth Sozlamalari

Loyiha `.env` va `.env.example` fayllari bilan ta'minlangan. Real tashqi Supabase loyihasini ulash uchun:

1. [Supabase](https://supabase.com) saytida yangi loyiha oching.
2. `supabase/migrations/20261124_01_init_schema.sql` fayli ichidagi SQL kodini Supabase SQL Editor'ida ishga tushiring (Jadvallar va RLS avtomatik yaratiladi).
3. `supabase/seed.sql` fayli ichidagi SQL kodini ishga tushirib, 7 ta modul va 21 ta darslikni bazaga kiritib oling.
4. Supabase Dashboard -> **Authentication** -> **Providers** bo'limida **Google** ni yoqing (Google Cloud Console Client ID va Secret'ni kiriting).
5. Loyihadagi `.env` fayliga ma'lumotlarni kiriting:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   VITE_APP_URL=http://localhost:5173
   ```
> **Eslatma:** Agar Supabase kalitlari kiritilmagan bo'lsa, platforma avtomatik tarzda to'liq offline / mahalliy test rejimiga o'tadi va barcha funksiyalar (Google Mock, testlar, qulflar, sertifikatlar) hech qanday to'siqlarsiz mahalliy ishlayveradi.

---

## 📚 7 Ta Modul va 21 Ta Darslik (Siz taqdim etgan haqiqiy havolalar)

1. **Module 1 — IELTS Introduction and Fundamentals**
   - 1-dars: IELTS Imtihoni Umumiy Tuzilishi va Formati (`_bVcFt_51OE`)
   - 2-dars: 9 Ballik Baholash Shkalasi va Band Descriptors (`aEM1ihik9KQ`)
   - 3-dars: Muvaffaqiyatli O'rganish Rejasi va Resurslar (`0QNTR_o6jx8`)
2. **Module 2 — IELTS Listening**
   - 4-dars: Listening Bo'limlari va Savol Turlari (`rBHSIfz8EBQ`)
   - 5-dars: Distractors va Paraphrasing bilan Ishlash (`ANjIbjNj1So`)
   - 6-dars: Map Labelling va Multiple Choice Texnikasi (`oFWPLzFUQIs`)
3. **Module 3 — IELTS Reading**
   - 7-dars: Skimming va Scanning Texnikalari (`jUZRibC8v-s`)
   - 8-dars: True / False / Not Given & Yes / No / Not Given (`scFWzc4L8ME`)
   - 9-dars: Matching Headings va Summary Completion (`VlSOgEIpcvk`)
4. **Module 4 — IELTS Writing Task 1**
   - 10-dars: Task 1 Tuzilishi va Asosiy Turlari (`naTnh6xTH80`)
   - 11-dars: Overview Yozish San'ati va Trend So'zlar (`_2n4-Wr9z0A`)
   - 12-dars: Process Diagram va Xaritalarni Tasvirlash (`tfjRUhjXYCA`)
5. **Module 5 — IELTS Writing Task 2**
   - 13-dars: Esse Turlari va Savol Tahlili (`VBiLCePq4NE`)
   - 14-dars: Paragraf Qurilishi: PEEL Metodi (`TxirOoozu1g`)
   - 15-dars: Kirish (Introduction) va Xulosa (Conclusion) Yozish (`OQmZ8BRtf-0`)
6. **Module 6 — IELTS Speaking**
   - 16-dars: Speaking Imtihoni Formati va Part 1 (`OQmZ8BRtf-0`)
   - 17-dars: Part 2: Cue Card va 1 Daqiqalik Tayyorgarlik (`NUEY1lnRbIo`)
   - 18-dars: Part 3: Chuqur Munozara va Fikr Bildirish (`EvTO5pppOhI`)
7. **Module 7 — IELTS Exam Strategies and Final Preparation**
   - 19-dars: Imtihon Kuni Qoidalari va Stressni Boshqarish (`FodG8BbUhpE`)
   - 20-dars: Vaqt Menejmenti va Umumiy Xatolardan Qochish (`mM3qCOZ6rfM`)
   - 21-dars: Mock Test Tahlili va So'nggi 7 Kunlik Reja (`9AtWkNBsYn0`)

---

## 🔒 Ketma-ket Ochilish (Locking) va 60% Baholash Qoidalari

- Boshlang'ich holatda faqat **1-Modul** ochiq.
- Har bir modulda **10 tadan maxsus imtihon savoli** (jami 70+ savol) mavjud.
- O'tish talabi: **60%** (kamida 6 ta to'g'ri javob).
- 60% dan past to'plansa: Keyingi modul qulfligicha qoladi.
- 60% yoki undan yuqori to'plansa: Modul yakunlangan deb belgilanadi va keyingi modul ochiladi.

---

## 🎓 Sertifikat va Ommaviy Tekshiruv (Public Verification)

- **Sertifikat berilishi:** 7 ta modulning barchasi 60%+ bilan tugatilgach, noyob ID raqamli (`IELTS-CERT-XXXXXX-XXXX`) rasmiy sertifikat generatsiya qilinadi.
- **Dizayn:** Maroon & Gold Elegant Professional andozasi asosida yaratilgan.
- **Chop etish:** Brauzer orqali to'g'ridan-to'g'ri qog'ozga chop etish yoki PDF formatida yuklab olish imkoniyati mavjud.
- **Ommaviy tekshirish:** Har qanday tashrif buyuruvchi `/verify/CERTIFICATE_ID` sahifasida yoki yuqori menyudagi "Sertifikat Tekshirish" bo'limida sertifikat haqiqiyligini tekshirishi mumkin.

---

## 🛡️ Administrator Tizimi (Role-based Admin Dashboard)

- `role: 'admin'` huquqiga ega foydalanuvchilar yuqori menyuda qizil "Admin" tugmasini ko'rishadi.
- Admin dashboardida barcha modullar, darsliklar va test savollarini markazlashgan holda ko'rish va boshqarish mumkin.
- Oddiy talabalar uchun bu tizim 403 Forbidden himoyasi bilan yopiq.

---

## ✍️ Kurs Materiallarini Tahrirlash

- Darslar, YouTube linklar va test savollari: `src/data/courseData.ts`
- Baza migratsiyasi: `supabase/migrations/20261124_01_init_schema.sql`
- SQL dastlabki to'ldirish (seed): `supabase/seed.sql`
- Sertifikat dizayni: `src/pages/CertificatePage.tsx`
