export const initialSiteData = {
  home: {
    heroTitle: "Coaching that respects your life and your season.",
    heroSubtitle:
      "Strength, conditioning, and engine work that link together inside one bigger plan. No guesswork – just clear next steps every week.",
    primaryCta: "Start your free week",
    secondaryCta: "View programs",

    stats: [
      {
        label: "Members training",
        value: "120+",
      },
      {
        label: "Sessions / week",
        value: "40+",
      },
      {
        label: "Avg. check-ins",
        value: "3x",
      },
    ],

    // --- HERO CAROUSEL SLIDES ---
    // Put these images in: public/images/...
    heroSlides: [
      {
        id: "strength-track",
        label: "Strength • Conditioning",
        caption: "Full-body strength and engine work in one place.",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/607c8d29bab4b20ba4778fa4/1753882556440-UF0KY1CQV1MXDLC1BDWO/Final.jpg?format=1500w",
      },
      {
        id: "community-track",
        label: "Community • Coaching",
        caption: "Coaches and teammates who keep you moving.",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/607c8d29bab4b20ba4778fa4/7fb4e031-9e01-44d4-884f-c856912e0893/PSP_7041-Edit-Edit.jpg?format=1500w",
  
      },
      {
        id: "engine-track",
        label: "Engine • Longevity",
        caption: "Cardio blocks that build capacity without breaking you.",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/607c8d29bab4b20ba4778fa4/b1a354aa-ba54-4760-9086-67ab4ce9e0f5/30th+November.jpg?format=1500w",
      },
    ],
    // New: BMI section image editable from dashboard
    bmiImageUrl:
      "https://images.squarespace-cdn.com/content/v1/607c8d29bab4b20ba4778fa4/ccc1e2ed-d2b3-41c7-b91b-367c2987066b/PSP_7711-Edit+%282%29.jpg?format=2500w",
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
      priceMonthly: 29,
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
      priceMonthly: 79,
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
      priceMonthly: 129,
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
};
