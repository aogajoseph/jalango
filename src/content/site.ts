export type SocialLink = {
  label: string;
  href: string;
};

export type Stat = {
  number: string;
  label: string;
};

export type Project = {
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
    { label: "Shows", href: "#shows" },
    { label: "Media", href: "#media" },
    { label: "Projects", href: "#projects" },
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
      "Felix Odiwuor, popularly known as Jalang'o, is a Kenyan creative artist, public servant and entrepreneur whose career spans acting, radio, comedy, digital media, brand partnerships and business. He currently serves as the Member of Parliament for Lang'ata Constituency.",
    primaryAction: {
      label: "Work with Jalang'o",
      href: "#contact",
    },
    secondaryAction: {
      label: "Explore his projects",
      href: "#projects",
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
      number: "5",
      label: "Corporate brand partnerships",
    },
    {
      number: "3",
      label: "Initiatives in Public service",
    },
  ] satisfies Stat[],

  history: {
    eyebrow: "01 / History",
    title: {
      lines: [
        "A personal brand",
        "with Endless",
        "possibllities.",
      ],
    },
    paragraphs: [
      "Jalang'o started off as a fish seller in the shores of Ndhiwa beach in Homabay county. He moved to Nairobi in the early 2000s and joined the Nairobi drama as a comedian. He got a role to play in Papa Shirandula a famous Kenyan TV show which made him a sensational public figure.",
      "This propelled him to Kiss FM, where he worked as a presenter, while building his personal ventures on the side. He launched his political career in 2022 and now serves as the honourable member of parliament for Lang'ata constituency.",
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
    eyebrow: "On stage",
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
          "He has featured in Papa Shirandula, this, this, that and countless other entertaiing shows.",
        linkLabel: "Watch on Youtube",
        backgroundImage: "/images/show.png",
      },
      {
        number: "02",
        category: "Hosting",
        title: "Confident energy.\nSharp delivery.",
        description:
          "Jalang'o hosts professional events, covering launches, conversations, advertising and more.",
        linkLabel: "Book Jalang'o",
        backgroundImage: "/images/hosting.png",
      },
    ] satisfies Show[],
  },

  media: {
    eyebrow: "From the archives",
    title: {
      first: "Moments that",
      emphasis: "move people.",
    },
    description:
      "Selected moments, conversations and creative projects from Jalang'o's journey.",
    featured: {
      number: "01",
      category: "Personal Conversations",
      title: "Bonga na Jalas",
      image: "/images/media-feature.png",
      alt: "Jalang'o during The Bonga na Jalas podcast",
      playLabel: "Play featured video",
    },
    items: [
      {
        number: "02",
        category: "Behind the scenes",
        title: "Behind the Laughs",
        image: "/images/media-behind.png",
        alt: "Behind the scenes with Darmian Kingston",
        linkLabel: "Explore story",
        ariaLabel: "Play Behind the Laughs video",
      },
      {
        number: "03",
        category: "Live performance",
        title: "The Darmian Experience",
        image: "/images/media-live.png",
        alt: "Darmian Kingston performing live",
        linkLabel: "View performance",
        ariaLabel: "Play The Darmian Experience video",
      },
    ] satisfies MediaItem[],
  },

  projects: {
    eyebrow: "Beyond entertainment",
    title: "Featured projects",
    description:
      "Creative works and experiences structured to connect with communities and bring a positive impact.",
    items: [
      {
        category: "Live Show",
        title: "The Darmian Experience",
        description:
          "A high-energy live entertainment experience built around comedy, conversation and culture.",
      },
      {
        category: "Podcast",
        title: "The Kingston Sessions",
        description:
          "Unfiltered conversations with creators, innovators and extraordinary personalities.",
      },
      {
        category: "Documentary",
        title: "Behind the Laughs",
        description:
          "A closer look at the stories, people and moments behind the public persona.",
      },
    ] satisfies Project[],
  },

  contact: {
    eyebrow: "Work with Jalang'o",
    title: {
      first: "Bring your",
      emphasis: "vision to life.",
    },
    description:
      "From live performances, brand partnerships and media collaborations to public service, work with Jalang'o to create something meaningful.",
    email: "info@jalango.com",
    availabilityLabel: "Available for",
    availability:
      "Event bookings · Barand partnerships · Media collaborations",

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
          label: "Enquiry type",
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
          placeholder: "Share the details of your enquiry...",
        },
      },

      submitLabel: "Send enquiry",
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
      href: "#",
    },
    {
      label: "YouTube",
      href: "#",
    },
    {
      label: "Facebook",
      href: "#",
    },
    {
      label: "TikTok",
      href: "#",
    },
  ] satisfies SocialLink[],

  footer: {
    copyrightName: "Darmian Kingston",
  },
} as const;