/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING HERE — names, dates, functions, messages.
 *  The whole website reads its content from this one file.
 * ─────────────────────────────────────────────────────────────
 */

export type Lang = "en" | "hi";

export const wedding = {
  couple: {
    groom: {
      firstName: "Anand",
      fullName: "Anand Mehta",
      bio: "An architect who sketches buildings by day and plans surprise chai dates by evening. Calm, patient, and completely in love with Priyanka's laugh.",
    },
    bride: {
      firstName: "Priyanka",
      fullName: "Priyanka Sharma",
      bio: "A doctor with the warmest heart in every room. She believed love was a distraction — until Anand proved her beautifully wrong.",
    },
  },

  hashtag: "#AnandWedsPriyanka",
  instagramUrl: "https://instagram.com/anand.weds.priyanka",
  instagramHandle: "@anand.weds.priyanka",

  /** The wedding moment the countdown runs to (IST). */
  weddingDateISO: "2026-11-18T19:00:00+05:30",
  dateShort: "18 · 19 Nov 2026",
  dateLong: "18th & 19th November 2026",
  city: "Jaipur, Rajasthan",

  /** Opening experience copy */
  opening: {
    dateQuestion: "Aapko pata hai 18–19 November ko kya hai?",
    noResponse: "Koi baat nahi... ab zindagi bhar yaad rahega 😌",
    relations: [
      "Bride Family",
      "Groom Family",
      "Bride Friend",
      "Groom Friend",
      "Bride/Groom Relative",
    ],
  },

  hero: {
    line: "Do dil, ek kahaani... aur ab ek nayi shuruaat.",
    sub: "Together with their families",
  },

  story: {
    title: { en: "Our Story", hi: "हमारी कहानी" },
    intro:
      "Kuch kahaaniyan filmon se shuru nahi hoti... humari ek chai ke cup se shuru hui.",
    moments: [
      {
        year: "2019",
        title: "Pehli Mulaqaat",
         text: "A crowded Jaipur café, one shared table, and a conversation that refused to end. Anand still insists Priyanka stole his chair. Priyanka insists he stole her heart first.",
      },
      {
        year: "2021",
        title: "Dosti Se Pyaar Tak",
        text: "Late-night calls, monsoon drives, and hundred small adventures. Somewhere between the laughter, friendship quietly became something neither could deny.",
      },
      {
        year: "2024",
        title: "The Proposal",
         text: "Under a thousand fairy lights at Nahargarh Fort, Anand went down on one knee. Priyanka said yes before he could finish the question.",
      },
      {
        year: "2026",
        title: "Forever Begins",
        text: "Ab jab aap yahan tak aa hi gaye hain... toh is kahaani ka sabse khoobsurat chapter aapke saath likhna hai.",
      },
    ],
  },

  families: {
    bride: {
      side: { en: "The Bride's Family", hi: "दुल्हन का परिवार" },
      name: "The Sharma Family",
      members: "Rajesh & Sunita Sharma · with Dadi Maa",
      intro:
         "Jaipur wale Sharmas — known for their garam chai, louder laughter, and a door that is always open. Priyanka is their pride, and now Anand is their newest son.",
    },
    groom: {
      side: { en: "The Groom's Family", hi: "दूल्हे का परिवार" },
      name: "The Mehta Family",
      members: "Vikram & Anita Mehta · with Nanu Ji",
      intro:
         "The Mehtas believe every celebration deserves one extra mithai and one extra hug. They waited years for a daughter — Priyanka arrived and stole the whole house.",
    },
  },

  events: [
    {
      name: "Mehendi",
      date: "17 November 2026",
      time: "11:00 AM onwards",
      venue: "Sharma Residence, Civil Lines, Jaipur",
      dress: "Shades of green",
      note: "Henna, dholak, and the bride's favourite old songs. Come with your dancing hands.",
    },
    {
      name: "Haldi",
      date: "18 November 2026",
      time: "9:00 AM",
      venue: "Sharma Residence Courtyard",
      dress: "Yellow — clothes you can stain",
      note: "Haldi, phool, aur thodi si shararat. Nobody leaves this one clean.",
    },
    {
      name: "Sangeet",
      date: "18 November 2026",
      time: "7:00 PM",
      venue: "The Leela Lawn, Jaipur",
      dress: "Cocktail / Indo-western",
      note: "Two families, one stage, unlimited drama. Performances mandatory, talent optional.",
    },
    {
      name: "The Wedding",
      date: "18 November 2026",
      time: "Pheras from 9:30 PM",
      venue: "Rajwada Palace, Jaipur",
      dress: "Traditional Indian",
      note: "The moment it all becomes forever. Varmala, pheras, and a few happy tears.",
    },
    {
      name: "Reception",
      date: "19 November 2026",
      time: "7:00 PM",
      venue: "Rajwada Palace Grand Lawn",
      dress: "Evening formal",
      note: "Dinner, dancing, and blessings for the newlyweds. Photos encouraged, diets banned.",
    },
  ],

  invitation: {
    heading: "Shaadi sirf do logon ka milan nahi hoti...",
    sub: "yeh do parivaaron ka ek saath aana hota hai.",
    message:
      "Is khoobsurat mauke par aapka saath humare liye bahut khaas hai. Aap zaroor aaiyega — milkar is celebration ko aur bhi yaadgaar banayenge. Aapke aashirvaad ke bina yeh kahaani adhoori rahegi.",
    sign: "— Sharma & Mehta Parivaar",
  },

  testimonials: [
    {
      name: "Dadi Maa",
      relation: "Bride's Grandmother",
      message:
         "Meri Priyanka jab chhoti thi, kehti thi shaadi usse nahin karni. Ab dekho... jab sahi insaan milta hai na, sab badal jaata hai. Bahut khush hoon main.",
    },
    {
      name: "Rohan Mehta",
      relation: "Groom's Brother",
      message:
         "Growing up, Anand bhaiya was the serious one. Then Priyanka bhabhi entered his life and suddenly he started smiling at his phone. About time!",
    },
    {
      name: "Priya Nair",
      relation: "Bride's Best Friend",
      message:
        "I have watched this love story from the front row since day one. Two better people simply do not exist. Wishing them a lifetime of chai dates.",
    },
    {
      name: "Nanu Ji",
      relation: "Groom's Grandfather",
      message:
         "Anand ne hamesha sabka khayaal rakha. Ab uske khayaal rakhne wali aa gayi hai. Jodi rab ne banayi hai — hum bas witness hain.",
    },
  ],

  instagram: {
    title: { en: "Join Our Journey", hi: "हमारे सफ़र से जुड़िए" },
    text: "Every candid moment, every behind-the-scenes memory, every photograph from the wedding — and all the memories after it — will live on our wedding Instagram. Follow along, today and always.",
  },

  postWedding: {
    heading: "Our Beautiful Beginning",
    message:
      "The pheras are done, the promises are made — and this little corner of the internet now holds every memory of the days we became forever. Relive them with us.",
  },
};

/** Small UI strings, per language. Site copy stays simple Hinglish either way. */
export const ui = {
  en: {
    welcome: "Welcome",
    countdownTitle: "Counting Down to Forever",
    countdownLine: "Thoda sa sabr... phir sirf celebration.",
    familiesTitle: "Meet the Families",
    familiesLine: "Do parivaar, ek naya rishta.",
    eventsTitle: "Wedding Functions",
    eventsLine: "Do din, paanch celebrations, hazaron yaadein.",
    cardTitle: "The Wedding Card",
    cardLine: "Ek chhota sa card, bohot badi dawat.",
    viewCard: "View Invitation",
    downloadCard: "Download Card",
    blessingsTitle: "Blessings & Love",
    blessingsLine: "Aapke shabd hi sabse bada tohfa hain.",
    leaveBlessing: "Leave Your Blessings",
    yourName: "Your name",
    yourRelation: "Relation — e.g. Mausi, college friend",
    yourMessage: "Your blessing or a favourite memory...",
    sendBlessing: "Send Blessings",
    blessingThanks: "Shukriya! Aapka aashirvaad mil gaya.",
    memoriesTitle: "Share Your Memory",
    memoriesQuestion: "Do you have a photo with the bride or groom?",
    memoriesLine: "Share it with us ❤️ — it will become part of this wedding's digital memory book.",
    uploadPhoto: "Upload a photo",
    memoriesEmpty: "Uploaded memories will appear here, forever.",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    scrollDown: "Scroll",
    footerLine: "Made with love, for the people we love.",
  },
  hi: {
    welcome: "स्वागत है",
    countdownTitle: "हमेशा की शुरुआत तक",
    countdownLine: "थोड़ा सा सब्र... फिर सिर्फ़ जश्न।",
    familiesTitle: "परिवार से मिलिए",
    familiesLine: "दो परिवार, एक नया रिश्ता।",
    eventsTitle: "शादी के कार्यक्रम",
    eventsLine: "दो दिन, पाँच जश्न, हज़ारों यादें।",
    cardTitle: "शादी का कार्ड",
    cardLine: "एक छोटा सा कार्ड, बहुत बड़ी दावत।",
    viewCard: "निमंत्रण देखें",
    downloadCard: "कार्ड डाउनलोड करें",
    blessingsTitle: "आशीर्वाद और प्यार",
    blessingsLine: "आपके शब्द ही सबसे बड़ा तोहफ़ा हैं।",
    leaveBlessing: "अपना आशीर्वाद लिखें",
    yourName: "आपका नाम",
    yourRelation: "रिश्ता — जैसे मौसी, कॉलेज दोस्त",
    yourMessage: "आपका आशीर्वाद या कोई प्यारी याद...",
    sendBlessing: "आशीर्वाद भेजें",
    blessingThanks: "शुक्रिया! आपका आशीर्वाद मिल गया।",
    memoriesTitle: "अपनी यादें साझा करें",
    memoriesQuestion: "क्या आपके पास दुल्हन या दूल्हे के साथ कोई तस्वीर है?",
    memoriesLine: "हमारे साथ साझा करें ❤️ — यह इस शादी की डिजिटल यादों की किताब का हिस्सा बनेगी।",
    uploadPhoto: "तस्वीर अपलोड करें",
    memoriesEmpty: "अपलोड की गई यादें यहाँ दिखेंगी, हमेशा के लिए।",
    days: "दिन",
    hours: "घंटे",
    minutes: "मिनट",
    seconds: "सेकंड",
    scrollDown: "स्क्रॉल करें",
    footerLine: "प्यार से बनाया गया, अपने प्यारे लोगों के लिए।",
  },
} as const;
