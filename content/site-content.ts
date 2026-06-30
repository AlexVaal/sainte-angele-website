import { itContent } from "@/content/site-content-it";

// Content lives in one place so the site can be updated later without changing the UI components.
export const siteContent = {
  en: {
    site: {
      name: "Église Sainte-Angèle",
      address: "5275 Boulevard Lavoisier, Montréal, Québec",
      phone: "514-321-3644",
      email: "angelemerici@videotron.ca",
      officeHours: "Monday: 1:00 PM – 5:00 PM\nTuesday: 1:00 PM – 5:00 PM\nThursday: 1:00 PM – 5:00 PM",
      nextGathering: {
        day: "Sunday Masses",
        time: "9:00 AM (Italian) • 11:00 AM (French)",
      },
    },
    common: {
      donateNow: "Donate",
      planVisit: "Plan a visit",
      learnMore: "Learn more",
      volunteerNow: "Volunteer",
      contactTeam: "Contact the team",
      viewAllEvents: "View all events",
      exploreSermons: "See service times",
      nextGathering: "Next gathering",
    },
    navigation: [
      { href: "", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/hall-rental", label: "Hall Rental" },
      { href: "/team", label: "Parish Team" },
      { href: "/events", label: "Events" },
      { href: "/sermons", label: "Sermons" },
      { href: "/volunteer", label: "Volunteer" },
      { href: "/donate", label: "Donate" },
      { href: "/contact", label: "Contact" },
    ],
    footer: {
      description:
        "Église Sainte-Angèle is a warm Roman Catholic parish in Saint-Léonard where worship, prayer, and community life are shared in a calm and welcoming atmosphere.",
      contactHeading: "Contact",
      linksHeading: "Explore",
      links: [
        { href: "/about", label: "Church history" },
        { href: "/hall-rental", label: "Hall rental" },
        { href: "/events", label: "Upcoming events" },
        { href: "/sermons", label: "Mass schedule" },
        { href: "/contact", label: "Visit the parish" },
      ],
    },
    home: {
      hero: {
        eyebrow: "Roman Catholic parish in Saint-Leonard",
        description:
          "Église Sainte-Angèle welcomes parishioners, neighbors, and visitors into a peaceful place of prayer, worship, and community life. Join us for Mass, reflection, and a warm parish presence rooted in faith.",
        panelTitle: "Mass schedule",
        image: {
          src: "/home/hero-church.jpg",
          alt: "Church interior at Sainte-Angèle Parish",
        },
        actions: [
          { href: "/about", label: "Discover the parish", variant: "primary" },
          { href: "/events", label: "Upcoming events", variant: "secondary" },
          { href: "/contact", label: "Contact the parish", variant: "secondary" },
        ],
      },
      sections: {
        eyebrow: "Explore",
        title: "Find your place in the life of the parish",
        description:
          "Explore parish life, upcoming events, Mass times, and practical information for visiting Sainte-Angèle.",
        cards: [
          {
            href: "/about",
            title: "About",
            description: "Read the history of Sainte-Angèle and learn more about the life of the parish.",
            image: {
              src: "/home/about-thumb.jpg",
              alt: "Warm view of the Sainte-Angèle church interior",
            },
          },
          {
            href: "/events",
            title: "Events",
            description: "See upcoming parish activities and the latest notices prepared for the community.",
            image: {
              src: "/home/events-thumb.jpg",
              alt: "Parish gathering space prepared for a community event",
            },
          },
          {
            href: "/sermons",
            title: "Service Times",
            description: "Find the weekly Mass schedule in Italian and French in one clear place.",
            image: {
              src: "/home/service-thumb.jpg",
              alt: "Altar and liturgical setting at Sainte-Angèle Parish",
            },
          },
          {
            href: "/contact",
            title: "Contact",
            description: "Find the church address, phone number, and practical details for your next visit.",
            image: {
              src: "/home/contact-thumb.jpg",
              alt: "Exterior entrance area of Sainte-Angèle Parish",
            },
          },
        ],
      },
      events: {
        eyebrow: "Upcoming events",
        title: "Featured Parish Gatherings",
        description: "",
        featured: {
          eyebrow: "Featured event",
          title: "Fête de Marie",
          date: "Saturday, August 15, 2026",
          time: "To be confirmed",
          description:
            "Join us as we celebrate the Feast of Mary with prayer, community, and a special Marian procession. All parishioners and visitors are welcome.",
          cta: "Open the events page",
          image: {
            src: "/home/featured-event-mary.jpg",
            alt: "Parish celebration image for the featured event",
          },
        },
      },
      schedule: {
        eyebrow: "Mass schedule",
        title: "Weekly Masses and Service Times",
        description: "",
      },
      volunteer: {
        eyebrow: "Serve together",
        title: "Volunteer and Help the Community",
        description:
          "Parishioners can contribute through music, hospitality, fundraising, community gatherings, outreach, and other forms of service throughout the year.",
      },
      donate: {
        eyebrow: "Give with purpose",
        title: "Support worship, outreach, and care in the community",
        description:
          "Support parish life, charitable outreach, community activities, and the ongoing mission of Sainte-Angèle Parish.",
      },
    },
    about: {
      eyebrow: "About Sainte-Angèle",
      title: "A parish rooted in prayer, memory, and faithful service",
      description:
        "Sainte-Angèle Parish has served the Saint-Léonard community since 1962. Through prayer, Mass, community events, volunteer activities, and charitable initiatives, the parish continues to welcome people of all ages and backgrounds.",
      story: {
        eyebrow: "Church history",
        title: "A parish presence in Saint-Leonard since 1962",
        description: "",
        image: {
          src: "/home/about-thumb.jpg",
          alt: "Parish gathering space at Sainte-Angèle",
        },
        paragraphs: [
          "Founded in 1962 by Cardinal Paul-Émile Léger, Sainte-Angèle Parish was established to serve the growing Catholic community of Saint-Léonard. The church building was completed in the late 1960s and remains an important spiritual and community gathering place today.",
        ],
      },
      values: [
        {
          eyebrow: "Faith",
          title: "Prayer and Worship",
          description:
            "Mass, prayer, and the liturgical life of the Church remain at the heart of Sainte-Angèle Parish throughout the year.",
        },
        {
          eyebrow: "Community",
          title: "An Active Parish Community",
          description:
            "Parish dinners, fundraising events, seasonal celebrations, volunteer work, charitable initiatives, and community gatherings continue to bring parishioners together in a welcoming and practical way.",
        },
        {
          eyebrow: "Service",
          title: "Faith, Service and Community",
          description:
            "Parish life extends beyond Mass through volunteer involvement, community dinners, fundraising activities, outreach, and seasonal celebrations that bring people together.",
        },
      ],
      expect: {
        eyebrow: "Plan your visit",
        title: "What visitors can expect",
        description: "",
        items: [
          {
            eyebrow: "Arrival",
            title: "A peaceful welcome",
            description:
              "Visitors are welcomed into a calm church setting designed for prayer, reflection, and a sense of belonging.",
          },
          {
            eyebrow: "Languages",
            title: "Italian and French Masses",
            description:
              "The parish offers regular Mass times in both Italian and French throughout the week and on weekends.",
          },
          {
            eyebrow: "Community life",
            title: "A living parish rhythm",
            description:
              "Parish events, volunteer service, community dinners, and seasonal celebrations help shape a welcoming church community.",
          },
        ],
      },
    },
    teamPage: {
      eyebrow: "Parish leadership",
      title: "Parish Team",
      description:
        "Meet the people who help serve and support the Sainte-Angèle parish community.",
      placeholderLabel: "Photo coming soon",
      sections: [
        {
          id: "clergy",
          eyebrow: "Clergy",
          title: "Clergy",
          description: "The priest who serves the parish in worship, pastoral care, and community life.",
          members: [
            {
              name: "Father Aleksander Dudik",
              role: "Priest",
              photo: "/team/father-aleksander-dudik.jpg",
            },
          ],
        },
        {
          id: "administration",
          eyebrow: "Administration",
          title: "Administration",
          description: "The parish staff members who help support daily communication, stewardship, and office life.",
          members: [
            {
              name: "Sylvie Selesse",
              role: "Secretary",
              photo: "/team/placeholder.jpg",
            },
            {
              name: "Andrea Manganelli",
              role: "Treasurer",
              photo: "/team/placeholder.jpg",
            },
          ],
        },
        {
          id: "council",
          eyebrow: "Parish and Pastoral Council",
          title: "Parish and Pastoral Council",
          description: "Leadership members who help guide parish planning, mission, and pastoral life.",
          members: [
            {
              name: "Maria Pia DeLuca",
              role: "Parish Councillor",
              photo: "/team/placeholder.jpg",
            },
            {
              name: "Lina Saracino",
              role: "Pastoral Councillor",
              photo: "/team/placeholder.jpg",
            },
          ],
        },
        {
          id: "wardens",
          eyebrow: "Church Wardens",
          title: "Church Wardens",
          description: "Wardens who help support the practical and financial stewardship of the parish community.",
          members: [
            {
              name: "Carmela Pepe",
              role: "Church Warden",
              photo: "/team/carmela-pepe.jpg",
            },
            {
              name: "Angelina Romano",
              role: "Church Warden",
              photo: "/team/placeholder.jpg",
            },
            {
              name: "Lucie Corrente",
              role: "Church Warden",
              photo: "/team/lucie-corrente.jpg",
            },
            {
              name: "Amide Fidèle",
              role: "Church Warden",
              photo: "/team/placeholder.jpg",
            },
            {
              name: "Nick Sbarra",
              role: "Church Warden",
              photo: "/team/nick-sbarra.jpg",
            },
            {
              name: "Vincent Poulin",
              role: "Church Warden",
              photo: "/team/placeholder.jpg",
            },
          ],
        },
        {
          id: "ministries",
          eyebrow: "Ministries",
          title: "Ministries",
          description: "Key ministry leaders who enrich worship and parish participation throughout the year.",
          members: [
            {
              name: "Jacquelin Deranne",
              role: "Choir Director",
              photo: "/team/placeholder.jpg",
            },
          ],
        },
      ],
    },
    hallRentalPage: {
      eyebrow: "Parish hall",
      title: "Hall Rental",
      description:
        "Sainte-Angèle Parish offers a church hall that can be rented for private and community gatherings.",
      heroNote: "Available for private and community gatherings",
      placeholderLabel: "Hall photos coming soon",
      heroImage: {
        src: "/hall/hall-1.jpg",
        alt: "Sainte-Angèle parish hall",
      },
      gallery: [
        {
          src: "/hall/hall-1.jpg",
          alt: "Wide view of the Sainte-Angèle parish hall",
        },
        {
          src: "/hall/hall-2.jpg",
          alt: "Event setup inside the Sainte-Angèle parish hall",
        },
        {
          src: "/hall/hall-3.jpg",
          alt: "Bright seating area in the Sainte-Angèle parish hall",
        },
        {
          src: "/hall/hall-4.jpg",
          alt: "Additional view of the Sainte-Angèle parish hall",
        },
        {
          src: "/hall/hall-5.jpg",
          alt: "Hall setup for gatherings at Sainte-Angèle",
        },
      ],
      cards: {
        capacity: {
          eyebrow: "Capacity",
          title: "Up to 100 people",
          description: "The hall can accommodate up to 100 people.",
        },
        suitable: {
          eyebrow: "Suitable for",
          title: "Private and community gatherings",
          description:
            "The hall is available for birthdays, baptisms, family gatherings, community events, and other parish-approved gatherings.",
          items: [
            "Birthdays",
            "Baptisms",
            "Family gatherings",
            "Community events",
            "Other parish-approved gatherings",
          ],
        },
        contact: {
          eyebrow: "Contact",
          title: "Reservations and information",
          description:
            "For availability, pricing, and reservation details, please contact the parish office.",
          phoneLabel: "Phone",
          phone: "514-321-3644",
        },
      },
      features: {
        eyebrow: "Hall Features",
        title: "Hall Features",
        items: [
          "Capacity: Up to 100 guests",
          "Tables and chairs available",
          "Stage area available",
          "Bright room with large windows",
          "Suitable for birthdays, baptisms, family gatherings, community events and celebrations",
        ],
      },
      photosSection: {
        eyebrow: "Gallery",
        title: "Hall gallery",
        description: "",
      },
      cta: {
        eyebrow: "Contact",
        title: "Hall Rental Information",
        description:
          "Interested in renting the parish hall for your next event? Contact the parish office for availability and pricing.",
        phone: "514-321-3644",
      },
    },
    events: [
      {
        title: "Fête de Marie",
        date: "Saturday, August 15, 2026",
        time: "To be confirmed",
        location: "Église Sainte-Angèle",
        description:
          "Join us as we celebrate the Feast of Mary with prayer, community, and a special Marian procession. All parishioners and visitors are welcome.",
        notes: [],
      },
      {
        title: "Parish Garage Sale",
        date: "To be confirmed",
        time: "To be confirmed",
        location: "Église Sainte-Angèle",
        description: "Upcoming parish garage sale. More details to come.",
        notes: [],
      },
    ],
    eventsPage: {
      eyebrow: "Parish events",
      title: "Parish events and activities",
      description: "Find upcoming parish activities, celebrations, and community gatherings at Sainte-Angèle.",
      calendar: {
        eyebrow: "Upcoming schedule",
        title: "Parish Activities",
        description: "",
      },
      labels: {
        date: "Date",
        time: "Time",
        location: "Location",
        notes: "Notes / confirmations",
      },
    },
    schedule: [
      {
        name: "Sunday Mass",
        time: "Sunday — 9:00 AM",
        description: "Italian",
      },
      {
        name: "Sunday Mass",
        time: "Sunday — 11:00 AM",
        description: "French",
      },
      {
        name: "Weekday Mass",
        time: "Monday — 7:00 PM",
        description: "Italian",
      },
      {
        name: "Weekday Mass",
        time: "Tuesday — 8:30 AM",
        description: "French",
      },
      {
        name: "Weekday Mass",
        time: "Wednesday — 7:00 PM",
        description: "Italian",
      },
      {
        name: "Weekday Mass",
        time: "Thursday — 8:30 AM",
        description: "French",
      },
      {
        name: "Weekday Mass",
        time: "Friday — 8:30 AM",
        description: "Italian",
      },
      {
        name: "Vigil Mass",
        time: "Saturday — 4:00 PM",
        description: "Italian",
      },
      {
        name: "Vigil Mass",
        time: "Saturday — 5:00 PM",
        description: "French",
      },
    ],
    sermons: {
      eyebrow: "Mass times and worship",
      title: "Weekly Mass schedule",
      description: "",
      schedule: {
        eyebrow: "Weekly rhythm",
        title: "Current service schedule",
        description:
          "The schedule below reflects the current weekly Mass times in Italian and French at Sainte-Angèle.",
      },
    },
    volunteerRoles: [
      {
        title: "Event and fundraiser support",
        commitment: "Seasonal and ongoing",
        description: "Help prepare and support parish events, fundraising activities, and special community gatherings throughout the year.",
        detail: "A practical role for volunteers who enjoy helping behind the scenes.",
      },
      {
        title: "Choir and music",
        commitment: "Weekly or seasonal",
        description: "Support liturgical celebrations, feast days, and parish gatherings through singing, music, and choir service.",
        detail: "Welcoming to experienced musicians and new volunteers alike.",
      },
      {
        title: "Altar and liturgy support",
        commitment: "Scheduled rotation",
        description: "Assist with altar preparation, readings, prayer, and other practical needs connected to parish liturgies and celebrations.",
        detail: "A thoughtful way to serve the prayer life of the parish.",
      },
      {
        title: "Hospitality and parish gatherings",
        commitment: "Flexible",
        description: "Help welcome parishioners, organize refreshments, and support parish dinners, receptions, and community gatherings.",
        detail: "Well suited for warm and dependable helpers.",
      },
      {
        title: "Community support",
        commitment: "Monthly",
        description: "Offer practical support for parish needs, charitable efforts, and activities that strengthen the wider community.",
        detail: "A meaningful opportunity for service-minded parishioners.",
      },
    ],
    volunteerPage: {
      eyebrow: "Serve with us",
      title: "Volunteer in parish life at Sainte-Angèle",
      description:
        "Volunteers help support parish life, community events, fundraising activities, liturgical celebrations, choir and music, and the practical needs of Sainte-Angèle Parish.",
      primaryCta: "Contact Maria Pia",
      roles: {
        eyebrow: "Volunteer opportunities",
        title: "Ways to help in the parish",
        description: "Discover some of the practical ways volunteers help support worship, community life, and parish activities.",
      },
      contact: {
        eyebrow: "Volunteer Coordinator",
        title: "Volunteer Coordinator",
        description:
          "Interested in volunteering with Sainte-Angèle Parish? Volunteers help with parish events, community dinners, fundraising activities, hospitality, and other community initiatives throughout the year. Contact Maria Pia DeLuca for more information and current volunteer opportunities.",
        name: "Maria Pia DeLuca",
        phoneLabel: "Phone",
        phone: "514-323-9092",
        languagesLabel: "Languages",
        languages: "French, Italian",
      },
    },
    donate: {
      eyebrow: "Online giving",
      title: "Support Sainte-Angèle Parish",
      description:
        "Your generosity helps support parish life, liturgical celebrations, community activities, charitable outreach, and the ongoing care of our church facilities.",
      primaryCta: "Donate Through CanadaHelps",
      canadaHelpsUrl:
        "https://www.canadahelps.org/en/charities/fabrique-de-la-paroisse-de-ste-angele-de-merici-archidiocese/",
      support: {
        eyebrow: "Why Your Support Matters",
        title: "Why Your Support Matters",
        description: "",
        items: [
          {
            eyebrow: "Parish life",
            title: "Parish Life",
            description: "Donations help sustain liturgical celebrations, prayer, music, hospitality, and the daily life of the parish community.",
          },
          {
            eyebrow: "Community events",
            title: "Community Events",
            description: "Your support helps make possible parish dinners, seasonal celebrations, gatherings, and other activities that bring people together.",
          },
          {
            eyebrow: "Church maintenance",
            title: "Church Maintenance",
            description: "Gifts also help care for our church building and parish spaces so they remain welcoming, safe, and well maintained.",
          },
        ],
      },
      online: {
        eyebrow: "Online Donation",
        title: "Give securely through CanadaHelps",
        description:
          "Online donations to Sainte-Angèle Parish are securely processed through CanadaHelps.",
        cta: "Donate Through CanadaHelps",
      },
      receipt: {
        eyebrow: "Tax Receipt",
        title: "Official tax receipts",
        description: "Official tax receipts are issued through CanadaHelps.",
      },
      contact: {
        eyebrow: "Parish Office",
        title: "Parish Office",
        description: "For questions about parish giving, please contact the parish office.",
        phone: "514-321-3644",
      },
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Contact Sainte-Angèle Parish",
      description:
        "For questions about Mass times, parish activities, hall rental, donations, or general information, please contact the parish office.",
      details: {
        eyebrow: "Church details",
        title: "Parish Contact Information",
        description: "You can reach the parish by phone or email during office hours.",
      },
      cards: {
        address: { title: "Address", eyebrow: "Visit us" },
        phone: { title: "Phone", eyebrow: "Call the office" },
        email: { title: "Email", eyebrow: "Parish contact" },
        office: { title: "Office hours", eyebrow: "Plan ahead" },
      },
    },
  },
  fr: {
    site: {
      name: "Église Sainte-Angèle",
      address: "5275 Boulevard Lavoisier, Montréal, Québec",
      phone: "514-321-3644",
      email: "angelemerici@videotron.ca",
      officeHours: "Lundi : 13 h – 17 h\nMardi : 13 h – 17 h\nJeudi : 13 h – 17 h",
      nextGathering: {
        day: "Messes du dimanche",
        time: "9 h (italien) • 11 h (français)",
      },
    },
    common: {
      donateNow: "Faire un don",
      planVisit: "Planifier une visite",
      learnMore: "En savoir plus",
      volunteerNow: "Devenir bénévole",
      contactTeam: "Contacter l'équipe",
      viewAllEvents: "Voir les événements",
      exploreSermons: "Voir les horaires",
      nextGathering: "Prochain rassemblement",
    },
    navigation: [
      { href: "", label: "Accueil" },
      { href: "/about", label: "À propos" },
      { href: "/location-de-salle", label: "Salle" },
      { href: "/team", label: "Équipe" },
      { href: "/events", label: "Événements" },
      { href: "/sermons", label: "Sermons" },
      { href: "/volunteer", label: "Bénévolat" },
      { href: "/donate", label: "Dons" },
      { href: "/contact", label: "Contact" },
    ],
    footer: {
      description:
        "L'Église Sainte-Angèle est une paroisse catholique chaleureuse de Saint-Léonard où le culte, la prière et la vie communautaire sont vécus dans une atmosphère paisible et accueillante.",
      contactHeading: "Coordonnées",
      linksHeading: "Découvrir",
      links: [
        { href: "/about", label: "Histoire de l'église" },
        { href: "/location-de-salle", label: "Location de salle" },
        { href: "/events", label: "Événements à venir" },
        { href: "/sermons", label: "Horaire des messes" },
        { href: "/contact", label: "Visiter la paroisse" },
      ],
    },
    home: {
      hero: {
        eyebrow: "Paroisse catholique romaine à Saint-Léonard",
        description:
          "L'Église Sainte-Angèle accueille les paroissiens, les voisins et les visiteurs dans un lieu paisible de prière, de culte et de vie communautaire. Rejoignez-nous pour la messe, le recueillement et une présence paroissiale chaleureuse enracinée dans la foi.",
        panelTitle: "Horaire des messes",
        image: {
          src: "/home/hero-church.jpg",
          alt: "Intérieur de l'église Sainte-Angèle",
        },
        actions: [
          { href: "/about", label: "Découvrir la paroisse", variant: "primary" },
          { href: "/events", label: "Événements à venir", variant: "secondary" },
          { href: "/contact", label: "Contacter la paroisse", variant: "secondary" },
        ],
      },
      sections: {
        eyebrow: "Explorer",
        title: "Trouver sa place dans la vie paroissiale",
        description:
          "Découvrez la vie paroissiale, les événements à venir, les horaires des messes et les renseignements utiles pour visiter Sainte-Angèle.",
        cards: [
          {
            href: "/about",
            title: "À propos",
            description: "Lisez l'histoire de Sainte-Angèle et découvrez davantage la vie de la paroisse.",
            image: {
              src: "/home/about-thumb.jpg",
              alt: "Vue chaleureuse de l'intérieur de l'église Sainte-Angèle",
            },
          },
          {
            href: "/events",
            title: "Événements",
            description: "Consultez les activités paroissiales à venir et les avis préparés pour la communauté.",
            image: {
              src: "/home/events-thumb.jpg",
              alt: "Espace paroissial préparé pour une activité communautaire",
            },
          },
          {
            href: "/sermons",
            title: "Horaires des célébrations",
            description: "Retrouvez les horaires hebdomadaires des messes en italien et en français en un seul endroit.",
            image: {
              src: "/home/service-thumb.jpg",
              alt: "Autel et espace liturgique de la paroisse Sainte-Angèle",
            },
          },
          {
            href: "/contact",
            title: "Contact",
            description: "Trouvez l'adresse de l'église, le numéro de téléphone et les détails pratiques pour votre visite.",
            image: {
              src: "/home/contact-thumb.jpg",
              alt: "Entrée extérieure de la paroisse Sainte-Angèle",
            },
          },
        ],
      },
      events: {
        eyebrow: "Événements à venir",
        title: "Rassemblements paroissiaux en vedette",
        description: "",
        featured: {
          eyebrow: "Événement vedette",
          title: "Fête de Marie",
          date: "Samedi 15 août 2026",
          time: "À confirmer",
          description:
            "Joignez-vous à nous pour célébrer la Fête de Marie avec un temps de prière, de rassemblement et une procession mariale spéciale. Tous sont les bienvenus.",
          cta: "Ouvrir la page des événements",
          image: {
            src: "/home/featured-event-mary.jpg",
            alt: "Image de célébration paroissiale pour l'événement vedette",
          },
        },
      },
      schedule: {
        eyebrow: "Horaire des messes",
        title: "Messes hebdomadaires et horaires des célébrations",
        description: "",
      },
      volunteer: {
        eyebrow: "Servir ensemble",
        title: "Bénévolat et entraide dans la communauté",
        description:
          "Les paroissiens peuvent contribuer par la musique, l'accueil, les activités communautaires, les levées de fonds, l'entraide et d'autres formes de service tout au long de l'année.",
      },
      donate: {
        eyebrow: "Donner avec intention",
        title: "Soutenir le culte, l'entraide et la présence dans le quartier",
        description:
          "Soutenez la vie paroissiale, les actions caritatives, les activités communautaires et la mission continue de la paroisse Sainte-Angèle.",
      },
    },
    about: {
      eyebrow: "À propos de Sainte-Angèle",
      title: "Une paroisse enracinée dans la prière, la mémoire et le service fidèle",
      description:
        "La paroisse Sainte-Angèle sert la communauté de Saint-Léonard depuis 1962. Par la prière, la messe, les activités communautaires, le bénévolat et les initiatives caritatives, la paroisse continue d'accueillir des personnes de tous âges et de tous horizons.",
      story: {
        eyebrow: "Histoire de l'église",
        title: "Une présence paroissiale à Saint-Léonard depuis 1962",
        description: "",
        image: {
          src: "/home/about-thumb.jpg",
          alt: "Espace de rassemblement paroissial à Sainte-Angèle",
        },
        paragraphs: [
          "Fondée en 1962 par le cardinal Paul-Émile Léger, la paroisse Sainte-Angèle a été établie pour servir la communauté catholique grandissante de Saint-Léonard. L'église, construite à la fin des années 1960, demeure aujourd'hui un important lieu de rassemblement spirituel et communautaire.",
        ],
      },
      values: [
        {
          eyebrow: "Foi",
          title: "Prière et célébration",
          description:
            "La messe, la prière et la vie liturgique de l'Église demeurent au cœur de la paroisse Sainte-Angèle tout au long de l'année.",
        },
        {
          eyebrow: "Communauté",
          title: "Une communauté paroissiale active",
          description:
            "Soupers paroissiaux, activités de financement, célébrations saisonnières, bénévolat, initiatives caritatives et rassemblements communautaires font vivre la paroisse au quotidien.",
        },
        {
          eyebrow: "Service",
          title: "Foi, service et communauté",
          description:
            "La vie paroissiale va au-delà de la messe grâce au bénévolat, aux soupers communautaires, aux activités de financement, à l'entraide et aux célébrations saisonnières.",
        },
      ],
      expect: {
        eyebrow: "Préparer sa visite",
        title: "Ce que les visiteurs peuvent attendre",
        description: "",
        items: [
          {
            eyebrow: "Arrivée",
            title: "Un accueil paisible",
            description:
              "Les visiteurs sont accueillis dans un cadre calme et prière, propice au recueillement et au sentiment d'appartenance.",
          },
          {
            eyebrow: "Langues",
            title: "Messes en italien et en français",
            description:
              "La paroisse propose des horaires réguliers de messes en italien et en français pendant la semaine et la fin de semaine.",
          },
          {
            eyebrow: "Vie communautaire",
            title: "Un rythme paroissial vivant",
            description:
              "Les événements paroissiaux, le service bénévole, les soupers communautaires et les célébrations saisonnières font vivre une communauté chaleureuse.",
          },
        ],
      },
    },
    teamPage: {
      eyebrow: "Responsables paroissiaux",
      title: "Équipe paroissiale",
      description:
        "Découvrez les personnes qui contribuent au service et à la vie de la communauté paroissiale Sainte-Angèle.",
      placeholderLabel: "Photo à venir",
      sections: [
        {
          id: "clergy",
          eyebrow: "Clergé",
          title: "Clergé",
          description: "Le prêtre qui sert la paroisse par le culte, l'accompagnement pastoral et la vie communautaire.",
          members: [
            {
              name: "Father Aleksander Dudik",
              role: "Prêtre",
              photo: "/team/father-aleksander-dudik.jpg",
            },
          ],
        },
        {
          id: "administration",
          eyebrow: "Administration",
          title: "Administration",
          description: "Les membres du personnel qui soutiennent la communication, la gestion et la vie quotidienne de la paroisse.",
          members: [
            {
              name: "Sylvie Selesse",
              role: "Secrétaire",
              photo: "/team/placeholder.jpg",
            },
            {
              name: "Andrea Manganelli",
              role: "Trésorier",
              photo: "/team/placeholder.jpg",
            },
          ],
        },
        {
          id: "council",
          eyebrow: "Conseil paroissial et pastoral",
          title: "Conseil paroissial et pastoral",
          description: "Les personnes qui contribuent à l'orientation de la mission, de la planification et de la vie pastorale de la paroisse.",
          members: [
            {
              name: "Maria Pia DeLuca",
              role: "Conseillère paroissiale",
              photo: "/team/placeholder.jpg",
            },
            {
              name: "Lina Saracino",
              role: "Conseillère pastorale",
              photo: "/team/placeholder.jpg",
            },
          ],
        },
        {
          id: "wardens",
          eyebrow: "Marguilliers",
          title: "Marguilliers",
          description: "Les marguilliers qui soutiennent l'administration pratique et la bonne gestion de la communauté paroissiale.",
          members: [
            {
              name: "Carmela Pepe",
              role: "Marguillière",
              photo: "/team/carmela-pepe.jpg",
            },
            {
              name: "Angelina Romano",
              role: "Marguillière",
              photo: "/team/placeholder.jpg",
            },
            {
              name: "Lucie Corrente",
              role: "Marguillière",
              photo: "/team/lucie-corrente.jpg",
            },
            {
              name: "Amide Fidèle",
              role: "Marguillier",
              photo: "/team/placeholder.jpg",
            },
            {
              name: "Nick Sbarra",
              role: "Marguillier",
              photo: "/team/nick-sbarra.jpg",
            },
            {
              name: "Vincent Poulin",
              role: "Marguillier",
              photo: "/team/placeholder.jpg",
            },
          ],
        },
        {
          id: "ministries",
          eyebrow: "Ministères",
          title: "Ministères",
          description: "Les responsables de ministères qui enrichissent le culte et la participation paroissiale tout au long de l'année.",
          members: [
            {
              name: "Jacquelin Deranne",
              role: "Directrice de la chorale",
              photo: "/team/placeholder.jpg",
            },
          ],
        },
      ],
    },
    hallRentalPage: {
      eyebrow: "Salle paroissiale",
      title: "Location de salle",
      description:
        "La paroisse Sainte-Angèle offre une salle qui peut être louée pour des événements privés et communautaires.",
      heroNote: "Disponible pour des événements privés et communautaires",
      placeholderLabel: "Photos à venir",
      heroImage: {
        src: "/hall/hall-1.jpg",
        alt: "Salle paroissiale Sainte-Angèle",
      },
      gallery: [
        {
          src: "/hall/hall-1.jpg",
          alt: "Vue générale de la salle paroissiale Sainte-Angèle",
        },
        {
          src: "/hall/hall-2.jpg",
          alt: "Aménagement pour événement dans la salle paroissiale Sainte-Angèle",
        },
        {
          src: "/hall/hall-3.jpg",
          alt: "Espace lumineux avec places assises dans la salle paroissiale Sainte-Angèle",
        },
        {
          src: "/hall/hall-4.jpg",
          alt: "Vue supplémentaire de la salle paroissiale Sainte-Angèle",
        },
        {
          src: "/hall/hall-5.jpg",
          alt: "Aménagement de la salle pour des rassemblements à Sainte-Angèle",
        },
      ],
      cards: {
        capacity: {
          eyebrow: "Capacité",
          title: "Jusqu'à 100 personnes",
          description: "La salle peut accueillir jusqu’à 100 personnes.",
        },
        suitable: {
          eyebrow: "Convient pour",
          title: "Événements privés et communautaires",
          description:
            "La salle peut être utilisée pour des anniversaires, des baptêmes, des réunions familiales, des événements communautaires et d'autres rassemblements approuvés par la paroisse.",
          items: [
            "Anniversaires",
            "Baptêmes",
            "Réunions familiales",
            "Événements communautaires",
            "Autres événements approuvés par la paroisse",
          ],
        },
        contact: {
          eyebrow: "Contact",
          title: "Réservations et renseignements",
          description:
            "Pour connaître les disponibilités, les tarifs et les détails de réservation, veuillez communiquer avec le bureau de la paroisse.",
          phoneLabel: "Téléphone",
          phone: "514-321-3644",
        },
      },
      features: {
        eyebrow: "Caractéristiques de la salle",
        title: "Caractéristiques de la salle",
        items: [
          "Capacité : Jusqu'à 100 personnes",
          "Tables et chaises incluses",
          "Espace avec scène disponible",
          "Grande salle lumineuse avec de grandes fenêtres",
          "Convient aux anniversaires, baptêmes, réunions familiales, événements communautaires et célébrations",
        ],
      },
      photosSection: {
        eyebrow: "Galerie",
        title: "Galerie de la salle",
        description: "",
      },
      cta: {
        eyebrow: "Contact",
        title: "Information pour la location de salle",
        description:
          "Vous souhaitez louer la salle paroissiale pour votre prochain événement? Communiquez avec le bureau de la paroisse pour connaître les disponibilités et les tarifs.",
        phone: "514-321-3644",
      },
    },
    events: [
      {
        title: "Fête de Marie",
        date: "Samedi 15 août 2026",
        time: "À confirmer",
        location: "Église Sainte-Angèle",
        description:
          "Joignez-vous à nous pour célébrer la Fête de Marie avec un temps de prière, de rassemblement et une procession mariale spéciale. Tous sont les bienvenus.",
        notes: [],
      },
      {
        title: "Vente de garage paroissiale",
        date: "À confirmer",
        time: "À confirmer",
        location: "Église Sainte-Angèle",
        description: "Vente de garage paroissiale à venir. Plus de détails suivront.",
        notes: [],
      },
    ],
    eventsPage: {
      eyebrow: "Événements paroissiaux",
      title: "Événements et activités paroissiales",
      description: "Consultez les prochaines activités paroissiales, célébrations et rassemblements communautaires de Sainte-Angèle.",
      calendar: {
        eyebrow: "À venir",
        title: "Activités paroissiales",
        description: "",
      },
      labels: {
        date: "Date",
        time: "Heure",
        location: "Lieu",
        notes: "Notes / confirmations",
      },
      callout: {
        eyebrow: "Mises à jour manuelles",
        title: "Les événements peuvent être ajustés au fur et à mesure des confirmations",
        description:
          "Utilisez le fichier de contenu partagé pour modifier rapidement une date, une note, une procession ou un détail de transport.",
        cta: "Contacter la paroisse",
      },
    },
    schedule: [
      {
        name: "Messe du dimanche",
        time: "Dimanche — 9 h",
        description: "Italien",
      },
      {
        name: "Messe du dimanche",
        time: "Dimanche — 11 h",
        description: "Français",
      },
      {
        name: "Messe en semaine",
        time: "Lundi — 19 h",
        description: "Italien",
      },
      {
        name: "Messe en semaine",
        time: "Mardi — 8 h 30",
        description: "Français",
      },
      {
        name: "Messe en semaine",
        time: "Mercredi — 19 h",
        description: "Italien",
      },
      {
        name: "Messe en semaine",
        time: "Jeudi — 8 h 30",
        description: "Français",
      },
      {
        name: "Messe en semaine",
        time: "Vendredi — 8 h 30",
        description: "Italien",
      },
      {
        name: "Messe anticipée",
        time: "Samedi — 16 h",
        description: "Italien",
      },
      {
        name: "Messe anticipée",
        time: "Samedi — 17 h",
        description: "Français",
      },
    ],
    sermons: {
      eyebrow: "Horaires des messes et culte",
      title: "Horaire hebdomadaire des messes",
      description: "",
      schedule: {
        eyebrow: "Rythme hebdomadaire",
        title: "Horaire actuel des célébrations",
        description:
          "L'horaire ci-dessous reflète les heures actuelles des messes hebdomadaires en italien et en français à Sainte-Angèle.",
      },
      library: {
        eyebrow: "Notes paroissiales",
        title: "Espace pour de futures mises à jour pastorales",
        description:
          "Ces espaces réservés peuvent plus tard accueillir des résumés d'homélies, des réflexions saisonnières ou des avis liturgiques importants.",
        items: [
          {
            eyebrow: "Espace réservé",
            title: "Notes d'homélie du dimanche",
            description:
              "Utilisez cet espace plus tard pour de courts résumés, des points de réflexion ou des messages clés du curé.",
            detail: "Contenu modifiable",
          },
          {
            eyebrow: "Espace réservé",
            title: "Mises à jour liturgiques saisonnières",
            description:
              "Un endroit flexible pour les notes de fêtes, les initiatives de prière ou les rappels de célébrations particulières.",
            detail: "Contenu modifiable",
          },
          {
            eyebrow: "Espace réservé",
            title: "Archives de réflexion paroissiale",
            description:
              "Réservez cette carte pour des notes d'homélies archivées, des réflexions pastorales ou des ressources de foi.",
            detail: "Contenu modifiable",
          },
        ],
      },
    },
    volunteerRoles: [
      {
        title: "Soutien aux événements et collectes de fonds",
        commitment: "Selon la saison et toute l'année",
        description: "Aidez à préparer et à soutenir les événements paroissiaux, les activités de financement et les rassemblements communautaires tout au long de l'année.",
        detail: "Un rôle pratique pour les bénévoles qui aiment aider en coulisses.",
      },
      {
        title: "Chorale et musique",
        commitment: "Chaque semaine ou selon la saison",
        description: "Soutenez les célébrations liturgiques, les fêtes et les rassemblements paroissiaux par le chant, la musique et le service de la chorale.",
        detail: "Convient aux musiciens d'expérience comme aux nouveaux bénévoles.",
      },
      {
        title: "Soutien à l’autel et à la liturgie",
        commitment: "Rotation planifiée",
        description: "Aidez à la préparation de l'autel, aux lectures, à la prière et aux autres besoins pratiques liés aux liturgies et célébrations paroissiales.",
        detail: "Une belle façon de servir la vie de prière de la paroisse.",
      },
      {
        title: "Accueil et rassemblements paroissiaux",
        commitment: "Flexible",
        description: "Aidez à accueillir les paroissiens, à organiser les rafraîchissements et à soutenir les soupers paroissiaux, réceptions et rassemblements communautaires.",
        detail: "Parfait pour des personnes chaleureuses et fiables.",
      },
      {
        title: "Soutien à la communauté",
        commitment: "Chaque mois",
        description: "Offrez un soutien concret aux besoins paroissiaux, aux œuvres de charité et aux activités qui renforcent la communauté au sens large.",
        detail: "Une occasion de service significative pour les paroissiens engagés.",
      },
    ],
    volunteerPage: {
      eyebrow: "Servir avec nous",
      title: "Faire du bénévolat dans la vie paroissiale de Sainte-Angèle",
      description:
        "Les bénévoles soutiennent la vie paroissiale, les activités communautaires, les collectes de fonds, les célébrations liturgiques, la chorale et la musique, ainsi que les besoins pratiques de la paroisse Sainte-Angèle.",
      primaryCta: "Contacter Maria Pia",
      roles: {
        eyebrow: "Possibilités de bénévolat",
        title: "Façons d'aider dans la paroisse",
        description: "Découvrez quelques-unes des façons concrètes dont les bénévoles soutiennent le culte, la vie communautaire et les activités paroissiales.",
      },
      contact: {
        eyebrow: "Coordonnatrice du bénévolat",
        title: "Coordonnatrice du bénévolat",
        description:
          "Vous souhaitez faire du bénévolat à la paroisse Sainte-Angèle? Les bénévoles aident lors des événements paroissiaux, des soupers communautaires, des activités de financement, de l'accueil et d'autres initiatives communautaires tout au long de l'année. Communiquez avec Maria Pia DeLuca pour plus d'information et pour connaître les possibilités de bénévolat actuelles.",
        name: "Maria Pia DeLuca",
        phoneLabel: "Téléphone",
        phone: "514-323-9092",
        languagesLabel: "Langues",
        languages: "Français, italien",
      },
    },
    donate: {
      eyebrow: "Don en ligne",
      title: "Soutenir la paroisse Sainte-Angèle",
      description:
        "Votre générosité aide à soutenir la vie paroissiale, les célébrations liturgiques, les activités communautaires, les œuvres de charité et l'entretien continu de nos installations.",
      primaryCta: "Donner par CanadaHelps",
      canadaHelpsUrl:
        "https://www.canadahelps.org/en/charities/fabrique-de-la-paroisse-de-ste-angele-de-merici-archidiocese/",
      support: {
        eyebrow: "Pourquoi votre soutien est important",
        title: "Pourquoi votre soutien est important",
        description: "",
        items: [
          {
            eyebrow: "Vie paroissiale",
            title: "Vie paroissiale",
            description: "Les dons soutiennent les célébrations liturgiques, la prière, la musique, l'accueil et la vie quotidienne de la communauté paroissiale.",
          },
          {
            eyebrow: "Activités communautaires",
            title: "Activités communautaires",
            description: "Votre soutien aide à rendre possibles les soupers paroissiaux, les célébrations saisonnières, les rassemblements et les activités qui unissent la communauté.",
          },
          {
            eyebrow: "Entretien de l'église",
            title: "Entretien de l'église",
            description: "Les contributions aident aussi à prendre soin de l'église et des espaces paroissiaux afin qu'ils demeurent accueillants, sécuritaires et bien entretenus.",
          },
        ],
      },
      online: {
        eyebrow: "Don en ligne",
        title: "Don sécurisé par CanadaHelps",
        description:
          "Les dons en ligne à la paroisse Sainte-Angèle sont traités de façon sécurisée par CanadaHelps.",
        cta: "Donner par CanadaHelps",
      },
      receipt: {
        eyebrow: "Reçu fiscal",
        title: "Reçus fiscaux officiels",
        description: "Les reçus fiscaux officiels sont émis par CanadaHelps.",
      },
      contact: {
        eyebrow: "Bureau paroissial",
        title: "Bureau paroissial",
        description: "Pour toute question au sujet des dons à la paroisse, veuillez communiquer avec le bureau paroissial.",
        phone: "514-321-3644",
      },
    },
    contact: {
      eyebrow: "Nous joindre",
      title: "Contacter la paroisse Sainte-Angèle",
      description:
        "Pour toute question concernant les messes, les activités paroissiales, la location de salle, les dons ou les renseignements généraux, veuillez communiquer avec le bureau paroissial.",
      details: {
        eyebrow: "Informations",
        title: "Coordonnées de la paroisse",
        description: "Vous pouvez joindre la paroisse par téléphone ou par courriel durant les heures de bureau.",
      },
      cards: {
        address: { title: "Adresse", eyebrow: "Venir à l'église" },
        phone: { title: "Téléphone", eyebrow: "Appeler le bureau" },
        email: { title: "Courriel", eyebrow: "Contact paroissial" },
        office: { title: "Heures du bureau", eyebrow: "Planifier" },
      },
    },
  },
  it: itContent,
} as const;
