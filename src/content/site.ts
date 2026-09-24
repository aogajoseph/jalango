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
    firstName: "DARMIAN",
    lastName: "KINGSTON",
    mark: "DK",
    name: "Darmian Kingston",
    shortName: "DK",
    favicon: "/favicon.svg",
  },

  seo: {
    title: "Darmian Kingston — Entertainer, Creator & Entrepreneur",
    description:
      "The official digital home of Darmian Kingston — entertainer, creator and entrepreneur.",
    url: "https://darmiankingston.com",
    siteName: "Darmian Kingston",
    locale: "en_KE",
    type: "website",
    keywords: [
      "Darmian Kingston",
      "Kenyan entertainer",
      "Kenyan creator",
      "Kenyan entrepreneur",
      "Kenyan comedian",
      "event host",
    ],
    image: {
      src: "/images/og-image.jpg",
      alt: "Darmian Kingston",
      width: 1200,
      height: 630,
    },
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Shows", href: "#shows" },
    { label: "Media", href: "#media" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Entertainer · Creator · Entrepreneur",
    title: {
      before: "More than",
      middle: "entertainment.",
      emphasis: "It's a movement.",
    },
    description:
      "The official digital home of Darmian Kingston. A storyteller, entertainer and creative force building experiences that connect, inspire and leave a lasting impression.",
    primaryAction: {
      label: "Book Darmian",
      href: "#contact",
    },
    secondaryAction: {
      label: "Explore projects",
      href: "#projects",
    },
    signature: {
      mark: "DK",
      text: "Creating impact\nbeyond the spotlight.",
    },
    portrait: {
      src: "/images/dk.png",
      alt: "Portrait of Darmian Kingston",
      number: "01",
      label: "Personal brand",
      sideText: "EST. 2026",
    },
  },

  stats: [
    {
      number: "10+",
      label: "Years in entertainment",
    },
    {
      number: "500+",
      label: "Shows performed",
    },
    {
      number: "1M+",
      label: "Audience across platforms",
    },
    {
      number: "Global",
      label: "Audience and growing",
    },
  ] satisfies Stat[],

  about: {
    eyebrow: "01 / About",
    title: {
      lines: [
        "A personal brand",
        "with something",
        "to say.",
      ],
    },
    paragraphs: [
      "Darmian Kingston is an entertainer, creator and entrepreneur building experiences that connect people, challenge perspectives and leave a lasting impression.",
      "From the stage to the screen, every project is an opportunity to turn attention into meaningful impact.",
    ],
    link: {
      label: "Discover the story",
      href: "#contact",
    },
    images: [
      {
        src: "/images/about.png",
        alt: "Darmian Kingston performing on stage",
        label: "Live performance",
        number: "01",
      },
      {
        src: "/images/about2.png",
        alt: "Darmian Kingston during a podcast conversation",
        label: "The conversation",
        number: "02",
      },
    ],
  },

  shows: {
    eyebrow: "On stage",
    title: "Shows & appearances",
    action: {
      label: "Request booking",
      href: "#contact",
    },
    cards: [
      {
        number: "01",
        category: "Entertainment",
        title: "Comedy, connection\nand unforgettable nights.",
        description:
          "Built for audiences, brands, festivals and private experiences.",
        linkLabel: "Explore live entertainment",
        backgroundImage: "/images/show.png",
      },
      {
        number: "02",
        category: "Hosting",
        title: "Confident energy.\nSharp delivery.",
        description:
          "Professional hosting for launches, events and conversations.",
        linkLabel: "Explore hosting",
        backgroundImage: "/images/hosting.png",
      },
    ] satisfies Show[],
  },

  media: {
    eyebrow: "From the archive",
    title: {
      first: "Moments that",
      emphasis: "move people.",
    },
    description:
      "Explore selected moments, conversations and creative projects from Darmian Kingston's journey.",
    featured: {
      number: "01",
      category: "Featured film",
      title: "The Kingston Sessions",
      image: "/images/media-feature.png",
      alt: "Darmian Kingston during The Kingston Sessions",
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
    eyebrow: "Beyond the stage",
    title: "Featured projects",
    description:
      "Creative work, original formats and experiences built to connect with audiences beyond the spotlight.",
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
    eyebrow: "Let's work together",
    title: {
      first: "Bring the",
      emphasis: "vision to life.",
    },
    description:
      "From live performances and brand partnerships to media collaborations, let's create something meaningful.",
    email: "hello@darmiankingston.com",
    availabilityLabel: "Availability",
    availability:
      "Bookings · Partnerships · Collaborations",

    form: {
      headingNumber: "01 / Enquiry",
      heading: "Start a conversation.",
      formspreeEndpoint: "https://formspree.io/f/xoevwzra",
      subject: "New enquiry from Darmian Kingston website",

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