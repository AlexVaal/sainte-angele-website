export const itContent = {
  site: {
    name: "Église Sainte-Angèle",
    address: "5275 Boulevard Lavoisier, Montréal, Québec",
    phone: "514-321-3644",
    email: "angelemerici@videotron.ca",
    officeHours: "Lunedì: 13:00 – 17:00\nMartedì: 13:00 – 17:00\nGiovedì: 13:00 – 17:00",
    nextGathering: {
      day: "Messe domenicali",
      time: "9:00 AM (Italiano) • 11:00 AM (Francese)",
    },
  },
  common: {
    donateNow: "Dona",
    planVisit: "Pianifica la visita",
    learnMore: "Scopri di più",
    volunteerNow: "Volontariato",
    contactTeam: "Contatta il team",
    viewAllEvents: "Vedi tutti gli eventi",
    exploreSermons: "Vedi gli orari delle Messe",
    nextGathering: "Prossimo incontro",
  },
  navigation: [
    { href: "", label: "Home" },
    { href: "/about", label: "Chi siamo" },
    { href: "/hall-rental", label: "Affitto sala" },
    { href: "/team", label: "Equipe parrocchiale" },
    { href: "/events", label: "Eventi" },
    { href: "/sermons", label: "Messe" },
    { href: "/volunteer", label: "Volontariato" },
    { href: "/donate", label: "Dona" },
    { href: "/contact", label: "Contatti" },
  ],
  footer: {
    description:
      "Église Sainte-Angèle è una calorosa parrocchia cattolica romana di Saint-Léonard dove preghiera, liturgia e vita comunitaria si vivono in un clima sereno e accogliente.",
    contactHeading: "Contatti",
    linksHeading: "Esplora",
    links: [
      { href: "/about", label: "Storia della parrocchia" },
      { href: "/hall-rental", label: "Affitto sala" },
      { href: "/events", label: "Prossimi eventi" },
      { href: "/sermons", label: "Orario delle Messe" },
      { href: "/contact", label: "Visita la parrocchia" },
    ],
  },
  home: {
    hero: {
      eyebrow: "Parrocchia cattolica romana a Saint-Léonard",
      description:
        "Église Sainte-Angèle accoglie parrocchiani, vicini e visitatori in un luogo sereno di preghiera, celebrazione e vita comunitaria. Unisciti a noi per la Messa, il raccoglimento e una presenza parrocchiale calorosa radicata nella fede.",
      panelTitle: "Orario delle Messe",
      image: {
        src: "/home/hero-church.jpg",
        alt: "Interno della chiesa di Sainte-Angèle",
      },
      actions: [
        { href: "/about", label: "Scopri la parrocchia", variant: "primary" },
        { href: "/events", label: "Prossimi eventi", variant: "secondary" },
        { href: "/contact", label: "Contatta la parrocchia", variant: "secondary" },
      ],
    },
    sections: {
      eyebrow: "Esplora",
      title: "Trova il tuo posto nella vita della parrocchia",
      description:
        "Scopri la vita parrocchiale, gli eventi in arrivo, gli orari delle Messe e le informazioni utili per visitare Sainte-Angèle.",
      cards: [
        {
          href: "/about",
          title: "Chi siamo",
          description: "Leggi la storia di Sainte-Angèle e scopri di più sulla vita della parrocchia.",
          image: {
            src: "/home/about-thumb.jpg",
            alt: "Vista accogliente dell'interno della chiesa di Sainte-Angèle",
          },
        },
        {
          href: "/events",
          title: "Eventi",
          description: "Consulta le prossime attività parrocchiali e gli avvisi preparati per la comunità.",
          image: {
            src: "/home/events-thumb.jpg",
            alt: "Spazio parrocchiale preparato per un evento comunitario",
          },
        },
        {
          href: "/sermons",
          title: "Orari delle Messe",
          description: "Trova in un unico posto l'orario settimanale delle Messe in italiano e in francese.",
          image: {
            src: "/home/service-thumb.jpg",
            alt: "Altare e ambiente liturgico della parrocchia Sainte-Angèle",
          },
        },
        {
          href: "/contact",
          title: "Contatti",
          description: "Trova l'indirizzo della chiesa, il numero di telefono e le informazioni pratiche per la tua visita.",
          image: {
            src: "/home/contact-thumb.jpg",
            alt: "Ingresso esterno della parrocchia Sainte-Angèle",
          },
        },
      ],
    },
    events: {
      eyebrow: "Prossimi eventi",
      title: "Incontri parrocchiali in evidenza",
      description: "",
      featured: {
        eyebrow: "Evento in evidenza",
        title: "Festa di Maria",
        date: "Sabato 15 agosto 2026",
        time: "Da confermare",
        description:
          "Unitevi a noi per celebrare la Festa di Maria con un momento di preghiera, comunità e una speciale processione mariana. Tutti sono benvenuti.",
        cta: "Apri la pagina degli eventi",
        image: {
          src: "/home/featured-event-mary.jpg",
          alt: "Immagine di una celebrazione parrocchiale per l'evento in evidenza",
        },
      },
    },
    schedule: {
      eyebrow: "Orario delle Messe",
      title: "Messe settimanali e orari delle celebrazioni",
      description: "",
    },
    volunteer: {
      eyebrow: "Servire insieme",
      title: "Volontariato e aiuto alla comunità",
      description:
        "I parrocchiani possono contribuire con la musica, l'accoglienza, le attività di raccolta fondi, gli incontri comunitari e altre forme di servizio durante l'anno.",
    },
    donate: {
      eyebrow: "Dona con uno scopo",
      title: "Sostieni la liturgia, l'aiuto al prossimo e la vita della comunità",
      description:
        "Sostieni la vita parrocchiale, le opere caritative, le attività comunitarie e la missione continua della parrocchia Sainte-Angèle.",
    },
  },
  about: {
    eyebrow: "Chi siamo",
    title: "Una parrocchia radicata nella preghiera, nella memoria e nel servizio fedele",
    description:
      "La parrocchia Sainte-Angèle serve la comunità di Saint-Léonard dal 1962. Attraverso la preghiera, la Messa, gli eventi comunitari, il volontariato e le iniziative caritative, la parrocchia continua ad accogliere persone di ogni età e provenienza.",
    story: {
      eyebrow: "Storia della chiesa",
      title: "Una presenza parrocchiale a Saint-Léonard dal 1962",
      description: "",
      image: {
        src: "/home/about-thumb.jpg",
        alt: "Spazio di incontro parrocchiale a Sainte-Angèle",
      },
      paragraphs: [
        "Fondata nel 1962 dal cardinale Paul-Émile Léger, la parrocchia Sainte-Angèle è nata per servire la crescente comunità cattolica di Saint-Léonard. L'edificio della chiesa fu completato alla fine degli anni 1960 e continua ancora oggi a essere un importante luogo di incontro spirituale e comunitario.",
      ],
    },
    values: [
      {
        eyebrow: "Fede",
        title: "Preghiera e liturgia",
        description:
          "La Messa, la preghiera e la vita liturgica della Chiesa restano al cuore della parrocchia Sainte-Angèle durante tutto l'anno.",
      },
      {
        eyebrow: "Comunità",
        title: "Una comunità parrocchiale attiva",
        description:
          "Cene parrocchiali, attività di raccolta fondi, celebrazioni stagionali, volontariato, iniziative caritative e incontri comunitari continuano a unire i parrocchiani in modo accogliente e concreto.",
      },
      {
        eyebrow: "Servizio",
        title: "Fede, servizio e comunità",
        description:
          "La vita parrocchiale va oltre la Messa grazie al volontariato, alle cene comunitarie, alle attività di raccolta fondi, al sostegno reciproco e alle celebrazioni stagionali.",
      },
    ],
    expect: {
      eyebrow: "Preparare la visita",
      title: "Cosa possono aspettarsi i visitatori",
      description: "",
      items: [
        {
          eyebrow: "Arrivo",
          title: "Un'accoglienza serena",
          description:
            "I visitatori sono accolti in un ambiente tranquillo e raccolto, pensato per la preghiera, il silenzio e il senso di appartenenza.",
        },
        {
          eyebrow: "Lingue",
          title: "Messe in italiano e in francese",
          description:
            "La parrocchia propone orari regolari di Messe in italiano e in francese durante la settimana e nel fine settimana.",
        },
        {
          eyebrow: "Vita comunitaria",
          title: "Un ritmo parrocchiale vivo",
          description:
            "Eventi parrocchiali, servizio volontario, cene comunitarie e celebrazioni stagionali contribuiscono a creare una comunità accogliente.",
        },
      ],
    },
  },
  teamPage: {
    eyebrow: "Responsabili parrocchiali",
    title: "Equipe parrocchiale",
    description:
      "Conosci le persone che sostengono e accompagnano la comunità parrocchiale di Sainte-Angèle.",
    placeholderLabel: "Foto in arrivo",
    sections: [
      {
        id: "clergy",
        eyebrow: "Clero",
        title: "Clero",
        description: "Il sacerdote che serve la parrocchia nella liturgia, nella cura pastorale e nella vita comunitaria.",
        members: [
          {
            name: "Father Aleksander Dudik",
            role: "Parroco",
            photo: "/team/father-aleksander-dudik.jpg",
          },
        ],
      },
      {
        id: "administration",
        eyebrow: "Amministrazione",
        title: "Amministrazione",
        description: "Le persone che sostengono la comunicazione quotidiana, la gestione e la vita dell'ufficio parrocchiale.",
        members: [
          {
            name: "Sylvie Selesse",
            role: "Segretaria",
            photo: "/team/placeholder.jpg",
          },
          {
            name: "Andrea Manganelli",
            role: "Tesoriere",
            photo: "/team/placeholder.jpg",
          },
        ],
      },
      {
        id: "council",
        eyebrow: "Consiglio parrocchiale e pastorale",
        title: "Consiglio parrocchiale e pastorale",
        description: "Le persone che aiutano a orientare la missione, la pianificazione e la vita pastorale della parrocchia.",
        members: [
          {
            name: "Maria Pia DeLuca",
            role: "Consigliere parrocchiale",
            photo: "/team/placeholder.jpg",
          },
          {
            name: "Lina Saracino",
            role: "Consigliere pastorale",
            photo: "/team/placeholder.jpg",
          },
        ],
      },
      {
        id: "wardens",
        eyebrow: "Fabbricieri",
        title: "Fabbricieri",
        description: "I fabbricieri che sostengono l'amministrazione pratica e la buona gestione della comunità parrocchiale.",
        members: [
          {
            name: "Carmela Pepe",
            role: "Fabbriciera",
            photo: "/team/carmela-pepe.jpg",
          },
          {
            name: "Angelina Romano",
            role: "Fabbriciera",
            photo: "/team/placeholder.jpg",
          },
          {
            name: "Lucie Corrente",
            role: "Fabbriciera",
            photo: "/team/lucie-corrente.jpg",
          },
          {
            name: "Amide Fidèle",
            role: "Fabbriciere",
            photo: "/team/placeholder.jpg",
          },
          {
            name: "Nick Sbarra",
            role: "Fabbriciere",
            photo: "/team/placeholder.jpg",
          },
          {
            name: "Vincent Poulin",
            role: "Fabbriciere",
            photo: "/team/placeholder.jpg",
          },
        ],
      },
      {
        id: "ministries",
        eyebrow: "Ministeri",
        title: "Ministeri",
        description: "I responsabili dei ministeri che arricchiscono la liturgia e la partecipazione parrocchiale durante tutto l'anno.",
        members: [
          {
            name: "Jacquelin Deranne",
            role: "Direttore del coro",
            photo: "/team/placeholder.jpg",
          },
        ],
      },
    ],
  },
  hallRentalPage: {
    eyebrow: "Sala parrocchiale",
    title: "Affitto sala",
    description:
      "La parrocchia Sainte-Angèle mette a disposizione una sala che può essere affittata per incontri privati e comunitari.",
    heroNote: "Disponibile per incontri privati e comunitari",
    placeholderLabel: "Foto della sala in arrivo",
    heroImage: {
      src: "/hall/hall-1.jpg",
      alt: "Sala parrocchiale di Sainte-Angèle",
    },
    gallery: [
      {
        src: "/hall/hall-1.jpg",
        alt: "Vista ampia della sala parrocchiale di Sainte-Angèle",
      },
      {
        src: "/hall/hall-2.jpg",
        alt: "Allestimento per un evento nella sala parrocchiale di Sainte-Angèle",
      },
      {
        src: "/hall/hall-3.jpg",
        alt: "Zona luminosa con posti a sedere nella sala parrocchiale di Sainte-Angèle",
      },
      {
        src: "/hall/hall-4.jpg",
        alt: "Un'altra vista della sala parrocchiale di Sainte-Angèle",
      },
      {
        src: "/hall/hall-5.jpg",
        alt: "Allestimento della sala per incontri a Sainte-Angèle",
      },
    ],
    cards: {
      capacity: {
        eyebrow: "Capienza",
        title: "Fino a 100 persone",
        description: "La sala può accogliere fino a 100 persone.",
      },
      suitable: {
        eyebrow: "Adatta per",
        title: "Incontri privati e comunitari",
        description:
          "La sala è disponibile per compleanni, battesimi, riunioni familiari, eventi comunitari e altri incontri approvati dalla parrocchia.",
        items: [
          "Compleanni",
          "Battesimi",
          "Riunioni familiari",
          "Eventi comunitari",
          "Altri incontri approvati dalla parrocchia",
        ],
      },
      contact: {
        eyebrow: "Contatti",
        title: "Prenotazioni e informazioni",
        description:
          "Per disponibilità, tariffe e dettagli sulla prenotazione, contatta l'ufficio parrocchiale.",
        phoneLabel: "Telefono",
        phone: "514-321-3644",
      },
    },
    features: {
      eyebrow: "Caratteristiche della sala",
      title: "Caratteristiche della sala",
      items: [
        "Capienza: Fino a 100 persone",
        "Tavoli e sedie disponibili",
        "Spazio con palco disponibile",
        "Sala luminosa con grandi finestre",
        "Adatta per compleanni, battesimi, riunioni familiari, eventi comunitari e celebrazioni",
      ],
    },
    photosSection: {
      eyebrow: "Galleria",
      title: "Galleria della sala",
      description: "",
    },
    cta: {
      eyebrow: "Contatti",
      title: "Informazioni per l'affitto della sala",
      description:
        "Vuoi affittare la sala parrocchiale per il tuo prossimo evento? Contatta l'ufficio parrocchiale per disponibilità e tariffe.",
      phone: "514-321-3644",
    },
  },
  events: [
    {
      title: "Festa di Maria",
      date: "Sabato 15 agosto 2026",
      time: "Da confermare",
      location: "Église Sainte-Angèle",
      description:
        "Unitevi a noi per celebrare la Festa di Maria con un momento di preghiera, comunità e una speciale processione mariana. Tutti sono benvenuti.",
      notes: [],
    },
    {
      title: "Vendita di garage parrocchiale",
      date: "To be confirmed",
      time: "To be confirmed",
      location: "Église Sainte-Angèle",
      description: "Prossima vendita di garage parrocchiale. Maggiori dettagli seguiranno.",
      notes: [],
    },
  ],
  eventsPage: {
    eyebrow: "Eventi parrocchiali",
    title: "Eventi e attività parrocchiali",
    description: "Consulta i prossimi eventi parrocchiali, le celebrazioni e gli incontri comunitari di Sainte-Angèle.",
    calendar: {
      eyebrow: "Prossimamente",
      title: "Attività parrocchiali",
      description: "",
    },
    labels: {
      date: "Data",
      time: "Orario",
      location: "Luogo",
      notes: "Note / conferme",
    },
    callout: {
      eyebrow: "Aggiornamenti",
      title: "Gli eventi possono essere aggiornati secondo le conferme",
      description:
        "Usa il contenuto condiviso per modificare facilmente una data, una nota, una processione o un dettaglio sul trasporto.",
      cta: "Contatta la parrocchia",
    },
  },
  schedule: [
    {
      name: "Messa domenicale",
      time: "Domenica — 9:00 AM",
      description: "Italiano",
    },
    {
      name: "Messa domenicale",
      time: "Domenica — 11:00 AM",
      description: "Francese",
    },
    {
      name: "Messa feriale",
      time: "Lunedì — 7:00 PM",
      description: "Italiano",
    },
    {
      name: "Messa feriale",
      time: "Martedì — 8:30 AM",
      description: "Francese",
    },
    {
      name: "Messa feriale",
      time: "Mercoledì — 7:00 PM",
      description: "Italiano",
    },
    {
      name: "Messa feriale",
      time: "Giovedì — 8:30 AM",
      description: "Francese",
    },
    {
      name: "Messa feriale",
      time: "Venerdì — 8:30 AM",
      description: "Italiano",
    },
    {
      name: "Messa prefestiva",
      time: "Sabato — 4:00 PM",
      description: "Italiano",
    },
    {
      name: "Messa prefestiva",
      time: "Sabato — 5:00 PM",
      description: "Francese",
    },
  ],
  sermons: {
    eyebrow: "Orari delle Messe e celebrazioni",
    title: "Orario settimanale delle Messe",
    description: "",
    schedule: {
      eyebrow: "Ritmo settimanale",
      title: "Orario attuale delle celebrazioni",
      description:
        "L'orario qui sotto riporta gli attuali orari delle Messe settimanali in italiano e in francese a Sainte-Angèle.",
    },
    library: {
      eyebrow: "Note parrocchiali",
      title: "Spazio per futuri aggiornamenti pastorali",
      description:
        "Questi spazi potranno in futuro accogliere sintesi di omelie, riflessioni stagionali o avvisi liturgici importanti.",
      items: [
        {
          eyebrow: "Spazio riservato",
          title: "Note dell'omelia domenicale",
          description:
            "Usa questo spazio in futuro per brevi riassunti, spunti di riflessione o messaggi principali del parroco.",
          detail: "Contenuto modificabile",
        },
        {
          eyebrow: "Spazio riservato",
          title: "Aggiornamenti liturgici stagionali",
          description:
            "Uno spazio flessibile per note sulle feste, iniziative di preghiera o promemoria di celebrazioni particolari.",
          detail: "Contenuto modificabile",
        },
        {
          eyebrow: "Spazio riservato",
          title: "Archivio di riflessioni parrocchiali",
          description:
            "Riserva questa scheda per note di omelie archiviate, riflessioni pastorali o risorse di fede.",
          detail: "Contenuto modificabile",
        },
      ],
    },
  },
  volunteerRoles: [
    {
      title: "Supporto a eventi e raccolte fondi",
      commitment: "Secondo la stagione e durante l'anno",
      description: "Aiuta a preparare e sostenere gli eventi parrocchiali, le attività di raccolta fondi e gli incontri comunitari durante l'anno.",
      detail: "Un ruolo pratico per chi ama dare una mano dietro le quinte.",
    },
    {
      title: "Coro e musica",
      commitment: "Ogni settimana o secondo la stagione",
      description: "Sostieni le celebrazioni liturgiche, le feste e gli incontri parrocchiali attraverso il canto, la musica e il servizio del coro.",
      detail: "Adatto sia a musicisti esperti sia a nuovi volontari.",
    },
    {
      title: "Supporto all'altare e alla liturgia",
      commitment: "Turnazione programmata",
      description: "Aiuta nella preparazione dell'altare, nelle letture, nella preghiera e negli altri bisogni pratici legati alle celebrazioni parrocchiali.",
      detail: "Un bel modo per servire la vita di preghiera della parrocchia.",
    },
    {
      title: "Accoglienza e incontri parrocchiali",
      commitment: "Flessibile",
      description: "Aiuta ad accogliere i parrocchiani, a organizzare i rinfreschi e a sostenere cene, ricevimenti e incontri comunitari.",
      detail: "Ideale per persone calorose e affidabili.",
    },
    {
      title: "Supporto alla comunità",
      commitment: "Ogni mese",
      description: "Offri un aiuto concreto ai bisogni della parrocchia, alle opere caritative e alle attività che rafforzano la comunità.",
      detail: "Un'opportunità significativa per i parrocchiani desiderosi di servire.",
    },
  ],
  volunteerPage: {
    eyebrow: "Servi con noi",
    title: "Volontariato nella vita parrocchiale di Sainte-Angèle",
    description:
      "I volontari sostengono la vita parrocchiale, gli eventi comunitari, le attività di raccolta fondi, le celebrazioni liturgiche, il coro e la musica, così come i bisogni pratici della parrocchia Sainte-Angèle.",
    primaryCta: "Contatta Maria Pia",
    roles: {
      eyebrow: "Opportunità di volontariato",
      title: "Modi per aiutare nella parrocchia",
      description: "Scopri alcuni dei modi concreti in cui i volontari sostengono la liturgia, la vita comunitaria e le attività parrocchiali.",
    },
    contact: {
      eyebrow: "Coordinatrice del volontariato",
      title: "Coordinatrice del volontariato",
      description:
        "Vuoi fare volontariato con la parrocchia Sainte-Angèle? I volontari aiutano negli eventi parrocchiali, nelle cene comunitarie, nelle attività di raccolta fondi, nell'accoglienza e in altre iniziative della comunità durante tutto l'anno. Contatta Maria Pia DeLuca per maggiori informazioni e per conoscere le attuali opportunità di volontariato.",
      name: "Maria Pia DeLuca",
      phoneLabel: "Telefono",
      phone: "514-323-9092",
      languagesLabel: "Lingue",
      languages: "Francese, italiano",
    },
  },
  donate: {
    eyebrow: "Donazione online",
    title: "Sostieni la parrocchia Sainte-Angèle",
    description:
      "La tua generosità aiuta a sostenere la vita parrocchiale, le celebrazioni liturgiche, le attività comunitarie, le opere di carità e la cura costante dei nostri locali.",
    primaryCta: "Dona tramite CanadaHelps",
    canadaHelpsUrl:
      "https://www.canadahelps.org/en/charities/fabrique-de-la-paroisse-de-ste-angele-de-merici-archidiocese/",
    support: {
      eyebrow: "Perché il tuo sostegno è importante",
      title: "Perché il tuo sostegno è importante",
      description: "",
      items: [
        {
          eyebrow: "Vita parrocchiale",
          title: "Vita parrocchiale",
          description: "Le donazioni sostengono le celebrazioni liturgiche, la preghiera, la musica, l'accoglienza e la vita quotidiana della comunità parrocchiale.",
        },
        {
          eyebrow: "Eventi comunitari",
          title: "Eventi comunitari",
          description: "Il tuo sostegno rende possibili cene parrocchiali, celebrazioni stagionali, incontri e altre attività che uniscono la comunità.",
        },
        {
          eyebrow: "Manutenzione della chiesa",
          title: "Manutenzione della chiesa",
          description: "Le offerte aiutano anche a prenderci cura della chiesa e degli spazi parrocchiali perché restino accoglienti, sicuri e ben mantenuti.",
        },
      ],
    },
    online: {
      eyebrow: "Donazione online",
      title: "Dona in sicurezza tramite CanadaHelps",
      description:
        "Le donazioni online alla parrocchia Sainte-Angèle sono elaborate in modo sicuro tramite CanadaHelps.",
      cta: "Dona tramite CanadaHelps",
    },
    receipt: {
      eyebrow: "Ricevuta fiscale",
      title: "Ricevute fiscali ufficiali",
      description: "Le ricevute fiscali ufficiali sono emesse tramite CanadaHelps.",
    },
    contact: {
      eyebrow: "Ufficio parrocchiale",
      title: "Ufficio parrocchiale",
      description: "Per domande sulle donazioni alla parrocchia, contatta l'ufficio parrocchiale.",
      phone: "514-321-3644",
    },
  },
  contact: {
    eyebrow: "Contattaci",
    title: "Aiutare i visitatori a contattare la chiesa con semplicità",
    description:
      "Questa pagina rimane volutamente semplice e chiara, così chi visita per la prima volta trova subito le informazioni essenziali.",
    details: {
      eyebrow: "Informazioni",
      title: "Tutto il necessario per una prima visita",
      description: "Le schede di contatto presentano le informazioni essenziali con chiarezza, senza appesantire la pagina.",
    },
    cards: {
      address: { title: "Indirizzo", eyebrow: "Raggiungere la chiesa" },
      phone: { title: "Telefono", eyebrow: "Chiamare l'ufficio" },
      email: { title: "Email", eyebrow: "Contatto parrocchiale" },
      office: { title: "Orari dell'ufficio", eyebrow: "Pianificare" },
    },
  },
} as const;
