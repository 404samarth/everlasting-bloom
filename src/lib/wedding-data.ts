
export const weddingData = {
  brideName: "Ananya",
  groomName: "Arjun",
  weddingDate: "2024-11-18T10:00:00",
  instagramHandle: "@ananya_arjun_wedding",
  instagramLink: "https://instagram.com",
  openingScenes: {
    scene1: {
      text: "Wait...",
    },
    scene3: {
      en: {
        line1: "Wait just a little bit...",
        line2: "Because what's coming next... you haven't even imagined.",
      },
      hi: {
        line1: "Bas thoda sa wait...",
        line2: "Kyuki jo aage hai... woh aap soch bhi nahi rahe.",
      }
    },
    scene4: {
      en: "Before we begin...",
      hi: "Shuru karne se pehle..."
    },
    scene6: {
      en: {
        question: "Do you know what's on 18-19 November?",
        yesResponse: "Exactly! ❤️",
        noResponse: "Aww... you'll find out soon! 👀"
      },
      hi: {
        question: "Aapko pata hai 18-19 November ko kya hai?",
        yesResponse: "Bilkul sahi! ❤️",
        noResponse: "Arre... abhi pata chal jayega! 👀"
      }
    },
    scene7: {
      en: "So... how do you know them?",
      hi: "Achha... toh aap inke liye kaun hain?",
      options: [
        { id: 'bride_family', label: { en: "Bride's Family", hi: "Ladki Wale" } },
        { id: 'groom_family', label: { en: "Groom's Family", hi: "Ladke Wale" } },
        { id: 'bride_friend', label: { en: "Bride's Friend", hi: "Dulhan ki Saheli/Dost" } },
        { id: 'groom_friend', label: { en: "Groom's Friend", hi: "Dulhe ka Yaar/Dost" } },
        { id: 'relative', label: { en: "Relative", hi: "Rishtedaar" } },
      ]
    }
  },
  hero: {
    en: "Two hearts, one story... and now a new beginning.",
    hi: "Do dil, ek kahaani... aur ab ek nayi shuruaat."
  },
  story: {
    en: {
      title: "Our Story",
      content: "It all started with a simple hello... and grew into something beautiful. From coffee dates to life-long promises, our journey has been magical."
    },
    hi: {
      title: "Humari Kahani",
      content: "Ek choti si mulakaat se shuru hua ye safar... aur kab dosti se pyaar ban gaya pata hi nahi chala. Aaj hum ek nayi zindagi ki shuruaat karne ja rahe hain."
    }
  },
  families: {
    bride: {
      title: { en: "Bride's Family", hi: "Ladki Wale" },
      members: [
        { name: "Mr. & Mrs. Sharma", relation: { en: "Parents", hi: "Mata-Pita" } }
      ]
    },
    groom: {
      title: { en: "Groom's Family", hi: "Ladke Wale" },
      members: [
        { name: "Mr. & Mrs. Kapoor", relation: { en: "Parents", hi: "Mata-Pita" } }
      ]
    }
  },
  functions: [
    {
      name: { en: "Mehendi", hi: "Mehendi" },
      date: "17th Nov",
      time: "11:00 AM",
      venue: "The Grand Palace, Delhi",
      dressCode: { en: "Green / Floral", hi: "Hara / Phoolon wala" },
      description: { en: "Henna, music and laughter.", hi: "Mehendi ki khushboo aur doston ka saath." }
    },
    {
      name: { en: "Sangeet", hi: "Sangeet" },
      date: "17th Nov",
      time: "7:00 PM",
      venue: "The Grand Palace, Delhi",
      dressCode: { en: "Bling & Sparkle", hi: "Chamak aur Dhaakad" },
      description: { en: "Get ready to dance!", hi: "Naach-gaana aur hungama!" }
    },
    {
      name: { en: "Wedding", hi: "Vivah" },
      date: "18th Nov",
      time: "10:00 AM",
      venue: "Royal Heritage Gardens, Delhi",
      dressCode: { en: "Traditional Wear", hi: "Paramparik Pehnava" },
      description: { en: "The main ceremony.", hi: "Saat pheron ka bandhan." }
    }
  ],
  invitation: {
    en: {
      title: "A Wedding is more than a union of two souls...",
      subtitle: "It's the coming together of two families.",
      message: "Your presence on this beautiful occasion means the world to us. Join us to make these celebrations even more memorable."
    },
    hi: {
      title: "Shaadi sirf do logon ka milan nahi hoti...",
      subtitle: "Yeh do parivaaron ka ek saath aana hota hai.",
      message: "Is khoobsurat mauke par aapka saath humare liye bahut khaas hai. Aap zaroor aaiyega, milkar is celebration ko aur yaadgaar banayenge."
    }
  }
};
