/**
 * CENTRALIZED WEDDING CONFIGURATION
 * Updated for Gulishta & Asif
 */

export const weddingData = {
  couple: {
    bride: "Gulishta",
    groom: "Asif",
    monogram: "G & A",
    brideInitial: "G",
    groomInitial: "A",
  },

  islamicBlessing: {
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    urduShayariLine1: "محبتوں کے سفر میں خدا کا ساتھ رہے، سرِ نیاز ہمیشہ دعا کے ساتھ رہے",
    urduShayariLine2: "خوشی کے پھول کھلیں زندگی کی راہوں میں، یہ جشنِ عقد مبارک، وفا کے ساتھ رہے",
    urduDawatLine: "آپ کی محبت بھری شرکت اور نیک دعاؤں کے طالب",
  },

  date: {
    displayDots: "27.05.2027",
    displayFull: "27 May 2027",
    isoTarget: "2027-05-27T16:30:00+02:00",
    rsvpDeadline: "May 1, 2027",
    weddingTime: "4:30 PM",
  },

  venue: {
    name: "Taj Palace",
    address: "CITY CENTRE, PATNA",
    fullStreetAddress: "City Centre Mall, Opposite Lodipur Fire Station, Patna",
    mapsUrl: "",
    descriptionParagraphs: [
      "Set in the heart of Patna, Taj Palace City Center will be the perfect setting for our celebration, offering an elegant atmosphere, luxurious surroundings and warm hospitality.",
      "We recommend arriving a little early to settle in, enjoy the beautiful surroundings and make the most of the moments before the celebration begins.",
    ],
  },

  invitationText: {
    leadIn: "Together with their families",
    body: "Asif & Gulishta request the pleasure of your company as they celebrate their marriage and begin this new chapter surrounded by the people they love most.",
  },

  timeline: {
    title: "The Day",
    subtitle: "A day to celebrate,\nfrom the first hello to the last dance.",
    events: [
      {
        time: "4:30 PM",
        title: "WELCOME",
        description: "Arrival of guests at the villa gardens, with drinks and hugs to greet us.",
        iconType: "fountain",
      },
      {
        time: "5:00 PM",
        title: "CEREMONY",
        description: "We say “I do” in the gardens, overlooking the lake at sunset.",
        iconType: "rings",
      },
      {
        time: "6:00 PM",
        title: "COCKTAIL HOUR",
        description: "Aperitivo on the terrace while the photographers capture the moment.",
        iconType: "coupes",
      },
      {
        time: "8:00 PM",
        title: "DINNER",
        description: "A long, joyful dinner under the stars, filled with toasts and laughter.",
        iconType: "plate",
      },
      {
        time: "10:30 PM",
        title: "DANCING",
        description: "The party begins — music, dancing and celebration until late.",
        iconType: "dancers",
      },
    ],
  },

  dressCode: {
    title: "Dress Code",
    subtitle: "Formal Attire",
    description:
      "We’d love for our guests to embrace the occasion with elegant evening attire. Dress beautifully, feel comfortable and come ready to celebrate with us.",
  },

  transportation: {
    title: "Transportation",
    paragraphs: [
      "We want getting to and from the celebration to be as easy as possible.",
      "A private bus will depart at 4:00 PM from Piazza della Repubblica, taking guests directly to Villa Aurelia with plenty of time to settle in before the ceremony.",
      "At the end of the evening, return transportation to central Rome will also be provided.",
    ],
    buttonText: "VIEW PICK-UP POINT",
    pickupMapUrl: "",
    pickupPointDetails: {
      locationName: "Piazza della Repubblica, Rome",
      departureTime: "4:00 PM",
      notes: "Private wedding shuttle bus waiting near the central fountain.",
    },
  },

  accommodations: {
    title: "Where to Stay",
    subtitle:
      "For those joining us from out of town, we’ve selected two beautiful places to stay close to Villa Aurelia.",
    hotels: [
      {
        id: "hotel-gianicolo",
        numeral: "I",
        name: "Grand Hotel del Gianicolo",
        recommendedStay: "19 – 21 May 2027",
        guestRateCode: 'Code “GULISHTA & ASIF”',
        discountCode: "GULISHTA & ASIF",
        parking: "Parking available on site",
        description:
          "Just moments from the venue, offering an elegant and convenient stay surrounded by the greenery of the Gianicolo.",
        bookingUrl: "",
      },
      {
        id: "hotel-savelli",
        numeral: "II",
        name: "Donna Camilla Savelli",
        recommendedStay: "19 – 21 May 2027",
        guestRateCode: 'Code “GULISHTA & ASIF”',
        discountCode: "GULISHTA & ASIF",
        parking: "Parking available on site",
        description:
          "A charming historic hotel in Trastevere, combining Roman character with a peaceful and refined atmosphere.",
        bookingUrl: "",
      },
    ],
  },

  gift: {
    title: "Wedding Gift",
    headline: "Your presence is\nour greatest gift.",
    description:
      "Should you wish to give a gift, you may do so in cash or by bank transfer.",
    iban: "IBAN IT60 X054 2811 1010 0000 0123 456",
  },

  rsvp: {
    title: "RSVP",
    description:
      "Nothing would make us happier than celebrating this day surrounded by our favourite people. Please let us know whether you’ll be able to join us by May 1, 2027.",
    contactInfo: "rsvp@gulishtaasif.com",
    apiEndpoint: "",
  },

  footer: {
    message: "We can’t wait to celebrate with you.",
    signOff: "With love,",
    creditText: "Made with ❤️ by",
    creditBrand: "Kashif Ali",
    creditUrl: "#top",
  },

  assets: {
    music: "/assets/music.mp3",
    paperTexture: "/assets/paper-bg.jpg",
  },
};