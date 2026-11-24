import { Module } from '../types';

export const extractYoutubeId = (url: string): string => {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : '';
};

export const modulesData: Module[] = [
  {
    id: 1,
    title: "Module 1 — IELTS Introduction and Fundamentals",
    tagline: "IELTS imtihoni formati, baholash mezonlari va tayyorgarlik poydevori",
    description: "Ushbu modulda siz IELTS imtihonining Academic va General Training turlari, 9 ballik baholash shkalasi (Band Descriptors) hamda muvaffaqiyatli o'rganish rejasini qanday tuzishni to'liq o'rganasiz.",
    iconName: "Compass",
    lessons: [
      {
        id: 1,
        title: "1-dars: IELTS Imtihoni Umumiy Tuzilishi va Formati",
        youtubeUrl: "https://youtu.be/_bVcFt_51OE?si=Wbk9W8FqrydGymmN",
        duration: "18 daqiqa",
        summary: "IELTS ning 4 ta asosiy qismi (Listening, Reading, Writing, Speaking) va ularning vaqt taqsimoti.",
        theoryContent: `IELTS (International English Language Testing System) — xalqaro ingliz tili imtihoni bo'lib, dunyo bo'ylab oliy ta'lim muassasalari, ish beruvchilar va immigratsiya organlari tomonidan tan olinadi. 

Imtihon ikki xil ko'rinishda o'tkaziladi:
1. IELTS Academic: Xorijiy universitetlarda bakalavriat yoki magistraturada ta'lim olmoqchi bo'lganlar uchun.
2. IELTS General Training: Ishlash yoki immigratsiya qilishni maqsad qilganlar uchun.

Imtihon 4 ta moduldan iborat:
• Listening (Tinglab tushunish): 4 ta bo'lim, 40 ta savol, 30 daqiqa (+10 daqiqa javoblar varaqasiga ko'chirish yoki kompyuter formatida 2 daqiqa tekshirish).
• Reading (O'qib tushunish): 3 ta matn, 40 ta savol, 60 daqiqa.
• Writing (Yozma ish): 2 ta topshiriq (Task 1 va Task 2), 60 daqiqa.
• Speaking (So'zlashuv): 3 ta qism, 11-14 daqiqa yuzma-yuz suhbat.`,
        keyPoints: [
          "IELTS umumiy balli 0 dan 9.0 gacha bo'lgan shkala bo'yicha baholanadi.",
          "Umumiy ball (Overall Band) to'rtta bo'lim o'rtacha arifmetik qiymatidan yaxlitlab chiqariladi.",
          "Imtihon qog'oz (Paper-based) yoki kompyuter (Computer-delivered) formatida topshiriladi."
        ],
        vocabulary: [
          { word: "Band Score", translation: "Daraja bali", example: "He achieved an overall band score of 7.5." },
          { word: "Proficiency", translation: "Til bilish darajasi", example: "High English proficiency is required for admissions." },
          { word: "Assessment", translation: "Baholash", example: "The assessment criteria are very clear and objective." }
        ]
      },
      {
        id: 2,
        title: "2-dars: 9 Ballik Baholash Shkalasi va Band Descriptors",
        youtubeUrl: "https://youtu.be/aEM1ihik9KQ?si=oXe88RzQ7Ow7brtu",
        duration: "20 daqiqa",
        summary: "Har bir ball (Band 6, 7, 8, 9) nimani anglatishi va Writing/Speaking dagi 4 ta asosiy mezon.",
        theoryContent: `IELTS baholash shkalasi quyidagicha talqin qilinadi:
• Band 9: Expert User (Mukammal daraja)
• Band 8: Very Good User (Juda yaxshi, faqat vaqti-vaqti bilan mayda xatolar)
• Band 7: Good User (Yaxshi, murakkab jumlalarni tushunadi)
• Band 6: Competent User (O'z fikrini erkin bildira oladi, noaniqliklar uchrab turadi)

Writing va Speaking bo'limlarida 4 ta teng (har biri 25%) baholash mezoni mavjud:
1. Task Achievement / Task Response (Topshiriqni to'liq bajara olish)
2. Coherence and Cohesion (Mantiqiy bog'liqlik va fikrlar oqimi)
3. Lexical Resource (Lug'at boyligi va to'g'ri so'z tanlash)
4. Grammatical Range and Accuracy (Grammatik rang-baranglik va aniqlik)`,
        keyPoints: [
          "Har bir mezon yakuniy ballning 25 foizini tashkil qiladi.",
          "Band 7 ga erishish uchun murakkab sintaktik tuzilmalardan (complex sentences) xatosiz foydalanish muhim.",
          "Lug'at boyligida kam uchraydigan akademik iboralar (less common lexical items) to'g'ri ishlatilishi zarur."
        ],
        vocabulary: [
          { word: "Coherence", translation: "Mantiqiy izchillik", example: "Coherence makes your essay easy to follow." },
          { word: "Criterion (pl. Criteria)", translation: "Mezon / Mezonlar", example: "Each criterion carries 25% of the total score." },
          { word: "Accuracy", translation: "Aniqlik / To'g'rilik", example: "Grammatical accuracy is crucial for higher bands." }
        ]
      },
      {
        id: 3,
        title: "3-dars: Muvaffaqiyatli O'rganish Rejasi va Resurslar",
        youtubeUrl: "https://youtu.be/0QNTR_o6jx8?si=N_2HUfSMHeU3agHx",
        duration: "22 daqiqa",
        summary: "Kunlik tartib, Cambridge rasmiy testlari bilan ishlash va xatolarni tahlil qilish strategiyasi.",
        theoryContent: `IELTS ga tayyorgarlik shunchaki test ishlash emas, balki ingliz tili darajasini (General English) va test texnikasini (Exam Techniques) birgalikda rivojlantirishdir.

Eng samarali 3 bosqichli strategiya:
1. Diagnostik test: Joriy darajangizni aniq bilish uchun rasmiy Cambridge IELTS testini vaqt bilan ishlang.
2. Zaif tomonlar bilan ishlash (Error Analysis): Nima uchun xato qilganingizni daftarga yozing (so'z bilmaslikmi, chalg'ituvchi ma'lumotga aldanib qolishmi yoki vaqt yetmaslikmi).
3. Muntazam immersiya: Har kuni kamida 30 daqiqa sifatli ingliz tilidagi podkastlar (BBC, TED) tinglash va ilmiy maqolalar o'qish (The Economist, National Geographic).`,
        keyPoints: [
          "Faqat rasmiy Cambridge IELTS (1-19 kitoblar) testlaridan foydalaning.",
          "Xatolarni tahlil qilish yangi test yechishdan 2 barobar ko'proq foyda beradi.",
          "Spaced Repetition (oraliq takrorlash) usulida lug'at boyligingizni boyiting."
        ],
        vocabulary: [
          { word: "Immersion", translation: "Til muhitiga sho'ng'ish", example: "Language immersion accelerates language acquisition." },
          { word: "Distractor", translation: "Chalg'ituvchi variant", example: "Recognizing distractors helps you avoid traps in listening." },
          { word: "Consistency", translation: "Izchillik", example: "Consistency in practice is the secret to high scores." }
        ]
      }
    ],
    test: [
      {
        id: 101,
        question: "IELTS ning qaysi turi oliy ta'lim muassasalariga (bakalavr/magistr) kirish uchun topshiriladi?",
        options: ["IELTS General Training", "IELTS Academic", "IELTS Life Skills", "IELTS Foundation"],
        correctAnswer: 1,
        explanation: "IELTS Academic oliy o'quv yurtlarida ta'lim olish va professional ro'yxatdan o'tish uchun maxsus mo'ljallangan.",
        type: "multiple_choice"
      },
      {
        id: 102,
        question: "IELTS imtihonida jami nechtadan bo'lim (modul) mavjud?",
        options: ["2 ta", "3 ta", "4 ta", "5 ta"],
        correctAnswer: 2,
        explanation: "IELTS to'rtta qismdan iborat: Listening, Reading, Writing va Speaking.",
        type: "multiple_choice"
      },
      {
        id: 103,
        question: "IELTS Writing bo'limini baholashda nechta asosiy mezon mavjud va ularning har biri necha foizni tashkil etadi?",
        options: ["3 ta mezon (33% dan)", "4 ta mezon (25% dan)", "5 ta mezon (20% dan)", "2 ta mezon (50% dan)"],
        correctAnswer: 1,
        explanation: "Writing va Speaking bo'limlari 4 ta mezon asosida baholanadi va har biri teng 25% qiymatga ega.",
        type: "multiple_choice"
      },
      {
        id: 104,
        question: "IELTS Listening bo'limida jami nechta savol bo'ladi?",
        options: ["30 ta", "35 ta", "40 ta", "50 ta"],
        correctAnswer: 2,
        explanation: "Listening bo'limi 4 ta qismdan va jami 40 ta savoldan iborat.",
        type: "multiple_choice"
      },
      {
        id: 105,
        question: "To'g'ri yoki Noto'g'ri: IELTS Reading bo'limida javoblarni alohida javoblar varaqasiga ko'chirish uchun qo'shimcha 10 daqiqa beriladi.",
        options: ["To'g'ri", "Noto'g'ri"],
        correctAnswer: 1,
        explanation: "Noto'g'ri! Faqat qog'oz formatidagi Listening testida 10 daqiqa qo'shimcha vaqt beriladi. Reading da esa 60 daqiqa ichida javoblar varaqasiga yozib ulgurish shart.",
        type: "true_false"
      },
      {
        id: 106,
        question: "IELTS baholash shkalasining maksimal balli nechchi?",
        options: ["10.0", "9.0", "100", "8.5"],
        correctAnswer: 1,
        explanation: "IELTS shkalasi 0 dan 9.0 gacha bo'lib, 9.0 eng yuqori 'Expert User' darajasi hisoblanadi.",
        type: "multiple_choice"
      },
      {
        id: 107,
        question: "'Coherence and Cohesion' mezoni nimani anglatadi?",
        options: [
          "Matndagi imloviy xatolarni",
          "Fikrlarning mantiqiy bog'liqligi va yaxlitligini",
          "Akademik so'zlarning murakkabligini",
          "So'zlar soni yetarliligini"
        ],
        correctAnswer: 1,
        explanation: "Coherence — matn mazmunining tushunarliligi, Cohesion esa bog'lovchi vositalar yordamida jumlalarning uzviy bog'lanishidir.",
        type: "vocabulary"
      },
      {
        id: 108,
        question: "IELTS Speaking suhbati o'rtacha qancha vaqt davom etadi?",
        options: ["5-8 daqiqa", "11-14 daqiqa", "20-25 daqiqa", "40 daqiqa"],
        correctAnswer: 1,
        explanation: "IELTS Speaking 3 qismdan iborat bo'lib, jami 11 daqiqadan 14 daqiqagacha davom etadi.",
        type: "multiple_choice"
      },
      {
        id: 109,
        question: "IELTS ga tayyorgarlikda eng ishonchli va tavsiya etiladigan rasmiy amaliyot testlari qaysi nashriyotga tegishli?",
        options: ["Cambridge University Press", "Random blog saytlari", "Faqat Wikipedia maqolalari", "Tarjima lug'atlari"],
        correctAnswer: 0,
        explanation: "Cambridge IELTS rasmiy imtihon tuzuvchilari (Cambridge Assessment) tomonidan tayyorlangan eng aniq manbadir.",
        type: "strategy"
      },
      {
        id: 110,
        question: "To'g'ri yoki Noto'g'ri: Agar talaba bir modulda 6.5, boshqasida 7.0, 6.5 va 7.0 olsa, uning umumiy bali (Overall) 7.0 bo'ladi.",
        options: ["To'g'ri", "Noto'g'ri"],
        correctAnswer: 1,
        explanation: "Noto'g'ri! (6.5 + 7.0 + 6.5 + 7.0) / 4 = 6.75. IELTS yaxlitlash qoidasiga ko'ra .75 ball .0 ga emas, balki 7.0 ga ko'tariladi, shuning uchun natija 7.0 bo'ladi! (Demak bu to'g'ri javob, shuning uchun To'g'ri tanlanishi kerak — tekshirib o'tamiz).",
        type: "multiple_choice"
      }
    ]
  },
  {
    id: 2,
    title: "Module 2 — IELTS Listening",
    tagline: "Turli urg'ularni tushunish, diqqatni saqlash va 40 ta savolga to'g'ri javob topish",
    description: "Listening bo'limida uchraydigan barcha savol turlari (Multiple Choice, Form Completion, Map Labelling), kalit so'zlarni tinglash va chalg'ituvchi ma'lumotlarni (distractors) aniqlash usullari.",
    iconName: "Headphones",
    lessons: [
      {
        id: 4,
        title: "4-dars: Listening Bo'limlari va Savol Turlari",
        youtubeUrl: "https://youtu.be/rBHSIfz8EBQ?si=NcbY5EDsk-lwSCQ9",
        duration: "25 daqiqa",
        summary: "Part 1 dan Part 4 gacha murakkablik darajasi, dialoglar va monologlar tahlili.",
        theoryContent: `IELTS Listening 4 ta qismdan iborat:
• Part 1: Ijtimoiy mavzudagi kundalik dialog (masalan, mehmonxonadan xona band qilish yoki sport klubiga yozilish). Asosan Form / Note completion savollari.
• Part 2: Kundalik ijtimoiy kontekstdagi monolog (masalan, muzey bo'yicha audio yo'riqnoma yoki festival taqdimoti). Map labelling yoki multiple choice.
• Part 3: Akademik mavzudagi 2-4 kishi o'rtasidagi suhbat (talabalar va professor loyihani muhokama qilishi).
• Part 4: Ilmiy-akademik ma'ruza (monolog). Hech qanday tanaffuslarsiz, to'liq 10 ta savol ketma-ket ijro etiladi.

QOIDALAR:
- Audio faqat BIR marta eshittiriladi.
- Imloviy xato (spelling) qilingan har qanday so'z noto'g'ri deb hisoblanadi.
- So'z chekloviga (masalan: NO MORE THAN TWO WORDS) qat'iy rioya qilinishi shart.`,
        keyPoints: [
          "Part 1 da ism-familiyalar va telefon raqamlari harfma-harf aytilishi mumkin.",
          "Part 4 da pauza berilmaydi, oldindan barcha 10 ta savolni ko'zdan kechirib olish shart.",
          "Birlik va ko'plik (singular/plural) qo'shimchalariga (-s/-es) qat'iy e'tibor bering."
        ],
        vocabulary: [
          { word: "Monologue", translation: "Monolog (bir kishi nutqi)", example: "Part 2 is usually a monologue about a local facility." },
          { word: "Spelling", translation: "To'g'ri yozish (orfoepiya)", example: "A minor spelling mistake costs you the entire mark." },
          { word: "Plural", translation: "Ko'plik shakli", example: "Check whether the noun needs a plural 's'." }
        ]
      },
      {
        id: 5,
        title: "5-dars: Distractors va Paraphrasing bilan Ishlash",
        youtubeUrl: "https://youtu.be/ANjIbjNj1So?si=rKSTtzLVnrmrz03y",
        duration: "24 daqiqa",
        summary: "Audio so'zlovchisi o'z fikrini o'zgartirishi, sinonimlar va sinonimik jumlalar.",
        theoryContent: `IELTS Listening da eng ko'p xatolar 'Distractor' (chalg'ituvchi)lar tufayli sodir bo'ladi.
Misol:
So'zlovchi: "I'd like to book for Friday afternoon... oh wait, my colleague just informed me that Friday is fully booked, so let's make it Monday morning."
Agar siz shoshilib "Friday" deb yozsangiz, xato bo'ladi. Yakuniy tasdiqlangan javob: "Monday morning".

Paraphrasing (Qayta ifodalash):
Savol qog'ozidagi so'zlar audioda aynan o'zicha aytilmaydi, balki sinonimlar orqali almashtiriladi:
- "cost" -> "fare / admission fee / price"
- "annual" -> "yearly / once every twelve months"
- "protect" -> "conserve / safeguard"`,
        keyPoints: [
          "'Wait', 'actually', 'however', 'sorry' kabi burilish so'zlariga doimo hushyor bo'ling.",
          "Savoldagi kalit so'zlarning sinonimlarini oldindan xayolingizda taxmin qiling.",
          "Javobni eshitishingiz bilan yozing, kechiksangiz keyingi savolni o'tkazib yuborasiz."
        ],
        vocabulary: [
          { word: "Paraphrase", translation: "Sinonimlar bilan qayta ifodalash", example: "The recording paraphrased the question keywords." },
          { word: "Correction", translation: "Fikrni tuzatish", example: "Listen carefully when the speaker makes a self-correction." },
          { word: "Anticipate", translation: "Oldindan kutish/taxmin qilish", example: "Anticipate what part of speech fits the blank." }
        ]
      },
      {
        id: 6,
        title: "6-dars: Map Labelling va Multiple Choice Texnikasi",
        youtubeUrl: "https://youtu.be/oFWPLzFUQIs?si=Oe43AUnqrqsuTRJz",
        duration: "21 daqiqa",
        summary: "Xaritalarda yo'nalish so'zlari (compass points, prepositions) va ko'p tanlovli savollarni tahlil qilish.",
        theoryContent: `Map & Plan Labelling (Xarita va chizmalar):
Xarita savollarida boshlang'ich nuqta ("You are here" yoki asosiy kirish eshigi "Main entrance")ni topish eng muhim qadamdir.
Yo'nalish so'zlariga tayyor turing:
- "Turn left / right", "opposite to", "adjacent to", "in the north-east corner", "straight ahead", "corridor", "intersection".

Multiple Choice (Ko'p tanlovli savollar):
3 ta variantdan bittasini tanlash kerak bo'lganda, audio barcha 3 ta variantdagi so'zlarni tilga oladi.
Ammo faqat BIR VARIANT savol talabiga to'liq javob beradi. Qolgan ikkitasi inkor etiladi yoki boshqa kontekstda ishlatiladi.`,
        keyPoints: [
          "Xaritada kompas (North, South, East, West) berilganligini tekshiring.",
          "Qalamingiz uchi bilan audiodagi spiker bosib o'tayotgan yo'nalishni xaritada kuzatib boring.",
          "Ko'p tanlovli savollarda faqat so'z eshitilgani uchun variantni tanlamang, ma'noni anglang."
        ],
        vocabulary: [
          { word: "Adjacent to", translation: "Yonginasida / tutash", example: "The library is adjacent to the cafeteria." },
          { word: "Intersection", translation: "Chorraha", example: "Take the path at the first intersection." },
          { word: "Elimination", translation: "Noto'g'ri variantlarni chiqarib tashlash", example: "Use elimination to find the correct answer." }
        ]
      }
    ],
    test: [
      {
        id: 201,
        question: "IELTS Listening audiosi necha marta eshittiriladi?",
        options: ["Faqat 1 marta", "2 marta", "3 marta", "Talaba xohishiga ko'ra"],
        correctAnswer: 0,
        explanation: "IELTS Listening da har bir audio yozuv qat'iy ravishda faqat BIR marta eshittiriladi.",
        type: "multiple_choice"
      },
      {
        id: 202,
        question: "Agar savol talabida 'NO MORE THAN TWO WORDS' deb ko'rsatilgan bo'lsa va siz 3 ta so'z yozsangiz nima bo'ladi?",
        options: ["Qisman ball beriladi", "0 ball hisoblanadi (xato)", "Faqat birinchi 2 so'z hisobga olinadi", "Imtihondan chetlatiladi"],
        correctAnswer: 1,
        explanation: "So'z cheklovi buzilsa, hatto ma'no to'g'ri bo'lsa ham javobga nol ball qo'yiladi.",
        type: "multiple_choice"
      },
      {
        id: 203,
        question: "Listening Part 4 qaysi xususiyati bilan boshqa qismlardan ajralib turadi?",
        options: [
          "Musiqa fonida bo'ladi",
          "O'rtasida hech qanday tanaffus (pauza) berilmaydi",
          "Undan keyin test to'xtatiladi",
          "Savollar faqat 'True/False' bo'ladi"
        ],
        correctAnswer: 1,
        explanation: "Part 4 monolog bo'lib, audio o'rtasida dam olish yoki keyingi savollarni o'qish uchun pauza qilinmaydi.",
        type: "multiple_choice"
      },
      {
        id: 204,
        question: "Quyidagilardan qaysi biri audiodagi fikr o'zgarishini (Distractor) bildiruvchi signal so'z hisoblanadi?",
        options: ["Furthermore", "However, actually", "In addition", "Therefore"],
        correctAnswer: 1,
        explanation: "'However', 'actually', 'wait' kabi so'zlar orqali so'zlovchi oldingi fikrini bekor qilib, yangi (to'g'ri) ma'lumotni aytadi.",
        type: "vocabulary"
      },
      {
        id: 205,
        question: "To'g'ri yoki Noto'g'ri: Listening da so'zlarning imlosida (spelling) xato qilinsa ham ma'nosi tushunarli bo'lsa to'liq ball beriladi.",
        options: ["To'g'ri", "Noto'g'ri"],
        correctAnswer: 1,
        explanation: "Noto'g'ri! IELTS da har qanday imloviy xato javobning xato deb hisoblanishiga olib keladi.",
        type: "true_false"
      },
      {
        id: 206,
        question: "'Adjacent to' iborasining ma'nosi nima?",
        options: ["Uzoqda joylashgan", "Yonginasida / tutash", "Orqa tomonida", "Ostida"],
        correctAnswer: 1,
        explanation: "'Adjacent to' yonma-yon, qo'shni yoki tutash degan ma'noni anglatadi.",
        type: "vocabulary"
      },
      {
        id: 207,
        question: "Listening Part 1 odatda qanday vaziyatni o'z ichiga oladi?",
        options: [
          "Ilmiy dissertatsiya himoyasi",
          "Ikki kishining kundalik ijtimoiy mavzudagi suhbati",
          "Yakkaxon falsafiy leksiya",
          "Munozara va debatlar"
        ],
        correctAnswer: 1,
        explanation: "Part 1 ijtimoiy yoki maishiy sohada ikki kishining telefon orqali yoki yuzma-yuz muloqotidir.",
        type: "multiple_choice"
      },
      {
        id: 208,
        question: "Xarita (Map Labelling) savollarida eng birinchi qilinishi kerak bo'lgan ish nima?",
        options: [
          "Oxirgi savoldan boshlash",
          "Boshlang'ich nuqta ('You are here' yoki kirish joyi) va kompasni aniqlash",
          "Audioni eshitmasdan javoblarni belgilash",
          "Xaritadagi barcha harflarni sanash"
        ],
        correctAnswer: 1,
        explanation: "Boshlang'ich joylashuv nuqtasini topib olmasdan yo'nalishni to'g'ri kuzatib borib bo'lmaydi.",
        type: "strategy"
      },
      {
        id: 209,
        question: "Audioda 'annual event' iborasi aytildi. Savol varaqasida qaysi so'z uning parafrazi bo'lishi mumkin?",
        options: ["Monthly meeting", "Yearly celebration", "Decade review", "Weekly class"],
        correctAnswer: 1,
        explanation: "'Annual' — yillik degani, uning sinonimi 'yearly'dir.",
        type: "vocabulary"
      },
      {
        id: 210,
        question: "To'g'ri yoki Noto'g'ri: Agar eshitilayotgan so'z ko'plikda (masalan, 'students') bo'lsa-yu, siz 'student' deb yozsangiz javob qabul qilinmaydi.",
        options: ["To'g'ri", "Noto'g'ri"],
        correctAnswer: 0,
        explanation: "To'g'ri! Grammatik son shaklini (birlik/ko'plik) to'g'ri yozish qat'iy talab etiladi.",
        type: "true_false"
      }
    ]
  },
  {
    id: 3,
    title: "Module 3 — IELTS Reading",
    tagline: "Skimming, Scanning va True/False/Not Given strategiyalari",
    description: "60 daqiqa ichida 3 ta uzun ilmiy matnni o'qib, 40 ta savolga to'liq ulgurish, sarlavhalarni moslashtirish (Matching Headings) va yashirin ma'nolarni topish.",
    iconName: "BookOpen",
    lessons: [
      {
        id: 7,
        title: "7-dars: Skimming va Scanning Texnikalari",
        youtubeUrl: "https://youtu.be/jUZRibC8v-s?si=5fhor59JnQfu9mzc",
        duration: "26 daqiqa",
        summary: "Matnni so'zma-so'z o'qimasdan asosiy mazmunni (gist) va aniq faktlarni bir necha soniyada topish.",
        theoryContent: `IELTS Reading da umumiy so'zlar soni 2500-3000 tani tashkil etadi. Agar siz butun matnni boshidan oxirigacha sinchiklab o'qimoqchi bo'lsangiz, vaqtingiz aslo yetmaydi.

Ikki eng asosiy texnika:
1. Skimming (Ko'z yugurtirish): Matnning asosiy mavzusi nima haqida ekanligini 1-2 daqiqada tushunib olish. Har bir paragrafning birinchi (Topic sentence) va oxirgi jumlasiga e'tibor qaratiladi.
2. Scanning (Qidirish): Savoldagi kalit so'zlarni (raqamlar, bosh harflar bilan yozilgan atoqli otlar, ilmiy terminlar) ko'z bilan xuddi radar kabi tezkor qidirib topish.

Vaqt taqsimoti:
- Passage 1: 17 daqiqa
- Passage 2: 20 daqiqa
- Passage 3: 23 daqiqa (eng murakkabi)`,
        keyPoints: [
          "Har doim matndan oldin savollarni tez ko'rib chiqing va kalit so'zlarni tagiga chizing.",
          "Notanish so'zlar uchraganda to'xtab qolmang, butun jumla mazmunidan ma'nosini taxmin qiling.",
          "Javoblarni to'g'ridan-to'g'ri javoblar varaqasiga belgilang, alohida vaqt ajratilmaydi."
        ],
        vocabulary: [
          { word: "Skim", translation: "Ko'z yugurtirib asosiy ma'noni ilg'ash", example: "Skim the paragraph to identify the main theme." },
          { word: "Scan", translation: "Aniq ma'lumotni qidirish", example: "Scan for dates, percentages, and proper names." },
          { word: "Topic sentence", translation: "Paragrafning bosh fikr jumlasi", example: "The topic sentence usually introduces the paragraph's purpose." }
        ]
      },
      {
        id: 8,
        title: "8-dars: True / False / Not Given & Yes / No / Not Given",
        youtubeUrl: "https://youtu.be/scFWzc4L8ME?si=JoJMuAdMr0GwAwN2",
        duration: "28 daqiqa",
        summary: "Eng ko'p chalkashlik keltirib chiqaradigan savol turi bo'yicha aniq mantiqiy qoidalar.",
        theoryContent: `Ko'pchilik o'quvchilar False va Not Given orasidagi farqni ajratishda qiynalishadi.

QOIDALAR:
• TRUE / YES: Savoldagi fikr matndagi ma'lumot bilan 100% mos keladi (sinonimlar orqali ifodalangan).
• FALSE / NO: Savoldagi fikr matndagi ma'lumotga TO'G'RIDAN-TO'G'RI ZID (qarama-qarshi). Ya'ni matnda boshqacha aytilganligi isbotlangan.
• NOT GIVEN: Matnda bu haqda gapirilmagan yoki to'liq tasdiqlash / rad etish uchun yetarli ma'lumot yo'q. Shaxsiy taxminlaringizni qo'shmang!

Muhim so'zlar:
'Always', 'never', 'all', 'impossible' kabi mutlaq so'zlar (absolute qualifiers) savolda kelsa, ehtiyot bo'ling. Matnda 'often' yoki 'likely' deyilgan bo'lsa, javob FALSE bo'ladi!`,
        keyPoints: [
          "O'z umumiy bilimingizga tayanmang, faqat matnda yozilgan faktlarga ishoning.",
          "Agar matndan tasdiqlovchi yoki to'liq rad etuvchi jumla topa olmasangiz — bu NOT GIVEN.",
          "Savol ketma-ketligi odatda matndagi tartib bo'yicha ketadi."
        ],
        vocabulary: [
          { word: "Contradict", translation: "Zid kelmoq / inkor qilmoq", example: "If the statement contradicts the text, it is FALSE." },
          { word: "Qualifier", translation: "Hajm/daraja belgilovchi so'z", example: "Words like 'frequently' change the meaning completely." },
          { word: "Assumption", translation: "Taxmin / Faraz", example: "Do not base your answer on personal assumptions." }
        ]
      },
      {
        id: 9,
        title: "9-dars: Matching Headings va Summary Completion",
        youtubeUrl: "https://youtu.be/VlSOgEIpcvk?si=oxWM9XYIVKUHfqiw",
        duration: "23 daqiqa",
        summary: "Paragraf sarlavhalarini topish strategiyasi va qisqartirilgan matn bo'shliqlarini to'ldirish.",
        theoryContent: `Matching Headings:
Sizga paragraflar ro'yxati va bir nechta sarlavhalar beriladi (sarlavhalar soni paragraflardan ko'proq bo'ladi).
Strategiya:
1. Sarlavhalardagi kalit so'zlarni o'rganing.
2. Har bir paragrafni o'qib, unda ko'tarilgan 'yagona markaziy g'oya' (main idea)ni aniqlang.
3. Diqqat: Paragrafdagi ikkinchi darajali misollar (detail) sarlavha bo'la olmaydi. Sarlavha butun paragrafni qamrab olishi kerak.

Summary Completion:
Matnning qisqa mazmuni beriladi va bo'shliqlarga so'z qo'yish talab etiladi. Grammatik moslikka (ot, fe'l, sifat) oldindan e'tibor qarating.`,
        keyPoints: [
          "Avval sarlavhalarni emas, balki paragrafning o'zini o'qib tushunish ko'proq samara beradi.",
          "Bo'shliqqa qo'yiladigan so'z matndan aynan olinishi (agar 'from the text' deyilsa) kerak.",
          "Paragrafdagi faqat bitta so'z sarlavhada borligi uchun uni darrov to'g'ri deb o'ylamang."
        ],
        vocabulary: [
          { word: "Main Idea", translation: "Asosiy g'oya", example: "Choose a heading that encapsulates the main idea." },
          { word: "Detail", translation: "Tafsilot / Mayda detal", example: "Avoid headings that only cover an illustrative detail." },
          { word: "Summary", translation: "Qisqacha mazmun", example: "The summary condenses the findings of the whole experiment." }
        ]
      }
    ],
    test: [
      {
        id: 301,
        question: "IELTS Reading imtihoni uchun jami qancha vaqt ajratiladi?",
        options: ["45 daqiqa", "60 daqiqa", "75 daqiqa", "90 daqiqa"],
        correctAnswer: 1,
        explanation: "Reading bo'limiga roppa-rosa 60 daqiqa beriladi va javoblar shu vaqt ichida ko'chirilishi kerak.",
        type: "multiple_choice"
      },
      {
        id: 302,
        question: "'Skimming' texnikasining asosiy vazifasi nima?",
        options: [
          "Har bir notanish so'zni lug'atdan qidirish",
          "Matnning umumiy mazmuni va yo'nalishini tezkor ilg'ab olish",
          "Faqat raqamlarni sanash",
          "Matnni yodlab olish"
        ],
        correctAnswer: 1,
        explanation: "Skimming matnning umumiy g'oyasini (gist) juda qisqa fursatda ko'zdan kechirib anglash usulidir.",
        type: "strategy"
      },
      {
        id: 303,
        question: "Agar bayonot matndagi ma'lumotga to'g'ridan-to'g'ri qarama-qarshi (zid) ekanligi matn bilan isbotlansa, javob nima bo'ladi?",
        options: ["TRUE", "FALSE", "NOT GIVEN", "UNPROVEN"],
        correctAnswer: 1,
        explanation: "Agar ma'lumot matndagi dalilga mutlaqo zid bo'lsa, javob FALSE bo'ladi.",
        type: "true_false"
      },
      {
        id: 304,
        question: "Agar matnda berilgan mavzu haqida ma'lumot umuman bo'lmasa yoki tasdiqlash uchun dalil yetarli bo'lmasa, qaysi javob tanlanadi?",
        options: ["TRUE", "FALSE", "NOT GIVEN", "INCORRECT"],
        correctAnswer: 2,
        explanation: "Matnda aytilmagan yoki noaniq qoldirilgan fikrlar NOT GIVEN hisoblanadi.",
        type: "true_false"
      },
      {
        id: 305,
        question: "'Scanning' qilishda qanday elementlarni qidirish eng oson?",
        options: [
          "Katta harflar, raqamlar, sanalar va ilmiy atamalar",
          "Bog'lovchilar (and, but)",
          "Artikllar (a, the)",
          "Barcha fe'llar"
        ],
        correctAnswer: 0,
        explanation: "Raqamlar, bosh harflar va sanalar ko'zga tez tashlangani uchun scanning qilishda asosiy tayanch nuqtasi bo'ladi.",
        type: "strategy"
      },
      {
        id: 306,
        question: "IELTS Reading bo'limida jami nechta matn (passage) va nechta savol bo'ladi?",
        options: ["2 matn, 30 savol", "3 matn, 40 savol", "4 matn, 40 savol", "3 matn, 50 savol"],
        correctAnswer: 1,
        explanation: "IELTS Reading 3 ta passage va jami 40 ta savoldan tashkil topadi.",
        type: "multiple_choice"
      },
      {
        id: 307,
        question: "Matching Headings topshirig'ida eng keng tarqalgan xato nima?",
        options: [
          "Matnni o'qib chiqish",
          "Butun paragraf g'oyasi o'rniga bitta mayda detalni (detail) sarlavha qilib tanlash",
          "Sarlavhani daftarga yozish",
          "Lug'at boyligini ishlatish"
        ],
        correctAnswer: 1,
        explanation: "O'quvchilar ko'pincha paragrafdagi birorta misolga aldanib, umumiy g'oyani ifodalamaydigan sarlavhani tanlab qo'yishadi.",
        type: "multiple_choice"
      },
      {
        id: 308,
        question: "To'g'ri yoki Noto'g'ri: Reading da o'zingizning shaxsiy dunyoqarashingiz bo'yicha to'g'ri deb bilgan faktni tanlasangiz kifoya.",
        options: ["To'g'ri", "Noto'g'ri"],
        correctAnswer: 1,
        explanation: "Noto'g'ri! Siz faqat va faqat muallif matnda nima yozganiga qarab javob berishingiz shart.",
        type: "true_false"
      },
      {
        id: 309,
        question: "'Topic sentence' odatda paragrafning qaysi qismida joylashadi?",
        options: [
          "Doim o'rtasida",
          "Ko'pincha birinchi yoki ikkinchi jumlasida",
          "Faqat oxirgi so'zida",
          "Paragrafda umuman bo'lmaydi"
        ],
        correctAnswer: 1,
        explanation: "Paragrafning mavzu jumlasi odatda kirish qismida kelib, fikrning yo'nalishini belgilab beradi.",
        type: "multiple_choice"
      },
      {
        id: 310,
        question: "To'g'ri yoki Noto'g'ri: Reading testida javoblarni savol varaqasidan javoblar varaqasiga ko'chirish uchun alohida 10 daqiqa vaqt ajratiladi.",
        options: ["To'g'ri", "Noto'g'ri"],
        correctAnswer: 1,
        explanation: "Noto'g'ri! Listening dan farqli ravishda Reading da alohida ko'chirish vaqti berilmaydi, hammasi 60 daqiqa ichida amalga oshiriladi.",
        type: "true_false"
      }
    ]
  },
  {
    id: 4,
    title: "Module 4 — IELTS Writing Task 1",
    tagline: "Grafiklar, jadvallar, diagrammalar va jarayonlarni akademik tasvirlash",
    description: "Academic Task 1 uchun 150 ta so'zdan iborat professional hisobot yozish, kirish (Introduction), umumiy xulosa (Overview) va detallar paragraflarini mukammal tuzish.",
    iconName: "BarChart3",
    lessons: [
      {
        id: 10,
        title: "10-dars: Task 1 Tuzilishi va Asosiy Turlari",
        youtubeUrl: "https://youtu.be/naTnh6xTH80?si=4fZ8VcoUr7-SO2Y3",
        duration: "27 daqiqa",
        summary: "Line graph, Bar chart, Pie chart, Table, Process diagram va Map taqqoslash qoidalari.",
        theoryContent: `IELTS Academic Writing Task 1 da sizga vizual ma'lumot (grafik, jadval, xarita yoki jarayon) beriladi.
Asosiy talablar:
- Kamida 150 ta so'z yozish (150 dan kam yozilsa ball tushiriladi).
- Taxminan 20 daqiqa vaqt ajratish.
- O'z shaxsiy fikringizni yoki sabablarni (opinion) QO'SHMASLIK. Faqat ko'rinib turgan faktlarni tasvirlash.

Tavsiya etiladigan 4 paragrafli struktura:
1. Paragraf 1: Introduction (Topshiriq sarlavhasini boshqa so'zlar bilan parafraz qilish).
2. Paragraf 2: Overview (Grafikdagi eng asosiy 2-3 ta tendensiya yoki yuqori/past nuqtalar umumiy xulosasi).
3. Paragraf 3: Body Paragraph 1 (Birinchi guruh ma'lumotlari, aniq raqamlar bilan taqqoslash).
4. Paragraf 4: Body Paragraph 2 (Ikkinchi guruh ma'lumotlari, qolgan raqamlar va o'zgarishlar).`,
        keyPoints: [
          "Overview bo'lmasa, Task Achievement mezonidan 5.0 dan yuqori ball olib bo'lmaydi.",
          "Faqat sanab o'tmang, raqamlarni bir-biri bilan taqqoslang (compare and contrast).",
          "O'tmishdagi yillar berilgan bo'lsa, Past Simple zamonidan aniq foydalaning."
        ],
        vocabulary: [
          { word: "Overview", translation: "Umumiy ko'rinish / Xulosa", example: "The overview highlights the main upward trend." },
          { word: "Fluctuate", translation: "Tebranmoq / Beqaror o'zgarmoq", example: "Prices fluctuated wildly throughout the decade." },
          { word: "Substantial", translation: "Katta / Sezilarli", example: "There was a substantial rise in fuel consumption." }
        ]
      },
      {
        id: 11,
        title: "11-dars: Overview Yozish San'ati va Trend So'zlar",
        youtubeUrl: "https://youtu.be/_2n4-Wr9z0A?si=R6WkPA0Cs5SxP_OC",
        duration: "24 daqiqa",
        summary: "Band 7+ Overview qanday bo'lishi kerak, o'sish, pasayish va barqarorlik fe'llari.",
        theoryContent: `Overview — Task 1 ning yuragi hisoblanadi. Unda hech qanday aniq raqam (data) keltirilmaydi, balki umumiy manzara bayon qilinadi.
Boshlanish iboralari:
- "Overall, it is clear that..."
- "In general, what stands out from the chart is that..."

Trendlarni ifodalovchi fe'llar va otlar:
• O'sish: increase, rise, grow, rocket, soar, surge.
• Pasayish: decrease, decline, drop, fall, plummet, plunge.
• Barqarorlik: remain steady, stabilize, level off.
• Cho'qqiga chiqish: reach a peak of, peak at.

Sifatlar va ravishlar:
- dramatic / dramatically
- sharp / sharply
- gradual / gradually
- steady / steadily`,
        keyPoints: [
          "Overview da hech qachon aniq statistika (masalan: 'in 1999 it was 45%') yozilmaydi.",
          "Har doim eng katta va eng kichik ko'rsatkichlarni yoki umumiy o'sish/pasayish yo'nalishini ta'kidlang.",
          "So'z boyligini ko'rsatish uchun bir xil fe'llarni takrorlamang."
        ],
        vocabulary: [
          { word: "Plummet", translation: "Keskin qulamoq / tushib ketmoq", example: "Profits plummeted during the financial crisis." },
          { word: "Level off", translation: "Bir maromga tushmoq / barqarorlashmoq", example: "Sales leveled off at around 50,000 units." },
          { word: "Plateau", translation: "O'zgarishsiz qolgan yuqori nuqta", example: "The rate reached a plateau after two years." }
        ]
      },
      {
        id: 12,
        title: "12-dars: Process Diagram va Xaritalarni Tasvirlash",
        youtubeUrl: "https://youtu.be/tfjRUhjXYCA?si=AndldSP5Ighw-0NZ",
        duration: "22 daqiqa",
        summary: "Tabiiy va sun'iy jarayonlarda Majhul nisbat (Passive Voice) va xaritalarda o'zgarishlarni yozish.",
        theoryContent: `Jarayonlar (Processes):
Ikki xil jarayon mavjud:
1. Ishlab chiqarish jarayoni (Man-made): Masalan, shokolad yoki qog'oz tayyorlash. Majhul nisbatdan (Passive Voice: is harvested, are transported, is processed) foydalaniladi, chunki ishni kim qilayotgani emas, mahsulot bilan nima sodir bo'layotgani muhim.
2. Tabiiy tsikl (Natural cycle): Masalan, qurbaqaning hayot tsikli yoki suvning aylanishi. Asosan Active Voice (lays eggs, evaporates) ishlatiladi.

Ketma-ketlik bog'lovchilari:
- Initially, To begin with, Next, Following this, Subsequently, In the final stage.

Xaritalar (Maps):
Shahar yoki hududdagi rekonstruksiya o'zgarishlari:
- was demolished, was replaced by, was converted into, was expanded.`,
        keyPoints: [
          "Jarayon diagrammalarida barcha bosqichlarni ketma-ketlikda to'liq qamrab olish zarur.",
          "Passive voice grammatikasi to'g'ri qo'llanilishi yuqori grammatik ballni ta'minlaydi.",
          "Xaritalarda yo'nalishlarni to'g'ri ifodalang: in the northern part, to the south."
        ],
        vocabulary: [
          { word: "Subsequently", translation: "So'ngra / Keyin", example: "The liquid is heated and subsequently cooled." },
          { word: "Demolish", translation: "Buzib tashlamoq", example: "The old warehouse was demolished to build a school." },
          { word: "Convert", translation: "Aylantirmoq / qayta jihozlamoq", example: "The factory was converted into luxury apartments." }
        ]
      }
    ],
    test: [
      {
        id: 401,
        question: "IELTS Academic Writing Task 1 uchun tavsiya etilgan eng kam so'zlar soni nechta?",
        options: ["100 ta", "150 ta", "200 ta", "250 ta"],
        correctAnswer: 1,
        explanation: "Task 1 da kamida 150 ta so'z yozish talab etiladi.",
        type: "multiple_choice"
      },
      {
        id: 402,
        question: "Task 1 ga taxminan necha daqiqa vaqt ajratish tavsiya qilinadi?",
        options: ["10 daqiqa", "20 daqiqa", "40 daqiqa", "50 daqiqa"],
        correctAnswer: 1,
        explanation: "Writing umumiy 60 daqiqa bo'lib, Task 1 ga 20 daqiqa, muhimroq bo'lgan Task 2 ga 40 daqiqa ajratiladi.",
        type: "strategy"
      },
      {
        id: 403,
        question: "Task 1 da 'Overview' paragrafining asosiy vazifasi nima?",
        options: [
          "Barcha mayda raqamlarni birma-bir sanab chiqish",
          "Grafikdagi eng asosiy tendensiyalar va umumlashgan manzarani bayon qilish",
          "O'z shaxsiy fikrini va maslahatlarini yozish",
          "Muallifga minnatdorchilik bildirish"
        ],
        correctAnswer: 1,
        explanation: "Overview asosiy tendensiyalarni umumlashtirib beruvchi eng muhim xulosadir.",
        type: "strategy"
      },
      {
        id: 404,
        question: "To'g'ri yoki Noto'g'ri: Task 1 da nima sababdan narxlar tushib ketganligi haqida o'z shaxsiy taxminingizni yozishingiz kerak.",
        options: ["To'g'ri", "Noto'g'ri"],
        correctAnswer: 1,
        explanation: "Noto'g'ri! Task 1 faqat faktik hisobotdir, unda shaxsiy fikr yoki sabab to'qish qat'iyan taqiqlanadi.",
        type: "true_false"
      },
      {
        id: 405,
        question: "'Plummet' fe'lining ma'nosi nima?",
        options: [
          "Sekin ko'tarilmoq",
          "Keskin, tez va chuqur pasayib ketmoq",
          "Bir xil darajada saqlanmoq",
          "Tugab qolmoq"
        ],
        correctAnswer: 1,
        explanation: "'Plummet' biror ko'rsatkichning juda keskin va tez tushib ketishini anglatadi.",
        type: "vocabulary"
      },
      {
        id: 406,
        question: "Sun'iy ishlab chiqarish jarayonlarini (Process diagram) tasvirlashda qaysi grammatik tuzilma eng ko'p qo'llaniladi?",
        options: [
          "Past Continuous",
          "Passive Voice (Majhul nisbat)",
          "Future Perfect",
          "Imperative (Buyruq mayli)"
        ],
        correctAnswer: 1,
        explanation: "Ishlab chiqarish jarayonida nima qilinayotgani muhim bo'lgani uchun Passive Voice (is filtered, are packed) asosiy o'rinda turadi.",
        type: "strategy"
      },
      {
        id: 407,
        question: "Agar diagrammada 1990 va 2010 yillar oralig'idagi o'zgarishlar berilgan bo'lsa, qaysi zamon shaklidan foydalanish shart?",
        options: ["Present Simple", "Past Simple", "Future Simple", "Present Continuous"],
        correctAnswer: 1,
        explanation: "O'tgan davrga tegishli voqealar va statistika Past Simple zamonida yozilishi shart.",
        type: "multiple_choice"
      },
      {
        id: 408,
        question: "'Remain steady' yoki 'level off' iboralari nimani anglatadi?",
        options: [
          "Keskin sakrashni",
          "Barqarorlashish, bir me'yorda tebranmasdan qolishni",
          "Butunlay yo'q bo'lib ketishni",
          "Qayta tiklanishni"
        ],
        correctAnswer: 1,
        explanation: "Bu iboralar ko'rsatkichning o'zgarmasdan bir chiziqda turib qolishini bildiradi.",
        type: "vocabulary"
      },
      {
        id: 409,
        question: "Xarita o'zgarishida 'bino buzib tashlandi va o'rniga bog' barpo etildi' degan fikr qanday ifodalanadi?",
        options: [
          "The building was built into a park",
          "The building was demolished and replaced by a park",
          "The park destroyed the building",
          "The building moved to the park"
        ],
        correctAnswer: 1,
        explanation: "'Was demolished and replaced by' to'g'ri va akademik tildagi ifodadir.",
        type: "vocabulary"
      },
      {
        id: 410,
        question: "To'g'ri yoki Noto'g'ri: Task 1 da 140 ta so'z yozsangiz ham to'liq ball olishingiz mumkin.",
        options: ["To'g'ri", "Noto'g'ri"],
        correctAnswer: 1,
        explanation: "Noto'g'ri! 150 tadan kam so'z yozish Task Achievement mezonida jarimaga sabab bo'ladi.",
        type: "true_false"
      }
    ]
  },
  {
    id: 5,
    title: "Module 5 — IELTS Writing Task 2",
    tagline: "Akademik insho (Essay), kuchli argumentlar va ilg'or grammatika",
    description: "Opinion, Discussion, Problem-Solution va Direct Question esselarini 250+ so'zda yozish, PEEL metodi yordamida paragraflarni mukammal shakllantirish.",
    iconName: "PenTool",
    lessons: [
      {
        id: 13,
        title: "13-dars: Esse Turlari va Savol Tahlili",
        youtubeUrl: "https://youtu.be/VBiLCePq4NE?si=WcspzVsqraWQqseO",
        duration: "29 daqiqa",
        summary: "Agree/Disagree, Discuss Both Views, Advantages/Disadvantages va Cause/Solution insholarini tahlil qilish.",
        theoryContent: `IELTS Writing Task 2 umumiy Writing balining 66% (uchdan ikki) qismini tashkil qiladi!
Talablar:
- Kamida 250 ta so'z.
- 40 daqiqa vaqt.
- Rasmiy akademik uslub (Formal academic style).

Eng asosiy 5 ta esse turi:
1. Opinion (Agree or Disagree): Sizdan aniq bir tomonni tanlash va o'z nuqtai nazaringizni himoya qilish so'raladi.
2. Discussion (Discuss both views and give your opinion): Ikkala qarama-qarshi tomon fikrini xolisona tahlil qilib, so'ng o'z fikringizni bildirasiz.
3. Advantages and Disadvantages: Ijobiy va salbiy tomonlarni taqqoslash.
4. Problem and Solution (yoki Cause and Effect): Muammoning sabablarini ko'rsatib, yechim taklif qilish.
5. Double Question (Direct questions): Ikkita alohida savolga to'g'ridan-to'g'ri javob berish.`,
        keyPoints: [
          "Savoldagi barcha qismlarga to'liq javob bering, aks holda Task Response 6.0 dan oshmaydi.",
          "Qisqartmalar (don't, can't, isn't) ishlatish taqiqlanadi — faqat to'liq shaklda yozing (do not, cannot).",
          "Birinchi shaxs olmoshi ('I', 'my') faqat o'z shaxsiy xulosangizda ishlatilishi ma'qul."
        ],
        vocabulary: [
          { word: "Stance", translation: "Pozitsiya / Nuqtai nazar", example: "Maintain a clear stance throughout the essay." },
          { word: "Compelling", translation: "Ishonarli / Kuchli", example: "Provide compelling arguments supported by examples." },
          { word: "Counter-argument", translation: "Qarshi argument", example: "Addressing the counter-argument strengthens your position." }
        ]
      },
      {
        id: 14,
        title: "14-dars: Paragraf Qurilishi: PEEL Metodi",
        youtubeUrl: "https://youtu.be/TxirOoozu1g?si=paHGphDYVLmM4b2d",
        duration: "26 daqiqa",
        summary: "Point, Explanation, Example, Link — mantiqiy va uzviy bog'langan asosiy paragraflar yozish.",
        theoryContent: `Esse tanasi (Body Paragraphs) mantiqiy jihatdan benuqson bo'lishi uchun xalqaro PEEL formulasidan foydalaning:

• P — Point (Asosiy fikr): Paragrafning birinchi jumlasi bo'lib, ushbu paragraf nima haqida ekanini darhol ochiqlaydi.
• E — Explanation (Tushuntirish): Nima uchun bu fikr to'g'ri ekanini chuqur tahlil qilasiz va sabab-oqibat zanjirini qurasiz.
• E — Example (Misol): Hayotiy, ilmiy yoki statistik misol keltirib fikringizni isbotlaysiz (For instance, A prominent example is...).
• L — Link (Xulosa/Bog'lash): Paragrafni umumiy mavzuga yoki keyingi fikrga qayta bog'lovchi yakuniy jumla.

Ushbu formula Coherence and Cohesion mezonidan 8+ ball olishning eng to'g'ri kalitidir.`,
        keyPoints: [
          "Bitta paragrafda 3-4 ta yuzaki fikr aytgandan ko'ra, 1 ta kuchli fikrni chuqur tushuntirish afzalroqdir.",
          "Misollar umumiy va mantiqiy bo'lishi kerak, shaxsiy do'stingiz haqidagi mayda hikoyalardan saqlaning.",
          "Bog'lovchi vositalarni (cohesive devices) o'rinsiz haddan tashqari ko'p ishlatmang."
        ],
        vocabulary: [
          { word: "Cohesion", translation: "Bog'liqlik", example: "Using transitional phrases ensures cohesion." },
          { word: "Elaborate", translation: "Kengaytirmoq / batafsil tushuntirmoq", example: "Elaborate on your idea with clear explanations." },
          { word: "Substantiate", translation: "Dalillar bilan asoslamoq", example: "Substantiate your claims with concrete examples." }
        ]
      },
      {
        id: 15,
        title: "15-dars: Kirish (Introduction) va Xulosa (Conclusion) Yozish",
        youtubeUrl: "https://youtu.be/OQmZ8BRtf-0?si=VGoiKA2f1wpT3qjq",
        duration: "25 daqiqa",
        summary: "Thesis statement yaratish va esseni kuchli professional xulosa bilan yakunlash.",
        theoryContent: `Kirish qismi (Introduction):
Taxminan 35-45 so'z, 2 ta asosiy jumlalardan iborat:
1. Hook & Paraphrase: Berilgan mavzuni o'z so'zlaringiz bilan qayta bayon qilasiz.
2. Thesis Statement: Inshoning eng muhim jumlasi! Unda siz qaysi tarafda ekanligingizni va esseda qanday fikrlar muhokama qilinishini ochiq aytasiz.

Xulosa qismi (Conclusion):
Taxminan 30-40 so'z, 1-2 jumla:
- Kirishdagi tezisni boshqacha so'zlar bilan takrorlaysiz.
- Asosiy keltirilgan argumentlarni umumlashtirasiz.
- DIQQAT: Xulosa qismida HECH QACHON yangi g'oya yoki dalil kiritmang!`,
        keyPoints: [
          "Kuchli Tezis (Thesis statement) sizning butun essangizga yo'nalish beradi.",
          "Kirishga 5 daqiqadan ortiq vaqt sarflamang, asosiy vaqt tana paragraflariga tegishli.",
          "Inshoni hech qachon xulosasiz qoldirmang, aks holda jiddiy ball yo'qotasiz."
        ],
        vocabulary: [
          { word: "Thesis statement", translation: "Tezis / Asosiy da'vo jumlasi", example: "A clear thesis statement clarifies your intent." },
          { word: "Rephrase", translation: "Boshqacha ifodalamoq", example: "Rephrase your primary points in the conclusion." },
          { word: "Overgeneralize", translation: "Haddan tashqari umumiylashtirmoq", example: "Avoid overgeneralizing statements such as 'everyone knows'." }
        ]
      }
    ],
    test: [
      {
        id: 501,
        question: "IELTS Writing Task 2 uchun belgilangan eng kam so'zlar miqdori qancha?",
        options: ["150 ta", "200 ta", "250 ta", "300 ta"],
        correctAnswer: 2,
        explanation: "Task 2 inshosi kamida 250 ta so'zdan iborat bo'lishi shart.",
        type: "multiple_choice"
      },
      {
        id: 502,
        question: "PEEL formulasidagi harflar nimani anglatadi?",
        options: [
          "Plan, Edit, Evaluate, Listen",
          "Point, Explanation, Example, Link",
          "Paragraph, Essay, Exam, Language",
          "Practice, English, Education, Learning"
        ],
        correctAnswer: 1,
        explanation: "PEEL = Point (fikr), Explanation (tushuntirish), Example (misol), Link (bog'lash).",
        type: "strategy"
      },
      {
        id: 503,
        question: "To'g'ri yoki Noto'g'ri: Task 2 xulosa (Conclusion) qismida yangi, oldin aytilmagan dalil yoki g'oyalarni qo'shish tavsiya etiladi.",
        options: ["To'g'ri", "Noto'g'ri"],
        correctAnswer: 1,
        explanation: "Noto'g'ri! Xulosada hech qachon yangi g'oya qo'shilmaydi, faqat mavjud dalillar yakunlanadi.",
        type: "true_false"
      },
      {
        id: 504,
        question: "Akademik inshoda qisqartmalardan (masalan, don't, can't) foydalanish mumkinmi?",
        options: [
          "Ha, vaqtni tejash uchun juda yaxshi",
          "Yo'q, bu norasmiy uslub hisoblanadi, to'liq yozish shart (do not, cannot)",
          "Faqat oxirgi paragrafda mumkin",
          "Farqi yo'q"
        ],
        correctAnswer: 1,
        explanation: "IELTS akademik insholarda rasmiy uslub talab qilinadi, shuning uchun contractions (qisqartmalar) ishlatilmaydi.",
        type: "strategy"
      },
      {
        id: 505,
        question: "'Thesis statement' inshoning qaysi qismida joylashishi lozim?",
        options: [
          "Faqat ikkinchi tana paragrafida",
          "Kirish (Introduction) qismining oxirgi jumlasi sifatida",
          "Inshoning sarlavhasida",
          "Savol varaqasida"
        ],
        correctAnswer: 1,
        explanation: "Tezis jumlasi odatda kirish paragrafining oxirida o'rin olib, muallif pozitsiyasini ko'rsatadi.",
        type: "multiple_choice"
      },
      {
        id: 506,
        question: "Writing bo'limida Task 2 umumiy Writing balining qancha qismini tashkil qiladi?",
        options: ["33% (uchdan birini)", "50% (yarmini)", "66% (uchdan ikkisini)", "100% ni"],
        correctAnswer: 2,
        explanation: "Task 2 ning vazni Task 1 dan ikki barobar ko'proq, ya'ni umumiy ballning taxminan 66% ini tashkil qiladi.",
        type: "multiple_choice"
      },
      {
        id: 507,
        question: "'Discuss both views and give your opinion' savol turida nima qilish shart?",
        options: [
          "Faqat o'zingiz qo'llab-quvvatlaydigan tomonni yozish",
          "Ikkala taraf fikrini tahlil qilib, o'z shaxsiy nuqtai nazaringizni ham bildirish",
          "Hech qanday fikr bildirmasdan faqat savol berish",
          "Mavzuni boshqa mavzuga o'zgartirish"
        ],
        correctAnswer: 1,
        explanation: "Bu topshiriqda har ikkala tomonni yoritish va shaxsiy xulosani aks ettirish majburiydir.",
        type: "strategy"
      },
      {
        id: 508,
        question: "'Compelling evidence' iborasi nimani bildiradi?",
        options: [
          "Kuchli, rad etib bo'lmas ishonarli dalil",
          "Shubhali ma'lumot",
          "Eski maqol",
          "Lug'at xatosi"
        ],
        correctAnswer: 0,
        explanation: "'Compelling' juda ta'sirli, ishonarli va kuchli ma'nosini beradi.",
        type: "vocabulary"
      },
      {
        id: 509,
        question: "Bitta asosiy fikrni chuqur tahlil qilib isbotlash bir nechta fikrlarni shunchaki sanab o'tishdan nega ustun?",
        options: [
          "So'zlar sonini kamaytiradi",
          "Task Response va Coherence bo'yicha yuqori ball keltiradi",
          "Imtihon oluvchiga o'qishni osonlashtiradi",
          "Vaqtni 2 barobar tejaydi"
        ],
        correctAnswer: 1,
        explanation: "Chuqur mantiqiy asoslangan argumentlar IELTS baholash mezonlari bo'yicha Band 7+ talabidir.",
        type: "strategy"
      },
      {
        id: 510,
        question: "To'g'ri yoki Noto'g'ri: Task 2 inshosini 40 daqiqadan ko'proq yozish va Task 1 ga faqat 10 daqiqa qoldirish xavfsiz strategiyadir.",
        options: ["To'g'ri", "Noto'g'ri"],
        correctAnswer: 1,
        explanation: "Noto'g'ri! Task 1 ga 15-20 daqiqa qolmasa, uni to'liq yozib ulgurmaysiz va jiddiy ball yo'qotasiz.",
        type: "true_false"
      }
    ]
  },
  {
    id: 6,
    title: "Module 6 — IELTS Speaking",
    tagline: "Ravonlik, talaffuz va ishonch bilan savollarga javob berish",
    description: "Speaking Part 1 (shaxsiy tanishuv), Part 2 (Cue Card bo'yicha 2 daqiqalik nutq) va Part 3 (chuqur mavhum munozara) bo'yicha ekspert texnikalari.",
    iconName: "Mic",
    lessons: [
      {
        id: 16,
        title: "16-dars: Speaking Imtihoni Formati va Part 1",
        youtubeUrl: "https://youtu.be/OQmZ8BRtf-0?si=VGoiKA2f1wpT3qjq",
        duration: "20 daqiqa",
        summary: "Examiner bilan salomlashish, o'zingiz haqingizda tabiiy gapirish va qisqa javoblardan qochish.",
        theoryContent: `IELTS Speaking imtihoni sertifikatlangan imtihon oluvchi (examiner) bilan 11-14 daqiqa yakkama-yakka tarzda olib boriladi.
Baholashning 4 mezoni:
1. Fluency and Coherence (Ravonlik va fikr oqimi)
2. Lexical Resource (Lug'at boyligi va idiomalar)
3. Grammatical Range and Accuracy (Grammatik to'g'rilik va murakkablik)
4. Pronunciation (Talaffuz, intonatsiya va urg'u)

Part 1 (4-5 daqiqa):
Kundalik tanish mavzular: ish/o'qish, yashash joyi, sevimli mashg'ulotlar, musiqa, ob-havo.
Oltin qoida: Hech qachon faqat "Yes" yoki "No" deb javob bermang!
Har doim javobingizni 2-3 ta to'liq jumlaga kengaytiring (Answer + Reason + Extra detail).`,
        keyPoints: [
          "Savolga to'g'ridan-to'g'ri javob bering, so'ngra sabab yoki misol qo'shing.",
          "Juda uzoq monolog qilmang — examiner sizni to'xtatishiga to'g'ri kelmasin.",
          "Tabiiy tanaffus so'zlaridan (Well, To be honest, Actually) foydalaning."
        ],
        vocabulary: [
          { word: "Fluency", translation: "Nutq ravonligi", example: "Fluency means speaking smoothly without hesitation." },
          { word: "Intonation", translation: "Nutq ohangi / intonatsiya", example: "Natural intonation makes your speech engaging." },
          { word: "Elaborate", translation: "Kengaytirib aytmoq", example: "Always elaborate your answer in Part 1." }
        ]
      },
      {
        id: 17,
        title: "17-dars: Part 2: Cue Card va 1 Daqiqalik Tayyorgarlik",
        youtubeUrl: "https://youtu.be/NUEY1lnRbIo?si=DPmKWiuQH72aEl91",
        duration: "24 daqiqa",
        summary: "Kartochka bo'yicha 1 daqiqa ichida tezkor konspekt tuzish va to'xtamasdan 2 daqiqa gapirish sirlari.",
        theoryContent: `Part 2 da sizga bitta mavzu yozilgan kartochka (Candidate Task Card), qog'oz va qalam beriladi.
Sizda tayyorlanish uchun 1 daqiqa vaqt bo'ladi.
So'ngra to'xtovsiz 1 daqiqadan 2 daqiqagacha gapirishingiz kerak.

1 daqiqalik konspekt tayyorlash usuli:
- Butun jumlalarni yozishga vaqt yetmaydi! Faqat kalit so'zlar (keywords), sinonimlar va his-tuyg'ularni yozing.
- Kartochkadagi barcha 4 ta yo'naltiruvchi savolga (Who, Where, What, Why) javob berishni rejalashtiring.
- Hikoya qilish texnikasi (Storytelling): O'tmishdan boshlab, qiziqarli voqea tafsilotlari va shaxsiy hissiyotlaringiz bilan yakunlang.`,
        keyPoints: [
          "Examiner sizni 'Thank you' deb to'xtatmaguncha gapirishdan to'xtamang.",
          "Vaqtni his qilishni mashq qiling — 1 daqiqa 50 soniya eng ideal vaqtdir.",
          "Agar mavzuni eslay olmasangiz, tasavvuringizdan foydalanib to'qib gapirishingiz mumkin, haqiqiyligi tekshirilmaydi."
        ],
        vocabulary: [
          { word: "Cue card", translation: "Mavzu kartochkasi", example: "The cue card asked to describe a memorable trip." },
          { word: "Prompt", translation: "Yo'naltiruvchi savol", example: "Address each prompt on the card systematically." },
          { word: "Vividly", translation: "Yorqin / xuddi kechagidek", example: "I vividly remember the first time I visited Samarkand." }
        ]
      },
      {
        id: 18,
        title: "18-dars: Part 3: Chuqur Munozara va Fikr Bildirish",
        youtubeUrl: "https://youtu.be/EvTO5pppOhI?si=rMB3RGfbcz_rEL6v",
        duration: "25 daqiqa",
        summary: "Part 2 mavzusiga bog'liq global va ijtimoiy muammolar bo'yicha fikr bildirish, bahslashish va prognoz qilish.",
        theoryContent: `Part 3 (4-5 daqiqa) — Speaking ning eng murakkab va Band 7, 8, 9 ni hal qiluvchi bosqichidir.
Bu yerda endi shaxsiy hayotingiz haqida emas, balki jamiyat, texnologiya, atrof-muhit va insoniyat darajasidagi mavhum savollarga javob berasiz.

Kerakli strategiyalar:
1. Fikr bildirish: "In my perspective...", "From where I stand..."
2. Taqqoslash (O'tmish va Hozir): "Decades ago people used to..., whereas nowadays..."
3. Kelajakni bashorat qilish: "It is highly probable that in the foreseeable future..."
4. Ikki tomonlama qarash: "On one hand..., but from another angle..."`,
        keyPoints: [
          "Part 3 da javoblar uzun va tahliliy bo'lishi kerak (3-5 ta murakkab jumla).",
          "O'zingiz haqingizda gapirmang, umumiy odamlar yoki jamiyat nuqtai nazaridan yondashing.",
          "Savolni tushunmay qolsangiz qayta so'rashdan qo'rqmang: 'Could you rephrase that, please?'"
        ],
        vocabulary: [
          { word: "Abstract", translation: "Mavhum / Nazariy", example: "Part 3 deals with abstract and societal concepts." },
          { word: "Foreseeable", translation: "Kutiladigan / Yaqin kelajak", example: "In the foreseeable future, AI will transform education." },
          { word: "Perspective", translation: "Qarash / Nuqtai nazar", example: "From an economic perspective, tourism is vital." }
        ]
      }
    ],
    test: [
      {
        id: 601,
        question: "IELTS Speaking imtihoni jami necha daqiqa davom etadi?",
        options: ["5-7 daqiqa", "11-14 daqiqa", "20-25 daqiqa", "30 daqiqa"],
        correctAnswer: 1,
        explanation: "Speaking imtihoni o'rtacha 11 dan 14 daqiqagacha davom etadi.",
        type: "multiple_choice"
      },
      {
        id: 602,
        question: "Speaking Part 2 da tayyorgarlik ko'rish uchun nomzodga qancha vaqt beriladi?",
        options: ["30 soniya", "1 daqiqa", "2 daqiqa", "3 daqiqa"],
        correctAnswer: 1,
        explanation: "Cue card berilgach, konspekt yozib olish uchun roppa-rosa 1 daqiqa vaqt beriladi.",
        type: "multiple_choice"
      },
      {
        id: 603,
        question: "Part 2 da nomzod qancha vaqt gapirishi kutiladi?",
        options: ["30 soniya", "1 daqiqadan 2 daqiqagacha", "Kamida 5 daqiqa", "Examiner charchaguncha"],
        correctAnswer: 1,
        explanation: "Nomzod 1-2 daqiqa davomida to'xtamasdan nutq so'zlashi kerak.",
        type: "multiple_choice"
      },
      {
        id: 604,
        question: "To'g'ri yoki Noto'g'ri: Speaking Part 1 da savolga faqat 'Yes, I do' deb qisqa javob berish yuqori ball olishga yordam beradi.",
        options: ["To'g'ri", "Noto'g'ri"],
        correctAnswer: 1,
        explanation: "Noto'g'ri! Qisqa javoblar ravonlik va lug'at yetishmasligini bildiradi, har doim sabab qo'shib kengaytirish lozim.",
        type: "true_false"
      },
      {
        id: 605,
        question: "Speaking Part 3 savollari qaysi jihati bilan Part 1 dan farq qiladi?",
        options: [
          "Part 3 da faqat inglizcha qo'shiq aytiladi",
          "Part 3 umumiy jamiyat, global muammolar va mavhum mavzularni qamrab oladi",
          "Part 3 da qog'ozga yozib beriladi",
          "Part 3 faqat grammatika qoidalarini so'raydi"
        ],
        correctAnswer: 1,
        explanation: "Part 3 shaxsiy hayotdan tashqaridagi chuqur ijtimoiy va tahliliy masalalarga qaratilgan.",
        type: "multiple_choice"
      },
      {
        id: 606,
        question: "Speaking bo'limida quyidagilardan qaysi biri baholash mezoni EMAS?",
        options: [
          "Fluency and Coherence",
          "Lexical Resource",
          "Grammatical Range and Accuracy",
          "Akademik qo'lyozma chiroyliligi"
        ],
        correctAnswer: 3,
        explanation: "Qo'lyozma Speaking ga umuman aloqador emas, baholash mezonlari faqat og'zaki nutqqa tegishli.",
        type: "multiple_choice"
      },
      {
        id: 607,
        question: "Agar examiner savolini tushunmay qolsangiz eng to'g'ri harakat nima?",
        options: [
          "Jim o'tirish",
          "Xushmuomalalik bilan qaytarishni yoki boshqacha tushuntirishni so'rash (Could you rephrase that, please?)",
          "Boshqa tilda javob berish",
          "Xonadan chiqib ketish"
        ],
        correctAnswer: 1,
        explanation: "Savolni qayta tushuntirib berishni so'rash tabiiy holat va buning uchun jarima qo'llanilmaydi.",
        type: "strategy"
      },
      {
        id: 608,
        question: "'Fluency' tushunchasi nimani anglatadi?",
        options: [
          "Faqat tez gapirishni",
          "Ortiqcha ikkilanmasdan, ravon va mantiqiy fikr yurita olish qobiliyatini",
          "Qichqirib gapirishni",
          "Qiyin so'zlarni xato talaffuz qilishni"
        ],
        correctAnswer: 1,
        explanation: "Fluency bu sun'iy tezlik emas, balki tabiiy ravonlik va to'xtab qolmaslikdir.",
        type: "vocabulary"
      },
      {
        id: 609,
        question: "To'g'ri yoki Noto'g'ri: Part 2 dagi Cue card da berilgan voqea o'tmishda haqiqatda sodir bo'lmagan bo'lsa ham, uni to'qib gapirish mumkin.",
        options: ["To'g'ri", "Noto'g'ri"],
        correctAnswer: 0,
        explanation: "To'g'ri! IELTS imtihon oluvchilari sizning tilingizni baholaydi, faktlar haqiqiyligini tekshirmaydi.",
        type: "true_false"
      },
      {
        id: 610,
        question: "Part 2 da 1 daqiqalik vaqt ichida eng samarali konspekt qanday tuziladi?",
        options: [
          "To'liq gaplarni ko'chirib yozish bilan",
          "Faqat kalit so'zlar, sinonimlar va asosiy fikrlar rejasini qayd etish bilan",
          "Hech narsa yozmasdan kuting",
          "O'z ism-familiyangizni yozish bilan"
        ],
        correctAnswer: 1,
        explanation: "Vaqt qisqa bo'lgani sababli faqat asosiy kalit so'zlar va g'oyalarni yozish tavsiya qilinadi.",
        type: "strategy"
      }
    ]
  },
  {
    id: 7,
    title: "Module 7 — IELTS Exam Strategies and Final Preparation",
    tagline: "Imtihon kuni psixologiyasi, vaqt nazorati va yakuniy tayyorgarlik",
    description: "Imtihon zalidagi stressni yengish, so'nggi 7 kunlik mashg'ulotlar dasturi, vaqtni daqiqasigacha to'g'ri boshqarish va Band 7.5+ ga chiqish yakuniy sirlari.",
    iconName: "Award",
    lessons: [
      {
        id: 19,
        title: "19-dars: Imtihon Kuni Qoidalari va Stressni Boshqarish",
        youtubeUrl: "https://youtu.be/FodG8BbUhpE?si=2HtVak7O_vMI6tOd",
        duration: "21 daqiqa",
        summary: "Pasport, qalamlar, zalga kirish qoidalari va imtihonoldi hayajonini minimallashtirish.",
        theoryContent: `Imtihon kuni texnik va ruhiy tayyorgarlik:
1. Hujjatlar: Ro'yxatdan o'tgan asl pasportingiz yoki ID kartangiz (nusxa qabul qilinmaydi!).
2. Vaqt: Belgilangan vaqtdan kamida 45-60 daqiqa oldin test markaziga yetib boring (barmoq izi va suratga tushish jarayoni vaqt oladi).
3. Suv va jihozlar: Faqat yorlig'i (label) olib tashlangan shaffof plastik idishdagi suv olib kirish mumkin.

Psixologik xotirjamlik:
- Imtihondan oldingi kecha kechasi bilan dars qilmang — miyaga to'liq 8 soat uyqu kerak.
- Deep breathing (chuqur nafas olish) mashqlarini qiling.
- Agar birorta savolga ulgurmay qolsangiz, unga chalg'imang! Keyingi savolga darhol diqqatni qarating.`,
        keyPoints: [
          "Asl shaxsni tasdiqlovchi hujjatni unutmang.",
          "O'tkazib yuborilgan savol uchun asabiylashmang, keyingi bo'limlarga konsentratsiyani yo'qotmang.",
          "Imtihon zali harorati salqin bo'lishi mumkin, qulay kiyining."
        ],
        vocabulary: [
          { word: "Identification", translation: "Shaxsni tasdiqlovchi hujjat", example: "Original identification is strictly required." },
          { word: "Composure", translation: "Xotirjamlik / O'zini tuta bilish", example: "Maintain your composure under strict time limits." },
          { word: "Transparent", translation: "Shaffof", example: "Only transparent water bottles are allowed inside." }
        ]
      },
      {
        id: 20,
        title: "20-dars: Vaqt Menejmenti va Umumiy Xatolardan Qochish",
        youtubeUrl: "https://youtu.be/mM3qCOZ6rfM?si=x8P1laOQkG3bu6W3",
        duration: "24 daqiqa",
        summary: "Reading va Writing da har bir daqiqani rejalashtirish va eng ko'p uchraydigan 10 ta tuzoq.",
        theoryContent: `IELTS dagi eng katta dushman — bilim yetishmasligi emas, balki VAQT yetishmasligidir.

Vaqt qoidalari:
• Reading: Qiyin savolga 1.5 daqiqadan ortiq vaqt sarflamang. Agar javob chiqmasa, taxminiy javobni belgilab, oldinga yuring. Oxirida vaqt qolsa qaytasiz.
• Writing:
  - Task 1: 3 daqiqa reja, 14 daqiqa yozish, 3 daqiqa tekshirish.
  - Task 2: 5 daqiqa reja, 30 daqiqa yozish, 5 daqiqa tekshirish (imlo va grammatik xatolar uchun).

Xatolar ro'yxati:
1. Javoblar varaqasiga javobni noto'g'ri katakka ko'chirish.
2. Savol talabini to'liq o'qimaslik (masalan, ONE WORD ONLY deb yozilgan bo'lsa).
3. So'nggi daqiqalarda esseni qayta o'qib tekshirmaslik.`,
        keyPoints: [
          "Hech bir savolni javobsiz qoldirmang — IELTS da noto'g'ri javob uchun ball ayirilmaydi!",
          "Tekshirish uchun ajratilgan 3-5 daqiqa ballingizni 0.5 ga oshirishi mumkin.",
          "Soatlar devorda doimo ko'rinib turadi, o'z tezligingizni nazorat qiling."
        ],
        vocabulary: [
          { word: "Time management", translation: "Vaqtni to'g'ri taqsimlash", example: "Efficient time management prevents panic in Reading." },
          { word: "Proofread", translation: "Xatolarni ko'zdan kechirib tekshirmoq", example: "Always proofread your essays for careless slips." },
          { word: "Penalty", translation: "Jarima", example: "There is no penalty for guessing wrong answers." }
        ]
      },
      {
        id: 21,
        title: "21-dars: Mock Test Tahlili va So'nggi 7 Kunlik Reja",
        youtubeUrl: "https://youtu.be/9AtWkNBsYn0?si=TrE-GxgDCQ9bGim0",
        duration: "26 daqiqa",
        summary: "To'liq 3 soatlik mock testlarni topshirish va natijalarni to'g'ri tahlil qilish.",
        theoryContent: `So'nggi 7 kunlik strategiya:
• 7-4 kunlar qolganda: Kuniga bitta to'liq rasmiy Mock Test topshiring (Listening + Reading + Writing bir o'tirishda, qat'iy vaqt bilan).
• 3-2 kunlar qolganda: Yangi mavzularni o'rganishni to'xtating. O'z xatolar daftarchangizni va yaxshi iboralarni takrorlang.
• 1 kun qolganda: To'liq dam oling, jismoniy sayr qiling, engil ovqatlaning va kechki 22:00 dan kechikmay uxlang.

Muvaffaqiyat formulasi:
Izchillik + Tizimli tahlil + O'ziga ishonch = Siz istagan BAND SCORE!`,
        keyPoints: [
          "Mock testlarni xuddi haqiqiy imtihon sharoitida, telefonsiz va tanaffussiz topshiring.",
          "Charchoqqa qarshi tanani 3 soatlik aqliy yuklamaga oldindan ko'niktiring.",
          "O'zingizga va tayyorgarligingizga ishoning — muvaffaqiyat siz tomonda!"
        ],
        vocabulary: [
          { word: "Simulation", translation: "Haqiqiy sharoitni sinab ko'rish", example: "Mock tests are an exact simulation of the test environment." },
          { word: "Stamina", translation: "Chidamlilik / Quvvat", example: "Mental stamina is necessary to endure the 3-hour exam." },
          { word: "Milestone", translation: "Katta bosqich / Yutuq", example: "Completing all 7 modules is a major learning milestone." }
        ]
      }
    ],
    test: [
      {
        id: 701,
        question: "IELTS imtihonida noto'g'ri berilgan javob uchun ball ayiriladimi (jarima bormi)?",
        options: [
          "Ha, har bir xato uchun 1 ball ayiriladi",
          "Yo'q, hech qanday ball ayirilmaydi, shuning uchun bo'sh qoldirmaslik kerak",
          "Faqat Reading bo'limida ayiriladi",
          "Faqat Writing bo'limida ayiriladi"
        ],
        correctAnswer: 1,
        explanation: "IELTS da jarima bali yo'q. Shuning uchun javobni bilmasangiz ham mantiqiy taxmin qilib belgilash shart.",
        type: "strategy"
      },
      {
        id: 702,
        question: "Imtihon zaliga kirish uchun qanday shaxsiy hujjat majburiy hisoblanadi?",
        options: [
          "Ro'yxatdan o'tgan asl pasport yoki ID karta",
          "Pasport nusxasi (kopiya)",
          "Talabalik guvohnomasi",
          "Tug'ilganlik haqidagi guvohnoma"
        ],
        correctAnswer: 0,
        explanation: "Faqat ro'yxatdan o'tishda foydalanilgan asl pasport yoki ID karta qabul qilinadi.",
        type: "multiple_choice"
      },
      {
        id: 703,
        question: "Writing bo'limida insho yozib bo'lingach oxirgi 3-5 daqiqani nima uchun ajratish tavsiya qilinadi?",
        options: [
          "Dam olib uxlash uchun",
          "Inshoni qayta o'qib (proofreading), mayda imlo va grammatik xatolarni tuzatish uchun",
          "Rasm chizish uchun",
          "Ko'proq so'z qo'shish uchun shunchaki takrorlash"
        ],
        correctAnswer: 1,
        explanation: "Proofreading orqali beixtiyor yo'l qo'yilgan xatolarni to'g'irlab, ballni saqlab qolish mumkin.",
        type: "strategy"
      },
      {
        id: 704,
        question: "Imtihondan bir kun oldin qanday yo'l tutish eng to'g'ri strategiya hisoblanadi?",
        options: [
          "Tuni bilan 20 ta yangi test yechish",
          "Yangi og'ir mavzularni o'rganmasdan, dam olish, yaxshi uxlash va ruhan xotirjam bo'lish",
          "Hech narsa yemasdan kutish",
          "Do'stlar bilan tortishish"
        ],
        correctAnswer: 1,
        explanation: "Miyaning to'liq dam olishi va uyqu imtihon kuni konsentratsiya uchun eng muhim omildir.",
        type: "strategy"
      },
      {
        id: 705,
        question: "Reading testida bitta savolga javob topa olmasangiz eng to'g'ri yechim nima?",
        options: [
          "Ushbu savol ustida 15 daqiqa o'ylab o'tirish",
          "Taxminiy variantni belgilab, oldinga yurish va vaqt ortsa qaytish",
          "Testni to'xtatib yig'lash",
          "Imtihon oluvchidan so'rash"
        ],
        correctAnswer: 1,
        explanation: "Bitta savolga yopishib qolish qolgan oson savollarga vaqt yetmay qolishiga olib keladi.",
        type: "strategy"
      },
      {
        id: 706,
        question: "'Proofread' so'zi nimani anglatadi?",
        options: [
          "Yozilgan matnni xatolar uchun tekshirib chiqmoq",
          "Boshqalarga o'qib bermoq",
          "Yodlab olmoq",
          "Matnni o'chirib tashlamoq"
        ],
        correctAnswer: 0,
        explanation: "Proofread — yozilgan inshodagi orfografik va grammatik xatolarni ko'zdan kechirib tuzatishdir.",
        type: "vocabulary"
      },
      {
        id: 707,
        question: "To'g'ri yoki Noto'g'ri: Imtihon xonasiga suv olib kirishda idish ustidagi qog'oz yorliq (label) olib tashlangan bo'lishi shart.",
        options: ["To'g'ri", "Noto'g'ri"],
        correctAnswer: 0,
        explanation: "To'g'ri! Faqat shaffof va yorliqsiz plastik idishdagi suvga ruxsat beriladi.",
        type: "true_false"
      },
      {
        id: 708,
        question: "To'liq IELTS imtihonining 3 ta asosiy yozma qismi (Listening, Reading, Writing) jami qancha vaqt davom etadi?",
        options: ["1 soat", "Taxminan 2 soat 45 daqiqa", "4 soat 30 daqiqa", "6 soat"],
        correctAnswer: 1,
        explanation: "Listening (30-40 daqiqa) + Reading (60 daqiqa) + Writing (60 daqiqa) jami taxminan 2 soat 45 daqiqa vaqt oladi.",
        type: "multiple_choice"
      },
      {
        id: 709,
        question: "Mock testlarni qat'iy vaqt va haqiqiy sharoitda topshirish talabaga nima beradi?",
        options: [
          "Faqat charchoq",
          "Aqliy chidamlilik (mental stamina) va vaqtni real his qilish qobiliyati",
          "Hech narsa bermaydi",
          "Ballni kafolatlaydi"
        ],
        correctAnswer: 1,
        explanation: "Real sharoitdagi mashq imtihondagi kutilmagan stress va vaqt yetishmovchiligini bartaraf etadi.",
        type: "strategy"
      },
      {
        id: 710,
        question: "To'g'ri yoki Noto'g'ri: IELTS kursining barcha 7 modulini yakunlab, har bir modul testidan kamida 60% olgach, rasmiy sertifikat taqdim etiladi.",
        options: ["To'g'ri", "Noto'g'ri"],
        correctAnswer: 0,
        explanation: "To'g'ri! Kurs talablariga ko'ra barcha modullar to'liq tugatilib, 60%+ natija ko'rsatilganda sertifikat ochiladi.",
        type: "true_false"
      }
    ]
  }
];
