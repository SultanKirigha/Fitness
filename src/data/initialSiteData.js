
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
      imageUrl: "https://res.cloudinary.com/dqgxq1mp2/image/upload/v1774371543/IMG_3171_x8k3lk.jpg",
      },
      {
        id: "community-track",
        label: "Team • Community",
        caption: "Small outdoor crews pushing through the same block together.",
        imageUrl: "https://res.cloudinary.com/dqgxq1mp2/image/upload/v1774371532/IMG_3342_pb4y9n.jpg",
  
      },
      {
        id: "engine-track",
        label: "Conditioning • Engine",
        caption: "Sprints, hills, and circuits that build a real-world engine.",
        imageUrl: "https://res.cloudinary.com/dqgxq1mp2/image/upload/v1774371545/IMG_3205_zkwdnx.jpg"
      },
    ],
    // New: BMI section image editable from dashboard
    bmiImageUrl: "https://res.cloudinary.com/dqgxq1mp2/image/upload/v1774371543/IMG_3156_sqgtzn.jpg",
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
      imageUrl: "https://res.cloudinary.com/dqgxq1mp2/image/upload/v1774371533/IMG_3115_ivpqbi.jpg",
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
      imageUrl: "https://res.cloudinary.com/dqgxq1mp2/image/upload/v1774371531/IMG_3244_bntdkn.jpg",
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
      imageUrl: "https://res.cloudinary.com/dqgxq1mp2/image/upload/v1774371543/IMG_3164_zjco6c.jpg",
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
      name: "Coach Clive",
      role: "Head Strength Coach",
      focus: "Barbell strength, beginner technique, and injury aware coaching.",
      yearsExperience: 7,
      credentials: "CSCS, Precision Nutrition L1",
      location: "Nairobi and online",
      photoUrl: "https://res.cloudinary.com/dqgxq1mp2/image/upload/v1774372425/ChatGPT_Image_Mar_15_2026_02_04_28_PM_krhkmt.png",
    },
    {
      id: "leo-conditioning",
      name: "Coach Felix",
      role: "Conditioning Coach",
      focus: "Engine work, conditioning blocks, sport prep, and HIIT sessions.",
      yearsExperience: 5,
      credentials: "CrossFit L2, Endurance specialist",
      location: "Hybrid, remote friendly",
      photoUrl: "https://res.cloudinary.com/dqgxq1mp2/image/upload/v1774372425/ChatGPT_Image_Mar_15_2026_02_12_40_PM_k3afvs.png",
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
        name: "T-shirt Full Logo shirts",
        tag: "Apparel",
        priceKsh: 1000,
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
        imageUrl: "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1775203467/WhatsApp_Image_2026-04-03_at_10.51.28_jbgqnh.jpg",

        images: [
          "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1775203467/WhatsApp_Image_2026-04-03_at_10.51.28_jbgqnh.jpg",

        ],
      },

      {
        id: "cf-tee-icon-black",
        name: "T-shirt Icon shirts",
        tag: "Apparel",
        priceKsh: 1000,
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
        imageUrl: "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1775203467/WhatsApp_Image_2026-04-03_at_10.51.31_wa6kob.jpg",

        images: [
          "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1775203467/WhatsApp_Image_2026-04-03_at_10.51.31_wa6kob.jpg",
          
        ],
      },

      {
        id: "cf-compressor-icon-black",
        name: "Compressor shirts",
        tag: "Apparel",
        priceKsh: 1500,
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
        imageUrl: "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1775208825/WhatsApp_Image_2026-04-03_at_10.52.43_drluqm.jpg",

        images: [
          "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1775208825/WhatsApp_Image_2026-04-03_at_10.52.43_drluqm.jpg",
          
        ],
      },

      {
        id: "cf-black-icon-hoodie-trail",
        name: "Combatfit Icon Hoodie",
        tag: "Layering",
        priceKsh: 3000,
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

        // cover image for shop card
        imageUrl:
          "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1775203467/WhatsApp_Image_2026-04-03_at_10.51.32_vhwmpq.jpg",

        // multiple product images
        images: [
          "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1775203467/WhatsApp_Image_2026-04-03_at_10.51.32_vhwmpq.jpg",
          "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1775203466/WhatsApp_Image_2026-04-03_at_10.51.39_vpkl1v.jpg",
          "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1775203466/WhatsApp_Image_2026-04-03_at_10.51.42_wypznu.jpg",
        ],
      },

      {
        id: "cf-white-full-logo-hoodie-trail",
        name: "Combatfit Full Logo Hoodie",
        tag: "Layering",
        priceKsh: 3000,
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

        // cover image for shop card
        imageUrl:
          "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1775203467/WhatsApp_Image_2026-04-03_at_10.51.34_vhvf96.jpg",

        // multiple product images
        images: [
          "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1775203467/WhatsApp_Image_2026-04-03_at_10.51.34_vhvf96.jpg",
          "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1775203466/WhatsApp_Image_2026-04-03_at_10.51.42_wypznu.jpg",
        ],
      },
    ],
  },

   // =====================
  // EVENTS
  // =====================
  // Put these images in: public/images/events/...
  events: [
      {
    id: "bootcamp",
    title: "Jaffery (Team Challenge)",
    date: "2026-04-25",
    time: "07:00 – 10:30",
    type: "Bootcamp",
    location: "Karura Forest, Nairobi",
    isOnline: false,
    soldOut: false,
    highlight: "Easy to moderate pace, all levels welcome.",
    summary:
      "Let’s stay consistent and grow stronger together! 🔥confirm your spot",
    registrationUrl: "#",
    imageUrl: "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1774371562/IMG_3404_bzvsbk.jpg",
  },
    {
    id: "bootcamp",
    title: "Karura Forest ( Bootcamp) joint with Ibrafitness",
    date: "2026-04-18",
    time: "07:00 – 10:30",
    type: "Bootcamp",
    location: "Karura Forest, Nairobi",
    isOnline: false,
    soldOut: false,
    highlight: "Easy to moderate pace, all levels welcome.",
    summary:
      "Let’s stay consistent and grow stronger together! 🔥confirm your spot",
    registrationUrl: "#",
    imageUrl: "https://res.cloudinary.com/dqgxq1mp2/image/upload/q_auto/f_auto/v1776286383/IMG-20250823-WA0025_1.jpg_kdd77z.jpg",
  },
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
    imageUrl: "https://res.cloudinary.com/dqgxq1mp2/image/upload/v1774373213/IMG_0003_zhiaqv.jpg",
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
