-- ====================================================================
-- IELTS ACADEMY — PRODUCTION DATABASE INITIAL SEED
-- ====================================================================

-- 1. Insert 7 modules
INSERT INTO public.modules (id, title, tagline, description, icon_name, order_index) VALUES
(1, 'Module 1 — IELTS Introduction and Fundamentals', 'IELTS imtihoni formati, baholash mezonlari va tayyorgarlik poydevori', 'Ushbu modulda siz IELTS imtihonining Academic va General Training turlari, 9 ballik baholash shkalasi (Band Descriptors) hamda muvaffaqiyatli o''rganish rejasini qanday tuzishni to''liq o''rganasiz.', 'Compass', 1),
(2, 'Module 2 — IELTS Listening', 'Turli urg''ularni tushunish, diqqatni saqlash va 40 ta savolga to''g''ri javob topish', 'Listening bo''limida uchraydigan barcha savol turlari (Multiple Choice, Form Completion, Map Labelling), kalit so''zlarni tinglash va chalg''ituvchi ma''lumotlarni (distractors) aniqlash usullari.', 'Headphones', 2),
(3, 'Module 3 — IELTS Reading', 'Skimming, Scanning va True/False/Not Given strategiyalari', '60 daqiqa ichida 3 ta uzun ilmiy matnni o''qib, 40 ta savolga to''liq ulgurish, sarlavhalarni moslashtirish (Matching Headings) va yashirin ma''nolarni topish.', 'BookOpen', 3),
(4, 'Module 4 — IELTS Writing Task 1', 'Grafiklar, jadvallar, diagrammalar va jarayonlarni akademik tasvirlash', 'Academic Task 1 uchun 150 ta so''zdan iborat professional hisobot yozish, kirish (Introduction), umumiy xulosa (Overview) va detallar paragraflarini mukammal tuzish.', 'BarChart3', 4),
(5, 'Module 5 — IELTS Writing Task 2', 'Akademik insho (Essay), kuchli argumentlar va ilg''or grammatika', 'Opinion, Discussion, Problem-Solution va Direct Question esselarini 250+ so''zda yozish, PEEL metodi yordamida paragraflarni mukammal shakllantirish.', 'PenTool', 5),
(6, 'Module 6 — IELTS Speaking', 'Ravonlik, talaffuz va ishonch bilan savollarga javob berish', 'Speaking Part 1 (shaxsiy tanishuv), Part 2 (Cue Card bo''yicha 2 daqiqalik nutq) va Part 3 (chuqur mavhum munozara) bo''yicha ekspert texnikalari.', 'Mic', 6),
(7, 'Module 7 — IELTS Exam Strategies and Final Preparation', 'Imtihon kuni psixologiyasi, vaqt nazorati va yakuniy tayyorgarlik', 'Imtihon zalidagi stressni yengish, so''nggi 7 kunlik mashg''ulotlar dasturi, vaqtni daqiqasigacha to''g''ri boshqarish va Band 7.5+ ga chiqish yakuniy sirlari.', 'Award', 7)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  tagline = EXCLUDED.tagline,
  description = EXCLUDED.description,
  icon_name = EXCLUDED.icon_name;

-- 2. Insert 21 lessons with actual YouTube links
INSERT INTO public.lessons (id, module_id, title, youtube_url, duration, summary, theory_content, order_index) VALUES
(1, 1, '1-dars: IELTS Imtihoni Umumiy Tuzilishi va Formati', 'https://youtu.be/_bVcFt_51OE?si=Wbk9W8FqrydGymmN', '18 daqiqa', 'IELTS ning 4 ta asosiy qismi va vaqt taqsimoti.', 'IELTS (International English Language Testing System) — xalqaro ingliz tili imtihoni...', 1),
(2, 1, '2-dars: 9 Ballik Baholash Shkalasi va Band Descriptors', 'https://youtu.be/aEM1ihik9KQ?si=oXe88RzQ7Ow7brtu', '20 daqiqa', 'Har bir ball (Band 6, 7, 8, 9) nimani anglatishi.', 'Writing va Speaking bo''limlarida 4 ta teng baholash mezoni mavjud...', 2),
(3, 1, '3-dars: Muvaffaqiyatli O''rganish Rejasi va Resurslar', 'https://youtu.be/0QNTR_o6jx8?si=N_2HUfSMHeU3agHx', '22 daqiqa', 'Kunlik tartib va Cambridge rasmiy testlari bilan ishlash.', 'IELTS ga tayyorgarlik shunchaki test ishlash emas...', 3),
(4, 2, '4-dars: Listening Bo''limlari va Savol Turlari', 'https://youtu.be/rBHSIfz8EBQ?si=NcbY5EDsk-lwSCQ9', '25 daqiqa', 'Part 1 dan Part 4 gacha murakkablik darajasi.', 'IELTS Listening 4 ta qismdan iborat...', 1),
(5, 2, '5-dars: Distractors va Paraphrasing bilan Ishlash', 'https://youtu.be/ANjIbjNj1So?si=rKSTtzLVnrmrz03y', '24 daqiqa', 'Audio so''zlovchisi fikrini o''zgartirishi va sinonimlar.', 'IELTS Listening da eng ko''p xatolar Distractorlar tufayli sodir bo''ladi...', 2),
(6, 2, '6-dars: Map Labelling va Multiple Choice Texnikasi', 'https://youtu.be/oFWPLzFUQIs?si=Oe43AUnqrqsuTRJz', '21 daqiqa', 'Xaritalarda yo''nalish so''zlari va ko''p tanlovli savollar.', 'Map & Plan Labelling da boshlang''ich nuqtani topish eng muhim qadamdir...', 3),
(7, 3, '7-dars: Skimming va Scanning Texnikalari', 'https://youtu.be/jUZRibC8v-s?si=5fhor59JnQfu9mzc', '26 daqiqa', 'Matnni so''zma-so''z o''qimasdan asosiy mazmunni ilg''ash.', 'IELTS Reading da umumiy so''zlar soni 2500-3000 tani tashkil etadi...', 1),
(8, 3, '8-dars: True / False / Not Given & Yes / No / Not Given', 'https://youtu.be/scFWzc4L8ME?si=JoJMuAdMr0GwAwN2', '28 daqiqa', 'Eng ko''p chalkashlik keltirib chiqaradigan savol turi bo''yicha qoidalar.', 'Ko''pchilik o''quvchilar False va Not Given orasidagi farqni ajratishda qiynalishadi...', 2),
(9, 3, '9-dars: Matching Headings va Summary Completion', 'https://youtu.be/VlSOgEIpcvk?si=oxWM9XYIVKUHfqiw', '23 daqiqa', 'Paragraf sarlavhalarini topish strategiyasi.', 'Matching Headings da butun paragrafni qamrab oluvchi yagona markaziy g''oyani topish kerak...', 3),
(10, 4, '10-dars: Task 1 Tuzilishi va Asosiy Turlari', 'https://youtu.be/naTnh6xTH80?si=4fZ8VcoUr7-SO2Y3', '27 daqiqa', 'Line graph, Bar chart, Pie chart, Table, Process diagram.', 'Task 1 da kamida 150 ta so''z yozish talab etiladi...', 1),
(11, 4, '11-dars: Overview Yozish San''ati va Trend So''zlar', 'https://youtu.be/_2n4-Wr9z0A?si=R6WkPA0Cs5SxP_OC', '24 daqiqa', 'Band 7+ Overview qanday bo''lishi kerak, o''sish va pasayish fe''llari.', 'Overview Task 1 ning yuragi hisoblanadi...', 2),
(12, 4, '12-dars: Process Diagram va Xaritalarni Tasvirlash', 'https://youtu.be/tfjRUhjXYCA?si=AndldSP5Ighw-0NZ', '22 daqiqa', 'Majhul nisbat (Passive Voice) va xaritalarda o''zgarishlar.', 'Ishlab chiqarish jarayonida Passive Voice ishlatiladi...', 3),
(13, 5, '13-dars: Esse Turlari va Savol Tahlili', 'https://youtu.be/VBiLCePq4NE?si=WcspzVsqraWQqseO', '29 daqiqa', 'Agree/Disagree, Discuss Both Views, Problem-Solution.', 'Task 2 umumiy Writing balining 66 foizini tashkil qiladi...', 1),
(14, 5, '14-dars: Paragraf Qurilishi: PEEL Metodi', 'https://youtu.be/TxirOoozu1g?si=paHGphDYVLmM4b2d', '26 daqiqa', 'Point, Explanation, Example, Link metodi.', 'PEEL formulasi Coherence and Cohesion mezonidan 8+ ball olish kalitidir...', 2),
(15, 5, '15-dars: Kirish (Introduction) va Xulosa (Conclusion) Yozish', 'https://youtu.be/OQmZ8BRtf-0?si=VGoiKA2f1wpT3qjq', '25 daqiqa', 'Thesis statement yaratish va kuchli xulosa yasash.', 'Kuchli Tezis (Thesis statement) inshoning poydevoridir...', 3),
(16, 6, '16-dars: Speaking Imtihoni Formati va Part 1', 'https://youtu.be/OQmZ8BRtf-0?si=VGoiKA2f1wpT3qjq', '20 daqiqa', 'Examiner bilan salomlashish va tabiiy gapirish.', 'Speaking 11-14 daqiqa davom etadi. Qisqa javoblardan qoching...', 1),
(17, 6, '17-dars: Part 2: Cue Card va 1 Daqiqalik Tayyorgarlik', 'https://youtu.be/NUEY1lnRbIo?si=DPmKWiuQH72aEl91', '24 daqiqa', '1 daqiqada konspekt tuzish va 2 daqiqa to''xtovsiz gapirish.', 'Kartochkadagi barcha savollarga javob berishni rejalashtiring...', 2),
(18, 6, '18-dars: Part 3: Chuqur Munozara va Fikr Bildirish', 'https://youtu.be/EvTO5pppOhI?si=rMB3RGfbcz_rEL6v', '25 daqiqa', 'Global muammolar bo''yicha tahliliy fikr yuritish.', 'Part 3 da shaxsiy emas, balki jamiyat miqyosidagi mavzular muhokama qilinadi...', 3),
(19, 7, '19-dars: Imtihon Kuni Qoidalari va Stressni Boshqarish', 'https://youtu.be/FodG8BbUhpE?si=2HtVak7O_vMI6tOd', '21 daqiqa', 'Hujjatlar va imtihonoldi hayajonini boshqarish.', 'Asl shaxsni tasdiqlovchi hujjatni unutmang...', 1),
(20, 7, '20-dars: Vaqt Menejmenti va Umumiy Xatolardan Qochish', 'https://youtu.be/mM3qCOZ6rfM?si=x8P1laOQkG3bu6W3', '24 daqiqa', 'Reading va Writing da har bir daqiqani rejalashtirish.', 'IELTS da jarima bali yo''q, har bir savolga javob belgilang...', 2),
(21, 7, '21-dars: Mock Test Tahlili va So''nggi 7 Kunlik Reja', 'https://youtu.be/9AtWkNBsYn0?si=TrE-GxgDCQ9bGim0', '26 daqiqa', 'Mock testlarni haqiqiy sharoitda topshirish va natijalar.', 'Izchillik va tizimli tahlil siz istagan natijaga olib boradi...', 3)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  youtube_url = EXCLUDED.youtube_url,
  duration = EXCLUDED.duration,
  summary = EXCLUDED.summary;
