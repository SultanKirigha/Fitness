
// src/data/initialSiteData.js (example path)


const CLOUD = import.meta.env.VITE_CLOUDINARY_BASE;

// Helper to build image URLs from Cloudinary
const img = (path) => `${CLOUD}/${path}`;


export const initialSiteData = {
  brand: {
  name: "Combatfit",
  tagline: "Outdoor training that feels like real life.",
  location: "Nairobi, Kenya",
},

  home: {
  heroTitle: "Outdoor training that feels like a mission, not a chore.",
  heroSubtitle:
    "Combatfit blends strength, conditioning, and combat-inspired drills in the open air. No crowded machines – just clear sessions that build power, engine, and confidence.",
  primaryCta: "Join the next outdoor session",
  secondaryCta: "See our training blocks",

  stats: [
    {
      label: "Outdoor athletes",
      value: "120+",
    },
    {
      label: "Sessions / week",
      value: "15+",
    },
    {
      label: "Average check-ins",
      value: "3x",
    },
  ],


    // --- HERO CAROUSEL SLIDES ---
    // Put these images in: public/images/...
    heroSlides: [
      {
      id: "strength",
      label: "Strength • Conditioning",
      caption: "Full-body strength and engine work in one place.",
      imageUrl: img("combatfit/hero/IMG01398_de4nmh.jpg"),
      },
      {
        id: "community-track",
        label: "Team • Community",
        caption: "Small outdoor crews pushing through the same block together.",
        imageUrl: img("combatfit/hero/IMG_1252_tb59en.jpg"),
  
      },
      {
        id: "engine-track",
        label: "Conditioning • Engine",
        caption: "Sprints, hills, and circuits that build a real-world engine.",
        imageUrl: img("combatfit/hero/IMG01934_dfwdwb.jpg")
      },
    ],
    // New: BMI section image editable from dashboard
    bmiImageUrl: img("combatfit/bmi/side-view-smiley-woman-stretching_eiom56.jpg"),
  },
   programs: [
    {
      id: "strength-foundations",
      name: "Strength Foundations",
      level: "Beginner to intermediate",
      focus:
        "Full body strength work with simple patterns so you can build confidence and consistency.",
      duration: "6 weeks",
      mode: "Outdoor and home friendly",
      sessionsPerWeek: 3,
      imageUrl: img("combatfit/programs/strength-foundations_x7ld2p.jpg"),
    },
    {
      id: "engine-outdoors",
      name: "Engine Outdoors",
      level: "All levels",
      focus:
        "Intervals, hills, and mixed conditioning sessions that build your engine without boring treadmill work.",
      duration: "8 weeks",
      mode: "Trails and city parks",
      sessionsPerWeek: 2,
      imageUrl: img("combatfit/programs/engine-outdoors_g5iwxy.jpg"),
    },
    {
      id: "hike-prep",
      name: "Hike Prep Block",
      level: "Intermediate",
      focus:
        "Leg strength, core work, and conditioning built to get you ready for longer hikes and trail days.",
      duration: "4 weeks",
      mode: "Gym plus outdoor sessions",
      sessionsPerWeek: 3,
      imageUrl: img("/combatfit/programs/360_F_570490961_dyPoZUNIOGnDQ8rd3ooOO2f2HrSLohLj_a5my6o.jpg"),
    },
  ],

    pricing: [
    {
      id: "basic",
      name: "Basic",
      priceMonthly: 3000,
      description: "Gym access, app check in, and community chat.",
      highlight: "Great starting point.",
      isPopular: false,
      features: [
        "Full access to the main gym floor during opening hours",
        "Access to all cardio equipment (treadmills, bikes, rowers, etc.)",
        "Access to strength machines and free weights",
        "Welcome orientation session to learn the layout and rules",
        "Basic movement safety walkthrough with a coach",
        "Access to Safarishape community chat / group",
        "Check-ins via the app to track attendance",
        "Email support for membership and billing questions",
        "Locker room and shower access",
      ],
    },
    {
      id: "coaching",
      name: "Coaching",
      priceMonthly: 7500,
      description: "Personalized programming and weekly coach feedback.",
      highlight: "Most popular for real progress.",
      isPopular: true,
      features: [
        "Everything in Basic membership",
        "Custom training program based on your goals and schedule",
        "Weekly program updates and adjustments as needed",
        "Form review videos for key lifts (sent through the app)",
        "Weekly check-in with your coach (chat or voice note)",
        "Access to selected group classes (strength / conditioning)",
        "Basic nutrition guidelines and habit targets",
        "Progress tracking dashboard (sessions, loads, and notes)",
        "Priority support response from your coach team",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      priceMonthly: 15000,
      description:
        "Fully custom plan, form reviews, and 1 to 1 calls with your coach.",
      highlight: "For high performers.",
      isPopular: false,
      features: [
        "Everything in Coaching membership",
        "Deep onboarding call to map out your next 12 weeks",
        "Fully bespoke training blocks (strength, conditioning, mobility)",
        "Monthly 1:1 video call with your coach",
        "Unlimited form review videos for key movements",
        "Advanced nutrition support and lifestyle check-ins",
        "Event / competition prep support if needed",
        "Early access to new Safarishape programs and blocks",
        "Option to pause / adjust plan quickly during busy seasons",
      ],
    },
  ],

  trainers: [
    {
      id: "amina-strength",
      name: "Amina Okello",
      role: "Head Strength Coach",
      focus: "Barbell strength, beginner technique, and injury aware coaching.",
      yearsExperience: 7,
      credentials: "CSCS, Precision Nutrition L1",
      location: "Nairobi and online",
      photoUrl: img("combatfit/trainers/Faith_Wanjiku_pizonk.jpg"),
    },
    {
      id: "leo-conditioning",
      name: "Leo Madu",
      role: "Conditioning Coach",
      focus: "Engine work, conditioning blocks, sport prep.",
      yearsExperience: 5,
      credentials: "CrossFit L2, Endurance specialist",
      location: "Hybrid, remote friendly",
      photoUrl: img("combatfit/trainers/Davis_Baguma_nawpce.webp"),
    },
    {
      id: "zara-mobility",
      name: "Zara Njoroge",
      role: "Mobility and Rehab",
      focus: "Mobility, movement quality, and post rehab training.",
      yearsExperience: 6,
      credentials: "Physio BSc, FRCms",
      location: "In person and online check ins",
      photoUrl: img("combatfit/trainers/Dennis_Paddy_s6kp1f.webp"),
    },
    
  ],
  // =====================
  // FOOTER
  // =====================
  footer: {
    about:
      "Combactfitness is a coaching-first fitness space that blends strength, conditioning, and mobility so you can move, feel, and live better – not just for one season, but long term.",
    operations: {
      weekday: "Monday – Friday · 5:30am – 10:00pm",
      saturday: "Saturday · 7:00am – 5:00pm",
      sunday: "Sunday & public holidays · 8:00am – 2:00pm",
    },
    address: {
      line1: "City Park Drive, Valley View Office Park",
      line2: "Tower A, 1st Floor, Nairobi, Kenya",
      phone: "+254 700 000 000",
      email: "hello@combactfitness.fit",
    },
    social: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://x.com/",
      youtube: "https://youtube.com/",
      tiktok: "https://tiktok.com/",
    },
  },
  // ... your existing data (home, programs, trainers, pricing, events, contact, etc)

  shop: {
    heroTitle: "Combatfit gear for the outdoor season.",
    heroSubtitle:
      "Pieces that work on hills, in parks, and on your way to work. Request what you need and we’ll confirm sizing, availability, and payment by email or WhatsApp.",

    // The items that will show in Shop.jsx
    items: [
      {
        id: "cf-tee-black",
        name: "Combatfit Black Training Tee",
        tag: "Apparel",
        priceKsh: 2500,
        priceNote: "Unisex fit · performance fabric",
        badge: "New",
        description:
          "Lightweight, quick-dry training tee with the Combatfit mark. Built for outdoor sessions, hill sprints, and everyday wear.",
        features: [
          "Breathable, quick-dry fabric",
          "Unisex athletic cut",
          "Screen-printed Combatfit logo",
          "Works for trails, park sessions, and gym days",
        ],
        estimatedLeadTime: "Typical lead time: 5–7 days in Nairobi.",
        imageUrl: img("combatfit/shop/35709_f_fl_gg5mg8.jpg"),
      },

      {
        id: "cf-hoodie-trail",
        name: "Combatfit Trail Hoodie",
        tag: "Layering",
        priceKsh: 4500,
        priceNote: "Perfect for early morning starts",
        badge: "Limited",
        description:
          "Mid-weight hoodie for pre-session warm up and cool downs. Soft inside, structured enough for trail mornings and city evenings.",
        features: [
          "Soft interior, structured exterior",
          "Room for a base layer underneath",
          "Subtle front Combatfit logo",
          "Great for Ngong, Karura, and commute days",
        ],
        estimatedLeadTime: "Typical lead time: 7–10 days.",
        imageUrl: img("combatfit/shop/833A4131_vv827u.jpg"),
      },

      {
        id: "cf-bands-set",
        name: "Combatfit Resistance Band Set",
        tag: "Equipment",
        priceKsh: 3200,
        priceNote: "Set of 5 bands + pouch",
        badge: "Coach pick",
        description:
          "Colour-coded resistance bands for strength work at home, in the park, or while travelling. Used in our outdoor blocks.",
        features: [
          "5 different resistance levels",
          "Comes with a small carry pouch",
          "Matches strength and mobility sessions in the app",
          "Good for warm ups, glute work, and finishers",
        ],
        estimatedLeadTime: "Typical lead time: 3–5 days.",
        imageUrl: img("combatfit/shop/Haef3923a22054fd7810a9b9eeab2ac1ai.jpg_300x300_idvlu5.jpg"),
      },

      {
        id: "cf-bottle",
        name: "Combatfit Hydration Bottle 1L",
        tag: "Accessories",
        priceKsh: 1800,
        priceNote: "Leak-resistant lid",
        badge: "Everyday",
        description:
          "1 litre bottle to carry to sessions, hikes, and work. Simple, durable, and easy to clean.",
        features: [
          "Approx. 1 litre capacity",
          "Durable BPA-free plastic",
          "Wide opening for ice and easy cleaning",
          "Minimal Combatfit branding on the side",
        ],
        estimatedLeadTime: "Typical lead time: 3–5 days.",
        imageUrl: img("combatfit/shop/1_j4jzah.jpg"),
      },
    ],
  },

   // =====================
  // EVENTS
  // =====================
  // Put these images in: public/images/events/...
  events: [
  {
    id: "karura-hike",
    title: "Karura Forest Community Hike",
    date: "2025-01-25",
    time: "07:00 – 10:30",
    type: "Hike",
    location: "Karura Forest, Nairobi",
    isOnline: false,
    soldOut: true,
    highlight: "Easy to moderate pace, all levels welcome.",
    summary:
      "Start your Saturday with a guided hike through Karura. We move, talk, and finish with a simple mobility flow in the clearing.",
    registrationUrl: "#",
    imageUrl: img("combatfit/events/Karura-Forest-Services-Restored_op6iji.jpg"),
  },
  {
    id: "sunrise-trail",
    title: "Sunrise Trail Run and Mobility",
    date: "2025-02-08",
    time: "06:00 – 08:30",
    type: "Outdoor",
    location: "Ngong Hills trail head",
    isOnline: false,
    soldOut: false,
    highlight: "Short trail loops plus recovery work.",
    summary:
      "Gentle trail loops at your pace followed by coached stretching and breath work as the sun comes up.",
    registrationUrl: "#",
    imageUrl: img("combatfit/events/Running-team_Karura-Forest_ip9jk4.jpg"),
  },
  {
    id: "park-bootcamp",
    title: "Park Strength and Conditioning Session",
    date: "2025-02-22",
    time: "09:00 – 11:00",
    type: "Bootcamp",
    location: "Central Park, Nairobi",
    isOnline: false,
    soldOut: false,
    highlight: "Bodyweight strength and circuits in the park.",
    summary:
      "A full body session built around bodyweight, bands, and partner drills. Bring water and a friend.",
    registrationUrl: "#",
    imageUrl: img("combatfit/events/stephen-leonardi-6E6oMx-69Ns-unsplash-1_wrcz9e.jpg"),
  },
  {
    id: "online-info-night",
    title: "Online Info Night: Training With Combatfit",
    date: "2025-03-05",
    time: "19:00 – 20:00",
    type: "Online",
    location: "Live on Zoom",
    isOnline: true,
    soldOut: false,
    highlight: "Ask questions before you start.",
    summary:
      "A live online session where we walk through how blocks work, how we coach, and what to expect in your first month.",
    registrationUrl: "#",
    imageUrl: img("combatfit/events/full-shot-man-recording-himself_cexdpu.jpg"),
  },
  // New January upcoming event (future date so it stays upcoming)
  {
    id: "new-year-sunrise-hike",
    title: "New Year Sunrise Hike and Breathwork",
    date: "2026-01-11",
    time: "05:30 – 09:00",
    type: "Hike",
    location: "Ngong Hills ridge",
    isOnline: false,
    soldOut: false,
    highlight: "Start your year with a sunrise, hike, and guided breathwork.",
    summary:
      "We hike to the ridge before sunrise, move at a conversational pace, and finish with guided breathwork and reflection to set your training tone for the year.",
    registrationUrl: "#",
    imageUrl: img("combatfit/events/_dsc6424_jeetc0.jpg"),
  },
  
]

};
