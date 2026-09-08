/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING HERE — names, dates, functions, messages.
 *  The whole website reads its content from this one file.
 * ─────────────────────────────────────────────────────────────
 */

export type Lang = "en" | "hi";
export type Side = "bride" | "groom";

export const wedding = {
  couple: {
    groom: {
      firstName: "Anand",
      fullName: "Anand Raghuwanshi",
      bio: "Raghuwanshi parivaar ka beta — shaant, zimmedaar, aur thoda sharmeela. Rishta pakka hone ke baad usne Priyanka ko roz ek call kiya, kabhi naagha nahin.",
    },
    bride: {
      firstName: "Priyanka",
      fullName: "Priyanka Saxena",
      bio: "Saxena parivaar ki beti — hansmukh, samajhdaar aur dil se apnon ki. Pehli video call par sirf 'hello' kaha tha, phir baatein khatam hi nahin hui.",
    },
  },

  hashtag: "#AnandWedsPriyanka",
  instagramUrl: "https://instagram.com/anand.weds.priyanka",
  instagramHandle: "@anand.weds.priyanka",

  /** The wedding moment the countdown runs to (IST). */
  weddingDateISO: "2026-11-19T19:00:00+05:30",
  dateShort: "18 · 19 Nov 2026",
  dateLong: "18th & 19th November 2026",
  city: "Burhanpur, Madhya Pradesh",
  venue: "Burhanpur Palace, Burhanpur (M.P.)",

  /** Opening experience copy */
  opening: {
    dateQuestion: "Aapko pata hai 18–19 November ko kya hai?",
    noResponse: "Koi baat nahi... ab zindagi bhar yaad rahega 😌",
    relations: [
      { label: "Gharaati Family", side: "bride" },
      { label: "Gharaati Friend", side: "bride" },
      { label: "Gharaati Relative", side: "bride" },
      { label: "Baraati Family", side: "groom" },
      { label: "Baraati Friend", side: "groom" },
      { label: "Baraati Relative", side: "groom" },
    ] as { label: string; side: Side }[],

    /** Personalised welcome beat (after the relationship choice) */
    welcome: {
      en: {
        title: "Aapke liye ek khaas nimantran hai...",
        fromLine: "Saxena & Raghuwanshi parivaar ki taraf se",
      },
      hi: {
        title: "आपके लिए एक ख़ास निमंत्रण है...",
        fromLine: "सक्सेना एवं रघुवंशी परिवार की ओर से",
      },
    },

    /** Envelope opener */
    envelope: {
      en: {
        addressPrefix: "For our dear",
        openLabel: "Open your invitation",
        hint: "Tap the envelope",
        unfoldNote: "With love, and blessings",
      },
      hi: {
        addressPrefix: "हमारे प्रिय",
        openLabel: "अपना निमंत्रण खोलें",
        hint: "लिफ़ाफ़े को स्पर्श करें",
        unfoldNote: "प्रेम एवं आशीर्वाद सहित",
      },
    },
  },

  hero: {
    line: "Do parivaaron ne rishta jodha... aur do ajnabee dheere-dheere apne ban gaye.",
    sub: "Saxena & Raghuwanshi parivaar ke saath",
  },

  story: {
    title: { en: "Our Story", hi: "हमारी कहानी" },
    intro:
      "Humari kahaani ek mulaqaat se nahi, ek rishte se shuru hui — aur phir ek phone call ne use pyaar bana diya.",
    moments: [
      {
        year: "Pehla Kadam",
        title: "Dono Parivaar Mile",
        text: "Burhanpur mein baaton ki shuruaat bade-buzurgon se hui. Saxena aur Raghuwanshi parivaar mile, chai chali, aur dono taraf ek hi baat lagi — yeh rishta banna chahiye.",
      },
      {
        year: "Rishta Pakka",
        title: "Haan Ho Gayi",
        text: "Arrange marriage — hum ek doosre ko jaante bhi nahi the. Bas parivaar par bharosa tha. Jis din rishta pakka hua, dono ke haath thode kaanp rahe the aur dil bahut zyada.",
      },
      {
        year: "Pehla Call",
        title: "Hello... Namaste",
        text: "Pehla phone call sirf paanch minute ka tha, aur uss mein bhi aadha waqt chup rahe. Agle din phir call kiya... aur woh paanch minute do ghante ban gaye.",
      },
      {
        year: "Video Calls",
        title: "Screen Ke Do Taraf",
        text: "Ab tak humari saari mulaqaatein calls aur video calls par hui hain. Khaana, kaam, gaane, dar, sapne — sab share kiya. Ajeeb baat hai, doori mein hi ek dosti ban gayi.",
      },
      {
        year: "18–19 Nov 2026",
        title: "Ab Aamne-Saamne",
        text: "Ab woh din aa raha hai jab screen hat jaayegi. Burhanpur mein, apne logon ke beech, dulha-dulhan ban kar milenge — aur aapka aashirvaad is kahaani ka pehla page hoga.",
      },
    ],
  },

  families: {
    bride: {
      side: { en: "The Bride's Family", hi: "दुल्हन का परिवार" },
      name: "The Saxena Family",
      members:
        "Shri Manoj & Smt. Seema Saxena · Dadaji Shri K. N. Saxena · Dadiji Smt. Premkumari Saxena",
      intro:
        "Burhanpur ke Saxena parivaar — jahan har mehmaan pehle chai peeta hai, phir baat karta hai. Priyanka unka maan hai, aur is ghar ki har khushi mein dadaji-dadiji ka aashirvaad sabse aage hai.",
    },
    groom: {
      side: { en: "The Groom's Family", hi: "दूल्हे का परिवार" },
      name: "The Raghuwanshi Family",
      members: "Shri [Father's Name] & Smt. [Mother's Name] Raghuwanshi",
      intro:
        "Raghuwanshi parivaar — jinke liye rishte nibhaana sabse badi rasm hai. Ghar mein hansi zyada hai, formality kam. Priyanka ab is ghar ki beti hai.",
    },
  },

  events: [
    {
      name: "Sagai",
      date: "18 November 2026",
      time: "12:00 PM",
      venue: "Burhanpur Palace, Burhanpur (M.P.)",
      dress: "Traditional / Festive",
      note: "Ring, rasmein aur do parivaaron ki pehli official khushi. Yahin se do din ka jashn shuru hota hai.",
    },
    {
      name: "Mehndi",
      date: "18 November 2026",
      time: "5:00 PM",
      venue: "Burhanpur Palace, Burhanpur (M.P.)",
      dress: "Shades of green",
      note: "Mehndi ki khushboo, dholak, aur purane gaane. Haath rangwane ke liye taiyaar aa jaayein.",
    },
    {
      name: "Sangeet",
      date: "18 November 2026",
      time: "6:30 PM",
      venue: "Burhanpur Palace, Burhanpur (M.P.)",
      dress: "Cocktail / Indo-western",
      note: "Do parivaar, ek stage, poora hungama. Performance zaroori hai — talent optional.",
    },
    {
      name: "Haldi",
      date: "19 November 2026",
      time: "11:00 AM",
      venue: "Burhanpur Palace, Burhanpur (M.P.)",
      dress: "Yellow — kapde jo kharab ho sakein",
      note: "Haldi, phool aur thodi si shararat. Is rasm se koi saaf nahi bachta.",
    },
    {
      name: "The Wedding",
      date: "19 November 2026",
      time: "7:00 PM",
      venue: "Burhanpur Palace, Burhanpur (M.P.)",
      dress: "Traditional Indian",
      note: "Varmala, pheras, aur woh lamha jab do ajnabee hamesha ke liye apne ban jaate hain.",
    },
  ],

  invitation: {
    heading: "Shaadi sirf do logon ka milan nahi hoti...",
    sub: "yeh do parivaaron ka ek saath aana hota hai.",
    message:
      "Yeh rishta humare bade-buzurgon ke aashirvaad se juda hai, aur aapki maujoodgi se poora hoga. Burhanpur mein, 18 aur 19 November ko, humare ghar ki is khushi mein zaroor aaiyega — aapke bina yeh jashn adhoora rahega.",
    sign: "— Saxena & Raghuwanshi Parivaar",
  },

  testimonials: [
    {
      name: "Dadiji",
      relation: "Bride's Grandmother",
      side: "bride",
      message:
        "Meri Priyanka ke liye humne bahut soch kar rishta chuna. Ab jab dono ki baatein sunti hoon phone par, lagta hai Bhagwan ne khud jodi banayi hai. Bahut khush hoon main.",
    },
    {
      name: "Dadaji K. N. Saxena",
      relation: "Bride's Grandfather",
      side: "bride",
      message:
        "Rishta parivaaron se banta hai, aur nibhta do logon ke bharose se. Anand beta shaant aur samajhdaar hai. Dono ko dher saara aashirvaad.",
    },
    {
      name: "Neha",
      relation: "Bride's Cousin",
      side: "bride",
      message:
        "Pehle Priyanka didi bilkul nervous thi. Ab raat ko 12 baje bhi video call par hansti rehti hai. Yeh badlaav dekhna sabse pyaara raha.",
    },
    {
      name: "Raghuwanshi Parivaar",
      relation: "Groom's Family",
      side: "groom",
      message:
        "Humein ek bahu nahi, ek beti mil rahi hai. 19 November ka intezaar poore ghar ko hai.",
    },
    {
      name: "Anand ki Bua",
      relation: "Groom's Aunt",
      side: "groom",
      message:
        "Anand hamesha kaam mein busy rehta tha, ab uske chehre par ek nayi muskaan hai. Priyanka beti ka swaagat poore dil se.",
    },
    {
      name: "Rohit",
      relation: "Groom's Friend",
      side: "groom",
      message:
        "Jo banda phone kabhi nahi uthata tha, wo aaj ghanton video call par lagta hai. Bhai, tu set ho gaya!",
    },
  ] as { name: string; relation: string; side: Side; message: string }[],

  instagram: {
    title: { en: "Join Our Journey", hi: "हमारे सफ़र से जुड़िए" },
    text: "Har candid moment, har behind-the-scenes yaad, shaadi ki saari tasveerein — sab humare wedding Instagram par rahengi. Follow kariye, aaj aur hamesha.",
  },

  postWedding: {
    heading: "Our Beautiful Beginning",
    message:
      "Pheras ho gaye, vaade nibhaye ja rahe hain — aur internet ka yeh chhota kona ab un do dinon ki har yaad sambhal kar rakhta hai. Humare saath phir se jee lijiye.",
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
    blessingError: "Kuch gadbad ho gayi. Dobara koshish kijiye.",
    memoriesTitle: "Share Your Memory",
    memoriesQuestion: "Do you have a photo with the bride or groom?",
    memoriesLine:
      "Share it with us ❤️ — it will become part of this wedding's digital memory book.",
    uploadPhoto: "Upload a photo",
    uploading: "Uploading...",
    memoriesEmpty: "Uploaded memories will appear here, forever.",
    memoriesHint: "Swipe to see all the memories guests have shared →",
    viewAllPhotos: "View all photos",
    allPhotosTitle: "Memory Album",
    close: "Close",
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
    blessingError: "कुछ गड़बड़ हो गई। दोबारा कोशिश कीजिए।",
    memoriesTitle: "अपनी यादें साझा करें",
    memoriesQuestion: "क्या आपके पास दुल्हन या दूल्हे के साथ कोई तस्वीर है?",
    memoriesLine:
      "हमारे साथ साझा करें ❤️ — यह इस शादी की डिजिटल यादों की किताब का हिस्सा बनेगी।",
    uploadPhoto: "तस्वीर अपलोड करें",
    uploading: "अपलोड हो रहा है...",
    memoriesEmpty: "अपलोड की गई यादें यहाँ दिखेंगी, हमेशा के लिए।",
    memoriesHint: "मेहमानों की साझा की गई यादें देखने के लिए स्वाइप करें →",
    viewAllPhotos: "सभी तस्वीरें देखें",
    allPhotosTitle: "यादों का एल्बम",
    close: "बंद करें",
    days: "दिन",
    hours: "घंटे",
    minutes: "मिनट",
    seconds: "सेकंड",
    scrollDown: "स्क्रॉल करें",
    footerLine: "प्यार से बनाया गया, अपने प्यारे लोगों के लिए।",
  },
} as const;
