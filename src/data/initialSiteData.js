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
        id: "strength-track",
        label: "Combat • Strength",
        caption: "Pad work, bodyweight strength, and carries in the open air.",
        imageUrl: "https://outdoorfitness.ca/wp-content/uploads/2022/11/IMG01398.jpg",
      },
      {
        id: "community-track",
        label: "Team • Community",
        caption: "Small outdoor crews pushing through the same block together.",
        imageUrl: "https://outdoorfitness.ca/wp-content/uploads/2023/03/IMG_1252.jpg",
  
      },
      {
        id: "engine-track",
        label: "Conditioning • Engine",
        caption: "Sprints, hills, and circuits that build a real-world engine.",
        imageUrl: "https://outdoorfitness.ca/wp-content/uploads/2023/11/IMG01934.jpg",
      },
    ],
    // New: BMI section image editable from dashboard
    bmiImageUrl:
      "https://img.freepik.com/free-photo/side-view-woman-doing-sport-with-stats_23-2150040504.jpg?t=st=1765844800~exp=1765848400~hmac=7d50e8f79bbaac7dbbdc100a6ccdf778796bbc0028165774abd1cf48e36ccbd0&w=1480",
  },
  programs: [
    {
      id: "strength-foundations",
      name: "Strength Foundations",
      level: "Beginner",
      duration: "8 weeks",
      focus: "Full body strength and technique.",
      mode: "Gym or home",
      sessionsPerWeek: 3,
    },
    {
      id: "lean-performance",
      name: "Lean Performance",
      level: "Intermediate",
      duration: "12 weeks",
      focus: "Conditioning, fat loss, and athleticism.",
      mode: "Hybrid coaching",
      sessionsPerWeek: 4,
    },
    {
      id: "engine-builder",
      name: "Engine Builder",
      level: "Intermediate",
      duration: "10 weeks",
      focus: "Aerobic base and engine for sport or life.",
      mode: "Online only",
      sessionsPerWeek: 3,
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
      photoUrl:
        "https://images.squarespace-cdn.com/content/v1/607c8d29bab4b20ba4778fa4/f1afaab5-510a-4e37-8d62-79f28c246052/Faith+Wanjiku+.jpg",
    },
    {
      id: "leo-conditioning",
      name: "Leo Madu",
      role: "Conditioning Coach",
      focus: "Engine work, conditioning blocks, sport prep.",
      yearsExperience: 5,
      credentials: "CrossFit L2, Endurance specialist",
      location: "Hybrid, remote friendly",
      photoUrl:
        "https://images.squarespace-cdn.com/content/v1/607c8d29bab4b20ba4778fa4/35779562-31e0-43d9-8edb-efaed18000f2/Davis+Baguma.jpg",
    },
    {
      id: "zara-mobility",
      name: "Zara Njoroge",
      role: "Mobility and Rehab",
      focus: "Mobility, movement quality, and post rehab training.",
      yearsExperience: 6,
      credentials: "Physio BSc, FRCms",
      location: "In person and online check ins",
      photoUrl:
        "https://images.squarespace-cdn.com/content/v1/607c8d29bab4b20ba4778fa4/53e83c30-86fd-4962-85c3-7be7d8b4b554/Dennis+Paddy.jpg",
    },
    
  ],
  // =====================
  // FOOTER
  // =====================
  footer: {
    about:
      "Safarishape is a coaching-first fitness space that blends strength, conditioning, and mobility so you can move, feel, and live better – not just for one season, but long term.",
    operations: {
      weekday: "Monday – Friday · 5:30am – 10:00pm",
      saturday: "Saturday · 7:00am – 5:00pm",
      sunday: "Sunday & public holidays · 8:00am – 2:00pm",
    },
    address: {
      line1: "City Park Drive, Valley View Office Park",
      line2: "Tower A, 1st Floor, Nairobi, Kenya",
      phone: "+254 700 000 000",
      email: "hello@safarishape.fit",
    },
    social: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://x.com/",
      youtube: "https://youtube.com/",
      tiktok: "https://tiktok.com/",
    },
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
    imageUrl:
      "https://friendsofkarura.org/wp-content/uploads/2025/12/Karura-Forest-Services-Restored.jpg",
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
    imageUrl:
      "https://friendsofkarura.org/wp-content/uploads/2024/09/Running-team_Karura-Forest.jpg",
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
    imageUrl:
      "https://www.broadmooroutfitters.com/wp-content/uploads/2022/07/stephen-leonardi-6E6oMx-69Ns-unsplash-1.jpg",
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
    imageUrl:
      "https://www.broadmooroutfitters.com/wp-content/uploads/2022/07/annie-spratt-JSra0N9uP1s-unsplash-1536x1022.jpg",
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
    imageUrl:
      "https://www.travelyukon.com/sites/default/files/2022-12/_dsc6424.jpg",
  },
]

};
