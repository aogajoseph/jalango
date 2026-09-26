export type SocialLink = {
  label: string;
  href: string;
};

export type Stat = {
  number: string;
  label: string;
};

export type Initiative = {
  category: string;
  title: string;
  description: string;
};

export type Show = {
  number: string;
  category: string;
  title: string;
  description: string;
  linkLabel: string;
  backgroundImage: string;
};

export type MediaItem = {
  number: string;
  category: string;
  title: string;
  image: string;
  alt: string;
  linkLabel: string;
  ariaLabel: string;
  href: string;
};

export type EnquiryOption = {
  value: string;
  label: string;
};

export const site = {
  brand: {
    firstName: "JALANG'O",
    lastName: "MWENYEWE",
    mark: "JM",
    name: "Jalang'o Mwenyewe",
    shortName: "Jalas",
    favicon: "/favicon.svg",
  },

  seo: {
    title: "Jalang'o Mwenyewe — Creative Artist, Public Servant & Entrepreneur",
    description:
      "The official digital home of Mzee Jalang'o Mwenyewe — creative artist, public servant and entrepreneur.",
    url: "https://jalango.com",
    siteName: "Jalang'o Mwenyewe",
    locale: "en_KE",
    type: "website",
    keywords: [
      "Jalang'o",
      "Jalas",
      "Jalang'o Mwenyewe",
      "Papa Shirandula",
      "Bonga na Jalas",
      "Mzee Jalang'o Mwenyewe",
      "Kenyan entertainer",
      "Kenyan content creator",
      "Kenyan entrepreneur",
      "Kenyan comedian",
      "event host",
    ],
    image: {
      src: "/images/og-image.jpg",
      alt: "Jalang'o Mwenyewe",
      width: 1200,
      height: 630,
    },
  },

  navigation: [
    { label: "History", href: "#history" },
    { label: "On Stage", href: "#shows" },
    { label: "Media", href: "#media" },
    { label: "Initiatives", href: "#initiatives" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Creative Artist · Public Servant · Entrepreneur",
    title: {
      before: "More than a",
      middle: "personality.",
      emphasis: "He's a platform.",
    },
    description:
      "Phelix Odiwuor, popularly known as Jalang'o, is a Kenyan creative artist, public servant and entrepreneur whose career spans acting, radio, comedy, digital media, brand partnerships and business. He currently serves as the Member of Parliament for Lang'ata Constituency.",
    primaryAction: {
      label: "Learn More",
      href: "#history",
    },
    secondaryAction: {
      label: "Explore initiatives",
      href: "#initiatives",
    },
    signature: {
      mark: "Jalas",
      text: "Driven by purpose\nCreating Opportunities",
    },
    portrait: {
      src: "/images/jalango.png",
      alt: "Portrait of Jalang'o",
      number: "01",
      label: "Personal brand",
      sideText: "EST. 2007",
    },
  },

  stats: [
    {
      number: "20+",
      label: "Years in the public domain",
    },
    {
      number: "7M+",
      label: "Followers across social media",
    },
    {
      number: "8",
      label: "Corporate brand partnerships",
    },
    {
      number: "5",
      label: "Initiatives in Public service",
    },
  ] satisfies Stat[],

  history: {
    eyebrow: "01 / History",
    title: {
      lines: [
        "A brand built",
        "on possibllities.",
      ],
    },
    paragraphs: [
      "Before the cameras, microphones and public life, Phelix Odiwuor began his journey selling fish in Homa Bay before moving to Nairobi in the early 2000s to pursue entertainment. From the Kenya National Theatre to a breakthrough role in Papa Shirandula, he went from performing on stage to becoming a household name.",
      
      "He later built a successful career in radio while growing his work in comedy, business and digital media. In 2022, he entered public service and was elected Member of Parliament for Lang’ata Constituency. Today, his journey continues across media, business, public service and entrepreneurship."
    ],
    link: {
      label: "Work with Jalang'o",
      href: "#contact",
    },
    images: [
      {
        src: "/images/history.png",
        alt: "Jalang'o on the shores of Ndhiwa beach, Homabay county",
        label: "Humble beginnings",
        number: "01",
      },
      {
        src: "/images/history2.png",
        alt: "Jalang'o in parliament representing the people of Lang'ata",
        label: "Endless possibllities",
        number: "02",
      },
    ],
  },

  shows: {
    eyebrow: "02 / On stage",
    title: "Shows & appearances",
    action: {
      label: "Book Jalang'o",
      href: "#contact",
    },
    cards: [
      {
        number: "01",
        category: "Entertainment",
        title: "Comedy, drama\nand unforgettable moments.",
        description:
          "Jalang’o has spent years creating memorable moments for different audiences.",
        linkLabel: "Watch on Youtube",
        backgroundImage: "/images/entertainment.png",
      },
      {
        number: "02",
        category: "Hosting",
        title: "Confident energy.\nSharp delivery.",
        description:
          "From corporate launches to live conversations and major events, Jalang’o brings presence and personality.",
        linkLabel: "Book Jalang'o",
        backgroundImage: "/images/hosting.png",
      },
    ] satisfies Show[],
  },

  media: {
    eyebrow: "03 / From the archives",
    title: {
      first: "Moments that",
      emphasis: "move people.",
    },
    description:
      "Conversations, appearances and moments that shaped Jalang’o's journey.",
    featured: {
      number: "01",
      category: "Public service",
      title: "Connecting people",
      image: "/images/public-service.png",
      alt: "Jalang'o during a political rally",
      playLabel: "Jalang'o during The Bonga na Jalas podcast",
    },
    items: [
      {
        number: "02",
        category: "Digital Media",
        title: "Jalang'o TV",
        image: "/images/bonga-na-jalas.png",
        alt: "Jalang'o during The Bonga na Jalas podcast",
        linkLabel: "Explore",
        ariaLabel: "Watch Bonga na Jalas on YouTube",
        href: "https://www.youtube.com/@jalangotv1447",
      },
      {
        number: "03",
        category: "Entrepreneurship",
        title: "Arena Media",
        image: "/images/entrepreneurship.png",
        alt: "Jalang'o signing a corporate deal",
        linkLabel: "Explore",
        ariaLabel: "Learn more about Arena Media",
        href: "#",
      },
    ] satisfies MediaItem[],
  },

  initiatives: {
    eyebrow: "04 / Beyond entertainment",
    title: "Featured Initiatives",
    description:
      "Ideas, partnerships and community efforts shaping Jalang’o’s work beyond entertainment.",
    items: [
      {
        category: "Community Health",
        title: "Lang'ata Medical Camps",
        description:
          "A community health initiative providing free checkups, medicines, surgeries and transport for Lang'ata residents.",
      },
      {
        category: "Water Access",
        title: "20 Boreholes for Lang'ata",
        description:
          "A partnership initiative announced to expand access to water across communities in Lang'ata.",
      },
      {
        category: "Youth Opportunities",
        title: "Lang’ata Youth Employment",
        description:
          "An initiative aimed at reserving 50% of opportunities at events, advertising and creative productions in Lang’ata for young people from the constituency.",
      },
    ] satisfies Initiative[],
  },

  contact: {
    eyebrow: "05 / Work with Jalang'o",
    title: {
      first: "Let’s make",
      emphasis: "something happen",
    },
    description:
      "From events and brand partnerships to media, appearances, collaborations and community initiatives, connect with Jalang’o and let’s build something meaningful.",
    email: "info@jalango.com",
    availabilityLabel: "Available for",
    availability:
      "Event bookings · Brand partnerships · Media Appearances · Creative collaborations · Community initiatives",

    form: {
      headingNumber: "01 / Work with Jalang'o",
      heading: "Start a conversation.",
      formspreeEndpoint: "https://formspree.io/f/xoevwzra",
      subject: "New enquiry from Jalang'o's website",

      fields: {
        name: {
          label: "Your name",
          placeholder: "Full name",
        },
        email: {
          label: "Email address",
          placeholder: "you@example.com",
        },
        phone: {
          label: "Phone number",
          placeholder: "+254 7XX XXX XXX",
        },
        enquiryType: {
          label: "Select",
          placeholder: "Select an option",
          options: [
            {
              value: "Event Booking",
              label: "Event booking",
            },
            {
              value: "Brand Partnership",
              label: "Brand partnership",
            },
            {
              value: "Media Appearance",
              label: "Media appearance",
            },
            {
              value: "Creative Collaboration",
              label: "Creative collaboration",
            },
            {
              value: "Community Initiative",
              label: "Community initiative",
            },
            {
              value: "Other",
              label: "Other",
            },
          ] satisfies EnquiryOption[],
        },
        bookingDate: {
          label: "Event date",
        },
        location: {
          label: "Location",
          placeholder: "Nairobi, Kenya",
        },
        message: {
          label: "Tell us more",
          placeholder: "Share the details of your request...",
        },
      },

      submitLabel: "Submit",
      submittingLabel: "Sending...",
      successMessage:
        "Enquiry sent successfully. We'll be in touch shortly.",
      errorMessage:
        "Something went wrong. Please try again or email us directly.",
    },
  },

  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/jalangoo/",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@jalangotv1447",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/MzeeJalangoMwenyewe",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@jalangoo",
    },
  ] satisfies SocialLink[],

  footer: {
    copyrightName: "Jalang'o Mwenyewe",
  },
} as const;